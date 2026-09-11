import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Three frameworks applied to a single ordinary case.
 *
 * Comparing them on one case rather than describing them in the abstract is the
 * point: it shows that they are not three vocabularies for the same verdict,
 * and it shows where the disagreement actually falls.
 */
export default function MoralTheoryLenses(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="One case, three frameworks — a conceptual comparison, not a ranking"
      items={[
        {
          id: 'case',
          label: 'The case: a lie that spares someone real distress',
          colour: C.dim,
          tag: 'setup',
          detail:
            'A friend asks whether you saw them humiliate themselves at a party. They did. Telling them will hurt and change nothing they can act on.',
        },
        {
          id: 'consequences',
          label: 'Consequences: what does the lie produce?',
          colour: C.water,
          detail:
            'Weigh the distress avoided against the risk of discovery and the erosion of trust. Note that the verdict depends on empirical guesses you cannot check — a standing difficulty for the whole family.',
        },
        {
          id: 'duty',
          label: 'Duty: could this be a rule for everyone?',
          colour: C.warm,
          detail:
            'A world in which everyone lies when it seems kind is a world in which reassurance carries no information. Kant\u2019s test asks whether the rule survives being universal, and this one arguably does not.',
        },
        {
          id: 'character',
          label: 'Character: what does lying here make you?',
          colour: C.life,
          detail:
            'The question is not the act but the habit. Someone who manages other people\u2019s feelings by editing the truth becomes a particular kind of friend, and the friend may not want that.',
        },
        {
          id: 'divergence',
          label: 'Where they actually diverge',
          colour: C.deep,
          detail:
            'All three can land on the same verdict in easy cases. They come apart when outcomes are excellent and the rule is bad, or when the act is permissible and the disposition it expresses is not. That is where the choice of framework does work.',
        },
      ]}
    />
  );
}
