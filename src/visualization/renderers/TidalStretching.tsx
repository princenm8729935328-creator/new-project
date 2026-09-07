import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The result that reverses the intuition: small black holes are worse.
 *
 * Tidal acceleration across a two-metre body is computed from 2GMΔr/r³ at the
 * chosen distance, and the lethal radius is where that reaches roughly a
 * thousand g. Because the horizon sits at 2GM/c², substituting gives a tidal
 * acceleration at the horizon proportional to 1/M² — so the mass slider moves
 * the lethal radius from far outside a stellar-mass horizon to far inside a
 * supermassive one.
 *
 * The falling figure and its distortion are illustrative; the numbers are not.
 */

const G = 6.6743e-11;
const C2 = 299792458 ** 2;
const SOLAR_MASS = 1.9885e30;
const BODY_LENGTH = 2;
/** Roughly where a human body is pulled apart, in m/s². */
const LETHAL = 1e4;

/** Tidal acceleration across a body of length L at distance r. */
const tidal = (massKg: number, r: number): number => (2 * G * massKg * BODY_LENGTH) / r ** 3;

/** r = 2GM/c². */
const horizonMetres = (massKg: number): number => (2 * G * massKg) / C2;

/** Distance at which the tidal acceleration reaches the lethal value. */
const lethalRadius = (massKg: number): number => Math.cbrt((2 * G * massKg * BODY_LENGTH) / LETHAL);

export default function TidalStretching({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Log₁₀ of the black-hole mass in solar masses. */
  const [logMass, setLogMass] = useState(1);
  /** Distance from the centre, in horizon radii. */
  const [distance, setDistance] = useState(3);

  const massKg = 10 ** logMass * SOLAR_MASS;
  const rH = horizonMetres(massKg);
  const r = distance * rH;
  const accel = tidal(massKg, r);
  const lethalR = lethalRadius(massKg);
  const lethalInHorizons = lethalR / rH;
  const fatal = accel > LETHAL;

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

    const cy = h * 0.52;
    const horizonX = w * 0.12;
    const maxHorizons = 12;
    const xOf = (horizons: number): number =>
      horizonX + (Math.min(horizons, maxHorizons) / maxHorizons) * (w * 0.82 - horizonX);

    // ---- The black hole ------------------------------------------------------
    context.fillStyle = '#04060c';
    context.fillRect(0, 0, horizonX, h);
    context.strokeStyle = 'rgba(255,143,110,0.9)';
    context.lineWidth = 2 * dpr;
    context.beginPath();
    context.moveTo(horizonX, 0);
    context.lineTo(horizonX, h);
    context.stroke();

    context.save();
    context.translate(horizonX - 8 * dpr, h * 0.5);
    context.rotate(-Math.PI / 2);
    context.textAlign = 'center';
    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(255,143,110,0.9)';
    context.fillText('horizon', 0, 0);
    context.restore();

    // ---- The lethal radius ----------------------------------------------------
    if (lethalInHorizons > 1) {
      const lx = xOf(lethalInHorizons);
      context.strokeStyle = 'rgba(255,143,110,0.7)';
      context.setLineDash([4 * dpr, 4 * dpr]);
      context.lineWidth = 1.3 * dpr;
      context.beginPath();
      context.moveTo(lx, 0);
      context.lineTo(lx, h);
      context.stroke();
      context.setLineDash([]);
      if (lethalInHorizons < maxHorizons) {
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.font = `${8 * dpr}px system-ui, sans-serif`;
        context.fillStyle = 'rgba(255,143,110,0.9)';
        context.fillText('torn apart here', lx + 4 * dpr, 10 * dpr);
      }
    }

    // ---- The falling body -----------------------------------------------------
    const x = xOf(distance);
    // Illustrative distortion, saturating so the figure stays on screen.
    const stretch = 1 + Math.min(3.2, Math.log10(1 + accel / 40));
    const bodyH = 26 * dpr * stretch;
    const bodyW = (9 * dpr) / Math.sqrt(stretch);
    context.fillStyle = fatal ? '#ff8f6e' : '#66e0d4';
    context.beginPath();
    context.ellipse(x, cy, bodyW, bodyH, 0, 0, Math.PI * 2);
    context.fill();

    // Arrows showing the direction of the stretch.
    context.strokeStyle = fatal ? 'rgba(255,143,110,0.9)' : 'rgba(102,224,212,0.8)';
    context.lineWidth = 1.4 * dpr;
    for (const sign of [-1, 1]) {
      context.beginPath();
      context.moveTo(x, cy + sign * (bodyH + 3 * dpr));
      context.lineTo(x, cy + sign * (bodyH + 14 * dpr));
      context.stroke();
    }

    // ---- Readouts --------------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = fatal ? '#ff8f6e' : '#66e0d4';
    context.fillText(
      fatal ? 'Beyond survivable — stretched apart.' : 'Survivable at this distance.',
      10 * dpr,
      10 * dpr,
    );

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `tidal stretch across 2 m: ${(accel / 9.81).toExponential(2)} g`,
      10 * dpr,
      28 * dpr,
    );
    context.fillText(
      lethalInHorizons > 1
        ? `lethal out to ${lethalInHorizons.toExponential(2)} horizon radii`
        : `lethal only inside ${lethalInHorizons.toExponential(2)} horizon radii — never reached`,
      10 * dpr,
      44 * dpr,
    );

    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(
      'drawn distortion exaggerated; the numbers are computed',
      10 * dpr,
      h - 6 * dpr,
    );
  }, [width, height, dpr, distance, accel, fatal, lethalInHorizons]);

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Black-hole mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass, log₁₀ solar masses</span>
            <input
              className={styles.slider}
              type="range"
              min={0.5}
              max={10}
              step={0.1}
              value={logMass}
              onChange={(event) => setLogMass(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>10^{logMass.toFixed(1)} M☉</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Distance</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Distance, in horizon radii</span>
            <input
              className={styles.slider}
              type="range"
              min={1}
              max={12}
              step={0.1}
              value={distance}
              onChange={(event) => setDistance(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{distance.toFixed(1)} r_s</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => {
            setLogMass(1);
            setDistance(1);
          }}
        >
          10 M☉, at the horizon
        </button>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => {
            setLogMass(9.8);
            setDistance(1);
          }}
        >
          M87*, at the horizon
        </button>
      </div>
      <p className={styles.readout}>
        At the horizon the tidal stretch scales as one over the square of the mass. A ten-solar-mass
        black hole is already lethal tens of horizon radii out; M87*’s horizon is gentler than
        standing on Earth.
      </p>
    </div>
  );
}
