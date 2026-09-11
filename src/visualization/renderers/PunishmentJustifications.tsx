import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * The standing justifications for punishment, each with the case it handles
 * worst.
 *
 * Every entry carries its own difficulty, because a list of justifications
 * without difficulties reads as a menu, and the difficulties are where the
 * thinking is.
 */
export default function PunishmentJustifications(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Justifications and their hard cases — a conceptual comparison"
      items={[
        {
          id: 'desert',
          label: 'Desert: it is deserved',
          colour: C.hot,
          detail:
            'Backward-looking and the most intuitive. Its hard case is the one this section has been building: if nobody ultimately made themselves, what grounds desert? Its defenders answer in terms of what a person did rather than how they came to be able to do it.',
        },
        {
          id: 'deterrence',
          label: 'Deterrence: it prevents future harm',
          colour: C.water,
          detail:
            'Forward-looking, and it survives the free will problem untouched. Its hard case is that it would justify punishing someone known to be innocent if the public believed them guilty and the deterrent worked.',
        },
        {
          id: 'protection',
          label: 'Protection: it keeps others safe',
          colour: C.life,
          detail:
            'The most defensible on almost any metaphysics. Its hard case is that it justifies detaining the dangerous regardless of what they have actually done, which is a serious cost.',
        },
        {
          id: 'reform',
          label: 'Reform: it changes the person',
          colour: C.warm,
          detail:
            'Attractive, and empirically demanding: it has to show the intervention works. Its hard case is that treating punishment as treatment can license interventions the person never consented to and cannot end.',
        },
        {
          id: 'communication',
          label: 'Communication: it says something',
          colour: C.deep,
          detail:
            'Punishment as a society\u2019s way of telling the offender and the victim that this mattered. Its hard case is why the message has to be delivered through suffering rather than by other means.',
        },
        {
          id: 'mixed',
          label: 'Most real systems mix several',
          colour: C.rock,
          tag: 'in practice',
          detail:
            'Hart\u2019s influential move was to separate the question of why we have the institution at all from the question of who may be punished and how much. That lets a system be forward-looking in its aim while keeping desert-based limits on its reach.',
        },
      ]}
    />
  );
}
