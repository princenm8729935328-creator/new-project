import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Parfit's cases, escalated one variation at a time.
 *
 * Each panel changes exactly one feature of the previous one. That is what
 * makes the sequence an argument rather than a set of puzzles: if your answer
 * changes between two adjacent panels, the feature that changed is carrying
 * the weight, and you can then ask whether it should.
 */
export default function TeletransporterBranches(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="One variable changed per step — a conceptual thought experiment, not a technology"
      flow
      items={[
        {
          id: 'ordinary',
          label: 'Scanned on Earth, rebuilt on Mars, original destroyed',
          colour: C.water,
          detail:
            'The person who steps out has every memory, intention and trait. Most people, asked quickly, say they survived. Some say they died and a copy lives.',
        },
        {
          id: 'delay',
          label: 'Same, but the original is destroyed an hour later',
          colour: C.warm,
          detail:
            'Now the original can speak to the copy by radio before being destroyed. Almost nobody says the original survives as the copy here — yet nothing about the copy has changed.',
        },
        {
          id: 'branch',
          label: 'The scan is used twice: two people step out',
          colour: C.hot,
          detail:
            'Both have equal claim. They cannot both be you, because they are two and you are one. So either neither is, or identity is not what the psychological facts settle.',
        },
        {
          id: 'conclusion',
          label: 'Parfit: identity may not be what matters',
          colour: C.life,
          detail:
            'His proposal is to stop asking which one is you, and ask instead what you cared about in ordinary survival — continuity of memory, projects, relationships. Those can hold to two people at once.',
        },
        {
          id: 'objection',
          label: 'Or: the cases show the concept has limits',
          colour: C.deep,
          tag: 'objection',
          detail:
            'A common reply is that "person" evolved for a world without duplicates, so its breaking down in fictional cases tells us about the fiction, not about ordinary survival. Deciding between these readings is exactly what has not been settled.',
        },
      ]}
    />
  );
}
