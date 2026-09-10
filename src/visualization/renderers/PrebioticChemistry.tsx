import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * What has actually been made from scratch, and what has not.
 *
 * The honest structure for this subject is a ledger rather than a pathway
 * diagram. Drawing arrows from simple molecules to a cell would imply a route
 * exists; what exists is a set of successful fragments with gaps between them,
 * and the gaps are marked here as gaps.
 */

interface Step {
  readonly name: string;
  readonly status: 'done' | 'partial' | 'gap';
  readonly detail: string;
}

const STEPS: readonly Step[] = [
  {
    name: 'Amino acids',
    status: 'done',
    detail:
      'Miller and Urey made them in 1953 by sparking a mixture of methane, ammonia, hydrogen and water. Reanalysis of the original sealed vials in 2008 found more than twenty amino acids. They also arrive ready-made on carbonaceous meteorites, so their availability on early Earth is not in question — even though the specific atmosphere Miller used is now thought to be wrong.',
  },
  {
    name: 'Sugars',
    status: 'partial',
    detail:
      'The formose reaction makes sugars from formaldehyde, but it produces a messy mixture in which ribose is a minor component, and it destroys its own products. Ways of stabilising and selecting ribose have been demonstrated — borate minerals help — but the problem is not considered solved.',
  },
  {
    name: 'Nucleobases',
    status: 'done',
    detail:
      'Adenine forms from concentrated hydrogen cyanide, a result from 1961 that still stands. The other bases have plausible routes, and several have been found on meteorites.',
  },
  {
    name: 'Complete nucleotides',
    status: 'done',
    detail:
      'Long the hardest step, because joining a base to a sugar to a phosphate does not work well one piece at a time. Powner, Sutherland and colleagues solved it in 2009 by building pyrimidine nucleotides along a completely different route that never assembles the pieces separately. A genuine breakthrough.',
  },
  {
    name: 'Long RNA chains',
    status: 'partial',
    detail:
      'Nucleotides can be polymerised on mineral surfaces and in freeze–thaw cycles, reaching tens of units. Getting reliably to the hundreds that a functional ribozyme needs, without enzymes, has not been achieved.',
  },
  {
    name: 'Self-replicating RNA',
    status: 'gap',
    detail:
      'The central unsolved problem. Laboratory-evolved ribozymes can copy templates, and the best now exceed their own length under specific conditions — but not with the fidelity and generality that a closed self-replicating cycle requires. Nobody has made one.',
  },
  {
    name: 'The whole route to a cell',
    status: 'gap',
    detail:
      'No demonstrated pathway runs from simple molecules to a living cell. What exists is a set of successful fragments under differing and sometimes incompatible conditions. Presenting this as a solved problem would misrepresent the field badly.',
  },
];

const COLOURS = { done: C.life, partial: C.warm, gap: C.hot } as const;
const LABELS = {
  done: 'demonstrated',
  partial: 'partly demonstrated',
  gap: 'not demonstrated',
} as const;

export default function PrebioticChemistry(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(5);
  const step = STEPS[Math.min(pick, STEPS.length - 1)];
  const ROW = 24;

  return (
    <Stack>
      <Figure height={26 + STEPS.length * ROW + 8}>
        <text x={8} y={12} fontSize={9} fill={C.dim}>
          what laboratory chemistry has achieved — tap a row
        </text>
        {STEPS.map((s, i) => (
          <g key={s.name} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
            <rect
              x={6}
              y={20 + i * ROW}
              width={368}
              height={ROW - 4}
              rx={3}
              fill={i === pick ? 'rgba(148,162,192,0.16)' : C.panel}
            />
            <circle cx={20} cy={30 + i * ROW} r={4.6} fill={COLOURS[s.status]} />
            <text x={34} y={33 + i * ROW} fontSize={9.5} fill="rgba(233,238,247,0.95)">
              {s.name}
            </text>
            <text x={368} y={33 + i * ROW} textAnchor="end" fontSize={8} fill={COLOURS[s.status]}>
              {LABELS[s.status]}
            </text>
          </g>
        ))}
      </Figure>

      <Note>
        {step ? (
          <>
            <strong>
              {step.name} — {LABELS[step.status]}.
            </strong>{' '}
            {step.detail}
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
