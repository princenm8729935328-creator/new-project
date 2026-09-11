import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * What compatibilists say freedom actually consists in, and the case that has
 * given them the most trouble.
 *
 * The manipulation panel is not an afterthought. It is the objection the view
 * has to answer, and leaving it out would make the position look easier than
 * it is.
 */
export default function CompatibilistConditions(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Proposed conditions on a free action — a conceptual model of a position"
      items={[
        {
          id: 'external',
          label: 'Not physically forced or coerced',
          colour: C.water,
          detail:
            'The oldest condition, and the one nobody disputes. A pushed hand and a signature at gunpoint are not free acts on any account.',
        },
        {
          id: 'internal',
          label: 'Not compelled from inside',
          colour: C.warm,
          detail:
            'Addiction, phobia, delusion. These are interesting because the person may fully want to act and still not be free — which shows freedom is not simply doing what you want.',
        },
        {
          id: 'hierarchy',
          label: 'The will you act on is one you endorse',
          colour: C.hot,
          detail:
            'Frankfurt\u2019s condition: the addict who wishes they did not want the drug is unfree in a way the addict who is content is not, even with identical behaviour.',
        },
        {
          id: 'reasons',
          label: 'Responsive to reasons, had there been any',
          colour: C.life,
          detail:
            'The condition doing most of the work in contemporary versions: the mechanism you acted on would have registered a good enough reason to act otherwise, even if no such reason arose.',
        },
        {
          id: 'manipulation',
          label: 'But what if all of that was installed?',
          colour: C.deep,
          tag: 'objection',
          detail:
            'Imagine a person engineered before birth to have exactly these endorsements. They meet every condition, yet look unfree. Compatibilists divide between denying the intuition and adding a history condition; incompatibilists say this shows how the conditions were always going to fall short.',
        },
      ]}
    />
  );
}
