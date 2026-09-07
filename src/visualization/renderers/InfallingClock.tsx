import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Two clocks, and the divergence between them.
 *
 * Both readings are computed from the Schwarzschild geometry for a free fall
 * from rest at the chosen radius, so the central fact of the figure — that the
 * crossing takes a short, finite interval on the falling clock and never
 * happens at all in the distant clock's time — is the real prediction rather
 * than an animator's choice. The redshift shown on the escaping light uses the
 * same lapse factor.
 *
 * The fall is slowed enormously for viewing, and sizes are not to scale.
 */

/**
 * Proper time to fall from r₀ to r, in units of r_s/c, for a radial free fall
 * from rest. The standard cycloid result.
 */
function properTime(r0: number, r: number): number {
  // The cycloid solution, in units r_s = c = 1: parametrise the fall by η with
  // r = (r₀/2)(1 + cos η), giving τ = (r₀^{3/2}/2)(η + sin η).
  const eta = Math.acos(Math.min(1, Math.max(-1, (2 * r) / r0 - 1)));
  return (r0 ** 1.5 / 2) * (eta + Math.sin(eta));
}

/** The lapse factor √(1 − r_s/r): both the clock rate and the redshift. */
const lapse = (r: number): number => (r <= 1 ? 0 : Math.sqrt(1 - 1 / r));

export default function InfallingClock({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [start, setStart] = useState(8);
  const stateRef = useRef({ r: 8, distant: 0, done: 0 });

  const reset = useCallback(() => {
    stateRef.current = { r: start, distant: 0, done: 0 };
  }, [start]);

  useEffect(reset, [reset]);

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

    const st = stateRef.current;
    const cy = h * 0.52;
    const horizonX = w * 0.13;
    const startX = w * 0.82;
    const xOf = (r: number): number => horizonX + ((r - 1) / (start - 1)) * (startX - horizonX);

    // ---- The black hole ------------------------------------------------------
    context.fillStyle = '#05070d';
    context.beginPath();
    context.rect(0, 0, horizonX, h);
    context.fill();
    context.strokeStyle = 'rgba(255,143,110,0.9)';
    context.lineWidth = 2 * dpr;
    context.beginPath();
    context.moveTo(horizonX, 0);
    context.lineTo(horizonX, h);
    context.stroke();

    context.save();
    context.translate(horizonX - 8 * dpr, h * 0.5);
    context.rotate(-Math.PI / 2);
    context.textAlign = 'center';
    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(255,143,110,0.9)';
    context.fillText('horizon', 0, 0);
    context.restore();

    // ---- The falling clock ---------------------------------------------------
    const x = xOf(st.r);
    const shift = lapse(st.r);
    const fading = st.done > 0;
    const alpha = fading ? Math.max(0, 1 - st.done / 1.4) : 1;

    // Light climbing out, reddening as it goes.
    for (let i = 0; i < 4; i += 1) {
      const spread = (i + 1) * 22 * dpr;
      context.strokeStyle = `rgba(255,${Math.round(90 + 150 * shift)},${Math.round(60 + 160 * shift)},${(0.28 - i * 0.05) * alpha})`;
      context.lineWidth = 1.4 * dpr;
      context.beginPath();
      context.arc(x, cy, spread, -0.9, 0.9);
      context.stroke();
    }

    context.globalAlpha = alpha;
    context.fillStyle = `rgb(255,${Math.round(90 + 150 * shift)},${Math.round(60 + 160 * shift)})`;
    context.beginPath();
    context.arc(x, cy, 9 * dpr, 0, Math.PI * 2);
    context.fill();
    context.globalAlpha = 1;

    // ---- The distant clock ---------------------------------------------------
    context.fillStyle = '#8fb8ff';
    context.beginPath();
    context.arc(w * 0.93, cy, 7 * dpr, 0, Math.PI * 2);
    context.fill();

    // ---- Readouts -------------------------------------------------------------
    const fallen = properTime(start, Math.max(st.r, 1));
    const atHorizon = properTime(start, 1);

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#e2e9f6';
    context.fillText('One fall, two clocks.', 10 * dpr, 10 * dpr);

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = '#ffd66e';
    context.fillText(
      `falling clock  ${fallen.toFixed(2)} / ${atHorizon.toFixed(2)} to the horizon`,
      10 * dpr,
      28 * dpr,
    );
    context.fillStyle = '#8fb8ff';
    context.fillText(
      st.done > 0
        ? 'distant clock  → ∞ (the crossing never arrives)'
        : `distant clock  ${st.distant.toFixed(2)}`,
      10 * dpr,
      44 * dpr,
    );
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `redshift factor  ${shift < 0.001 ? '→ ∞' : `${(1 / shift).toFixed(2)}×`}`,
      10 * dpr,
      60 * dpr,
    );

    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(
      'times in units of r_s/c; the fall is slowed enormously',
      10 * dpr,
      h - 6 * dpr,
    );
  }, [width, height, dpr, start]);

  useAnimationFrame(
    (delta) => {
      const st = stateRef.current;
      if (st.done > 0) {
        st.done += delta;
        if (st.done > 2.4) {
          st.r = start;
          st.distant = 0;
          st.done = 0;
        }
        draw();
        return;
      }

      // Coordinate speed dr/dt for a radial infall from rest at r₀, in units
      // r_s = c = 1. It goes to zero at the horizon, which is exactly why the
      // distant clock's reading diverges.
      const r = st.r;
      const f = 1 - 1 / r;
      const v = Math.sqrt(Math.max(0, 1 / r - 1 / start));
      const drdt = (f * v) / Math.sqrt(Math.max(1e-9, 1 - 1 / start));
      st.r -= drdt * delta * 3.2;
      st.distant += delta * 3.2;

      if (st.r <= 1.0005) {
        st.r = 1;
        st.done = 0.001;
      }
      draw();
    },
    active && !reducedMotion,
    budget.targetFps,
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Dropped from</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Starting radius, in Schwarzschild radii</span>
            <input
              className={styles.slider}
              type="range"
              min={3}
              max={20}
              step={0.5}
              value={start}
              onChange={(event) => setStart(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{start.toFixed(1)} r_s</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={reset}>
          Drop again
        </button>
      </div>
      <p className={styles.readout}>
        Both accounts are correct. They are readings on two clocks in different states of motion,
        not competing claims about a single universal time.
      </p>
    </div>
  );
}
