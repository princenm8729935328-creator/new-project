import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Density across twenty-two orders of magnitude, with a city for scale.
 *
 * "Incredibly dense" is not a fact, it is an adjective. The fact is the number
 * of zeros, and the only honest way to show twenty-two of them is a logarithmic
 * bar chart where the reader can see that a neutron star is as far above lead
 * as lead is above nothing at all.
 *
 * The neutron star entry uses the NICER mass and radius for PSR J0030+0451,
 * so the number is measured rather than assumed.
 */

interface Entry {
  readonly name: string;
  /** kg/m³. */
  readonly density: number;
  readonly note: string;
}

const ENTRIES: readonly Entry[] = [
  { name: 'Air, sea level', density: 1.225, note: 'What you are sitting in.' },
  { name: 'Water', density: 1000, note: 'The unit everything else is quoted against.' },
  { name: 'Lead', density: 11340, note: 'About as dense as ordinary matter gets on Earth.' },
  {
    name: 'Sun, mean',
    density: 1408,
    note: 'Denser than water on average, though the core is far denser and the outer layers thinner than air.',
  },
  {
    name: 'Sun’s core',
    density: 1.5e5,
    note: 'Thirteen times lead — and still a gas, because it is too hot to be anything else.',
  },
  {
    name: 'White dwarf',
    density: 1e9,
    note: 'A solar mass in an Earth-sized volume, held up by electron degeneracy pressure.',
  },
  {
    name: 'Atomic nucleus',
    density: 2.3e17,
    note: 'The density of ordinary matter with the empty space taken out.',
  },
  {
    name: 'Neutron star',
    density: 5.5e17,
    note: 'A little above nuclear density: 1.44 solar masses inside a radius of 13 km, from NICER’s X-ray timing of PSR J0030+0451.',
  },
];

const W = 380;
const ROW = 26;
const TOP = 30;
const LABEL_W = 92;
const VALUE_W = 60;
const BAR_W = W - LABEL_W - VALUE_W - 12;
const CITY_H = 92;
const H = TOP + ENTRIES.length * ROW + CITY_H + 18;

const LOG_MIN = 0;
const LOG_MAX = 18;
const barWidth = (d: number): number => ((Math.log10(d) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * BAR_W;

/** PSR J0030+0451: 13 km radius, so 26 km across. */
const NS_DIAMETER_KM = 26;

export default function NeutronStarDensity(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(7);
  const entry = ENTRIES[selected] ?? ENTRIES[7]!;
  /** One cubic centimetre of the selected material, in kg. */
  const perCc = entry.density / 1e6;
  const humanMasses = perCc / 62;

  const cityTop = TOP + ENTRIES.length * ROW + 12;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={10} y={12} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          density, kg per cubic metre — logarithmic, 10⁰ to 10¹⁸
        </text>
        {[0, 6, 12, 18].map((tick) => (
          <line
            key={tick}
            x1={LABEL_W + (tick / 18) * BAR_W}
            x2={LABEL_W + (tick / 18) * BAR_W}
            y1={TOP - 6}
            y2={TOP + ENTRIES.length * ROW}
            stroke="rgba(148,162,192,0.14)"
          />
        ))}

        {ENTRIES.map((item, index) => {
          const y = TOP + index * ROW;
          const isSelected = index === selected;
          return (
            <g key={item.name} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={0}
                y={y}
                width={W}
                height={ROW}
                fill={isSelected ? 'rgba(143,184,255,0.10)' : 'transparent'}
              />
              <text
                x={8}
                y={y + 16}
                fontSize={9.5}
                fontWeight={isSelected ? 700 : 500}
                fill={isSelected ? '#8fb8ff' : 'rgba(226,233,246,0.92)'}
              >
                {item.name}
              </text>
              <rect
                x={LABEL_W}
                y={y + 6}
                width={Math.max(2, barWidth(item.density))}
                height={12}
                rx={2}
                fill={isSelected ? '#8fb8ff' : 'rgba(143,184,255,0.45)'}
              />
              <text
                x={W - 8}
                y={y + 16}
                textAnchor="end"
                fontSize={9}
                fill="rgba(148,162,192,0.95)"
                fontFamily="ui-monospace, monospace"
              >
                10
                {['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'][
                  Math.floor(Math.log10(item.density)) % 10
                ] ?? ''}
                {Math.floor(Math.log10(item.density)) >= 10 ? '⁺' : ''}
              </text>
            </g>
          );
        })}

        {/* Diameter comparison, drawn to scale against a 26 km street grid. */}
        <text x={8} y={cityTop + 2} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          a neutron star, {NS_DIAMETER_KM} km across, drawn to scale on a city grid
        </text>
        <g transform={`translate(0, ${cityTop + 8})`}>
          {Array.from({ length: 8 }, (_, i) => (
            <line
              key={`h${i}`}
              x1={40}
              x2={340}
              y1={4 + i * 9}
              y2={4 + i * 9}
              stroke="rgba(148,162,192,0.18)"
            />
          ))}
          {Array.from({ length: 21 }, (_, i) => (
            <line
              key={`v${i}`}
              x1={40 + i * 15}
              x2={40 + i * 15}
              y1={4}
              y2={67}
              stroke="rgba(148,162,192,0.18)"
            />
          ))}
          {/* 300 px spans 26 km, so the star's disk is the full grid width. */}
          <circle cx={190} cy={35} r={35} fill="rgba(127,199,255,0.22)" />
          <circle cx={190} cy={35} r={35} fill="none" stroke="#7fc7ff" strokeWidth={1.6} />
          <text x={190} y={38} textAnchor="middle" fontSize={9} fill="#e2e9f6">
            1.4 M☉
          </text>
          <text x={44} y={78} fontSize={8.5} fill="rgba(148,162,192,0.8)">
            grid squares are 1.3 km — the whole star fits inside a city
          </text>
        </g>
      </svg>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{entry.name}</strong>: {entry.density.toExponential(2)} kg/m³. A sugar-cube volume —
        one cubic centimetre — weighs{' '}
        <strong>
          {perCc >= 1e9
            ? `${perCc.toExponential(2)} kg`
            : perCc >= 1
              ? `${perCc.toPrecision(3)} kg`
              : `${(perCc * 1000).toPrecision(3)} g`}
        </strong>
        {humanMasses >= 1e6
          ? ` — roughly ${(humanMasses / 1e9).toPrecision(2)} billion people’s worth of mass, comparable to the entire human species.`
          : '.'}{' '}
        {entry.note}
      </p>
    </div>
  );
}
