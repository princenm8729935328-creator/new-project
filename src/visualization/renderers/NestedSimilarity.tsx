import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The nested pattern, which is the actual evidence for common ancestry.
 *
 * Similarity alone proves nothing — convergence produces plenty of it. What
 * needs explaining is that similarities fall into groups inside groups, with no
 * crossing, and that independent kinds of evidence produce the same nesting.
 */

const VIEWS = ['Anatomy', 'Genetics', 'Development'] as const;

interface Group {
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly w: number;
  readonly h: number;
  readonly colour: string;
}

const GROUPS: readonly Group[] = [
  { label: 'vertebrates', x: 14, y: 26, w: 352, h: 120, colour: 'rgba(148,162,192,0.4)' },
  { label: 'tetrapods', x: 82, y: 40, w: 276, h: 98, colour: 'rgba(111,179,255,0.5)' },
  { label: 'amniotes', x: 138, y: 54, w: 212, h: 76, colour: 'rgba(201,168,255,0.5)' },
  { label: 'mammals', x: 200, y: 68, w: 142, h: 54, colour: 'rgba(255,210,127,0.55)' },
  { label: 'primates', x: 256, y: 82, w: 78, h: 32, colour: 'rgba(79,224,192,0.6)' },
];

export default function NestedSimilarity(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  const traits = [
    ['backbone', 'four limbs', 'amniotic egg', 'hair, milk', 'grasping hands'],
    [
      'shared Hox cluster',
      'limb-patterning genes',
      'keratin gene family',
      'casein genes',
      'trichromatic opsins',
    ],
    [
      'notochord in embryo',
      'limb buds',
      'extraembryonic membranes',
      'mammary ridge',
      'prolonged brain growth',
    ],
  ];

  return (
    <Stack>
      <Figure height={188}>
        {GROUPS.map((g, i) => (
          <g key={g.label}>
            <rect
              x={g.x}
              y={g.y}
              width={g.w}
              height={g.h}
              rx={5}
              fill="none"
              stroke={g.colour}
              strokeWidth={1.6}
            />
            <text x={g.x + 6} y={g.y + 12} fontSize={8.5} fill={g.colour}>
              {g.label}
            </text>
            <text x={g.x + 6} y={g.y + 24} fontSize={7.5} fill={C.faint}>
              {traits[view]?.[i]}
            </text>
          </g>
        ))}
        <text x={190} y={166} textAnchor="middle" fontSize={8.5} fill={C.dim}>
          every box sits entirely inside the next — none of them overlap partway
        </text>
        <text x={190} y={180} textAnchor="middle" fontSize={8.5} fill={C.life}>
          and anatomy, genetics and development give the same boxes
        </text>
      </Figure>

      <ToggleRow label="Evidence" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        Every mammal is an amniote; every amniote is a tetrapod; every tetrapod is a vertebrate.
        There are no animals with hair and milk that lack a backbone, and none with an amniotic egg
        but no limbs in their ancestry. That strict nesting is what needs explaining, and descent
        with modification explains it exactly: a trait that appears once in an ancestor is inherited
        by everything descended from it, and by nothing else. The stronger point is that the three
        kinds of evidence here were gathered independently, by different methods, over two centuries
        — and they agree. A designer under no obligation to reuse parts could have produced any
        arrangement; only inheritance is forced to produce this one.
      </Note>
    </Stack>
  );
}
