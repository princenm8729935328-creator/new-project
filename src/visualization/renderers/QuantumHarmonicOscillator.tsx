import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The oscillator's stationary states, drawn on the energy levels they belong to.
 *
 * This is the figure that shows quantisation is a result rather than an
 * assumption. Nothing discrete is put into the Schrödinger equation. You demand
 * only that the solution stay finite far from the well — that the particle be
 * somewhere — and all but a discrete set of energies fail that demand. The
 * ladder E_n = (n + ½)ħω falls out.
 *
 * The half-quantum in that expression is the other content. The lowest allowed
 * state sits above the bottom of the well and cannot be lowered, which is why a
 * quantum oscillator never comes fully to rest even at absolute zero.
 */

/** Hermite polynomial H_n(x), by the standard recursion. */
function hermite(n: number, x: number): number {
  if (n === 0) return 1;
  if (n === 1) return 2 * x;
  let previous = 1;
  let current = 2 * x;
  for (let k = 2; k <= n; k += 1) {
    const next = 2 * x * current - 2 * (k - 1) * previous;
    previous = current;
    current = next;
  }
  return current;
}

function factorial(n: number): number {
  let result = 1;
  for (let k = 2; k <= n; k += 1) result *= k;
  return result;
}

/** ψ_n(x) in units where mω/ħ = 1. */
function psi(n: number, x: number): number {
  const norm = 1 / Math.sqrt(2 ** n * factorial(n) * Math.sqrt(Math.PI));
  return norm * hermite(n, x) * Math.exp(-(x * x) / 2);
}

const W = 380;
const H = 320;
const PLOT_L = 40;
const PLOT_R = W - 14;
const PLOT_T = 32;
const PLOT_B = H - 46;

const X_HALF = 4.6;
const E_MAX = 8;

const xOf = (x: number): number => PLOT_L + ((x + X_HALF) / (2 * X_HALF)) * (PLOT_R - PLOT_L);
const yOf = (e: number): number => PLOT_B - (e / E_MAX) * (PLOT_B - PLOT_T);

const LEVELS = [0, 1, 2, 3, 4, 5, 6];

export default function QuantumHarmonicOscillator(_props: VisualizationProps): ReactNode {
  const [n, setN] = useState(0);
  const [density, setDensity] = useState(false);

  const energy = n + 0.5;
  /** Classical turning points, where the level line meets the parabola. */
  const turning = Math.sqrt(2 * energy);

  const wave = Array.from({ length: 181 }, (_, index) => {
    const x = -X_HALF + (2 * X_HALF * index) / 180;
    const value = psi(n, x);
    const plotted = density ? value * value * 2.4 : value * 1.5;
    const y = yOf(energy) - plotted * ((PLOT_B - PLOT_T) / E_MAX) * 1.5;
    return `${index === 0 ? 'M' : 'L'}${xOf(x).toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');

  const potential = Array.from({ length: 121 }, (_, index) => {
    const x = -X_HALF + (2 * X_HALF * index) / 120;
    return `${index === 0 ? 'M' : 'L'}${xOf(x).toFixed(2)},${yOf(Math.min((x * x) / 2, E_MAX)).toFixed(2)}`;
  }).join(' ');

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text
          x={10}
          y={14}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          Allowed states of a quantum oscillator, on their own energy levels
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          E_n = (n + ½)ħω — evenly spaced, and never zero
        </text>

        <path d={potential} fill="none" stroke="rgba(148,162,192,0.45)" strokeWidth={1.4} />

        {LEVELS.map((level) => {
          const e = level + 0.5;
          const t = Math.sqrt(2 * e);
          const selected = level === n;
          return (
            <g key={level}>
              <line
                x1={xOf(-t)}
                x2={xOf(t)}
                y1={yOf(e)}
                y2={yOf(e)}
                stroke={selected ? '#66e0d4' : 'rgba(148,162,192,0.3)'}
                strokeWidth={selected ? 1.8 : 1}
                strokeDasharray={selected ? undefined : '3 3'}
              />
              <text
                x={PLOT_L - 4}
                y={yOf(e) + 3}
                textAnchor="end"
                fontSize={7.5}
                fill={selected ? '#66e0d4' : 'rgba(148,162,192,0.7)'}
                fontFamily="ui-monospace, monospace"
              >
                {level}
              </text>
            </g>
          );
        })}

        {/* The zero-point line, and what classical physics would have allowed. */}
        <line
          x1={PLOT_L}
          x2={PLOT_R}
          y1={yOf(0)}
          y2={yOf(0)}
          stroke="rgba(255,143,110,0.5)"
          strokeDasharray="2 3"
        />
        <text
          x={PLOT_R}
          y={yOf(0) - 4}
          textAnchor="end"
          fontSize={7.5}
          fill="rgba(255,143,110,0.9)"
        >
          classical minimum: zero energy, at rest — not available
        </text>
        <line
          x1={xOf(-turning)}
          x2={xOf(-turning)}
          y1={yOf(energy)}
          y2={PLOT_B}
          stroke="rgba(255,214,110,0.35)"
          strokeDasharray="2 3"
        />
        <line
          x1={xOf(turning)}
          x2={xOf(turning)}
          y1={yOf(energy)}
          y2={PLOT_B}
          stroke="rgba(255,214,110,0.35)"
          strokeDasharray="2 3"
        />

        <path d={wave} fill="none" stroke={density ? '#a97bff' : '#ffd66e'} strokeWidth={2} />

        <text x={PLOT_L} y={PLOT_B + 14} fontSize={7.5} fill="rgba(148,162,192,0.75)">
          position
        </text>
        <text
          x={PLOT_R}
          y={PLOT_B + 14}
          textAnchor="end"
          fontSize={7.5}
          fill="rgba(255,214,110,0.85)"
        >
          dashed lines: classical turning points
        </text>
        <text x={12} y={PLOT_T - 6} fontSize={8} fill="rgba(148,162,192,0.8)">
          energy, ħω
        </text>
      </svg>

      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={!density}
          onClick={() => setDensity(false)}
        >
          Wavefunction ψ
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={density}
          onClick={() => setDensity(true)}
        >
          Probability |ψ|²
        </button>
      </div>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Level n</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Quantum number n</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={6}
              step={1}
              value={n}
              onChange={(event) => setN(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>E = {energy.toFixed(1)} ħω</output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        {n === 0 ? (
          <>
            The ground state has <strong>{energy.toFixed(1)} ħω</strong>, not zero. This
            half-quantum cannot be removed by cooling: an oscillator at absolute zero still has it.
            It is a direct consequence of the uncertainty relation — a particle sitting exactly
            still at exactly the bottom of the well would have definite position and definite
            momentum at the same time.
          </>
        ) : (
          <>
            State n = {n} has energy <strong>{energy.toFixed(1)} ħω</strong> and{' '}
            <strong>
              {n} node{n === 1 ? '' : 's'}
            </strong>{' '}
            — points where the probability of finding the particle is exactly zero, with regions on
            either side where it is not. As n rises, the probability piles up near the turning
            points, which is where a classical oscillator also spends most of its time. That is the
            correspondence principle appearing on its own.
          </>
        )}{' '}
        Notice that the wavefunction is not quite zero outside the dashed turning points: there is a
        small probability of finding the particle where a classical one could not be at all.
      </p>
    </div>
  );
}
