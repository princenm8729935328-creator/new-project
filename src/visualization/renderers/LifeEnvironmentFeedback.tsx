import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Four real biological feedbacks, each labelled with how well established it is.
 *
 * The honesty is in the confidence bar. The Amazon moisture loop is well
 * documented; the plankton–cloud loop is real chemistry whose planetary
 * magnitude has been argued about for three decades and is now thought modest.
 * Presenting them as equally solid would be the easy mistake here.
 */

interface Loop {
  readonly key: string;
  readonly steps: readonly string[];
  readonly sign: '+' | '−';
  readonly confidence: number;
  readonly detail: string;
}

const LOOPS: readonly Loop[] = [
  {
    key: 'Forest rain',
    sign: '+',
    confidence: 0.85,
    steps: ['forest', 'transpires water', 'rain falls downwind', 'forest survives'],
    detail:
      'The Amazon recycles a large fraction of its own rainfall: water transpired by trees falls again inland. The loop is self-reinforcing in both directions — remove enough forest and the remainder gets drier, which is the basis of concern about a savannisation threshold. The recycling is well measured; where exactly the threshold lies is not.',
  },
  {
    key: 'Plankton and clouds',
    sign: '−',
    confidence: 0.35,
    steps: [
      'plankton bloom',
      'release sulphur compound',
      'cloud droplets seed',
      'less sunlight, cooler',
    ],
    detail:
      'Marine plankton release dimethyl sulphide, which oxidises to particles that can seed cloud droplets. The chemistry is real and measured. Whether it amounts to a significant climate regulator — the CLAW hypothesis, proposed in 1987 — has been argued ever since, and current assessments put the effect as modest and possibly of ambiguous sign.',
  },
  {
    key: 'Peat',
    sign: '+',
    confidence: 0.7,
    steps: ['peat accumulates', 'holds water', 'stays waterlogged', 'decay stays slow'],
    detail:
      'Peat bogs maintain the waterlogged, oxygen-poor conditions that stop their own material decaying, which lets more accumulate. Northern peatlands hold roughly as much carbon as the atmosphere. Drain them, or let them dry, and the loop reverses.',
  },
  {
    key: 'Weathering',
    sign: '−',
    confidence: 0.9,
    steps: ['warming', 'plants and roots weather rock faster', 'CO₂ removed', 'cooling'],
    detail:
      'The best-established stabilising loop, and the reason Earth has stayed habitable while the Sun brightened by roughly a third. Roots and their fungal partners accelerate it substantially compared with bare rock. Its response time is hundreds of thousands of years, which is why it is not relevant to present-day climate on any human timescale.',
  },
];

export default function LifeEnvironmentFeedback(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const loop = LOOPS[Math.min(pick, LOOPS.length - 1)];
  if (!loop) return null;

  const CX = 190;
  const CY = 88;
  const R = 56;
  const colour = loop.sign === '+' ? C.hot : C.life;

  return (
    <Stack>
      <Figure height={190}>
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke={colour}
          strokeWidth={1.3}
          strokeDasharray="4 4"
          opacity={0.45}
        />
        {loop.steps.map((s, i) => {
          const a = -Math.PI / 2 + (i / loop.steps.length) * Math.PI * 2;
          const x = CX + Math.cos(a) * R;
          const y = CY + Math.sin(a) * R;
          return (
            <g key={s}>
              <circle cx={x} cy={y} r={5} fill={colour} />
              <text
                x={x}
                y={y < CY ? y - 10 : y + 16}
                textAnchor="middle"
                fontSize={8}
                fill="rgba(233,238,247,0.92)"
              >
                {s}
              </text>
            </g>
          );
        })}
        <text x={CX} y={CY + 2} textAnchor="middle" fontSize={18} fill={colour}>
          {loop.sign}
        </text>
        <text x={CX} y={CY + 16} textAnchor="middle" fontSize={8} fill={C.dim}>
          {loop.sign === '+' ? 'self-amplifying' : 'self-correcting'}
        </text>

        <text x={20} y={168} fontSize={8.5} fill={C.dim}>
          how well established
        </text>
        <rect x={20} y={174} width={340} height={9} rx={4.5} fill="rgba(148,162,192,0.18)" />
        <rect
          x={20}
          y={174}
          width={Math.max(340 * loop.confidence, 4)}
          height={9}
          rx={4.5}
          fill={loop.confidence > 0.65 ? C.life : loop.confidence > 0.45 ? C.warm : C.hot}
        />
      </Figure>

      <ToggleRow label="Loop" options={LOOPS.map((l) => l.key)} value={pick} onChange={setPick} />

      <Note>{loop.detail}</Note>
    </Stack>
  );
}
