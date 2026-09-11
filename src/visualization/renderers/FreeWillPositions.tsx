import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { PositionMap, C } from './philKit';

/**
 * The main positions plotted against the two questions that generate them.
 *
 * Plotting rather than listing makes the logical structure visible: the
 * positions are not five opinions on one scale, they are the cells of a grid
 * formed by two independent questions.
 */
export default function FreeWillPositions(_props: VisualizationProps): ReactNode {
  return (
    <PositionMap
      label="Positions on free will — a conceptual map, not a survey of what people believe"
      xLow="free will needs indeterminism"
      xHigh="free will is compatible with determinism"
      yLow="we do not have free will"
      yHigh="we do have free will"
      points={[
        {
          id: 'hard-det',
          label: 'Hard determinism',
          x: 0.14,
          y: 0.12,
          colour: C.hot,
          detail:
            'Determinism is true, free will requires indeterminism, so there is no free will. The classical incompatibilist conclusion, held by fewer philosophers today than its hard-incompatibilist cousin.',
        },
        {
          id: 'libertarian',
          label: 'Libertarianism',
          x: 0.14,
          y: 0.88,
          colour: C.life,
          detail:
            'Free will requires genuinely open futures, and we have it — so determinism is false in the relevant respect. Its hardest task is explaining how an undetermined event is any more mine than a determined one.',
        },
        {
          id: 'compatibilism',
          label: 'Compatibilism',
          x: 0.86,
          y: 0.86,
          colour: C.water,
          detail:
            'Free will is a matter of acting on one\u2019s own reasons without compulsion, which determinism does not disturb. The most widely held position among professional philosophers, and often accused of changing the subject.',
        },
        {
          id: 'hard-incomp',
          label: 'Hard incompatibilism',
          x: 0.32,
          y: 0.06,
          colour: C.warm,
          detail:
            'We lack free will whether or not determinism holds, because indeterminism only adds chance. This is the position the Basic Argument pushes towards.',
        },
        {
          id: 'revisionism',
          label: 'Revisionism',
          x: 0.66,
          y: 0.5,
          colour: C.deep,
          detail:
            'Our ordinary concept may be incoherent, but a repaired one worth keeping can be built. It sits in the middle because it accepts part of each side.',
        },
        {
          id: 'illusionism',
          label: 'It is a useful illusion',
          x: 0.5,
          y: 0.2,
          colour: C.rock,
          detail:
            'Some argue we lack free will but should not say so loudly, because the belief does work. Others reply that a position you would not state publicly is a poor one to hold privately.',
        },
      ]}
    />
  );
}
