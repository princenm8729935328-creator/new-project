import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Diversity compounding, because each new kind of organism is a habitat.
 *
 * The reader adds rounds and watches the count accelerate — not because
 * anything is trying to make variety, but because a new species opens niches
 * for things that eat it, live in it, or eat those. The note carries the limit,
 * which is that the process saturates rather than continuing forever.
 */

export default function DiversityRadiation(_props: VisualizationProps): ReactNode {
  const [rounds, setRounds] = useState(3);

  const nodes: { x: number; y: number; gen: number }[] = [];
  let prev = [{ x: 32, y: 96, gen: 0 }];
  nodes.push(...prev);
  for (let g = 1; g <= rounds; g += 1) {
    const next: { x: number; y: number; gen: number }[] = [];
    const spread = 78 / g;
    for (const p of prev) {
      for (const dir of [-1, 1]) {
        next.push({ x: 32 + g * 74, y: p.y + dir * spread, gen: g });
      }
    }
    nodes.push(...next);
    prev = next;
  }
  const total = 2 ** rounds;

  return (
    <Stack>
      <Figure height={190}>
        {nodes
          .filter((n) => n.gen > 0)
          .map((n, i) => {
            const parents = nodes.filter((p) => p.gen === n.gen - 1);
            const parent = parents[Math.floor(i / 2) % Math.max(parents.length, 1)];
            if (!parent) return null;
            return (
              <line
                key={`e${n.gen}-${i}`}
                x1={parent.x}
                y1={parent.y}
                x2={n.x}
                y2={n.y}
                stroke={C.life}
                strokeWidth={1.2}
                opacity={0.5}
              />
            );
          })}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={Math.max(5 - n.gen * 0.6, 2)}
            fill={C.life}
            opacity={0.85}
          />
        ))}
        <text x={190} y={182} textAnchor="middle" fontSize={9} fill={C.life}>
          {total} lineage{total === 1 ? '' : 's'} after {rounds} round{rounds === 1 ? '' : 's'}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Rounds"
          hiddenLabel="Rounds of diversification"
          min={0}
          max={4}
          step={1}
          value={rounds}
          onChange={setRounds}
          display={`${rounds}`}
        />
      </ControlRows>

      <Note>
        Each split happens because a population became isolated — a river moved, a forest
        fragmented, a few individuals reached an island — and the halves drifted apart until they
        could no longer interbreed. What makes the process compound rather than merely repeat is
        that each new organism is itself an environment: once there are trees, there is room for
        things that eat leaves, bore into wood, live in bark, and eat the things that eat leaves.
        This diagram is a schematic of the logic, not a real phylogeny, and real diversification
        does not double indefinitely — rates decline as niches fill, and mass extinctions have
        repeatedly cut the total back by most of itself.
      </Note>
    </Stack>
  );
}
