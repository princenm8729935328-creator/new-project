import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Particles released with no angular momentum, carried around anyway.
 *
 * The angular velocity applied to each particle is the Kerr frame-dragging
 * rate for a zero-angular-momentum observer in the equatorial plane,
 * ω = 2ar/((r² + a²)² − a²Δ), so the way the dragging steepens inward and with
 * spin is the real relationship rather than a chosen easing. Setting spin to
 * zero makes every particle fall radially, which is the control case.
 *
 * The particles, the scale and the trails are illustrative. Around the Earth
 * the same effect amounts to about 37 milliarcseconds per year, which is what
 * Gravity Probe B measured.
 */

const COUNT = 22;
const OUTER = 9;

/** Equatorial frame-dragging angular velocity, in units where GM/c² = 1. */
function omega(r: number, a: number): number {
  const delta = r * r - 2 * r + a * a;
  const denominator = (r * r + a * a) ** 2 - a * a * delta;
  return (2 * a * r) / denominator;
}

/** Outer horizon, in gravitational radii. */
const horizon = (a: number): number => 1 + Math.sqrt(Math.max(0, 1 - a * a));

/** Equatorial static limit — the outer edge of the ergosphere. */
const STATIC_LIMIT_EQUATOR = 2;

interface Particle {
  r: number;
  phi: number;
  trail: [number, number][];
}

function seed(): Particle[] {
  return Array.from({ length: COUNT }, (_, index) => ({
    r: 3 + ((index * 7) % COUNT) * (OUTER - 3) * (1 / COUNT),
    phi: (index / COUNT) * Math.PI * 2,
    trail: [],
  }));
}

export default function FrameDragging({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [spin, setSpin] = useState(0.9);
  const particlesRef = useRef<Particle[]>(seed());

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
    const cy = h * 0.52;
    const scale = Math.min(w, h) / (2.3 * OUTER);
    const rH = horizon(spin);

    // ---- Ergosphere ----------------------------------------------------------
    if (spin > 0.02) {
      context.fillStyle = 'rgba(169,123,255,0.10)';
      context.strokeStyle = 'rgba(169,123,255,0.5)';
      context.lineWidth = 1.2 * dpr;
      context.beginPath();
      context.arc(cx, cy, STATIC_LIMIT_EQUATOR * scale, 0, Math.PI * 2);
      context.fill();
      context.stroke();
    }

    // ---- Horizon --------------------------------------------------------------
    context.fillStyle = '#04060c';
    context.beginPath();
    context.arc(cx, cy, rH * scale, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = 'rgba(255,143,110,0.85)';
    context.lineWidth = 1.6 * dpr;
    context.beginPath();
    context.arc(cx, cy, rH * scale, 0, Math.PI * 2);
    context.stroke();

    // ---- Particles and trails --------------------------------------------------
    for (const particle of particlesRef.current) {
      context.strokeStyle = 'rgba(102,224,212,0.35)';
      context.lineWidth = 1 * dpr;
      context.beginPath();
      particle.trail.forEach(([r, phi], index) => {
        const x = cx + r * scale * Math.cos(phi);
        const y = cy + r * scale * Math.sin(phi);
        if (index === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      });
      context.stroke();

      const x = cx + particle.r * scale * Math.cos(particle.phi);
      const y = cy + particle.r * scale * Math.sin(particle.phi);
      context.fillStyle = '#66e0d4';
      context.beginPath();
      context.arc(x, y, 2.4 * dpr, 0, Math.PI * 2);
      context.fill();
    }

    // ---- Readouts ---------------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#e2e9f6';
    context.fillText(
      spin < 0.02
        ? 'No spin: released with no angular momentum, they fall straight in.'
        : 'Released with no angular momentum — and swept around anyway.',
      10 * dpr,
      10 * dpr,
    );

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `dragging rate at 3 r_g: ω = ${omega(3, spin).toFixed(4)} c³/GM`,
      10 * dpr,
      28 * dpr,
    );

    if (spin > 0.02) {
      context.textAlign = 'center';
      context.font = `${8 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(169,123,255,0.9)';
      context.fillText(
        'ergosphere — nothing can hold still',
        cx,
        cy + STATIC_LIMIT_EQUATOR * scale + 5 * dpr,
      );
    }

    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(
      'equatorial slice; trails and particle sizes illustrative',
      10 * dpr,
      h - 6 * dpr,
    );
  }, [width, height, dpr, spin]);

  useAnimationFrame(
    (delta) => {
      const rH = horizon(spin);
      for (const particle of particlesRef.current) {
        particle.phi += omega(particle.r, spin) * delta * 260;
        particle.r -= delta * 0.85;
        particle.trail.push([particle.r, particle.phi]);
        if (particle.trail.length > 46) particle.trail.shift();
        if (particle.r < rH * 1.02) {
          particle.r = OUTER;
          particle.phi = Math.random() * Math.PI * 2;
          particle.trail = [];
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
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={() => setSpin(0)}>
          Switch the spin off
        </button>
      </div>
      <p className={styles.readout}>
        Inside the ergosphere the dragging exceeds what any engine could counteract: you are carried
        around whatever you do. It is still outside the horizon, so you can leave — and energy can
        be extracted from there, which is not true of anything inside.
      </p>
    </div>
  );
}
