import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * The knowledge argument, and the four standard ways of resisting it.
 *
 * Jackson himself later abandoned the conclusion, which is worth the reader
 * knowing: it is a rare and clean example of a philosopher publishing against
 * their own famous argument.
 */
export default function MarysRoom(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="The thought experiment and its replies — a conceptual model, not a study"
      flow
      items={[
        {
          id: 'setup',
          label: 'Mary knows every physical fact about colour vision',
          colour: C.dim,
          detail:
            'Wavelengths, receptors, neural pathways, the lot — learned from inside a room where everything is black and white. The stipulation is idealised on purpose.',
        },
        {
          id: 'release',
          label: 'She leaves the room and sees a red tomato',
          colour: C.hot,
          detail: 'The question is simple: does she learn anything?',
        },
        {
          id: 'argument',
          label: 'If she learns something, physical facts were not all the facts',
          colour: C.warm,
          tag: 'the argument',
          detail:
            'She had every physical fact. If something was still to be learned, that something was not a physical fact — which would make physicalism incomplete.',
        },
        {
          id: 'ability',
          label: 'Reply: she gains an ability, not a fact',
          colour: C.water,
          detail:
            'On this reading she acquires the capacity to recognise, imagine and remember red — know-how rather than know-that. Critics say this understates what it is like to see a colour for the first time.',
        },
        {
          id: 'acquaintance',
          label: 'Reply: she learns an old fact in a new way',
          colour: C.life,
          detail:
            'Same fact, new mode of presentation — as someone might know that a person is the author of a book and be surprised on meeting them. The dispute is whether a mode of presentation is itself something physical facts cover.',
        },
        {
          id: 'denial',
          label: 'Reply: she learns nothing',
          colour: C.deep,
          detail:
            'Dennett argues the intuition comes from nobody actually imagining what knowing *every* physical fact would be. Note also that Jackson, who devised the argument, later came to reject its conclusion.',
        },
      ]}
    />
  );
}
