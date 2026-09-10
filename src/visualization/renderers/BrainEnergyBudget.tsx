import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Two percent of the body, twenty percent of the energy.
 *
 * The proportional pair of bars is the whole figure. The species toggle carries
 * the comparative point — this is expensive for everyone, and humans are at the
 * extreme rather than in a category of their own.
 */

interface Species {
  readonly name: string;
  readonly massPct: number;
  readonly energyPct: number;
  readonly neurons: string;
  readonly detail: string;
}

const SPECIES: readonly Species[] = [
  {
    name: 'Human adult',
    massPct: 2,
    energyPct: 20,
    neurons: '≈ 86 billion',
    detail:
      'Ten times the share of energy that the share of mass would suggest. Comparative work indicates this is roughly what a primate brain of this size should cost — the striking thing is not unusual efficiency but that a primate of this body size supports so many neurons at all.',
  },
  {
    name: 'Human newborn',
    massPct: 10,
    energyPct: 60,
    neurons: '≈ 86 billion',
    detail:
      'A newborn spends most of its energy budget on its brain, which is why human infants are so helpless for so long. A brain that learns cannot be finished at birth, and an unfinished brain cannot run a body — long dependency is part of the price, not a side effect.',
  },
  {
    name: 'Chimpanzee',
    massPct: 0.9,
    energyPct: 9,
    neurons: '≈ 28 billion',
    detail:
      'The same tenfold ratio between energy share and mass share. Chimpanzees spend much of the day feeding on relatively low-quality food, which is one of the constraints proposed to limit how far brain size could expand without a dietary change.',
  },
  {
    name: 'Mouse',
    massPct: 1.6,
    energyPct: 6,
    neurons: '≈ 71 million',
    detail:
      'Small brains are expensive too, in proportion. The cost is fundamentally per neuron — most of it goes on pumping ions back across membranes, whether or not the neuron is doing anything.',
  },
];

export default function BrainEnergyBudget(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const s = SPECIES[Math.min(pick, SPECIES.length - 1)];
  if (!s) return null;

  return (
    <Stack>
      <Figure height={178}>
        <text x={16} y={16} fontSize={9} fill={C.dim}>
          share of body mass
        </text>
        <rect x={16} y={24} width={340} height={26} rx={3} fill="rgba(148,162,192,0.16)" />
        <rect
          x={16}
          y={24}
          width={Math.max(340 * (s.massPct / 100), 3)}
          height={26}
          rx={3}
          fill={C.deep}
        />
        <text
          x={360}
          y={42}
          textAnchor="end"
          fontSize={9}
          fill={C.deep}
          fontFamily="ui-monospace, monospace"
        >
          {s.massPct}%
        </text>

        <text x={16} y={76} fontSize={9} fill={C.dim}>
          share of resting energy use
        </text>
        <rect x={16} y={84} width={340} height={26} rx={3} fill="rgba(148,162,192,0.16)" />
        <rect
          x={16}
          y={84}
          width={Math.max(340 * (s.energyPct / 100), 3)}
          height={26}
          rx={3}
          fill={C.hot}
        />
        <text
          x={360}
          y={102}
          textAnchor="end"
          fontSize={9}
          fill={C.hot}
          fontFamily="ui-monospace, monospace"
        >
          {s.energyPct}%
        </text>

        <text x={16} y={138} fontSize={9} fill={C.dim}>
          neurons: <tspan fill={C.life}>{s.neurons}</tspan>
        </text>
        <text x={16} y={160} fontSize={9} fill={C.warm}>
          {(s.energyPct / s.massPct).toFixed(1)}× more energy than its mass share would suggest
        </text>
      </Figure>

      <ToggleRow
        label="Species"
        options={SPECIES.map((x) => x.name)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        {s.detail} Nervous tissue also cannot store fuel and cannot tolerate interruption — a few
        minutes without oxygen destroys it — and the demand does not fall when the animal rests. It
        is a fixed cost incurred every hour of an animal&rsquo;s life, which is why large brains are
        rare rather than why they are impressive. How hominin brain expansion was funded is still
        argued: the expensive-tissue hypothesis proposed a trade-off against gut size, and broad
        comparative tests across mammals have not supported it.
      </Note>
    </Stack>
  );
}
