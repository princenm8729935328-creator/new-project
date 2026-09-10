import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Stepper, type Stage } from './lifeKit';

/**
 * The giant-impact hypothesis, stepped.
 *
 * Drawn as a reconstruction rather than a simulation: real impact models are
 * three-dimensional hydrodynamic calculations, and this is a cartoon of what
 * they produce. The last stage carries the unresolved part — the isotopic
 * similarity between Earth and Moon that the classic version of the model does
 * not naturally explain.
 */

const STAGES: readonly Stage[] = [
  {
    id: 'approach',
    title: 'Theia on a crossing orbit',
    detail:
      'A Mars-sized body — conventionally named Theia — shares the inner Solar System with the young Earth about 4.5 billion years ago, roughly 60 million years after the Solar System formed.',
    draw: (
      <g transform="translate(0,20)">
        <circle cx={128} cy={78} r={38} fill={C.rock} />
        <circle cx={288} cy={54} r={20} fill={C.deep} opacity={0.8} />
        <text x={128} y={132} textAnchor="middle" fontSize={9} fill={C.dim}>
          proto-Earth
        </text>
        <text x={288} y={90} textAnchor="middle" fontSize={9} fill={C.deep}>
          Theia
        </text>
        <path d="M266,60 L182,74" stroke={C.faint} strokeWidth={1.2} strokeDasharray="3 3" />
      </g>
    ),
  },
  {
    id: 'impact',
    title: 'An oblique collision',
    detail:
      'The impact is not head-on. A glancing blow at a few kilometres per second delivers enough energy to melt both bodies and throws a great deal of material into orbit rather than blasting it away entirely.',
    draw: (
      <g transform="translate(0,20)">
        <circle cx={160} cy={78} r={40} fill={C.hot} opacity={0.9} />
        <circle cx={210} cy={58} r={18} fill={C.hot} opacity={0.7} />
        {Array.from({ length: 14 }, (_, i) => (
          <circle
            key={i}
            cx={196 + i * 11}
            cy={44 - Math.sin(i / 2) * 16}
            r={2.4}
            fill={C.warm}
            opacity={0.75}
          />
        ))}
        <text x={190} y={140} textAnchor="middle" fontSize={9} fill={C.dim}>
          both bodies largely melt
        </text>
      </g>
    ),
  },
  {
    id: 'disc',
    title: 'A disc of debris',
    detail:
      'Vaporised and molten rock settles into a hot disc orbiting the battered Earth. Its composition is dominated by mantle material — which is why the Moon has so little iron.',
    draw: (
      <g transform="translate(0,20)">
        <circle cx={190} cy={78} r={36} fill={C.hot} opacity={0.85} />
        <ellipse
          cx={190}
          cy={78}
          rx={140}
          ry={20}
          fill="none"
          stroke="rgba(255,210,127,0.5)"
          strokeWidth={9}
        />
        <text x={190} y={132} textAnchor="middle" fontSize={9} fill={C.warm}>
          debris disc, mostly mantle rock
        </text>
      </g>
    ),
  },
  {
    id: 'moon',
    title: 'The Moon assembles — fast',
    detail:
      'Material in the disc clumps together, and models suggest the bulk of the Moon formed within decades to a century. It began far closer than it is now and has been receding ever since, currently by about 3.8 centimetres a year.',
    draw: (
      <g transform="translate(0,20)">
        <circle cx={150} cy={78} r={34} fill={C.rock} />
        <circle cx={280} cy={70} r={13} fill="rgba(220,220,225,0.85)" />
        <line x1={184} y1={78} x2={267} y2={71} stroke={C.faint} strokeDasharray="3 3" />
        <text x={280} y={98} textAnchor="middle" fontSize={9} fill={C.dim}>
          Moon
        </text>
        <text x={226} y={124} textAnchor="middle" fontSize={8.5} fill={C.faint}>
          orbit then ~10× closer than today
        </text>
      </g>
    ),
  },
  {
    id: 'problem',
    title: 'What the model still struggles with',
    detail:
      'Earth and Moon have almost identical oxygen isotope ratios — far closer than any two Solar System bodies formed in different places. The classic model predicts the Moon should be mostly Theia, and so should look different. Proposed fixes include a much more energetic impact that mixed the two thoroughly, or a Theia that formed at the same distance from the Sun. Neither is settled.',
    draw: (
      <g transform="translate(0,20)">
        <rect x={44} y={40} width={130} height={72} rx={4} fill={C.panel} />
        <rect x={206} y={40} width={130} height={72} rx={4} fill={C.panel} />
        <text x={109} y={62} textAnchor="middle" fontSize={9.5} fill={C.water}>
          Earth
        </text>
        <text x={271} y={62} textAnchor="middle" fontSize={9.5} fill="rgba(220,220,225,0.9)">
          Moon
        </text>
        <text
          x={109}
          y={84}
          textAnchor="middle"
          fontSize={9}
          fill={C.dim}
          fontFamily="ui-monospace, monospace"
        >
          δ¹⁷O ≈ 0
        </text>
        <text
          x={271}
          y={84}
          textAnchor="middle"
          fontSize={9}
          fill={C.dim}
          fontFamily="ui-monospace, monospace"
        >
          δ¹⁷O ≈ 0
        </text>
        <text x={190} y={106} textAnchor="middle" fontSize={8.5} fill={C.hot}>
          indistinguishable — the open problem
        </text>
        <text x={190} y={140} textAnchor="middle" fontSize={8.5} fill={C.faint}>
          Mars and asteroids differ measurably from both
        </text>
      </g>
    ),
  },
];

export default function MoonFormingImpact(_props: VisualizationProps): ReactNode {
  return <Stepper stages={STAGES} height={172} label="Stage" />;
}
