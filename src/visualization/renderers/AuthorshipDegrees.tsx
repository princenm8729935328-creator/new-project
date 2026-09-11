import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Spectrum, C } from './philKit';

/**
 * Degrees of ownership over a belief, as a range rather than a switch.
 *
 * Framing authorship as all-or-nothing is what makes the conditioning movement
 * end in despair. Framing it as a range does not prove that the far end is
 * reachable — it makes the question answerable in degrees, which is the honest
 * shape of it.
 */
export default function AuthorshipDegrees(_props: VisualizationProps): ReactNode {
  return (
    <Spectrum
      label="Ways of holding a belief — a conceptual range, not a scale anyone measures"
      leftEnd="absorbed"
      rightEnd="worked on"
      marks={[
        {
          id: 'absorbed',
          at: 0.04,
          label: 'Never noticed',
          colour: C.dim,
          detail:
            'The belief has never been put into words, let alone examined. Most of what anyone believes is here, and being here is not a failing — no one could examine everything.',
        },
        {
          id: 'stated',
          at: 0.28,
          label: 'Stated but untested',
          colour: C.water,
          detail:
            'You can say what you think. You have not encountered the strongest case against it, and would not be able to state that case if asked.',
        },
        {
          id: 'defended',
          at: 0.52,
          label: 'Defended against objections',
          colour: C.warm,
          detail:
            'You have met counterarguments and have replies. This is where most people stop — and it is compatible with having only ever met weak versions of the objection.',
        },
        {
          id: 'steelman',
          at: 0.76,
          label: 'Best opposing case understood',
          colour: C.hot,
          detail:
            'You can state the opposing view in a form its holders would recognise as fair. This is demanding, and it is the step that most often changes a belief.',
        },
        {
          id: 'revised',
          at: 0.96,
          label: 'Revised under pressure',
          colour: C.life,
          detail:
            'The belief has actually moved in response to an argument at least once. Whether this amounts to authorship, or only to a longer causal chain ending in the same place, is the question the next topic takes up.',
        },
      ]}
    />
  );
}
