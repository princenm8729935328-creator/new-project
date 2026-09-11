import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { PositionMap, C } from './philKit';

/**
 * Positions on consciousness, plotted rather than ranked.
 *
 * None of these is marked as correct, because none of them is established. The
 * axes are chosen so that the map shows why the positions are the ones that
 * exist: they are the available answers to two questions.
 */
export default function ConsciousnessPositions(_props: VisualizationProps): ReactNode {
  return (
    <PositionMap
      label="Positions on consciousness — a conceptual map of options, not a ranking"
      xLow="everything is physical"
      xHigh="something beyond the physical"
      yLow="the hard problem is a confusion"
      yHigh="the hard problem is real"
      points={[
        {
          id: 'reductive',
          label: 'Reductive physicalism',
          x: 0.08,
          y: 0.24,
          colour: C.water,
          detail:
            'Experience is a physical process and will be explained as neuroscience matures, much as life was explained without a vital force. Its critics say the analogy is the argument, and the analogy is exactly what is in question.',
        },
        {
          id: 'illusionism',
          label: 'Illusionism',
          x: 0.06,
          y: 0.06,
          colour: C.rock,
          detail:
            'The stronger deflationary line: we are systematically wrong about what our own states are like, and the hard problem is an artefact of that error. It is not the claim that nobody feels anything.',
        },
        {
          id: 'mysterianism',
          label: 'Mysterianism',
          x: 0.3,
          y: 0.92,
          colour: C.warm,
          detail:
            'The problem is real and our minds are the wrong shape to solve it, as a dog is the wrong shape for arithmetic. Honest, and unsatisfying, and not obviously false.',
        },
        {
          id: 'property-dualism',
          label: 'Property dualism',
          x: 0.8,
          y: 0.9,
          colour: C.hot,
          detail:
            'One kind of stuff, two kinds of property: physical processes have experiential properties not entailed by the physical description. Its difficulty is explaining how those properties make any difference.',
        },
        {
          id: 'panpsychism',
          label: 'Panpsychism',
          x: 0.62,
          y: 0.8,
          colour: C.deep,
          detail:
            'Experience is basic rather than emergent, so it never has to appear from nothing. Its combination problem — how tiny experiences add up to yours — is as hard as the problem it was meant to avoid.',
        },
        {
          id: 'iit',
          label: 'Formal theories',
          x: 0.34,
          y: 0.54,
          colour: C.life,
          detail:
            'Approaches like integrated information theory and global workspace theory try to say which systems are conscious and why. They are live research programmes, they disagree with each other, and they are actively contested — including over whether they address the hard problem or one of the easy ones.',
        },
      ]}
    />
  );
}
