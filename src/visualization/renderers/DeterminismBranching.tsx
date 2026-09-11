import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * What "I could have done otherwise" might mean.
 *
 * The free will dispute is famously prone to people talking past each other,
 * and this is where it happens: the sentence has several readings, and which
 * one is in play decides whether determinism threatens it.
 */
export default function DeterminismBranching(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Readings of one sentence — a conceptual analysis, not a claim about physics"
      items={[
        {
          id: 'nobody',
          label: 'Nobody stopped me',
          colour: C.water,
          detail:
            'The absence of external constraint. Determinism leaves this completely intact: a person free of chains is free of chains whether or not their choice was caused.',
        },
        {
          id: 'wanted',
          label: 'If I had wanted to, I would have',
          colour: C.warm,
          detail:
            'The classical compatibilist reading. It is a conditional claim about what would have happened given a different desire, and it too is untouched by determinism.',
        },
        {
          id: 'capacity',
          label: 'I had the capacity and it was working',
          colour: C.life,
          detail:
            'The more sophisticated compatibilist reading: I could recognise reasons and respond to them. Someone in the grip of a compulsion lacks this; someone weighing options has it.',
        },
        {
          id: 'literal',
          label: 'The world could have gone two ways from exactly here',
          colour: C.hot,
          tag: 'the sharp one',
          detail:
            'The incompatibilist reading — that with the past and the laws held fixed, more than one future was genuinely open. This is the one determinism rules out, and it is the one most people seem to mean when they first think about it.',
        },
        {
          id: 'physics',
          label: 'Is our world deterministic?',
          colour: C.deep,
          detail:
            'Not settled. Quantum mechanics has deterministic and indeterministic interpretations that are empirically equivalent so far. And as the next topic argues, indeterminism does not obviously help — so the free will problem does not reduce to a question physics could answer for us.',
        },
      ]}
    />
  );
}
