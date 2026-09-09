import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The CHSH quantity against angle, with the classical bound drawn across it.
 *
 * Three different kinds of claim appear in this figure and they are drawn
 * differently on purpose.
 *
 * The line at S = 2 is a *theorem*: any theory in which the outcomes are fixed
 * in advance by properties the particles carry, and in which one detector's
 * setting cannot influence the other's outcome, must respect it. Bell derived
 * it without assuming quantum mechanics at all.
 *
 * The curve is a *prediction* of quantum mechanics, computed here from
 * E(a, b) = −cos(a − b) for the singlet state.
 *
 * The points are *measurements*, with their published uncertainties.
 *
 * Angles are given in the spin-½ convention. For photon polarisation every
 * angle halves, which is where the familiar 22.5° comes from.
 */

const DEG = Math.PI / 180;
const TSIRELSON = 2 * Math.SQRT2;

/** |S| for four settings separated by a common angle θ. */
const sOf = (thetaDeg: number): number => {
  const t = thetaDeg * DEG;
  return Math.abs(3 * Math.cos(t) - Math.cos(3 * t));
};

interface Measured {
  readonly label: string;
  readonly year: number;
  readonly value: number;
  readonly error: number;
  readonly note: string;
}

const MEASURED: readonly Measured[] = [
  {
    label: 'Aspect, Dalibard & Roger',
    year: 1982,
    value: 2.404,
    error: 0.08,
    note: 'Analyser settings switched while the photons were already in flight, so the settings could not have been known when the pair was created.',
  },
  {
    label: 'Hensen et al.',
    year: 2015,
    value: 2.42,
    error: 0.2,
    note: 'Electron spins 1.3 kilometres apart, with the detection and locality loopholes closed in the same run — the first experiment to close both at once.',
  },
];

const W = 380;
const H = 300;
const PLOT_L = 40;
const PLOT_R = W - 14;
const PLOT_T = 34;
const PLOT_B = H - 66;

const S_MIN = 1.2;
const S_MAX = 3;

const xOf = (theta: number): number => PLOT_L + (theta / 90) * (PLOT_R - PLOT_L);
const yOf = (s: number): number => PLOT_B - ((s - S_MIN) / (S_MAX - S_MIN)) * (PLOT_B - PLOT_T);

export default function BellTest(_props: VisualizationProps): ReactNode {
  const [theta, setTheta] = useState(45);
  const [selected, setSelected] = useState(1);
  const s = sOf(theta);

  const curve = Array.from({ length: 91 }, (_, index) => {
    const t = index;
    return `${index === 0 ? 'M' : 'L'}${xOf(t).toFixed(2)},${yOf(sOf(t)).toFixed(2)}`;
  }).join(' ');

  const entry = MEASURED[selected] ?? MEASURED[0];

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
          CHSH quantity S against analyser separation
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          spin-½ angles; for photon polarisation, halve them
        </text>

        {/* The region no local hidden-variable theory can enter. */}
        <rect
          x={PLOT_L}
          y={PLOT_T}
          width={PLOT_R - PLOT_L}
          height={yOf(2) - PLOT_T}
          fill="rgba(169,123,255,0.09)"
        />
        <text x={PLOT_L + 6} y={PLOT_T + 12} fontSize={8} fill="rgba(196,168,255,0.95)">
          no local hidden-variable theory can reach here
        </text>

        <line x1={PLOT_L} x2={PLOT_R} y1={PLOT_B} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        <line x1={PLOT_L} x2={PLOT_L} y1={PLOT_T} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        {[1.5, 2, 2.5, 3].map((tick) => (
          <g key={tick}>
            <line
              x1={PLOT_L}
              x2={PLOT_R}
              y1={yOf(tick)}
              y2={yOf(tick)}
              stroke="rgba(148,162,192,0.08)"
            />
            <text
              x={PLOT_L - 4}
              y={yOf(tick) + 3}
              textAnchor="end"
              fontSize={7.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick.toFixed(1)}
            </text>
          </g>
        ))}
        {[0, 30, 60, 90].map((tick) => (
          <text
            key={tick}
            x={xOf(tick)}
            y={PLOT_B + 12}
            textAnchor="middle"
            fontSize={7.5}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            {tick}°
          </text>
        ))}
        <text
          x={(PLOT_L + PLOT_R) / 2}
          y={PLOT_B + 24}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(148,162,192,0.8)"
        >
          separation between adjacent analyser settings
        </text>

        {/* Bell's bound — a theorem, drawn solid. */}
        <line x1={PLOT_L} x2={PLOT_R} y1={yOf(2)} y2={yOf(2)} stroke="#ff8f6e" strokeWidth={1.8} />
        <text x={PLOT_R - 4} y={yOf(2) + 12} textAnchor="end" fontSize={8} fill="#ff8f6e">
          Bell’s bound, S ≤ 2
        </text>

        {/* Tsirelson's bound — also a theorem, about quantum mechanics. */}
        <line
          x1={PLOT_L}
          x2={PLOT_R}
          y1={yOf(TSIRELSON)}
          y2={yOf(TSIRELSON)}
          stroke="rgba(148,162,192,0.45)"
          strokeDasharray="4 3"
        />
        <text
          x={PLOT_R - 4}
          y={yOf(TSIRELSON) - 5}
          textAnchor="end"
          fontSize={7.5}
          fill="rgba(148,162,192,0.85)"
        >
          quantum maximum 2√2 ≈ 2.828
        </text>

        <path d={curve} fill="none" stroke="#66e0d4" strokeWidth={2} />
        <circle cx={xOf(theta)} cy={yOf(s)} r={5} fill="none" stroke="#a97bff" strokeWidth={2} />

        {/* Measurements, with error bars. */}
        {MEASURED.map((point, index) => {
          const x = xOf(index === 0 ? 22 : 68);
          return (
            <g key={point.label}>
              <line
                x1={x}
                x2={x}
                y1={yOf(point.value - point.error)}
                y2={yOf(point.value + point.error)}
                stroke="#ffd66e"
                strokeWidth={1.6}
              />
              <circle
                cx={x}
                cy={yOf(point.value)}
                r={index === selected ? 4.5 : 3}
                fill="#ffd66e"
                onClick={() => setSelected(index)}
              />
              <text
                x={x}
                y={yOf(point.value + point.error) - 6}
                textAnchor="middle"
                fontSize={7.5}
                fill="#ffd66e"
              >
                {point.year}
              </text>
            </g>
          );
        })}
      </svg>

      <div className={styles.toggles}>
        {MEASURED.map((point, index) => (
          <button
            key={point.label}
            type="button"
            className={styles.toggle}
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            {point.label} {point.year}
          </button>
        ))}
        <button type="button" className={styles.toggle} onClick={() => setTheta(45)}>
          Optimal angle
        </button>
      </div>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Angle</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Analyser separation, degrees</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={90}
              step={1}
              value={theta}
              onChange={(event) => setTheta(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>S = {s.toFixed(3)}</output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        <strong>
          {entry?.label} ({entry?.year}): S = {entry?.value.toFixed(3)} ± {entry?.error.toFixed(3)}
        </strong>{' '}
        — {entry?.note} At the current setting quantum mechanics predicts{' '}
        <strong>S = {s.toFixed(3)}</strong>, {s > 2 ? 'above' : 'below'} the classical bound of 2.
        What a violation rules out is a specific class of explanation: that the outcomes were fixed
        in advance by properties the particles carried away with them, with no influence between the
        distant settings. It does <strong>not</strong> permit sending a signal faster than light,
        and it does not by itself pick out any one interpretation of quantum mechanics.
      </p>
    </div>
  );
}
