import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Stepper, type Stage } from './lifeKit';

/**
 * The beaver and its pond, which is the standard case because it is the one
 * where the constructed environment obviously outlives the constructor.
 *
 * The last stage is the general point at planetary scale — and carries the
 * warning that a constructed niche is not necessarily a better one.
 */

const STAGES: readonly Stage[] = [
  {
    id: 'stream',
    title: 'A stream',
    detail:
      'Running water, trees along the bank, no still water anywhere. Not obviously beaver habitat.',
    draw: (
      <g>
        <path
          d="M20,110 Q120,92 200,112 T360,104"
          stroke={C.water}
          strokeWidth={10}
          fill="none"
          opacity={0.6}
        />
        {[60, 110, 250, 310].map((x) => (
          <g key={x}>
            <rect x={x} y={54} width={5} height={34} fill={C.rock} />
            <circle cx={x + 2} cy={48} r={12} fill={C.life} opacity={0.55} />
          </g>
        ))}
      </g>
    ),
  },
  {
    id: 'dam',
    title: 'The beaver builds',
    detail:
      'It fells trees and dams the stream. This is not an adaptation to the environment — it is a modification of it, and one that takes considerable effort.',
    draw: (
      <g>
        <path
          d="M20,110 Q120,92 190,104"
          stroke={C.water}
          strokeWidth={10}
          fill="none"
          opacity={0.6}
        />
        <rect x={186} y={76} width={12} height={46} fill={C.rock} />
        <path d="M204,108 T360,104" stroke={C.water} strokeWidth={6} fill="none" opacity={0.4} />
        <ellipse cx={150} cy={74} rx={14} ry={9} fill={C.warm} opacity={0.85} />
        <text x={192} y={140} textAnchor="middle" fontSize={8.5} fill={C.rock}>
          dam
        </text>
      </g>
    ),
  },
  {
    id: 'pond',
    title: 'A pond, and a different world',
    detail:
      'Still water floods the surrounding trees and kills them. Different plants grow. Amphibians, waterfowl and fish arrive. Sediment and nutrients accumulate. The beaver has produced exactly the habitat its anatomy and behaviour suit — and produced it for a great many other species too.',
    draw: (
      <g>
        <ellipse cx={110} cy={104} rx={92} ry={34} fill={C.water} opacity={0.5} />
        <rect x={198} y={72} width={12} height={50} fill={C.rock} />
        {[52, 92, 140].map((x) => (
          <rect key={x} x={x} y={60} width={4} height={24} fill="rgba(148,162,192,0.5)" />
        ))}
        <ellipse cx={110} cy={92} rx={12} ry={8} fill={C.warm} opacity={0.85} />
        {[70, 130, 170].map((x, i) => (
          <circle key={x} cx={x} cy={118 + i * 5} r={3.5} fill={C.life} />
        ))}
        <text x={110} y={152} textAnchor="middle" fontSize={8.5} fill={C.water}>
          flooded trees die; a wetland community arrives
        </text>
      </g>
    ),
  },
  {
    id: 'inherit',
    title: 'The offspring inherit the pond',
    detail:
      'The dam outlasts the beaver that built it. Its offspring inherit not only its genes but its modified environment — and the selection pressures acting on them are pressures their parent created. This second channel is called ecological inheritance, and it is not Lamarckian: nothing acquired is written into DNA. What is passed on is a changed set of conditions.',
    draw: (
      <g>
        <ellipse cx={110} cy={104} rx={92} ry={34} fill={C.water} opacity={0.5} />
        <rect x={198} y={72} width={12} height={50} fill={C.rock} />
        <ellipse cx={92} cy={92} rx={9} ry={6} fill={C.warm} opacity={0.85} />
        <ellipse cx={126} cy={98} rx={9} ry={6} fill={C.warm} opacity={0.85} />
        <text x={110} y={152} textAnchor="middle" fontSize={8.5} fill={C.warm}>
          genes and pond, both inherited
        </text>
      </g>
    ),
  },
  {
    id: 'planet',
    title: 'The same thing at planetary scale',
    detail:
      'Cyanobacteria releasing oxygen is niche construction with the whole atmosphere as the pond. And it is the case that shows constructed niches are not necessarily better ones: the oxygen those bacteria released was lethal to most of the world that existed at the time, including a great deal of life closely related to them.',
    draw: (
      <g>
        <circle cx={190} cy={96} r={54} fill={C.water} opacity={0.5} />
        <circle cx={190} cy={96} r={64} fill="none" stroke={C.life} strokeWidth={5} opacity={0.4} />
        <text x={190} y={100} textAnchor="middle" fontSize={9} fill="#0d1a26">
          Earth
        </text>
        <text x={190} y={176} textAnchor="middle" fontSize={8.5} fill={C.life}>
          an atmosphere rebuilt by its inhabitants
        </text>
      </g>
    ),
  },
];

export default function NicheConstruction(_props: VisualizationProps): ReactNode {
  return <Stepper stages={STAGES} height={172} label="Stage" />;
}
