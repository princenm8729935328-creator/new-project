import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Compare } from './philKit';

/**
 * The gap, with the dashed line drawn where the inference is supposed to cross.
 *
 * The last row is essential: the figure must not leave a reader believing that
 * facts are irrelevant to morality, which is the usual overcorrection.
 */
export default function IsOughtGap(_props: VisualizationProps): ReactNode {
  return (
    <Compare
      label="Where the inference is supposed to cross — a conceptual diagram"
      leftTitle="What is the case"
      rightTitle="What ought to be done"
      gap
      rows={[
        {
          id: 'pain',
          left: 'This causes intense suffering',
          right: 'Therefore do not do it',
          detail:
            'The premise is a fact about effects. The conclusion adds that suffering counts against an action. That addition is doing real work, however obvious it seems.',
        },
        {
          id: 'natural',
          left: 'Humans evolved to behave this way',
          right: 'Therefore it is right',
          detail:
            'Here the gap is easy to see, because the same argument would license a great deal nobody wants to license. Evolution explains why we have certain impulses; it does not rank them.',
        },
        {
          id: 'majority',
          left: 'Most societies have permitted it',
          right: 'Therefore it is permissible',
          detail:
            'Widespread practice is a fact about practice. Slavery was near-universal for most of recorded history, which settles nothing about whether it was wrong.',
        },
        {
          id: 'bridge',
          left: 'Suffering is bad',
          right: 'This is itself an ought',
          detail:
            'Any argument that crosses needs a premise like this one, and that premise is not a fact about the world in the same sense as the others. Hume\u2019s observation is that the premise usually goes unstated.',
        },
        {
          id: 'notirrelevant',
          left: 'So facts do not matter?',
          right: 'They matter enormously',
          detail:
            'This is the overcorrection to avoid. Facts decide almost every real moral question once a value is in place: whether a policy reduces harm, whether a being can suffer, what a punishment actually does. The gap concerns where the values come from, not whether evidence is relevant.',
        },
      ]}
    />
  );
}
