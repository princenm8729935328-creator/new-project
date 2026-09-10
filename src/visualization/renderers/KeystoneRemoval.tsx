import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Paine's experiment, which is where the word keystone comes from.
 *
 * He removed one starfish species from a rockpool and came back for years. What
 * makes it worth drawing is the outcome: removing a predator reduced diversity,
 * which is the opposite of what intuition predicts.
 */

const SPECIES = [
  'mussels',
  'barnacles',
  'limpets',
  'chitons',
  'anemones',
  'sponges',
  'algae',
  'whelks',
  'snails',
  'nudibranchs',
  'small crabs',
  'sea stars',
  'tube worms',
  'bryozoans',
  'hydroids',
] as const;

const VIEWS = ['With the starfish', 'Starfish removed'] as const;

export default function KeystoneRemoval(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const survivors = view === 0 ? SPECIES.length : 8;

  return (
    <Stack>
      <Figure height={192}>
        <text x={16} y={16} fontSize={9} fill={C.dim}>
          a rocky intertidal community
        </text>
        {SPECIES.map((s, i) => {
          const gone = view === 1 && i >= survivors;
          const isStar = s === 'sea stars';
          return (
            <g key={s}>
              <rect
                x={16 + (i % 5) * 71}
                y={28 + Math.floor(i / 5) * 44}
                width={64}
                height={36}
                rx={4}
                fill={
                  gone
                    ? 'rgba(255,143,110,0.10)'
                    : isStar && view === 1
                      ? 'rgba(255,143,110,0.10)'
                      : C.panel
                }
              />
              <circle
                cx={30 + (i % 5) * 71}
                cy={46 + Math.floor(i / 5) * 44}
                r={6}
                fill={
                  gone || (isStar && view === 1) ? 'rgba(148,162,192,0.2)' : isStar ? C.hot : C.life
                }
              />
              <text
                x={41 + (i % 5) * 71}
                y={49 + Math.floor(i / 5) * 44}
                fontSize={7.5}
                fill={gone || (isStar && view === 1) ? C.faint : 'rgba(233,238,247,0.9)'}
              >
                {s}
              </text>
            </g>
          );
        })}
        <text x={16} y={186} fontSize={9.5} fill={view === 0 ? C.life : C.hot}>
          {view === 0 ? '15 species coexisting' : '8 species left — mussels have taken the rock'}
        </text>
      </Figure>

      <ToggleRow label="Treatment" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Robert Paine studied a rocky shore in Washington State where a starfish, Pisaster, preyed mainly on mussels. Fifteen species shared the rock.'
          : 'He removed the starfish from one plot, by hand, repeatedly, for years. Mussels — the best competitors for space, previously held in check — spread across the rock and crowded out almost everything else. Diversity fell from fifteen species to eight. Removing a predator reduced diversity, which was not what anyone expected, and Paine coined the word keystone for a species whose influence is far out of proportion to its abundance. The concept has since been overused: keystone status is a property of a species in a particular system, not a label a species carries everywhere.'}
      </Note>
    </Stack>
  );
}
