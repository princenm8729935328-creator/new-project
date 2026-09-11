import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Readings of "why am I this person?", sorted by what kind of answer each
 * would take.
 *
 * Some questions dissolve under analysis and some do not, and which this one is
 * happens to be disputed. The figure lays out the readings without picking.
 */
export default function ThisPersonQuestion(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Readings of one question — a conceptual analysis, not an answer"
      items={[
        {
          id: 'causal',
          label: 'How did this person come to exist?',
          colour: C.life,
          detail:
            'A biological and historical question with a real answer: a particular pairing, a particular cell, a particular upbringing. Complete, and it seems to leave the original question untouched.',
        },
        {
          id: 'trivial',
          label: 'Why is this person this person?',
          colour: C.dim,
          detail:
            'On one reading the question is empty — like asking why this chair is this chair. If you just *are* this person, there was never an alternative for you to have been assigned differently.',
        },
        {
          id: 'lottery',
          label: 'Why did I get this one out of all of them?',
          colour: C.warm,
          tag: 'the tempting one',
          detail:
            'The reading that feels most natural and is hardest to defend. It pictures a self waiting to be allocated a life — but there was no such self, since the self in question is constituted by the life.',
        },
        {
          id: 'indexical',
          label: 'Why is this one the one experienced from inside?',
          colour: C.hot,
          detail:
            'The residue after the trivial reading is removed. Every person is an "I" to themselves, and it is unclear whether the fact that this one is the one you are amounts to a further fact at all.',
        },
        {
          id: 'live',
          label: 'Is there a real question here?',
          colour: C.deep,
          tag: 'open',
          detail:
            'Some philosophers hold that the whole thing dissolves once the indexical is handled properly. Others take the residue seriously and connect it to the hard problem. Nothing here is settled, and the feeling of puzzlement is not by itself evidence either way.',
        },
      ]}
    />
  );
}
