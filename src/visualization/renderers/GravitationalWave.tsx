import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A ring of free masses, driven by a computed inspiral chirp.
 *
 * The strain applied to the ring is read from the waveform below it rather than
 * from an independent oscillator, so the ring visibly speeds up and grows as the
 * chirp does — which is the thing about a merger that a still image cannot
 * convey. The chirp itself comes from the leading-order inspiral result, in
 * which the frequency rises as (t_c − t)^(−3/8) and the amplitude as f^(2/3);
 * it is not LIGO data and the caption says so.
 *
 * The distortion is exaggerated by roughly twenty orders of magnitude.
 */

type Polarisation = 'plus' | 'cross';

const SAMPLES = 900;

/** Leading-order inspiral: frequency and amplitude against time to merger. */
function buildChirp(): { strain: Float32Array; frequency: Float32Array } {
  const strain = new Float32Array(SAMPLES);
  const frequency = new Float32Array(SAMPLES);
  const tau0 = 1;
  // Kept shallow enough that the highest drawn frequency is still sampled ~40
  // times per cycle: a steeper chirp aliases into a picket fence that reads as
  // the amplitude *falling* towards the merger, which is backwards.
  const tauEnd = 0.05;
  let phase = 0;
  for (let i = 0; i < SAMPLES; i += 1) {
    const tau = tau0 - (tau0 - tauEnd) * (i / (SAMPLES - 1));
    const f = Math.pow(tau0 / tau, 3 / 8);
    frequency[i] = f;
    phase += f * 0.05;
    strain[i] = Math.pow(f, 2 / 3) * Math.sin(phase);
  }
  // Normalise so the peak is 1.
  let peak = 0;
  for (let i = 0; i < SAMPLES; i += 1) peak = Math.max(peak, Math.abs(strain[i]!));
  for (let i = 0; i < SAMPLES; i += 1) strain[i] = strain[i]! / peak;
  return { strain, frequency };
}

interface Sim {
  index: number;
  restFor: number;
}

export default function GravitationalWave({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim>({ index: 0, restFor: 0 });
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [polarisation, setPolarisation] = useState<Polarisation>('plus');
  const chirp = useMemo(buildChirp, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0 || height === 0) return;

    const cssWidth = canvas.clientWidth || width;
    const cssHeight = canvas.clientHeight || height;
    const w = Math.round(cssWidth * dpr);
    const h = Math.round(cssHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    context.clearRect(0, 0, w, h);

    const index = Math.min(SAMPLES - 1, Math.floor(sim.current.index));
    const strain = chirp.strain[index]! * 0.34;

    // ---- The ring of free test masses --------------------------------------
    const ringCx = w / 2;
    const ringCy = h * 0.33;
    const ringR = Math.min(w * 0.22, h * 0.22);

    context.strokeStyle = 'rgba(148,162,192,0.25)';
    context.setLineDash([3 * dpr, 4 * dpr]);
    context.lineWidth = 1 * dpr;
    context.beginPath();
    context.arc(ringCx, ringCy, ringR, 0, Math.PI * 2);
    context.stroke();
    context.setLineDash([]);

    const count = quality === 'low' ? 12 : 20;
    context.fillStyle = '#66e0d4';
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2;
      const ux = Math.cos(angle);
      const uy = Math.sin(angle);
      // Transverse traceless strain: '+' stretches along the axes, '×' along
      // the diagonals. Both are area-preserving to first order.
      const dx = polarisation === 'plus' ? 0.5 * strain * ux : 0.5 * strain * uy;
      const dy = polarisation === 'plus' ? -0.5 * strain * uy : 0.5 * strain * ux;
      const px = ringCx + (ux + dx) * ringR;
      const py = ringCy + (uy + dy) * ringR;
      context.beginPath();
      context.arc(px, py, 3.4 * dpr, 0, Math.PI * 2);
      context.fill();
    }

    // ---- The chirp ---------------------------------------------------------
    const plotTop = h * 0.62;
    const plotH = h * 0.24;
    const plotLeft = 12 * dpr;
    const plotW = w - 24 * dpr;
    const midY = plotTop + plotH / 2;

    context.strokeStyle = 'rgba(148,162,192,0.2)';
    context.lineWidth = 1 * dpr;
    context.beginPath();
    context.moveTo(plotLeft, midY);
    context.lineTo(plotLeft + plotW, midY);
    context.stroke();

    context.strokeStyle = 'rgba(255,214,110,0.85)';
    context.lineWidth = 1.4 * dpr;
    context.beginPath();
    for (let i = 0; i < SAMPLES; i += 1) {
      const px = plotLeft + (i / (SAMPLES - 1)) * plotW;
      const py = midY - chirp.strain[i]! * (plotH / 2) * 0.92;
      if (i === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    }
    context.stroke();

    const playX = plotLeft + (index / (SAMPLES - 1)) * plotW;
    context.strokeStyle = 'rgba(102,224,212,0.9)';
    context.lineWidth = 1.6 * dpr;
    context.beginPath();
    context.moveTo(playX, plotTop - 4 * dpr);
    context.lineTo(playX, plotTop + plotH + 4 * dpr);
    context.stroke();

    // ---- Labels -------------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#66e0d4';
    context.fillText(
      polarisation === 'plus' ? 'Plus polarisation' : 'Cross polarisation',
      10 * dpr,
      8 * dpr,
    );
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText('stretch one way, squeeze the other', 10 * dpr, 24 * dpr);

    context.textAlign = 'right';
    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(255,214,110,0.95)';
    context.fillText(
      index >= SAMPLES - 2 ? 'merger' : `f × ${chirp.frequency[index]!.toFixed(1)}`,
      w - 10 * dpr,
      8 * dpr,
    );

    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText('real strain ≈ 10⁻²¹ — exaggerated here by ~10²⁰', 10 * dpr, h - 8 * dpr);
  }, [width, height, dpr, polarisation, chirp, quality]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      if (state.index < SAMPLES - 1) {
        state.index += delta * 150;
        if (state.index > SAMPLES - 1) state.index = SAMPLES - 1;
      } else {
        state.restFor += delta;
        if (state.restFor > 1.6) sim.current = { index: 0, restFor: 0 };
      }
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={polarisation === 'plus'}
          onClick={() => setPolarisation('plus')}
        >
          Plus
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={polarisation === 'cross'}
          onClick={() => setPolarisation('cross')}
        >
          Cross
        </button>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => {
            sim.current = { index: 0, restFor: 0 };
          }}
        >
          Replay the chirp
        </button>
      </div>
    </div>
  );
}
