import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Compare } from './philKit';

/**
 * What observation delivers, set beside what the conclusion asserts.
 *
 * The dashed break between the columns is the whole figure: every row is a case
 * where the right-hand side says something the left-hand side does not contain,
 * and the reader is being asked to notice the addition rather than accept it.
 */
export default function InductionGap(_props: VisualizationProps): ReactNode {
  return (
    <Compare
      label="A conceptual comparison — what is observed against what is concluded"
      leftTitle="What has been observed"
      rightTitle="What is concluded"
      gap
      rows={[
        {
          id: 'sunrise',
          left: 'The sun has risen on every recorded morning',
          right: 'The sun will rise tomorrow',
          detail:
            'The record is about mornings that have happened. The conclusion is about one that has not. Nothing in the record is about tomorrow, so something else must be carrying the inference.',
        },
        {
          id: 'bread',
          left: 'Bread has nourished everyone who has eaten it',
          right: 'Bread will nourish the next person',
          detail:
            'Hume\u2019s own example. He grants that we all make this inference and that we cannot help it. His question is what justifies it, not whether we do it.',
        },
        {
          id: 'laws',
          left: 'Measurements have matched a law wherever tested',
          right: 'The law holds where nobody has tested',
          detail:
            'Science lives on this step. Pointing at the gap is not an attack on science; it is a question about what kind of support the step has.',
        },
        {
          id: 'uniformity',
          left: 'Nature has been uniform so far',
          right: 'Nature will go on being uniform',
          detail:
            'This is the assumption that would close the gap — and it is itself an inference from past cases to future ones, which is the move being justified. That circle is the sharpest form of the problem.',
        },
      ]}
    />
  );
}
