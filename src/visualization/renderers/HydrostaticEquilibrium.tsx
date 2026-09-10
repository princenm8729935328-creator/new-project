import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A star as a balance, and what happens when you disturb it.
 *
 * The behaviour shown is real: squeeze a star and it heats, which raises the
 * pressure, which pushes back. Let it expand and it cools, and gravity wins
 * again. The arrows are drawn proportional to the actual gravity and pressure
 * terms at each moment, so their relative lengths carry the argument rather
 * than decorating it.
 *
 * What is not real is the pace. A star's thermal readjustment takes tens of
 * thousands of years; here it takes seconds. No stellar structure equation is
 * being integrated — the restoring force is a simple polytropic model with the
 * right sign and the right qualitative response.
 */

export default function HydrostaticEquilibrium({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Radius relative to equilibrium, and its rate of change. */
  const state = useRef({ r: 1, v: 0 });
  const [nudge, setNudge] = useState(0);
  const [readout, setReadout] = useState({ r: 1, t: 15.7, p: 1 });

  const push = useCallback((amount: number) => {
    state.current.r = 1 + amount;
    state.current.v = 0;
  }, []);

  /**
   * For an ideal gas sphere in virial equilibrium, the internal temperature
   * scales as 1/R and the central pressure as 1/R⁴, while gravity scales as
   * 1/R². Compressing the star therefore raises pressure faster than it raises
   * gravity, which is the whole reason a star is stable.
   */
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
    const cy = h * 0.5;
    const base = Math.min(w, h) * 0.28;
    const r = state.current.r;
    const radius = base * r;

    const temperature = 15.7 / r;
    const pressureTerm = 1 / r ** 4;
    const gravityTerm = 1 / r ** 2;

    // The star.
    const glow = context.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius);
    const hot = Math.min(1, Math.max(0, (temperature - 10) / 12));
    glow.addColorStop(0, `rgba(255,${200 + hot * 40},${140 + hot * 90},0.95)`);
    glow.addColorStop(0.7, `rgba(255,${150 + hot * 50},${70 + hot * 60},0.55)`);
    glow.addColorStop(1, 'rgba(255,120,60,0.08)');
    context.fillStyle = glow;
    context.beginPath();
    context.arc(cx, cy, radius, 0, Math.PI * 2);
    context.fill();

    // Equilibrium radius, for reference.
    context.strokeStyle = 'rgba(226,233,246,0.4)';
    context.lineWidth = 1 * dpr;
    context.setLineDash([4 * dpr, 4 * dpr]);
    context.beginPath();
    context.arc(cx, cy, base, 0, Math.PI * 2);
    context.stroke();
    context.setLineDash([]);

    // Arrows at three depths. Length ∝ the term, scaled to fit.
    const scale = base * 0.34;
    for (let i = 0; i < 8; i += 1) {
      const angle = (i / 8) * Math.PI * 2;
      const ux = Math.cos(angle);
      const uy = Math.sin(angle);
      const at = radius * 0.72;
      const x0 = cx + ux * at;
      const y0 = cy + uy * at;

      // Gravity: inward.
      const gLen = Math.min(scale * 1.6, scale * gravityTerm);
      context.strokeStyle = '#8fb8ff';
      context.lineWidth = 2 * dpr;
      context.beginPath();
      context.moveTo(x0, y0);
      context.lineTo(x0 - ux * gLen, y0 - uy * gLen);
      context.stroke();

      // Pressure: outward.
      const pLen = Math.min(scale * 1.6, scale * pressureTerm);
      context.strokeStyle = '#ff8f6e';
      context.beginPath();
      context.moveTo(x0, y0);
      context.lineTo(x0 + ux * pLen, y0 + uy * pLen);
      context.stroke();
    }

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#8fb8ff';
    context.fillText('← gravity pulling in', 10 * dpr, 10 * dpr);
    context.fillStyle = '#ff8f6e';
    context.fillText('pressure pushing out →', 10 * dpr, 26 * dpr);

    context.font = `${10 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(`radius ${r.toFixed(3)} × equilibrium`, 10 * dpr, h - 40 * dpr);
    context.fillText(`core ${temperature.toFixed(1)} million K`, 10 * dpr, h - 24 * dpr);

    context.textAlign = 'right';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText('conceptual — response compressed from millennia', w - 10 * dpr, h - 16 * dpr);
  }, [width, height, dpr]);

  useAnimationFrame(
    (delta) => {
      const s = state.current;
      // Restoring acceleration: pressure support minus gravity, with damping
      // standing in for the energy the star radiates while it readjusts.
      const accel = 6 * (1 / s.r ** 4 - 1 / s.r ** 2);
      s.v += accel * delta;
      s.v *= 0.986;
      s.r += s.v * delta;
      s.r = Math.max(0.55, Math.min(1.8, s.r));
      draw();
      setReadout({ r: s.r, t: 15.7 / s.r, p: 1 / s.r ** 4 });
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion, nudge]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Disturb</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Squeeze or stretch the star away from equilibrium
            </span>
            <input
              className={styles.slider}
              type="range"
              min={-0.35}
              max={0.6}
              step={0.01}
              value={nudge}
              onChange={(event) => {
                const value = Number(event.target.value);
                setNudge(value);
                push(value);
              }}
            />
          </label>
          <output className={styles.value}>{readout.r.toFixed(2)} R</output>
        </div>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        Radius <strong>{readout.r.toFixed(3)}×</strong> equilibrium, core temperature{' '}
        <strong>{readout.t.toFixed(1)} million K</strong>, central pressure {readout.p.toFixed(2)}×
        normal.{' '}
        {readout.r < 0.97
          ? 'Squeezed: the gas heated, and pressure rises faster than gravity does — so it pushes back and overshoots.'
          : readout.r > 1.03
            ? 'Stretched: the gas cooled, pressure fell away faster than gravity did, and gravity is winning.'
            : 'At balance. Wherever you put it, it comes back here — a star is a self-correcting object, and that is why it can burn steadily for billions of years.'}
      </p>
    </div>
  );
}
