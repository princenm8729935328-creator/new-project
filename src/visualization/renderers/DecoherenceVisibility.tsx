import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Fringe visibility against which-path distinguishability, on Englert's bound.
 *
 * The useful thing about this figure is that it makes a vague slogan into an
 * inequality. "Observing destroys interference" is not a mood; it is
 * V² + D² ≤ 1, a theorem, with experiments sitting on the boundary. And D is
 * defined by what the environment could in principle distinguish — not by
 * whether a person read the record — which is why decoherence works in an empty
 * laboratory at three in the morning.
 */

const W = 380;
const H = 290;
const PLOT_L = 44;
const PLOT_R = 214;
const PLOT_T = 34;
const PLOT_B = 216;

const xOf = (d: number): number => PLOT_L + d * (PLOT_R - PLOT_L);
const yOf = (v: number): number => PLOT_B - v * (PLOT_B - PLOT_T);

const FRINGE_L = 236;
const FRINGE_R = W - 12;

interface Landmark {
  readonly label: string;
  readonly detail: string;
  readonly distinguishability: number;
}

const LANDMARKS: readonly Landmark[] = [
  {
    label: 'Isolated molecule',
    detail:
      'C₆₀ fullerenes in 1999, and molecules of over 25,000 atomic mass units in 2019, held in high vacuum so the environment learns nothing about which path was taken. Full fringes.',
    distinguishability: 0.06,
  },
  {
    label: 'Partial coupling',
    detail:
      'Warm the same molecules and they emit thermal photons that carry partial path information. Visibility falls smoothly and continuously — there is no sudden switch from quantum to classical.',
    distinguishability: 0.72,
  },
  {
    label: 'Path recorded',
    detail:
      'Once the environment holds a complete record of which path was taken, the interference is gone, whether or not anyone ever reads it. This is decoherence, and it is why large warm objects never show fringes.',
    distinguishability: 0.995,
  },
];

export default function DecoherenceVisibility(_props: VisualizationProps): ReactNode {
  const [distinguishability, setDistinguishability] = useState(0.06);
  const visibility = Math.sqrt(Math.max(0, 1 - distinguishability ** 2));

  const boundary = Array.from({ length: 61 }, (_, index) => {
    const d = index / 60;
    return `${index === 0 ? 'M' : 'L'}${xOf(d).toFixed(2)},${yOf(Math.sqrt(1 - d * d)).toFixed(2)}`;
  }).join(' ');

  const nearest = LANDMARKS.reduce((best, entry) =>
    Math.abs(entry.distinguishability - distinguishability) <
    Math.abs(best.distinguishability - distinguishability)
      ? entry
      : best,
  );

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
          Fringe visibility V against which-path distinguishability D
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          V² + D² ≤ 1 — a theorem, not an interpretation
        </text>

        {/* Forbidden region. */}
        <path
          d={`${boundary} L${xOf(1)},${yOf(1)} L${xOf(0)},${yOf(1)} Z`}
          fill="rgba(255,143,110,0.09)"
        />
        <text x={xOf(0.12)} y={yOf(0.93)} fontSize={7.5} fill="rgba(255,143,110,0.95)">
          impossible
        </text>

        <line x1={PLOT_L} x2={PLOT_R} y1={PLOT_B} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        <line x1={PLOT_L} x2={PLOT_L} y1={PLOT_T} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        {[0, 0.5, 1].map((tick) => (
          <g key={tick}>
            <text
              x={xOf(tick)}
              y={PLOT_B + 12}
              textAnchor="middle"
              fontSize={7.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick}
            </text>
            <text
              x={PLOT_L - 4}
              y={yOf(tick) + 3}
              textAnchor="end"
              fontSize={7.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick}
            </text>
          </g>
        ))}
        <text
          x={(PLOT_L + PLOT_R) / 2}
          y={PLOT_B + 24}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(148,162,192,0.8)"
        >
          which-path information D
        </text>
        <text x={PLOT_L - 34} y={PLOT_T - 6} fontSize={8} fill="rgba(148,162,192,0.8)">
          visibility V
        </text>

        <path d={boundary} fill="none" stroke="#66e0d4" strokeWidth={2} />
        <circle cx={xOf(distinguishability)} cy={yOf(visibility)} r={5} fill="#a97bff" />

        {LANDMARKS.map((entry) => (
          <circle
            key={entry.label}
            cx={xOf(entry.distinguishability)}
            cy={yOf(Math.sqrt(1 - entry.distinguishability ** 2))}
            r={3}
            fill="none"
            stroke="rgba(255,214,110,0.9)"
            strokeWidth={1.4}
          />
        ))}

        {/* The fringes those numbers correspond to. */}
        <text x={FRINGE_L} y={PLOT_T - 10} fontSize={8} fill="rgba(148,162,192,0.85)">
          the fringes this gives
        </text>
        <rect
          x={FRINGE_L}
          y={PLOT_T}
          width={FRINGE_R - FRINGE_L}
          height={PLOT_B - PLOT_T}
          fill="rgba(6,8,16,0.9)"
          stroke="rgba(148,162,192,0.3)"
        />
        {Array.from({ length: 56 }, (_, index) => {
          const t = index / 55;
          const value = 0.5 * (1 + visibility * Math.cos(t * Math.PI * 7));
          const y = PLOT_T + t * (PLOT_B - PLOT_T);
          return (
            <rect
              key={index}
              x={FRINGE_L + 1}
              y={y}
              width={FRINGE_R - FRINGE_L - 2}
              height={(PLOT_B - PLOT_T) / 55 + 0.6}
              fill={`rgba(160,215,255,${(0.06 + 0.9 * value).toFixed(3)})`}
            />
          );
        })}
      </svg>

      <div className={styles.toggles}>
        {LANDMARKS.map((entry) => (
          <button
            key={entry.label}
            type="button"
            className={styles.toggle}
            aria-pressed={entry.label === nearest.label}
            onClick={() => setDistinguishability(entry.distinguishability)}
          >
            {entry.label}
          </button>
        ))}
      </div>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Info D</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Which-path distinguishability</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={distinguishability}
              onChange={(event) => setDistinguishability(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>V = {visibility.toFixed(2)}</output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        <strong>{nearest.label}.</strong> {nearest.detail} The trade-off is continuous: partial path
        information gives partial fringes, and V² + D² ={' '}
        {(visibility ** 2 + distinguishability ** 2).toFixed(2)} on the boundary. Note what D
        measures — what the <em>environment</em> could distinguish, not what anyone has looked at.
        No conscious observer appears anywhere in the calculation.
      </p>
    </div>
  );
}
