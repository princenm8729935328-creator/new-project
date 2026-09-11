import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * What a tree does and does not assert, tested by asking the reader.
 *
 * A question with an answer that can be checked against the diagram is worth
 * more here than a caption. The common error — reading tip order as ranking —
 * survives explanation and does not survive being caught.
 */

interface Question {
  readonly prompt: string;
  readonly answer: string;
  readonly correct: 'yes' | 'no';
}

const QUESTIONS: readonly Question[] = [
  {
    prompt: 'Is D more closely related to E than to A?',
    correct: 'yes',
    answer:
      'Yes. Trace back from D and from E: they meet at the node on the right. Trace from D and A and you have to go all the way to the root. Fewer steps to the shared node means a closer relationship.',
  },
  {
    prompt: 'Is E more advanced than A, because it is drawn further right?',
    correct: 'no',
    answer:
      'No. Horizontal position is drawing, not data. Every tip in this tree is at the present day, and the branches can be rotated at any node without changing a single relationship the tree asserts.',
  },
  {
    prompt: 'Did A evolve into B?',
    correct: 'no',
    answer:
      'No. A and B are both tips — both living. Neither descends from the other; they share an ancestor at the node below them, which is not drawn because it is extinct and probably unknown.',
  },
  {
    prompt: 'Are B and C each other’s closest relatives on this tree?',
    correct: 'no',
    answer:
      'No, even though they are drawn next to each other. B joins the tree at the deeper node; C joins with D and E further up. Adjacency on the page is not a relationship.',
  },
];

const TIPS = [
  { id: 'A', y: 26 },
  { id: 'B', y: 54 },
  { id: 'C', y: 88 },
  { id: 'D', y: 120 },
  { id: 'E', y: 148 },
] as const;

export default function ReadingATree(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const question = QUESTIONS[Math.min(pick, QUESTIONS.length - 1)];
  if (!question) return null;

  const branch = (x1: number, y1: number, x2: number, y2: number): ReactNode => (
    <path
      d={`M${x1},${y1} L${x1},${y2} L${x2},${y2}`}
      fill="none"
      stroke="rgba(148,162,192,0.55)"
      strokeWidth={1.4}
    />
  );

  const nCDE = (88 + 134) / 2;
  const nDE = 134;
  const nAB = 40;
  const root = (nAB + nCDE) / 2;

  return (
    <Stack>
      <Figure height={186}>
        {branch(40, root, 120, nAB)}
        {branch(120, nAB, 250, 26)}
        {branch(120, nAB, 250, 54)}
        {branch(40, root, 150, nCDE)}
        {branch(150, nCDE, 250, 88)}
        {branch(150, nCDE, 200, nDE)}
        {branch(200, nDE, 250, 120)}
        {branch(200, nDE, 250, 148)}

        {[
          [40, root],
          [120, nAB],
          [150, nCDE],
          [200, nDE],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={3} fill={C.warm} />
        ))}

        {TIPS.map((t) => (
          <text key={t.id} x={258} y={t.y + 4} fontSize={11} fill="rgba(233,238,247,0.95)">
            {t.id}
          </text>
        ))}

        <text x={14} y={172} fontSize={8} fill={C.dim}>
          orange dots are branch points — the only information in the diagram
        </text>
      </Figure>

      <ToggleRow
        label="Question"
        options={['Q1', 'Q2', 'Q3', 'Q4']}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>{question.prompt}</strong>{' '}
        <span style={{ color: question.correct === 'yes' ? C.life : C.hot }}>
          {question.correct === 'yes' ? 'Yes.' : 'No.'}
        </span>{' '}
        {question.answer}
      </Note>
    </Stack>
  );
}
