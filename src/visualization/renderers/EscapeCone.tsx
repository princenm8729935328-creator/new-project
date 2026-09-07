import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Light cones tipping until "out" stops existing.
 *
 * The half-angle of the escape cone is computed rather than drawn by eye: for a
 * static emitter in the Schwarzschild geometry it follows from the ratio of the
 * critical impact parameter to the local geometry, and it closes exactly at the
 * horizon. That closure is the whole argument for why thrust does not help —
 * there is no outward direction remaining, not a force too strong to fight.
 *
 * The radial axis is compressed so that the far field and the horizon both fit,
 * and the cones are drawn far larger than any meaningful scale.
 */

/**
 * Half-angle, in radians, of the cone of directions from which light emitted by
 * a static observer at radius r (in Schwarzschild radii) escapes to infinity.
 *
 * Outside the photon sphere the cone opens toward 90° at large r; inside it the
 * cone narrows toward zero at the horizon.
 */
function escapeHalfAngle(rOverRs: number): number {
  if (rOverRs <= 1) return 0;
  // Critical impact parameter b_c = √27 GM/c² = 2.598 r_s.
  const bc = Math.sqrt(27) / 2;
  const lapse = Math.sqrt(1 - 1 / rOverRs);
  const sinPsi = (bc * lapse) / rOverRs;
  if (sinPsi >= 1) return Math.PI / 2;
  // Inside the photon sphere the escaping directions are a narrowing cone about
  // straight up; outside it, everything escapes except a narrowing cone aimed
  // at the hole, so the escape cone is the complement.
  return rOverRs < 1.5 ? Math.asin(sinPsi) : Math.PI - Math.asin(sinPsi);
}

export default function EscapeCone({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Selected radius, in Schwarzschild radii. */
  const [radius, setRadius] = useState(6);

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

    // One large cone for the selected radius, and a row of small reference
    // cones beneath it. Laying the references out evenly rather than on the
    // radial axis is deliberate: at a shared scale the cones near the horizon
    // and those far out overlap into an unreadable pile, and the point of the
    // figure is the shape of each cone, not where it sits on a ruler.
    const samples = [1.02, 1.2, 1.5, 2.5, 6];
    const rowY = h * 0.8;
    const smallR = Math.min(w / (samples.length * 3.1), h * 0.1);
    const bigR = Math.min(w * 0.17, h * 0.22);
    const bigX = w * 0.5;
    const bigY = h * 0.38;

    const drawCone = (
      r: number,
      x: number,
      y: number,
      coneLength: number,
      highlight: boolean,
    ): void => {
      const psi = escapeHalfAngle(r);

      // The full set of directions, for contrast with the shaded subset.
      context.fillStyle = 'rgba(148,162,192,0.07)';
      context.beginPath();
      context.arc(x, y, coneLength, 0, Math.PI * 2);
      context.fill();

      if (psi > 0.001) {
        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, coneLength, -psi, psi);
        context.closePath();
        context.fillStyle = highlight ? 'rgba(102,224,212,0.34)' : 'rgba(102,224,212,0.2)';
        context.fill();
      }

      context.strokeStyle = highlight ? 'rgba(226,233,246,0.45)' : 'rgba(148,162,192,0.24)';
      context.lineWidth = 1 * dpr;
      context.beginPath();
      context.arc(x, y, coneLength, 0, Math.PI * 2);
      context.stroke();

      context.fillStyle = highlight ? '#e2e9f6' : 'rgba(226,233,246,0.65)';
      context.beginPath();
      context.arc(x, y, (highlight ? 3.4 : 2.2) * dpr, 0, Math.PI * 2);
      context.fill();

      context.textAlign = 'center';
      context.textBaseline = 'top';
      context.font = `${(highlight ? 9.5 : 8) * dpr}px ui-monospace, monospace`;
      context.fillStyle = highlight ? '#66e0d4' : 'rgba(148,162,192,0.85)';
      context.fillText(
        `${r.toFixed(2)} r_s · ${((escapeHalfAngle(r) * 180) / Math.PI).toFixed(0)}°`,
        x,
        y + coneLength + 6 * dpr,
      );
    };

    // The horizon, as a band down the left edge: the cone at 1.00 r_s is empty.
    context.fillStyle = '#05070d';
    context.fillRect(0, 0, w * 0.055, h);
    context.strokeStyle = 'rgba(255,143,110,0.85)';
    context.lineWidth = 2 * dpr;
    context.beginPath();
    context.moveTo(w * 0.055, 0);
    context.lineTo(w * 0.055, h);
    context.stroke();

    context.save();
    context.translate(w * 0.038, h * 0.62);
    context.rotate(-Math.PI / 2);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(255,143,110,0.9)';
    context.fillText('event horizon', 0, 0);
    context.restore();

    // Outward, so the reader knows which way the cone opens.
    context.strokeStyle = 'rgba(148,162,192,0.35)';
    context.lineWidth = 1 * dpr;
    context.beginPath();
    context.moveTo(w * 0.075, h * 0.12);
    context.lineTo(w * 0.24, h * 0.12);
    context.stroke();
    context.textAlign = 'left';
    context.textBaseline = 'middle';
    context.font = `${8 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText('outward →', w * 0.25, h * 0.12);

    drawCone(radius, bigX, bigY, bigR, true);
    samples.forEach((r, index) => {
      const x = w * 0.14 + ((index + 0.5) / samples.length) * w * 0.8;
      drawCone(r, x, rowY, smallR, false);
    });

    // ---- Annotation ----------------------------------------------------------
    const psi = escapeHalfAngle(radius);
    const degrees = (psi * 180) / Math.PI;

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#e2e9f6';
    context.fillText('Directions from which light escapes, shaded.', 10 * dpr, 10 * dpr);

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = radius <= 1.001 ? '#ff8f6e' : 'rgba(148,162,192,0.95)';
    context.fillText(
      radius <= 1.001
        ? 'at the horizon: 0° — no outward direction remains'
        : `at ${radius.toFixed(2)} r_s: escape half-angle ${degrees.toFixed(1)}°`,
      10 * dpr,
      28 * dpr,
    );

    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(
      'cones drawn far larger than scale; reference row spaced for legibility',
      10 * dpr,
      h - 6 * dpr,
    );
  }, [width, height, dpr, radius]);

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Distance</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Radius, in Schwarzschild radii</span>
            <input
              className={styles.slider}
              type="range"
              min={1}
              max={12}
              step={0.01}
              value={radius}
              onChange={(event) => setRadius(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{radius.toFixed(2)} r_s</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={() => setRadius(1.5)}>
          Photon sphere
        </button>
        <button type="button" className={styles.toggle} onClick={() => setRadius(1)}>
          At the horizon
        </button>
      </div>
      <p className={styles.readout}>
        At 1.5 r_s — the photon sphere — light emitted exactly sideways orbits forever. Below it the
        escape cone points steadily further outward, and at the horizon it has closed entirely.
      </p>
    </div>
  );
}
