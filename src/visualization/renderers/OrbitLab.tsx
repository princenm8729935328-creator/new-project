import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The orbit laboratory.
 *
 * One massless test particle, one fixed central mass, two dimensions,
 * velocity-Verlet with fixed sub-steps. Nothing else — no second body pulling
 * back, no third body, no atmosphere, no relativity. The spec caption states
 * every one of those assumptions, because a figure that looks like a simulation
 * has a duty to say what it is not simulating.
 *
 * The trajectory *classification* shown in the readout is not read off the
 * integrator: it is computed analytically from the launch conditions through
 * the specific orbital energy and the eccentricity, so it stays correct even
 * where the numerical path would drift.
 */

const GM_EARTH = 3.986004e14; // m³/s²
const R_EARTH = 6.371e6; // m

interface Sim {
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: number[];
  dead: boolean;
  elapsed: number;
}

export default function OrbitLab({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Earth masses. */
  const [centralMass, setCentralMass] = useState(1);
  /** Thousands of kilometres from the centre. */
  const [distance, setDistance] = useState(12);
  /** Launch speed, km/s, perpendicular to the radius. */
  const [speed, setSpeed] = useState(5.76);
  const [generation, setGeneration] = useState(0);

  const setup = useMemo(() => {
    const gm = GM_EARTH * centralMass;
    // Same mean density as Earth, so a heavier central body is also bigger.
    const radius = R_EARTH * Math.cbrt(centralMass);
    const r0 = distance * 1e6;
    const v0 = speed * 1000;

    const circular = Math.sqrt(gm / r0);
    const escape = circular * Math.SQRT2;
    const energy = (v0 * v0) / 2 - gm / r0; // J/kg
    const angularMomentum = r0 * v0;
    const eccentricity = Math.sqrt(
      Math.max(0, 1 + (2 * energy * angularMomentum * angularMomentum) / (gm * gm)),
    );

    let kind: 'collision' | 'circular' | 'ellipse-in' | 'ellipse-out' | 'escape';
    let apoapsis = r0;
    if (energy >= 0) {
      kind = 'escape';
      apoapsis = r0 * 3;
    } else {
      const semiMajor = -gm / (2 * energy);
      const periapsis = semiMajor * (1 - eccentricity);
      apoapsis = semiMajor * (1 + eccentricity);
      if (periapsis <= radius) kind = 'collision';
      else if (eccentricity < 0.012) kind = 'circular';
      else if (v0 < circular) kind = 'ellipse-in';
      else kind = 'ellipse-out';
    }

    const period = energy < 0 ? 2 * Math.PI * Math.sqrt((-gm / (2 * energy)) ** 3 / gm) : 0;
    const view = Math.max(apoapsis * 1.18, r0 * 1.35, radius * 2.2);

    return {
      gm,
      radius,
      r0,
      v0,
      circular,
      escape,
      energy,
      eccentricity,
      kind,
      view,
      // Aim for roughly six seconds of wall time per revolution.
      timeScale: (period > 0 ? period : 2 * Math.PI * Math.sqrt(r0 ** 3 / gm)) / 6,
    };
  }, [centralMass, distance, speed]);

  const sim = useRef<Sim>({ x: 0, y: 0, vx: 0, vy: 0, trail: [], dead: false, elapsed: 0 });

  const reset = useCallback(() => {
    sim.current = {
      x: setup.r0,
      y: 0,
      vx: 0,
      vy: setup.v0,
      trail: [],
      dead: false,
      elapsed: 0,
    };
  }, [setup]);

  useEffect(() => {
    reset();
    setGeneration((value) => value + 1);
  }, [reset]);

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

    const cx = w / 2;
    const cy = h * 0.46;
    const scale = (Math.min(w, h * 0.86) * 0.45) / setup.view;
    const state = sim.current;

    // Reference circle at the launch radius: makes "higher" and "lower" legible.
    context.strokeStyle = 'rgba(148,162,192,0.16)';
    context.lineWidth = 1 * dpr;
    context.setLineDash([3 * dpr, 4 * dpr]);
    context.beginPath();
    context.arc(cx, cy, setup.r0 * scale, 0, Math.PI * 2);
    context.stroke();
    context.setLineDash([]);

    // Trail.
    if (state.trail.length >= 4) {
      context.strokeStyle = state.dead ? 'rgba(255,143,110,0.6)' : 'rgba(127,199,255,0.65)';
      context.lineWidth = 1.6 * dpr;
      context.beginPath();
      for (let i = 0; i < state.trail.length; i += 2) {
        const px = cx + state.trail[i]! * scale;
        const py = cy + state.trail[i + 1]! * scale;
        if (i === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.stroke();
    }

    // Central body.
    const bodyR = Math.max(4 * dpr, setup.radius * scale);
    const glow = context.createRadialGradient(cx, cy, bodyR * 0.6, cx, cy, bodyR * 2.6);
    glow.addColorStop(0, 'rgba(143,184,255,0.30)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = glow;
    context.beginPath();
    context.arc(cx, cy, bodyR * 2.6, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#4a6fa5';
    context.beginPath();
    context.arc(cx, cy, bodyR, 0, Math.PI * 2);
    context.fill();

    // The craft.
    const px = cx + state.x * scale;
    const py = cy + state.y * scale;
    context.fillStyle = state.dead ? '#ff8f6e' : '#e2e9f6';
    context.beginPath();
    context.arc(px, py, 3.6 * dpr, 0, Math.PI * 2);
    context.fill();

    // ---- Readouts ---------------------------------------------------------
    const label: Record<typeof setup.kind, string> = {
      collision: 'falls back and hits the surface',
      circular: 'circular orbit',
      'ellipse-in': 'ellipse — launch point is the high side',
      'ellipse-out': 'ellipse — launch point is the low side',
      escape: 'escape trajectory — never returns',
    };
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle =
      setup.kind === 'escape' ? '#4fe0c0' : setup.kind === 'collision' ? '#ff8f6e' : '#8fb8ff';
    context.fillText(label[setup.kind], 10 * dpr, 10 * dpr);

    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `energy ${(setup.energy / 1e6).toFixed(1)} MJ/kg · e = ${setup.eccentricity.toFixed(2)}`,
      10 * dpr,
      28 * dpr,
    );
    context.fillText(
      `circular ${(setup.circular / 1000).toFixed(2)} · escape ${(setup.escape / 1000).toFixed(2)} km/s`,
      10 * dpr,
      44 * dpr,
    );

    context.textAlign = 'right';
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillText('one fixed central mass · no other bodies', w - 10 * dpr, h - 18 * dpr);
  }, [width, height, dpr, setup]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      if (!state.dead) {
        const substeps = 16;
        const dt = (delta * setup.timeScale) / substeps;
        for (let i = 0; i < substeps; i += 1) {
          const r2 = state.x * state.x + state.y * state.y;
          const r = Math.sqrt(r2);
          const factor = -setup.gm / (r2 * r);
          const ax = factor * state.x;
          const ay = factor * state.y;

          // Velocity-Verlet: position from current velocity and acceleration,
          // then velocity from the mean of old and new acceleration.
          const nx = state.x + state.vx * dt + 0.5 * ax * dt * dt;
          const ny = state.y + state.vy * dt + 0.5 * ay * dt * dt;
          const nr2 = nx * nx + ny * ny;
          const nr = Math.sqrt(nr2);
          const nFactor = -setup.gm / (nr2 * nr);
          state.vx += 0.5 * (ax + nFactor * nx) * dt;
          state.vy += 0.5 * (ay + nFactor * ny) * dt;
          state.x = nx;
          state.y = ny;
          state.elapsed += dt;

          if (nr <= setup.radius || nr > setup.view * 2.4) {
            state.dead = true;
            break;
          }
        }
        state.trail.push(state.x, state.y);
        if (state.trail.length > 3000) state.trail.splice(0, 2);
      } else if (setup.kind !== 'escape') {
        // A closed orbit that ended on the surface replays, so the reader is not
        // left staring at a stopped dot.
        state.elapsed += delta;
        if (state.elapsed > setup.timeScale * 2) reset();
      }
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
            <span className="ds-visually-hidden">Launch speed in kilometres per second</span>
            <input
              className={styles.slider}
              type="range"
              min={1}
              max={20}
              step={0.01}
              value={speed}
              onChange={(event) => setSpeed(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{speed.toFixed(2)} km/s</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Central body mass, in Earth masses</span>
            <input
              className={styles.slider}
              type="range"
              min={0.25}
              max={4}
              step={0.05}
              value={centralMass}
              onChange={(event) => setCentralMass(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{centralMass.toFixed(2)} M⊕</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Distance</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Launch distance from the centre, thousands of kilometres
            </span>
            <input
              className={styles.slider}
              type="range"
              min={11}
              max={70}
              step={0.5}
              value={distance}
              onChange={(event) => setDistance(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{distance.toFixed(0)} Mm</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => {
            reset();
            setGeneration((value) => value + 1);
          }}
        >
          Relaunch
        </button>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setSpeed(Number((setup.circular / 1000).toFixed(2)))}
        >
          Circular speed
        </button>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setSpeed(Number((setup.escape / 1000).toFixed(2)))}
        >
          Escape speed
        </button>
      </div>
    </div>
  );
}
