import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Curvature, drawn from the Schwarzschild geometry rather than as a dent.
 *
 * The rings are placed at equal *proper* distance from one another, integrating
 * dl = dr/√(1 − r_s/r) outward from the body's surface. Where the geometry is
 * stretched, equal proper steps cover less coordinate radius, so the rings
 * bunch — which is the actual spatial curvature of the Schwarzschild solution,
 * not an artist's impression of a hollow.
 *
 * Two things are said on the canvas itself rather than only in the caption,
 * because this is the figure most likely to be misread: it is a
 * two-dimensional slice standing in for four dimensions, and nothing here is
 * rolling downhill.
 */

const RINGS = 13;

export default function SpacetimeCurvature({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Body radius in Schwarzschild radii: 1 is a black hole, 40 is diffuse. */
  const [compactness, setCompactness] = useState(3);

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
    const cy = h * 0.52;
    const maxDraw = Math.min(w, h) * 0.44;

    // Work in units of the Schwarzschild radius. The body's surface is at
    // `compactness`; integrate equal proper steps outward from there.
    const rSurface = compactness;
    const radii: number[] = [rSurface];
    // Choose the proper step so that the outermost ring lands near the edge.
    const properStep = (compactness * 2.4) / RINGS;
    let r = rSurface;
    for (let i = 0; i < RINGS; i += 1) {
      // dl = dr / √(1 − 1/r)  ⇒  dr = dl · √(1 − 1/r)
      const steps = 24;
      for (let s = 0; s < steps; s += 1) {
        const factor = Math.sqrt(Math.max(0.02, 1 - 1 / r));
        r += (properStep / steps) * factor;
      }
      radii.push(r);
    }
    const rMax = radii[radii.length - 1]!;
    const scale = maxDraw / rMax;
    const bodyPx = rSurface * scale;

    // ---- Rings of equal proper separation ---------------------------------
    radii.forEach((radius, index) => {
      const px = radius * scale;
      const strength = 1 - index / radii.length;
      context.strokeStyle = `rgba(102,224,212,${(0.16 + strength * 0.42).toFixed(2)})`;
      context.lineWidth = (index === 0 ? 2 : 1.1) * dpr;
      context.beginPath();
      context.arc(cx, cy, px, 0, Math.PI * 2);
      context.stroke();
    });

    // ---- Radial spokes ----------------------------------------------------
    context.strokeStyle = 'rgba(102,224,212,0.16)';
    context.lineWidth = 1 * dpr;
    for (let i = 0; i < 16; i += 1) {
      const angle = (i / 16) * Math.PI * 2;
      context.beginPath();
      context.moveTo(cx + Math.cos(angle) * bodyPx, cy + Math.sin(angle) * bodyPx);
      context.lineTo(cx + Math.cos(angle) * rMax * scale, cy + Math.sin(angle) * rMax * scale);
      context.stroke();
    }

    // ---- The body ---------------------------------------------------------
    const glow = context.createRadialGradient(cx, cy, bodyPx * 0.7, cx, cy, bodyPx * 2.2);
    glow.addColorStop(0, 'rgba(255,214,110,0.18)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = glow;
    context.beginPath();
    context.arc(cx, cy, bodyPx * 2.2, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = compactness <= 1.05 ? '#04060d' : '#ffd76e';
    context.beginPath();
    context.arc(cx, cy, bodyPx, 0, Math.PI * 2);
    context.fill();
    if (compactness <= 1.05) {
      context.strokeStyle = '#ff8f6e';
      context.lineWidth = 2 * dpr;
      context.beginPath();
      context.arc(cx, cy, bodyPx, 0, Math.PI * 2);
      context.stroke();
    }

    // ---- Labels -----------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#66e0d4';
    context.fillText('Rings are equally far apart — in the geometry.', 10 * dpr, 10 * dpr);
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      compactness <= 1.05
        ? 'At the horizon the spacing diverges.'
        : `Body radius ${compactness.toFixed(1)} × its Schwarzschild radius.`,
      10 * dpr,
      28 * dpr,
    );

    context.textBaseline = 'bottom';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(255,143,110,0.95)';
    context.fillText('2-D slice · nothing is rolling downhill', 10 * dpr, h - 22 * dpr);
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText('everyday gravity is mostly curvature of TIME', 10 * dpr, h - 8 * dpr);
  }, [width, height, dpr, compactness]);

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Compactness</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Body radius as a multiple of its Schwarzschild radius
            </span>
            <input
              className={styles.slider}
              type="range"
              min={1}
              max={40}
              step={0.1}
              value={compactness}
              onChange={(event) => setCompactness(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{compactness.toFixed(1)} r_s</output>
        </div>
      </div>
      <div className={styles.toggles}>
        {(
          [
            ['Black hole', 1],
            ['Neutron star', 2.9],
            ['Diffuse', 40],
          ] as const
        ).map(([label, value]) => (
          <button
            key={label}
            type="button"
            className={styles.toggle}
            aria-pressed={Math.abs(compactness - value) < 0.06}
            onClick={() => setCompactness(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        {compactness <= 1.05 ? (
          <>
            <strong>At the horizon.</strong> The rings crowd together without limit: an infalling
            traveller crosses a finite proper distance while the coordinate radius barely changes.
          </>
        ) : (
          <>
            The same mass at <strong>{compactness.toFixed(1)} Schwarzschild radii</strong> leaves
            the distant geometry untouched and bunches the rings only close in. The Sun sits at
            about 235,000 r_s and the Earth at about 700 million, which is why their spatial
            curvature is unmeasurable by eye and their gravity is nonetheless obvious.
          </>
        )}
      </p>
    </div>
  );
}
