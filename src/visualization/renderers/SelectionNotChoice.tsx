import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Two accounts of the same outcome, side by side.
 *
 * The left panel is the story people carry: nature notices what is needed and
 * provides it. The right panel is the mechanism. Both end with the same
 * population, which is exactly why the wrong version survives — it predicts
 * correctly and explains wrongly.
 */

const VIEWS = ['The intuition', 'What happens'] as const;

export default function SelectionNotChoice(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(1);

  return (
    <Stack>
      <Figure height={188}>
        {view === 0 ? (
          <g>
            <ellipse
              cx={190}
              cy={44}
              rx={70}
              ry={22}
              fill="rgba(201,168,255,0.18)"
              stroke={C.deep}
              strokeDasharray="4 3"
            />
            <text x={190} y={48} textAnchor="middle" fontSize={10} fill={C.deep}>
              “Nature”
            </text>
            <path d="M190,68 L190,96" stroke={C.deep} strokeWidth={1.6} />
            <path d="M190,98 l-4,-8 l8,0 z" fill={C.deep} />
            <text x={190} y={86} textAnchor="middle" fontSize={8} fill={C.deep} />
            <text x={190} y={116} textAnchor="middle" fontSize={9.5} fill="rgba(233,238,247,0.9)">
              sees that dark moths are needed
            </text>
            <text x={190} y={134} textAnchor="middle" fontSize={9.5} fill="rgba(233,238,247,0.9)">
              and selects them
            </text>
            <text x={190} y={166} textAnchor="middle" fontSize={9} fill={C.hot}>
              there is no such agent, and no such step
            </text>
          </g>
        ) : (
          <g>
            <text x={20} y={26} fontSize={9} fill={C.dim}>
              moths already vary — nothing new appears
            </text>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <circle key={i} cx={40 + i * 40} cy={48} r={9} fill={i < 3 ? '#3a3f4a' : '#d8d8dc'} />
            ))}
            <text x={20} y={82} fontSize={9} fill={C.dim}>
              soot darkens the trees; pale moths are visible to birds
            </text>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <g key={`b${i}`}>
                <circle
                  cx={40 + i * 40}
                  cy={106}
                  r={9}
                  fill={i < 3 ? '#3a3f4a' : '#d8d8dc'}
                  opacity={i < 3 ? 1 : 0.25}
                />
                {i >= 3 ? (
                  <text x={40 + i * 40} y={110} textAnchor="middle" fontSize={10} fill={C.hot}>
                    ✕
                  </text>
                ) : null}
              </g>
            ))}
            <text x={20} y={140} fontSize={9} fill={C.dim}>
              the survivors have offspring
            </text>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <circle
                key={`n${i}`}
                cx={40 + i * 40}
                cy={162}
                r={9}
                fill={i < 6 ? '#3a3f4a' : '#d8d8dc'}
              />
            ))}
          </g>
        )}
      </Figure>

      <ToggleRow label="Account" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'This version has a chooser in it: something that recognises a need and acts on it. It is how almost everyone first understands natural selection, and it is wrong in a way that matters — because it implies foresight, and foresight would predict a completely different fossil record.'
          : 'The population already contained dark moths before the soot arrived; industrial pollution did not create them. Birds ate the ones they could see. The survivors bred. The proportion changed. Nothing at any point evaluated, decided or intended — and the outcome is identical to what the intuitive version predicts, which is exactly why the intuitive version is so hard to dislodge.'}
      </Note>
    </Stack>
  );
}
