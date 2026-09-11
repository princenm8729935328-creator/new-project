import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * How little fossil material a whole human population can rest on.
 *
 * The contrast between the fossil column and the genetic column is the point:
 * this is the first human population characterised in detail before anyone knew
 * what its face looked like, and it inverted the usual order of discovery.
 */

const VIEWS = ['What we have', 'What it told us'] as const;

const FOSSILS = [
  {
    key: 'Denisova 3',
    what: 'a fragment of a child’s finger bone, about the size of a grain of rice',
  },
  { key: 'Denisova 4, 8', what: 'isolated molars, unusually large' },
  {
    key: 'Denisova 11',
    what: 'a bone fragment from a first-generation Neanderthal–Denisovan individual',
  },
  {
    key: 'Xiahe mandible',
    what: 'a jaw from the Tibetan Plateau at 3,280 m, identified by ancient proteins rather than DNA',
  },
];

const FINDINGS = [
  {
    key: 'A distinct lineage',
    what: 'diverged from Neanderthals around 390–440 thousand years ago',
  },
  {
    key: 'Continental range',
    what: '3–5% Denisovan ancestry in Papuan and Aboriginal Australian populations, far from Siberia',
  },
  {
    key: 'Interbreeding',
    what: 'with Neanderthals, with modern humans, and with at least one further unidentified archaic population',
  },
  { key: 'A useful legacy', what: 'the Tibetan high-altitude EPAS1 variant came from them' },
];

export default function DenisovanDiscovery(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const rows = view === 0 ? FOSSILS : FINDINGS;

  return (
    <Stack>
      <Figure height={186}>
        <text x={14} y={18} fontSize={9} fill={view === 0 ? C.hot : C.life}>
          {view === 0
            ? 'the entire fossil record of a human population'
            : 'what the DNA established'}
        </text>
        {rows.map((r, i) => {
          const y = 44 + i * 34;
          return (
            <g key={r.key}>
              <rect
                x={14}
                y={y - 15}
                width={352}
                height={28}
                rx={5}
                fill="rgba(148,162,192,0.07)"
              />
              <circle cx={30} cy={y - 1} r={5} fill={view === 0 ? C.hot : C.life} />
              <text x={44} y={y - 4} fontSize={8.5} fill="rgba(233,238,247,0.92)">
                {r.key}
              </text>
              <text x={44} y={y + 8} fontSize={7.5} fill={C.faint}>
                {r.what.length > 68 ? `${r.what.slice(0, 66)}…` : r.what}
              </text>
            </g>
          );
        })}
        <text x={14} y={180} fontSize={8} fill={C.dim}>
          {view === 0
            ? 'no skull, no face, and formally still no species name'
            : 'characterised in detail before anyone knew what they looked like'}
        </text>
      </Figure>

      <ToggleRow label="Column" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        The finger bone from Denisova Cave says almost nothing anatomically — a phalanx from a human
        of some kind. Sequenced, it turned out to belong to a population nobody knew existed: not
        Neanderthal, not modern human, a lineage that had separated from Neanderthals several
        hundred thousand years earlier and lived across Asia without leaving a fossil record anyone
        had recognised. They were named after the cave because there was no anatomical description
        to name them from. Denisova 11 is the most improbable find in the set: a first-generation
        individual with a Neanderthal mother and a Denisovan father. Finding one among the handful
        of archaic individuals ever sequenced has an implication beyond the specimen — if such
        people were rare, the chance of catching one in so small a sample would be negligible. Where
        these populations met, they seem to have mixed regularly.
      </Note>
    </Stack>
  );
}
