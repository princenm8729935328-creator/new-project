import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * Every definition of life, checked against the awkward cases.
 *
 * The figure is a grid rather than a list because the point is the pattern: no
 * column is all ticks and no row is all crosses. Whichever criterion you pick,
 * something alive fails it or something dead passes it.
 */

const CRITERIA = [
  'Metabolism',
  'Grows',
  'Reproduces',
  'Responds',
  'Evolves',
  'Homeostasis',
] as const;

interface Case {
  readonly name: string;
  readonly marks: readonly (boolean | null)[];
  readonly verdict: string;
}

const CASES: readonly Case[] = [
  {
    name: 'Bacterium',
    marks: [true, true, true, true, true, true],
    verdict: 'Passes everything. Nobody disputes this one.',
  },
  {
    name: 'Virus',
    marks: [false, false, null, true, true, false],
    verdict:
      'Cannot metabolise or reproduce without hijacking a cell, but evolves as vigorously as anything alive. Most biologists say not alive; a substantial minority disagree, and the argument has not resolved in eighty years.',
  },
  {
    name: 'Fire',
    marks: [true, true, true, true, false, false],
    verdict:
      'Consumes fuel, releases energy, grows, spreads and responds to its surroundings. It fails only on heredity — a fire passes nothing to the next fire. This is why most definitions put evolution at the centre.',
  },
  {
    name: 'Crystal',
    marks: [false, true, true, false, false, false],
    verdict:
      'Grows and templates copies of its own structure from solution. It has a kind of heredity — defects propagate — but no metabolism and no open-ended variation.',
  },
  {
    name: 'Mule',
    marks: [true, true, false, true, false, true],
    verdict:
      'Alive by any reasonable standard, and sterile. Which shows that reproduction cannot be a requirement for an individual organism, only for a lineage.',
  },
  {
    name: 'Seed, dormant',
    marks: [false, false, false, false, null, false],
    verdict:
      'Metabolism can be suspended almost entirely for years — some seeds have germinated after two thousand — and resumed. Alive, but failing nearly every criterion while dormant.',
  },
];

export default function WhatIsLifeCriteria(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const chosen = CASES[Math.min(pick, CASES.length - 1)];
  const LEFT = 82;
  const COL = (380 - LEFT - 10) / CRITERIA.length;
  const ROW = 22;
  const TOP = 44;

  return (
    <Stack>
      <Figure height={TOP + CASES.length * ROW + 12}>
        {CRITERIA.map((c, i) => (
          <text
            key={c}
            x={LEFT + COL * i + COL / 2}
            y={38}
            textAnchor="end"
            fontSize={8}
            fill={C.dim}
            transform={`rotate(-38 ${LEFT + COL * i + COL / 2} 38)`}
          >
            {c}
          </text>
        ))}
        {CASES.map((cs, r) => (
          <g key={cs.name} onClick={() => setPick(r)} style={{ cursor: 'pointer' }}>
            <rect
              x={6}
              y={TOP + r * ROW - 15}
              width={368}
              height={ROW - 3}
              rx={2}
              fill={r === pick ? 'rgba(148,162,192,0.16)' : 'transparent'}
            />
            <text x={12} y={TOP + r * ROW} fontSize={9.5} fill="rgba(233,238,247,0.95)">
              {cs.name}
            </text>
            {cs.marks.map((m, i) => (
              <text
                key={i}
                x={LEFT + COL * i + COL / 2}
                y={TOP + r * ROW}
                textAnchor="middle"
                fontSize={11}
                fill={m === true ? C.life : m === false ? C.hot : C.warm}
              >
                {m === true ? '✓' : m === false ? '✕' : '?'}
              </text>
            ))}
          </g>
        ))}
      </Figure>

      <Note>
        {chosen ? (
          <>
            <strong>{chosen.name}.</strong> {chosen.verdict}
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
