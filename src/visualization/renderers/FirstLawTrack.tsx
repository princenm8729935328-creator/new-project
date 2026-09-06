import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * One push, then nothing — and a friction dial.
 *
 * The first law is easiest to believe by watching the retarding force go to
 * zero. Rough surface: the block stops quickly. Ice: much later. Zero friction:
 * it never stops, and the figure lets it run off one edge and back on the other
 * rather than quietly ending the demonstration.
 *
 * Deceleration is μg, independent of mass — which is why the block's mass is
 * not a control here; it would change nothing, and offering a slider that does
 * nothing would be a worse lesson than not offering one.
 */

const G = 9.81;
const MASS = 2; // kg — only used to report the friction force in newtons
const PUSH_SPEED = 6; // m/s
const TRACK = 24; // m, mapped across the frame
const RESTART_DELAY = 1.6; // s

interface Sim {
  x: number;
  v: number;
  idleFor: number;
}

const SURFACES: readonly { label: string; mu: number }[] = [
  { label: 'rough', mu: 0.4 },
  { label: 'wood', mu: 0.2 },
  { label: 'ice', mu: 0.03 },
  { label: 'frictionless', mu: 0 },
];

export default function FirstLawTrack({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim>({ x: 0, v: PUSH_SPEED, idleFor: 0 });
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [mu, setMu] = useState(0.2);
  const [generation, setGeneration] = useState(0);

  const push = useCallback(() => {
    sim.current = { x: 0, v: PUSH_SPEED, idleFor: 0 };
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

    const groundY = h * 0.66;
    const margin = 12 * dpr;
    const usable = w - margin * 2;
    const state = sim.current;

    // The surface, drawn rougher the more friction there is.
    context.strokeStyle = 'rgba(148,162,192,0.5)';
    context.lineWidth = 2 * dpr;
    context.beginPath();
    context.moveTo(0, groundY);
    context.lineTo(w, groundY);
    context.stroke();

    const teeth = Math.round(mu * 90);
    if (teeth > 0) {
      context.strokeStyle = 'rgba(148,162,192,0.35)';
      context.lineWidth = 1 * dpr;
      for (let i = 0; i < teeth; i += 1) {
        const x = (i / teeth) * w + 3 * dpr;
        context.beginPath();
        context.moveTo(x, groundY);
        context.lineTo(x - 5 * dpr, groundY + 7 * dpr);
        context.stroke();
      }
    }

    // Metre marks, so "further" is measurable rather than impressionistic.
    context.fillStyle = 'rgba(148,162,192,0.5)';
    context.font = `${9 * dpr}px ui-monospace, monospace`;
    context.textAlign = 'center';
    context.textBaseline = 'top';
    for (let metre = 0; metre <= TRACK; metre += 6) {
      const x = margin + (metre / TRACK) * usable;
      context.fillRect(x, groundY - 5 * dpr, 1 * dpr, 5 * dpr);
      // The end labels are anchored inward so they are not half off the canvas.
      context.textAlign = metre === 0 ? 'left' : metre === TRACK ? 'right' : 'center';
      context.fillText(`${metre} m`, x, groundY + 10 * dpr);
    }
    context.textAlign = 'left';

    // The block.
    const blockX = margin + (state.x / TRACK) * usable;
    const size = 22 * dpr;
    context.fillStyle = state.v > 0.001 ? '#ffd76e' : 'rgba(255,214,110,0.45)';
    context.fillRect(blockX - size / 2, groundY - size, size, size);

    // The only horizontal force after the push.
    const frictionForce = mu * MASS * G;
    if (state.v > 0.001 && frictionForce > 0) {
      const length = Math.min(60 * dpr, 14 * dpr + frictionForce * 6 * dpr);
      const tipX = blockX - size / 2 - length;
      const y = groundY - size / 2;
      context.strokeStyle = '#ff8f6e';
      context.lineWidth = 2.4 * dpr;
      context.beginPath();
      context.moveTo(blockX - size / 2, y);
      context.lineTo(tipX + 8 * dpr, y);
      context.stroke();
      context.fillStyle = '#ff8f6e';
      context.beginPath();
      context.moveTo(tipX, y);
      context.lineTo(tipX + 9 * dpr, y - 5 * dpr);
      context.lineTo(tipX + 9 * dpr, y + 5 * dpr);
      context.closePath();
      context.fill();
    }

    // ---- Readouts ----------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = mu === 0 ? '#4fe0c0' : 'rgba(226,233,246,0.92)';
    context.fillText(
      mu === 0 ? 'No friction — it never stops.' : 'One push, then only friction.',
      10 * dpr,
      10 * dpr,
    );

    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(`speed ${state.v.toFixed(2)} m/s`, 10 * dpr, 28 * dpr);
    // Kinetic friction acts only while the block is moving, so the readout
    // drops to zero the instant it stops — as it must.
    const actingFriction = state.v > 0.001 ? frictionForce : 0;
    context.fillStyle = actingFriction > 0 ? '#ff8f6e' : 'rgba(148,162,192,0.6)';
    context.fillText(
      `friction ${actingFriction.toFixed(2)} N${actingFriction === 0 ? ' — nothing acts' : ''}`,
      10 * dpr,
      44 * dpr,
    );

    if (mu > 0) {
      const stopping = (PUSH_SPEED * PUSH_SPEED) / (2 * mu * G);
      context.textAlign = 'right';
      context.fillStyle = 'rgba(148,162,192,0.85)';
      context.font = `${10 * dpr}px system-ui, sans-serif`;
      context.fillText(`stops after ${stopping.toFixed(1)} m`, w - 10 * dpr, 10 * dpr);
    }
  }, [width, height, dpr, mu]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      if (state.v > 0.001) {
        // a = −μg, independent of mass.
        state.v = Math.max(0, state.v - mu * G * delta);
        state.x += state.v * delta;
        if (state.x > TRACK) state.x -= TRACK; // wrap, so a frictionless block keeps going
      } else {
        state.idleFor += delta;
        if (state.idleFor > RESTART_DELAY) sim.current = { x: 0, v: PUSH_SPEED, idleFor: 0 };
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
          <span className={styles.controlName}>Friction</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Coefficient of friction</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={0.4}
              step={0.01}
              value={mu}
              onChange={(event) => {
                setMu(Number(event.target.value));
                push();
              }}
            />
          </label>
          <output className={styles.value}>μ = {mu.toFixed(2)}</output>
        </div>
      </div>
      <div className={styles.toggles}>
        {SURFACES.map((surface) => (
          <button
            key={surface.label}
            type="button"
            className={styles.toggle}
            aria-pressed={Math.abs(mu - surface.mu) < 0.005}
            onClick={() => {
              setMu(surface.mu);
              push();
            }}
          >
            {surface.label}
          </button>
        ))}
        <button type="button" className={styles.toggle} onClick={push}>
          Push again
        </button>
      </div>
    </div>
  );
}
