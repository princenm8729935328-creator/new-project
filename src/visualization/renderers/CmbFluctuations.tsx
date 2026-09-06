import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * How uniform the microwave background really is.
 *
 * Every published CMB image is colour-amplified, and almost none of them say
 * so — which leaves readers with the impression of a violently blotchy sky.
 * This figure hands the amplification knob to the reader. At zero it is a flat
 * grey, which is what the sky actually looks like to one part in 100,000; wind
 * it up and the familiar press image appears.
 *
 * The pattern is generated, not Planck data: a sum of random sinusoidal modes
 * with a characteristic angular scale near one degree, which reproduces the
 * *look* of the real statistics without pretending to be a measurement. The
 * caption says so, and no individual spot means anything.
 */

interface Mode {
  kx: number;
  ky: number;
  phase: number;
  amplitude: number;
}

/** Roughly one-degree spots dominate; a spread of scales avoids a grid look. */
function buildModes(count: number): Mode[] {
  let seed = 987123;
  const random = (): number => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  return Array.from({ length: count }, () => {
    // Wavenumbers clustered around the first acoustic peak. The frame stands
    // for roughly a 20-degree patch of sky, and the real spots are about one
    // degree across — so the dominant mode has to fit ~20 cycles across the
    // frame, not one or two. An earlier version used k ≈ 8 and produced two
    // enormous blobs, which looks nothing like the real background.
    const k = 26 + random() * 34;
    const angle = random() * Math.PI * 2;
    return {
      kx: k * Math.cos(angle),
      ky: k * Math.sin(angle),
      phase: random() * Math.PI * 2,
      amplitude: 1 / (1 + Math.abs(k - 38) * 0.06),
    };
  });
}

export default function CmbFluctuations({ quality, width, height }: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** 0 = true contrast (invisible). 1 = the contrast used in press images. */
  const [amplification, setAmplification] = useState(0.55);

  const modes = useMemo(() => buildModes(quality === 'low' ? 26 : 46), [quality]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0 || height === 0) return;

    // Rendered at reduced resolution and scaled up: the field is smooth, so
    // full-resolution evaluation would burn phone battery for no visible gain.
    const cellSize = quality === 'low' ? 4 : 2;
    // The frame measures the whole stage, but this canvas occupies only the
    // part above the controls. Sizing the backing store from the stage gives it
    // a different aspect ratio from its CSS box, which stretches every circle
    // into an ellipse — so measure the canvas itself and fall back to the
    // stage only before layout has happened.
    const cssWidth = canvas.clientWidth || width;
    const cssHeight = canvas.clientHeight || height;
    const w = Math.round(cssWidth * dpr);
    const h = Math.round(cssHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const cols = Math.ceil(w / cellSize);
    const rows = Math.ceil(h / cellSize);

    let min = Infinity;
    let max = -Infinity;
    const field = new Float32Array(cols * rows);
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const u = col / cols;
        const v = (row / rows) * (h / w);
        let value = 0;
        for (const mode of modes) {
          value += mode.amplitude * Math.sin(mode.kx * u + mode.ky * v + mode.phase);
        }
        field[row * cols + col] = value;
        if (value < min) min = value;
        if (value > max) max = value;
      }
    }

    const span = max - min || 1;
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        // Normalised to −1…+1, then scaled by the reader's amplification.
        const normalised = ((field[row * cols + col]! - min) / span) * 2 - 1;
        const t = Math.max(-1, Math.min(1, normalised * amplification));
        // Cold (blue) to hot (red) through the neutral grey of the mean.
        const r = Math.round(126 + t * 120);
        const g = Math.round(132 - Math.abs(t) * 34);
        const b = Math.round(150 - t * 118);
        context.fillStyle = `rgb(${r},${g},${b})`;
        context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }

    // Vignette, so the patch reads as a piece of sky rather than a wallpaper.
    const vignette = context.createRadialGradient(
      w / 2,
      h / 2,
      Math.min(w, h) * 0.28,
      w / 2,
      h / 2,
      Math.max(w, h) * 0.72,
    );
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(4,6,13,0.55)');
    context.fillStyle = vignette;
    context.fillRect(0, 0, w, h);

    // The number that matters: what temperature range is on screen.
    const displayedRange = 2.7255 * 1e-5 * (amplification || 0.0001);
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.textBaseline = 'top';
    context.fillStyle = 'rgba(226,233,246,0.92)';
    context.fillText(
      amplification < 0.04
        ? 'true contrast — the sky really is this uniform'
        : `contrast amplified ×${Math.round(amplification * 100000).toLocaleString()}`,
      12 * dpr,
      12 * dpr,
    );
    context.fillStyle = 'rgba(148,162,192,0.9)';
    context.fillText(
      `variations shown: ±${(displayedRange * 1e6).toFixed(0)} µK about 2.7255 K`,
      12 * dpr,
      30 * dpr,
    );
  }, [amplification, width, height, dpr, modes, quality]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controls}>
        <label className={styles.sliderLabel}>
          <span className="ds-visually-hidden">Contrast amplification</span>
          <input
            className={styles.slider}
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={amplification}
            onChange={(event) => setAmplification(Number(event.target.value))}
          />
        </label>
        <output className={styles.readout}>
          {amplification < 0.04 ? 'real' : `×${Math.round(amplification * 100)}k`}
        </output>
      </div>
    </div>
  );
}
