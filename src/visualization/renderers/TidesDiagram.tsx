import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Why there are two tidal bulges.
 *
 * The figure is built around one switch. In "Moon's pull" mode every arrow
 * points at the Moon and the near-side arrows are longer — which is true, and
 * which on its own would predict a single bulge. In "The difference" mode the
 * Earth's own acceleration has been subtracted from every arrow, and what is
 * left points outward at *both* ends. That subtraction is the whole physics of
 * tides, and it is the step the popular explanation skips.
 *
 * The arrow field is computed from the real inverse-square law at the real
 * Earth–Moon geometry, then scaled to be visible; the differential arrows are
 * amplified far more than the direct ones, because they are about ten million
 * times smaller in reality. The bulge height is exaggerated beyond any scale.
 */

/** Real geometry, used for the arrow field; drawn distances are compressed. */
const EARTH_R = 6.371e6;
const MOON_D = 3.844e8;
const SAMPLES = 16;

type Mode = 'pull' | 'difference';
type SunState = 'off' | 'spring' | 'neap';

export default function TidesDiagram({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spin = useRef(0);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [mode, setMode] = useState<Mode>('difference');
  const [sun, setSun] = useState<SunState>('off');

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

    const cx = w * 0.38;
    const cy = h * 0.5;
    const radius = Math.min(w * 0.19, h * 0.24);
    const moonX = cx + Math.min(w * 0.46, radius * 4.6);

    // ---- Tidal amplitude, including the Sun when it is switched on ---------
    // The solar tidal forcing is 0.46 of the lunar one; aligned they add,
    // perpendicular the Sun partially cancels the lunar bulge.
    const solar = sun === 'spring' ? 0.46 : sun === 'neap' ? -0.46 : 0;
    const amplitude = 1 + solar;

    // ---- Earth, with exaggerated bulges ------------------------------------
    context.save();
    context.translate(cx, cy);
    const bulge = radius * 0.16 * amplitude;
    context.fillStyle = 'rgba(79,224,192,0.22)';
    context.beginPath();
    context.ellipse(0, 0, radius + bulge, radius - bulge * 0.5, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = 'rgba(79,224,192,0.7)';
    context.lineWidth = 1.4 * dpr;
    context.stroke();

    context.fillStyle = '#4a6fa5';
    context.beginPath();
    context.arc(0, 0, radius, 0, Math.PI * 2);
    context.fill();

    // An observer carried round by the Earth's rotation.
    const angle = spin.current;
    const ox = Math.cos(angle) * radius;
    const oy = Math.sin(angle) * radius;
    context.fillStyle = '#ffd76e';
    context.beginPath();
    context.arc(ox, oy, 4 * dpr, 0, Math.PI * 2);
    context.fill();
    context.restore();

    // ---- The arrow field ---------------------------------------------------
    // Acceleration towards the Moon at the Earth's centre, for the subtraction.
    const centreAcc = 1 / (MOON_D * MOON_D);

    let maxLength = 0;
    const arrows: Array<{ x: number; y: number; dx: number; dy: number }> = [];
    for (let i = 0; i < SAMPLES; i += 1) {
      const theta = (i / SAMPLES) * Math.PI * 2;
      const px = Math.cos(theta) * EARTH_R;
      const py = Math.sin(theta) * EARTH_R;
      const rx = MOON_D - px;
      const ry = -py;
      const r2 = rx * rx + ry * ry;
      const r = Math.sqrt(r2);
      const acc = 1 / r2;
      let ax = (acc * rx) / r;
      const ay = (acc * ry) / r;
      if (mode === 'difference') {
        ax -= centreAcc;
        // The centre's acceleration is purely along +x, so only ax changes.
      }
      const length = Math.hypot(ax, ay);
      if (length > maxLength) maxLength = length;
      arrows.push({ x: Math.cos(theta), y: Math.sin(theta), dx: ax, dy: ay });
    }

    const arrowScale = (radius * (mode === 'difference' ? 0.85 : 0.7)) / (maxLength || 1);
    context.lineWidth = 1.8 * dpr;
    for (const arrow of arrows) {
      const baseX = cx + arrow.x * radius;
      const baseY = cy + arrow.y * radius;
      const tipX = baseX + arrow.dx * arrowScale;
      const tipY = baseY + arrow.dy * arrowScale;
      context.strokeStyle =
        mode === 'difference' ? 'rgba(255,214,110,0.9)' : 'rgba(143,184,255,0.9)';
      context.beginPath();
      context.moveTo(baseX, baseY);
      context.lineTo(tipX, tipY);
      context.stroke();

      const head = Math.atan2(tipY - baseY, tipX - baseX);
      const size = 4.5 * dpr;
      context.fillStyle = mode === 'difference' ? '#ffd76e' : '#8fb8ff';
      context.beginPath();
      context.moveTo(tipX, tipY);
      context.lineTo(tipX - size * Math.cos(head - 0.4), tipY - size * Math.sin(head - 0.4));
      context.lineTo(tipX - size * Math.cos(head + 0.4), tipY - size * Math.sin(head + 0.4));
      context.closePath();
      context.fill();
    }

    // ---- Moon and (optionally) Sun ----------------------------------------
    context.fillStyle = '#c8ccd6';
    context.beginPath();
    context.arc(moonX, cy, radius * 0.27, 0, Math.PI * 2);
    context.fill();
    context.font = `${10 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(226,233,246,0.9)';
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillText('Moon', moonX, cy + radius * 0.27 + 6 * dpr);

    if (sun !== 'off') {
      const sunX = sun === 'spring' ? Math.min(w - 16 * dpr, moonX + radius * 1.4) : cx;
      const sunY = sun === 'spring' ? cy : Math.max(20 * dpr, cy - radius * 2.6);
      context.fillStyle = '#ffb45e';
      context.beginPath();
      context.arc(sunX, sunY, radius * 0.2, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = 'rgba(255,180,94,0.95)';
      context.fillText('Sun', sunX, sunY + radius * 0.2 + 5 * dpr);
    }

    // ---- Labels -------------------------------------------------------------
    // All stacked down the left edge rather than split left/right: on a phone
    // the canvas is about 350 CSS pixels wide and two opposed labels collide.
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = mode === 'difference' ? '#ffd76e' : '#8fb8ff';
    context.fillText(
      mode === 'difference' ? 'The difference in pull' : 'The Moon’s raw pull',
      10 * dpr,
      10 * dpr,
    );
    context.font = `${10 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      mode === 'difference'
        ? 'Outward at both ends: two bulges.'
        : 'All arrows point at the Moon: one bulge.',
      10 * dpr,
      28 * dpr,
    );

    // Tide height for the rotating observer: two highs per rotation.
    const level = Math.cos(2 * angle);
    context.textBaseline = 'bottom';
    context.font = `${10 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(255,214,110,0.95)';
    context.fillText(
      level > 0.5
        ? 'observer: high tide'
        : level < -0.5
          ? 'observer: low tide'
          : 'observer: mid tide',
      10 * dpr,
      h - (sun === 'off' ? 34 : 50) * dpr,
    );
    if (sun !== 'off') {
      context.fillStyle = sun === 'spring' ? '#ff8f6e' : '#7fc7ff';
      context.fillText(
        sun === 'spring' ? 'aligned — large spring tides' : 'at right angles — small neap tides',
        10 * dpr,
        h - 34 * dpr,
      );
    }

    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillText('distance and bulge height enormously exaggerated', 10 * dpr, h - 12 * dpr);
  }, [width, height, dpr, mode, sun]);

  useAnimationFrame(
    (delta) => {
      spin.current = (spin.current + delta * 0.55) % (Math.PI * 2);
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 30),
  );

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
          aria-pressed={mode === 'pull'}
          onClick={() => setMode('pull')}
        >
          Moon’s pull
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={mode === 'difference'}
          onClick={() => setMode('difference')}
        >
          The difference
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={sun !== 'off'}
          onClick={() =>
            setSun((state) => (state === 'off' ? 'spring' : state === 'spring' ? 'neap' : 'off'))
          }
        >
          {sun === 'off' ? 'Add the Sun' : sun === 'spring' ? 'Sun: spring tide' : 'Sun: neap tide'}
        </button>
      </div>
    </div>
  );
}
