import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why the human–chimpanzee divergence date has a range rather than a value.
 *
 * The sliders are the argument. The sequence data are fixed; the date moves by
 * millions of years depending on two numbers that have to be measured
 * separately, and one of them was revised by a factor of two in 2012.
 */

// Differences per base pair between human and chimpanzee, single-nucleotide
// only, divided between two lineages.
const DIVERGENCE = 0.0125;

export default function DivergenceDating(_props: VisualizationProps): ReactNode {
  const [rate, setRate] = useState(1.2);
  const [gen, setGen] = useState(25);

  // t = divergence / (2 * per-generation rate) generations, then * generation time.
  const generations = DIVERGENCE / (2 * rate * 1e-8);
  const years = (generations * gen) / 1e6;

  const LEFT = 34;
  const W = 316;
  const toX = (ma: number): number => LEFT + ((Math.min(Math.max(ma, 2), 14) - 2) / 12) * W;

  return (
    <Stack>
      <Figure height={182}>
        <text x={LEFT} y={18} fontSize={8.5} fill={C.dim}>
          estimated human–chimpanzee divergence
        </text>

        <rect x={LEFT} y={40} width={W} height={16} rx={4} fill="rgba(148,162,192,0.12)" />
        <rect
          x={toX(6.5)}
          y={40}
          width={toX(9) - toX(6.5)}
          height={16}
          rx={4}
          fill="rgba(79,224,192,0.22)"
        />
        <text x={toX(7.75)} y={34} textAnchor="middle" fontSize={7.5} fill={C.life}>
          current published range
        </text>

        <line x1={toX(years)} y1={34} x2={toX(years)} y2={70} stroke={C.warm} strokeWidth={2} />
        <circle cx={toX(years)} cy={48} r={5} fill={C.warm} />
        <text x={toX(years)} y={84} textAnchor="middle" fontSize={10} fill={C.warm}>
          {years.toFixed(1)} Ma
        </text>

        {[2, 4, 6, 8, 10, 12, 14].map((t) => (
          <g key={t}>
            <line x1={toX(t)} y1={56} x2={toX(t)} y2={61} stroke="rgba(148,162,192,0.4)" />
            <text x={toX(t)} y={70} textAnchor="middle" fontSize={7} fill={C.faint}>
              {t}
            </text>
          </g>
        ))}
        <text x={190} y={100} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          millions of years before present
        </text>

        <text x={LEFT} y={122} fontSize={8} fill={C.dim}>
          fixed input: {(DIVERGENCE * 100).toFixed(2)}% of positions differ
        </text>
        <text x={LEFT} y={136} fontSize={8} fill={C.dim}>
          generations since the split: {Math.round(generations / 1000)},000
        </text>
        <text x={LEFT} y={158} fontSize={8} fill={rate < 0.9 ? C.hot : C.faint}>
          {rate < 0.9
            ? 'the older, fossil-calibrated rate: gives the 1990s answer'
            : 'directly measured rate, from sequencing parents and children'}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Mutation rate"
          hiddenLabel="Mutations per base pair per generation, in units of 10 to the minus 8"
          min={0.6}
          max={2.5}
          step={0.05}
          value={rate}
          onChange={setRate}
          display={`${rate.toFixed(2)} ×10⁻⁸`}
        />
        <Slider
          name="Generation time"
          hiddenLabel="Average years between generations"
          min={15}
          max={32}
          step={1}
          value={gen}
          onChange={setGen}
          display={`${gen} years`}
        />
      </ControlRows>

      <Note>
        The genetic difference between a human and a chimpanzee is a measurement and does not move.
        The <strong>date</strong> is that measurement divided by two numbers, and both are hard to
        pin down. Until 2012 the mutation rate was calibrated against fossils, which made the
        reasoning partly circular; sequencing parents and their children directly gave a rate about
        half as large, and every divergence estimate built on it roughly doubled. Generation time
        compounds the problem, because mutations accumulate per generation and the answer is wanted
        in years — and we cannot observe the generation time of a lineage that has been extinct for
        millions of years. The numbers here are illustrative of the sensitivity rather than a
        published estimate.
      </Note>
    </Stack>
  );
}
