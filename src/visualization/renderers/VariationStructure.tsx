import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Where human genetic variation sits, and what it looks like across space.
 *
 * Two views because two separate misconceptions are in play: that most
 * variation distinguishes groups, and that the variation which does is
 * partitioned rather than graded.
 */

const VIEWS = ['Within vs between', 'Across space'] as const;

export default function VariationStructure(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  const LEFT = 20;
  const W = 340;

  return (
    <Stack>
      <Figure height={192}>
        {view === 0 ? (
          <g>
            <text x={LEFT} y={18} fontSize={8.5} fill={C.dim}>
              how human genetic variation is apportioned
            </text>
            <rect x={LEFT} y={34} width={W} height={40} rx={5} fill="rgba(148,162,192,0.1)" />
            <rect
              x={LEFT}
              y={34}
              width={W * 0.87}
              height={40}
              rx={5}
              fill={C.life}
              opacity={0.75}
            />
            <text x={LEFT + 12} y={58} fontSize={9} fill="rgba(9,16,14,0.85)">
              within any one population: ~85–90%
            </text>
            <text x={LEFT + W * 0.87 + 6} y={58} fontSize={8} fill={C.warm}>
              between
            </text>

            <text x={LEFT} y={104} fontSize={8} fill={C.dim}>
              pick two people from the same village, and most of the genetic
            </text>
            <text x={LEFT} y={116} fontSize={8} fill={C.dim}>
              difference between any two humans anywhere is already present
            </text>

            <rect x={LEFT} y={132} width={W} height={44} rx={5} fill="rgba(79,224,192,0.08)" />
            <text x={LEFT + 10} y={148} fontSize={8} fill={C.life}>
              Most human genetic diversity is in Africa.
            </text>
            <text x={LEFT + 10} y={160} fontSize={7.5} fill={C.faint}>
              Only a small group left, so African populations retain more variation than
            </text>
            <text x={LEFT + 10} y={170} fontSize={7.5} fill={C.faint}>
              all non-African populations combined.
            </text>
          </g>
        ) : (
          <g>
            <text x={LEFT} y={18} fontSize={8.5} fill={C.dim}>
              allele frequency along a transect from Portugal to Beijing
            </text>
            <defs>
              <linearGradient id="clineGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="rgba(111,179,255,0.75)" />
                <stop offset="50%" stopColor="rgba(148,162,192,0.6)" />
                <stop offset="100%" stopColor="rgba(255,210,127,0.75)" />
              </linearGradient>
            </defs>
            <rect x={LEFT} y={40} width={W} height={30} rx={5} fill="url(#clineGrad)" />
            {Array.from({ length: 14 }, (_, i) => (
              <circle
                key={i}
                cx={LEFT + 14 + (i * (W - 28)) / 13}
                cy={88}
                r={4}
                fill="rgba(233,238,247,0.6)"
              />
            ))}
            <text x={LEFT} y={110} fontSize={7.5} fill={C.faint}>
              Portugal
            </text>
            <text x={LEFT + W} y={110} textAnchor="end" fontSize={7.5} fill={C.faint}>
              Beijing
            </text>
            <text x={LEFT} y={134} fontSize={8} fill={C.life}>
              there is no point along this walk where one group ends and another begins
            </text>
            <text x={LEFT} y={154} fontSize={7.5} fill={C.faint}>
              Clustering algorithms do recover geographic structure — but the number of
            </text>
            <text x={LEFT} y={164} fontSize={7.5} fill={C.faint}>
              clusters is chosen by the analyst, and apparent boundaries fall where
            </text>
            <text x={LEFT} y={174} fontSize={7.5} fill={C.faint}>
              sampling is discontinuous rather than where the variation is.
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Two things are true at once and are frequently confused: human populations do differ genetically in ways that track geography and history, and those differences do not partition people into discrete biological groups. The apportionment was first measured in 1972 with the limited data then available, and has held up under every subsequent increase in data. It is a consequence of the history in the previous movement — a small founding group leaving Africa, founder effects accumulating with distance, and neighbouring populations always exchanging partners.'
          : 'The variation that does distinguish populations is distributed as gradients. That is why the traits people use to sort each other are among the worst possible guides to ancestry: pigmentation responds strongly and quickly to ultraviolet intensity, so it tracks latitude rather than relatedness, and populations at similar latitudes on different continents have converged on similar colouring from different genetic routes and different ancestries. Meanwhile two African populations may differ from each other more, genetically, than either does from a European population. Genetic ancestry is real, continuous and estimable, and it matters in medicine and in reconstructing history. Race is a set of socially defined groupings whose boundaries have shifted across time and place. They are not the same variable, and one is not a proxy for the other.'}
      </Note>
    </Stack>
  );
}
