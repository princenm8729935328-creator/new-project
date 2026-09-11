import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * The inference everyone makes, laid out so its weakest step is visible.
 *
 * The conclusion is not that other minds are doubtful. It is that a belief
 * nobody seriously doubts rests on a step that is hard to justify — which is
 * interesting precisely because the belief is not in question.
 */
export default function OtherMindsInference(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="The step from behaviour to inner life — a conceptual model of an inference"
      flow
      items={[
        {
          id: 'own',
          label: 'In my case, this feeling goes with this behaviour',
          colour: C.life,
          detail:
            'The one case where both sides are available to me. Pain, and wincing. Fear, and flinching.',
        },
        {
          id: 'others',
          label: 'Others behave the same way',
          colour: C.water,
          detail: 'Observable, and not in dispute.',
        },
        {
          id: 'infer',
          label: 'So they feel the same way too',
          colour: C.warm,
          tag: 'the weak step',
          detail:
            'This is an inductive generalisation from exactly one confirmed instance — your own. In any other domain that sample would be considered fatally small.',
        },
        {
          id: 'better',
          label: 'Reply: it is an inference to the best explanation',
          colour: C.hot,
          detail:
            'Not a generalisation from one case, but the hypothesis that best explains everything others do — including what they say about themselves and how their reports change under anaesthesia or injury. Most philosophers find something in this vicinity adequate.',
        },
        {
          id: 'bite',
          label: 'Where it still bites',
          colour: C.deep,
          detail:
            'The problem stops being academic as soon as the case is unlike you: an octopus, a person with total locked-in syndrome, an insect, a system that produces fluent reports about its own states. There the inference has no agreed footing, and nothing currently settles it.',
        },
      ]}
    />
  );
}
