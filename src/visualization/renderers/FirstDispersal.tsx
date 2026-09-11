import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The first exit from Africa, plotted by date rather than by geography.
 *
 * A schematic route strip rather than a map: real coastlines at this scale
 * would imply a precision the record does not have, and the argument is about
 * dates and equipment rather than about topography.
 */

interface Site {
  readonly key: string;
  readonly where: string;
  readonly ma: number;
  readonly x: number;
  readonly cc: string;
  readonly tools: string;
  readonly note: string;
}

const SITES: readonly Site[] = [
  {
    key: 'Turkana',
    where: 'Kenya',
    ma: 1.9,
    x: 50,
    cc: '~750 cm³',
    tools: 'Oldowan, early Acheulean',
    note: 'The African starting point. Homo erectus with a modern body plan, in the Rift Valley where the record is densest.',
  },
  {
    key: 'Dmanisi',
    where: 'Georgia',
    ma: 1.85,
    x: 150,
    cc: '546–730 cm³',
    tools: 'simple flakes and choppers',
    note: 'The site that demolished the assumption that leaving Africa required a large brain, advanced tools or fire. None of the three is present, and five individuals were 4,000 km from the Rift.',
  },
  {
    key: 'Shangchen',
    where: 'China',
    ma: 2.12,
    x: 250,
    cc: 'unknown — no fossils',
    tools: 'flaked stone only',
    note: 'Artefacts dated older than Dmanisi and older than most African Homo erectus. No fossils, so the maker is unknown, and a single-locality date of this significance warrants independent confirmation.',
  },
  {
    key: 'Sangiran',
    where: 'Java',
    ma: 1.5,
    x: 320,
    cc: '~900 cm³',
    tools: 'sparse',
    note: 'Southeast Asia, reached across a landmass repeatedly connected and severed by sea level change. Late Homo erectus survived here to perhaps 110,000 years ago.',
  },
];

export default function FirstDispersal(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const site = SITES[Math.min(pick, SITES.length - 1)];
  if (!site) return null;

  return (
    <Stack>
      <Figure height={192}>
        <path
          d="M40,96 C120,56 200,132 340,88"
          fill="none"
          stroke="rgba(148,162,192,0.25)"
          strokeWidth={16}
          strokeLinecap="round"
        />
        <text x={40} y={130} fontSize={8} fill={C.faint}>
          Africa
        </text>
        <text x={170} y={144} textAnchor="middle" fontSize={8} fill={C.faint}>
          western Asia
        </text>
        <text x={330} y={124} textAnchor="end" fontSize={8} fill={C.faint}>
          eastern Asia
        </text>

        {SITES.map((s, i) => {
          const y = i === 0 ? 96 : i === 1 ? 74 : i === 2 ? 102 : 92;
          const active = i === pick;
          return (
            <g key={s.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <circle cx={s.x} cy={y} r={active ? 8 : 5} fill={active ? C.life : C.warm} />
              <text
                x={s.x}
                y={y - (active ? 15 : 11)}
                textAnchor="middle"
                fontSize={8.5}
                fill={active ? C.life : C.dim}
                fontWeight={active ? 700 : 400}
              >
                {s.key}
              </text>
              <text x={s.x} y={y + 20} textAnchor="middle" fontSize={7.5} fill={C.faint}>
                {s.ma} Ma
              </text>
            </g>
          );
        })}

        <text x={14} y={18} fontSize={8.5} fill={C.dim}>
          schematic route, not a map — positions show sequence, not geography
        </text>
        <text x={14} y={168} fontSize={8} fill={C.warm}>
          equipment carried: {site.tools}
        </text>
        <text x={14} y={182} fontSize={8} fill={C.warm}>
          brain size: {site.cc}
        </text>
      </Figure>

      <ToggleRow label="Site" options={SITES.map((s) => s.key)} value={pick} onChange={setPick} />

      <Note>
        <strong>
          {site.key}, {site.where} — {site.ma} Ma.
        </strong>{' '}
        {site.note} Dmanisi delivered a second and more uncomfortable result: its five crania come
        from one place within a few thousand years of each other, and they differ from one another
        as much as specimens that have been assigned to separate species elsewhere. The fifth, with
        a long face and the smallest braincase, would very likely have been named a new species had
        it been found alone. Found together, it is simply a variable individual — which raises the
        possibility that some named hominin species are variation within populations that happened
        to be sampled one fossil at a time.
      </Note>
    </Stack>
  );
}
