import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * How far back we can actually see, and where the gap is.
 *
 * JWST's early-galaxy results are frequently reported as if the first stars had
 * been seen. They have not. What has been seen is galaxies — already containing
 * many generations of stars, already carrying heavy elements — at around 300
 * million years. The predicted era of the first stars is a hundred million
 * years earlier and remains entirely unobserved. This figure draws the gap and
 * lists what would actually count as closing it.
 */

interface Epoch {
  readonly name: string;
  readonly z: number;
  readonly timeMyr: number;
  readonly status: 'observed' | 'unobserved' | 'disputed';
  readonly detail: string;
}

const EPOCHS: readonly Epoch[] = [
  {
    name: 'Cosmic microwave background',
    z: 1090,
    timeMyr: 0.38,
    status: 'observed',
    detail:
      'Directly observed, mapped to a part in a hundred thousand across the whole sky. This is a wall, not a frontier: before it the Universe was opaque, so no light from earlier can ever reach us.',
  },
  {
    name: 'Cosmic dark ages',
    z: 100,
    timeMyr: 16,
    status: 'unobserved',
    detail:
      'No stars had formed, so there was nothing emitting light. The only possible signal is the 21 cm line of neutral hydrogen, and it has not been convincingly detected.',
  },
  {
    name: 'First stars (Population III)',
    z: 25,
    timeMyr: 130,
    status: 'unobserved',
    detail:
      'Predicted to form here, in dark-matter minihalos, from primordial gas. Nothing from this era has ever been observed. The 2018 claimed detection of a 21 cm absorption feature at z ≈ 17 was not confirmed by an independent experiment, and its amplitude was hard to reconcile with standard cosmology.',
  },
  {
    name: 'Earliest confirmed galaxy',
    z: 14.3,
    timeMyr: 290,
    status: 'observed',
    detail:
      'Spectroscopically confirmed by JWST. This is a galaxy — a system of very many stars, already enriched with heavy elements, meaning generations of stars had already lived and died before this light left. It is not a first star, and it is not the first galaxy.',
  },
  {
    name: 'Reionisation completes',
    z: 6,
    timeMyr: 940,
    status: 'observed',
    detail:
      'Ultraviolet light from early stars and quasars had by now re-ionised nearly all the hydrogen between galaxies. Traced through absorption in quasar spectra.',
  },
  {
    name: 'Peak of cosmic star formation',
    z: 2,
    timeMyr: 3300,
    status: 'observed',
    detail:
      'The Universe formed stars roughly ten times faster than it does now. Most of the stars that exist were made around here, and the rate has been falling ever since.',
  },
  {
    name: 'The Sun forms',
    z: 0.45,
    timeMyr: 9200,
    status: 'observed',
    detail:
      'Nine billion years of chemical enrichment had already happened. The Sun is a latecomer, built from material processed by many earlier generations.',
  },
];

const W = 380;
const ROW = 26;
const TOP = 34;
const LEFT = 12;
const AXIS_W = 200;
const H = TOP + EPOCHS.length * ROW + 58;

const LOG_MIN = Math.log10(0.3);
const LOG_MAX = Math.log10(14000);
const barEnd = (myr: number): number =>
  LEFT + ((Math.log10(myr) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * AXIS_W;

const STATUS_COLOUR: Record<Epoch['status'], string> = {
  observed: '#4fe0c0',
  unobserved: '#ff8f6e',
  disputed: '#ffd27f',
};

export default function ObservationalFrontier(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(2);
  const epoch = EPOCHS[selected] ?? EPOCHS[2]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={LEFT} y={13} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          time since the Big Bang, logarithmic — and what has actually been detected
        </text>
        <text x={LEFT} y={25} fontSize={8.5} fill="rgba(148,162,192,0.8)">
          <tspan fill="#4fe0c0">■</tspan> observed <tspan fill="#ff8f6e">■</tspan> never observed
        </text>

        {/* The gap between the earliest observed galaxy and the first stars. */}
        <rect
          x={barEnd(130)}
          y={TOP - 4}
          width={barEnd(290) - barEnd(130)}
          height={EPOCHS.length * ROW}
          fill="rgba(255,143,110,0.10)"
        />

        {EPOCHS.map((entry, index) => {
          const y = TOP + index * ROW;
          const isSelected = index === selected;
          return (
            <g key={entry.name} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={0}
                y={y}
                width={W}
                height={ROW}
                fill={isSelected ? 'rgba(143,184,255,0.10)' : 'transparent'}
              />
              <line
                x1={LEFT}
                x2={barEnd(entry.timeMyr)}
                y1={y + 13}
                y2={y + 13}
                stroke="rgba(148,162,192,0.28)"
                strokeWidth={1}
              />
              <circle
                cx={barEnd(entry.timeMyr)}
                cy={y + 13}
                r={isSelected ? 5 : 3.4}
                fill={STATUS_COLOUR[entry.status]}
              />
              <text
                x={LEFT + AXIS_W + 12}
                y={y + 10}
                fontSize={8.8}
                fontWeight={isSelected ? 700 : 500}
                fill={isSelected ? STATUS_COLOUR[entry.status] : 'rgba(226,233,246,0.92)'}
              >
                {entry.name.length > 24 ? `${entry.name.slice(0, 23)}…` : entry.name}
              </text>
              <text
                x={LEFT + AXIS_W + 12}
                y={y + 20}
                fontSize={8}
                fill="rgba(148,162,192,0.85)"
                fontFamily="ui-monospace, monospace"
              >
                z ≈ {entry.z} ·{' '}
                {entry.timeMyr < 1
                  ? `${(entry.timeMyr * 1000).toFixed(0)} kyr`
                  : entry.timeMyr < 1000
                    ? `${entry.timeMyr} Myr`
                    : `${(entry.timeMyr / 1000).toFixed(1)} Gyr`}
              </text>
            </g>
          );
        })}

        <text x={LEFT} y={TOP + EPOCHS.length * ROW + 16} fontSize={9} fill="#ff8f6e">
          the shaded band is the gap: 130 to 290 Myr, still entirely unobserved.
        </text>
        <text
          x={LEFT}
          y={TOP + EPOCHS.length * ROW + 30}
          fontSize={8.5}
          fill="rgba(226,233,246,0.9)"
        >
          What would close it: a pair-instability supernova; a galaxy spectrum
        </text>
        <text
          x={LEFT}
          y={TOP + EPOCHS.length * ROW + 42}
          fontSize={8.5}
          fill="rgba(226,233,246,0.9)"
        >
          with no metal lines at all; or a confirmed 21 cm signal from the dark ages.
        </text>
      </svg>

      <div className={styles.toggles}>
        {EPOCHS.map((entry, index) => (
          <button
            key={entry.name}
            type="button"
            className={styles.toggle}
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            {entry.name.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>
          {epoch.name} — z ≈ {epoch.z},{' '}
          {epoch.timeMyr < 1
            ? `${(epoch.timeMyr * 1000).toFixed(0)} thousand`
            : `${epoch.timeMyr} million`}{' '}
          years after the Big Bang.{' '}
          {epoch.status === 'observed'
            ? 'OBSERVED.'
            : epoch.status === 'unobserved'
              ? 'NEVER OBSERVED.'
              : 'DISPUTED.'}
        </strong>{' '}
        {epoch.detail}
      </p>
    </div>
  );
}
