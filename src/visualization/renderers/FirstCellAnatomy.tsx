import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * What a reconstruction of LUCA does and does not contain.
 *
 * The parts are labelled by how confidently they are inferred, because the
 * usual illustration of "the first cell" presents a complete organism and the
 * genetics supports nothing of the kind. Roughly 350 gene families can be
 * traced to LUCA; a modern bacterium has several thousand.
 */

interface Part {
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly confidence: 'strong' | 'likely' | 'unknown';
  readonly detail: string;
}

const PARTS: readonly Part[] = [
  {
    label: 'Genetic code',
    x: 190,
    y: 76,
    confidence: 'strong',
    detail:
      'The same codon table is used by essentially every organism alive. It was in place before the three domains split, and nothing about it looks like an accident of one lineage.',
  },
  {
    label: 'Ribosomes',
    x: 132,
    y: 108,
    confidence: 'strong',
    detail:
      'The RNA core of the ribosome is nearly identical across all life. LUCA made proteins the way you do.',
  },
  {
    label: 'ATP as energy currency',
    x: 250,
    y: 108,
    confidence: 'strong',
    detail:
      'Universal, along with the enzyme that makes it from a proton gradient — which is why the chemiosmotic mechanism is thought to be older than LUCA rather than invented later.',
  },
  {
    label: 'Membrane lipids',
    x: 96,
    y: 60,
    confidence: 'unknown',
    detail:
      'Bacteria and archaea build their membranes from different, mirror-image lipids using unrelated enzymes. Either LUCA had no proper membrane, or it had one that both lineages replaced. Neither answer is comfortable, and this is the biggest open question in LUCA reconstruction.',
  },
  {
    label: 'DNA replication machinery',
    x: 284,
    y: 60,
    confidence: 'unknown',
    detail:
      'The core enzymes that copy DNA are also unrelated between bacteria and archaea. LUCA may have used RNA genomes, or the machinery may have been replaced independently twice.',
  },
  {
    label: 'Hydrogen-based metabolism',
    x: 190,
    y: 140,
    confidence: 'likely',
    detail:
      'The reconstructed gene set is heavy with enzymes using hydrogen, carbon dioxide and iron-sulphur clusters, and is dependent on high temperatures. That points towards a hydrothermal setting — though the inference depends on assumptions about horizontal gene transfer that others contest.',
  },
];

const COLOUR = { strong: C.life, likely: C.warm, unknown: C.hot } as const;
const WORD = {
  strong: 'confidently inferred',
  likely: 'likely',
  unknown: 'genuinely unknown',
} as const;

export default function FirstCellAnatomy(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const part = PARTS[Math.min(pick, PARTS.length - 1)];

  return (
    <Stack>
      <Figure height={192}>
        <ellipse
          cx={190}
          cy={100}
          rx={112}
          ry={74}
          fill="rgba(79,224,192,0.10)"
          stroke="rgba(79,224,192,0.4)"
          strokeDasharray="5 4"
        />
        {PARTS.map((p, i) => (
          <g key={p.label} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
            <circle cx={p.x} cy={p.y} r={i === pick ? 7 : 4.6} fill={COLOUR[p.confidence]} />
            <text
              x={p.x}
              y={p.y - 11}
              textAnchor="middle"
              fontSize={8}
              fill={i === pick ? '#fff' : C.dim}
            >
              {p.label}
            </text>
          </g>
        ))}
        <text x={190} y={186} textAnchor="middle" fontSize={8.5} fill={C.faint}>
          green: confidently inferred · amber: likely · red: unknown
        </text>
      </Figure>

      <Note>
        {part ? (
          <>
            <strong>
              {part.label} — {WORD[part.confidence]}.
            </strong>{' '}
            {part.detail}
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
