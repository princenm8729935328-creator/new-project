import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * The distance between an object and the experience of it.
 *
 * Drawn as a chain because that is the shape of the worry: each link is a
 * transformation, and every transformation is a place where what arrives could
 * differ from what set out. The figure asserts nothing about whether the
 * transformations distort — it only makes visible that they are there.
 */
export default function AppearanceAndReality(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="From a thing to an experience of it — a conceptual chain, not a measurement"
      flow
      items={[
        {
          id: 'thing',
          label: 'Something is there',
          colour: C.dim,
          detail:
            'Whatever is there is there independently of you looking. This is the step almost everyone takes for granted, and it is also the step that the rest of the chain never directly reaches.',
        },
        {
          id: 'carrier',
          label: 'A narrow band of light leaves it',
          colour: C.water,
          detail:
            'Only a sliver of what is physically present reaches you at all. Nothing in the chain corrects for what was never sampled — a fact about the channel, not a claim about what is hidden.',
        },
        {
          id: 'receptor',
          label: 'Three receptor types respond',
          colour: C.warm,
          detail:
            'The eye reduces a continuous spectrum to three numbers. Different physical spectra can produce identical numbers, which is why two objects can look the same colour and not be.',
        },
        {
          id: 'processing',
          label: 'The brain builds a stable scene',
          colour: C.hot,
          detail:
            'Edges are sharpened, gaps filled, colour held roughly constant as the light changes. The scene you experience is constructed to be useful, which is not the same as being a copy.',
        },
        {
          id: 'experience',
          label: 'You see a world',
          colour: C.life,
          detail:
            'What arrives feels like immediate contact with the thing itself. That feeling is the intuition this movement examines. Noticing the chain does not show the world is unlike what you see — it shows the question is real.',
        },
      ]}
    />
  );
}
