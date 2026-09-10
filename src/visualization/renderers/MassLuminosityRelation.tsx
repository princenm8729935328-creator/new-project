import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { formatYears, lifetimeOf, luminosityOf } from './starPhysics';
import styles from './controls.module.css';

/**
 * Luminosity against mass, on the logarithmic axes the relation demands.
 *
 * The reason this figure exists is that "more massive stars are brighter" is
 * true and useless. The useful statement is *how much* brighter, and the answer
 * — roughly the third or fourth power — is the single fact from which the whole
 * of stellar evolution follows: it is why massive stars die young, why the sky
 * is dominated by stars that are rare, and why most stars ever formed are still
 * on the main sequence.
 *
 * The points are named stars with dynamically determined masses. The line is
 * the broken power law from `starPhysics`, shared with the lifetime figure so
 * the two cannot disagree.
 */

interface Star {
  readonly name: string;
  /** Solar masses. */
  readonly mass: number;
  /** Solar luminosities (bolometric). */
  readonly lum: number;
}

const STARS: readonly Star[] = [
  { name: 'Proxima Centauri', mass: 0.122, lum: 0.0017 },
  { name: 'Barnard’s Star', mass: 0.144, lum: 0.0035 },
  { name: 'Ross 128', mass: 0.168, lum: 0.0036 },
  { name: 'Gliese 581', mass: 0.31, lum: 0.013 },
  { name: '61 Cygni A', mass: 0.7, lum: 0.153 },
  { name: 'α Centauri B', mass: 0.909, lum: 0.5 },
  { name: 'Sun', mass: 1, lum: 1 },
  { name: 'α Centauri A', mass: 1.079, lum: 1.519 },
  { name: 'Procyon A', mass: 1.478, lum: 6.93 },
  { name: 'Altair', mass: 1.79, lum: 10.6 },
  { name: 'Sirius A', mass: 2.063, lum: 25.4 },
  { name: 'Vega', mass: 2.135, lum: 40.1 },
  { name: 'Regulus A', mass: 3.8, lum: 316 },
  { name: 'Spica A', mass: 11.4, lum: 20500 },
];

const W = 380;
const H = 236;
const LEFT = 40;
const RIGHT = 12;
const TOP = 24;
const BOTTOM = 42;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const LOG_M_MIN = -1.05; // 0.089 Msun
const LOG_M_MAX = 1.25; // 17.8 Msun
const LOG_L_MIN = -3.2;
const LOG_L_MAX = 5.2;

const px = (mass: number): number =>
  LEFT + ((Math.log10(mass) - LOG_M_MIN) / (LOG_M_MAX - LOG_M_MIN)) * PLOT_W;
const py = (lum: number): number =>
  TOP + PLOT_H - ((Math.log10(lum) - LOG_L_MIN) / (LOG_L_MAX - LOG_L_MIN)) * PLOT_H;

const CURVE = Array.from({ length: 80 }, (_, i) => {
  const logM = LOG_M_MIN + (i / 79) * (LOG_M_MAX - LOG_M_MIN);
  const m = 10 ** logM;
  return `${i === 0 ? 'M' : 'L'}${px(m).toFixed(2)},${py(luminosityOf(m)).toFixed(2)}`;
}).join(' ');

/** Powers of ten that fit on the axis without crowding. */
const M_TICKS = [0.1, 0.3, 1, 3, 10];
const L_TICKS = [-3, -1, 1, 3, 5];

export default function MassLuminosityRelation(_props: VisualizationProps): ReactNode {
  const [mass, setMass] = useState(1);
  const lum = luminosityOf(mass);
  const life = lifetimeOf(mass);
  const solarLife = lifetimeOf(1);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {L_TICKS.map((exp) => (
          <g key={exp}>
            <line
              x1={LEFT}
              x2={LEFT + PLOT_W}
              y1={py(10 ** exp)}
              y2={py(10 ** exp)}
              stroke="rgba(148,162,192,0.13)"
            />
            <text
              x={LEFT - 5}
              y={py(10 ** exp) + 3.5}
              textAnchor="end"
              fontSize={9}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              10{exp < 0 ? `⁻${Math.abs(exp)}` : exp}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 11} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          luminosity ÷ Sun’s luminosity
        </text>

        {M_TICKS.map((tick) => (
          <g key={tick}>
            <line
              x1={px(tick)}
              x2={px(tick)}
              y1={TOP}
              y2={TOP + PLOT_H}
              stroke="rgba(148,162,192,0.13)"
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

        <path d={CURVE} fill="none" stroke="rgba(143,184,255,0.55)" strokeWidth={1.6} />

        {STARS.map((star) => (
          <circle
            key={star.name}
            cx={px(star.mass)}
            cy={py(star.lum)}
            r={star.name === 'Sun' ? 4 : 2.6}
            fill={star.name === 'Sun' ? '#ffd27f' : 'rgba(226,233,246,0.85)'}
          />
        ))}

        <text x={px(1) + 6} y={py(1) + 3} fontSize={8.5} fill="#ffd27f">
          Sun
        </text>
        <text x={px(0.122) + 5} y={py(0.0017) + 3} fontSize={8.5} fill="rgba(226,233,246,0.85)">
          Proxima
        </text>
        <text
          x={px(11.4) - 5}
          y={py(20500) + 3}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(226,233,246,0.85)"
        >
          Spica A
        </text>

        {/* Where the slider currently sits. */}
        <circle cx={px(mass)} cy={py(lum)} r={5.5} fill="none" stroke="#4fe0c0" strokeWidth={1.6} />
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
              max={1.2}
              step={0.01}
              value={Math.log10(mass)}
              onChange={(event) => setMass(10 ** Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{mass.toPrecision(3)} M☉</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        A star of <strong>{mass.toPrecision(3)} solar masses</strong> shines at about{' '}
        <strong>
          {lum >= 1 ? lum.toPrecision(3) : lum.toPrecision(2)} times the Sun’s luminosity
        </strong>{' '}
        and lives roughly <strong>{formatYears(life)}</strong> on the main sequence —{' '}
        {life > solarLife
          ? `${(life / solarLife).toPrecision(2)}× the Sun’s`
          : `${(solarLife / life).toPrecision(2)}× shorter than the Sun’s`}
        . Ten times the mass buys roughly three thousand times the output, which is exactly why it
        cannot be afforded for long.
      </p>
    </div>
  );
}
