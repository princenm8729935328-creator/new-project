import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * How wide the habitable envelope actually is.
 *
 * Drawn as ranges on a single axis, with the human tolerance marked on each,
 * because the interesting number is the ratio. Whatever the variable, life in
 * general spans a range that the animals a reader is familiar with occupy a
 * sliver of.
 */

interface Axis {
  readonly key: string;
  readonly unit: string;
  readonly min: number;
  readonly max: number;
  readonly ticks: readonly number[];
  readonly bands: readonly {
    readonly from: number;
    readonly to: number;
    readonly label: string;
    readonly colour: string;
  }[];
  readonly detail: string;
}

const AXES: readonly Axis[] = [
  {
    key: 'Temperature',
    unit: '°C',
    min: -25,
    max: 130,
    ticks: [-20, 0, 40, 80, 122],
    bands: [
      { from: -20, to: 122, label: 'known life', colour: C.life },
      { from: -5, to: 50, label: 'most life', colour: C.water },
      { from: 20, to: 40, label: 'humans', colour: C.hot },
    ],
    detail:
      'The record for growth is a hyperthermophilic archaeon cultured at 122 °C under pressure; the cold end is set by liquid water in brine films rather than by any biochemical limit. Human survival occupies a few tens of degrees in the middle.',
  },
  {
    key: 'Acidity',
    unit: 'pH',
    min: -0.5,
    max: 13,
    ticks: [0, 3, 7, 10, 12.8],
    bands: [
      { from: -0.06, to: 12.8, label: 'known life', colour: C.life },
      { from: 4, to: 9, label: 'most life', colour: C.water },
      { from: 7.35, to: 7.45, label: 'human blood', colour: C.hot },
    ],
    detail:
      'Acidophiles grow in fluids near pH 0 — comparable to battery acid — and alkaliphiles above pH 12. Each pH unit is a factor of ten in hydrogen ion concentration, so this range spans thirteen orders of magnitude. Human blood is held within 0.1 of a unit.',
  },
  {
    key: 'Pressure',
    unit: 'atmospheres',
    min: 0,
    max: 1200,
    ticks: [1, 300, 600, 1100],
    bands: [
      { from: 0, to: 1100, label: 'known life', colour: C.life },
      { from: 0.5, to: 60, label: 'most life', colour: C.water },
      { from: 1, to: 4, label: 'humans', colour: C.hot },
    ],
    detail:
      'Microbes grow in the Mariana Trench at over 1,000 atmospheres, and some have been cultured at higher pressures still. Pressure turns out to be one of the least restrictive variables for life — far less limiting than temperature or the availability of liquid water.',
  },
];

export default function LimitsOfLife(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const axis = AXES[Math.min(pick, AXES.length - 1)];
  if (!axis) return null;

  const LEFT = 20;
  const W = 340;
  const x = (v: number): number => LEFT + ((v - axis.min) / (axis.max - axis.min)) * W;

  return (
    <Stack>
      <Figure height={168}>
        <text x={LEFT} y={16} fontSize={9.5} fill={C.dim}>
          {axis.key} ({axis.unit})
        </text>

        {axis.bands.map((band, i) => (
          <g key={band.label}>
            <rect
              x={x(band.from)}
              y={34 + i * 32}
              width={Math.max(x(band.to) - x(band.from), 2)}
              height={16}
              rx={8}
              fill={band.colour}
              opacity={0.75}
            />
            <text x={LEFT} y={30 + i * 32} fontSize={8.5} fill={band.colour}>
              {band.label}
            </text>
          </g>
        ))}

        <line x1={LEFT} x2={LEFT + W} y1={138} y2={138} stroke={C.grid} strokeWidth={1.4} />
        {axis.ticks.map((t) => (
          <g key={t}>
            <line x1={x(t)} x2={x(t)} y1={134} y2={142} stroke={C.faint} />
            <text
              x={x(t)}
              y={154}
              textAnchor="middle"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {t}
            </text>
          </g>
        ))}
      </Figure>

      <ToggleRow
        label="Variable"
        options={AXES.map((a) => a.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>{axis.detail}</Note>
    </Stack>
  );
}
