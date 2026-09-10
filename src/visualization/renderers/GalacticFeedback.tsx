import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Star-formation efficiency against halo mass — the curve that says galaxies
 * are bad at their job.
 *
 * Gravity and cooling alone predict that most of a halo's gas should end up in
 * stars. The measured answer peaks at about 20 percent and falls by one to two
 * orders of magnitude on either side. The gap between the two curves in this
 * figure is the single strongest general argument that something is actively
 * stopping star formation, and the two wings need different somethings.
 *
 * The efficiency curve is the standard double-power-law abundance-matching
 * form. It is an inference from two well-measured distributions — the observed
 * number of galaxies of each brightness and the simulated number of halos of
 * each mass — not a direct measurement of any galaxy.
 */

const W = 380;
const H = 226;
const LEFT = 40;
const RIGHT = 14;
const TOP = 26;
const BOTTOM = 44;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const LOG_M_MIN = 9.5;
const LOG_M_MAX = 15;
const LOG_E_MIN = -3;
const LOG_E_MAX = 0;

const px = (logM: number): number => LEFT + ((logM - LOG_M_MIN) / (LOG_M_MAX - LOG_M_MIN)) * PLOT_W;
const py = (logE: number): number =>
  TOP + PLOT_H - ((logE - LOG_E_MIN) / (LOG_E_MAX - LOG_E_MIN)) * PLOT_H;

/** Double power law peaking near 10^12 M☉ at 20% of the baryon budget. */
function efficiency(logM: number): number {
  const x = 10 ** (logM - 12);
  return (2 * 0.2) / (x ** -1.3 + x ** 0.7);
}

/** What gravity and cooling alone would give: nearly everything, everywhere. */
const NO_FEEDBACK = 0.8;

const CURVE = Array.from({ length: 90 }, (_, i) => {
  const logM = LOG_M_MIN + (i / 89) * (LOG_M_MAX - LOG_M_MIN);
  return `${i === 0 ? 'M' : 'L'}${px(logM).toFixed(2)},${py(Math.log10(efficiency(logM))).toFixed(2)}`;
}).join(' ');

export default function GalacticFeedback(_props: VisualizationProps): ReactNode {
  const [showNoFeedback, setShowNoFeedback] = useState(false);
  const [logM, setLogM] = useState(12);

  const eff = efficiency(logM);
  const shortfall = NO_FEEDBACK / eff;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {[-3, -2, -1, 0].map((tick) => (
          <g key={tick}>
            <line
              x1={LEFT}
              x2={LEFT + PLOT_W}
              y1={py(tick)}
              y2={py(tick)}
              stroke="rgba(148,162,192,0.12)"
            />
            <text
              x={LEFT - 5}
              y={py(tick) + 3.5}
              textAnchor="end"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick === 0 ? '100%' : tick === -1 ? '10%' : tick === -2 ? '1%' : '0.1%'}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 12} fontSize={9} fill="rgba(148,162,192,0.9)">
          fraction of available gas turned into stars
        </text>

        {[10, 11, 12, 13, 14, 15].map((tick) => (
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
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              10{['¹⁰', '¹¹', '¹²', '¹³', '¹⁴', '¹⁵'][tick - 10] ?? ''}
            </text>
          </g>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 27}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          dark-matter halo mass, solar masses
        </text>

        {showNoFeedback && (
          <>
            <line
              x1={LEFT}
              x2={LEFT + PLOT_W}
              y1={py(Math.log10(NO_FEEDBACK))}
              y2={py(Math.log10(NO_FEEDBACK))}
              stroke="#ff8f6e"
              strokeWidth={1.8}
              strokeDasharray="5 3"
            />
            <text x={LEFT + 5} y={py(Math.log10(NO_FEEDBACK)) - 5} fontSize={8.5} fill="#ff8f6e">
              gravity and cooling alone
            </text>
          </>
        )}

        <path d={CURVE} fill="none" stroke="#8fb8ff" strokeWidth={2} />

        <text
          x={px(10.4)}
          y={py(Math.log10(efficiency(10.4))) + 15}
          fontSize={8.5}
          fill="rgba(226,233,246,0.9)"
        >
          supernova winds
        </text>
        <text
          x={px(14.2)}
          y={py(Math.log10(efficiency(14.2))) + 15}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(226,233,246,0.9)"
        >
          black-hole heating
        </text>
        <text
          x={px(12)}
          y={py(Math.log10(efficiency(12))) - 8}
          textAnchor="middle"
          fontSize={8.5}
          fill="#8fb8ff"
        >
          peak ≈ 20%
        </text>

        <line
          x1={px(logM)}
          x2={px(logM)}
          y1={TOP}
          y2={TOP + PLOT_H}
          stroke="#4fe0c0"
          strokeWidth={1.1}
        />
        <circle cx={px(logM)} cy={py(Math.log10(eff))} r={4.5} fill="#4fe0c0" />
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Halo mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Log of halo mass in solar masses</span>
            <input
              className={styles.slider}
              type="range"
              min={LOG_M_MIN}
              max={LOG_M_MAX}
              step={0.05}
              value={logM}
              onChange={(event) => setLogM(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>10^{logM.toFixed(1)}</output>
        </div>
      </div>

      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={showNoFeedback}
          onClick={() => setShowNoFeedback((value) => !value)}
        >
          Show what no feedback would give
        </button>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        A halo of 10<sup>{logM.toFixed(1)}</sup> solar masses converts about{' '}
        <strong>{(eff * 100).toPrecision(2)}%</strong> of its available gas into stars — a shortfall
        of {shortfall.toPrecision(2)}× against what gravity and cooling alone predict.{' '}
        {logM < 11.6
          ? 'In a small halo the potential well is shallow: a few supernovae can drive gas straight out of the galaxy, and it may never come back.'
          : logM > 12.6
            ? 'In a massive halo the gas is hot and a central black hole keeps it hot. Energy from accretion is small compared with the black hole’s rest mass but enormous compared with the binding energy of the gas.'
            : 'This is the sweet spot. The Milky Way sits near here — deep enough to hold gas against supernovae, not massive enough for the black hole to have shut it down.'}
      </p>
    </div>
  );
}
