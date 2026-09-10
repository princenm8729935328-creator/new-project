import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The three requirements, and what happens when each is removed.
 *
 * Natural selection is often taught as a fact to accept. It is better taught as
 * a consequence: given variation, heredity and differential reproduction, the
 * outcome follows whether or not anyone believes in it. Switching each
 * ingredient off shows that all three are load-bearing.
 */

const OPTIONS = ['All three', 'No variation', 'No heredity', 'No difference'] as const;

export default function SelectionIngredients(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);

  const active = [pick !== 1, pick !== 2, pick !== 3];
  const names = ['Variation', 'Heredity', 'Differential reproduction'];
  const meanings = [
    'individuals differ from each other',
    'offspring resemble their parents',
    'some variants leave more offspring than others',
  ];

  const outcomes = [
    'All three present: the population changes across generations, and the change accumulates. Nothing else is required — not a designer, not a goal, not any tendency towards improvement. This is why Darwin’s argument is so hard to escape: given the premises, the conclusion follows.',
    'Without variation there is nothing to select between. Every individual is identical, so whichever ones survive, the next generation looks the same. A population with no genetic variation cannot adapt, which is precisely the danger of an inbred or bottlenecked population.',
    'Without heredity, the successful individuals leave offspring that are no more like them than like anyone else. Whatever advantage they had is not transmitted, so nothing accumulates. This is why fire, which grows and spreads and responds, does not evolve.',
    'If every individual leaves the same number of offspring, the mix cannot change through selection. Frequencies still drift by chance, which is a real evolutionary force in small populations — but nothing is being shaped by the environment.',
  ];

  return (
    <Stack>
      <Figure height={182}>
        {names.map((n, i) => (
          <g key={n}>
            <rect
              x={20}
              y={26 + i * 38}
              width={340}
              height={30}
              rx={4}
              fill={active[i] ? 'rgba(79,224,192,0.13)' : 'rgba(255,143,110,0.10)'}
            />
            <text x={34} y={45 + i * 38} fontSize={12} fill={active[i] ? C.life : C.hot}>
              {active[i] ? '✓' : '✕'}
            </text>
            <text x={54} y={41 + i * 38} fontSize={9.5} fill="rgba(233,238,247,0.95)">
              {n}
            </text>
            <text x={54} y={52 + i * 38} fontSize={8} fill={C.faint}>
              {meanings[i]}
            </text>
          </g>
        ))}
        <rect
          x={20}
          y={142}
          width={340}
          height={28}
          rx={4}
          fill={pick === 0 ? 'rgba(79,224,192,0.16)' : C.panel}
        />
        <text x={190} y={160} textAnchor="middle" fontSize={10} fill={pick === 0 ? C.life : C.hot}>
          {pick === 0 ? 'adaptation accumulates' : 'nothing accumulates'}
        </text>
      </Figure>

      <ToggleRow label="Ingredients" options={[...OPTIONS]} value={pick} onChange={setPick} />

      <Note>{outcomes[pick]}</Note>
    </Stack>
  );
}
