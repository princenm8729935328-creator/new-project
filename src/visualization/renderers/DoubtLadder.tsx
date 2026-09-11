import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Descartes's doubt taken one stage at a time.
 *
 * Each stage removes a larger class of belief than the last, and the point of
 * drawing it as a descent is that the method is cumulative: the later doubts do
 * not replace the earlier ones, they include them.
 */
export default function DoubtLadder(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Each stage removes more than the last — a conceptual diagram of an argument"
      flow
      items={[
        {
          id: 'senses',
          label: 'The senses sometimes mislead',
          colour: C.water,
          detail:
            'A stick in water looks bent; a distant tower looks round. This alone removes little, because a sense that fails in unusual conditions can still be trusted in ordinary ones.',
        },
        {
          id: 'dream',
          label: 'Nothing marks waking off from dreaming',
          colour: C.warm,
          detail:
            'Now the ordinary conditions go too. Descartes asks for a feature that could tell you which state you are in from the inside, and finds none. Notice that this is a demand for a criterion, not an assertion that you are dreaming.',
        },
        {
          id: 'deceiver',
          label: 'Even reasoning could be interfered with',
          colour: C.hot,
          detail:
            'The deceiver stage reaches what the dream stage cannot: arithmetic, logic, the sense that a step follows. This is the deepest cut, and it is deliberately extravagant — the point is to find the floor, not to claim there is a demon.',
        },
        {
          id: 'survivor',
          label: 'Something is doing the doubting',
          colour: C.life,
          detail:
            'Whatever is deceived must exist to be deceived. Descartes takes this to be the one thing the method cannot reach, and builds outward from it.',
        },
        {
          id: 'objection',
          label: 'But how much does that survivor amount to?',
          colour: C.deep,
          tag: 'objection',
          detail:
            'Critics from Lichtenberg onward have argued that what survives is at most that thinking is occurring — not that there is an enduring "I" who owns it. The next movement takes that objection seriously rather than settling it here.',
        },
      ]}
    />
  );
}
