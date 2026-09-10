import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * S2 orbiting Sagittarius A*, from its published orbital elements.
 *
 * This is the single most direct evidence for a supermassive black hole
 * anywhere. Nobody photographed the object; what was done was to track
 * individual stars for decades, fit Keplerian orbits, and read the mass off the
 * period and semi-major axis. The ellipse and the speed variation along it are
 * therefore real, not drawn.
 *
 * The distinction the figure insists on is between what is measured — four
 * million solar masses inside a volume smaller than S2's periapsis — and what
 * is inferred: that such a thing must be a black hole, because no other stable
 * configuration of that mass fits in that volume.
 */

const G = 6.674e-11;
const M_SUN = 1.989e30;
const AU = 1.496e11;
const YEAR = 3.156e7;

/** S2's published orbital elements. */
const PERIOD_YR = 16.05;
const SEMI_MAJOR_AU = 970;
const ECCENTRICITY = 0.884;

/** Kepler's third law: M = 4π²a³ / (G T²). */
const CENTRAL_MASS =
  (4 * Math.PI ** 2 * (SEMI_MAJOR_AU * AU) ** 3) / (G * (PERIOD_YR * YEAR) ** 2) / M_SUN;

const PERIAPSIS_AU = SEMI_MAJOR_AU * (1 - ECCENTRICITY);
const APOAPSIS_AU = SEMI_MAJOR_AU * (1 + ECCENTRICITY);

/** Solve Kepler's equation for the eccentric anomaly. */
function eccentricAnomaly(meanAnomaly: number): number {
  let e = meanAnomaly;
  for (let i = 0; i < 12; i += 1) {
    e -= (e - ECCENTRICITY * Math.sin(e) - meanAnomaly) / (1 - ECCENTRICITY * Math.cos(e));
  }
  return e;
}

export default function GalacticCentreOrbits({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Years per second of animation. */
  const [rate, setRate] = useState(3);
  const clock = useRef(0);
  const [state, setState] = useState({ years: 0, r: APOAPSIS_AU, v: 0 });

  const positionAt = useCallback((years: number) => {
    const meanAnomaly = ((years / PERIOD_YR) % 1) * Math.PI * 2;
    const E = eccentricAnomaly(meanAnomaly);
    // Coordinates in the orbital plane, focus at the origin.
    const x = SEMI_MAJOR_AU * (Math.cos(E) - ECCENTRICITY);
    const y = SEMI_MAJOR_AU * Math.sqrt(1 - ECCENTRICITY ** 2) * Math.sin(E);
    const r = Math.sqrt(x * x + y * y);
    // Vis-viva: v² = GM(2/r − 1/a).
    const v =
      Math.sqrt(G * CENTRAL_MASS * M_SUN * (2 / (r * AU) - 1 / (SEMI_MAJOR_AU * AU))) / 1000;
    return { x, y, r, v };
  }, []);

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

    const scale = (Math.min(w, h) * 0.38) / APOAPSIS_AU;
    // Centre the ellipse, not the focus.
    const cx = w / 2 + SEMI_MAJOR_AU * ECCENTRICITY * scale;
    const cy = h * 0.46;

    // The orbit.
    context.strokeStyle = 'rgba(143,184,255,0.55)';
    context.lineWidth = 1.4 * dpr;
    context.beginPath();
    for (let i = 0; i <= 180; i += 1) {
      const E = (i / 180) * Math.PI * 2;
      const x = cx + SEMI_MAJOR_AU * (Math.cos(E) - ECCENTRICITY) * scale;
      const y = cy + SEMI_MAJOR_AU * Math.sqrt(1 - ECCENTRICITY ** 2) * Math.sin(E) * scale;
      if (i === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.stroke();

    // The focus: where the mass is.
    context.fillStyle = '#e2e9f6';
    context.beginPath();
    context.arc(cx, cy, 3.5 * dpr, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = 'rgba(226,233,246,0.4)';
    context.lineWidth = 1 * dpr;
    context.setLineDash([2 * dpr, 3 * dpr]);
    context.beginPath();
    context.arc(cx, cy, 14 * dpr, 0, Math.PI * 2);
    context.stroke();
    context.setLineDash([]);
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillStyle = 'rgba(226,233,246,0.9)';
    context.fillText('Sgr A*', cx, cy + 18 * dpr);

    // The star.
    const p = positionAt(clock.current);
    const sx = cx + p.x * scale;
    const sy = cy + p.y * scale;
    const glow = context.createRadialGradient(sx, sy, 0, sx, sy, 10 * dpr);
    glow.addColorStop(0, 'rgba(255,245,220,0.95)');
    glow.addColorStop(1, 'rgba(255,220,170,0)');
    context.fillStyle = glow;
    context.beginPath();
    context.arc(sx, sy, 10 * dpr, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#fff6de';
    context.beginPath();
    context.arc(sx, sy, 3.2 * dpr, 0, Math.PI * 2);
    context.fill();
    context.textAlign = 'left';
    context.fillText('S2', sx + 7 * dpr, sy - 16 * dpr);

    context.textBaseline = 'top';
    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `year ${(clock.current % PERIOD_YR).toFixed(2)} of ${PERIOD_YR}`,
      10 * dpr,
      10 * dpr,
    );
    context.fillText(`separation ${p.r.toFixed(0)} au`, 10 * dpr, 26 * dpr);
    context.fillStyle = p.v > 4000 ? '#ff8f6e' : 'rgba(148,162,192,0.95)';
    context.fillText(
      `speed ${p.v.toFixed(0)} km/s = ${((p.v / 299792) * 100).toFixed(2)}% c`,
      10 * dpr,
      42 * dpr,
    );

    context.textAlign = 'right';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText(
      'orbit computed from published elements; marker not to scale',
      w - 10 * dpr,
      h - 16 * dpr,
    );
  }, [width, height, dpr, positionAt]);

  useAnimationFrame(
    (delta) => {
      clock.current += delta * rate;
      draw();
      const p = positionAt(clock.current);
      setState({ years: clock.current % PERIOD_YR, r: p.r, v: p.v });
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.chartStack}>
      <canvas ref={canvasRef} className={styles.flowCanvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Speed</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Playback rate in years per second</span>
            <input
              className={styles.slider}
              type="range"
              min={0.5}
              max={12}
              step={0.1}
              value={rate}
              onChange={(event) => setRate(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{rate.toFixed(1)} yr/s</output>
        </div>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        S2 is currently <strong>{state.r.toFixed(0)} au</strong> from the focus, moving at{' '}
        <strong>{state.v.toFixed(0)} km/s</strong>. Its 16.05-year period and 970-au semi-major axis
        give, by Kepler’s third law, a central mass of{' '}
        <strong>{(CENTRAL_MASS / 1e6).toFixed(2)} million solar masses</strong> — and at periapsis
        it passes within {PERIAPSIS_AU.toFixed(0)} au, so all that mass fits inside an orbit smaller
        than the Solar System’s outskirts.
      </p>
      <p className={styles.epochDetail}>
        <strong>What is measured</strong> is a mass inside a volume: four million suns within about
        a hundred astronomical units. <strong>What is inferred</strong> is that it is a black hole —
        because nothing else known can be that dense and stay stable, and because any cluster of
        dark objects packed that tightly would have dispersed or collapsed long ago. The 2022 image
        of a ring of emission around Sgr A* is consistent with this, but the orbits came first and
        remain the stronger argument.
      </p>
    </div>
  );
}
