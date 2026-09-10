import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { BarRows, C, Note, Stack, ToggleRow, type Bar } from './lifeKit';

/**
 * What complexity costs, measured three ways.
 *
 * Generation time, offspring number and metabolic rate all move together
 * against complexity, and each is a separate argument for the same conclusion.
 * Toggling between them is more convincing than any one chart.
 */

const MEASURES = ['Time to maturity', 'Offspring per lifetime', 'Energy per gram'] as const;

interface Row extends Bar {
  readonly why: string;
}

const SETS: readonly (readonly Row[])[] = [
  [
    {
      label: 'Bacterium',
      value: 0.0004,
      display: '≈ 20 minutes',
      colour: C.water,
      why: 'Twenty minutes from birth to division under good conditions. Nothing has to be built beyond a copy of a single cell.',
    },
    {
      label: 'Fruit fly',
      value: 10,
      display: '≈ 10 days',
      colour: C.life,
      why: 'A complete developmental programme — egg, larva, pupa, adult — compressed into a week and a half.',
    },
    {
      label: 'Mouse',
      value: 42,
      display: '≈ 6 weeks',
      colour: C.warm,
      why: 'Fast for a mammal, and still a hundred thousand times slower than a bacterium.',
    },
    {
      label: 'Human',
      value: 5500,
      display: '≈ 15 years',
      colour: C.hot,
      why: 'Fifteen years of dependency, during which the individual consumes resources and produces nothing. This is not incidental to having a large brain — a brain that learns cannot be finished at birth.',
    },
  ],
  [
    {
      label: 'Cod',
      value: 5000000,
      display: '≈ 5 million eggs',
      colour: C.water,
      why: 'Enormous numbers, essentially no investment in each, almost all eaten. A viable strategy where mortality is high and unpredictable.',
    },
    {
      label: 'Frog',
      value: 20000,
      display: '≈ 20,000 eggs',
      colour: C.life,
      why: 'Fewer eggs, still no parental care in most species.',
    },
    {
      label: 'Mouse',
      value: 60,
      display: '≈ 60 offspring',
      colour: C.warm,
      why: 'Small litters, repeated often, with care. Each offspring represents real investment.',
    },
    {
      label: 'Human',
      value: 4,
      display: '≈ 4 offspring',
      colour: C.hot,
      why: 'A handful in a lifetime, each requiring more than a decade. Losing one is a catastrophic loss of investment, which is why complex slow-breeding species recover so poorly from population crashes.',
    },
  ],
  [
    {
      label: 'Bone',
      value: 0.3,
      display: '0.3 relative',
      colour: C.rock,
      why: 'Structural tissue, cheap to maintain once built.',
    },
    {
      label: 'Muscle at rest',
      value: 1,
      display: '1 relative',
      colour: C.life,
      why: 'The baseline. Muscle is a large share of body mass and a modest share of resting energy use.',
    },
    {
      label: 'Liver',
      value: 13,
      display: '13× muscle',
      colour: C.warm,
      why: 'Metabolically expensive, and one of the tissues proposed as having been reduced to pay for brain expansion — though comparative tests across mammals have not supported a general gut–brain trade-off.',
    },
    {
      label: 'Brain',
      value: 15,
      display: '15× muscle',
      colour: C.hot,
      why: 'About 2% of human body mass and around 20% of resting energy use, and it cannot be switched off. Most of that goes on pumping ions back across neuron membranes, a cost incurred whether or not the neuron is doing anything.',
    },
  ],
];

export default function ComplexityCosts(_props: VisualizationProps): ReactNode {
  const [measure, setMeasure] = useState(0);
  const [pick, setPick] = useState(3);
  const rows = SETS[Math.min(measure, SETS.length - 1)] ?? [];
  const row = rows[Math.min(pick, rows.length - 1)];

  return (
    <Stack>
      <BarRows
        bars={rows}
        axisLabel={`${MEASURES[measure]} (log scale) — tap a row`}
        log
        selected={pick}
        onSelect={setPick}
      />
      <ToggleRow label="Measure" options={[...MEASURES]} value={measure} onChange={setMeasure} />
      <Note>
        {row ? (
          <>
            <strong>
              {row.label} — {row.display}.
            </strong>{' '}
            {row.why} Complexity has to be built, and building takes time and energy that could have
            gone into reproducing. It also creates more ways to fail: an intricate developmental
            programme has many steps at which something can go wrong. This is why large complex slow
            breeders disappear first when conditions change sharply, and small fast ones come
            through.
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
