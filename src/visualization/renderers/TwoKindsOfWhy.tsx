import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The word "why" doing two different jobs.
 *
 * Almost every confusion in this part of the section comes from sliding between
 * them, so the figure separates them explicitly and shows the same question
 * asked both ways with different answers.
 */

interface Pair {
  readonly key: string;
  readonly question: string;
  readonly mechanism: string;
  readonly reason: string;
  readonly verdict: string;
}

const PAIRS: readonly Pair[] = [
  {
    key: 'Rain',
    question: 'Why does it rain?',
    mechanism:
      'Moist air rises, cools below its dew point, and water condenses onto particles until droplets are heavy enough to fall.',
    reason: '—',
    verdict:
      'Only the mechanism reading makes sense. Nobody asking this expects an intention, which is why it feels like an easy question.',
  },
  {
    key: 'A lie',
    question: 'Why did she lie to me?',
    mechanism: 'Air passed over vocal folds, shaped by the tongue and lips into particular sounds.',
    reason: 'She wanted to avoid a conversation she was dreading.',
    verdict:
      'Only the reason reading makes sense. The mechanical answer is true and answers nothing you were asking.',
  },
  {
    key: 'Life',
    question: 'Why did life begin?',
    mechanism:
      'Some sequence of chemical events on a young planet produced a system that could copy itself and vary. Parts of that sequence are understood; the whole is not.',
    reason:
      'Not available. There is no evidence of an intention, and science has no method for finding one.',
    verdict:
      'This question accepts both readings grammatically, which is exactly why it causes trouble. The mechanism reading is a hard scientific problem with real progress. The reason reading presupposes an intender, and that presupposition is not something the evidence supplies — in either direction.',
  },
];

export default function TwoKindsOfWhy(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(2);
  const p = PAIRS[Math.min(pick, PAIRS.length - 1)];
  if (!p) return null;

  const wrap = (text: string, width: number): string[] =>
    text.match(new RegExp(`.{1,${width}}(\\s|$)`, 'g')) ?? [];

  return (
    <Stack>
      <Figure height={190}>
        <text x={190} y={18} textAnchor="middle" fontSize={10.5} fill="rgba(233,238,247,0.98)">
          {p.question}
        </text>

        <rect x={12} y={28} width={356} height={68} rx={4} fill="rgba(79,224,192,0.10)" />
        <text x={22} y={44} fontSize={8.5} fill={C.life}>
          “by what process?”
        </text>
        {wrap(p.mechanism, 74)
          .slice(0, 4)
          .map((line, i) => (
            <text key={i} x={22} y={58 + i * 11} fontSize={8} fill="rgba(233,238,247,0.9)">
              {line.trim()}
            </text>
          ))}

        <rect x={12} y={104} width={356} height={68} rx={4} fill="rgba(201,168,255,0.10)" />
        <text x={22} y={120} fontSize={8.5} fill={C.deep}>
          “for what purpose?”
        </text>
        {wrap(p.reason, 74)
          .slice(0, 4)
          .map((line, i) => (
            <text key={i} x={22} y={134 + i * 11} fontSize={8} fill="rgba(233,238,247,0.9)">
              {line.trim()}
            </text>
          ))}
      </Figure>

      <ToggleRow
        label="Question"
        options={PAIRS.map((x) => x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>{p.verdict}</Note>
    </Stack>
  );
}
