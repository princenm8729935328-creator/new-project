import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Kant's test run once, including the step people usually skip.
 *
 * The test is routinely misreported as "what if everyone did that?" — a
 * consequence question. The figure separates the contradiction test from the
 * consequence test, because the difference is the whole of Kant's point.
 */
export default function UniversalizabilityTest(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="The test applied to one maxim — a conceptual model of a procedure"
      flow
      items={[
        {
          id: 'maxim',
          label: 'State what you would actually be doing',
          colour: C.dim,
          detail:
            'Not "borrow money" but "make a promise I know I cannot keep, in order to get money". The description has to include the part you would rather leave out.',
        },
        {
          id: 'universal',
          label: 'Imagine it as a rule everyone follows',
          colour: C.water,
          detail:
            'Not "what if lots of people did it" but: this is simply how people behave, always, and everyone knows it.',
        },
        {
          id: 'contradiction',
          label: 'Ask whether the act would still be possible',
          colour: C.warm,
          tag: 'the real test',
          detail:
            'In that world, a promise of repayment conveys nothing, so nobody lends on one. The act you were proposing could not be performed. It defeats itself — which is different from merely having bad results.',
        },
        {
          id: 'verdict',
          label: 'If it defeats itself, the maxim is impermissible',
          colour: C.life,
          detail:
            'Kant\u2019s claim is that you have been making an exception of yourself: relying on a practice while acting in a way that could not sustain it.',
        },
        {
          id: 'objection',
          label: 'Objection: description does the work',
          colour: C.deep,
          tag: 'objection',
          detail:
            'Nearly any act passes under a narrow enough description and fails under a broad one, and Kant gives no procedure for fixing the description. Defenders reply that the humanity formulation is less vulnerable to this. The objection has not gone away.',
        },
      ]}
    />
  );
}
