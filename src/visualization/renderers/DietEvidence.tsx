import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Three ways of reading a tooth, and what happens when they disagree.
 *
 * Paranthropus boisei is the reason this figure exists: the anatomy says hard
 * objects, the wear and chemistry say something else entirely, and the
 * disagreement taught the field not to read capability as habit.
 */

interface Case {
  readonly key: string;
  readonly morphology: string;
  readonly microwear: string;
  readonly isotopes: string;
  readonly verdict: string;
  readonly agree: boolean;
}

const CASES: readonly Case[] = [
  {
    key: 'Au. afarensis',
    morphology: 'thick enamel, moderately large molars — capable of tough foods',
    microwear: 'light scratching, little pitting — no evidence of hard objects',
    isotopes: 'mostly tree-based foods, with some grass-derived carbon appearing',
    verdict:
      'The three broadly agree on a generalist eating mainly fruit, leaves and similar, with the isotope record beginning to show new resources entering the diet.',
    agree: true,
  },
  {
    key: 'P. boisei',
    morphology: 'enormous flat molars, buttressed face, crest for jaw muscles — built for crushing',
    microwear: 'fine scratches, not the pitting of a hard-object feeder',
    isotopes: 'roughly 75–80% grass- or sedge-derived carbon — the highest of any hominin',
    verdict:
      'Nicknamed Nutcracker Man on the anatomy alone. Wear and chemistry both say otherwise: a high-volume processor of tough, abrasive grasses and sedges. The anatomy records what it could survive, not what it usually ate.',
    agree: false,
  },
  {
    key: 'Early Homo',
    morphology: 'smaller molars and lighter jaws than any australopith',
    microwear: 'variable between individuals and sites',
    isotopes: 'mixed, and variable — no single dietary signature',
    verdict:
      'Reduced chewing apparatus alongside variable diet is usually read as food being processed outside the mouth, by cutting and pounding. The variability may be the finding rather than noise.',
    agree: true,
  },
];

const ROWS = [
  { key: 'morphology', label: 'Tooth shape', records: 'what the lineage was equipped for' },
  { key: 'microwear', label: 'Surface wear', records: 'the last days or weeks of life' },
  { key: 'isotopes', label: 'Enamel chemistry', records: 'years, while the crown formed' },
] as const;

export default function DietEvidence(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const c = CASES[Math.min(pick, CASES.length - 1)];
  if (!c) return null;

  return (
    <Stack>
      <Figure height={202}>
        {ROWS.map((row, i) => {
          const y = 26 + i * 54;
          const text = c[row.key];
          return (
            <g key={row.key}>
              <rect x={14} y={y} width={352} height={44} rx={5} fill="rgba(148,162,192,0.07)" />
              <text x={24} y={y + 15} fontSize={9} fill={C.life}>
                {row.label}
              </text>
              <text x={24} y={y + 27} fontSize={7.5} fill={C.faint}>
                records {row.records}
              </text>
              <text x={24} y={y + 39} fontSize={8} fill="rgba(233,238,247,0.9)">
                {text.length > 62 ? `${text.slice(0, 60)}…` : text}
              </text>
            </g>
          );
        })}
        <text x={14} y={16} fontSize={9.5} fill="rgba(233,238,247,0.95)">
          {c.key}
        </text>
        <rect
          x={14}
          y={190}
          width={352}
          height={0.8}
          fill={c.agree ? 'rgba(79,224,192,0.5)' : 'rgba(255,143,110,0.6)'}
        />
        <text x={190} y={200} textAnchor="middle" fontSize={8.5} fill={c.agree ? C.life : C.hot}>
          {c.agree ? 'the three readings broadly agree' : 'the three readings disagree'}
        </text>
      </Figure>

      <ToggleRow
        label="Species"
        options={CASES.map((x) => x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>Tooth shape:</strong> {c.morphology}. <strong>Surface wear:</strong> {c.microwear}.{' '}
        <strong>Enamel chemistry:</strong> {c.isotopes}. {c.verdict}
      </Note>
    </Stack>
  );
}
