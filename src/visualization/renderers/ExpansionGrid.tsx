import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Metric expansion, made draggable.
 *
 * The single hardest idea in cosmology to picture is that space itself grows,
 * with no centre and no edge. This figure makes that arguable rather than
 * assertable: the reader drags the scale factor and can check for themselves
 * that (a) every galaxy recedes from every other, (b) no galaxy is at the
 * middle, (c) more distant pairs separate faster, and (d) the light wave is
 * stretched by exactly the same factor that stretched the distances.
 *
 * Point (d) is the payoff. Redshift is not a separate phenomenon bolted onto
 * expansion — it *is* expansion, measured with light.
 */
export default function ExpansionGrid({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  // Scale factor at the moment the light was emitted. a = 1 is now, so the
  // slider runs from the distant past up to the present and no further:
  // "emitted in the future" is not a thing an observer can look at.
  const [scale, setScale] = useState(0.4);
  const [playing, setPlaying] = useState(!reducedMotion);

  // Comoving positions: fixed coordinates that never change. Expansion is
  // entirely in the multiplication by `scale` at draw time — which is exactly
  // how the real thing is modelled.
  const galaxies = useMemo(() => {
    let seed = 424242;
    const random = (): number => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };
    const points: Array<{ cx: number; cy: number; r: number; tilt: number }> = [];
    for (let row = -2; row <= 2; row += 1) {
      for (let col = -2; col <= 2; col += 1) {
        points.push({
          // Jittered off the lattice so it reads as a universe, not graph paper.
          cx: col * 0.24 + (random() - 0.5) * 0.07,
          cy: row * 0.24 + (random() - 0.5) * 0.07,
          r: 3.4 + random() * 3.2,
          tilt: random() * Math.PI,
        });
      }
    }
    return points;
  }, []);

  useAnimationFrame(
    (delta) => {
      setScale((current) => {
        const next = current + delta * 0.1;
        return next >= 1 ? 0.2 : next;
      });
    },
    active && playing && !reducedMotion,
    Math.min(budget.targetFps, 30),
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0 || height === 0) return;

    const w = Math.round(width * dpr);
    const h = Math.round(height * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    context.clearRect(0, 0, w, h);

    // The grid occupies the top portion; the light wave sits underneath.
    const gridH = h * 0.66;
    const cx = w / 2;
    const cy = gridH / 2;
    const unit = Math.min(w, gridH) * 0.92;

    // ---- Comoving grid ---------------------------------------------------
    // Grid lines stretch with the scale factor: this is the "space itself"
    // part, and it is why no galaxy needs to move through the grid.
    context.strokeStyle = 'rgba(148,162,192,0.16)';
    context.lineWidth = dpr;
    for (let i = -3; i <= 3; i += 1) {
      const offset = i * 0.24 * scale * unit;
      context.beginPath();
      context.moveTo(cx + offset, 0);
      context.lineTo(cx + offset, gridH);
      context.stroke();
      context.beginPath();
      context.moveTo(0, cy + offset);
      context.lineTo(w, cy + offset);
      context.stroke();
    }

    // ---- Galaxies --------------------------------------------------------
    const reference = galaxies[12]; // the centre of the 5×5 lattice
    for (let i = 0; i < galaxies.length; i += 1) {
      const g = galaxies[i]!;
      const x = cx + g.cx * scale * unit;
      const y = cy + g.cy * scale * unit;
      if (x < -20 || x > w + 20 || y < -20 || y > gridH + 20) continue;

      const isReference = g === reference;
      const radius = g.r * dpr;

      // Sightline from the reference galaxy: makes "every pair separates"
      // visible rather than asserted.
      if (!isReference && reference) {
        context.beginPath();
        context.moveTo(cx + reference.cx * scale * unit, cy + reference.cy * scale * unit);
        context.lineTo(x, y);
        context.strokeStyle = 'rgba(143,184,255,0.10)';
        context.stroke();
      }

      const glow = context.createRadialGradient(x, y, 0, x, y, radius * 3.2);
      glow.addColorStop(0, isReference ? 'rgba(255,236,190,0.85)' : 'rgba(190,210,250,0.55)');
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(x, y, radius * 3.2, 0, Math.PI * 2);
      context.fill();

      context.save();
      context.translate(x, y);
      context.rotate(g.tilt);
      context.beginPath();
      context.ellipse(0, 0, radius, radius * 0.45, 0, 0, Math.PI * 2);
      context.fillStyle = isReference ? '#fff4d6' : 'rgba(226,233,246,0.9)';
      context.fill();
      context.restore();
    }

    // ---- The stretched light wave ----------------------------------------
    const waveY = gridH + (h - gridH) * 0.52;
    const waveLeft = w * 0.08;
    const waveRight = w * 0.92;
    // The wave drawn is the light as it ARRIVES. Emitted at scale factor a and
    // observed now (a = 1), its wavelength has been stretched by 1/a — so the
    // earlier the emission, the LONGER and redder the wave. Drawing it the
    // other way round would invert the meaning of redshift.
    const emittedWavelength = w * 0.055;
    const wavelength = emittedWavelength / Math.max(0.2, scale);

    context.beginPath();
    for (let x = waveLeft; x <= waveRight; x += dpr) {
      const phase = ((x - waveLeft) / wavelength) * Math.PI * 2;
      const y = waveY + Math.sin(phase) * (h - gridH) * 0.16;
      if (x === waveLeft) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    // Colour tracks the stretch: the more the wave has been stretched, the
    // redder it arrives. z = 0 is unshifted; z ≳ 3 is deep red.
    const redshiftNow = 1 / Math.max(0.2, scale) - 1;
    const redness = Math.min(1, redshiftNow / 3);
    context.strokeStyle = `rgb(${Math.round(120 + 135 * redness)}, ${Math.round(190 - 100 * redness)}, ${Math.round(255 - 160 * redness)})`;
    context.lineWidth = 2 * dpr;
    context.stroke();

    // ---- Readouts --------------------------------------------------------
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(226,233,246,0.9)';
    context.textBaseline = 'top';
    context.fillText(`scale factor a = ${scale.toFixed(2)}`, 12 * dpr, 12 * dpr);

    // The wave below is the light as it ARRIVES: emitted when the scale factor
    // was `scale`, observed now at a = 1, so stretched by 1/a.
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      scale >= 0.995
        ? 'emitted nearby — arrives unstretched, z = 0'
        : `emitted when a = ${scale.toFixed(2)} — arrives stretched, z = ${redshiftNow.toFixed(2)}`,
      12 * dpr,
      gridH + 8 * dpr,
    );
  }, [scale, width, height, dpr, galaxies]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={() => setPlaying((on) => !on)}
          disabled={reducedMotion}
        >
          {playing && !reducedMotion ? 'Pause' : 'Play'}
        </button>
        <label className={styles.sliderLabel}>
          <span className="ds-visually-hidden">Scale factor</span>
          <input
            className={styles.slider}
            type="range"
            min={0.2}
            max={1}
            step={0.01}
            value={scale}
            onChange={(event) => {
              setPlaying(false);
              setScale(Number(event.target.value));
            }}
          />
        </label>
        <output className={styles.readout}>a = {scale.toFixed(2)}</output>
      </div>
    </div>
  );
}
