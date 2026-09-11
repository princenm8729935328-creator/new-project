import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The brain's share of mass against its share of the energy bill.
 *
 * Two bars, same total, wildly different splits. The childhood view is the one
 * that matters for the argument, because it coincides with the period of
 * slowest body growth — which looks like the trade it probably is.
 */

interface Case {
  readonly key: string;
  readonly massPct: number;
  readonly energyPct: number;
  readonly note: string;
}

const CASES: readonly Case[] = [
  {
    key: 'Human adult',
    massPct: 2,
    energyPct: 22,
    note: 'About 20 watts, continuously, awake or asleep. Most of it is not spent on thinking but on pumping ions back across membranes to restore the gradients that every nerve signal discharges. The pump cannot stop: the cells die within minutes if it does.',
  },
  {
    key: 'Human child (5 yr)',
    massPct: 6,
    energyPct: 43,
    note: 'The peak. Over 40% of a child’s entire resting energy budget goes to the brain — in a body that also has to grow. Human children grow unusually slowly, and the slowest phase coincides with this peak, which looks like a trade: build the brain now, build the body later.',
  },
  {
    key: 'Chimpanzee adult',
    massPct: 0.9,
    energyPct: 9,
    note: 'The comparison that sets the scale. A chimpanzee brain costs roughly 9% of resting metabolism. Getting from there to ours is not a matter of finding spare capacity — it is a substantial increase in what has to be acquired every day.',
  },
];

export default function BrainEnergyCost(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const c = CASES[Math.min(pick, CASES.length - 1)];
  if (!c) return null;

  const LEFT = 84;
  const W = 272;

  const bar = (y: number, pct: number, label: string, colour: string): ReactNode => (
    <g>
      <text x={LEFT - 8} y={y + 12} textAnchor="end" fontSize={8.5} fill={C.dim}>
        {label}
      </text>
      <rect x={LEFT} y={y} width={W} height={18} rx={4} fill="rgba(148,162,192,0.12)" />
      <rect x={LEFT} y={y} width={Math.max(W * (pct / 100), 3)} height={18} rx={4} fill={colour} />
      <text x={LEFT + Math.max(W * (pct / 100), 3) + 8} y={y + 13} fontSize={10} fill={colour}>
        {pct}%
      </text>
    </g>
  );

  return (
    <Stack>
      <Figure height={186}>
        <text x={14} y={18} fontSize={9.5} fill="rgba(233,238,247,0.95)">
          {c.key}
        </text>
        {bar(38, c.massPct, 'share of mass', 'rgba(148,162,192,0.55)')}
        {bar(76, c.energyPct, 'share of energy', C.deep)}

        <text x={LEFT} y={124} fontSize={8} fill={C.faint}>
          per gram, brain tissue burns energy about 11 times faster
        </text>
        <text x={LEFT} y={138} fontSize={8} fill={C.faint}>
          than the body average — and it never idles
        </text>

        <rect x={LEFT} y={150} width={W} height={10} rx={5} fill="rgba(148,162,192,0.12)" />
        <rect x={LEFT} y={150} width={W * 0.02} height={10} rx={5} fill="rgba(148,162,192,0.6)" />
        <text x={14} y={159} fontSize={7.5} fill={C.faint}>
          to scale:
        </text>
        <text x={LEFT + W * 0.02 + 6} y={159} fontSize={7.5} fill={C.faint}>
          2% of a body is this much of the bar
        </text>
      </Figure>

      <ToggleRow label="Case" options={CASES.map((x) => x.key)} value={pick} onChange={setPick} />

      <Note>
        {c.note} Any explanation of brain expansion has to say how that bill was paid, and only two
        answers are possible: take in more, or spend less elsewhere. The classic proposal was that
        the gut shrank as diet improved and the saving paid for the brain. It fits the fossils and
        it failed a general test — across about a hundred mammal species there is no negative
        correlation between brain mass and gut mass. What measurement does support is the other
        route: humans expend several hundred more calories per day than other apes of comparable
        size, and carry far more body fat as a buffer. A raised budget rather than a reallocated one
        — which makes brain expansion depend on social and technological arrangements rather than on
        anatomy alone.
      </Note>
    </Stack>
  );
}
