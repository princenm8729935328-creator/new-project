import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Chewing hours and usable energy under four processing regimes.
 *
 * The chewing-time axis is what makes the argument concrete: six hours a day is
 * six hours not spent doing anything else, and that is the constraint the
 * cooking hypothesis is really about.
 */

interface Regime {
  readonly key: string;
  readonly chewHours: number;
  readonly yieldPct: number;
  readonly evidence: string;
}

const REGIMES: readonly Regime[] = [
  {
    key: 'Raw, unprocessed',
    chewHours: 6.0,
    yieldPct: 100,
    evidence:
      'The chimpanzee baseline: roughly six hours a day of chewing. Great apes spend a large fraction of their waking time processing food inside the mouth.',
  },
  {
    key: 'Sliced and pounded',
    chewHours: 4.3,
    yieldPct: 106,
    evidence:
      'Measured directly: a diet one-third sliced meat with pounded tubers cuts chewing force by around 17% and removes some 2.5 million chewing cycles a year. Requires only stone tools, which are securely dated to 2.6 million years — the right time.',
  },
  {
    key: 'Cooked',
    chewHours: 1.5,
    yieldPct: 130,
    evidence:
      'Heat gelatinises starch and unfolds protein, so enzymes reach more of the material and less energy is spent digesting it. Feeding trials show animals maintaining more body mass on cooked than raw versions of identical food, and preferring it when offered the choice.',
  },
  {
    key: 'Cooked and ground',
    chewHours: 0.8,
    yieldPct: 140,
    evidence:
      'Modern processed diets. Included as the endpoint of the same trend — and as a reminder that the trend did not stop, with consequences the agriculture movement returns to.',
  },
];

export default function CookingEnergy(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(2);
  const r = REGIMES[Math.min(pick, REGIMES.length - 1)];
  if (!r) return null;

  const LEFT = 104;
  const W = 236;

  return (
    <Stack>
      <Figure height={196}>
        <text x={LEFT} y={16} fontSize={8} fill={C.warm}>
          hours chewing per day
        </text>
        {REGIMES.map((x, i) => {
          const y = 32 + i * 22;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <text
                x={LEFT - 8}
                y={y + 8}
                textAnchor="end"
                fontSize={7.5}
                fill={active ? C.life : C.dim}
              >
                {x.key}
              </text>
              <rect
                x={LEFT}
                y={y}
                width={(W * x.chewHours) / 6.5}
                height={13}
                rx={3}
                fill={active ? C.warm : 'rgba(255,210,127,0.4)'}
              />
              <text x={LEFT + (W * x.chewHours) / 6.5 + 6} y={y + 10} fontSize={7.5} fill={C.faint}>
                {x.chewHours} h
              </text>
            </g>
          );
        })}

        <text x={LEFT} y={140} fontSize={8} fill={C.life}>
          usable energy from the same food
        </text>
        <rect x={LEFT} y={146} width={W} height={14} rx={4} fill="rgba(148,162,192,0.12)" />
        <rect x={LEFT} y={146} width={(W * r.yieldPct) / 145} height={14} rx={4} fill={C.life} />
        <text x={LEFT + (W * r.yieldPct) / 145 + 6} y={157} fontSize={9} fill={C.life}>
          {r.yieldPct}%
        </text>

        <text x={14} y={180} fontSize={7.5} fill={C.faint}>
          figures are illustrative of measured directions, not precise values;
        </text>
        <text x={14} y={190} fontSize={7.5} fill={C.faint}>
          real yields vary enormously by food and preparation
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Processing"
          hiddenLabel="Level of food processing, from raw to cooked and ground"
          min={0}
          max={3}
          step={1}
          value={pick}
          onChange={setPick}
          display={r.key}
        />
      </ControlRows>

      <Note>
        <strong>{r.key}.</strong> {r.evidence} The cooking hypothesis builds a large claim on this:
        that controlling fire was the change that made everything else possible — more energy from
        the same food, less time chewing, smaller teeth and guts needed, and enough surplus to run a
        much larger brain. It explains a great deal at once, and modern humans really are obligate
        cooks. The problem is chronological. The anatomical changes it explains happen around 1.9
        million years ago; the earliest solid fire evidence is around one million, and habitual use
        later still. Note the second row: slicing and pounding alone deliver much of the chewing
        reduction, need no fire, and arrive at the right time — though they do not deliver the same
        energetic gain, which weakens the brain half of the argument while strengthening the
        chronology.
      </Note>
    </Stack>
  );
}
