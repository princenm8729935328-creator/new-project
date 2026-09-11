import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * The dilemma libertarian free will has to escape.
 *
 * Drawn as a flow because it is a pincer: each step closes one exit, and the
 * last two panels are the exits that are actually being defended rather than a
 * verdict that there are none.
 */
export default function RandomnessProblem(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="The luck objection, step by step — a conceptual model of an argument"
      flow
      items={[
        {
          id: 'determined',
          label: 'If my choice was fully determined\u2026',
          colour: C.water,
          detail:
            'Then it traces back through causes to things before my birth. The incompatibilist says that is not control; the compatibilist says it can be.',
        },
        {
          id: 'undetermined',
          label: 'If it was not fully determined\u2026',
          colour: C.warm,
          detail:
            'Then at the moment of choosing, the same person in the same state could have gone either way. Something was left open by everything about me.',
        },
        {
          id: 'luck',
          label: 'Then what settled it was not me either',
          colour: C.hot,
          tag: 'the pincer',
          detail:
            'An event that nothing about me settled looks like chance, and chance is not authorship. A coin flip inside the decision does not make the decision more mine.',
        },
        {
          id: 'kane',
          label: 'Reply: indeterminism at the right place',
          colour: C.life,
          detail:
            'Robert Kane argues that in rare self-forming actions a person genuinely wants both options, so whichever way it resolves, it resolves into something they willed. Critics reply that this relocates the luck rather than removing it.',
        },
        {
          id: 'agent',
          label: 'Reply: the agent is itself a cause',
          colour: C.deep,
          detail:
            'Agent-causal views hold that a person can cause an action without that causing being a further event in the chain. The standing objection is that this is stated rather than explained — it names what is wanted without saying how it works.',
        },
      ]}
    />
  );
}
