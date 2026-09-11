import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * What can be projected from measured processes, and what cannot.
 *
 * Sorting claims into two columns is the honest form here. A figure that
 * extrapolated a trend would be doing exactly the thing the topic warns
 * against.
 */

interface Claim {
  readonly key: string;
  readonly projectable: boolean;
  readonly detail: string;
}

const CLAIMS: readonly Claim[] = [
  {
    key: 'Populations keep mixing',
    projectable: true,
    detail:
      'Gene flow between previously separated populations is higher than at any point in human history and shows no sign of reversing. The effect is homogenising: differences between populations will continue to decline.',
  },
  {
    key: 'Drift continues',
    projectable: true,
    detail:
      'Random change in which variants get passed on operates in every finite population, with no exceptions and no dependence on anything about the environment.',
  },
  {
    key: 'Pathogens keep selecting',
    projectable: true,
    detail:
      'Infectious disease remains the strongest measured pressure on human genomes, and pathogens evolve continuously. This is the safest single prediction on the list.',
  },
  {
    key: 'Local adaptation where conditions are extreme',
    projectable: true,
    detail:
      'Where populations remain under sustained extreme conditions, adaptation will continue at roughly the rates observed for altitude and diet — thousands of years for a detectable change.',
  },
  {
    key: 'Larger brains',
    projectable: false,
    detail:
      'A staple of popular illustration with nothing behind it. Brain size has if anything declined slightly over the last ten thousand years, and there is no current selection pressure identified that would push it upward.',
  },
  {
    key: 'Weaker bodies',
    projectable: false,
    detail:
      'Extrapolation of a trend, and evolution does not extrapolate trends. Reduced skeletal robusticity over the Holocene tracks changes in physical activity, which are environmental and reversible within a generation.',
  },
  {
    key: 'The species splitting',
    projectable: false,
    detail:
      'Speciation requires sustained reproductive isolation. Human populations are becoming less isolated, not more. A space-colonisation scenario is the only one usually offered, and it is a scenario rather than a projection.',
  },
  {
    key: 'Directed genetic change',
    projectable: false,
    detail:
      'Direct modification of the human germline is now technically possible. Whether and how it is used is a matter of law, ethics and politics rather than biology — and it could uncouple human genetic change from natural selection entirely. That is a genuinely new situation in the four-billion-year history this atlas covers, and it makes projection harder rather than easier.',
  },
];

export default function EvolutionaryFutures(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const c = CLAIMS[Math.min(pick, CLAIMS.length - 1)];
  if (!c) return null;

  return (
    <Stack>
      <Figure height={192}>
        <text x={96} y={18} textAnchor="middle" fontSize={9} fill={C.life}>
          can be projected
        </text>
        <text x={284} y={18} textAnchor="middle" fontSize={9} fill={C.hot}>
          cannot
        </text>
        <line x1={190} y1={26} x2={190} y2={182} stroke="rgba(148,162,192,0.2)" />

        {CLAIMS.map((x, i) => {
          const col = CLAIMS.filter((y) => y.projectable === x.projectable);
          const row = col.indexOf(x);
          const y = 44 + row * 34;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={x.projectable ? 12 : 198}
                y={y - 13}
                width={170}
                height={26}
                rx={5}
                fill={
                  active
                    ? x.projectable
                      ? 'rgba(79,224,192,0.16)'
                      : 'rgba(255,143,110,0.14)'
                    : 'rgba(148,162,192,0.07)'
                }
                stroke={active ? (x.projectable ? C.life : C.hot) : 'transparent'}
              />
              <text
                x={x.projectable ? 22 : 208}
                y={y + 3}
                fontSize={7.5}
                fill={active ? (x.projectable ? C.life : C.hot) : C.dim}
              >
                {x.key.length > 30 ? `${x.key.slice(0, 29)}…` : x.key}
              </text>
            </g>
          );
        })}
      </Figure>

      <ToggleRow
        label="Column"
        options={['Projectable', 'Not projectable']}
        value={c.projectable ? 0 : 1}
        onChange={(i) => {
          const idx = CLAIMS.findIndex((x) => x.projectable === (i === 0));
          if (idx >= 0) setPick(idx);
        }}
      />

      <Note>
        <strong>{c.key}.</strong> {c.detail} The dividing line is not arbitrary. Projection is
        feasible where the selective regime is stable and measurable; it is not feasible where the
        regime depends on technological and social trajectories, and those are now the dominant
        determinants of human selection pressures. Predicting human evolution therefore means
        predicting our societies over the timescales evolution works on, which nobody can do. One
        further point applies to everything in the right-hand column: the idea of a future
        &ldquo;higher&rdquo; human assumes evolution has a direction it is travelling along. It does
        not. The same applies backwards — Homo sapiens is not the endpoint of a process that was
        heading here, and extinction is the normal outcome for a species, with no principle in
        evolutionary biology exempting ours.
      </Note>
    </Stack>
  );
}
