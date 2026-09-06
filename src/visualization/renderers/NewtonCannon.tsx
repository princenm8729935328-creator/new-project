import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Newton's cannonball.
 *
 * The thought experiment that makes an orbit obvious: the ball is always
 * falling, and the only thing that changes with speed is how far around the
 * planet it gets before the ground arrives. Fire fast enough and the ground
 * never arrives.
 *
 * Trajectories are integrated under real inverse-square gravity (velocity-
 * Verlet, fixed sub-steps) rather than sketched, so the progression from a short
 * arc through ellipses to escape is genuine. No atmosphere, no rotation of the
 * planet, and the tower is drawn far taller than any real mountain.
 */

const GM = 3.986004e14; // m³/s²
const R = 6.371e6; // m
const TOWER = R * 0.09;
const LAUNCH_R = R + TOWER;
const MAX_TRAILS = 5;
/** Circular speed at the top of the tower, in km/s — the figure's opening shot. */
const CIRCULAR_KMS = Math.sqrt(GM / LAUNCH_R) / 1000;

interface Shot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  path: number[];
  done: boolean;
  speed: number;
}

function launch(speedKms: number): Shot {
  return {
    x: 0,
    y: -LAUNCH_R,
    vx: speedKms * 1000,
    vy: 0,
    path: [0, -LAUNCH_R],
    done: false,
    speed: speedKms,
  };
}

export default function NewtonCannon({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [speed, setSpeed] = useState(Number(CIRCULAR_KMS.toFixed(2)));
  const [generation, setGeneration] = useState(0);

  const current = useRef<Shot>(launch(Number(CIRCULAR_KMS.toFixed(2))));
  const history = useRef<Shot[]>([]);

  const fire = useCallback((kms: number) => {
    if (current.current.path.length > 6) {
      history.current = [current.current, ...history.current].slice(0, MAX_TRAILS);
    }
    current.current = launch(kms);
    setGeneration((value) => value + 1);
  }, []);

  const circular = CIRCULAR_KMS;
  const escape = circular * Math.SQRT2;

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
    const cy = h * 0.56;
    const view = R * 4.2;
    const scale = (Math.min(w, h) * 0.46) / view;

    const drawPath = (shot: Shot, alpha: number, colour: string): void => {
      if (shot.path.length < 4) return;
      context.strokeStyle = colour;
      context.globalAlpha = alpha;
      context.lineWidth = 1.6 * dpr;
      context.beginPath();
      for (let i = 0; i < shot.path.length; i += 2) {
        const px = cx + shot.path[i]! * scale;
        const py = cy + shot.path[i + 1]! * scale;
        if (i === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.stroke();
      context.globalAlpha = 1;
    };

    history.current.forEach((shot, index) => {
      drawPath(shot, 0.36 - index * 0.05, 'rgba(148,162,192,0.9)');
    });

    // The planet.
    const planetR = R * scale;
    const glow = context.createRadialGradient(cx, cy, planetR * 0.9, cx, cy, planetR * 1.5);
    glow.addColorStop(0, 'rgba(143,184,255,0.25)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = glow;
    context.beginPath();
    context.arc(cx, cy, planetR * 1.5, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#4a6fa5';
    context.beginPath();
    context.arc(cx, cy, planetR, 0, Math.PI * 2);
    context.fill();

    // The tower.
    context.strokeStyle = 'rgba(226,233,246,0.7)';
    context.lineWidth = 2 * dpr;
    context.beginPath();
    context.moveTo(cx, cy - planetR);
    context.lineTo(cx, cy - LAUNCH_R * scale);
    context.stroke();

    drawPath(current.current, 1, '#ffd76e');

    const shot = current.current;
    context.fillStyle = shot.done ? '#ff8f6e' : '#fff4d6';
    context.beginPath();
    context.arc(cx + shot.x * scale, cy + shot.y * scale, 3.4 * dpr, 0, Math.PI * 2);
    context.fill();

    // ---- Readouts ----------------------------------------------------------
    const kind =
      shot.speed >= escape - 0.005
        ? 'escapes — never returns'
        : shot.speed >= circular - 0.02 && shot.speed <= circular + 0.02
          ? 'circles the planet'
          : shot.speed > circular
            ? 'ellipse — swings out and comes back'
            : 'falls to the ground';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = shot.speed >= escape - 0.005 ? '#4fe0c0' : '#ffd76e';
    context.fillText(kind, 10 * dpr, 10 * dpr);
    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(`fired at ${shot.speed.toFixed(2)} km/s`, 10 * dpr, 28 * dpr);
    context.fillText(
      `circle ${circular.toFixed(2)} · escape ${escape.toFixed(2)} km/s`,
      10 * dpr,
      44 * dpr,
    );

    context.textAlign = 'center';
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillText(
      'no atmosphere · tower drawn far taller than any mountain',
      w / 2,
      h - 16 * dpr,
    );
  }, [width, height, dpr, circular, escape]);

  useAnimationFrame(
    (delta) => {
      const shot = current.current;
      if (!shot.done) {
        const substeps = 12;
        // About four seconds of wall time for one low circular orbit.
        const dt = (delta * 1400) / substeps;
        for (let i = 0; i < substeps; i += 1) {
          const r2 = shot.x * shot.x + shot.y * shot.y;
          const r = Math.sqrt(r2);
          const factor = -GM / (r2 * r);
          const ax = factor * shot.x;
          const ay = factor * shot.y;
          const nx = shot.x + shot.vx * dt + 0.5 * ax * dt * dt;
          const ny = shot.y + shot.vy * dt + 0.5 * ay * dt * dt;
          const nr2 = nx * nx + ny * ny;
          const nr = Math.sqrt(nr2);
          const nFactor = -GM / (nr2 * nr);
          shot.vx += 0.5 * (ax + nFactor * nx) * dt;
          shot.vy += 0.5 * (ay + nFactor * ny) * dt;
          shot.x = nx;
          shot.y = ny;
          if (nr <= R || nr > R * 5) {
            shot.done = true;
            break;
          }
        }
        shot.path.push(shot.x, shot.y);
        if (shot.path.length > 4000) shot.path.splice(0, 2);
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
          <span className={styles.controlName}>Fire at</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Muzzle speed in kilometres per second</span>
            <input
              className={styles.slider}
              type="range"
              min={2}
              max={12}
              step={0.05}
              value={speed}
              onChange={(event) => {
                const next = Number(event.target.value);
                setSpeed(next);
                fire(next);
              }}
            />
          </label>
          <output className={styles.value}>{speed.toFixed(2)} km/s</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={() => fire(speed)}>
          Fire again
        </button>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => {
            const next = Number(circular.toFixed(2));
            setSpeed(next);
            fire(next);
          }}
        >
          Just fast enough to circle
        </button>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => {
            const next = Number(escape.toFixed(2));
            setSpeed(next);
            fire(next);
          }}
        >
          Escape
        </button>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => {
            history.current = [];
            fire(speed);
          }}
        >
          Clear trails
        </button>
      </div>
    </div>
  );
}
