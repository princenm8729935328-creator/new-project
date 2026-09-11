import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Inputs into a person that the person did not select.
 *
 * The figure is deliberately a list and not a pie chart. Assigning percentages
 * would imply a measurement nobody has made, and the philosophical point does
 * not need one: it needs only that each item is real and that none of them was
 * chosen.
 */
export default function SourcesOfASelf(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Inputs nobody selects for themselves — a conceptual list, not a measured breakdown"
      items={[
        {
          id: 'genes',
          label: 'A genome, inherited entire',
          colour: C.life,
          detail:
            'Temperament, sensitivity to stress, how easily you are bored — all have some heritable component. You were handed the whole set before you existed to have a view about it.',
        },
        {
          id: 'century',
          label: 'The century you were born into',
          colour: C.deep,
          detail:
            'Which questions are live, which are unthinkable, what counts as obvious — these differ enormously across four hundred years, and nobody picks their four hundred.',
        },
        {
          id: 'place',
          label: 'The place, the language, the religion around you',
          colour: C.water,
          detail:
            'Most people hold approximately the beliefs of the place they were raised. That correlation is not by itself an argument against those beliefs, but it is a fact about how they arrived.',
        },
        {
          id: 'family',
          label: 'The people who raised you, and how',
          colour: C.warm,
          detail:
            'Attachment, security, whether disagreement was safe, what was praised. This shapes not only what you believe but how you hold beliefs.',
        },
        {
          id: 'chance',
          label: 'Accidents: a teacher, an illness, a book',
          colour: C.hot,
          detail:
            'Small contingencies with large effects. Ask anyone what set them on their path and you usually get a chance encounter rather than a decision.',
        },
        {
          id: 'later',
          label: 'And then: what you did with all of it',
          colour: C.rock,
          tag: 'not settled',
          detail:
            'This last row is the contested one. Everything above is uncontroversial; whether anything is left over that counts as yours is the question the rest of this movement works on. The figure does not answer it.',
        },
      ]}
    />
  );
}
