import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Archaic ancestry by population, and where it is missing from the genome.
 *
 * The second view is the one that carries new information: the deserts on the
 * X chromosome and near fertility genes are the signature of hybrid
 * incompatibility, which is a finding rather than a curiosity.
 */

const VIEWS = ['By population', 'Across the genome'] as const;

interface Pop {
  readonly key: string;
  readonly neanderthal: number;
  readonly denisovan: number;
}

const POPS: readonly Pop[] = [
  { key: 'Sub-Saharan African', neanderthal: 0.15, denisovan: 0 },
  { key: 'European', neanderthal: 1.9, denisovan: 0 },
  { key: 'East Asian', neanderthal: 2.1, denisovan: 0.2 },
  { key: 'South Asian', neanderthal: 1.8, denisovan: 0.3 },
  { key: 'Papuan', neanderthal: 2.0, denisovan: 4.0 },
];

export default function IntrogressionMap(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  const LEFT = 122;
  const W = 200;

  return (
    <Stack>
      <Figure height={190}>
        {view === 0 ? (
          <g>
            <text x={LEFT} y={16} fontSize={8} fill={C.deep}>
              Neanderthal
            </text>
            <text x={LEFT + 88} y={16} fontSize={8} fill={C.warm}>
              Denisovan
            </text>
            {POPS.map((p, i) => {
              const y = 36 + i * 28;
              return (
                <g key={p.key}>
                  <text x={LEFT - 8} y={y + 9} textAnchor="end" fontSize={8} fill={C.dim}>
                    {p.key}
                  </text>
                  <rect x={LEFT} y={y} width={W} height={13} rx={3} fill="rgba(148,162,192,0.1)" />
                  <rect
                    x={LEFT}
                    y={y}
                    width={(W * p.neanderthal) / 6.5}
                    height={13}
                    rx={3}
                    fill={C.deep}
                  />
                  <rect
                    x={LEFT + (W * p.neanderthal) / 6.5}
                    y={y}
                    width={(W * p.denisovan) / 6.5}
                    height={13}
                    rx={3}
                    fill={C.warm}
                  />
                  <text
                    x={LEFT + (W * (p.neanderthal + p.denisovan)) / 6.5 + 6}
                    y={y + 10}
                    fontSize={7.5}
                    fill={C.faint}
                  >
                    {(p.neanderthal + p.denisovan).toFixed(1)}%
                  </text>
                </g>
              );
            })}
            <text x={14} y={182} fontSize={7.5} fill={C.faint}>
              approximate published values; estimates vary with method and reference panel
            </text>
          </g>
        ) : (
          <g>
            <text x={14} y={16} fontSize={8.5} fill={C.dim}>
              where Neanderthal sequence survives in a modern genome
            </text>
            {['chr 1', 'chr 7', 'chr 12', 'X chromosome'].map((label, r) => {
              const y = 44 + r * 32;
              const isX = r === 3;
              const blocks = isX
                ? [0.12, 0.7]
                : r === 0
                  ? [0.05, 0.18, 0.31, 0.52, 0.66, 0.79, 0.91]
                  : r === 1
                    ? [0.09, 0.24, 0.41, 0.58, 0.74, 0.88]
                    : [0.07, 0.2, 0.35, 0.61, 0.83];
              return (
                <g key={label}>
                  <text x={14} y={y + 9} fontSize={8} fill={isX ? C.hot : C.dim}>
                    {label}
                  </text>
                  <rect x={90} y={y} width={276} height={13} rx={4} fill="rgba(148,162,192,0.12)" />
                  {blocks.map((f) => (
                    <rect
                      key={f}
                      x={90 + 276 * f}
                      y={y}
                      width={10}
                      height={13}
                      fill={C.deep}
                      opacity={0.85}
                    />
                  ))}
                  {isX ? (
                    <rect
                      x={90 + 276 * 0.24}
                      y={y}
                      width={276 * 0.4}
                      height={13}
                      rx={4}
                      fill="rgba(255,143,110,0.16)"
                      stroke={C.hot}
                      strokeDasharray="3 2"
                    />
                  ) : null}
                </g>
              );
            })}
            <text x={90} y={168} fontSize={8} fill={C.hot}>
              deserts: stretches of millions of bases with no archaic sequence at all
            </text>
            <text x={90} y={182} fontSize={7.5} fill={C.faint}>
              block positions schematic; the depletion pattern is the finding
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'When the first Neanderthal genome was published in 2010, the headline result was not about Neanderthals: people living today outside sub-Saharan Africa carry pieces of Neanderthal DNA. The finding had been actively expected not to happen — the prevailing model held that modern humans replaced archaic populations without mixing, and earlier mitochondrial studies had found no signal, which is explicable now since mitochondrial DNA passes only down the maternal line and represents a single locus among millions. The small African values reflect later back-migration into Africa rather than local interbreeding. The timing comes from the DNA itself: introgressed segments shorten each generation as chromosomes are shuffled, and a 45,000-year-old Siberian individual had noticeably longer ones than we do, placing the main admixture around 50,000 to 60,000 years ago.'
          : 'Not all of the inherited DNA survived. Some regions contain no archaic sequence across millions of bases, and the depletion is strongest on the X chromosome and near genes active in the testes. That is the signature of hybrid incompatibility, seen in other species where related populations mix: differences that accumulate during separation often interact badly, and the effects concentrate on the X and on male fertility. Neanderthals and modern humans had been apart for over half a million years, which is enough for that to build up. Male hybrids may have had reduced fertility. Meanwhile some introgressed variants were useful and rose in frequency — immune variants, and the Tibetan altitude allele, which came from Denisovans.'}
      </Note>
    </Stack>
  );
}
