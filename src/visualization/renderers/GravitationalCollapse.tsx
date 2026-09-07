import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A core losing its support, with the outcome decided by one slider.
 *
 * The point of making support adjustable is that the two endings are not a
 * matter of degree. Above the threshold the contraction decelerates and stops
 * at an equilibrium radius; below it, contraction accelerates and the surface
 * passes through its own Schwarzschild radius. Watching the same initial
 * condition go two different ways is the argument that "collapse" is a
 * qualitative change rather than more compression.
 *
 * No hydrodynamics is solved. The radius follows a prescribed curve chosen so
 * that the two behaviours are distinguishable at this size, and the timescale
 * is expanded by many orders of magnitude.
 */

/** Support above this value finds an equilibrium; below it, collapse runs away. */
const THRESHOLD = 0.5;

interface Sim {
  /** Radius as a fraction of the starting radius. */
  radius: number;
  velocity: number;
  /** Seconds spent past the horizon crossing, for the fade-out. */
  since: number;
  collapsed: boolean;
}

export default function GravitationalCollapse({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [support, setSupport] = useState(0.75);
  const simRef = useRef<Sim>({ radius: 1, velocity: 0, since: 0, collapsed: false });

  const reset = useCallback(() => {
    simRef.current = { radius: 1, velocity: 0, since: 0, collapsed: false };
  }, []);

  useEffect(reset, [reset, support]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0 || height === 0) return;

    // Measure the canvas itself: it occupies only the area above the controls.
    const cssWidth = canvas.clientWidth || width;
    const cssHeight = canvas.clientHeight || height;
    const w = Math.round(cssWidth * dpr);
    const h = Math.round(cssHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    context.clearRect(0, 0, w, h);

    const sim = simRef.current;
    const cx = w * 0.5;
    const cy = h * 0.55;
    const startRadius = Math.min(w, h) * 0.26;
    // The Schwarzschild radius for this core, as a fraction of the start.
    const horizonFraction = 0.16;

    const drawnRadius = Math.max(sim.radius, horizonFraction * 0.98) * startRadius;
    const horizonPx = horizonFraction * startRadius;

    // ---- The core -----------------------------------------------------------
    if (!sim.collapsed) {
      // Escaping light reddens and dims as the surface nears its own horizon.
      const compactness = horizonFraction / Math.max(sim.radius, horizonFraction);
      const redshift = Math.sqrt(Math.max(0, 1 - compactness));
      const glow = context.createRadialGradient(cx, cy, 0, cx, cy, drawnRadius * 1.5);
      glow.addColorStop(
        0,
        `rgba(255,${Math.round(120 + 110 * redshift)},${Math.round(60 + 140 * redshift)},${0.25 + 0.6 * redshift})`,
      );
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(cx, cy, drawnRadius * 1.5, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = `rgb(255,${Math.round(110 + 120 * redshift)},${Math.round(50 + 150 * redshift)})`;
      context.globalAlpha = Math.max(0.15, redshift);
      context.beginPath();
      context.arc(cx, cy, drawnRadius, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha = 1;
    } else {
      context.fillStyle = '#05070d';
      context.beginPath();
      context.arc(cx, cy, horizonPx, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = 'rgba(255,143,110,0.9)';
      context.lineWidth = 2 * dpr;
      context.beginPath();
      context.arc(cx, cy, horizonPx, 0, Math.PI * 2);
      context.stroke();
    }

    // The Schwarzschild radius, drawn last so it stays visible through the
    // core: the whole point of the figure is watching the surface reach it.
    if (!sim.collapsed) {
      context.strokeStyle = 'rgba(255,143,110,0.9)';
      context.setLineDash([4 * dpr, 4 * dpr]);
      context.lineWidth = 1.4 * dpr;
      context.beginPath();
      context.arc(cx, cy, horizonPx, 0, Math.PI * 2);
      context.stroke();
      context.setLineDash([]);
    }

    // ---- Labels -------------------------------------------------------------
    const stable = support >= THRESHOLD;
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = stable ? '#66e0d4' : '#ff8f6e';
    context.fillText(
      stable ? 'Support holds: it stops as a compact star.' : 'Support fails: collapse runs away.',
      10 * dpr,
      10 * dpr,
    );

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `radius ${(sim.radius * 100).toFixed(0)}% of start · horizon at ${(horizonFraction * 100).toFixed(0)}%`,
      10 * dpr,
      28 * dpr,
    );

    context.textAlign = 'left';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(255,143,110,0.9)';
    context.strokeStyle = 'rgba(255,143,110,0.9)';
    context.setLineDash([3 * dpr, 3 * dpr]);
    context.lineWidth = 1.4 * dpr;
    context.beginPath();
    context.moveTo(10 * dpr, 52 * dpr);
    context.lineTo(26 * dpr, 52 * dpr);
    context.stroke();
    context.setLineDash([]);
    context.textBaseline = 'middle';
    context.fillText('Schwarzschild radius', 31 * dpr, 52 * dpr);
    context.textBaseline = 'top';

    if (sim.collapsed) {
      context.fillStyle = 'rgba(148,162,192,0.9)';
      context.fillText(
        'the last light fades — the crossing is never seen from outside',
        cx,
        h - 18 * dpr,
      );
    }

    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(
      'timescale expanded enormously; no hydrodynamics is solved',
      10 * dpr,
      h - 6 * dpr,
    );
  }, [width, height, dpr, support]);

  useAnimationFrame(
    (delta) => {
      const sim = simRef.current;
      if (sim.collapsed) {
        sim.since += delta;
        if (sim.since > 2.6) {
          sim.radius = 1;
          sim.velocity = 0;
          sim.since = 0;
          sim.collapsed = false;
        }
        draw();
        return;
      }

      // Inward pull grows as the core shrinks; support resists, and how fast
      // the support stiffens decides everything. Above the threshold it
      // stiffens faster than gravity does, so the two cross and the core
      // settles at a finite radius. Below it, gravity always wins and the
      // contraction never finds a balance. A damping term stands in for the
      // energy the core radiates away, so a stable core settles instead of
      // oscillating forever.
      const r = Math.max(sim.radius, 0.05);
      const pull = 0.55 * r ** -0.5;
      const stiffness = support >= THRESHOLD ? 1.6 : 0.35;
      const resist = 0.5 * support * r ** -stiffness;
      sim.velocity += (resist - pull) * delta * 1.8;
      sim.velocity *= Math.max(0, 1 - 2.2 * delta);
      sim.radius += sim.velocity * delta;
      sim.radius = Math.min(sim.radius, 1);

      if (sim.radius <= 0.16) {
        sim.radius = 0.16;
        sim.collapsed = true;
        sim.since = 0;
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
          <span className={styles.controlName}>Support</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Strength of the pressure holding the core up</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={support}
              onChange={(event) => setSupport(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{support.toFixed(2)}</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={() => setSupport(0.75)}>
          Neutron star
        </button>
        <button type="button" className={styles.toggle} onClick={() => setSupport(0.25)}>
          Past the limit
        </button>
        <button type="button" className={styles.toggle} onClick={reset}>
          Restart
        </button>
      </div>
    </div>
  );
}
