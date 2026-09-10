import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * "Better at what?" answered with five different metrics.
 *
 * On every measure biology actually uses, the simple organisms win. Letting the
 * reader switch metrics and watch the ranking stay the same is the argument;
 * asserting it would not be.
 */

const METRICS = ['Abundance', 'Biomass', 'Habitats', 'Metabolism', 'Duration'] as const;

interface Contender {
  readonly name: string;
  readonly scores: readonly [number, number, number, number, number];
  readonly colour: string;
}

const CONTENDERS: readonly Contender[] = [
  { name: 'Prokaryotes', scores: [1, 0.16, 1, 1, 1], colour: C.water },
  { name: 'Plants', scores: [0.02, 1, 0.4, 0.25, 0.12], colour: C.life },
  { name: 'Fungi', scores: [0.03, 0.03, 0.5, 0.3, 0.14], colour: C.warm },
  { name: 'Animals', scores: [0.06, 0.005, 0.45, 0.15, 0.16], colour: C.hot },
  { name: 'Humans', scores: [0.00001, 0.0001, 0.5, 0.05, 0.0001], colour: 'rgba(233,238,247,0.9)' },
];

const NOTES = [
  'By number of individuals, prokaryotes win by a margin no other group approaches — estimates run to around 10³⁰ cells, most of them in soil and subsurface sediment. Human beings number about 10¹⁰.',
  'By mass, plants dominate — roughly 80% of the biosphere, almost all of it wood. Animals are around 0.4%, and humans about 0.01%.',
  'By range of habitats, prokaryotes occupy essentially the full range of conditions compatible with life: above 100 °C, below pH 0, kilometres into rock, inside nuclear reactor cooling water. Humans occupy a wide range only with technology.',
  'By metabolic repertoire, it is not close. Eukaryotes do essentially two things for energy, both inherited from captured bacteria. Prokaryotes additionally oxidise sulphur, iron, hydrogen, ammonia, manganese and methane, respire using sulphate, nitrate, iron and uranium, and fix atmospheric nitrogen — which no eukaryote can do.',
  'By time in existence, prokaryotes have been here for close to four billion years and show no sign of going anywhere. Animals have managed about 600 million; anatomically modern humans about 300,000.',
];

export default function SuccessMetrics(_props: VisualizationProps): ReactNode {
  const [metric, setMetric] = useState(0);
  const ranked = [...CONTENDERS].sort((a, b) => (b.scores[metric] ?? 0) - (a.scores[metric] ?? 0));

  return (
    <Stack>
      <Figure height={172}>
        <text x={16} y={14} fontSize={9} fill={C.dim}>
          {METRICS[metric]} — log scale, best = 1
        </text>
        {ranked.map((c, i) => {
          const v = c.scores[metric] ?? 0;
          const w = Math.max(((Math.log10(Math.max(v, 1e-6)) + 6) / 6) * 340, 3);
          return (
            <g key={c.name}>
              <rect x={16} y={24 + i * 28} width={340} height={22} rx={3} fill={C.panel} />
              <rect
                x={16}
                y={24 + i * 28}
                width={w}
                height={22}
                rx={3}
                fill={c.colour}
                opacity={0.75}
              />
              <text x={24} y={39 + i * 28} fontSize={9.5} fill="rgba(15,20,26,0.95)">
                {c.name}
              </text>
            </g>
          );
        })}
      </Figure>

      <ToggleRow label="Measure" options={[...METRICS]} value={metric} onChange={setMetric} />

      <Note>
        {NOTES[metric]} The dependence also runs one way: remove all eukaryotes and the biosphere
        continues, altered. Remove all prokaryotes and it collapses within a small number of
        generations, because nothing else can fix nitrogen. On which measure, then, is a mammal
        better? The honest answer is none of them. What a mammal has is a set of capabilities that
        work extremely well in particular circumstances and are fatal in others.
      </Note>
    </Stack>
  );
}
