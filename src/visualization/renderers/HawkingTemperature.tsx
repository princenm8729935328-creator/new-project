import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Hawking temperature against mass, with the microwave background drawn across it.
 *
 * The crossing point is the entire content. Every black hole anyone has
 * measured lies far to the right of it, which means it absorbs more from the
 * 2.725 K background than it emits — so none of them is evaporating, and the
 * evaporation timescales beside the curve are what would happen in a universe
 * that had already cooled below them, roughly 10¹⁷ years from now.
 *
 * Both curves come from Hawking's expressions directly. Nothing here has been
 * observed: this is a prediction of quantum field theory in curved spacetime,
 * and no detection of Hawking radiation exists.
 */

const SOLAR_MASS = 1.9885e30;
const CMB_KELVIN = 2.725;

/** T = ħc³/8πGMk_B, expressed as 6.17 × 10⁻⁸ K per solar mass over M. */
const temperature = (kg: number): number => (6.17e-8 * SOLAR_MASS) / kg;

/** Evaporation time in years, scaling as the cube of the mass. */
const evaporationYears = (kg: number): number => 2.1e67 * (kg / SOLAR_MASS) ** 3;

const W = 380;
const H = 300;
const PLOT_L = 40;
const PLOT_R = W - 12;
const PLOT_T = 34;
const PLOT_B = H - 62;

const LOG_M_MIN = 8;
const LOG_M_MAX = 41;
const LOG_T_MIN = -18;
const LOG_T_MAX = 16;

const xOf = (kg: number): number =>
  PLOT_L + ((Math.log10(kg) - LOG_M_MIN) / (LOG_M_MAX - LOG_M_MIN)) * (PLOT_R - PLOT_L);
const yOf = (kelvin: number): number =>
  PLOT_B - ((Math.log10(kelvin) - LOG_T_MIN) / (LOG_T_MAX - LOG_T_MIN)) * (PLOT_B - PLOT_T);

interface Marker {
  readonly label: string;
  readonly kg: number;
}

const MARKERS: readonly Marker[] = [
  { label: 'Stellar-mass, 10 M☉', kg: 10 * SOLAR_MASS },
  { label: 'Sgr A*', kg: 4.297e6 * SOLAR_MASS },
  { label: 'M87*', kg: 6.5e9 * SOLAR_MASS },
];

/** Mass at which the Hawking temperature equals the CMB temperature. */
const CROSSOVER_KG = (6.17e-8 * SOLAR_MASS) / CMB_KELVIN;

function exponent(value: number): string {
  const power = Math.round(Math.log10(value));
  return `10^${power}`;
}

export default function HawkingTemperature(_props: VisualizationProps): ReactNode {
  /** Log₁₀ of the selected mass in kilograms. */
  const [logMass, setLogMass] = useState(Math.log10(SOLAR_MASS));
  const kg = 10 ** logMass;
  const kelvin = temperature(kg);
  const years = evaporationYears(kg);
  const warmerThanCmb = kelvin > CMB_KELVIN;

  const curve = Array.from({ length: 80 }, (_, index) => {
    const lm = LOG_M_MIN + ((LOG_M_MAX - LOG_M_MIN) * index) / 79;
    const m = 10 ** lm;
    return `${index === 0 ? 'M' : 'L'}${xOf(m).toFixed(2)},${yOf(temperature(m)).toFixed(2)}`;
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
          Predicted Hawking temperature against mass. Both axes logarithmic.
        </text>
        <text
          x={10}
          y={26}
          fontSize={8.5}
          fill="rgba(255,143,110,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          Never observed — this is a prediction, not a measurement.
        </text>

        {/* Axes. */}
        <line x1={PLOT_L} x2={PLOT_R} y1={PLOT_B} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        <line x1={PLOT_L} x2={PLOT_L} y1={PLOT_T} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />

        {[10, 20, 30, 40].map((decade) => (
          <text
            key={decade}
            x={xOf(10 ** decade)}
            y={PLOT_B + 12}
            textAnchor="middle"
            fontSize={8}
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
          fontSize={8.5}
          fill="rgba(148,162,192,0.8)"
          fontFamily="system-ui, sans-serif"
        >
          mass, kilograms
        </text>

        {[-15, -10, -5, 0, 5, 10, 15].map((decade) => (
          <g key={decade}>
            <line
              x1={PLOT_L}
              x2={PLOT_R}
              y1={yOf(10 ** decade)}
              y2={yOf(10 ** decade)}
              stroke="rgba(148,162,192,0.09)"
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
        <text
          x={12}
          y={PLOT_T - 6}
          fontSize={8.5}
          fill="rgba(148,162,192,0.8)"
          fontFamily="system-ui, sans-serif"
        >
          kelvin
        </text>

        {/* The CMB floor: everything below this line grows rather than evaporating. */}
        <line
          x1={PLOT_L}
          x2={PLOT_R}
          y1={yOf(CMB_KELVIN)}
          y2={yOf(CMB_KELVIN)}
          stroke="#ffd66e"
          strokeWidth={1.4}
          strokeDasharray="5 4"
        />
        <text
          x={PLOT_R - 4}
          y={yOf(CMB_KELVIN) - 5}
          textAnchor="end"
          fontSize={8.5}
          fill="#ffd66e"
          fontFamily="system-ui, sans-serif"
        >
          microwave background, 2.725 K
        </text>
        <rect
          x={xOf(CROSSOVER_KG)}
          y={PLOT_T}
          width={PLOT_R - xOf(CROSSOVER_KG)}
          height={PLOT_B - PLOT_T}
          fill="rgba(148,162,192,0.05)"
        />
        <text
          x={PLOT_R - 4}
          y={PLOT_T + 12}
          textAnchor="end"
          fontSize={8}
          fill="rgba(148,162,192,0.8)"
          fontFamily="system-ui, sans-serif"
        >
          colder than space — absorbs more than it emits
        </text>

        <path d={curve} fill="none" stroke="#66e0d4" strokeWidth={1.8} />

        {MARKERS.map((marker) => {
          const mx = xOf(marker.kg);
          // Labels sit above the curve: below it they run into the mass axis
          // at the heavy end, and the rightmost one would leave the frame.
          const anchor = mx > PLOT_R - 70 ? 'end' : 'middle';
          return (
            <g key={marker.label}>
              <circle cx={mx} cy={yOf(temperature(marker.kg))} r={4} fill="#ff8f6e" />
              <text
                x={anchor === 'end' ? mx + 6 : mx}
                y={yOf(temperature(marker.kg)) - 8}
                textAnchor={anchor}
                fontSize={8}
                fill="rgba(226,233,246,0.92)"
                fontFamily="system-ui, sans-serif"
              >
                {marker.label}
              </text>
            </g>
          );
        })}

        {/* The reader's selection. */}
        <circle
          cx={xOf(kg)}
          cy={yOf(kelvin)}
          r={5.5}
          fill="none"
          stroke="#a97bff"
          strokeWidth={2}
        />
        <line
          x1={xOf(kg)}
          x2={xOf(kg)}
          y1={PLOT_T}
          y2={PLOT_B}
          stroke="rgba(169,123,255,0.35)"
          strokeDasharray="2 4"
        />
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Black-hole mass, log₁₀ kilograms</span>
            <input
              className={styles.slider}
              type="range"
              min={LOG_M_MIN}
              max={LOG_M_MAX}
              step={0.1}
              value={logMass}
              onChange={(event) => setLogMass(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{exponent(kg)} kg</output>
        </div>
      </div>
      <p className={styles.readout}>
        {`Temperature ${kelvin.toExponential(2)} K — `}
        {warmerThanCmb
          ? 'warmer than the microwave background, so this one would evaporate today. No black hole this small has ever been found.'
          : 'colder than the 2.725 K microwave background, so it absorbs more than it radiates and grows instead of evaporating.'}
        {` Predicted evaporation time ${exponent(years).replace('10^', '10^')} years, against a cosmic age of 1.4 × 10¹⁰.`}
      </p>
    </div>
  );
}
