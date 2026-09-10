import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The same three organisms, ranked in three environments.
 *
 * The ranking changes completely between panels, which is the whole content of
 * "survival of the fittest is often misunderstood": fitness is not a property
 * an organism carries around, it is a relationship between an organism and a
 * situation.
 */

const ENVIRONMENTS = ['Cold, stable', 'Hot, dry', 'Disturbed, unpredictable'] as const;

interface Organism {
  readonly name: string;
  readonly scores: readonly [number, number, number];
  readonly colour: string;
}

const ORGANISMS: readonly Organism[] = [
  { name: 'Large, slow, well-defended', scores: [0.92, 0.3, 0.18], colour: C.water },
  { name: 'Heat-tolerant specialist', scores: [0.2, 0.94, 0.24], colour: C.hot },
  { name: 'Small, fast-breeding generalist', scores: [0.45, 0.5, 0.9], colour: C.life },
];

export default function FitnessIsContext(_props: VisualizationProps): ReactNode {
  const [env, setEnv] = useState(0);

  const ranked = [...ORGANISMS].sort((a, b) => (b.scores[env] ?? 0) - (a.scores[env] ?? 0));

  const notes = [
    'In a cold, stable environment, the large well-defended organism wins. Conditions do not change, so a specialised body pays off, and slow reproduction is not a handicap when adults survive well.',
    'In heat and drought, the specialist adapted to exactly these conditions wins, and the large organism does badly — its defences are irrelevant and its heat tolerance is poor.',
    'When conditions keep changing, both specialists do badly and the small fast-breeding generalist wins. It is not better at anything in particular; it is merely rarely wrong for long, and it recovers quickly.',
  ];

  return (
    <Stack>
      <Figure height={170}>
        <text x={16} y={16} fontSize={9.5} fill={C.dim}>
          {ENVIRONMENTS[env]}
        </text>
        {ranked.map((o, i) => (
          <g key={o.name}>
            <rect x={16} y={30 + i * 44} width={348} height={34} rx={3} fill={C.panel} />
            <rect
              x={16}
              y={30 + i * 44}
              width={Math.max((o.scores[env] ?? 0) * 348, 4)}
              height={34}
              rx={3}
              fill={o.colour}
              opacity={0.75}
            />
            <text x={26} y={44 + i * 44} fontSize={9.5} fill="rgba(233,238,247,0.98)">
              {i + 1}. {o.name}
            </text>
            <text
              x={26}
              y={57 + i * 44}
              fontSize={8}
              fill="rgba(233,238,247,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              relative reproductive success {((o.scores[env] ?? 0) * 100).toFixed(0)}
            </text>
          </g>
        ))}
      </Figure>

      <ToggleRow label="Environment" options={[...ENVIRONMENTS]} value={env} onChange={setEnv} />

      <Note>
        {notes[env]} Change the environment and the ranking changes completely. This is why
        &ldquo;survival of the fittest&rdquo; misleads: it sounds like a statement about which
        organisms are best, and it is really a statement about which happen to leave more offspring
        under the conditions currently in force. It is also why the phrase is close to circular on
        its own — the fittest are defined as those that reproduce most, so the slogan says little
        until you specify the environment. Darwin did not coin it; Herbert Spencer did, and Darwin
        adopted it later, arguably to the detriment of everyone&rsquo;s understanding.
      </Note>
    </Stack>
  );
}
