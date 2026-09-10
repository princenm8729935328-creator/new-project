import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Parallax: the one rung of the distance ladder that is pure geometry.
 *
 * The shift is computed exactly — parallax in arcseconds equals one over the
 * distance in parsecs, which is the definition of the parsec. What has to be
 * faked is the size of the angle. Proxima Centauri, the nearest star, shifts by
 * 0.77 arcseconds, about the angle a one-euro coin subtends at six kilometres.
 * At true scale nothing on this canvas would move by a visible amount, so the
 * displacement here is exaggerated by a factor stated in the readout.
 *
 * That exaggeration is why the technique took until 1838 to succeed. Copernicus
 * predicted the shift in 1543; three centuries of failing to see it was the
 * strongest argument against him.
 */

const EXAGGERATION = 40000;

export default function StellarParallax({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Distance to the target star, in parsecs. */
  const [distance, setDistance] = useState(1.3);
  const clock = useRef(0);
  const [phase, setPhase] = useState(0);

  /** p (arcsec) = 1 / d (pc). */
  const parallax = 1 / distance;

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

    const split = h * 0.42;
    const angle = clock.current;

    // ---- Top: Earth's orbit around the Sun ------------------------------
    const ox = w * 0.22;
    const oy = split * 0.55;
    const orbitR = Math.min(w * 0.16, split * 0.3);

    context.strokeStyle = 'rgba(148,162,192,0.35)';
    context.lineWidth = 1 * dpr;
    context.beginPath();
    context.ellipse(ox, oy, orbitR, orbitR * 0.3, 0, 0, Math.PI * 2);
    context.stroke();

    context.fillStyle = '#ffd27f';
    context.beginPath();
    context.arc(ox, oy, 5 * dpr, 0, Math.PI * 2);
    context.fill();

    const ex = ox + Math.cos(angle) * orbitR;
    const ey = oy + Math.sin(angle) * orbitR * 0.3;
    context.fillStyle = '#7fc7ff';
    context.beginPath();
    context.arc(ex, ey, 3.6 * dpr, 0, Math.PI * 2);
    context.fill();
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.textAlign = 'left';
    context.textBaseline = 'middle';
    context.fillStyle = 'rgba(226,233,246,0.9)';
    context.fillText('Earth', ex + 6 * dpr, ey - 8 * dpr);

    // The target star, out to the right; distance shown logarithmically.
    const starX = w * 0.55 + Math.min(w * 0.38, Math.log10(distance) * w * 0.14 + w * 0.1);
    const starY = split * 0.5;
    context.fillStyle = '#4fe0c0';
    context.beginPath();
    context.arc(Math.min(starX, w - 20 * dpr), starY, 4 * dpr, 0, Math.PI * 2);
    context.fill();

    // Sight lines from the two extremes of the orbit.
    context.strokeStyle = 'rgba(79,224,192,0.4)';
    context.setLineDash([3 * dpr, 4 * dpr]);
    context.beginPath();
    context.moveTo(ex, ey);
    context.lineTo(Math.min(starX, w - 20 * dpr), starY);
    context.stroke();
    context.setLineDash([]);

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.9)';
    context.fillText('Earth crosses its orbit; the sight line swings', 10 * dpr, 8 * dpr);

    // ---- Bottom: the apparent sky, with the star shifting ----------------
    context.fillStyle = 'rgba(4,6,13,0.72)';
    context.fillRect(0, split, w, h - split);

    const skyCx = w / 2;
    const skyCy = split + (h - split) * 0.42;

    // Fixed distant background.
    const background: readonly [number, number][] = [
      [-0.34, -0.28],
      [0.31, -0.22],
      [-0.2, 0.3],
      [0.38, 0.26],
      [0.06, -0.36],
      [-0.42, 0.06],
      [0.44, 0.02],
      [-0.08, 0.38],
    ];
    const spread = Math.min(w, h - split) * 0.8;
    for (const [bx, by] of background) {
      context.fillStyle = 'rgba(226,233,246,0.55)';
      context.beginPath();
      context.arc(skyCx + bx * spread, skyCy + by * spread * 0.7, 1.5 * dpr, 0, Math.PI * 2);
      context.fill();
    }

    // The nearby star, shifting with the exaggerated parallax.
    const arcsecToPx = ((Math.min(w, h - split) * 0.16) / 1) * (EXAGGERATION / 40000);
    const shift = parallax * arcsecToPx * Math.cos(angle) * 2;
    context.fillStyle = '#4fe0c0';
    context.beginPath();
    context.arc(skyCx + shift, skyCy, 4.2 * dpr, 0, Math.PI * 2);
    context.fill();

    // Trace of the full annual excursion.
    context.strokeStyle = 'rgba(79,224,192,0.35)';
    context.lineWidth = 1 * dpr;
    context.beginPath();
    context.moveTo(skyCx - parallax * arcsecToPx * 2, skyCy);
    context.lineTo(skyCx + parallax * arcsecToPx * 2, skyCy);
    context.stroke();

    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.textAlign = 'left';
    context.fillText(`d = ${distance.toPrecision(3)} pc`, 10 * dpr, split + 6 * dpr);
    context.fillText(`p = ${parallax.toPrecision(3)}″`, 10 * dpr, split + 22 * dpr);
    context.textAlign = 'right';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#ff8f6e';
    context.fillText(
      `shift exaggerated ${EXAGGERATION.toLocaleString()}×`,
      w - 10 * dpr,
      split + 6 * dpr,
    );
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText('at true scale, nothing here would move visibly', w - 10 * dpr, h - 16 * dpr);
  }, [width, height, dpr, distance, parallax]);

  useAnimationFrame(
    (delta) => {
      clock.current += delta * 1.1;
      setPhase(clock.current);
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion, phase]);

  const gaiaPrecision = 2e-5; // arcsec, roughly Gaia's per-star precision
  const snr = parallax / gaiaPrecision;

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Distance</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Distance to the star, in parsecs</span>
            <input
              className={styles.slider}
              type="range"
              min={Math.log10(1.3)}
              max={Math.log10(3000)}
              step={0.005}
              value={Math.log10(distance)}
              onChange={(event) => setDistance(10 ** Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{distance.toPrecision(3)} pc</output>
        </div>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        At <strong>{distance.toPrecision(3)} parsecs</strong> ({(distance * 3.26).toPrecision(3)}{' '}
        light-years) the star shifts by <strong>{parallax.toPrecision(3)} arcseconds</strong> —
        because a parsec is defined as the distance at which one astronomical unit subtends exactly
        one arcsecond, so p = 1 ÷ d with no constant to remember. Double the distance and the shift
        halves, exactly. Gaia measures parallaxes to around 20 microarcseconds, so this shift is
        about {snr >= 1000 ? `${Math.round(snr / 1000)},000` : Math.round(snr)}× its precision, and
        a star even at a thousand parsecs is still measurable. That is what makes a survey of over a
        billion stars possible — and every distance above this rung of the ladder is calibrated on
        it.
      </p>
    </div>
  );
}
