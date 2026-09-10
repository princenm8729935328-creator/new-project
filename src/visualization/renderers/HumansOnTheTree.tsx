import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Where humans actually are, and how long we have been there.
 *
 * The duration comparison is the part that does the work. A reader who accepts
 * that humans are one twig among millions can still feel like the culmination
 * until they see that sharks have been here for a thousand times longer.
 */

const VIEWS = ['One twig among many', 'How long each has lasted'] as const;

interface Lineage {
  readonly name: string;
  readonly myr: number;
  readonly colour: string;
}

const LINEAGES: readonly Lineage[] = [
  { name: 'Cyanobacteria', myr: 2500, colour: C.water },
  { name: 'Sharks', myr: 420, colour: C.deep },
  { name: 'Horseshoe crabs', myr: 445, colour: C.rock },
  { name: 'Coelacanths', myr: 400, colour: C.warm },
  { name: 'Crocodilians', myr: 95, colour: C.life },
  { name: 'Modern humans', myr: 0.3, colour: '#fff' },
];

export default function HumansOnTheTree(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={view === 0 ? 196 : 190}>
        {view === 0 ? (
          <g>
            <circle cx={20} cy={98} r={4} fill={C.warm} />
            {Array.from({ length: 26 }, (_, i) => {
              const y = 16 + i * 6.6;
              const isUs = i === 17;
              return (
                <g key={i}>
                  <path
                    d={`M24,98 C110,98 ${150 + (i % 5) * 14},${y} 320,${y}`}
                    fill="none"
                    stroke={isUs ? C.life : 'rgba(148,162,192,0.35)'}
                    strokeWidth={isUs ? 2 : 1}
                  />
                  <circle cx={320} cy={y} r={isUs ? 3.6 : 1.8} fill={isUs ? C.life : C.faint} />
                </g>
              );
            })}
            <line x1={320} y1={10} x2={320} y2={188} stroke={C.warm} strokeDasharray="3 3" />
            <text x={326} y={16 + 17 * 6.6 + 3} fontSize={9} fill={C.life}>
              us
            </text>
            <text x={326} y={14} fontSize={7.5} fill={C.warm}>
              today
            </text>
            <text x={190} y={192} textAnchor="middle" fontSize={8.5} fill={C.dim}>
              every living species sits at the same right-hand edge
            </text>
          </g>
        ) : (
          <g>
            <text x={16} y={14} fontSize={9} fill={C.dim}>
              how long the lineage has existed, millions of years (log scale)
            </text>
            {LINEAGES.map((l, i) => {
              const w = Math.max(((Math.log10(l.myr) + 1) / 4.4) * 340, 3);
              return (
                <g key={l.name}>
                  <rect x={16} y={24 + i * 27} width={340} height={20} rx={3} fill={C.panel} />
                  <rect
                    x={16}
                    y={24 + i * 27}
                    width={w}
                    height={20}
                    rx={3}
                    fill={l.colour}
                    opacity={0.75}
                  />
                  <text x={24} y={38 + i * 27} fontSize={9} fill="rgba(15,20,26,0.95)">
                    {l.name}
                  </text>
                  <text
                    x={356}
                    y={38 + i * 27}
                    textAnchor="end"
                    fontSize={8}
                    fill={l.colour}
                    fontFamily="ui-monospace, monospace"
                  >
                    {l.myr >= 1 ? `${l.myr} Myr` : `${l.myr * 1000} kyr`}
                  </text>
                </g>
              );
            })}
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Drawn properly, humans are a twig — and so is every other living species, because that is what being alive now means. The march-of-progress line is produced by choosing, at each branch, the side that leads to us, and discarding everything else. Draw the same line to a hummingbird and it is equally continuous and equally arbitrary.'
          : 'Anatomically modern humans have existed for roughly 300,000 years. Sharks in some form for over 400 million. Being newly arrived is not a criticism, but it should discourage conclusions about endpoints — and human populations are still evolving: lactase persistence, high-altitude adaptation and malaria resistance all spread within the last ten thousand years. There is no biological sense in which a lineage can be final short of extinction.'}
      </Note>
    </Stack>
  );
}
