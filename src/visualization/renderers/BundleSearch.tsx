import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Hume's report on looking inward, and what to make of the report.
 *
 * The last two panels matter as much as the first four: an introspective
 * failure to find something is evidence of a particular kind, and the figure
 * says what kind rather than treating it as a proof.
 */
export default function BundleSearch(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Looking inward for a self — a conceptual model of an introspective argument"
      items={[
        {
          id: 'heat',
          label: 'A sensation of warmth or cold',
          colour: C.hot,
          detail: 'Found. But it is a perception, not the thing having it.',
        },
        {
          id: 'light',
          label: 'A patch of light or shade',
          colour: C.warm,
          detail: 'Found. Again a perception, and again not an owner of perceptions.',
        },
        {
          id: 'feeling',
          label: 'A pleasure, a pain, a mood',
          colour: C.water,
          detail:
            'Found, and gone again. Hume notes that these never hold still long enough to be the constant self he was told to look for.',
        },
        {
          id: 'self',
          label: 'The self that has all of these',
          colour: C.dim,
          tag: 'not found',
          detail:
            'Hume reports that he can never catch himself without a perception, and never catches anything but the perception. This is the observation the bundle theory is built on.',
        },
        {
          id: 'reading',
          label: 'What the failure does show',
          colour: C.life,
          detail:
            'That the self is not an object of inner observation alongside the others. That much is hard to dispute once you have tried the exercise.',
        },
        {
          id: 'limit',
          label: 'What it does not show',
          colour: C.deep,
          tag: 'objection',
          detail:
            'Kant\u2019s reply, in effect: a subject of experience would not be another item in experience. Failing to see the eye that is seeing is not evidence that there is no eye. Hume himself later expressed dissatisfaction with his own account.',
        },
      ]}
    />
  );
}
