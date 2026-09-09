import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The Casimir force, and a deliberate refusal to draw popcorn.
 *
 * The popular image of the vacuum — particles blinking into existence and out
 * again everywhere, all the time — comes from reading Feynman diagrams as if
 * they were photographs of events. They are terms in a perturbation series. The
 * vacuum state is a state, and it is the lowest-energy one; nothing is
 * happening in it in the sense that word usually carries.
 *
 * What is true, and is measured, is that the vacuum's energy depends on the
 * boundaries you impose. Put two mirrors close together and only the field modes
 * that fit between them are available, while outside every mode is; the
 * imbalance is a pressure, and it has been measured. That is what this figure
 * plots, from the exact expression P = π²ħc / 240a⁴.
 */

const HBAR = 1.054571817e-34;
const C = 2.99792458e8;

/** Casimir pressure between ideal parallel plates, in pascals, for a in metres. */
const pressure = (a: number): number => (Math.PI ** 2 * HBAR * C) / (240 * a ** 4);

const W = 380;
const H = 296;
const PLOT_L = 44;
const PLOT_R = 232;
const PLOT_T = 38;
const PLOT_B = H - 74;

const LOG_A_MIN = -8.3; // 5 nm
const LOG_A_MAX = -5; // 10 µm
const LOG_P_MIN = -6;
const LOG_P_MAX = 6;

const xOf = (a: number): number =>
  PLOT_L + ((Math.log10(a) - LOG_A_MIN) / (LOG_A_MAX - LOG_A_MIN)) * (PLOT_R - PLOT_L);
const yOf = (p: number): number =>
  PLOT_B - ((Math.log10(p) - LOG_P_MIN) / (LOG_P_MAX - LOG_P_MIN)) * (PLOT_B - PLOT_T);

/** The range over which the Casimir force has actually been measured. */
const MEASURED_MIN = 0.6e-6;
const MEASURED_MAX = 6e-6;

export default function QuantumVacuumFluctuations(_props: VisualizationProps): ReactNode {
  const [logA, setLogA] = useState(-7);
  const separation = 10 ** logA;
  const p = pressure(separation);

  const curve = Array.from({ length: 80 }, (_, index) => {
    const a = 10 ** (LOG_A_MIN + ((LOG_A_MAX - LOG_A_MIN) * index) / 79);
    return `${index === 0 ? 'M' : 'L'}${xOf(a).toFixed(2)},${yOf(pressure(a)).toFixed(2)}`;
  }).join(' ');

  /** Modes that fit between the plates, for the small diagram on the right. */
  const modes = Math.max(1, Math.min(6, Math.round(4 - (logA + 7) * 1.6)));

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
          Casimir pressure between two mirrors. Both axes logarithmic.
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          P = π²ħc / 240a⁴ — no particles are drawn appearing and disappearing
        </text>

        {/* The band where it has been measured, as opposed to extrapolated. */}
        <rect
          x={xOf(MEASURED_MIN)}
          y={PLOT_T}
          width={xOf(MEASURED_MAX) - xOf(MEASURED_MIN)}
          height={PLOT_B - PLOT_T}
          fill="rgba(255,214,110,0.12)"
        />
        <text
          x={(xOf(MEASURED_MIN) + xOf(MEASURED_MAX)) / 2}
          y={PLOT_T + 11}
          textAnchor="middle"
          fontSize={7}
          fill="rgba(255,214,110,0.95)"
        >
          measured
        </text>

        <line x1={PLOT_L} x2={PLOT_R} y1={PLOT_B} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        <line x1={PLOT_L} x2={PLOT_L} y1={PLOT_T} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        {[-8, -7, -6, -5].map((decade) => (
          <text
            key={decade}
            x={xOf(10 ** decade)}
            y={PLOT_B + 12}
            textAnchor="middle"
            fontSize={7.5}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            1e{decade}
          </text>
        ))}
        <text
          x={(PLOT_L + PLOT_R) / 2}
          y={PLOT_B + 24}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(148,162,192,0.8)"
        >
          plate separation, metres
        </text>
        {[-6, -3, 0, 3, 6].map((decade) => (
          <g key={decade}>
            <line
              x1={PLOT_L}
              x2={PLOT_R}
              y1={yOf(10 ** decade)}
              y2={yOf(10 ** decade)}
              stroke="rgba(148,162,192,0.08)"
            />
            <text
              x={PLOT_L - 4}
              y={yOf(10 ** decade) + 3}
              textAnchor="end"
              fontSize={7.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              1e{decade}
            </text>
          </g>
        ))}
        <text x={12} y={PLOT_T - 6} fontSize={8} fill="rgba(148,162,192,0.8)">
          pascals
        </text>

        {/* One atmosphere, for a sense of scale. */}
        <line
          x1={PLOT_L}
          x2={PLOT_R}
          y1={yOf(101325)}
          y2={yOf(101325)}
          stroke="rgba(255,143,110,0.6)"
          strokeDasharray="4 3"
        />
        <text
          x={PLOT_R - 2}
          y={yOf(101325) - 4}
          textAnchor="end"
          fontSize={7}
          fill="rgba(255,143,110,0.9)"
        >
          1 atmosphere
        </text>

        <path d={curve} fill="none" stroke="#66e0d4" strokeWidth={2} />
        <circle
          cx={xOf(separation)}
          cy={yOf(p)}
          r={5}
          fill="none"
          stroke="#a97bff"
          strokeWidth={2}
        />

        {/* Why: modes that fit, against modes that do not. */}
        <text x={252} y={PLOT_T - 6} fontSize={8} fill="rgba(148,162,192,0.85)">
          modes that fit
        </text>
        <line
          x1={258}
          x2={258}
          y1={PLOT_T}
          y2={PLOT_B - 20}
          stroke="rgba(226,233,246,0.7)"
          strokeWidth={2}
        />
        <line
          x1={344}
          x2={344}
          y1={PLOT_T}
          y2={PLOT_B - 20}
          stroke="rgba(226,233,246,0.7)"
          strokeWidth={2}
        />
        {Array.from({ length: modes }, (_, index) => {
          const n = index + 1;
          const path = Array.from({ length: 40 }, (_, j) => {
            const t = j / 39;
            const x = 258 + t * 86;
            const y = PLOT_T + 18 + index * 22 + 8 * Math.sin(n * Math.PI * t);
            return `${j === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
          }).join(' ');
          return <path key={n} d={path} fill="none" stroke="#ffd66e" strokeWidth={1.2} />;
        })}
        <text x={301} y={PLOT_B - 8} textAnchor="middle" fontSize={7} fill="rgba(148,162,192,0.8)">
          outside: every mode allowed
        </text>
        <text x={301} y={PLOT_B + 2} textAnchor="middle" fontSize={7} fill="rgba(148,162,192,0.8)">
          inside: only these — hence a push
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Gap</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Plate separation, log₁₀ metres</span>
            <input
              className={styles.slider}
              type="range"
              min={LOG_A_MIN}
              max={LOG_A_MAX}
              step={0.05}
              value={logA}
              onChange={(event) => setLogA(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>
            {separation >= 1e-6
              ? `${(separation * 1e6).toFixed(2)} µm`
              : `${(separation * 1e9).toFixed(1)} nm`}
          </output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        At a gap of{' '}
        <strong>
          {separation >= 1e-6
            ? `${(separation * 1e6).toFixed(2)} µm`
            : `${(separation * 1e9).toFixed(1)} nm`}
        </strong>{' '}
        the plates are pushed together with a pressure of{' '}
        <strong>{p < 1 ? p.toExponential(2) : p.toPrecision(3)} Pa</strong>
        {p > 5e4 ? ' — comparable to atmospheric pressure' : ''}. The effect is real and measured.
        What it shows is that the vacuum has structure and that its energy depends on boundaries —
        not that empty space is full of particles flickering in and out. That image comes from
        reading Feynman diagrams as photographs of events; they are terms in a calculation. The
        honest summary is that the vacuum is the lowest-energy state of the fields, and that the
        naive estimate of its energy density over-predicts the observed dark energy by many tens of
        orders of magnitude — the largest unexplained number in physics, and nobody knows why.
      </p>
    </div>
  );
}
