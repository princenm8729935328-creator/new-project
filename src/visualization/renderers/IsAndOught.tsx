import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The is–ought gap, with the invalid inference drawn in both directions.
 *
 * Showing that the same fallacy is committed by both the "therefore nothing
 * matters" and the "therefore it was intended" conclusions is what keeps this
 * figure from taking a side.
 */

const VIEWS = ['The structure', 'Both directions'] as const;

export default function IsAndOught(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={190}>
        {view === 0 ? (
          <g>
            <rect x={20} y={30} width={140} height={120} rx={5} fill="rgba(111,179,255,0.12)" />
            <text x={90} y={50} textAnchor="middle" fontSize={9.5} fill={C.water}>
              what is
            </text>
            {[
              'the Universe is 13.8 Gyr old',
              'life shares one ancestor',
              'selection has no goal',
              'stars made your atoms',
            ].map((t, i) => (
              <text key={t} x={30} y={72 + i * 18} fontSize={7.5} fill="rgba(233,238,247,0.9)">
                {t}
              </text>
            ))}

            <rect x={220} y={30} width={140} height={120} rx={5} fill="rgba(201,168,255,0.12)" />
            <text x={290} y={50} textAnchor="middle" fontSize={9.5} fill={C.deep}>
              what matters
            </text>
            {[
              'this is meaningful',
              'this is worth caring for',
              'we should do X',
              'life has a purpose',
            ].map((t, i) => (
              <text key={t} x={230} y={72 + i * 18} fontSize={7.5} fill="rgba(233,238,247,0.9)">
                {t}
              </text>
            ))}

            <line
              x1={168}
              y1={90}
              x2={212}
              y2={90}
              stroke={C.hot}
              strokeWidth={2.4}
              strokeDasharray="5 4"
            />
            <text x={190} y={82} textAnchor="middle" fontSize={14} fill={C.hot}>
              ✕
            </text>
            <text x={190} y={172} textAnchor="middle" fontSize={8.5} fill={C.hot}>
              no chain of facts entails a conclusion about value by logic alone
            </text>
          </g>
        ) : (
          <g>
            <rect x={12} y={24} width={356} height={62} rx={4} fill="rgba(255,143,110,0.10)" />
            <text x={22} y={42} fontSize={8.5} fill="rgba(233,238,247,0.95)">
              “Evolution has no goal, therefore nothing matters.”
            </text>
            <text x={22} y={58} fontSize={8} fill={C.hot}>
              hidden premise: meaning requires a cosmic goal
            </text>
            <text x={22} y={74} fontSize={8} fill={C.faint}>
              unstated, unsupported, and doing all the work
            </text>

            <rect x={12} y={96} width={356} height={62} rx={4} fill="rgba(255,143,110,0.10)" />
            <text x={22} y={114} fontSize={8.5} fill="rgba(233,238,247,0.95)">
              “Life is astonishing, therefore it must have been intended.”
            </text>
            <text x={22} y={130} fontSize={8} fill={C.hot}>
              hidden premise: astonishing things require an intender
            </text>
            <text x={22} y={146} fontSize={8} fill={C.faint}>
              same move, opposite direction, same problem
            </text>

            <text x={190} y={180} textAnchor="middle" fontSize={8.5} fill={C.warm}>
              the gap cuts both ways, which is what makes it useful here
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'David Hume noticed the structure nearly three centuries ago: you can pile up facts about how the world is indefinitely, and nothing about what matters follows from them by logic alone. Something evaluative has to be supplied from elsewhere before a fact becomes a reason. This is not a criticism of science and not a gap awaiting better instruments — it is a consequence of what the two kinds of claim are.'
          : 'Recognising the gap is what lets a scientific account be complete on its own terms without pretending to answer questions it was never addressed to. Nothing in this section establishes that life is meaningless, and nothing establishes that it is meaningful. People take very different views from the same evidence, and this atlas does not have a position on which is right — only on where the evidence stops.'}
      </Note>
    </Stack>
  );
}
