import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The same deposit, read two ways by two careful teams.
 *
 * Rather than adjudicating, the figure puts the criteria in a column and shows
 * how each side scores them. That is what an unresolved archaeological dispute
 * actually looks like, and it is more useful than a verdict.
 */

interface Criterion {
  readonly key: string;
  readonly forBurial: string;
  readonly against: string;
}

const CRITERIA: readonly Criterion[] = [
  {
    key: 'Pit geometry',
    forBurial:
      'Re-excavation found a depression whose shape and sharp edges are difficult to produce by natural processes in this sediment.',
    against:
      'Natural depressions occur in cave floors, and a body settling into one can modify its outline. The 1908 excavation recorded too little to settle the original form.',
  },
  {
    key: 'Sediment fill',
    forBurial:
      'The material filling the depression differs from the surrounding deposit, as it would if it had been dug out and put back.',
    against:
      'The sedimentary distinction is not clear enough to carry the weight placed on it, and post-depositional processes can produce similar contrasts.',
  },
  {
    key: 'Preservation',
    forBurial:
      'The skeleton is substantially complete and articulated, with no carnivore damage — which means it was covered very quickly.',
    against:
      'Rapid covering is not the same as a grave. A roof collapse, a sediment slump, or a body in a natural hollow that filled all produce the same result without anyone intending it.',
  },
  {
    key: 'Repetition',
    forBurial:
      'Several Neanderthal skeletons across different sites are similarly complete, which is hard to explain as repeated coincidence.',
    against:
      'Complete skeletons are what gets excavated and published; scattered remains are under-reported. The apparent pattern may partly reflect that.',
  },
];

export default function BurialCriteria(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const [side, setSide] = useState(0);
  const c = CRITERIA[Math.min(pick, CRITERIA.length - 1)];
  if (!c) return null;

  return (
    <Stack>
      <Figure height={190}>
        <text x={14} y={16} fontSize={9} fill={C.dim}>
          La Chapelle-aux-Saints, excavated 1908, re-excavated 2011–14
        </text>
        <rect x={44} y={70} width={292} height={52} rx={6} fill="rgba(197,143,106,0.16)" />
        <path
          d="M120,70 C120,104 140,116 190,116 C240,116 260,104 260,70"
          fill={side === 0 ? 'rgba(79,224,192,0.14)' : 'rgba(255,143,110,0.12)'}
          stroke={side === 0 ? C.life : C.hot}
          strokeWidth={1.6}
          strokeDasharray={side === 0 ? undefined : '4 3'}
        />
        <ellipse cx={190} cy={100} rx={42} ry={11} fill="rgba(233,238,247,0.25)" />
        <text x={190} y={104} textAnchor="middle" fontSize={7.5} fill="rgba(233,238,247,0.8)">
          skeleton
        </text>
        <text x={190} y={62} textAnchor="middle" fontSize={8} fill={side === 0 ? C.life : C.hot}>
          {side === 0 ? 'a deliberately dug pit' : 'a natural depression, filled'}
        </text>

        {CRITERIA.map((x, i) => {
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={14 + i * 90}
                y={140}
                width={82}
                height={24}
                rx={4}
                fill={
                  active
                    ? side === 0
                      ? 'rgba(79,224,192,0.16)'
                      : 'rgba(255,143,110,0.14)'
                    : 'rgba(148,162,192,0.08)'
                }
                stroke={active ? (side === 0 ? C.life : C.hot) : 'transparent'}
              />
              <text
                x={55 + i * 90}
                y={155}
                textAnchor="middle"
                fontSize={7.5}
                fill={active ? (side === 0 ? C.life : C.hot) : C.faint}
              >
                {x.key}
              </text>
            </g>
          );
        })}
        <text x={14} y={182} fontSize={7.5} fill={C.faint}>
          schematic section; both readings are of the same deposit
        </text>
      </Figure>

      <ToggleRow
        label="Reading"
        options={['Intentional burial', 'Natural deposit']}
        value={side}
        onChange={setSide}
      />

      <Note>
        <strong>{c.key}.</strong> {side === 0 ? c.forBurial : c.against} Tap a criterion below the
        figure to move between them, and switch the reading above to hear the other side. Both
        papers are careful and neither has persuaded the other. It is worth knowing this before
        reading confident claims about prehistoric belief — and worth remembering the flower burial
        at Shanidar, where pollen clustered around a Neanderthal skeleton was interpreted as
        offerings and was most likely introduced by burrowing rodents that store flower heads. That
        story still circulates decades after the evidence was reinterpreted.
      </Note>
    </Stack>
  );
}
