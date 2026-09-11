import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * The parts of Plato's allegory, separated from its conclusion.
 *
 * The allegory is usually retold as a story and absorbed as a moral. Taking it
 * apart into its elements lets a reader see which parts are the image and which
 * part is the argument — and that the argument is contestable.
 */
export default function PlatosCave(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="The elements of the allegory — a conceptual diagram of an image, not a map of a place"
      items={[
        {
          id: 'prisoners',
          label: 'Prisoners who have never faced anything else',
          colour: C.dim,
          detail:
            'They are not deceived by anyone. Nobody lied to them. They simply have had no opportunity to see anything but the wall, and so they have no reason to suspect the wall is not everything.',
        },
        {
          id: 'shadows',
          label: 'Shadows they take for the things themselves',
          colour: C.faint,
          detail:
            'The shadows are real shadows. The error is not in seeing them but in the unexamined assumption that seeing them is seeing everything there is.',
        },
        {
          id: 'fire',
          label: 'A fire, and objects carried before it',
          colour: C.warm,
          detail:
            'There is a mechanism producing the appearances. In the allegory it is visible once you turn around; the philosophical question is whether our own mechanism is the kind of thing we could turn around and look at.',
        },
        {
          id: 'ascent',
          label: 'One prisoner is released and climbs out',
          colour: C.life,
          detail:
            'Plato treats the ascent as painful and slow rather than as a revelation. That detail matters: the claim is not that truth is obvious once pointed at, but that adjusting to it takes work.',
        },
        {
          id: 'return',
          label: 'They return, and are not believed',
          colour: C.hot,
          detail:
            'The returning prisoner is worse at the shadow-game than those who stayed. Plato uses this to explain why the philosopher looks useless. A reader can accept the whole image and still ask how anyone tells a genuine returner from someone merely bad at the shadows.',
        },
        {
          id: 'conclusion',
          label: 'The claim: there is a reality behind appearances',
          colour: C.deep,
          tag: 'the argument',
          detail:
            'This is the part to examine rather than absorb. The image makes the claim vivid; it does not establish it. And Plato\u2019s own answer — that the reality is a realm of unchanging Forms — is a further claim again, which many who find the cave compelling do not accept.',
        },
      ]}
    />
  );
}
