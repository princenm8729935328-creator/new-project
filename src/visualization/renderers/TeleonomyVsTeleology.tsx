import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Two arrows of causation, drawn in opposite directions.
 *
 * The distinction between teleonomy and teleology is entirely about which way
 * the arrow points — from past events, or from a future goal. Drawing it that
 * way makes a distinction that is hard to state in words almost trivial.
 */

const VIEWS = ['What actually happens', 'What the language implies'] as const;

export default function TeleonomyVsTeleology(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={182}>
        <rect x={20} y={62} width={92} height={44} rx={5} fill={C.panel} />
        <text x={66} y={82} textAnchor="middle" fontSize={9} fill={C.dim}>
          past
        </text>
        <text x={66} y={96} textAnchor="middle" fontSize={8} fill={C.faint}>
          who survived
        </text>

        <rect x={144} y={62} width={92} height={44} rx={5} fill="rgba(79,224,192,0.16)" />
        <text x={190} y={82} textAnchor="middle" fontSize={9} fill={C.life}>
          now
        </text>
        <text x={190} y={96} textAnchor="middle" fontSize={8} fill={C.faint}>
          a heart that pumps
        </text>

        <rect x={268} y={62} width={92} height={44} rx={5} fill={C.panel} />
        <text x={314} y={82} textAnchor="middle" fontSize={9} fill={C.dim}>
          future
        </text>
        <text x={314} y={96} textAnchor="middle" fontSize={8} fill={C.faint}>
          circulating blood
        </text>

        {view === 0 ? (
          <g>
            <line x1={116} y1={84} x2={136} y2={84} stroke={C.life} strokeWidth={2.4} />
            <path d="M140,84 l-7,-4 l0,8 z" fill={C.life} />
            <line x1={240} y1={84} x2={260} y2={84} stroke={C.life} strokeWidth={2.4} />
            <path d="M264,84 l-7,-4 l0,8 z" fill={C.life} />
            <text x={190} y={40} textAnchor="middle" fontSize={9} fill={C.life}>
              causation runs forward
            </text>
            {/* Two elements, not one wrapped string: SVG text does not wrap,
                so the single line ran past both edges of the figure. */}
            <text x={190} y={140} textAnchor="middle" fontSize={8.5} fill={C.dim}>
              the heart has its function because of what happened before,
            </text>
            <text x={190} y={152} textAnchor="middle" fontSize={8.5} fill={C.dim}>
              not because of what it will do
            </text>
          </g>
        ) : (
          <g>
            <line
              x1={264}
              y1={84}
              x2={244}
              y2={84}
              stroke={C.hot}
              strokeWidth={2.4}
              strokeDasharray="4 3"
            />
            <path d="M240,84 l7,-4 l0,8 z" fill={C.hot} />
            <text x={190} y={40} textAnchor="middle" fontSize={9} fill={C.hot}>
              “evolution developed a heart in order to circulate blood”
            </text>
            <text x={190} y={146} textAnchor="middle" fontSize={8.5} fill={C.hot}>
              this arrow points backwards from a goal — and no such arrow exists
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="Account" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Ernst Mayr called this teleonomy: apparent purposiveness produced by a mechanism with no purposes. It is perfectly correct to say a heart is for pumping blood — the function is real, and it is entirely explained by the fact that ancestors whose hearts pumped better left more descendants. Nothing had to want a heart or foresee that one would be useful.'
          : 'The shorthand is convenient and technically wrong, and it becomes a problem when it is the only version someone has heard, because it produces a picture of evolution as an agent making decisions. A process with foresight would leave a very different record: no vertebrate blind spot, no nerve running down a giraffe’s neck and back up, and far fewer extinctions from conditions a population’s existing variation could not cover.'}
      </Note>
    </Stack>
  );
}
