import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * The groups a human is inside, drawn as nested boxes.
 *
 * Nesting is the whole point: a reader who sees "ape" as a category beside
 * "human" will misread the entire section. Boxes inside boxes make it
 * impossible to read them as alternatives.
 */

interface Level {
  readonly name: string;
  readonly earned: string;
  readonly when: string;
  readonly detail: string;
}

const LEVELS: readonly Level[] = [
  {
    name: 'Animals',
    earned: 'many cells, eating other organisms, nerves',
    when: '~800 million years ago',
    detail:
      'Multicellular, unable to make their own food, with cells that signal to each other. Everything after this inherits it.',
  },
  {
    name: 'Vertebrates',
    earned: 'a backbone, a skull, a chambered heart',
    when: '~530 million years ago',
    detail:
      'A stiff internal rod to pull muscles against. The blind spot in your eye dates from this level: the vertebrate retina was wired back to front and has stayed that way ever since.',
  },
  {
    name: 'Mammals',
    earned: 'hair, milk, constant body temperature',
    when: '~210 million years ago',
    detail:
      'Warm blood is expensive and buys activity in the cold. Three bones that were part of a reptilian jaw became the bones of the middle ear.',
  },
  {
    name: 'Primates',
    earned: 'grasping hands, forward-facing eyes, colour vision',
    when: '~65 million years ago',
    detail:
      'Adaptations for moving through branches: hands that grip, eyes whose fields overlap to judge distance, and a shift from relying on smell to relying on sight.',
  },
  {
    name: 'Apes',
    earned: 'no tail, mobile shoulders, larger brains',
    when: '~25 million years ago',
    detail:
      'Shoulders that rotate freely overhead, evolved for hanging beneath branches. It is why a human can throw, and why the tail was lost — a recent study traced it to a single genetic insertion shared by all apes.',
  },
  {
    name: 'Humans',
    earned: 'habitual bipedalism, then a much larger brain',
    when: '~7 million years ago',
    detail:
      'Everything in this section happens at this level, and all of it is built out of what the five levels above already provided.',
  },
];

export default function NestedAncestry(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(5);
  const level = LEVELS[Math.min(pick, LEVELS.length - 1)];
  if (!level) return null;

  const PAD = 13;
  const TOP = 14;

  return (
    <Stack>
      <Figure height={214}>
        {LEVELS.map((l, i) => {
          const inset = i * PAD;
          const active = i === pick;
          return (
            <g key={l.name} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={10 + inset}
                y={TOP + inset}
                width={360 - inset * 2}
                height={196 - inset * 2}
                rx={6}
                fill={active ? 'rgba(79,224,192,0.10)' : 'transparent'}
                stroke={active ? C.life : 'rgba(148,162,192,0.35)'}
                strokeWidth={active ? 1.6 : 1}
              />
              <text
                x={16 + inset}
                y={TOP + inset + 12}
                fontSize={8.5}
                fill={active ? C.life : C.faint}
                fontWeight={active ? 700 : 400}
              >
                {l.name}
              </text>
            </g>
          );
        })}
        <text x={190} y={196} textAnchor="middle" fontSize={8} fill={C.dim}>
          each box is inside all the boxes around it
        </text>
      </Figure>

      <Note>
        <strong>{level.name}</strong> — appeared {level.when}. What this level added: {level.earned}
        . {level.detail} Tap any box to move up or down the nesting. Nothing here is a ranking: a
        box further in is not better, only more recent and more specific.
      </Note>
    </Stack>
  );
}
