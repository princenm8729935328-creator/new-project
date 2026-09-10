import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The advanced burning stages, with the timeline that makes them frightening.
 *
 * The layers are the familiar picture. The logarithmic timeline beside them is
 * the part that is usually left out, and it is the part that matters: hydrogen
 * burning lasts millions of years, silicon burning lasts about a day. The last
 * four stages together are shorter than one year. A star that has spent seven
 * million years looking completely stable is, in its final week, running through
 * fuels at a rate that would be unrecognisable to an observer.
 *
 * The drawn layer thicknesses are for legibility and are badly wrong. At true
 * scale the iron core would be a dot.
 */

interface Layer {
  readonly fuel: string;
  readonly products: string;
  /** Burning temperature, billions of kelvin. */
  readonly tempGK: number;
  /** Duration in years for a 20 M☉ star. */
  readonly years: number;
  readonly drawn: number;
  readonly colour: string;
  readonly detail: string;
}

const LAYERS: readonly Layer[] = [
  {
    fuel: 'Hydrogen',
    products: 'helium',
    tempGK: 0.037,
    years: 7e6,
    drawn: 92,
    colour: 'rgba(143,184,255,0.30)',
    detail:
      'The main sequence, and about 90% of the star’s entire life. Everything below happens in the last tenth of a percent of it.',
  },
  {
    fuel: 'Helium',
    products: 'carbon and oxygen',
    tempGK: 0.19,
    years: 7e5,
    drawn: 74,
    colour: 'rgba(127,199,255,0.32)',
    detail:
      'Three helium nuclei fuse into carbon by the triple-alpha process, and some of that carbon captures a fourth to make oxygen. The ratio between the two determines almost everything about the explosion to come.',
  },
  {
    fuel: 'Carbon',
    products: 'neon, sodium, magnesium',
    tempGK: 0.87,
    years: 600,
    drawn: 58,
    colour: 'rgba(79,224,192,0.30)',
    detail:
      'Six hundred years — in a star that has already lived seven million. From here on, neutrino losses carry away most of the energy generated, so the star must burn faster and faster just to hold itself up.',
  },
  {
    fuel: 'Neon',
    products: 'oxygen and magnesium',
    tempGK: 1.6,
    years: 1,
    drawn: 45,
    colour: 'rgba(255,210,127,0.30)',
    detail:
      'About a year. Neon is not so much fused as photodisintegrated — the thermal photons are now energetic enough to knock alpha particles out of nuclei.',
  },
  {
    fuel: 'Oxygen',
    products: 'silicon and sulphur',
    tempGK: 2.0,
    years: 0.5,
    drawn: 34,
    colour: 'rgba(255,178,110,0.32)',
    detail:
      'Six months. The star’s surface still looks exactly as it did a thousand years earlier: the news of what is happening in the core has no way to reach it in time.',
  },
  {
    fuel: 'Silicon',
    products: 'iron and nickel',
    tempGK: 3.3,
    years: 0.0027,
    drawn: 24,
    colour: 'rgba(255,143,110,0.34)',
    detail:
      'About a day. This is not really fusion but a fierce equilibrium of photodisintegration and capture that settles into the most tightly bound nuclei available. When it finishes, there is nothing left that will burn.',
  },
  {
    fuel: 'Iron core',
    products: 'nothing — it is inert',
    tempGK: 8,
    years: 0,
    drawn: 14,
    colour: 'rgba(226,233,246,0.5)',
    detail:
      'Fusing iron absorbs energy instead of releasing it. The core is now held up by degeneracy pressure alone, growing as silicon burning drops more ash onto it, and when it passes about 1.4 solar masses it collapses in under a second.',
  },
];

const W = 380;
const H = 250;
const CX = 108;
const CY = 112;
const TIMELINE_X = 236;

/** Logarithmic timeline: 10⁷ years at the top down to a day at the bottom. */
const LOG_HI = 7;
const LOG_LO = -3;
const timelineY = (years: number): number =>
  54 + ((LOG_HI - Math.log10(Math.max(years, 1e-3))) / (LOG_HI - LOG_LO)) * 138;

function formatDuration(years: number): string {
  if (years === 0) return 'inert';
  if (years >= 1e6) return `${(years / 1e6).toPrecision(2)} million yr`;
  if (years >= 1) return `${years.toPrecision(2)} yr`;
  if (years >= 0.0027) return `${Math.round(years * 365)} days`;
  return `${Math.round(years * 365 * 24)} hours`;
}

export default function OnionShellBurning(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(5);
  const layer = LAYERS[selected] ?? LAYERS[5]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={10} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          a 20 M☉ star in its final days
        </text>
        <text x={10} y={26} fontSize={8.5} fill="rgba(148,162,192,0.8)">
          layer thicknesses drawn for legibility, not to scale
        </text>

        {LAYERS.map((entry, index) => (
          <circle
            key={entry.fuel}
            cx={CX}
            cy={CY}
            r={entry.drawn}
            fill={entry.colour}
            stroke={index === selected ? '#4fe0c0' : 'rgba(4,6,13,0.6)'}
            strokeWidth={index === selected ? 2.2 : 1}
            onClick={() => setSelected(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}

        {/* Radial labels along one spoke, so no two can overlap. */}
        {LAYERS.map((entry, index) => {
          const rMid =
            index === LAYERS.length - 1
              ? entry.drawn * 0.5
              : (entry.drawn + (LAYERS[index + 1]?.drawn ?? 0)) / 2;
          return (
            <text
              key={entry.fuel}
              x={CX}
              y={CY - rMid + 3.5}
              textAnchor="middle"
              fontSize={8}
              fill={index === selected ? '#4fe0c0' : 'rgba(226,233,246,0.9)'}
              fontWeight={index === selected ? 700 : 500}
            >
              {entry.fuel === 'Iron core' ? 'Fe' : entry.fuel.slice(0, 2)}
            </text>
          );
        })}

        {/* Logarithmic timeline. */}
        <line x1={TIMELINE_X} x2={TIMELINE_X} y1={50} y2={196} stroke="rgba(148,162,192,0.4)" />
        <text
          x={TIMELINE_X - 4}
          y={38}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          how long each stage lasts
        </text>
        {(() => {
          /*
           * Two adjacent stages can fall within a few units of each other on a
           * logarithmic axis — neon at a year and oxygen at six months are
           * nearly the same place — so the dot stays on the axis at its true
           * position while the label is nudged down to keep a readable gap.
           */
          let lastLabelY = -Infinity;
          return LAYERS.filter((entry) => entry.years > 0).map((entry, index) => {
            const y = timelineY(entry.years);
            const labelY = Math.max(y, lastLabelY + 11);
            lastLabelY = labelY;
            const isSelected = LAYERS.indexOf(entry) === selected;
            return (
              <g key={entry.fuel} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
                <line
                  x1={TIMELINE_X}
                  x2={TIMELINE_X + 8}
                  y1={y}
                  y2={labelY}
                  stroke={isSelected ? '#4fe0c0' : 'rgba(148,162,192,0.6)'}
                />
                <circle
                  cx={TIMELINE_X}
                  cy={y}
                  r={isSelected ? 4 : 2.6}
                  fill={isSelected ? '#4fe0c0' : 'rgba(226,233,246,0.8)'}
                />
                <text
                  x={TIMELINE_X + 12}
                  y={labelY + 3.5}
                  fontSize={8.5}
                  fill={isSelected ? '#4fe0c0' : 'rgba(226,233,246,0.9)'}
                >
                  {entry.fuel} · {formatDuration(entry.years)}
                </text>
              </g>
            );
          });
        })()}
        <text
          x={TIMELINE_X - 4}
          y={210}
          textAnchor="middle"
          fontSize={8.5}
          fill="rgba(255,143,110,0.95)"
        >
          then: collapse, in under a second
        </text>
      </svg>

      <div className={styles.toggles}>
        {LAYERS.map((entry, index) => (
          <button
            key={entry.fuel}
            type="button"
            className={styles.toggle}
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            {entry.fuel}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{layer.fuel}</strong> burns at about {layer.tempGK} billion kelvin, producing{' '}
        {layer.products}, and lasts <strong>{formatDuration(layer.years)}</strong>. {layer.detail}{' '}
        This structure has never been seen. It is what stellar evolution models predict, and the
        predictions are checked against the elements the explosion throws out — not against any
        picture of the interior.
      </p>
    </div>
  );
}
