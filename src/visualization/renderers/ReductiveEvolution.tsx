import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { BarRows, C, Note, Stack, type Bar } from './lifeKit';

/**
 * Losing things, on purpose, as it were.
 *
 * Genome sizes make the argument quantitatively in a way that anecdotes about
 * cave fish cannot: an endosymbiont with 140,000 base pairs is not a degenerate
 * version of a free-living bacterium, it is an extremely specialised organism
 * whose specialisation consists almost entirely of subtraction.
 */

interface Genome extends Bar {
  readonly why: string;
}

const GENOMES: readonly Genome[] = [
  {
    label: 'Free-living relative (E. coli)',
    value: 4600,
    display: '≈ 4,600 kb · ~4,300 genes',
    colour: C.water,
    why: 'A self-sufficient bacterium. It synthesises all twenty amino acids, repairs its own DNA, senses its environment and swims towards food.',
  },
  {
    label: 'Buchnera (in aphids)',
    value: 640,
    display: '≈ 640 kb · ~580 genes',
    colour: C.warm,
    why: 'Lives inside aphid cells and supplies amino acids the aphid cannot make. It has lost the genes for anything the aphid provides, including most of its own repair machinery.',
  },
  {
    label: 'Carsonella ruddii',
    value: 160,
    display: '≈ 160 kb · ~180 genes',
    colour: C.hot,
    why: 'An insect endosymbiont with fewer genes than some viruses. It has lost so much that it is arguably no longer an organism at all — some researchers describe it as an organelle in the process of forming.',
  },
  {
    label: 'Mitochondrion (human)',
    value: 16.6,
    display: '≈ 16.6 kb · 37 genes',
    colour: C.deep,
    why: 'The end point of the same process. A captured bacterium that has transferred almost all its genes to the host nucleus and retains only a handful — mostly for components that must be made where they are used.',
  },
];

export default function ReductiveEvolution(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const genome = GENOMES[Math.min(pick, GENOMES.length - 1)];

  return (
    <Stack>
      <BarRows
        bars={GENOMES}
        axisLabel="genome size in kilobases (log scale) — tap a row"
        log
        selected={pick}
        onSelect={setPick}
      />
      <Note>
        {genome ? (
          <>
            <strong>{genome.label}.</strong> {genome.why} Two forces drive this. When the host
            supplies a function, mutations that break the gene for it stop being harmful, so
            selection no longer removes them. And symbionts passed from parent to offspring have
            very small effective population sizes, which lets drift fix slightly harmful changes as
            well. The process is essentially irreversible — genes once lost are not recovered — and
            it is not decline. Each of these organisms is superbly adapted to a situation its
            ancestors never occupied.
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
