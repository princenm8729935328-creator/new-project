import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * What a telescope sees, and how much of it is not the black hole.
 *
 * The two radii that carry the argument are computed: the shadow at √27 GM/c²
 * and the horizon at 2GM/c², a ratio of 2.598 to 2. Toggling the horizon
 * overlay makes visible the point that is most often lost — the dark region in
 * a black-hole image is substantially larger than the horizon, because rays
 * that would have missed in flat space are bent into it.
 *
 * The star field, the ring brightness and the disc are illustrative. This is
 * not a reproduction of the Event Horizon Telescope images and uses none of
 * their data.
 */

const B_CRIT_OVER_RG = Math.sqrt(27);
const HORIZON_OVER_RG = 2;

interface Star {
  readonly angle: number;
  readonly radius: number;
  readonly size: number;
}

function buildStars(count: number): Star[] {
  // A fixed pseudo-random field, so the figure does not reshuffle on every
  // render and the lensing displacement stays readable.
  let seed = 20240719;
  const random = (): number => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  return Array.from({ length: count }, () => ({
    angle: random() * Math.PI * 2,
    radius: 5 + random() * 30,
    size: 0.6 + random() * 1.4,
  }));
}

export default function BlackHoleShadow({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [showHorizon, setShowHorizon] = useState(false);
  const [showDisc, setShowDisc] = useState(true);
  const stars = useMemo(() => buildStars(160), []);

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
    const cy = h * 0.5;
    // Gravitational radii to pixels: the shadow fills a third of the frame.
    const scale = (Math.min(w, h) * 0.32) / B_CRIT_OVER_RG;
    const shadow = B_CRIT_OVER_RG * scale;
    const horizon = HORIZON_OVER_RG * scale;

    // ---- Background stars, displaced outward by lensing ----------------------
    for (const star of stars) {
      const trueR = star.radius * scale;
      // Illustrative deflection: rays passing closer are pushed further out.
      const apparent = Math.sqrt(trueR * trueR + shadow * shadow);
      const x = cx + apparent * Math.cos(star.angle);
      const y = cy + apparent * Math.sin(star.angle);
      context.fillStyle = `rgba(226,233,246,${0.35 + star.size * 0.3})`;
      context.beginPath();
      context.arc(x, y, star.size * dpr, 0, Math.PI * 2);
      context.fill();

      // The secondary image, squeezed into a thin annulus just outside the ring.
      const secondary = shadow * (1.02 + 0.05 / (1 + star.radius / 6));
      context.fillStyle = 'rgba(226,233,246,0.28)';
      context.beginPath();
      context.arc(
        cx + secondary * Math.cos(star.angle + Math.PI),
        cy + secondary * Math.sin(star.angle + Math.PI),
        0.9 * dpr,
        0,
        Math.PI * 2,
      );
      context.fill();
    }

    // ---- Accretion disc, far side first --------------------------------------
    // The far side is bent up and over the top by lensing, so it is visible
    // above the shadow rather than hidden behind it. It goes down before the
    // shadow; the near side goes down after, so it crosses in front.
    if (showDisc) {
      context.strokeStyle = 'rgba(255,214,110,0.7)';
      context.lineWidth = 2.4 * dpr;
      context.beginPath();
      context.ellipse(cx, cy - shadow * 0.05, shadow * 1.35, shadow * 1.2, 0, Math.PI, Math.PI * 2);
      context.stroke();
    }

    // ---- The shadow ----------------------------------------------------------
    context.fillStyle = '#04060c';
    context.beginPath();
    context.arc(cx, cy, shadow, 0, Math.PI * 2);
    context.fill();

    // ---- The photon ring -----------------------------------------------------
    const ring = context.createRadialGradient(cx, cy, shadow * 0.96, cx, cy, shadow * 1.14);
    ring.addColorStop(0, 'rgba(255,214,110,0)');
    ring.addColorStop(0.35, 'rgba(255,236,190,0.95)');
    ring.addColorStop(1, 'rgba(255,180,94,0)');
    context.fillStyle = ring;
    context.beginPath();
    context.arc(cx, cy, shadow * 1.14, 0, Math.PI * 2);
    context.fill();

    // The near side of the disc passes in front of everything.
    if (showDisc) {
      context.strokeStyle = 'rgba(255,180,94,0.75)';
      context.lineWidth = 2.6 * dpr;
      context.beginPath();
      context.ellipse(cx, cy, shadow * 2.1, shadow * 0.42, 0, 0, Math.PI);
      context.stroke();
    }

    // ---- The horizon overlay -------------------------------------------------
    if (showHorizon) {
      context.strokeStyle = 'rgba(255,143,110,0.95)';
      context.setLineDash([5 * dpr, 4 * dpr]);
      context.lineWidth = 1.6 * dpr;
      context.beginPath();
      context.arc(cx, cy, horizon, 0, Math.PI * 2);
      context.stroke();
      context.setLineDash([]);
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = `${8.5 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(255,143,110,0.95)';
      context.fillText('event horizon, 2 r_g', cx, cy + horizon * 0.55);
    }

    // ---- Labels ---------------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#e2e9f6';
    context.fillText('The dark region is the shadow, not the horizon.', 10 * dpr, 10 * dpr);
    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText('shadow √27 = 5.20 r_g · horizon 2.00 r_g', 10 * dpr, 28 * dpr);

    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(
      'illustrative — not EHT data, and no horizon has been imaged',
      10 * dpr,
      h - 6 * dpr,
    );
  }, [width, height, dpr, showHorizon, showDisc, stars]);

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={showHorizon}
          onClick={() => setShowHorizon((on) => !on)}
        >
          Show the horizon
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={showDisc}
          onClick={() => setShowDisc((on) => !on)}
        >
          Accretion disc
        </button>
      </div>
      <p className={styles.readout}>
        The shadow is 2.6 times the horizon radius, so the dark patch is about two and a half times
        wider than the black hole it surrounds. A horizon emits nothing and cannot be photographed;
        what a telescope records is the plasma around it.
      </p>
    </div>
  );
}
