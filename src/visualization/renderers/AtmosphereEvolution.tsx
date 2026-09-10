import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Earth has had three atmospheres, and the reader has only ever breathed one.
 *
 * Composition is drawn as a stacked bar because the story is proportional: what
 * matters is that carbon dioxide went from dominant to a trace, and that oxygen
 * went from absent to a fifth of the air.
 */

interface Gas {
  readonly name: string;
  readonly pct: number;
  readonly colour: string;
}

interface Era {
  readonly key: string;
  readonly when: string;
  readonly gases: readonly Gas[];
  readonly note: string;
}

const ERAS: readonly Era[] = [
  {
    key: 'Primary',
    when: '~4.5 billion years ago',
    gases: [
      { name: 'hydrogen', pct: 74, colour: C.deep },
      { name: 'helium', pct: 24, colour: 'rgba(201,168,255,0.5)' },
      { name: 'other', pct: 2, colour: C.faint },
    ],
    note: 'Captured directly from the solar nebula, and lost almost immediately: hydrogen and helium are too light for Earth’s gravity to hold at these temperatures, and the young Sun’s intense ultraviolet output stripped what remained.',
  },
  {
    key: 'Secondary',
    when: '~4.4 to 2.4 billion years ago',
    gases: [
      { name: 'carbon dioxide', pct: 70, colour: C.hot },
      { name: 'nitrogen', pct: 20, colour: C.air },
      { name: 'water vapour', pct: 8, colour: C.water },
      { name: 'methane, other', pct: 2, colour: C.warm },
    ],
    note: 'Outgassed from the interior by volcanism, with some delivered by impacts. Percentages here are indicative rather than measured — this atmosphere is reconstructed from indirect evidence and models, and the carbon dioxide figure in particular is debated.',
  },
  {
    key: 'Modern',
    when: 'after 2.4 billion years ago',
    gases: [
      { name: 'nitrogen', pct: 78, colour: C.air },
      { name: 'oxygen', pct: 21, colour: C.life },
      { name: 'argon', pct: 0.9, colour: C.faint },
      { name: 'carbon dioxide, trace', pct: 0.1, colour: C.hot },
    ],
    note: 'The oxygen is entirely biological. Nothing about Earth’s geology produces a fifth of an atmosphere of a gas this reactive; without continuous resupply by photosynthesis it would be consumed by rock and volcanic gas within a few million years.',
  },
];

export default function AtmosphereEvolution(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const era = ERAS[Math.min(pick, ERAS.length - 1)];
  if (!era) return null;

  const LEFT = 12;
  const width = 380 - LEFT * 2;
  let acc = 0;

  return (
    <Stack>
      <Figure height={162}>
        <text x={LEFT} y={14} fontSize={10} fill="rgba(233,238,247,0.95)">
          {era.key} atmosphere
        </text>
        <text x={LEFT} y={28} fontSize={8.5} fill={C.faint} fontFamily="ui-monospace, monospace">
          {era.when}
        </text>

        <rect x={LEFT} y={40} width={width} height={30} fill={C.panel} rx={3} />
        {era.gases.map((gas) => {
          const w = (gas.pct / 100) * width;
          const x = LEFT + acc;
          acc += w;
          return (
            <rect
              key={gas.name}
              x={x}
              y={40}
              width={Math.max(w, 1)}
              height={30}
              fill={gas.colour}
              opacity={0.85}
            />
          );
        })}

        {era.gases.map((gas, i) => (
          <g key={gas.name}>
            <rect x={LEFT} y={84 + i * 17} width={9} height={9} fill={gas.colour} rx={1.5} />
            <text x={LEFT + 15} y={92 + i * 17} fontSize={9} fill={C.dim}>
              {gas.name}
            </text>
            <text
              x={LEFT + width}
              y={92 + i * 17}
              textAnchor="end"
              fontSize={9}
              fill={gas.colour}
              fontFamily="ui-monospace, monospace"
            >
              {gas.pct < 1 ? `${gas.pct}%` : `${Math.round(gas.pct)}%`}
            </text>
          </g>
        ))}
      </Figure>

      <ToggleRow
        label="Atmosphere"
        options={ERAS.map((e) => e.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>{era.note}</Note>
    </Stack>
  );
}
