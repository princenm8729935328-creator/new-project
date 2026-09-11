import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The point at which evolution stops being a one-way process.
 *
 * A straight arrow against a loop. The comparison is the argument, and putting
 * both on the same axes makes clear that the loop is not a different theory but
 * the same one with an extra edge.
 */

const VIEWS = ['One-way', 'The loop'] as const;

interface Example {
  readonly key: string;
  readonly built: string;
  readonly selected: string;
}

const EXAMPLES: readonly Example[] = [
  {
    key: 'Processing food',
    built: 'cutting, pounding and later cooking do outside the body what teeth and guts used to do',
    selected:
      'teeth and jaws reduce; gut appears to shrink; more energy is available per hour spent eating',
  },
  {
    key: 'Dairying',
    built: 'keeping milk-producing animals creates a food source most adults cannot digest',
    selected:
      'lactase persistence evolves independently at least five times, in the populations that did the herding',
  },
  {
    key: 'Settlement',
    built: 'dense villages with livestock create conditions where epidemic diseases can persist',
    selected: 'immune loci show some of the strongest recent selection signals in the human genome',
  },
];

export default function BehaviourFeedback(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(1);
  const [pick, setPick] = useState(1);
  const ex = EXAMPLES[Math.min(pick, EXAMPLES.length - 1)];
  if (!ex) return null;

  const box = (x: number, y: number, w: number, label: string, colour: string): ReactNode => (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={30}
        rx={6}
        fill="rgba(148,162,192,0.1)"
        stroke={colour}
        strokeWidth={1.2}
      />
      <text x={x + w / 2} y={y + 19} textAnchor="middle" fontSize={8.5} fill={colour}>
        {label}
      </text>
    </g>
  );

  return (
    <Stack>
      <Figure height={190}>
        {view === 0 ? (
          <g>
            {box(20, 70, 96, 'environment', C.water)}
            {box(142, 70, 96, 'selection', C.warm)}
            {box(264, 70, 96, 'bodies', C.life)}
            <path
              d="M120,85 l18,0 m-5,-4 l5,4 l-5,4"
              fill="none"
              stroke={C.faint}
              strokeWidth={1.6}
            />
            <path
              d="M242,85 l18,0 m-5,-4 l5,4 l-5,4"
              fill="none"
              stroke={C.faint}
              strokeWidth={1.6}
            />
            <text x={190} y={140} textAnchor="middle" fontSize={8.5} fill={C.dim}>
              the world sets the problems; populations that cope leave more descendants
            </text>
            <text x={190} y={156} textAnchor="middle" fontSize={8} fill={C.faint}>
              nothing here points backwards
            </text>
          </g>
        ) : (
          <g>
            {box(20, 32, 96, 'behaviour', C.deep)}
            {box(142, 32, 96, 'environment', C.water)}
            {box(264, 32, 96, 'selection', C.warm)}
            {box(142, 116, 96, 'bodies', C.life)}
            <path
              d="M120,47 l18,0 m-5,-4 l5,4 l-5,4"
              fill="none"
              stroke={C.faint}
              strokeWidth={1.6}
            />
            <path
              d="M242,47 l18,0 m-5,-4 l5,4 l-5,4"
              fill="none"
              stroke={C.faint}
              strokeWidth={1.6}
            />
            <path
              d="M312,62 C312,96 250,116 242,124 m9,-8 l-9,8 l1,-11"
              fill="none"
              stroke={C.faint}
              strokeWidth={1.6}
            />
            <path
              d="M138,124 C90,116 68,96 68,62 m-4,10 l4,-10 l5,10"
              fill="none"
              stroke={C.life}
              strokeWidth={2}
            />
            <text x={68} y={100} textAnchor="middle" fontSize={8} fill={C.life}>
              and bodies
            </text>
            <text x={68} y={112} textAnchor="middle" fontSize={8} fill={C.life}>
              change behaviour
            </text>
            <text x={190} y={170} textAnchor="middle" fontSize={8.5} fill={C.dim}>
              the population is now altering the world it is being tested against
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="Picture" options={[...VIEWS]} value={view} onChange={setView} />
      <ToggleRow
        label="Example"
        options={EXAMPLES.map((e) => e.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>{ex.key}.</strong> What was built: {ex.built}. What got selected: {ex.selected}.
        Animals modifying their own selective environment is not a human invention — beavers build
        dams and their descendants are selected in ponds their ancestors made. What differs in
        humans is the transmission channel. A beaver’s dam-building is inherited genetically, so the
        constructed environment changes only as fast as the genes do; human techniques are
        transmitted by learning, so they can change within a generation, spread sideways, and
        accumulate. The constructed environment can therefore move far faster than any genetic
        response to it. A common misreading is that once culture appears, evolution stops mattering.
        The opposite follows: several of the strongest signals of recent selection in the human
        genome are responses to conditions people built.
      </Note>
    </Stack>
  );
}
