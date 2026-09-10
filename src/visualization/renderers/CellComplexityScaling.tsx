import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { BarRows, C, Note, Stack, type Bar } from './lifeKit';

/**
 * The energy budget per gene, which is the quantitative core of the argument
 * that complex cells needed mitochondria.
 *
 * The bars span four orders of magnitude, so the scale is logarithmic and says
 * so. The note carries the caveat, because the strong form of Lane and Martin's
 * argument is contested and a chart this stark would otherwise imply it is not.
 */

interface Cell extends Bar {
  readonly why: string;
}

const CELLS: readonly Cell[] = [
  {
    label: 'Bacterium (E. coli)',
    value: 1,
    display: 'baseline',
    colour: C.water,
    why: 'Generates energy across its single outer membrane. Membrane area grows with the square of size while costs grow with the cube, so getting larger makes its energy budget per gene worse, not better.',
  },
  {
    label: 'Large bacterium',
    value: 0.3,
    display: '≈ 0.3× per gene',
    colour: C.water,
    why: 'Some bacteria do get large, and they pay for it: less energy available per gene, which is why none of them has evolved a genome anywhere near eukaryotic size.',
  },
  {
    label: 'Eukaryote (yeast)',
    value: 4700,
    display: '≈ 4,700× per gene',
    colour: C.life,
    why: 'Energy generation is on internal mitochondrial membranes — hundreds or thousands of them, each with its own small genome controlling it locally. The area constraint is lifted.',
  },
  {
    label: 'Eukaryote (amoeba)',
    value: 100000,
    display: '≈ 100,000× per gene',
    colour: C.life,
    why: 'Large eukaryotes with many mitochondria have budgets per gene that no prokaryote approaches, which is what pays for tens of thousands of genes, internal structure, and regulation.',
  },
];

export default function CellComplexityScaling(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(2);
  const cell = CELLS[Math.min(pick, CELLS.length - 1)];

  return (
    <Stack>
      <BarRows
        bars={CELLS}
        axisLabel="energy available per gene, relative to a bacterium (log scale) — tap a row"
        log
        selected={pick}
        onSelect={setPick}
      />
      <Note>
        {cell ? (
          <>
            <strong>{cell.label}.</strong> {cell.why} These figures come from Lane and
            Martin&rsquo;s 2010 analysis, and the strong version of their argument — that
            mitochondria were a prerequisite for complexity rather than merely helpful — is
            disputed. Critics point out that the result depends on how the comparison is normalised,
            and that some bacteria maintain extensive internal membranes. The correlation between
            acquiring mitochondria and expanding the genome is not disputed.
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
