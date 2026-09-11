import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The same two genomes, three ways of counting.
 *
 * The point is not which figure is right — all three are — but that a
 * percentage without a stated method is not a measurement. Showing them side by
 * side is the fastest way to make that concrete.
 */

interface Method {
  readonly label: string;
  readonly same: number;
  readonly what: string;
  readonly detail: string;
}

const METHODS: readonly Method[] = [
  {
    label: 'Single letters only',
    same: 98.8,
    what: 'positions that align, counting only substitutions',
    detail:
      'The famous figure. Take the stretches of the two genomes that line up cleanly with each other, then count how often a single letter differs. It is a well-defined measurement of one specific thing.',
  },
  {
    label: 'Including insertions',
    same: 95.5,
    what: 'the same regions, counting inserted and deleted stretches too',
    detail:
      'Genomes also gain and lose whole blocks of sequence. A single insertion event can account for hundreds of differing positions, so including them drops the similarity by several percent — from the same two genomes, with no disagreement about the data.',
  },
  {
    label: 'Whole genomes',
    same: 0,
    what: 'including duplications and rearrangements',
    detail:
      'At this level a percentage stops being meaningful. Large regions are duplicated different numbers of times in each species, chromosomes are rearranged, and there is no principled way to express "how much is shared" as one number. This is where the question itself breaks down.',
  },
];

export default function GenomeSimilarity(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const method = METHODS[Math.min(pick, METHODS.length - 1)];
  if (!method) return null;

  const LEFT = 20;
  const W = 340;

  return (
    <Stack>
      <Figure height={170}>
        <text x={LEFT} y={18} fontSize={8.5} fill={C.dim}>
          human vs chimpanzee, counted as: {method.what}
        </text>

        {method.same > 0 ? (
          <g>
            <rect x={LEFT} y={34} width={W} height={26} rx={4} fill="rgba(79,224,192,0.25)" />
            <rect
              x={LEFT + (W * method.same) / 100}
              y={34}
              width={W * (1 - method.same / 100)}
              height={26}
              rx={4}
              fill={C.hot}
            />
            <text x={LEFT + 8} y={51} fontSize={9} fill={C.life}>
              identical
            </text>
            <text x={190} y={82} textAnchor="middle" fontSize={22} fill={C.life}>
              {method.same}%
            </text>
            <text x={190} y={98} textAnchor="middle" fontSize={8} fill={C.dim}>
              differing: {(100 - method.same).toFixed(1)}%
            </text>
          </g>
        ) : (
          <g>
            <rect x={LEFT} y={34} width={W} height={26} rx={4} fill="rgba(148,162,192,0.14)" />
            {[0.06, 0.22, 0.4, 0.55, 0.74, 0.88].map((f, i) => (
              <rect
                key={f}
                x={LEFT + W * f}
                y={34}
                width={i % 2 === 0 ? 26 : 16}
                height={26}
                fill={C.deep}
                opacity={0.55}
              />
            ))}
            <text x={190} y={84} textAnchor="middle" fontSize={13} fill={C.warm}>
              no single percentage applies
            </text>
            <text x={190} y={100} textAnchor="middle" fontSize={8} fill={C.dim}>
              duplicated and rearranged regions cannot be paired off one to one
            </text>
          </g>
        )}

        <text x={LEFT} y={126} fontSize={8} fill={C.faint}>
          for comparison, counting single letters the same way:
        </text>
        <text x={LEFT} y={140} fontSize={8} fill={C.faint}>
          human vs gorilla ≈ 98.2% · human vs mouse, coding regions only ≈ 85%
        </text>
        <text x={LEFT} y={158} fontSize={8} fill={C.warm}>
          similarity is not a measure of how different two organisms are
        </text>
      </Figure>

      <ToggleRow
        label="Counting method"
        options={METHODS.map((m) => m.label)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>{method.label}.</strong> {method.detail} Whichever figure is quoted, it answers a
        question about sequence and not about biology. Most of a genome does not code for proteins,
        and a change to when and how strongly a gene is switched on can alter a whole structure
        while registering as a handful of letters. The size of a genetic difference and the size of
        its effect are close to unrelated.
      </Note>
    </Stack>
  );
}
