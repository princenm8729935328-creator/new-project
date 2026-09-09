import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Planck's law against the classical prediction, both computed exactly.
 *
 * This is the figure the whole section starts from. The two curves agree
 * beautifully at long wavelengths and then part company completely: the
 * classical one keeps climbing without limit toward short wavelengths, which
 * would mean every warm object radiates infinite power. Nothing here is fitted
 * or smoothed to make the point — the divergence is what the classical formula
 * actually says, and it is why Planck's quantisation had to be introduced.
 */

const H = 6.62607015e-34; // J s, exact by definition of the SI
const C = 2.99792458e8; // m/s, exact
const K_B = 1.380649e-23; // J/K, exact
const SIGMA = 5.670374419e-8; // W m⁻² K⁻¹
const WIEN_B = 2.897771955e-3; // m K

/** Spectral radiance per unit wavelength, W m⁻² sr⁻¹ m⁻¹. */
function planck(lambda: number, temperature: number): number {
  const exponent = (H * C) / (lambda * K_B * temperature);
  // Guard the exponential: at short wavelength and low temperature it overflows.
  if (exponent > 700) return 0;
  return (2 * H * C * C) / (lambda ** 5 * (Math.expm1(exponent) || Number.MIN_VALUE));
}

/** The classical result, which has no cut-off and diverges as λ → 0. */
function rayleighJeans(lambda: number, temperature: number): number {
  return (2 * C * K_B * temperature) / lambda ** 4;
}

const W = 380;
const HEIGHT = 292;
const PLOT_L = 40;
const PLOT_R = W - 10;
const PLOT_T = 40;
const PLOT_B = HEIGHT - 58;

/** Wavelength axis: 10 nm to 10 cm, logarithmic. */
const LOG_L_MIN = -8;
const LOG_L_MAX = -1;
/** Radiance axis, logarithmic. Wide, because the sources span 3 K to 6000 K. */
const LOG_B_MIN = -4;
const LOG_B_MAX = 15;

const xOf = (lambda: number): number =>
  PLOT_L + ((Math.log10(lambda) - LOG_L_MIN) / (LOG_L_MAX - LOG_L_MIN)) * (PLOT_R - PLOT_L);
const yOf = (radiance: number): number =>
  PLOT_B - ((Math.log10(radiance) - LOG_B_MIN) / (LOG_B_MAX - LOG_B_MIN)) * (PLOT_B - PLOT_T);

interface Source {
  readonly label: string;
  readonly kelvin: number;
}

const SOURCES: readonly Source[] = [
  { label: 'Microwave background, 2.725 K', kelvin: 2.725 },
  { label: 'Human body, 310 K', kelvin: 310 },
  { label: 'Filament lamp, 2800 K', kelvin: 2800 },
  { label: 'Sun’s surface, 5772 K', kelvin: 5772 },
];

/** Points along a curve, clipped to the plot box so a divergence exits cleanly. */
function curvePath(temperature: number, law: (l: number, t: number) => number): string {
  const parts: string[] = [];
  let pen = false;
  for (let i = 0; i <= 160; i += 1) {
    const lambda = 10 ** (LOG_L_MIN + ((LOG_L_MAX - LOG_L_MIN) * i) / 160);
    const value = law(lambda, temperature);
    if (!(value > 0)) {
      pen = false;
      continue;
    }
    const logValue = Math.log10(value);
    if (logValue < LOG_B_MIN) {
      pen = false;
      continue;
    }
    // Deliberately not clamped: a clip path cuts the divergent classical curve
    // off at the top edge, which is what "runs off the chart" should look like.
    const y = yOf(10 ** Math.min(logValue, LOG_B_MAX + 12));
    parts.push(`${pen ? 'L' : 'M'}${xOf(lambda).toFixed(2)},${y.toFixed(2)}`);
    pen = true;
  }
  return parts.join(' ');
}

function metres(value: number): string {
  if (value >= 1e-3) return `${(value * 1e3).toFixed(2)} mm`;
  if (value >= 1e-6) return `${(value * 1e6).toFixed(2)} µm`;
  return `${(value * 1e9).toFixed(0)} nm`;
}

export default function BlackbodySpectrum(_props: VisualizationProps): ReactNode {
  const [logT, setLogT] = useState(Math.log10(5772));
  const temperature = 10 ** logT;
  const peak = WIEN_B / temperature;
  const power = SIGMA * temperature ** 4;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${HEIGHT}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <defs>
          <clipPath id="blackbody-plot">
            <rect x={PLOT_L} y={PLOT_T} width={PLOT_R - PLOT_L} height={PLOT_B - PLOT_T} />
          </clipPath>
        </defs>
        <text
          x={10}
          y={14}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          Emitted power per wavelength. Both axes logarithmic.
        </text>
        <text x={10} y={27} fontSize={8.5} fill="#66e0d4" fontFamily="system-ui, sans-serif">
          ● Planck’s law
        </text>
        <text x={92} y={27} fontSize={8.5} fill="#ff8f6e" fontFamily="system-ui, sans-serif">
          ● Classical (Rayleigh–Jeans) — runs off the chart
        </text>

        {/* Visible band, so the reader can see where colour lives. */}
        <rect
          x={xOf(3.8e-7)}
          y={PLOT_T}
          width={xOf(7.4e-7) - xOf(3.8e-7)}
          height={PLOT_B - PLOT_T}
          fill="rgba(169,123,255,0.12)"
        />
        <text
          x={(xOf(3.8e-7) + xOf(7.4e-7)) / 2}
          y={PLOT_B - 4}
          textAnchor="middle"
          fontSize={7.5}
          fill="rgba(200,180,255,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          visible
        </text>

        {/* Axes and decade rules. */}
        {[-8, -7, -6, -5, -4, -3, -2, -1].map((decade) => (
          <g key={decade}>
            <line
              x1={xOf(10 ** decade)}
              x2={xOf(10 ** decade)}
              y1={PLOT_T}
              y2={PLOT_B}
              stroke="rgba(148,162,192,0.09)"
            />
            <text
              x={xOf(10 ** decade)}
              y={PLOT_B + 12}
              textAnchor="middle"
              fontSize={7.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              1e{decade}
            </text>
          </g>
        ))}
        <text
          x={(PLOT_L + PLOT_R) / 2}
          y={PLOT_B + 24}
          textAnchor="middle"
          fontSize={8.5}
          fill="rgba(148,162,192,0.8)"
          fontFamily="system-ui, sans-serif"
        >
          wavelength, metres
        </text>
        {[0, 5, 10, 15].map((decade) => (
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
        <line x1={PLOT_L} x2={PLOT_R} y1={PLOT_B} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        <line x1={PLOT_L} x2={PLOT_L} y1={PLOT_T} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />

        <g clipPath="url(#blackbody-plot)">
          <path
            d={curvePath(temperature, rayleighJeans)}
            fill="none"
            stroke="#ff8f6e"
            strokeWidth={1.6}
          />
          <path d={curvePath(temperature, planck)} fill="none" stroke="#66e0d4" strokeWidth={2} />
        </g>

        {/* Where the Planck curve peaks: Wien's displacement law. */}
        <circle cx={xOf(peak)} cy={yOf(planck(peak, temperature))} r={4} fill="#ffd66e" />
        <text
          x={xOf(peak)}
          y={yOf(planck(peak, temperature)) - 8}
          textAnchor="middle"
          fontSize={8}
          fill="#ffd66e"
          fontFamily="system-ui, sans-serif"
        >
          peak {metres(peak)}
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Temp</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Temperature, log₁₀ kelvin</span>
            <input
              className={styles.slider}
              type="range"
              min={Math.log10(2.725)}
              max={Math.log10(8000)}
              step={0.01}
              value={logT}
              onChange={(event) => setLogT(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{temperature.toPrecision(4)} K</output>
        </div>
      </div>
      <div className={styles.toggles}>
        {SOURCES.map((source) => (
          <button
            key={source.label}
            type="button"
            className={styles.toggle}
            aria-pressed={Math.abs(temperature - source.kelvin) < source.kelvin * 0.01}
            onClick={() => setLogT(Math.log10(source.kelvin))}
          >
            {source.label}
          </button>
        ))}
      </div>
      <p className={styles.epochDetail}>
        At <strong>{temperature.toPrecision(4)} K</strong> the Planck curve peaks at{' '}
        <strong>{metres(peak)}</strong> and the total radiated power is{' '}
        <strong>{power.toExponential(2)} W/m²</strong>, which rises as the fourth power of
        temperature. The classical curve tracks Planck’s at long wavelengths and then diverges: it
        predicts unlimited power at short wavelengths, for every object at every temperature. That
        is not a small discrepancy to be patched — it is the classical theory saying something
        impossible, and it is what Planck’s quantum of energy was introduced to fix.
      </p>
    </div>
  );
}
