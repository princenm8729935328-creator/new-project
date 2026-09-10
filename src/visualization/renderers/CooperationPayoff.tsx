import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Why cooperation is a puzzle, and the three standard resolutions.
 *
 * The payoff matrix is the puzzle stated precisely: defecting is better
 * whatever the other does, yet cooperation is everywhere. Rather than assert
 * that it resolves, the figure names the three mechanisms and what each
 * requires — because each has a different signature in nature.
 */

const VIEWS = ['The problem', 'Kinship', 'Repetition', 'Reputation'] as const;

export default function CooperationPayoff(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  const notes = [
    'Whatever the other individual does, defecting pays better for you. If they cooperate you gain 5 instead of 3; if they defect you gain 1 instead of 0. So a purely self-interested player defects — and two of them end up with 1 each instead of the 3 each they could have had. This is the puzzle: cooperation is common in nature, and this matrix says it should not be.',
    'Helping a relative propagates copies of your own genes. Hamilton’s rule states the condition precisely: help when the benefit to the recipient, multiplied by how closely related you are, exceeds the cost to you. This is why sterile worker bees make sense — they share three quarters of their genes with their sisters — and why parental care is ubiquitous.',
    'When the same two individuals meet repeatedly, defecting today costs you cooperation tomorrow. Strategies that cooperate initially and then copy what the other did — tit-for-tat and its relatives — do well in tournaments and in models. Vampire bats regurgitate blood for roost-mates that failed to feed, and preferentially for those that have fed them before.',
    'In groups where behaviour is observed, a reputation for defecting is costly even with individuals you have never met. This requires recognising individuals and remembering what they did, which is cognitively demanding — and is one of the proposed drivers of large brains in social species.',
  ];

  return (
    <Stack>
      <Figure height={186}>
        {view === 0 ? (
          <g>
            <text x={190} y={20} textAnchor="middle" fontSize={9} fill={C.dim}>
              your payoff, given what each of you does
            </text>
            <text x={148} y={44} textAnchor="middle" fontSize={8.5} fill={C.faint}>
              they cooperate
            </text>
            <text x={272} y={44} textAnchor="middle" fontSize={8.5} fill={C.faint}>
              they defect
            </text>
            <text x={70} y={78} textAnchor="middle" fontSize={8.5} fill={C.faint}>
              you cooperate
            </text>
            <text x={70} y={126} textAnchor="middle" fontSize={8.5} fill={C.faint}>
              you defect
            </text>
            {[
              [148, 78, 3, C.life],
              [272, 78, 0, C.hot],
              [148, 126, 5, C.warm],
              [272, 126, 1, C.hot],
            ].map(([x, y, v, colour], i) => (
              <g key={i}>
                <rect
                  x={(x as number) - 44}
                  y={(y as number) - 20}
                  width={88}
                  height={38}
                  rx={4}
                  fill={C.panel}
                />
                <text
                  x={x as number}
                  y={(y as number) + 6}
                  textAnchor="middle"
                  fontSize={16}
                  fill={colour as string}
                >
                  {v as number}
                </text>
              </g>
            ))}
            <text x={190} y={168} textAnchor="middle" fontSize={9} fill={C.hot}>
              defecting is better in both columns — yet cooperation is everywhere
            </text>
          </g>
        ) : (
          <g>
            <text x={190} y={30} textAnchor="middle" fontSize={11} fill={C.life}>
              {VIEWS[view]}
            </text>
            {view === 1 ? (
              <g>
                <text
                  x={190}
                  y={72}
                  textAnchor="middle"
                  fontSize={13}
                  fill={C.warm}
                  fontFamily="ui-monospace, monospace"
                >
                  r × B &gt; C
                </text>
                <text x={190} y={94} textAnchor="middle" fontSize={8.5} fill={C.dim}>
                  relatedness × benefit to them &gt; cost to you
                </text>
                <text x={190} y={126} textAnchor="middle" fontSize={8.5} fill={C.faint}>
                  siblings r = 0.5 · cousins r = 0.125 · bee sisters r = 0.75
                </text>
              </g>
            ) : view === 2 ? (
              <g>
                {[0, 1, 2, 3, 4].map((i) => (
                  <g key={i}>
                    <circle
                      cx={70 + i * 60}
                      cy={82}
                      r={13}
                      fill={i === 2 ? C.hot : C.life}
                      opacity={0.8}
                    />
                    <text x={70 + i * 60} y={86} textAnchor="middle" fontSize={9} fill="#0f1a17">
                      {i === 2 ? 'D' : 'C'}
                    </text>
                    <text x={70 + i * 60} y={110} textAnchor="middle" fontSize={7.5} fill={C.faint}>
                      round {i + 1}
                    </text>
                  </g>
                ))}
                <text x={190} y={136} textAnchor="middle" fontSize={8.5} fill={C.warm}>
                  defecting once costs cooperation in every round after
                </text>
              </g>
            ) : (
              <g>
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const a = (i / 6) * Math.PI * 2;
                  return (
                    <circle
                      key={i}
                      cx={190 + Math.cos(a) * 46}
                      cy={86 + Math.sin(a) * 34}
                      r={10}
                      fill={i === 3 ? C.hot : C.life}
                      opacity={0.8}
                    />
                  );
                })}
                <text x={190} y={146} textAnchor="middle" fontSize={8.5} fill={C.warm}>
                  everyone can see what everyone did
                </text>
              </g>
            )}
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>{notes[view]}</Note>
    </Stack>
  );
}
