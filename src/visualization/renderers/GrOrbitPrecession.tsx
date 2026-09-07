import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Newton's orbit and Einstein's, integrated side by side.
 *
 * Both start from Mercury's real aphelion position and speed and are advanced
 * with the same velocity-Verlet integrator. The only difference is one term:
 * the second orbit adds the leading general-relativistic correction
 * 3h²/(c²r²) to the acceleration, and the rosette that results is an output of
 * that term rather than a rotation applied afterwards. Set the strength to ×1
 * and the two orbits coincide exactly, as they do in the sky.
 *
 * Bodies are not to scale and one orbit is compressed into a few seconds.
 */

const GM_SUN = 1.32712e20; // m³/s²
const C2 = 299792458 ** 2;
const SEMI_MAJOR = 5.7909e10; // m
const ECCENTRICITY = 0.20563;
const R_APHELION = SEMI_MAJOR * (1 + ECCENTRICITY);
const V_APHELION = Math.sqrt((GM_SUN * (1 - ECCENTRICITY)) / (SEMI_MAJOR * (1 + ECCENTRICITY)));
const PERIOD = 2 * Math.PI * Math.sqrt(SEMI_MAJOR ** 3 / GM_SUN);
/** 6πGM / (c²a(1 − e²)) radians per orbit, in arcseconds. */
const TRUE_ADVANCE_ARCSEC =
  ((6 * Math.PI * GM_SUN) / (C2 * SEMI_MAJOR * (1 - ECCENTRICITY ** 2))) * 206264.806;

interface Body {
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: number[];
}

interface Sim {
  newton: Body;
  einstein: Body;
  elapsed: number;
}

function launch(): Body {
  return { x: R_APHELION, y: 0, vx: 0, vy: V_APHELION, trail: [R_APHELION, 0] };
}

function fresh(): Sim {
  return { newton: launch(), einstein: launch(), elapsed: 0 };
}

/** One velocity-Verlet step. `correction` is 0 for Newton, K for Einstein. */
function step(body: Body, dt: number, correction: number): void {
  const accel = (x: number, y: number, vx: number, vy: number): [number, number] => {
    const r2 = x * x + y * y;
    const r = Math.sqrt(r2);
    let factor = -GM_SUN / (r2 * r);
    if (correction > 0) {
      // Specific angular momentum, |r × v|, which the correction term needs.
      const h = x * vy - y * vx;
      factor *= 1 + (correction * 3 * h * h) / (C2 * r2);
    }
    return [factor * x, factor * y];
  };

  const [ax, ay] = accel(body.x, body.y, body.vx, body.vy);
  const nx = body.x + body.vx * dt + 0.5 * ax * dt * dt;
  const ny = body.y + body.vy * dt + 0.5 * ay * dt * dt;
  // The correction depends on velocity, so use the half-step velocity for it.
  const halfVx = body.vx + 0.5 * ax * dt;
  const halfVy = body.vy + 0.5 * ay * dt;
  const [nax, nay] = accel(nx, ny, halfVx, halfVy);
  body.vx += 0.5 * (ax + nax) * dt;
  body.vy += 0.5 * (ay + nay) * dt;
  body.x = nx;
  body.y = ny;
}

export default function GrOrbitPrecession({
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

  /** Log₁₀ of the multiplier applied to the relativistic term. */
  const [logStrength, setLogStrength] = useState(5.4);
  const [generation, setGeneration] = useState(0);
  const strength = 10 ** logStrength;
  const drawnAdvance = TRUE_ADVANCE_ARCSEC * strength;

  const reset = useCallback(() => {
    sim.current = fresh();
    setGeneration((value) => value + 1);
  }, []);

  useEffect(() => {
    reset();
  }, [reset, logStrength]);

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

    const cx = w / 2;
    const cy = h * 0.5;
    const scale = (Math.min(w, h) * 0.42) / R_APHELION;
    const state = sim.current;

    const drawTrail = (body: Body, colour: string, lineWidth: number): void => {
      if (body.trail.length < 4) return;
      context.strokeStyle = colour;
      context.lineWidth = lineWidth;
      context.beginPath();
      for (let i = 0; i < body.trail.length; i += 2) {
        const px = cx + body.trail[i]! * scale;
        const py = cy + body.trail[i + 1]! * scale;
        if (i === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.stroke();
    };

    drawTrail(state.newton, 'rgba(143,184,255,0.75)', 2 * dpr);
    drawTrail(state.einstein, 'rgba(255,143,110,0.85)', 1.6 * dpr);

    // The star.
    const glow = context.createRadialGradient(cx, cy, 4 * dpr, cx, cy, 30 * dpr);
    glow.addColorStop(0, 'rgba(255,214,110,0.5)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = glow;
    context.beginPath();
    context.arc(cx, cy, 30 * dpr, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#ffd76e';
    context.beginPath();
    context.arc(cx, cy, 8 * dpr, 0, Math.PI * 2);
    context.fill();

    for (const [body, colour] of [
      [state.newton, '#8fb8ff'],
      [state.einstein, '#ff8f6e'],
    ] as const) {
      context.fillStyle = colour;
      context.beginPath();
      context.arc(cx + body.x * scale, cy + body.y * scale, 4 * dpr, 0, Math.PI * 2);
      context.fill();
    }

    // ---- Legend and readouts ----------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${10.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#8fb8ff';
    context.fillText('Newton — closes exactly', 10 * dpr, 10 * dpr);
    context.fillStyle = '#ff8f6e';
    context.fillText('Einstein — creeps around', 10 * dpr, 26 * dpr);

    context.font = `${10 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `relativistic term ×${strength >= 1000 ? `${(strength / 1000).toFixed(0)}k` : strength.toFixed(0)}`,
      10 * dpr,
      46 * dpr,
    );
    context.fillText(`orbits: ${(state.elapsed / PERIOD).toFixed(1)}`, 10 * dpr, 62 * dpr);

    context.textBaseline = 'bottom';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText('Mercury’s real orbit, with the correction amplified', 10 * dpr, h - 8 * dpr);
  }, [width, height, dpr, strength]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      const substeps = 24;
      // About four seconds of wall time per orbit.
      const dt = (delta * (PERIOD / 4)) / substeps;
      for (let i = 0; i < substeps; i += 1) {
        step(state.newton, dt, 0);
        step(state.einstein, dt, strength);
        state.elapsed += dt;
      }
      state.newton.trail.push(state.newton.x, state.newton.y);
      state.einstein.trail.push(state.einstein.x, state.einstein.y);
      // The Newtonian trail retraces itself, so it never needs to be long.
      if (state.newton.trail.length > 700) state.newton.trail.splice(0, 2);
      if (state.einstein.trail.length > 5000) state.einstein.trail.splice(0, 2);
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
          <span className={styles.controlName}>Amplify</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Multiplier applied to the relativistic correction term
            </span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={6}
              step={0.05}
              value={logStrength}
              onChange={(event) => setLogStrength(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>×{strength.toPrecision(2)}</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={logStrength === 0}
          onClick={() => setLogStrength(0)}
        >
          True strength
        </button>
        <button type="button" className={styles.toggle} onClick={reset}>
          Restart
        </button>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        {logStrength === 0 ? (
          <>
            <strong>At the true strength the two orbits are indistinguishable.</strong> Mercury’s
            perihelion advances {TRUE_ADVANCE_ARCSEC.toFixed(4)} arcseconds per orbit — about 43 per
            century, and roughly one extra full turn every three million years.
          </>
        ) : (
          <>
            Drawn with the relativistic term multiplied by{' '}
            <strong>{strength.toPrecision(3)}</strong>, giving{' '}
            {(drawnAdvance / 3600).toPrecision(3)}° of precession per orbit. The real value is{' '}
            {TRUE_ADVANCE_ARCSEC.toFixed(4)} arcseconds per orbit — the same 42.98 per century that
            was measured before the theory existed.
          </>
        )}
      </p>
    </div>
  );
}
