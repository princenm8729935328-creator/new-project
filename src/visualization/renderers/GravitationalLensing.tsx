import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Lensing solved rather than sketched.
 *
 * The two ray paths come from the actual thin-lens equation for a point mass,
 * β = θ − θ_E²/θ, whose solutions θ± = (β ± √(β² + 4θ_E²))/2 are the two images
 * an observer sees. Sliding the source through alignment therefore produces the
 * real behaviour — one image brightening and moving out, the other dimming and
 * closing in, and both merging into a ring at β = 0 — instead of a hand-drawn
 * approximation of it.
 *
 * The Einstein radius is set to a size that fits the frame. Real deflections
 * are arcseconds; at this scale the bending would be invisible.
 */

// Einstein radius at the lens plane, in drawn pixels. Kept small because the
// apparent images are drawn back-projected to the source plane, which magnifies
// the offset by the ratio of the distances.
const THETA_E_PX = 32;

export default function GravitationalLensing({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Source offset from perfect alignment, in units of the Einstein radius. */
  const [offset, setOffset] = useState(0.8);
  const [showRing, setShowRing] = useState(true);

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

    const cy = h * 0.5;
    const sourceX = w * 0.08;
    const lensX = w * 0.5;
    const observerX = w * 0.9;
    const thetaE = THETA_E_PX * dpr * Math.min(1, w / (380 * dpr));

    // Solve the lens equation in the same drawn units.
    const beta = offset * thetaE;
    const root = Math.sqrt(beta * beta + 4 * thetaE * thetaE);
    const thetaPlus = (beta + root) / 2;
    const thetaMinus = (beta - root) / 2;
    // Magnification of each image, from the standard point-mass result.
    const magnification = (theta: number): number => Math.abs(1 / (1 - (thetaE / theta) ** 4));

    const sourceY = cy - beta;

    // ---- The lens ---------------------------------------------------------
    const glow = context.createRadialGradient(lensX, cy, 4 * dpr, lensX, cy, 42 * dpr);
    glow.addColorStop(0, 'rgba(169,123,255,0.45)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = glow;
    context.beginPath();
    context.arc(lensX, cy, 42 * dpr, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#a97bff';
    context.beginPath();
    context.arc(lensX, cy, 11 * dpr, 0, Math.PI * 2);
    context.fill();

    if (showRing) {
      context.strokeStyle = 'rgba(169,123,255,0.3)';
      context.setLineDash([3 * dpr, 4 * dpr]);
      context.lineWidth = 1 * dpr;
      context.beginPath();
      context.arc(lensX, cy, thetaE, 0, Math.PI * 2);
      context.stroke();
      context.setLineDash([]);
    }

    // ---- The two rays ------------------------------------------------------
    const drawRay = (theta: number, colour: string): void => {
      const bendY = cy - theta;
      context.strokeStyle = colour;
      context.lineWidth = 1.8 * dpr;
      context.beginPath();
      context.moveTo(sourceX, sourceY);
      context.lineTo(lensX, bendY);
      context.lineTo(observerX, cy);
      context.stroke();

      // Apparent position: the observer projects the arriving ray straight back.
      const apparentY = cy - theta * ((observerX - sourceX) / (observerX - lensX));
      context.strokeStyle = colour.replace('0.95', '0.25');
      context.setLineDash([4 * dpr, 4 * dpr]);
      context.lineWidth = 1.2 * dpr;
      context.beginPath();
      context.moveTo(observerX, cy);
      context.lineTo(sourceX, apparentY);
      context.stroke();
      context.setLineDash([]);

      const size = Math.max(2.5, Math.min(7, 2.4 * Math.sqrt(magnification(theta)))) * dpr;
      context.fillStyle = colour;
      context.beginPath();
      context.arc(sourceX, apparentY, size, 0, Math.PI * 2);
      context.fill();
    };

    drawRay(thetaPlus, 'rgba(102,224,212,0.95)');
    drawRay(thetaMinus, 'rgba(255,214,110,0.95)');

    // ---- Source and observer ----------------------------------------------
    context.fillStyle = '#e2e9f6';
    context.beginPath();
    context.arc(sourceX, sourceY, 5.5 * dpr, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#8fb8ff';
    context.beginPath();
    context.arc(observerX, cy, 5.5 * dpr, 0, Math.PI * 2);
    context.fill();

    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(226,233,246,0.85)';
    context.fillText('source', sourceX, sourceY + 10 * dpr);
    context.fillText('mass', lensX, cy + 16 * dpr);
    context.fillText('us', observerX, cy + 10 * dpr);

    // ---- Ring, when the alignment is close enough --------------------------
    if (Math.abs(offset) < 0.08) {
      context.strokeStyle = 'rgba(102,224,212,0.9)';
      context.lineWidth = 3 * dpr;
      context.beginPath();
      context.arc(
        sourceX,
        cy,
        thetaE * ((observerX - sourceX) / (observerX - lensX)),
        0,
        Math.PI * 2,
      );
      context.stroke();
    }

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = Math.abs(offset) < 0.08 ? '#66e0d4' : 'rgba(226,233,246,0.92)';
    context.fillText(
      Math.abs(offset) < 0.08 ? 'Aligned: an Einstein ring.' : 'One source, two images.',
      10 * dpr,
      10 * dpr,
    );
    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `brightness ratio ${(magnification(thetaPlus) / magnification(thetaMinus)).toFixed(2)}×`,
      10 * dpr,
      28 * dpr,
    );

    context.textBaseline = 'bottom';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText(
      'bending exaggerated — the real solar deflection is 1.75″',
      10 * dpr,
      h - 8 * dpr,
    );
  }, [width, height, dpr, offset, showRing]);

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Alignment</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Source offset from alignment, in Einstein radii
            </span>
            <input
              className={styles.slider}
              type="range"
              min={-2.5}
              max={2.5}
              step={0.01}
              value={offset}
              onChange={(event) => setOffset(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{offset.toFixed(2)} θ_E</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={() => setOffset(0)}>
          Line it up
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={showRing}
          onClick={() => setShowRing((on) => !on)}
        >
          Einstein radius
        </button>
      </div>
    </div>
  );
}
