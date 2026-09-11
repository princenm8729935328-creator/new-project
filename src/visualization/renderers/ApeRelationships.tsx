import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The great ape tree, with the branch points that actually carry information.
 *
 * The second view is the argument: the same tree with two branches rotated.
 * Nothing about relatedness has changed, and readers who thought the left-right
 * order meant something can see directly that it does not.
 */

interface Tip {
  readonly name: string;
  readonly y: number;
}

const SPLITS = [
  { ma: 16, label: 'orangutans split', x: 60 },
  { ma: 9, label: 'gorillas split', x: 130 },
  { ma: 7, label: 'our lineage splits', x: 190 },
  { ma: 2, label: 'chimp/bonobo split', x: 300 },
] as const;

export default function ApeRelationships(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  // View 1 swaps the two deepest sister positions. Same topology, different
  // drawing order — which is the entire point of the figure.
  const tips: readonly Tip[] =
    view === 0
      ? [
          { name: 'Orangutans', y: 30 },
          { name: 'Gorillas', y: 62 },
          { name: 'Humans', y: 100 },
          { name: 'Chimpanzees', y: 134 },
          { name: 'Bonobos', y: 162 },
        ]
      : [
          { name: 'Bonobos', y: 30 },
          { name: 'Chimpanzees', y: 58 },
          { name: 'Humans', y: 92 },
          { name: 'Gorillas', y: 130 },
          { name: 'Orangutans', y: 162 },
        ];

  const [t0, t1, t2, t3, t4] = tips;
  if (!t0 || !t1 || !t2 || !t3 || !t4) return null;
  const pan = view === 0 ? [t2, t3, t4] : [t2, t1, t0];
  const panRoot = (pan[1]!.y + pan[2]!.y) / 2;
  const homoPan = (pan[0]!.y + panRoot) / 2;
  const gor = view === 0 ? t1 : t3;
  const ora = view === 0 ? t0 : t4;
  const gorRoot = (homoPan + gor.y) / 2;
  const oraRoot = (gorRoot + ora.y) / 2;

  const branch = (x1: number, y1: number, x2: number, y2: number): ReactNode => (
    <path
      d={`M${x1},${y1} L${x1},${y2} L${x2},${y2}`}
      fill="none"
      stroke="rgba(148,162,192,0.6)"
      strokeWidth={1.4}
    />
  );

  return (
    <Stack>
      <Figure height={206}>
        {branch(SPLITS[0].x, oraRoot, 250, ora.y)}
        {branch(SPLITS[0].x, oraRoot, SPLITS[1].x, gorRoot)}
        {branch(SPLITS[1].x, gorRoot, 250, gor.y)}
        {branch(SPLITS[1].x, gorRoot, SPLITS[2].x, homoPan)}
        {branch(SPLITS[2].x, homoPan, 250, pan[0]!.y)}
        {branch(SPLITS[2].x, homoPan, SPLITS[3].x, panRoot)}
        {branch(SPLITS[3].x, panRoot, 250, pan[1]!.y)}
        {branch(SPLITS[3].x, panRoot, 250, pan[2]!.y)}

        {SPLITS.map((s) => (
          <g key={s.label}>
            <circle
              cx={s.x}
              cy={s.x === 60 ? oraRoot : s.x === 130 ? gorRoot : s.x === 190 ? homoPan : panRoot}
              r={3.2}
              fill={C.warm}
            />
            <text x={s.x} y={188} textAnchor="middle" fontSize={7.5} fill={C.faint}>
              {s.ma} Ma
            </text>
            <line
              x1={s.x}
              y1={176}
              x2={s.x}
              y2={180}
              stroke="rgba(148,162,192,0.4)"
              strokeWidth={1}
            />
          </g>
        ))}
        <line x1={40} y1={178} x2={330} y2={178} stroke="rgba(148,162,192,0.3)" strokeWidth={1} />
        <text x={330} y={188} textAnchor="end" fontSize={7.5} fill={C.faint}>
          today
        </text>

        {tips.map((t) => (
          <text
            key={t.name}
            x={256}
            y={t.y + 3}
            fontSize={9}
            fill={t.name === 'Humans' ? C.life : 'rgba(233,238,247,0.9)'}
            fontWeight={t.name === 'Humans' ? 700 : 400}
          >
            {t.name}
          </text>
        ))}
        <text x={14} y={202} fontSize={8} fill={C.dim}>
          {view === 0 ? 'as usually drawn' : 'the same tree, two branches rotated'}
        </text>
      </Figure>

      <ToggleRow
        label="Layout"
        options={['Standard layout', 'Rotated layout']}
        value={view}
        onChange={setView}
      />

      <Note>
        {view === 0
          ? 'The only information in this diagram is where the lines join. Humans, chimpanzees and bonobos meet at one branch point; gorillas join below it; orangutans below that. Dates are molecular estimates with real uncertainty — the human–chimpanzee figure is commonly given anywhere between 6.5 and 9 million years depending on the mutation rate and generation time assumed.'
          : 'Two branches have been rotated around their joins, like a mobile turning. Every relationship in the diagram is unchanged: humans still meet chimpanzees and bonobos at the same point, gorillas still join below. If the left-to-right order looked meaningful in the first view, this is the demonstration that it was not. Trees carry no ranking and no direction along the page.'}
      </Note>
    </Stack>
  );
}
