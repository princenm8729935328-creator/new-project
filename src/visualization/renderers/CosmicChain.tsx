import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The whole chain, with the evidence level marked on every link.
 *
 * A summary figure at the end of a section is dangerous: it smooths a story
 * with very different confidence at different points into one smooth arc. So
 * each link here carries its evidential status, and the second view is the
 * explicit refusal to read the chain as a destination.
 */

const VIEWS = ['The chain', 'What it does not show'] as const;

interface Link {
  readonly text: string;
  readonly status: 'established' | 'inferred' | 'open';
}

const LINKS: readonly Link[] = [
  { text: 'The Universe produced stars', status: 'established' },
  { text: 'Stars produced the elements', status: 'established' },
  { text: 'Earth assembled those elements into chemistry', status: 'established' },
  { text: 'Chemistry eventually produced life', status: 'open' },
  { text: 'Life began evolving', status: 'established' },
  { text: 'One branch became capable of asking where this came from', status: 'inferred' },
];

const COLOUR = { established: C.life, inferred: C.warm, open: C.hot } as const;
const WORD = { established: 'established', inferred: 'inferred', open: 'not understood' } as const;

export default function CosmicChain(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={196}>
        {view === 0 ? (
          <g>
            {LINKS.map((l, i) => (
              <g key={l.text}>
                <circle cx={26} cy={24 + i * 30} r={6} fill={COLOUR[l.status]} />
                {i < LINKS.length - 1 ? (
                  <line
                    x1={26}
                    y1={30 + i * 30}
                    x2={26}
                    y2={48 + i * 30}
                    stroke={C.faint}
                    strokeWidth={1.4}
                  />
                ) : null}
                <text x={44} y={22 + i * 30} fontSize={9} fill="rgba(233,238,247,0.95)">
                  {l.text}
                </text>
                <text x={44} y={33 + i * 30} fontSize={7.5} fill={COLOUR[l.status]}>
                  {WORD[l.status]}
                </text>
              </g>
            ))}
          </g>
        ) : (
          <g>
            <text x={190} y={30} textAnchor="middle" fontSize={9.5} fill={C.dim}>
              the same facts, written the other way round
            </text>
            <rect x={16} y={44} width={348} height={54} rx={4} fill="rgba(148,162,192,0.10)" />
            <text x={26} y={64} fontSize={8.5} fill="rgba(233,238,247,0.92)">
              “The Universe produced stars, and among the outcomes
            </text>
            <text x={26} y={78} fontSize={8.5} fill="rgba(233,238,247,0.92)">
              on one small planet was a species that reconstructs
            </text>
            <text x={26} y={92} fontSize={8.5} fill="rgba(233,238,247,0.92)">
              its own history.”
            </text>
            <text x={190} y={124} textAnchor="middle" fontSize={8.5} fill={C.warm}>
              same facts · no destination
            </text>
            <text x={190} y={152} textAnchor="middle" fontSize={8.5} fill={C.faint}>
              which version feels more natural is a fact about narrative preference
            </text>
            <text x={190} y={166} textAnchor="middle" fontSize={8.5} fill={C.faint}>
              rather than about the evidence
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Every link rests on a different kind of evidence — spectra from distant stars, isotope ratios in ancient rock, the shared genetic code of everything alive, the fossil record, and experiments that have run for decades. Two of the six are not established: how chemistry became life is genuinely unsolved, and the story of how one branch came to ask questions is inferred from fragmentary evidence. Marking those honestly is what keeps a summary from becoming a smooth arc it has not earned.'
          : 'A chain of events that ends with us is not evidence that it was heading for us. Every effect has a chain of causes behind it, and the fact that we can trace ours says nothing about whether it was aimed. What we do have is unusually solid for questions of this scale: that all life on Earth shares an ancestor, that natural selection produces adaptation without design, that the planet and its life have been changing each other for four billion years, and that the elements in your body were made in stars. All of that was unknown two centuries ago.'}
      </Note>
    </Stack>
  );
}
