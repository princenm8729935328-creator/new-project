import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Weighing stars: the only way it is actually done.
 *
 * Every stellar mass anyone quotes traces back to a binary. There is no way to
 * weigh an isolated star — you can only measure how something else moves under
 * its gravity. Two relationships do all the work here and both are computed:
 * Kepler's third law gives the total mass from the period and separation, and
 * the ratio of the two orbital radii gives the mass ratio, since the heavier
 * star moves on the smaller ellipse.
 *
 * The eclipsing view exists because it removes the last ambiguity. Without
 * eclipses you only know M·sin³i; with them you know the orbit is edge-on, and
 * that is why detached eclipsing binaries give the most accurate stellar masses
 * that exist.
 */

const G = 6.674e-11;
const M_SUN = 1.989e30;
const AU = 1.496e11;
const YEAR = 3.156e7;

export default function BinaryStarMasses({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [m1, setM1] = useState(2);
  const [m2, setM2] = useState(1);
  const [separationAu, setSeparationAu] = useState(2);
  const [eclipsing, setEclipsing] = useState(false);
  const clock = useRef(0);
  const [tick, setTick] = useState(0);

  const total = m1 + m2;
  /** Kepler's third law: T² = 4π²a³ / G(M₁+M₂). */
  const periodYr =
    Math.sqrt((4 * Math.PI ** 2 * (separationAu * AU) ** 3) / (G * total * M_SUN)) / YEAR;
  const r1 = separationAu * (m2 / total);
  const r2 = separationAu * (m1 / total);

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

    const orbitH = eclipsing ? h * 0.62 : h;
    const cx = w / 2;
    const cy = orbitH * 0.48;
    const scale = (Math.min(w, orbitH) * 0.36) / separationAu;
    const flatten = eclipsing ? 0.16 : 0.62;

    const angle = (clock.current / Math.max(0.2, periodYr)) * Math.PI * 2;

    // Orbits.
    context.strokeStyle = 'rgba(148,162,192,0.28)';
    context.lineWidth = 1 * dpr;
    for (const r of [r1, r2]) {
      context.beginPath();
      context.ellipse(cx, cy, r * scale, r * scale * flatten, 0, 0, Math.PI * 2);
      context.stroke();
    }

    // Centre of mass.
    context.fillStyle = 'rgba(226,233,246,0.6)';
    context.beginPath();
    context.arc(cx, cy, 2 * dpr, 0, Math.PI * 2);
    context.fill();
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillText('centre of mass', cx, cy + 6 * dpr);

    const x1 = cx + Math.cos(angle) * r1 * scale;
    const y1 = cy + Math.sin(angle) * r1 * scale * flatten;
    const x2 = cx - Math.cos(angle) * r2 * scale;
    const y2 = cy - Math.sin(angle) * r2 * scale * flatten;

    const rad1 = Math.max(4 * dpr, Math.cbrt(m1) * 7 * dpr);
    const rad2 = Math.max(4 * dpr, Math.cbrt(m2) * 7 * dpr);

    // Draw the further star first so the nearer one occults it.
    const order = Math.sin(angle) >= 0 ? [1, 0] : [0, 1];
    for (const which of order) {
      const x = which === 0 ? x1 : x2;
      const y = which === 0 ? y1 : y2;
      const r = which === 0 ? rad1 : rad2;
      const colour = which === 0 ? '#ffd27f' : '#7fc7ff';
      const glow = context.createRadialGradient(x, y, 0, x, y, r * 2.4);
      glow.addColorStop(0, colour);
      glow.addColorStop(0.4, `${colour}cc`);
      glow.addColorStop(1, `${colour}00`);
      context.fillStyle = glow;
      context.beginPath();
      context.arc(x, y, r * 2.4, 0, Math.PI * 2);
      context.fill();
    }

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(`period ${periodYr.toPrecision(3)} yr`, 10 * dpr, 10 * dpr);
    context.fillText(`separation ${separationAu.toPrecision(2)} au`, 10 * dpr, 26 * dpr);
    context.fillStyle = '#4fe0c0';
    context.fillText(`total mass ${total.toPrecision(3)} M☉`, 10 * dpr, 42 * dpr);

    // ---- Light curve, in eclipsing mode ---------------------------------
    if (eclipsing) {
      const lcTop = orbitH + 4 * dpr;
      const lcH = h - lcTop - 22 * dpr;
      context.fillStyle = 'rgba(4,6,13,0.7)';
      context.fillRect(0, lcTop - 4 * dpr, w, h - lcTop + 4 * dpr);

      // Total light, with each star's contribution ∝ its radius² × its
      // temperature⁴, approximated here from mass through the main sequence.
      const lum = (m: number): number => (m < 2 ? m ** 4 : 1.4 * m ** 3.5);
      const l1 = lum(m1);
      const l2 = lum(m2);
      const radius = (m: number): number => Math.cbrt(m) * 0.05;

      const flux = (a: number): number => {
        const sep = Math.abs(Math.cos(a)) * 0 + Math.abs(Math.sin(a));
        // Projected separation, in units of the sum of radii.
        const proj = Math.abs(Math.cos(a)) * separationAu;
        const sumR = radius(m1) + radius(m2);
        if (proj >= sumR) return 1;
        const overlap = 1 - proj / sumR;
        // Which star is in front decides how much light is lost.
        const blocked = sep === 0 ? 0 : Math.sin(a) > 0 ? l1 * overlap : l2 * overlap;
        return Math.max(0.35, 1 - (blocked / (l1 + l2)) * 0.9);
      };

      context.strokeStyle = '#4fe0c0';
      context.lineWidth = 1.6 * dpr;
      context.beginPath();
      for (let i = 0; i <= 200; i += 1) {
        const a = (i / 200) * Math.PI * 4;
        const x = 10 * dpr + (i / 200) * (w - 20 * dpr);
        const y = lcTop + lcH * (1 - (flux(a) - 0.3) / 0.75);
        if (i === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();

      // Where we are now.
      const nowFrac = ((clock.current / Math.max(0.2, periodYr)) % 2) / 2;
      const nx = 10 * dpr + nowFrac * (w - 20 * dpr);
      context.strokeStyle = 'rgba(226,233,246,0.5)';
      context.lineWidth = 1 * dpr;
      context.beginPath();
      context.moveTo(nx, lcTop);
      context.lineTo(nx, lcTop + lcH);
      context.stroke();

      context.font = `${9 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(148,162,192,0.9)';
      context.textAlign = 'left';
      context.fillText(
        'brightness — each dip is one star passing in front of the other',
        10 * dpr,
        h - 16 * dpr,
      );
    } else {
      context.textAlign = 'right';
      context.font = `${9 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(148,162,192,0.75)';
      context.fillText(
        'stars drawn enormously oversized relative to the orbit',
        w - 10 * dpr,
        h - 16 * dpr,
      );
    }
  }, [width, height, dpr, m1, m2, separationAu, periodYr, r1, r2, eclipsing, total]);

  useAnimationFrame(
    (delta) => {
      clock.current += delta * Math.max(0.4, periodYr) * 0.35;
      setTick(clock.current);
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion, tick]);

  return (
    <div className={styles.chartStack}>
      <canvas ref={canvasRef} className={styles.flowCanvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Star A</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass of the first star in solar masses</span>
            <input
              className={styles.slider}
              type="range"
              min={0.3}
              max={8}
              step={0.05}
              value={m1}
              onChange={(e) => setM1(Number(e.target.value))}
            />
          </label>
          <output className={styles.value}>{m1.toFixed(2)} M☉</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Star B</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass of the second star in solar masses</span>
            <input
              className={styles.slider}
              type="range"
              min={0.3}
              max={8}
              step={0.05}
              value={m2}
              onChange={(e) => setM2(Number(e.target.value))}
            />
          </label>
          <output className={styles.value}>{m2.toFixed(2)} M☉</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Separation</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Orbital separation in astronomical units</span>
            <input
              className={styles.slider}
              type="range"
              min={0.2}
              max={8}
              step={0.05}
              value={separationAu}
              onChange={(e) => setSeparationAu(Number(e.target.value))}
            />
          </label>
          <output className={styles.value}>{separationAu.toFixed(2)} au</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={!eclipsing}
          onClick={() => setEclipsing(false)}
        >
          Seen from above
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={eclipsing}
          onClick={() => setEclipsing(true)}
        >
          Seen edge-on (eclipsing)
        </button>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        Separation {separationAu.toFixed(2)} au and total mass {total.toPrecision(3)} M☉ give a
        period of <strong>{periodYr.toPrecision(3)} years</strong>, from a³ = M·T² in solar units —
        Kepler’s third law, with Newton’s correction that M is the <em>total</em> mass. The heavier
        star orbits on the smaller ellipse: A’s radius is {r1.toPrecision(2)} au and B’s is{' '}
        {r2.toPrecision(2)} au, a ratio of {(r2 / r1).toPrecision(3)} — which is exactly{' '}
        {(m1 / m2).toPrecision(3)}, the inverse mass ratio. Total mass plus mass ratio gives both
        masses separately.{' '}
        {eclipsing
          ? 'Edge-on, each star passes in front of the other once per orbit and the brightness dips. That confirms the orbit is very nearly edge-on, which removes the inclination ambiguity — and it is why detached eclipsing binaries give the most accurate stellar masses known, good to better than one percent.'
          : 'From an unknown viewing angle you measure only M·sin³i, and the inclination is unknown. Switch to the edge-on view to see what removes that ambiguity.'}
      </p>
    </div>
  );
}
