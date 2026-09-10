import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The two shapes every feedback loop has, with real examples in each.
 *
 * Readers meet "positive feedback" and hear "good". Drawing the loop as a ring
 * with an explicit sign on the return arrow is the cheapest way to fix that:
 * positive means self-amplifying, and a self-amplifying loop is exactly what
 * takes a planet from temperate to frozen.
 */

interface Loop {
  readonly key: string;
  readonly sign: '+' | '−';
  readonly nodes: readonly string[];
  readonly detail: string;
  readonly colour: string;
}

const LOOPS: readonly Loop[] = [
  {
    key: 'Ice–albedo',
    sign: '+',
    nodes: ['cooling', 'more ice', 'more sunlight reflected', 'less heat absorbed'],
    colour: C.water,
    detail:
      'Self-amplifying. Each turn of the loop makes the next turn stronger, so a small nudge grows into a large change. This is the mechanism behind Snowball Earth, and it runs equally hard in the other direction when ice retreats.',
  },
  {
    key: 'Weathering',
    sign: '−',
    nodes: ['warming', 'faster rock weathering', 'CO₂ removed from air', 'less greenhouse warming'],
    colour: C.life,
    detail:
      'Self-correcting. Each turn opposes the change that started it, so the system settles rather than running away. This is why Earth has stayed habitable for four billion years while the Sun brightened by roughly a third — though it acts over hundreds of thousands of years, not decades.',
  },
  {
    key: 'Permafrost',
    sign: '+',
    nodes: ['warming', 'permafrost thaws', 'methane and CO₂ released', 'more greenhouse warming'],
    colour: C.hot,
    detail:
      'Self-amplifying, and currently the subject of a great deal of research. The direction of the effect is not in doubt; its magnitude and timing under present warming are genuinely uncertain, and estimates in the literature vary widely.',
  },
  {
    key: 'Predator–prey',
    sign: '−',
    nodes: ['more prey', 'predators increase', 'prey eaten faster', 'fewer prey'],
    colour: C.warm,
    detail:
      'Self-correcting, but with a delay — predators take time to respond — and a delayed negative feedback oscillates rather than settling. That is why lynx and hare numbers cycle instead of holding steady.',
  },
];

export default function FeedbackLoops(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const loop = LOOPS[Math.min(pick, LOOPS.length - 1)];
  if (!loop) return null;

  const CX = 190;
  const CY = 88;
  const R = 58;
  const positions = loop.nodes.map((_, i) => {
    const a = -Math.PI / 2 + (i / loop.nodes.length) * Math.PI * 2;
    return [CX + Math.cos(a) * R, CY + Math.sin(a) * R] as const;
  });

  return (
    <Stack>
      <Figure height={192}>
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke={loop.colour}
          strokeWidth={1.4}
          opacity={0.4}
          strokeDasharray="4 4"
        />
        {positions.map((p, i) => {
          const next = positions[(i + 1) % positions.length];
          if (!next) return null;
          const mx = (p[0] + next[0]) / 2;
          const my = (p[1] + next[1]) / 2;
          const dx = next[0] - p[0];
          const dy = next[1] - p[1];
          const len = Math.hypot(dx, dy) || 1;
          return (
            <path
              key={i}
              d={`M${mx},${my} l${(-dx / len) * 7 - (dy / len) * 4},${(-dy / len) * 7 + (dx / len) * 4} M${mx},${my} l${(-dx / len) * 7 + (dy / len) * 4},${(-dy / len) * 7 - (dx / len) * 4}`}
              stroke={loop.colour}
              strokeWidth={1.6}
              fill="none"
            />
          );
        })}
        {positions.map((p, i) => {
          // Labels are placed radially outward. Nodes on the horizontal get a
          // side anchor rather than being centred underneath, which is what
          // used to collide with the caption at the centre of the ring.
          const onSide = Math.abs(p[1] - CY) < 12;
          const left = p[0] < CX;
          return (
            <g key={loop.nodes[i]}>
              <circle cx={p[0]} cy={p[1]} r={5} fill={loop.colour} />
              <text
                x={onSide ? p[0] + (left ? -9 : 9) : p[0]}
                y={onSide ? p[1] + 3 : p[1] + (p[1] < CY ? -11 : 17)}
                textAnchor={onSide ? (left ? 'end' : 'start') : 'middle'}
                fontSize={8.5}
                fill="rgba(233,238,247,0.95)"
              >
                {loop.nodes[i]}
              </text>
            </g>
          );
        })}
        <text x={CX} y={CY + 8} textAnchor="middle" fontSize={22} fill={loop.colour}>
          {loop.sign}
        </text>
        <text x={CX} y={178} textAnchor="middle" fontSize={9} fill={C.dim}>
          {loop.sign === '+' ? 'self-amplifying' : 'self-correcting'}
        </text>
      </Figure>

      <ToggleRow label="Loop" options={LOOPS.map((l) => l.key)} value={pick} onChange={setPick} />

      <Note>
        <strong>{loop.key}.</strong> {loop.detail}
      </Note>
    </Stack>
  );
}
