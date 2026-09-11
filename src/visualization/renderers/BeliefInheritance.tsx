import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Compare } from './philKit';

/**
 * A belief set beside a plausible account of how it arrived.
 *
 * The right column is not a debunking. A belief can be both inherited and
 * correct. The figure exists to separate two questions people run together:
 * where a belief came from, and whether it is true.
 */
export default function BeliefInheritance(_props: VisualizationProps): ReactNode {
  return (
    <Compare
      label="A conceptual comparison — two different questions about one belief"
      leftTitle="Something you believe"
      rightTitle="How it plausibly arrived"
      rows={[
        {
          id: 'food',
          left: 'Certain foods are disgusting',
          right: 'Nobody around you ate them',
          detail:
            'The easiest case, because almost nobody defends their food disgust as reasoned. It establishes that at least some strong convictions are straightforwardly inherited.',
        },
        {
          id: 'politics',
          left: 'A particular politics is obviously right',
          right: 'It was the air in the house',
          detail:
            'Harder, because it feels reasoned. Note that the feeling of having reasoned is present either way — which is exactly why it cannot settle the question.',
        },
        {
          id: 'religion',
          left: 'A particular religious framework is true',
          right: 'It was the one you were born inside',
          detail:
            'The distribution of religious belief follows the map of birthplaces closely. This is a fact about distribution. It does not show any particular framework false, and treating it as though it did is a mistake in the other direction.',
        },
        {
          id: 'norms',
          left: 'Some ways of living are simply wrong',
          right: 'The consensus shifted within living memory',
          detail:
            'Several convictions that felt self-evident to a previous generation are now thought monstrous, and vice versa. The unsettling part is that it felt self-evident to them in the same way yours feels to you.',
        },
        {
          id: 'gap',
          left: 'Therefore the belief is false',
          right: 'This does not follow',
          detail:
            'Arriving at a belief by inheritance is compatible with the belief being true — you inherited your first language too, and your sentences in it are not thereby false. The genetic fallacy is treating the origin as the verdict.',
        },
      ]}
    />
  );
}
