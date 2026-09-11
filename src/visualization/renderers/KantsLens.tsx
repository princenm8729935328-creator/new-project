import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Kant's reversal, drawn as a sequence rather than asserted as a result.
 *
 * The last panel is the one that keeps the figure honest: what the lens
 * metaphor cannot do is let you compare the view through it with a view from
 * nowhere, and that limitation is Kant's point, not a flaw in the drawing.
 */
export default function KantsLens(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Kant’s proposal as a sequence — a conceptual model of a philosophical claim"
      flow
      items={[
        {
          id: 'problem',
          label: 'The problem inherited from Hume',
          colour: C.dim,
          detail:
            'Experience alone cannot deliver necessity. Yet some claims — that every event has a cause, that objects are in space — seem to hold necessarily rather than as a summary of what has happened so far.',
        },
        {
          id: 'reversal',
          label: 'Reverse the question',
          colour: C.warm,
          detail:
            'Rather than asking how the mind conforms to objects, Kant asks what objects must be like in order to be experienced by a mind like ours at all. This is the move he compared to Copernicus.',
        },
        {
          id: 'forms',
          label: 'Space and time as conditions of experiencing',
          colour: C.water,
          detail:
            'On Kant\u2019s account these are not features we find in the world but the form any experience of ours has to take — which would explain why claims about them feel necessary.',
        },
        {
          id: 'result',
          label: 'We know appearances, not things in themselves',
          colour: C.life,
          detail:
            'The result is a boundary rather than a scepticism: within experience, knowledge is secure; beyond it, the question is not one our concepts are equipped to ask.',
        },
        {
          id: 'objection',
          label: 'What is a thing in itself, then?',
          colour: C.deep,
          tag: 'objection',
          detail:
            'The standing objection, raised in Kant\u2019s own lifetime: if we cannot reach things in themselves, the notion seems to do no work, and saying they cause our experience already applies a category Kant restricted to appearances. How to read the distinction is still contested among Kant scholars.',
        },
      ]}
    />
  );
}
