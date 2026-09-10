import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The march-of-progress image against the actual topology.
 *
 * Both panels contain the same organisms. The ladder is produced by picking one
 * path through the tree and discarding every branch that does not lead to us —
 * so seeing it drawn on top of the tree, then removed, does more than any
 * amount of explanation.
 */

const VIEWS = ['The ladder', 'The tree'] as const;

interface Tip {
  readonly name: string;
  readonly x: number;
  readonly y: number;
}

const TIPS: readonly Tip[] = [
  { name: 'bacteria', x: 320, y: 26 },
  { name: 'fungi', x: 320, y: 52 },
  { name: 'plants', x: 320, y: 78 },
  { name: 'insects', x: 320, y: 104 },
  { name: 'fish', x: 320, y: 130 },
  { name: 'birds', x: 320, y: 156 },
  { name: 'humans', x: 320, y: 182 },
];

export default function TreeNotLadder(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={210}>
        {view === 0 ? (
          <g>
            {['bacterium', 'fish', 'amphibian', 'mammal', 'ape', 'human'].map((n, i) => (
              <g key={n}>
                <circle
                  cx={40 + i * 60}
                  cy={110 - i * 12}
                  r={9 + i * 1.6}
                  fill={C.life}
                  opacity={0.4 + i * 0.09}
                />
                <text
                  x={40 + i * 60}
                  y={140 - i * 12}
                  textAnchor="middle"
                  fontSize={8}
                  fill={C.dim}
                >
                  {n}
                </text>
                {i < 5 ? (
                  <path
                    d={`M${52 + i * 60},${106 - i * 12} L${84 + i * 60},${100 - i * 12}`}
                    stroke={C.faint}
                    strokeWidth={1.3}
                  />
                ) : null}
              </g>
            ))}
            <text x={190} y={186} textAnchor="middle" fontSize={9} fill={C.hot}>
              this is not what the evidence shows
            </text>
          </g>
        ) : (
          <g>
            <circle cx={24} cy={104} r={4} fill={C.warm} />
            {TIPS.map((tip, i) => (
              <g key={tip.name}>
                <path
                  d={`M28,104 C${120 + (i % 3) * 20},104 ${180 + (i % 4) * 14},${tip.y} ${tip.x},${tip.y}`}
                  fill="none"
                  stroke={tip.name === 'humans' ? C.life : 'rgba(148,162,192,0.55)'}
                  strokeWidth={tip.name === 'humans' ? 2 : 1.4}
                />
                <circle
                  cx={tip.x}
                  cy={tip.y}
                  r={3.4}
                  fill={tip.name === 'humans' ? C.life : C.faint}
                />
                <text
                  x={tip.x + 7}
                  y={tip.y + 3}
                  fontSize={8.5}
                  fill={tip.name === 'humans' ? C.life : C.dim}
                >
                  {tip.name}
                </text>
              </g>
            ))}
            <line x1={318} y1={16} x2={318} y2={192} stroke={C.warm} strokeDasharray="3 3" />
            <text x={314} y={12} textAnchor="end" fontSize={8} fill={C.warm}>
              all equally recent
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="Picture" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'The march of progress puts organisms in a line with humans at the end. Every stage in it is a living or fossil group placed as though it were an earlier version of the next — but a fish is not a step towards an amphibian, it is a lineage that has been evolving for exactly as long and is extremely good at being a fish.'
          : 'Drawn as a tree, every living species sits at the same right-hand edge, because every one of them has the same amount of evolutionary time behind it. The line in the previous panel is produced by choosing, at each branch, the side that leads to us — and hiding the rest. Choose a different tip and you get an equally continuous and equally arbitrary line to a hummingbird.'}
      </Note>
    </Stack>
  );
}
