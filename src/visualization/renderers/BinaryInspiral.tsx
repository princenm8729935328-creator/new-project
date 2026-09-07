import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * An orbit running out, at the rate general relativity says it should.
 *
 * The separation follows the leading-order quadrupole result, in which the
 * remaining time to merger goes as the fourth power of the separation — so
 * a(t) ∝ (t_c − t)^(1/4) and the collapse into the merger accelerates in the way
 * a real inspiral does, rather than easing in on a curve chosen by eye. The
 * orbital frequency is then Keplerian, which is why the last few orbits happen
 * in a blur.
 *
 * The timescale is compressed by many orders of magnitude, the black holes are
 * drawn far larger than their horizons relative to the orbit, and the waves are
 * drawn as visible ripples, which they emphatically are not.
 */

const A0 = 1;
const A_MERGE = 0.12;

interface Ripple {
  radius: number;
  strength: number;
}

interface Sim {
  /** Fraction of the way through the inspiral, 0 → 1. */
  tau: number;
  phase: number;
  ripples: Ripple[];
  /** Seconds since merger, for the ringdown hold. */
  after: number;
}

export default function BinaryInspiral({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** m₂/m₁, from equal masses down to a strongly asymmetric pair. */
  const [ratio, setRatio] = useState(0.8);
  const simRef = useRef<Sim>({ tau: 0, phase: 0, ripples: [], after: 0 });

  const reset = useCallback(() => {
    simRef.current = { tau: 0, phase: 0, ripples: [], after: 0 };
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

    const sim = simRef.current;
    const cx = w * 0.5;
    const cy = h * 0.52;
    const unit = Math.min(w, h) * 0.34;

    // Separation from the quadrupole result: a ∝ (1 − τ)^(1/4).
    const separation = Math.max(A_MERGE, A0 * Math.pow(Math.max(0, 1 - sim.tau), 0.25));
    const merged = sim.after > 0;

    // ---- Ripples --------------------------------------------------------------
    for (const ripple of sim.ripples) {
      context.strokeStyle = `rgba(169,123,255,${Math.max(0, ripple.strength * (1 - ripple.radius / 1.4))})`;
      context.lineWidth = 1.2 * dpr;
      context.beginPath();
      context.arc(cx, cy, ripple.radius * unit, 0, Math.PI * 2);
      context.stroke();
    }

    const m1 = 1;
    const m2 = ratio;
    const total = m1 + m2;
    const r1 = (separation * m2) / total;
    const r2 = (separation * m1) / total;
    const size1 = unit * 0.06 * Math.cbrt(m1);
    const size2 = unit * 0.06 * Math.cbrt(m2);

    if (merged) {
      // The remnant, briefly distorted, then settling.
      const settle = Math.min(1, sim.after / 0.9);
      const wobble = (1 - settle) * 0.28 * Math.sin(sim.after * 34);
      const remnant = unit * 0.06 * Math.cbrt(total);
      context.fillStyle = '#04060c';
      context.beginPath();
      context.ellipse(cx, cy, remnant * (1 + wobble), remnant * (1 - wobble), 0, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = `rgba(255,143,110,${0.5 + 0.5 * settle})`;
      context.lineWidth = 2 * dpr;
      context.beginPath();
      context.ellipse(cx, cy, remnant * (1 + wobble), remnant * (1 - wobble), 0, 0, Math.PI * 2);
      context.stroke();
    } else {
      const draw1x = cx + r1 * unit * Math.cos(sim.phase);
      const draw1y = cy + r1 * unit * Math.sin(sim.phase);
      const draw2x = cx - r2 * unit * Math.cos(sim.phase);
      const draw2y = cy - r2 * unit * Math.sin(sim.phase);

      context.strokeStyle = 'rgba(148,162,192,0.2)';
      context.lineWidth = 1 * dpr;
      context.beginPath();
      context.arc(cx, cy, r1 * unit, 0, Math.PI * 2);
      context.stroke();
      context.beginPath();
      context.arc(cx, cy, r2 * unit, 0, Math.PI * 2);
      context.stroke();

      for (const [x, y, size] of [
        [draw1x, draw1y, size1],
        [draw2x, draw2y, size2],
      ] as const) {
        context.fillStyle = '#04060c';
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = 'rgba(255,143,110,0.85)';
        context.lineWidth = 1.6 * dpr;
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.stroke();
      }
    }

    // ---- Readouts ---------------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = merged ? '#ff8f6e' : '#e2e9f6';
    context.fillText(
      merged
        ? 'Merged — the remnant rings down and settles.'
        : 'Radiating energy, so the orbit shrinks.',
      10 * dpr,
      10 * dpr,
    );

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    if (!merged) {
      // Orbits remaining scales as a^(5/2) under the same quadrupole result.
      const remaining = Math.max(0, 0.6 * (Math.pow(separation / A_MERGE, 2.5) - 1));
      context.fillText(
        `separation ${(separation / A_MERGE).toFixed(1)}× the merged horizon · ~${remaining.toFixed(0)} orbits left`,
        10 * dpr,
        28 * dpr,
      );
    } else {
      context.fillText('one horizon where there were two', 10 * dpr, 28 * dpr);
    }

    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(
      'timescale compressed enormously; ripples drawn visible',
      10 * dpr,
      h - 6 * dpr,
    );
  }, [width, height, dpr, ratio]);

  useAnimationFrame(
    (delta) => {
      const sim = simRef.current;
      if (sim.after > 0) {
        sim.after += delta;
        for (const ripple of sim.ripples) ripple.radius += delta * 0.55;
        sim.ripples = sim.ripples.filter((ripple) => ripple.radius < 1.5);
        if (sim.after > 2.4) {
          sim.tau = 0;
          sim.phase = 0;
          sim.after = 0;
          sim.ripples = [];
        }
        draw();
        return;
      }

      const separation = Math.max(A_MERGE, A0 * Math.pow(Math.max(0, 1 - sim.tau), 0.25));
      // Kepler: Ω ∝ a^(−3/2).
      sim.phase += delta * 1.6 * Math.pow(separation, -1.5);
      sim.tau += delta * 0.11;

      for (const ripple of sim.ripples) ripple.radius += delta * 0.55;
      sim.ripples = sim.ripples.filter((ripple) => ripple.radius < 1.5);
      if (sim.ripples.length < 16 && Math.random() < delta * 12) {
        sim.ripples.push({ radius: separation * 0.6, strength: 0.15 + 0.55 * sim.tau });
      }

      if (separation <= A_MERGE + 1e-6) {
        sim.after = 0.001;
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
          <span className={styles.controlName}>Mass ratio</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Ratio of the two black-hole masses</span>
            <input
              className={styles.slider}
              type="range"
              min={0.15}
              max={1}
              step={0.01}
              value={ratio}
              onChange={(event) => setRatio(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{ratio.toFixed(2)} : 1</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={reset}>
          Restart
        </button>
      </div>
      <p className={styles.readout}>
        Radiating energy shrinks the orbit, which speeds it up, which radiates faster still. That
        runaway is why only the final moments are detectable — and why they are detectable across a
        billion light years.
      </p>
    </div>
  );
}
