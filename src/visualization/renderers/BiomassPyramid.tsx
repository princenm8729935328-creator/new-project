import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The pyramid, and the case where it stands on its head.
 *
 * The inverted marine pyramid looks like a violation and is not, which makes it
 * the best available way to force the distinction between a standing stock and
 * a rate. Both views are drawn from the same numbers.
 */

const VIEWS = ['Grassland', 'Open ocean', 'Ocean, by rate'] as const;

interface Level {
  readonly name: string;
  readonly value: number;
  readonly colour: string;
}

const SETS: readonly (readonly Level[])[] = [
  [
    { name: 'grass', value: 100, colour: C.life },
    { name: 'grazers', value: 12, colour: C.warm },
    { name: 'predators', value: 1.4, colour: C.hot },
  ],
  [
    { name: 'phytoplankton', value: 4, colour: C.life },
    { name: 'zooplankton', value: 21, colour: C.warm },
    { name: 'small fish', value: 3, colour: C.hot },
  ],
  [
    { name: 'phytoplankton', value: 100, colour: C.life },
    { name: 'zooplankton', value: 11, colour: C.warm },
    { name: 'small fish', value: 1.2, colour: C.hot },
  ],
];

export default function BiomassPyramid(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const levels = SETS[Math.min(view, SETS.length - 1)] ?? SETS[0] ?? [];
  const max = Math.max(...levels.map((l) => l.value));

  const notes = [
    'The ordinary case. A large mass of plants supports a smaller mass of grazers, which supports a much smaller mass of predators, because roughly ninety percent of the energy is lost at each transfer. Predators are not rare because being one is dangerous; they are rare because there is not enough energy left to make many.',
    'In the open ocean the pyramid stands on its head: at any moment there is less phytoplankton than zooplankton. This looks impossible until you notice that mass at an instant is not the same as energy over time.',
    'Measured as a rate instead of a standing stock, the ocean pyramid is the right way up and steeper than the grassland. Phytoplankton are tiny and divide in hours, so a small standing crop is replaced continuously and the flow through it is enormous. What must obey the ten percent rule is the rate, not the amount sitting there.',
  ];

  return (
    <Stack>
      <Figure height={176}>
        <text x={190} y={16} textAnchor="middle" fontSize={9} fill={C.dim}>
          {view === 2 ? 'energy flow per year' : 'biomass at one moment'}
        </text>
        {levels.map((level, i) => {
          const w = Math.max((level.value / max) * 280, 14);
          const y = 34 + (levels.length - 1 - i) * 42;
          return (
            <g key={level.name}>
              <rect
                x={190 - w / 2}
                y={y}
                width={w}
                height={32}
                rx={3}
                fill={level.colour}
                opacity={0.8}
              />
              <text x={190} y={y + 15} textAnchor="middle" fontSize={9.5} fill="#0f1a17">
                {level.name}
              </text>
              <text
                x={190}
                y={y + 27}
                textAnchor="middle"
                fontSize={8}
                fill="rgba(15,26,23,0.75)"
                fontFamily="ui-monospace, monospace"
              >
                {level.value}
              </text>
            </g>
          );
        })}
      </Figure>

      <ToggleRow label="System" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>{notes[view]}</Note>
    </Stack>
  );
}
