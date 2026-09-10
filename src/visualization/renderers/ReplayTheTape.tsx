import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The replay experiment, as actually performed.
 *
 * Gould's thought experiment became a real one when Lenski froze samples every
 * 500 generations and could restart from any point. The figure shows what
 * happened: one population out of twelve gained a new ability, and replays from
 * late samples reproduced it while replays from early ones did not.
 */

const VIEWS = ['Twelve populations', 'Replaying the tape'] as const;

export default function ReplayTheTape(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={186}>
        {view === 0 ? (
          <g>
            <text x={16} y={16} fontSize={9} fill={C.dim}>
              twelve identical populations of E. coli, same conditions, 30 years
            </text>
            {Array.from({ length: 12 }, (_, i) => {
              const special = i === 5;
              const y = 32 + i * 12.5;
              return (
                <g key={i}>
                  <line
                    x1={26}
                    y1={y}
                    x2={330}
                    y2={y}
                    stroke={special ? C.life : 'rgba(148,162,192,0.45)'}
                    strokeWidth={special ? 2.2 : 1.3}
                  />
                  {special ? (
                    <>
                      <circle cx={244} cy={y} r={4} fill={C.life} />
                      <text x={336} y={y + 3} fontSize={8} fill={C.life}>
                        Ara-3
                      </text>
                    </>
                  ) : null}
                </g>
              );
            })}
            <text x={244} y={190} textAnchor="middle" fontSize={8.5} fill={C.life}>
              at ~31,500 generations, one population learned to eat citrate
            </text>
          </g>
        ) : (
          <g>
            <text x={16} y={16} fontSize={9} fill={C.dim}>
              restarting from frozen samples
            </text>
            {[
              ['from generation 5,000', 0, C.hot],
              ['from generation 15,000', 0, C.hot],
              ['from generation 20,000', 0.3, C.warm],
              ['from generation 30,000', 0.8, C.life],
            ].map(([label, rate, colour], i) => (
              <g key={label as string}>
                <text x={20} y={44 + i * 34} fontSize={8.5} fill={C.dim}>
                  {label as string}
                </text>
                <rect
                  x={190}
                  y={34 + i * 34}
                  width={160}
                  height={14}
                  rx={7}
                  fill="rgba(148,162,192,0.18)"
                />
                <rect
                  x={190}
                  y={34 + i * 34}
                  width={Math.max(160 * (rate as number), 3)}
                  height={14}
                  rx={7}
                  fill={colour as string}
                />
                <text
                  x={356}
                  y={45 + i * 34}
                  textAnchor="end"
                  fontSize={7.5}
                  fill={colour as string}
                >
                  {(rate as number) === 0 ? 'never' : 'sometimes'}
                </text>
              </g>
            ))}
            <text x={190} y={180} textAnchor="middle" fontSize={8.5} fill={C.warm}>
              history mattered: only late samples could get there
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Richard Lenski started twelve identical populations of E. coli in 1988 and has propagated them daily ever since — over 75,000 generations. Eleven of them adapted in broadly parallel ways: bigger cells, faster growth, similar genes changing. One did something none of the others did. After about 31,500 generations, Ara-3 evolved the ability to use citrate as a carbon source in the presence of oxygen — something E. coli is essentially defined by not doing.'
          : 'Because samples were frozen every 500 generations, the tape could actually be replayed. Restarts from before roughly generation 20,000 never produced citrate use, however many replicates were run. Restarts from later samples produced it repeatedly. Something had happened in the interim that made the innovation reachable — a potentiating mutation with no visible effect of its own. That is contingency demonstrated rather than argued: the same population, the same conditions, and an outcome that depended on history. It is also a small system over a short time, and how far it scales to four billion years is exactly what Gould and Conway Morris disagreed about.'}
      </Note>
    </Stack>
  );
}
