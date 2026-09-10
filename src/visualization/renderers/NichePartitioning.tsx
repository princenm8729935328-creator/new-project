import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * MacArthur's warblers, which is the observation that made the concept concrete.
 *
 * Five species in the same spruce trees, apparently competing for the same
 * insects. Watching where each actually feeds shows they are not: they divide
 * the tree. The second panel is what happens when the division is removed.
 */

interface Warbler {
  readonly name: string;
  readonly from: number;
  readonly to: number;
  readonly colour: string;
}

const WARBLERS: readonly Warbler[] = [
  { name: 'Cape May', from: 0.0, to: 0.22, colour: C.life },
  { name: 'Blackburnian', from: 0.14, to: 0.4, colour: C.water },
  { name: 'Black-throated green', from: 0.3, to: 0.58, colour: C.warm },
  { name: 'Bay-breasted', from: 0.5, to: 0.78, colour: C.deep },
  { name: 'Myrtle', from: 0.68, to: 1.0, colour: C.hot },
];

export default function NichePartitioning(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  const TOP = 26;
  const HT = 122;
  const LEFT = 96;
  const W = 240;

  return (
    <Stack>
      <Figure height={190}>
        <path
          d={`M${LEFT - 40},${TOP + HT} L${LEFT - 12},${TOP} L${LEFT + 16},${TOP + HT} z`}
          fill="rgba(79,224,192,0.18)"
        />
        <text x={LEFT - 12} y={TOP + HT + 16} textAnchor="middle" fontSize={8} fill={C.faint}>
          spruce
        </text>

        {WARBLERS.map((w, i) => {
          const from = view === 0 ? w.from : 0.1;
          const to = view === 0 ? w.to : 0.9;
          const y = TOP + from * HT;
          const h = Math.max((to - from) * HT, 6);
          return (
            <g key={w.name}>
              <rect
                x={LEFT + (view === 0 ? 0 : i * 3)}
                y={y}
                width={W}
                height={h}
                rx={3}
                fill={w.colour}
                opacity={view === 0 ? 0.6 : 0.3}
              />
              <text x={LEFT + W + 6} y={y + h / 2 + 3} fontSize={7.5} fill={w.colour}>
                {w.name}
              </text>
            </g>
          );
        })}

        <text x={LEFT - 66} y={TOP + 6} fontSize={8} fill={C.dim}>
          top
        </text>
        <text x={LEFT - 66} y={TOP + HT} fontSize={8} fill={C.dim}>
          base
        </text>
        <text x={190} y={182} textAnchor="middle" fontSize={8.5} fill={view === 0 ? C.life : C.hot}>
          {view === 0
            ? 'each species feeds in a different zone'
            : 'complete overlap — one species would exclude the rest'}
        </text>
      </Figure>

      <ToggleRow
        label="View"
        options={['As observed', 'If they fully overlapped']}
        value={view}
        onChange={setView}
      />

      <Note>
        {view === 0
          ? 'Robert MacArthur watched five warbler species feeding in the same spruce trees in Maine and recorded where each one spent its time. They divide the tree: one works the outer tips of the upper branches, another the inner branches below, and so on. They also differ in timing and in exactly which insects they take. This is what allows apparent competitors to coexist, and it is the observation that turned the niche from a metaphor into something measurable.'
          : 'If two species used the resource identically, the one even marginally better at it would eventually exclude the other — the competitive exclusion principle. Coexistence requires that they differ somewhere. In practice the differences are often subtle and are not always found even when species clearly do coexist, which is a long-running puzzle in ecology sometimes called the paradox of the plankton.'}
      </Note>
    </Stack>
  );
}
