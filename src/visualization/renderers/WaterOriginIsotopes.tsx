import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { BarRows, C, Note, Stack, type Bar } from './lifeKit';

/**
 * Where Earth's water came from, read off one number.
 *
 * Deuterium-to-hydrogen ratio is a fingerprint: water that formed further from
 * the Sun carries more deuterium. Earth's oceans match certain meteorites and
 * do not match most comets, which is the single strongest constraint on the
 * question — and the measured spread within comets is why it is a constraint
 * rather than an answer.
 */

interface Source extends Bar {
  readonly explain: string;
}

const SOURCES: readonly Source[] = [
  {
    label: 'Solar nebula (protosolar H)',
    value: 21,
    display: 'D/H ≈ 21 × 10⁻⁶',
    colour: C.warm,
    explain:
      'The gas the Solar System formed from. Earth’s water is around seven times richer in deuterium than this, so the oceans did not come from directly captured nebular gas.',
  },
  {
    label: 'Earth’s oceans',
    value: 156,
    display: 'D/H = 156 × 10⁻⁶',
    colour: C.water,
    explain:
      'The reference value, measured precisely. Everything else on this chart is being compared against it.',
  },
  {
    label: 'Carbonaceous chondrites',
    value: 140,
    display: 'D/H ≈ 120–170 × 10⁻⁶',
    colour: C.life,
    explain:
      'A class of primitive meteorite from the outer asteroid belt, containing several percent water bound into minerals. Their ratio brackets Earth’s closely, which is why they are the leading candidate for the bulk of the oceans.',
  },
  {
    label: 'Comet Halley (Oort cloud)',
    value: 316,
    display: 'D/H ≈ 316 × 10⁻⁶',
    colour: C.deep,
    explain:
      'Twice Earth’s value. Comets like this cannot have supplied most of the water without something else diluting it.',
  },
  {
    label: 'Comet 67P (Jupiter family)',
    value: 530,
    display: 'D/H ≈ 530 × 10⁻⁶',
    colour: C.deep,
    explain:
      'Measured in place by the Rosetta spacecraft, and more than three times Earth’s value — a result that weakened the comet hypothesis considerably when it arrived in 2014.',
  },
  {
    label: 'Comet Hartley 2',
    value: 161,
    display: 'D/H ≈ 161 × 10⁻⁶',
    colour: C.deep,
    explain:
      'And this one matches Earth almost exactly. Comets turn out not to share a single ratio, which means the argument from isotopes constrains the answer without closing it.',
  },
];

export default function WaterOriginIsotopes(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const source = SOURCES[Math.min(pick, SOURCES.length - 1)];

  return (
    <Stack>
      <BarRows
        bars={SOURCES}
        axisLabel="deuterium-to-hydrogen ratio in water (log scale) — tap a row"
        log
        selected={pick}
        onSelect={setPick}
      />
      <Note>{source ? source.explain : ''}</Note>
    </Stack>
  );
}
