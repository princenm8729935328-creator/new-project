import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { UNIVERSE_AGE_YR, formatYears, lifetimeOf } from './starPhysics';
import styles from './controls.module.css';

/**
 * Main-sequence lifetime against mass, with the age of the Universe drawn on.
 *
 * The line at 13.8 billion years is the part that does the teaching. Almost the
 * whole curve lies above it: for most stars ever born, not one has yet had time
 * to finish. Stellar death is something that has so far happened only to the
 * heavy minority, and the light majority are all still in their first act.
 */

const W = 380;
const H = 226;
const LEFT = 42;
const RIGHT = 12;
const TOP = 22;
const BOTTOM = 42;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const LOG_M_MIN = -1.05;
const LOG_M_MAX = 1.85; // 71 Msun
const LOG_T_MIN = 6; // 1 Myr
const LOG_T_MAX = 13; // 10 Tyr

const px = (mass: number): number =>
  LEFT + ((Math.log10(mass) - LOG_M_MIN) / (LOG_M_MAX - LOG_M_MIN)) * PLOT_W;
const py = (years: number): number =>
  TOP + PLOT_H - ((Math.log10(years) - LOG_T_MIN) / (LOG_T_MAX - LOG_T_MIN)) * PLOT_H;

const CURVE = Array.from({ length: 90 }, (_, i) => {
  const m = 10 ** (LOG_M_MIN + (i / 89) * (LOG_M_MAX - LOG_M_MIN));
  return `${i === 0 ? 'M' : 'L'}${px(m).toFixed(2)},${py(lifetimeOf(m)).toFixed(2)}`;
}).join(' ');

/** Mass at which the lifetime curve crosses the age of the Universe. */
function crossoverMass(): number {
  let lo = 0.1;
  let hi = 20;
  for (let i = 0; i < 60; i += 1) {
    const mid = Math.sqrt(lo * hi);
    if (lifetimeOf(mid) > UNIVERSE_AGE_YR) lo = mid;
    else hi = mid;
  }
  return Math.sqrt(lo * hi);
}
const CROSSOVER = crossoverMass();

export default function StellarLifetimes(_props: VisualizationProps): ReactNode {
  const [mass, setMass] = useState(1);
  const life = lifetimeOf(mass);
  const generations = UNIVERSE_AGE_YR / life;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {/* Below the line: stars that have had time to die. */}
        <rect
          x={LEFT}
          y={py(UNIVERSE_AGE_YR)}
          width={PLOT_W}
          height={TOP + PLOT_H - py(UNIVERSE_AGE_YR)}
          fill="rgba(255,143,110,0.07)"
        />

        {[6, 7, 8, 9, 10, 11, 12, 13].map((exp) => (
          <g key={exp}>
            <line
              x1={LEFT}
              x2={LEFT + PLOT_W}
              y1={py(10 ** exp)}
              y2={py(10 ** exp)}
              stroke="rgba(148,162,192,0.12)"
            />
            <text
              x={LEFT - 5}
              y={py(10 ** exp) + 3.5}
              textAnchor="end"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              10{['⁶', '⁷', '⁸', '⁹', '¹⁰', '¹¹', '¹²', '¹³'][exp - 6]}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 10} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          main-sequence lifetime, years
        </text>

        {[0.1, 1, 10, 60].map((tick) => (
          <g key={tick}>
            <line
              x1={px(tick)}
              x2={px(tick)}
              y1={TOP}
              y2={TOP + PLOT_H}
              stroke="rgba(148,162,192,0.12)"
            />
            <text
              x={px(tick)}
              y={TOP + PLOT_H + 13}
              textAnchor="middle"
              fontSize={9}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick}
            </text>
          </g>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 26}
          textAnchor="middle"
          fontSize={9.5}
          fill="rgba(148,162,192,0.9)"
        >
          mass ÷ Sun’s mass
        </text>

        <line
          x1={LEFT}
          x2={LEFT + PLOT_W}
          y1={py(UNIVERSE_AGE_YR)}
          y2={py(UNIVERSE_AGE_YR)}
          stroke="#ff8f6e"
          strokeWidth={1.3}
          strokeDasharray="5 3"
        />
        <text
          x={LEFT + PLOT_W - 3}
          y={py(UNIVERSE_AGE_YR) - 5}
          textAnchor="end"
          fontSize={8.5}
          fill="#ff8f6e"
        >
          age of the Universe, 13.8 Gyr
        </text>
        <text x={LEFT + 4} y={py(UNIVERSE_AGE_YR) + 13} fontSize={8.5} fill="rgba(255,143,110,0.9)">
          below: has had time to die
        </text>

        <path d={CURVE} fill="none" stroke="#8fb8ff" strokeWidth={1.9} />

        <circle cx={px(1)} cy={py(lifetimeOf(1))} r={3.6} fill="#ffd27f" />
        <text x={px(1) + 6} y={py(lifetimeOf(1)) - 5} fontSize={8.5} fill="#ffd27f">
          Sun
        </text>

        <line
          x1={px(CROSSOVER)}
          x2={px(CROSSOVER)}
          y1={py(UNIVERSE_AGE_YR)}
          y2={TOP + PLOT_H}
          stroke="rgba(255,143,110,0.5)"
          strokeDasharray="2 3"
        />
        <text
          x={px(CROSSOVER) + 4}
          y={TOP + PLOT_H - 6}
          fontSize={8.5}
          fill="rgba(255,143,110,0.9)"
        >
          {CROSSOVER.toFixed(1)} M☉
        </text>

        <circle
          cx={px(mass)}
          cy={py(life)}
          r={5.5}
          fill="none"
          stroke="#4fe0c0"
          strokeWidth={1.6}
        />
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Stellar mass in solar masses</span>
            <input
              className={styles.slider}
              type="range"
              min={-1}
              max={1.8}
              step={0.01}
              value={Math.log10(mass)}
              onChange={(event) => setMass(10 ** Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{mass.toPrecision(3)} M☉</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{mass.toPrecision(3)} M☉</strong> burns hydrogen for about{' '}
        <strong>{formatYears(life)}</strong>.{' '}
        {generations >= 1
          ? `Since the Big Bang, ${Math.floor(generations).toLocaleString()} such stars could have lived and died one after another.`
          : `That is longer than the Universe has existed, so no star of this mass has ever finished — the figure is a prediction that cannot yet be checked.`}{' '}
        The curve crosses the age of the Universe at about {CROSSOVER.toFixed(1)} solar masses:
        everything lighter than that is still on its first act.
      </p>
    </div>
  );
}
