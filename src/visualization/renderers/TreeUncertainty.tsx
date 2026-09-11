import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Three published arrangements of the same fossils.
 *
 * Museum diagrams disagree with each other, and a reader who has only seen one
 * concludes the tree is settled. Showing three side by side is the only honest
 * way to present the state of the evidence.
 */

interface Arrangement {
  readonly key: string;
  readonly edges: readonly (readonly [string, string])[];
  readonly note: string;
}

const NODES: Record<string, { x: number; y: number; label: string }> = {
  afar: { x: 70, y: 150, label: 'afarensis' },
  afri: { x: 70, y: 108, label: 'africanus' },
  sed: { x: 150, y: 130, label: 'sediba' },
  hab: { x: 176, y: 86, label: 'habilis' },
  rud: { x: 176, y: 48, label: 'rudolfensis' },
  ere: { x: 262, y: 66, label: 'erectus' },
  sap: { x: 336, y: 66, label: 'sapiens' },
};

const ARRANGEMENTS: readonly Arrangement[] = [
  {
    key: 'Habilis first',
    edges: [
      ['afar', 'hab'],
      ['hab', 'ere'],
      ['ere', 'sap'],
      ['afar', 'afri'],
      ['afar', 'rud'],
      ['afri', 'sed'],
    ],
    note: 'The textbook arrangement: afarensis gives rise to habilis, habilis to erectus, erectus to us, with africanus and rudolfensis as side branches. It is the version most commonly drawn and it is one hypothesis among several.',
  },
  {
    key: 'Sediba route',
    edges: [
      ['afar', 'afri'],
      ['afri', 'sed'],
      ['sed', 'ere'],
      ['ere', 'sap'],
      ['afar', 'hab'],
      ['afar', 'rud'],
    ],
    note: 'Australopithecus sediba, described in 2010, has a mixture of features that its discoverers argue places it on the line to Homo. On this arrangement habilis becomes a side branch. The dating is awkward — sediba may be too late — and the proposal is contested.',
  },
  {
    key: 'Deep-rooted',
    edges: [
      ['afar', 'hab'],
      ['afar', 'rud'],
      ['hab', 'ere'],
      ['rud', 'ere'],
      ['ere', 'sap'],
      ['afar', 'afri'],
      ['afri', 'sed'],
    ],
    note: 'Early Homo as several contemporaneous lineages rather than a single graded sequence, with the ancestry of erectus unresolved between them. Reconstruction of the distorted habilis type specimen supported this reading, and it is the arrangement most compatible with the present dating.',
  },
];

export default function TreeUncertainty(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const arrangement = ARRANGEMENTS[Math.min(pick, ARRANGEMENTS.length - 1)];
  if (!arrangement) return null;

  return (
    <Stack>
      <Figure height={196}>
        {arrangement.edges.map(([a, b]) => {
          const from = NODES[a];
          const to = NODES[b];
          if (!from || !to) return null;
          const solid = (a === 'ere' && b === 'sap') || (a === 'afar' && b === 'afri');
          return (
            <path
              key={`${a}-${b}`}
              d={`M${from.x},${from.y} C${(from.x + to.x) / 2},${from.y} ${(from.x + to.x) / 2},${to.y} ${to.x},${to.y}`}
              fill="none"
              stroke={solid ? 'rgba(79,224,192,0.55)' : 'rgba(148,162,192,0.45)'}
              strokeWidth={solid ? 2 : 1.4}
              strokeDasharray={solid ? undefined : '4 3'}
            />
          );
        })}
        {Object.entries(NODES).map(([id, n]) => (
          <g key={id}>
            <circle cx={n.x} cy={n.y} r={5} fill={id === 'sap' ? C.life : C.warm} />
            <text
              x={n.x}
              y={n.y - 10}
              textAnchor="middle"
              fontSize={7.5}
              fill={id === 'sap' ? C.life : C.dim}
            >
              {n.label}
            </text>
          </g>
        ))}
        <text x={14} y={18} fontSize={8.5} fill={C.dim}>
          the same fossils, arranged three ways
        </text>
        <line x1={280} y1={176} x2={300} y2={176} stroke="rgba(79,224,192,0.55)" strokeWidth={2} />
        <text x={276} y={179} textAnchor="end" fontSize={7.5} fill={C.life}>
          well supported
        </text>
        <line
          x1={280}
          y1={190}
          x2={300}
          y2={190}
          stroke="rgba(148,162,192,0.45)"
          strokeWidth={1.4}
          strokeDasharray="4 3"
        />
        <text x={276} y={193} textAnchor="end" fontSize={7.5} fill={C.faint}>
          hypothesis
        </text>
      </Figure>

      <ToggleRow
        label="Arrangement"
        options={ARRANGEMENTS.map((a) => a.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        {arrangement.note} All three have been published and defended. The reason they can coexist
        is structural: methods for reconstructing evolutionary relationships identify which species
        are each other’s closest relatives, and do not identify ancestors — being an ancestor is not
        a feature you can score on a bone. With small samples, high within-species variation and
        gaps of hundreds of thousands of years, competing arrangements are frequently not
        distinguishable. When you read any hominin tree, take the dates as measurements and the
        connecting lines as hypotheses.
      </Note>
    </Stack>
  );
}
