import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Two light clocks, one moving, and the diagonal that explains everything.
 *
 * The figure is honest in the one way that matters: the drawn pulse in the
 * moving clock travels at exactly the same drawn speed as the pulse in the
 * stationary one. Its vertical component is therefore c·√(1 − β²), which makes
 * the moving clock's tick period γ times longer — not because the code applies
 * a dilation factor, but because it has no choice once the speed is fixed. The
 * tick counters diverge as a consequence of the geometry.
 *
 * Sizes are illustrative. A real light clock one metre tall ticks about 150
 * million times a second.
 */

const RESET_TICKS = 40;

interface Sim {
  /** Elapsed lab time, in drawn seconds. */
  t: number;
  restPhase: number;
  restTicks: number;
  movingPhase: number;
  movingTicks: number;
  movingX: number;
  trail: number[];
}

function fresh(): Sim {
  return {
    t: 0,
    restPhase: 0,
    restTicks: 0,
    movingPhase: 0,
    movingTicks: 0,
    movingX: 0,
    trail: [],
  };
}

export default function LightClock({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim>(fresh());
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [beta, setBeta] = useState(0.8);
  const [generation, setGeneration] = useState(0);
  const gamma = 1 / Math.sqrt(1 - beta * beta);

  const reset = useCallback(() => {
    sim.current = fresh();
    setGeneration((value) => value + 1);
  }, []);

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

    const state = sim.current;
    const mirrorGap = Math.min(h * 0.26, w * 0.3);
    const restCx = w * 0.22;
    const topA = h * 0.14;
    const topB = h * 0.58;

    const drawClock = (
      cx: number,
      top: number,
      phase: number,
      label: string,
      ticks: number,
      colour: string,
    ): void => {
      const halfWidth = Math.min(30 * dpr, w * 0.1);
      context.strokeStyle = 'rgba(226,233,246,0.7)';
      context.lineWidth = 2.5 * dpr;
      context.beginPath();
      context.moveTo(cx - halfWidth, top);
      context.lineTo(cx + halfWidth, top);
      context.moveTo(cx - halfWidth, top + mirrorGap);
      context.lineTo(cx + halfWidth, top + mirrorGap);
      context.stroke();

      // `phase` runs 0→1 up, 1→2 down.
      const fraction = phase < 1 ? phase : 2 - phase;
      const y = top + mirrorGap - fraction * mirrorGap;
      context.fillStyle = colour;
      context.beginPath();
      context.arc(cx, y, 4.5 * dpr, 0, Math.PI * 2);
      context.fill();

      context.textAlign = 'left';
      context.textBaseline = 'top';
      context.font = `${10.5 * dpr}px system-ui, sans-serif`;
      context.fillStyle = colour;
      context.fillText(label, 10 * dpr, top - 16 * dpr);
      context.font = `${11 * dpr}px ui-monospace, monospace`;
      context.fillStyle = 'rgba(148,162,192,0.95)';
      context.textAlign = 'right';
      context.fillText(`${ticks} ticks`, w - 10 * dpr, top - 15 * dpr);
    };

    // ---- Stationary clock -------------------------------------------------
    drawClock(
      restCx,
      topA,
      state.restPhase,
      'At rest — straight up and down',
      state.restTicks,
      '#66e0d4',
    );

    // ---- Moving clock: the trail is the argument --------------------------
    if (state.trail.length >= 4) {
      context.strokeStyle = 'rgba(255,214,110,0.35)';
      context.lineWidth = 1.4 * dpr;
      context.beginPath();
      for (let i = 0; i < state.trail.length; i += 2) {
        const px = state.trail[i]!;
        const py = topB + state.trail[i + 1]! * mirrorGap;
        if (i === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.stroke();
    }
    drawClock(
      state.movingX,
      topB,
      state.movingPhase,
      `Moving at ${beta.toFixed(2)}c — longer, diagonal path`,
      state.movingTicks,
      '#ffd76e',
    );

    // ---- Verdict ----------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#ffd76e';
    context.fillText(
      `γ = ${gamma.toFixed(3)} — the moving clock is behind by ${(state.restTicks - state.movingTicks).toFixed(0)} ticks`,
      10 * dpr,
      h - 22 * dpr,
    );
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText('both pulses move at the same drawn speed', 10 * dpr, h - 8 * dpr);
  }, [width, height, dpr, beta, gamma]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      const canvas = canvasRef.current;
      const cssWidth = canvas?.clientWidth || width;
      state.t += delta;

      // One half-tick of the rest clock every 0.75 s of drawn time.
      const restRate = delta / 0.75;
      state.restPhase += restRate;
      while (state.restPhase >= 2) {
        state.restPhase -= 2;
        state.restTicks += 1;
      }

      // The moving pulse spends part of its fixed speed going sideways, so its
      // vertical progress is slower by exactly √(1 − β²) = 1/γ.
      state.movingPhase += restRate / gamma;
      while (state.movingPhase >= 2) {
        state.movingPhase -= 2;
        state.movingTicks += 1;
      }

      // The horizontal speed has to be β times the *drawn* light speed, or the
      // diagonal would not represent light moving at c and the figure's whole
      // argument would be a lie. The rest clock's pulse covers one mirror gap
      // in 0.75 s, so that is the drawn light speed.
      const span = cssWidth * dpr;
      const canvasHeight = canvas?.clientHeight ? canvas.clientHeight * dpr : span;
      const mirrorGap = Math.min(canvasHeight * 0.26, span * 0.3);
      state.movingX += beta * (mirrorGap / 0.75) * delta;
      if (state.movingX > span + 34 * dpr) {
        state.movingX = -34 * dpr;
        state.trail.length = 0;
      }

      const fraction = state.movingPhase < 1 ? state.movingPhase : 2 - state.movingPhase;
      state.trail.push(state.movingX, 1 - fraction);
      if (state.trail.length > 1400) state.trail.splice(0, 2);

      if (state.restTicks >= RESET_TICKS) sim.current = fresh();
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    draw();
  }, [draw, generation, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Speed</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Speed of the moving clock, as a fraction of c
            </span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={0.98}
              step={0.01}
              value={beta}
              onChange={(event) => {
                setBeta(Number(event.target.value));
                reset();
              }}
            />
          </label>
          <output className={styles.value}>{beta.toFixed(2)} c</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={reset}>
          Restart
        </button>
        {[0, 0.5, 0.87, 0.98].map((value) => (
          <button
            key={value}
            type="button"
            className={styles.toggle}
            aria-pressed={Math.abs(beta - value) < 0.005}
            onClick={() => {
              setBeta(value);
              reset();
            }}
          >
            {value === 0 ? 'at rest' : `${value}c`}
          </button>
        ))}
      </div>
    </div>
  );
}
