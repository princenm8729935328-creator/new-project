import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A disc that rotates differentially and gets hotter inward.
 *
 * Two relationships are real and doing the work. Orbital angular speed follows
 * the Keplerian r^(−3/2), so the inner rings visibly lap the outer ones — which
 * is the reason friction exists at all. And the colour follows the thin-disc
 * temperature profile T ∝ r^(−3/4), so the inward brightening is the standard
 * Shakura–Sunyaev result rather than a gradient chosen to look good.
 *
 * The inner edge is the innermost stable circular orbit, computed from the
 * chosen spin, which is what makes accretion efficiency spin-dependent. The
 * disc is drawn far thicker than a real thin disc and the inward drift is
 * enormously accelerated.
 */

/** Prograde ISCO in gravitational radii, from the Kerr solution. */
function isco(a: number): number {
  const z1 = 1 + Math.cbrt(1 - a * a) * (Math.cbrt(1 + a) + Math.cbrt(1 - a));
  const z2 = Math.sqrt(3 * a * a + z1 * z1);
  return 3 + z2 - Math.sqrt((3 - z1) * (3 + z1 + 2 * z2));
}

/**
 * Radiative efficiency: the binding energy at the ISCO, as a fraction of rest
 * mass. 5.7% for a = 0, rising to about 42% near the maximum.
 */
function efficiency(a: number): number {
  const r = isco(a);
  const e =
    (r * r - 2 * r + a * Math.sqrt(r)) / (r * Math.sqrt(r * r - 3 * r + 2 * a * Math.sqrt(r)));
  return 1 - e;
}

const PARCELS = 26;
const OUTER = 20;

interface Parcel {
  r: number;
  phi: number;
}

export default function AccretionDisc({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [spin, setSpin] = useState(0);
  const parcelsRef = useRef<Parcel[]>(
    Array.from({ length: PARCELS }, (_, index) => ({
      r: 7 + (index / PARCELS) * (OUTER - 7),
      phi: (index * 2.399) % (Math.PI * 2),
    })),
  );

  const inner = isco(spin);

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

    const cx = w * 0.5;
    const cy = h * 0.55;
    const scale = Math.min(w / (2.4 * OUTER), h / (1.15 * OUTER));
    /** Vertical squash, so the disc is seen at a shallow angle. */
    const tilt = 0.34;

    // ---- The disc, coloured by the thin-disc temperature profile -------------
    // Painted outside in as filled ellipses, each over the last, so the
    // temperature gradient reads as a continuous surface rather than as forty
    // concentric strokes moiring against each other.
    const temperature = (r: number): number => Math.pow(inner / r, 0.75);
    for (let r = OUTER; r >= inner; r -= 0.25) {
      const t = temperature(r);
      const green = Math.round(50 + 205 * t);
      const blue = Math.round(15 + 220 * t * t);
      context.fillStyle = `rgb(255,${green},${blue})`;
      // Opaque, not accumulated: eighty translucent fills stacked on top of one
      // another saturate to a flat slab and destroy the gradient they were
      // meant to show.
      context.globalAlpha = 1;
      context.beginPath();
      context.ellipse(cx, cy, r * scale, r * scale * tilt, 0, 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = 1;

    // Inside the innermost stable orbit there is no disc: matter there is
    // plunging, not orbiting, and it radiates very little on the way in.
    context.fillStyle = '#05070d';
    context.beginPath();
    context.ellipse(cx, cy, inner * scale, inner * scale * tilt, 0, 0, Math.PI * 2);
    context.fill();

    // ---- Parcels drifting inward ---------------------------------------------
    for (const parcel of parcelsRef.current) {
      const t = temperature(parcel.r);
      const x = cx + parcel.r * scale * Math.cos(parcel.phi);
      const y = cy + parcel.r * scale * tilt * Math.sin(parcel.phi);
      const size = (2.2 + 1.8 * t) * dpr;
      // A dark rim, so a parcel stays visible against the bright inner disc.
      context.fillStyle = 'rgba(10,6,2,0.8)';
      context.beginPath();
      context.arc(x, y, size + 1.4 * dpr, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = `rgb(255,${Math.round(200 + 55 * t)},${Math.round(150 + 105 * t)})`;
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fill();
    }

    // ---- The black hole ------------------------------------------------------
    context.fillStyle = '#04060c';
    context.beginPath();
    context.arc(cx, cy, 2 * scale, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = 'rgba(255,143,110,0.7)';
    context.lineWidth = 1.4 * dpr;
    context.beginPath();
    context.arc(cx, cy, 2 * scale, 0, Math.PI * 2);
    context.stroke();

    // ---- The inner edge ------------------------------------------------------
    context.strokeStyle = 'rgba(102,224,212,0.75)';
    context.setLineDash([4 * dpr, 4 * dpr]);
    context.lineWidth = 1.2 * dpr;
    context.beginPath();
    context.ellipse(cx, cy, inner * scale, inner * scale * tilt, 0, 0, Math.PI * 2);
    context.stroke();
    context.setLineDash([]);

    // ---- Readouts -------------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#e2e9f6';
    context.fillText(
      'Inner rings orbit faster. Friction is what lets anything fall in.',
      10 * dpr,
      10 * dpr,
    );

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = '#66e0d4';
    context.fillText(
      `inner edge ${inner.toFixed(2)} r_g · efficiency ${(efficiency(spin) * 100).toFixed(1)}% of rest mass`,
      10 * dpr,
      28 * dpr,
    );
    context.fillStyle = 'rgba(148,162,192,0.9)';
    context.fillText('hydrogen fusion, for comparison: 0.7%', 10 * dpr, 44 * dpr);

    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(
      'disc drawn far thicker than real; inward drift accelerated',
      10 * dpr,
      h - 6 * dpr,
    );
  }, [width, height, dpr, inner, spin]);

  useAnimationFrame(
    (delta) => {
      for (const parcel of parcelsRef.current) {
        // Keplerian angular speed: Ω ∝ r^(−3/2).
        parcel.phi += delta * 26 * Math.pow(parcel.r, -1.5);
        parcel.r -= delta * 0.55;
        if (parcel.r < inner) {
          parcel.r = OUTER;
          parcel.phi = Math.random() * Math.PI * 2;
        }
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
          <span className={styles.controlName}>Spin</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Dimensionless spin parameter</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={0.998}
              step={0.002}
              value={spin}
              onChange={(event) => setSpin(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>a* = {spin.toFixed(3)}</output>
        </div>
      </div>
      <p className={styles.readout}>
        Raising the spin moves the inner edge inward, so gas falls deeper before it is lost — which
        is why a rapidly spinning black hole radiates several times as much of what it swallows.
      </p>
    </div>
  );
}
