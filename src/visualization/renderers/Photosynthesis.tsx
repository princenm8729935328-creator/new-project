import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Two kinds of photosynthesis, and the electron source that separates them.
 *
 * The usual account starts with the equation, which hides the interesting part.
 * The interesting part is that both versions do the same thing — strip electrons
 * off something using light — and that switching the something from hydrogen
 * sulphide to water is what made the process planetary.
 */

const VIEWS = ['Anoxygenic', 'Oxygenic', 'Why it mattered'] as const;

export default function Photosynthesis(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(1);

  const notes = [
    'The older version, still used by purple and green sulphur bacteria. One light-capturing system pulls electrons off hydrogen sulphide, which gives them up easily. The waste product is sulphur, and the limit is that hydrogen sulphide is only available near volcanic vents and in stagnant water.',
    'The version that changed the planet. Water holds its electrons far more tightly, so two photosystems run in series — two photons per electron — to supply the energy. The waste product is oxygen. Water is everywhere, so productivity is no longer capped by geology.',
    'Anoxygenic photosynthesis is limited to places with a chemical supply. Oxygenic photosynthesis works anywhere there is water and light, and estimates put the increase in global primary production at two to three orders of magnitude. Every atom of free oxygen on Earth came out of this reaction.',
  ];

  return (
    <Stack>
      <Figure height={182}>
        {view === 2 ? (
          <g>
            <text x={20} y={34} fontSize={9} fill={C.dim}>
              global primary production, relative
            </text>
            <rect x={20} y={44} width={16} height={16} rx={2} fill={C.warm} />
            <text x={44} y={57} fontSize={9} fill={C.warm}>
              anoxygenic world
            </text>
            <rect x={20} y={72} width={330} height={16} rx={2} fill={C.life} />
            <text x={20} y={104} fontSize={9} fill={C.life}>
              oxygenic world — roughly 100 to 1000 times more
            </text>
            <text x={20} y={132} fontSize={8.5} fill={C.dim}>
              the constraint changed from “where is the chemical fuel”
            </text>
            <text x={20} y={146} fontSize={8.5} fill={C.dim}>
              to “where is there water and light”
            </text>
          </g>
        ) : (
          <g>
            <text x={30} y={40} fontSize={9.5} fill={view === 0 ? C.warm : C.water}>
              {view === 0 ? 'H₂S' : 'H₂O'}
            </text>
            <text x={30} y={54} fontSize={8} fill={C.faint}>
              {view === 0 ? 'gives electrons up easily' : 'holds electrons tightly'}
            </text>
            <path d="M62,44 L104,44" stroke={C.life} strokeWidth={1.4} />
            <path d="M104,44 l-7,-3.5 l0,7 z" fill={C.life} />
            <text x={80} y={36} textAnchor="middle" fontSize={7.5} fill={C.life}>
              e⁻
            </text>

            <rect x={106} y={30} width={44} height={30} rx={4} fill={C.life} opacity={0.7} />
            <text x={128} y={49} textAnchor="middle" fontSize={8.5} fill="#10241f">
              PS
            </text>
            {view === 1 ? (
              <>
                <path d="M152,44 L186,44" stroke={C.life} strokeWidth={1.4} />
                <rect x={188} y={30} width={44} height={30} rx={4} fill={C.life} opacity={0.7} />
                <text x={210} y={49} textAnchor="middle" fontSize={8.5} fill="#10241f">
                  PS
                </text>
              </>
            ) : null}
            {[0, 1, 2].map((i) => (
              <line
                key={i}
                x1={112 + i * 14 + (view === 1 ? 0 : 0)}
                y1={16}
                x2={118 + i * 14}
                y2={28}
                stroke={C.warm}
                strokeWidth={1.4}
              />
            ))}
            <text x={128} y={12} textAnchor="middle" fontSize={8} fill={C.warm}>
              light
            </text>
            {view === 1 ? (
              <>
                {[0, 1, 2].map((i) => (
                  <line
                    key={`b${i}`}
                    x1={194 + i * 14}
                    y1={16}
                    x2={200 + i * 14}
                    y2={28}
                    stroke={C.warm}
                    strokeWidth={1.4}
                  />
                ))}
                <text x={210} y={12} textAnchor="middle" fontSize={8} fill={C.warm}>
                  light
                </text>
              </>
            ) : null}

            <path
              d={`M${view === 1 ? 234 : 152},44 L${view === 1 ? 276 : 220},44`}
              stroke={C.life}
              strokeWidth={1.4}
            />
            <path d={`M${view === 1 ? 276 : 220},44 l-7,-3.5 l0,7 z`} fill={C.life} />
            <text x={view === 1 ? 300 : 246} y={48} fontSize={9.5} fill={C.life}>
              sugar
            </text>

            <text x={30} y={104} fontSize={9.5} fill={view === 0 ? C.faint : C.air}>
              waste: {view === 0 ? 'sulphur' : 'oxygen'}
            </text>
            <text x={30} y={130} fontSize={8.5} fill={C.dim}>
              {view === 0
                ? 'one photosystem is enough — but H₂S is only found near vents'
                : 'two photosystems in series pay the extra energy cost of splitting water'}
            </text>
            <text x={30} y={158} fontSize={8.5} fill={view === 0 ? C.faint : C.life}>
              {view === 0 ? 'evolved several times' : 'appears to have evolved exactly once'}
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>{notes[view]}</Note>
    </Stack>
  );
}
