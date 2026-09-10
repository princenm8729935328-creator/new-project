import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Nuclear energy generation against core temperature, on log axes.
 *
 * The steepness is the whole argument. A star is stable not because anything
 * regulates it deliberately but because the fusion rate depends so violently on
 * temperature that any excess is immediately spent expanding the core, which
 * cools it back down. The pp chain's T⁴ is steep; the CNO cycle's T¹⁷ is
 * absurd, and it is why massive stars have convective cores.
 *
 * Rates are the standard power-law approximations normalised to solar core
 * conditions, not computed from cross-sections — the exponents carry the
 * argument, and they are the part that is right.
 */

const T_SOLAR = 15.7; // million K, the Sun's central temperature
const PP_EXP = 4;
const CNO_EXP = 17;

/** Relative rate, normalised so the pp chain is 1 at the solar core. */
const ppRate = (tMK: number): number => (tMK / T_SOLAR) ** PP_EXP;
/**
 * CNO normalised so it supplies about 0.8% of solar luminosity at T_SOLAR,
 * which is the measured figure Borexino confirmed in 2020.
 */
const cnoRate = (tMK: number): number => 0.008 * (tMK / T_SOLAR) ** CNO_EXP;

const W = 380;
const H = 226;
const LEFT = 44;
const RIGHT = 14;
const TOP = 24;
const BOTTOM = 42;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const T_MIN = 8;
const T_MAX = 32;
const LOG_R_MIN = -3;
const LOG_R_MAX = 4;

const px = (t: number): number => LEFT + ((t - T_MIN) / (T_MAX - T_MIN)) * PLOT_W;
const py = (r: number): number =>
  TOP + PLOT_H - ((Math.log10(Math.max(r, 1e-9)) - LOG_R_MIN) / (LOG_R_MAX - LOG_R_MIN)) * PLOT_H;

function curve(fn: (t: number) => number): string {
  return Array.from({ length: 90 }, (_, i) => {
    const t = T_MIN + (i / 89) * (T_MAX - T_MIN);
    return `${i === 0 ? 'M' : 'L'}${px(t).toFixed(2)},${Math.max(TOP - 12, py(fn(t))).toFixed(2)}`;
  }).join(' ');
}

/** Where the two curves cross — the mass above which CNO takes over. */
const CROSSOVER_T = T_SOLAR * 0.008 ** (-1 / (CNO_EXP - PP_EXP));

export default function StellarThermostat(_props: VisualizationProps): ReactNode {
  /** Fractional temperature perturbation, percent. */
  const [nudge, setNudge] = useState(0);
  const t = T_SOLAR * (1 + nudge / 100);
  const ppChange = (ppRate(t) / ppRate(T_SOLAR) - 1) * 100;
  const cnoChange = (cnoRate(t) / cnoRate(T_SOLAR) - 1) * 100;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <clipPath id="thermostat-plot">
          <rect x={LEFT} y={TOP - 12} width={PLOT_W} height={PLOT_H + 12} />
        </clipPath>

        {[-3, -1, 1, 3].map((exp) => (
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
              10{exp < 0 ? `⁻${Math.abs(exp)}` : exp}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 10} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          energy generation rate, relative
        </text>

        {[10, 15, 20, 25, 30].map((tick) => (
          <text
            key={tick}
            x={px(tick)}
            y={TOP + PLOT_H + 13}
            textAnchor="middle"
            fontSize={9}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            {tick}
          </text>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 26}
          textAnchor="middle"
          fontSize={9.5}
          fill="rgba(148,162,192,0.9)"
        >
          core temperature, millions of kelvin
        </text>

        <g clipPath="url(#thermostat-plot)">
          <path d={curve(ppRate)} fill="none" stroke="#8fb8ff" strokeWidth={2} />
          <path d={curve(cnoRate)} fill="none" stroke="#ff8f6e" strokeWidth={2} />
        </g>

        <text x={px(11)} y={py(ppRate(11)) - 7} fontSize={9} fill="#8fb8ff">
          pp chain ∝ T⁴
        </text>
        <text x={px(21)} y={py(cnoRate(21)) + 14} fontSize={9} fill="#ff8f6e">
          CNO ∝ T¹⁷
        </text>

        <line
          x1={px(CROSSOVER_T)}
          x2={px(CROSSOVER_T)}
          y1={TOP}
          y2={TOP + PLOT_H}
          stroke="rgba(226,233,246,0.3)"
          strokeDasharray="3 3"
        />
        <text
          x={px(CROSSOVER_T) + 4}
          y={TOP + PLOT_H - 6}
          fontSize={8.5}
          fill="rgba(226,233,246,0.8)"
        >
          CNO takes over, ~{CROSSOVER_T.toFixed(0)} MK
        </text>

        <line x1={px(t)} x2={px(t)} y1={TOP} y2={TOP + PLOT_H} stroke="#4fe0c0" strokeWidth={1.2} />
        <circle cx={px(T_SOLAR)} cy={py(ppRate(T_SOLAR))} r={3.4} fill="#ffd27f" />
        <text
          x={px(T_SOLAR) - 5}
          y={py(ppRate(T_SOLAR)) - 7}
          textAnchor="end"
          fontSize={8.5}
          fill="#ffd27f"
        >
          Sun’s core
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Nudge T</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Percentage change in core temperature away from equilibrium
            </span>
            <input
              className={styles.slider}
              type="range"
              min={-10}
              max={10}
              step={0.5}
              value={nudge}
              onChange={(event) => setNudge(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>
            {nudge > 0 ? '+' : ''}
            {nudge.toFixed(1)}%
          </output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        {nudge === 0 ? (
          <>
            At equilibrium the core makes exactly as much energy as leaks out of the surface. Drag
            the slider to disturb it.
          </>
        ) : (
          <>
            A{' '}
            <strong>
              {Math.abs(nudge).toFixed(1)}% {nudge > 0 ? 'rise' : 'fall'}
            </strong>{' '}
            in core temperature changes the pp-chain rate by{' '}
            <strong>
              {ppChange > 0 ? '+' : ''}
              {ppChange.toFixed(0)}%
            </strong>{' '}
            and the CNO rate by{' '}
            <strong>
              {cnoChange > 0 ? '+' : ''}
              {cnoChange.toFixed(0)}%
            </strong>
            .{' '}
            {nudge > 0
              ? 'That energy surge inflates the core, expansion does work against gravity, the gas cools, and the rate falls straight back. Nothing decided this — it is what a steep exponent does.'
              : 'With less energy made, pressure drops, the core contracts, contraction releases gravitational energy as heat, and the temperature climbs back. The star has no way to run away.'}
          </>
        )}
      </p>
    </div>
  );
}
