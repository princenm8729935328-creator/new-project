import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Selection pressures removed against selection pressures created.
 *
 * The asymmetry in how these get discussed is the reason for the figure: the
 * removals are famous and the additions are better measured, and a reader who
 * only hears about relaxation gets a one-sided picture.
 */

interface Pressure {
  readonly key: string;
  readonly kind: 'removed' | 'added';
  readonly detail: string;
}

const PRESSURES: readonly Pressure[] = [
  {
    key: 'Severe myopia',
    kind: 'removed',
    detail:
      'Before corrective lenses, being unable to see at a distance was a serious disadvantage. Now it is an inconvenience corrected in an afternoon. Selection against the variants involved has genuinely relaxed — and the expected consequence is a slow rise in their frequency, slow because the removal rate was never fast either.',
  },
  {
    key: 'Childhood infection',
    kind: 'removed',
    detail:
      'Vaccination and antibiotics have removed much of the mortality that used to select strongly on immune variation in early life. This is the largest relaxation of them all.',
  },
  {
    key: 'Congenital conditions',
    kind: 'removed',
    detail:
      'Many conditions that prevented reproduction no longer do. Type 1 diabetes was fatal in childhood and is now managed.',
  },
  {
    key: 'Metabolic mismatch',
    kind: 'added',
    detail:
      'Variants that were unremarkable under a diet of foraged or subsistence foods contribute to type 2 diabetes under an environment of abundant refined carbohydrate. This is new selection, not relaxed selection.',
  },
  {
    key: 'Immune mismatch',
    kind: 'added',
    detail:
      'Immune variants that were advantageous against endemic parasites appear to contribute to allergic and autoimmune conditions in environments where those parasites are absent.',
  },
  {
    key: 'New pathogens',
    kind: 'added',
    detail:
      'Infectious disease remains the strongest selective force acting on humans, and the genomic regions with the clearest recent selection signals are immune loci. The relationship is two-way and asymmetric: pathogens evolve on a timescale of hours and we evolve on a timescale of generations. Antibiotic resistance is evolution happening now, in populations we created the conditions for.',
  },
  {
    key: 'Reproductive timing',
    kind: 'added',
    detail:
      'When most people survive to adulthood, the differences that matter shift to how many children people have and when — both partly heritable, both currently varying a great deal, and both measurably under selection in the populations where it has been looked for.',
  },
];

export default function ChangingPressures(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(3);
  const p = PRESSURES[Math.min(pick, PRESSURES.length - 1)];
  if (!p) return null;

  return (
    <Stack>
      <Figure height={192}>
        <text x={94} y={18} textAnchor="middle" fontSize={9} fill={C.hot}>
          pressures removed
        </text>
        <text x={286} y={18} textAnchor="middle" fontSize={9} fill={C.life}>
          pressures created
        </text>
        <line x1={190} y1={26} x2={190} y2={178} stroke="rgba(148,162,192,0.2)" />

        {PRESSURES.map((x, i) => {
          const removed = x.kind === 'removed';
          const col = PRESSURES.filter((y) => y.kind === x.kind);
          const row = col.indexOf(x);
          const y = 44 + row * 32;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={removed ? 14 : 198}
                y={y - 12}
                width={168}
                height={24}
                rx={5}
                fill={
                  active
                    ? removed
                      ? 'rgba(255,143,110,0.16)'
                      : 'rgba(79,224,192,0.16)'
                    : 'rgba(148,162,192,0.07)'
                }
                stroke={active ? (removed ? C.hot : C.life) : 'transparent'}
              />
              <text
                x={removed ? 24 : 208}
                y={y + 3}
                fontSize={8}
                fill={active ? (removed ? C.hot : C.life) : C.dim}
              >
                {x.key}
              </text>
            </g>
          );
        })}
        <text x={190} y={190} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          selection is redirected, not abolished
        </text>
      </Figure>

      <ToggleRow
        label="Side"
        options={['Removed', 'Created']}
        value={p.kind === 'removed' ? 0 : 1}
        onChange={(i) => {
          const want = i === 0 ? 'removed' : 'added';
          const idx = PRESSURES.findIndex((x) => x.kind === want);
          if (idx >= 0) setPick(idx);
        }}
      />

      <Note>
        <strong>{p.key}.</strong> {p.detail} The idea that removing selection pressure causes a
        population to deteriorate is a recurring theme in popular writing and it has an ugly
        history. The actual expectation is far more modest: a very slow increase in the frequency of
        some variants, over hundreds of generations, with effects that medicine is meanwhile getting
        better at managing. Note also the asymmetry in how the argument is usually made — the same
        writers who worry about relaxed selection rarely mention the new pressures created by the
        same environment, which are stronger and better measured. There is no scientific basis for a
        general claim that human populations are deteriorating.
      </Note>
    </Stack>
  );
}
