import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The alpha-to-iron diagram: how to read a population's history off its stars.
 *
 * This is one of the genuinely clever pieces of astronomy, and it rests on a
 * timing difference. Core-collapse supernovae come from massive stars and start
 * within a few million years, delivering oxygen and magnesium with only a
 * little iron. Thermonuclear supernovae need a white dwarf, so they cannot
 * begin until hundreds of millions of years have passed — and then they deliver
 * iron in bulk. So [α/Fe] sits high on a plateau and then bends down, and where
 * it bends tells you how fast the population was forming stars.
 *
 * The tracks are computed from a simple delay-time model. The plateau and the
 * bend are robust observational facts; the exact track shape is a model.
 */

const W = 380;
const H = 226;
const LEFT = 42;
const RIGHT = 14;
const TOP = 24;
const BOTTOM = 42;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const X_MIN = -3.2;
const X_MAX = 0.5;
const Y_MIN = -0.15;
const Y_MAX = 0.55;

const px = (x: number): number => LEFT + ((x - X_MIN) / (X_MAX - X_MIN)) * PLOT_W;
const py = (y: number): number => TOP + PLOT_H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * PLOT_H;

/**
 * [α/Fe] against [Fe/H] for a population whose star formation lasts `tau` Gyr.
 *
 * Faster star formation reaches high [Fe/H] before the white dwarfs start
 * contributing, so the knee lands further right. A slow-forming dwarf galaxy
 * bends almost immediately.
 */
function track(feh: number, tauGyr: number): number {
  const knee = -1.9 + 1.25 * Math.log10(tauGyr / 0.6);
  const plateau = 0.42;
  if (feh <= knee) return plateau;
  const drop = (feh - knee) / (0.5 - knee + 0.9);
  return plateau - 0.5 * Math.min(1, Math.max(0, drop)) ** 0.9;
}

interface Population {
  readonly name: string;
  readonly feh: number;
  readonly tau: number;
  readonly detail: string;
}

const POPULATIONS: readonly Population[] = [
  {
    name: 'Halo',
    feh: -1.8,
    tau: 0.5,
    detail:
      'Old stars on plunging orbits, formed fast in the Galaxy’s first billion years — high on the plateau, because the white dwarfs had not started yet when these stars formed.',
  },
  {
    name: 'Thick disk',
    feh: -0.6,
    tau: 1.2,
    detail:
      'Formed rapidly but from more enriched gas. Still alpha-enhanced, which is the strongest evidence that the thick disk assembled quickly and then stopped.',
  },
  {
    name: 'Thin disk',
    feh: -0.05,
    tau: 8,
    detail:
      'The Sun’s population. Star formation has continued for billions of years, so thermonuclear supernovae have had ample time to contribute, and the alpha ratio has fallen to roughly solar.',
  },
  {
    name: 'Dwarf galaxy',
    feh: -1.5,
    tau: 4,
    detail:
      'A small galaxy forms stars slowly and inefficiently, so it is still at low iron when the white dwarfs begin exploding. Its knee is far to the left — and that shape is how a star can be identified as having been born in an accreted dwarf rather than in the Milky Way itself.',
  },
];

export default function CosmicChemicalHistory(_props: VisualizationProps): ReactNode {
  const [tau, setTau] = useState(4);
  const [pick, setPick] = useState(0);
  const population = POPULATIONS[pick] ?? POPULATIONS[0]!;

  const path = (t: number): string =>
    Array.from({ length: 70 }, (_, i) => {
      const feh = X_MIN + (i / 69) * (X_MAX - X_MIN);
      return `${i === 0 ? 'M' : 'L'}${px(feh).toFixed(1)},${py(track(feh, t)).toFixed(1)}`;
    }).join(' ');

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <clipPath id="alpha-plot">
          <rect x={LEFT} y={TOP} width={PLOT_W} height={PLOT_H} />
        </clipPath>

        {[0, 0.2, 0.4].map((tick) => (
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
              {tick.toFixed(1)}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 10} fontSize={9} fill="rgba(148,162,192,0.9)">
          [O/Fe] — oxygen relative to iron, vs the Sun
        </text>

        {[-3, -2, -1, 0].map((tick) => (
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
              {tick}
            </text>
          </g>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 26}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          [Fe/H] — iron abundance, vs the Sun (0 = solar)
        </text>

        <g clipPath="url(#alpha-plot)">
          {[0.5, 1.2, 8].map((t) => (
            <path
              key={t}
              d={path(t)}
              fill="none"
              stroke="rgba(148,162,192,0.3)"
              strokeWidth={1.2}
            />
          ))}
          <path d={path(tau)} fill="none" stroke="#8fb8ff" strokeWidth={2.2} />

          {POPULATIONS.map((entry, index) => (
            <g
              key={entry.name}
              onClick={() => {
                setPick(index);
                setTau(entry.tau);
              }}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={px(entry.feh)}
                cy={py(track(entry.feh, entry.tau))}
                r={index === pick ? 5.5 : 3.5}
                fill={index === pick ? '#4fe0c0' : 'rgba(226,233,246,0.85)'}
              />
            </g>
          ))}
        </g>

        <text x={px(-2.9)} y={py(0.47)} fontSize={8.5} fill="rgba(226,233,246,0.9)">
          plateau: core-collapse only
        </text>
        <text
          x={px(0.35)}
          y={py(0.02)}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(226,233,246,0.9)"
        >
          white dwarfs delivering iron
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>SF timescale</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Star formation timescale in billions of years
            </span>
            <input
              className={styles.slider}
              type="range"
              min={0.3}
              max={10}
              step={0.1}
              value={tau}
              onChange={(event) => setTau(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{tau.toFixed(1)} Gyr</output>
        </div>
      </div>

      <div className={styles.toggles}>
        {POPULATIONS.map((entry, index) => (
          <button
            key={entry.name}
            type="button"
            className={styles.toggle}
            aria-pressed={index === pick}
            onClick={() => {
              setPick(index);
              setTau(entry.tau);
            }}
          >
            {entry.name}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{population.name}.</strong> {population.detail} A population that forms its stars in{' '}
        {tau.toFixed(1)} billion years bends at [Fe/H] ≈{' '}
        {(-1.9 + 1.25 * Math.log10(tau / 0.6)).toFixed(2)}: the faster the star formation, the
        further right the knee, because more iron-poor generations had already formed before the
        white dwarfs started to explode. Four different histories, read off one diagram, from
        starlight alone.
      </p>
    </div>
  );
}
