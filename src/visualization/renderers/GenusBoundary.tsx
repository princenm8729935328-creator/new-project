import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Changing the criterion changes which specimens are inside the genus.
 *
 * The figure is a demonstration rather than an illustration: switch the rule and
 * watch the membership change, with the same fossils and the same data. That is
 * what a definitional dispute looks like from the inside.
 */

interface Specimen {
  readonly key: string;
  readonly ma: number;
  readonly cc: number;
  readonly tools: boolean;
  readonly bodyModern: boolean;
  readonly smallTeeth: boolean;
}

const SPECIMENS: readonly Specimen[] = [
  { key: 'Au. afarensis', ma: 3.2, cc: 420, tools: false, bodyModern: false, smallTeeth: false },
  { key: 'Au. garhi', ma: 2.5, cc: 450, tools: true, bodyModern: false, smallTeeth: false },
  { key: 'LD 350-1', ma: 2.8, cc: 0, tools: false, bodyModern: false, smallTeeth: true },
  { key: 'H. habilis', ma: 1.9, cc: 610, tools: true, bodyModern: false, smallTeeth: true },
  { key: 'H. rudolfensis', ma: 1.9, cc: 750, tools: true, bodyModern: false, smallTeeth: false },
  { key: 'H. erectus', ma: 1.5, cc: 870, tools: true, bodyModern: true, smallTeeth: true },
  { key: 'H. naledi', ma: 0.3, cc: 500, tools: false, bodyModern: false, smallTeeth: true },
];

interface Criterion {
  readonly key: string;
  readonly test: (s: Specimen) => boolean;
  readonly detail: string;
}

const CRITERIA: readonly Criterion[] = [
  {
    key: 'Brain > 600 cm³',
    test: (s) => s.cc >= 600,
    detail:
      'The original criterion, and Leakey had to lower the threshold from 750 to admit Homo habilis in 1964. Any number you choose cuts an arbitrary line through a continuous distribution, and it excludes LD 350-1 entirely because the specimen is a jaw with no braincase at all.',
  },
  {
    key: 'Makes stone tools',
    test: (s) => s.tools,
    detail:
      'The name habilis means handy. Then tools turned up at 3.3 million years, before the genus exists on any reading, and Australopithecus garhi was found with cut-marked bone. It also admits nothing about anatomy, and excludes Homo naledi, which nobody proposes removing.',
  },
  {
    key: 'Modern body proportions',
    test: (s) => s.bodyModern,
    detail:
      'Proposed by Wood and Collard: restrict Homo to the adaptive grade with long legs, short arms and a committed terrestrial body. Coherent, and it removes habilis and rudolfensis from the genus — which is exactly what those authors proposed, and which most textbooks have not followed.',
  },
  {
    key: 'Reduced teeth and jaws',
    test: (s) => s.smallTeeth,
    detail:
      'Dental reduction relative to australopiths. It admits the oldest specimen, LD 350-1, which is what it was partly designed to do, and it admits Homo naledi. It says nothing about brains or bodies, and reduction is a gradient rather than a threshold.',
  },
];

export default function GenusBoundary(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const criterion = CRITERIA[Math.min(pick, CRITERIA.length - 1)];
  if (!criterion) return null;

  return (
    <Stack>
      <Figure height={196}>
        <text x={14} y={16} fontSize={8.5} fill={C.dim}>
          rule applied: {criterion.key}
        </text>
        {SPECIMENS.map((s, i) => {
          const inside = criterion.test(s);
          const y = 36 + i * 22;
          return (
            <g key={s.key}>
              <rect
                x={inside ? 140 : 14}
                y={y - 10}
                width={inside ? 226 : 118}
                height={20}
                rx={4}
                fill={inside ? 'rgba(79,224,192,0.18)' : 'rgba(148,162,192,0.08)'}
                stroke={inside ? 'rgba(79,224,192,0.5)' : 'rgba(148,162,192,0.2)'}
              />
              <text x={inside ? 148 : 20} y={y - 1} fontSize={8.5} fill={inside ? C.life : C.faint}>
                {s.key}
              </text>
              {/* On its own line: name and figures ran into each other when
                  both sat on one baseline inside a 118-wide box. */}
              <text x={inside ? 148 : 20} y={y + 8} fontSize={6.5} fill={C.faint}>
                {s.ma} Ma{s.cc > 0 ? ` · ${s.cc} cm³` : ' · no braincase'}
              </text>
            </g>
          );
        })}
        <line
          x1={134}
          y1={24}
          x2={134}
          y2={190}
          stroke="rgba(148,162,192,0.3)"
          strokeDasharray="3 3"
        />
        <text x={128} y={190} textAnchor="end" fontSize={7.5} fill={C.faint}>
          outside Homo
        </text>
        <text x={148} y={190} fontSize={7.5} fill={C.life}>
          inside Homo
        </text>
      </Figure>

      <ToggleRow
        label="Criterion"
        options={CRITERIA.map((c) => c.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        {criterion.detail} The same fossils are on the page each time; only the rule changes. There
        is no agreed definition of the genus Homo, and this is not a gap waiting for a better fossil
        — genus boundaries are conventions imposed on a continuous process, and a lineage that
        changes gradually will not have a first member of anything. The difficulty is a prediction
        of evolutionary theory rather than a problem for it.
      </Note>
    </Stack>
  );
}
