import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The drop test, with the air switchable.
 *
 * With drag off the integration is exact constant acceleration, both objects
 * land together, and moving the mass sliders demonstrably changes nothing —
 * which is the point, and is much more convincing when the reader does it than
 * when a page asserts it.
 *
 * With drag on, a quadratic drag model is integrated: a = g − (k/m)v². The two
 * drag coefficients are illustrative values chosen so the contrast is visible
 * over a ten-metre drop, not measurements of a real ball and a real feather.
 * The spec caption says so.
 */

const G = 9.81;
const DROP_HEIGHT = 10; // m
/** ½ρC_dA, in kg/m. Compact object versus broad light one. */
const DRAG_A = 0.00226;
const DRAG_B = 0.0147;
const RESET_DELAY = 1.4; // s after the last landing

interface Faller {
  y: number;
  v: number;
  landedAt: number | null;
}

interface Sim {
  t: number;
  a: Faller;
  b: Faller;
  restingSince: number | null;
}

function fresh(): Sim {
  return {
    t: 0,
    a: { y: 0, v: 0, landedAt: null },
    b: { y: 0, v: 0, landedAt: null },
    restingSince: null,
  };
}

function step(faller: Faller, dt: number, t: number, mass: number, drag: number): void {
  if (faller.landedAt !== null) return;
  const acceleration = G - (drag / mass) * faller.v * faller.v;
  faller.v += acceleration * dt;
  faller.y += faller.v * dt;
  if (faller.y >= DROP_HEIGHT) {
    faller.y = DROP_HEIGHT;
    faller.landedAt = t;
  }
}

export default function FreeFallLab({
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

  const [air, setAir] = useState(true);
  const [massA, setMassA] = useState(1);
  const [massB, setMassB] = useState(0.005);
  const [generation, setGeneration] = useState(0);

  const reset = useCallback(() => {
    sim.current = fresh();
    setGeneration((value) => value + 1);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0 || height === 0) return;

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
    context.clearRect(0, 0, w, h);

    const top = 46 * dpr;
    const ground = h - 34 * dpr;
    const span = ground - top;
    const laneA = w * 0.32;
    const laneB = w * 0.68;
    const state = sim.current;

    // Ground and release line.
    context.strokeStyle = 'rgba(148,162,192,0.45)';
    context.lineWidth = 1.5 * dpr;
    context.beginPath();
    context.moveTo(0, ground);
    context.lineTo(w, ground);
    context.stroke();

    context.strokeStyle = 'rgba(148,162,192,0.2)';
    context.setLineDash([4 * dpr, 4 * dpr]);
    context.beginPath();
    context.moveTo(0, top);
    context.lineTo(w, top);
    context.stroke();
    context.setLineDash([]);

    context.font = `${10 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.9)';
    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.fillText(`${DROP_HEIGHT} m drop`, 8 * dpr, top - 5 * dpr);

    const drawFaller = (
      faller: Faller,
      x: number,
      label: string,
      colour: string,
      compact: boolean,
    ): void => {
      const y = top + (faller.y / DROP_HEIGHT) * span;
      context.fillStyle = colour;
      if (compact) {
        context.beginPath();
        context.arc(x, y, 9 * dpr, 0, Math.PI * 2);
        context.fill();
      } else {
        // A broad, light shape: large area for very little mass.
        context.beginPath();
        context.ellipse(x, y, 17 * dpr, 5 * dpr, 0, 0, Math.PI * 2);
        context.fill();
      }

      context.textAlign = 'center';
      context.textBaseline = 'top';
      context.font = `${10.5 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(226,233,246,0.92)';
      context.fillText(label, x, 8 * dpr);

      context.font = `${11 * dpr}px ui-monospace, monospace`;
      context.fillStyle = faller.landedAt === null ? 'rgba(148,162,192,0.95)' : colour;
      context.fillText(
        faller.landedAt === null
          ? `${state.t.toFixed(2)} s · ${faller.v.toFixed(1)} m/s`
          : `landed ${faller.landedAt.toFixed(2)} s`,
        x,
        24 * dpr,
      );
    };

    drawFaller(state.a, laneA, 'compact ball', '#ffd76e', true);
    drawFaller(state.b, laneB, 'broad, light', '#7fc7ff', false);

    // The verdict line.
    context.textAlign = 'center';
    context.textBaseline = 'bottom';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    const both = state.a.landedAt !== null && state.b.landedAt !== null;
    context.fillStyle = air ? 'rgba(255,143,110,0.95)' : 'rgba(79,224,192,0.95)';
    context.fillText(
      air
        ? both
          ? `air resistance on — ${(state.b.landedAt! - state.a.landedAt!).toFixed(2)} s apart`
          : 'air resistance on'
        : both
          ? 'no air — identical times, whatever the masses'
          : 'no air resistance',
      w / 2,
      h - 10 * dpr,
    );
  }, [width, height, dpr, air]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      // Fixed sub-steps: a quadratic-drag integration is stiff for the light
      // object, and a single 1/30 s Euler step visibly overshoots terminal speed.
      const substeps = 6;
      const dt = delta / substeps;
      for (let i = 0; i < substeps; i += 1) {
        state.t += dt;
        step(state.a, dt, state.t, massA, air ? DRAG_A : 0);
        step(state.b, dt, state.t, massB, air ? DRAG_B : 0);
      }
      if (state.a.landedAt !== null && state.b.landedAt !== null) {
        if (state.restingSince === null) state.restingSince = state.t;
        else if (state.t - state.restingSince > RESET_DELAY) sim.current = fresh();
      }
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  // A still frame whenever the loop is not running, and after any control change.
  useEffect(() => {
    draw();
  }, [draw, generation, massA, massB, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Ball</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass of the compact ball, kilograms</span>
            <input
              className={styles.slider}
              type="range"
              min={0.2}
              max={10}
              step={0.1}
              value={massA}
              onChange={(event) => {
                setMassA(Number(event.target.value));
                reset();
              }}
            />
          </label>
          <output className={styles.value}>{massA.toFixed(1)} kg</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Feather</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass of the broad light object, kilograms</span>
            <input
              className={styles.slider}
              type="range"
              min={0.002}
              max={0.2}
              step={0.002}
              value={massB}
              onChange={(event) => {
                setMassB(Number(event.target.value));
                reset();
              }}
            />
          </label>
          <output className={styles.value}>{(massB * 1000).toFixed(0)} g</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={air}
          onClick={() => {
            setAir((on) => !on);
            reset();
          }}
        >
          Air resistance
        </button>
        <button type="button" className={styles.toggle} onClick={reset}>
          Drop again
        </button>
      </div>
    </div>
  );
}
