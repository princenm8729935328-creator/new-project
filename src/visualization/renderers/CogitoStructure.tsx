import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Compare } from './philKit';

/**
 * What the cogito is usually taken to establish, against what it arguably does.
 *
 * The two columns are not "right" and "wrong". The left is the ordinary
 * reading; the right is the reading its critics defend. Both are live.
 */
export default function CogitoStructure(_props: VisualizationProps): ReactNode {
  return (
    <Compare
      label="A conceptual comparison of two readings of one argument"
      leftTitle="The usual reading"
      rightTitle="What critics say it shows"
      rows={[
        {
          id: 'exist',
          left: 'I exist',
          right: 'Thinking is occurring',
          detail:
            'Lichtenberg\u2019s objection: from the fact that thinking is happening, the step to an "I" that does it smuggles in a thinker. Compare "it is raining" — the grammar needs a subject; the weather does not supply one.',
        },
        {
          id: 'persist',
          left: 'I am a thing that persists',
          right: 'This moment of thinking is occurring',
          detail:
            'Even granting a subject, the argument runs at an instant. It does not obviously reach the self that was here yesterday, which is exactly what the next topic has to supply separately.',
        },
        {
          id: 'nature',
          left: 'I am essentially a thinking thing',
          right: 'Whatever is thinking is thinking',
          detail:
            'Descartes goes on to conclude that mind is a distinct substance from body. That conclusion is a further argument, and most philosophers today reject it while still granting that doubt cannot reach the doubting.',
        },
        {
          id: 'value',
          left: 'A foundation for all knowledge',
          right: 'A very small, very secure floor',
          detail:
            'What is not in dispute is that the argument is genuinely hard to evade. The dispute is over how much can be built on something this thin — and Descartes needed a great deal more to get the world back.',
        },
      ]}
    />
  );
}
