import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Planck curves at stellar temperatures, with the colour derived rather than
 * chosen.
 *
 * A star's colour is not decoration: it is a thermometer readable from any
 * distance, and it is the first measurement anyone makes of a star. The peak
 * moves as 1/T — Wien's law — and the total power goes as T⁴, which is why the
 * curves separate so violently on a logarithmic axis.
 *
 * The reddening control matters because it is the technique's main failure
 * mode: dust removes blue light preferentially, so a hot star behind dust
 * masquerades as a cooler one, and every colour-derived temperature has to be
 * corrected for it.
 */

const H_PLANCK = 6.626e-34;
const C = 2.998e8;
const K_B = 1.381e-23;
const SIGMA = 5.67e-8;

/** Spectral radiance per unit wavelength, W·m⁻³·sr⁻¹. */
function planck(lambdaNm: number, tempK: number): number {
  const l = lambdaNm * 1e-9;
  return (2 * H_PLANCK * C * C) / (l ** 5 * (Math.exp((H_PLANCK * C) / (l * K_B * tempK)) - 1));
}

/** Wien's displacement law: λ_peak = 2.898 × 10⁶ nm·K ÷ T. */
const wienPeak = (tempK: number): number => 2.8978e6 / tempK;

/**
 * A crude but honest spectrum-to-screen mapping: sample the Planck curve in
 * three broad visual bands and normalise. Real colour reproduction is limited
 * by what a display can show, which the caption states.
 */
function screenColour(tempK: number, reddening: number): string {
  const band = (centre: number): number => {
    const raw = planck(centre, tempK);
    // Interstellar extinction rises steeply toward the blue, roughly as 1/λ.
    const extinction = Math.exp((-reddening * 550) / centre);
    return raw * extinction;
  };
  const r = band(620);
  const g = band(540);
  const b = band(460);
  const max = Math.max(r, g, b);
  const to255 = (v: number): number => Math.round(255 * Math.min(1, (v / max) ** 0.42));
  return `rgb(${to255(r)}, ${to255(g)}, ${to255(b)})`;
}

const W = 380;
const H = 236;
const LEFT = 34;
const RIGHT = 14;
const TOP = 38;
const BOTTOM = 42;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const LAM_MIN = 60;
const LAM_MAX = 2400;
const LOG_I_MIN = 6;
const LOG_I_MAX = 15;

const px = (nm: number): number => LEFT + ((nm - LAM_MIN) / (LAM_MAX - LAM_MIN)) * PLOT_W;
const py = (i: number): number =>
  TOP + PLOT_H - ((Math.log10(Math.max(i, 1)) - LOG_I_MIN) / (LOG_I_MAX - LOG_I_MIN)) * PLOT_H;

const REFERENCE: readonly { temp: number; label: string }[] = [
  { temp: 3000, label: 'M dwarf' },
  { temp: 5772, label: 'Sun (G2)' },
  { temp: 9940, label: 'A star' },
  { temp: 40000, label: 'O star' },
];

function curve(tempK: number): string {
  return Array.from({ length: 110 }, (_, i) => {
    const nm = LAM_MIN + (i / 109) * (LAM_MAX - LAM_MIN);
    return `${i === 0 ? 'M' : 'L'}${px(nm).toFixed(1)},${Math.max(TOP - 14, py(planck(nm, tempK))).toFixed(1)}`;
  }).join(' ');
}

export default function StellarTemperatureColour(_props: VisualizationProps): ReactNode {
  const [temp, setTemp] = useState(5772);
  const [reddening, setReddening] = useState(0);

  const peak = wienPeak(temp);
  const flux = SIGMA * temp ** 4;
  const trueColour = screenColour(temp, 0);
  const seenColour = screenColour(temp, reddening);
  /** The temperature a naive observer would infer from the reddened colour. */
  const apparentTemp = reddening > 0 ? temp / (1 + reddening * 0.62) : temp;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <clipPath id="planck-plot">
          <rect x={LEFT} y={TOP - 14} width={PLOT_W} height={PLOT_H + 14} />
        </clipPath>

        {/* The visible band, marked as the sliver it is. */}
        <rect
          x={px(380)}
          y={TOP}
          width={px(700) - px(380)}
          height={PLOT_H}
          fill="rgba(226,233,246,0.05)"
        />
        <text
          x={px(540)}
          y={TOP + PLOT_H - 5}
          textAnchor="middle"
          fontSize={8.5}
          fill="rgba(148,162,192,0.85)"
        >
          visible
        </text>

        {[6, 9, 12, 15].map((exp) => (
          <line
            key={exp}
            x1={LEFT}
            x2={LEFT + PLOT_W}
            y1={py(10 ** exp)}
            y2={py(10 ** exp)}
            stroke="rgba(148,162,192,0.11)"
          />
        ))}
        <text x={3} y={TOP - 7} fontSize={9} fill="rgba(148,162,192,0.9)">
          emitted power per wavelength (log)
        </text>

        {[200, 700, 1200, 1700, 2200].map((tick) => (
          <text
            key={tick}
            x={px(tick)}
            y={TOP + PLOT_H + 13}
            textAnchor="middle"
            fontSize={8.5}
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
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          wavelength, nanometres — ultraviolet ← → infrared
        </text>

        <g clipPath="url(#planck-plot)">
          {REFERENCE.map((entry) => (
            <path
              key={entry.temp}
              d={curve(entry.temp)}
              fill="none"
              stroke="rgba(148,162,192,0.32)"
              strokeWidth={1.1}
            />
          ))}
          <path d={curve(temp)} fill="none" stroke={trueColour} strokeWidth={2.4} />
          <line
            x1={px(peak)}
            x2={px(peak)}
            y1={TOP - 14}
            y2={TOP + PLOT_H}
            stroke="#4fe0c0"
            strokeDasharray="3 3"
          />
        </g>

        <text
          x={px(1900)}
          y={py(planck(1900, 3000)) - 6}
          fontSize={8}
          fill="rgba(148,162,192,0.85)"
        >
          3,000 K
        </text>
        <text
          x={px(1600)}
          y={py(planck(1600, 40000)) - 6}
          fontSize={8}
          fill="rgba(148,162,192,0.85)"
        >
          40,000 K
        </text>

        {/* Colour swatches. */}
        <rect x={LEFT} y={3} width={38} height={12} rx={3} fill={trueColour} />
        <text x={LEFT + 43} y={12} fontSize={8.5} fill="rgba(226,233,246,0.9)">
          true colour
        </text>
        {reddening > 0 && (
          <>
            <rect x={LEFT + 108} y={3} width={38} height={12} rx={3} fill={seenColour} />
            <text x={LEFT + 151} y={12} fontSize={8.5} fill="#ff8f6e">
              seen through dust
            </text>
          </>
        )}
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Temp</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Surface temperature in kelvin</span>
            <input
              className={styles.slider}
              type="range"
              min={Math.log10(2500)}
              max={Math.log10(45000)}
              step={0.005}
              value={Math.log10(temp)}
              onChange={(event) => setTemp(10 ** Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{Math.round(temp).toLocaleString()} K</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Dust</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Amount of interstellar reddening</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={1.6}
              step={0.02}
              value={reddening}
              onChange={(event) => setReddening(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{reddening.toFixed(2)}</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        At <strong>{Math.round(temp).toLocaleString()} K</strong> the spectrum peaks at{' '}
        <strong>{Math.round(peak)} nm</strong> — Wien’s law, λ = 2.898 × 10⁶ ÷ T — and each square
        metre of surface radiates {(flux / 1e6).toPrecision(3)} MW, by Stefan–Boltzmann σT⁴.{' '}
        {reddening > 0 ? (
          <>
            With dust in the way, the star <strong>looks</strong> about{' '}
            {Math.round(apparentTemp).toLocaleString()} K — cooler than it is by{' '}
            {Math.round(temp - apparentTemp).toLocaleString()} K. Dust removes blue light more than
            red, so every colour temperature has to be corrected for reddening before it means
            anything. This is the technique’s main failure mode, not a detail.
          </>
        ) : (
          <>Add dust with the second slider to see the technique’s main failure mode.</>
        )}
      </p>
    </div>
  );
}
