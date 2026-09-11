import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * The five aggregates, each put to the same test.
 *
 * The structure of the early Buddhist argument is repetitive on purpose: one
 * test, applied five times, with the same result each time. Drawing it as a
 * list preserves that structure, and the final panel states plainly what the
 * conclusion is not.
 */
export default function AnattaAggregates(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="The test applied to each aggregate in turn — a conceptual model of an argument"
      items={[
        {
          id: 'form',
          label: 'Form — the body',
          colour: C.rock,
          detail:
            'It changes without consent and breaks down. The discourse asks: if this were truly yours, could you simply say "let my body be thus" and have it be so?',
        },
        {
          id: 'feeling',
          label: 'Feeling — pleasant, unpleasant, neutral',
          colour: C.warm,
          detail:
            'Feelings arise unbidden and pass. Nobody has ever managed to feel only what they chose to feel.',
        },
        {
          id: 'perception',
          label: 'Perception — recognising and labelling',
          colour: C.water,
          detail:
            'What you notice and how you categorise it is largely already done by the time you are aware of it.',
        },
        {
          id: 'formations',
          label: 'Formations — dispositions, intentions, habits',
          colour: C.hot,
          detail:
            'The closest candidate, because this is where willing seems to live. The argument applies the same test: these too arose from conditions and change without permission.',
        },
        {
          id: 'consciousness',
          label: 'Consciousness — awareness of each of the above',
          colour: C.life,
          detail:
            'Awareness is always awareness of something, arising and ceasing with its object. It does not stand apart as a constant witness that owns the rest.',
        },
        {
          id: 'not',
          label: 'The conclusion is not that nothing exists',
          colour: C.deep,
          tag: 'careful',
          detail:
            'Early Buddhist texts reject annihilationism explicitly, and treat it as an error on a par with belief in a permanent self. The claim is that no permanent, independent, controlling self is found among the parts — not that there are no persons, no experience, and no consequences of action.',
        },
      ]}
    />
  );
}
