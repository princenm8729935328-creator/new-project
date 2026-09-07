import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Twin jets, and the reason images almost always show one.
 *
 * The asymmetry is computed, not drawn: the Doppler factor for each jet is
 * δ = 1/(γ(1 − β cos θ)), and the observed brightness goes as δ^(3+α) with a
 * spectral index α of 0.7. So the ratio between the two jets, and the way it
 * explodes as speed rises and the viewing angle closes, is the real relativistic
 * result. The apparent transverse speed comes from the same geometry and can
 * exceed c without anything travelling that fast.
 *
 * The geometry, collimation and knot spacing are illustrative, and no
 * magnetohydrodynamics is solved. Real jets reach thousands of light years.
 */

const SPECTRAL_INDEX = 0.7;

const gamma = (beta: number): number => 1 / Math.sqrt(1 - beta * beta);

/** Doppler factor for motion at angle θ to the line of sight. */
const doppler = (beta: number, theta: number): number =>
  1 / (gamma(beta) * (1 - beta * Math.cos(theta)));

/** Apparent transverse speed, in units of c. */
const apparentSpeed = (beta: number, theta: number): number =>
  (beta * Math.sin(theta)) / (1 - beta * Math.cos(theta));

interface Knot {
  /** Distance along the jet, 0 to 1. */
  t: number;
  approaching: boolean;
}

export default function RelativisticJet({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [beta, setBeta] = useState(0.99);
  /** Angle between the approaching jet and the line of sight, in degrees. */
  const [angle, setAngle] = useState(20);

  const knotsRef = useRef<Knot[]>(
    Array.from({ length: 12 }, (_, index) => ({
      t: (index % 6) / 6,
      approaching: index < 6,
    })),
  );

  const theta = (angle * Math.PI) / 180;
  const dApproach = doppler(beta, theta);
  const dRecede = doppler(beta, Math.PI - theta);
  const ratio = (dApproach / dRecede) ** (3 + SPECTRAL_INDEX);
  const betaApp = apparentSpeed(beta, theta);

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
    const reach = Math.min(w * 0.42, h * 0.42);

    // Brightness of each jet, normalised so the brighter one is fully lit.
    const brightApproach = 1;
    const brightRecede = Math.min(1, 1 / ratio);

    // ---- The disc, edge on ---------------------------------------------------
    context.strokeStyle = 'rgba(255,180,94,0.5)';
    context.lineWidth = 2.4 * dpr;
    context.beginPath();
    context.ellipse(cx, cy, reach * 0.28, reach * 0.07, 0, 0, Math.PI * 2);
    context.stroke();

    // ---- The jets -------------------------------------------------------------
    const drawJet = (up: boolean, brightness: number): void => {
      const sign = up ? -1 : 1;
      const tipX = cx;
      const tipY = cy + sign * reach;
      const gradient = context.createLinearGradient(cx, cy, tipX, tipY);
      gradient.addColorStop(0, `rgba(140,200,255,${0.55 * brightness})`);
      gradient.addColorStop(1, `rgba(140,200,255,${0.06 * brightness})`);
      context.fillStyle = gradient;
      context.beginPath();
      context.moveTo(cx - 4 * dpr, cy);
      context.lineTo(cx + 4 * dpr, cy);
      context.lineTo(tipX + 22 * dpr, tipY);
      context.lineTo(tipX - 22 * dpr, tipY);
      context.closePath();
      context.fill();
    };

    drawJet(true, brightApproach);
    drawJet(false, brightRecede);

    for (const knot of knotsRef.current) {
      const sign = knot.approaching ? -1 : 1;
      const brightness = knot.approaching ? brightApproach : brightRecede;
      const y = cy + sign * knot.t * reach;
      const spread = 4 + knot.t * 18;
      context.fillStyle = `rgba(226,240,255,${Math.max(0.05, brightness) * (1 - knot.t * 0.5)})`;
      context.beginPath();
      context.ellipse(cx, y, spread * 0.5 * dpr, 3.5 * dpr, 0, 0, Math.PI * 2);
      context.fill();
    }

    // ---- The black hole -------------------------------------------------------
    context.fillStyle = '#04060c';
    context.beginPath();
    context.arc(cx, cy, 8 * dpr, 0, Math.PI * 2);
    context.fill();

    // ---- Line of sight --------------------------------------------------------
    context.strokeStyle = 'rgba(148,162,192,0.35)';
    context.setLineDash([3 * dpr, 4 * dpr]);
    context.lineWidth = 1 * dpr;
    context.beginPath();
    context.moveTo(cx, cy);
    context.lineTo(cx + reach * 0.85 * Math.sin(theta), cy - reach * 0.85 * Math.cos(theta));
    context.stroke();
    context.setLineDash([]);
    context.textAlign = 'left';
    context.textBaseline = 'middle';
    context.font = `${8 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText(
      'to us',
      cx + reach * 0.87 * Math.sin(theta) + 3 * dpr,
      cy - reach * 0.87 * Math.cos(theta),
    );

    // ---- Labels ---------------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#e2e9f6';
    context.fillText('Two jets. One of them you can see.', 10 * dpr, 10 * dpr);

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = '#8fb8ff';
    context.fillText(
      `brightness ratio ${ratio >= 1000 ? ratio.toExponential(1) : ratio.toFixed(0)}× · γ = ${gamma(beta).toFixed(1)}`,
      10 * dpr,
      28 * dpr,
    );
    context.fillStyle = betaApp > 1 ? '#ffd66e' : 'rgba(148,162,192,0.95)';
    context.fillText(`apparent transverse speed ${betaApp.toFixed(2)} c`, 10 * dpr, 44 * dpr);

    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(
      betaApp > 1
        ? 'nothing exceeds c — the apparent speed is a projection effect'
        : 'geometry illustrative; real jets extend thousands of light years',
      10 * dpr,
      h - 6 * dpr,
    );
  }, [width, height, dpr, beta, theta, ratio, betaApp]);

  useAnimationFrame(
    (delta) => {
      for (const knot of knotsRef.current) {
        knot.t += delta * beta * 0.45;
        if (knot.t > 1) knot.t -= 1;
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
          <span className={styles.controlName}>Jet speed</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Jet speed as a fraction of the speed of light
            </span>
            <input
              className={styles.slider}
              type="range"
              min={0.1}
              max={0.999}
              step={0.001}
              value={beta}
              onChange={(event) => setBeta(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{beta.toFixed(3)} c</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Viewing angle</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Angle between the jet and our line of sight</span>
            <input
              className={styles.slider}
              type="range"
              min={2}
              max={90}
              step={1}
              value={angle}
              onChange={(event) => setAngle(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{angle}°</output>
        </div>
      </div>
      <p className={styles.readout}>
        At 90° the two jets are equally bright, because neither is coming toward us. Close the angle
        and the approaching jet outshines its twin by orders of magnitude — the reason a symmetric
        source is photographed as a one-sided one.
      </p>
    </div>
  );
}
