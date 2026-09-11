import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Reid's objection to the memory criterion, and the repair it forced.
 *
 * Drawn as a sequence because the objection turns on transitivity: identity is
 * transitive, and a memory relation that skips links is not.
 */
export default function MemoryChain(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Reid’s case against the memory criterion — a conceptual diagram of an objection"
      flow
      items={[
        {
          id: 'boy',
          label: 'A boy is flogged for stealing fruit',
          colour: C.warm,
          detail:
            'Thomas Reid\u2019s example, aimed at Locke. Set out as three stages in one life, with a memory link between each stage and the next.',
        },
        {
          id: 'officer',
          label: 'A young officer remembers being that boy',
          colour: C.water,
          detail:
            'By the memory criterion, the officer is the boy: consciousness reaches back and connects them.',
        },
        {
          id: 'general',
          label: 'An old general remembers being that officer',
          colour: C.life,
          detail: 'By the same criterion, the general is the officer. So far so good.',
        },
        {
          id: 'break',
          label: 'The general has no memory of the boy',
          colour: C.hot,
          tag: 'the problem',
          detail:
            'Now the criterion says the general is the officer, the officer is the boy, and the general is not the boy. Identity cannot work that way: if A is B and B is C, A is C.',
        },
        {
          id: 'repair',
          label: 'Repair: chains of overlapping links',
          colour: C.deep,
          detail:
            'The standard fix replaces direct memory with a chain of overlapping connections, which restores transitivity. It rescues the theory from Reid — and it is precisely this chain that Parfit\u2019s cases go on to stretch until it breaks in a different way.',
        },
      ]}
    />
  );
}
