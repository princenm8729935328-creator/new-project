import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack, ToggleRow } from './lifeKit';

/**
 * Gould's drunkard's walk, run properly.
 *
 * Two simulations with the same starting point, one with a wall and no bias and
 * one with a bias. Both raise the maximum. Only one raises the average — and
 * looking at the maximum alone, which is what most claims about evolutionary
 * trends do, cannot tell them apart.
 */

function rng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function simulate(driven: boolean, steps: number): number[] {
  const rand = rng(97);
  const walkers = Array.from({ length: 220 }, () => 0);
  for (let t = 0; t < steps; t += 1) {
    for (let i = 0; i < walkers.length; i += 1) {
      const bias = driven ? 0.18 : 0;
      const move = rand() < 0.5 + bias ? 1 : -1;
      walkers[i] = Math.max(0, (walkers[i] ?? 0) + move);
    }
  }
  return walkers;
}

export default function PassiveVsDrivenTrend(_props: VisualizationProps): ReactNode {
  const [driven, setDriven] = useState(0);
  const [steps, setSteps] = useState(40);
  const walkers = simulate(driven === 1, steps);

  const BINS = 26;
  const hist = Array.from({ length: BINS }, () => 0);
  for (const w of walkers)
    hist[Math.min(Math.floor(w / 2), BINS - 1)] =
      (hist[Math.min(Math.floor(w / 2), BINS - 1)] ?? 0) + 1;
  const peak = Math.max(...hist, 1);
  const mean = walkers.reduce((a, b) => a + b, 0) / walkers.length;
  const max = Math.max(...walkers);

  const LEFT = 22;
  const W = 336;
  const BW = W / BINS;
  const BASE = 132;

  return (
    <Stack>
      <Figure height={182}>
        <text x={LEFT} y={13} fontSize={9} fill={C.dim}>
          how many lineages have each complexity
        </text>
        <rect x={LEFT - 6} y={30} width={5} height={104} fill="rgba(255,143,110,0.5)" />
        <text
          x={LEFT - 10}
          y={80}
          textAnchor="end"
          fontSize={7.5}
          fill={C.hot}
          transform={`rotate(-90 ${LEFT - 10} 80)`}
        >
          minimum possible
        </text>
        {hist.map((v, i) => (
          <rect
            key={i}
            x={LEFT + i * BW}
            y={BASE - (v / peak) * 100}
            width={BW - 1.5}
            height={(v / peak) * 100}
            fill={driven === 1 ? C.warm : C.life}
            opacity={0.8}
          />
        ))}
        <line x1={LEFT} y1={BASE} x2={LEFT + W} y2={BASE} stroke={C.grid} />
        <text x={LEFT + W / 2} y={BASE + 18} textAnchor="middle" fontSize={9} fill={C.dim}>
          complexity
        </text>
        <line
          x1={LEFT + (mean / 2 / BINS) * W}
          y1={30}
          x2={LEFT + (mean / 2 / BINS) * W}
          y2={BASE}
          stroke="#fff"
          strokeDasharray="3 3"
          opacity={0.7}
        />
        <text x={LEFT + (mean / 2 / BINS) * W + 4} y={42} fontSize={8} fill="#fff">
          mean {mean.toFixed(1)}
        </text>
        <text x={LEFT + W} y={BASE + 34} textAnchor="end" fontSize={8.5} fill={C.dim}>
          maximum {max}
        </text>
      </Figure>

      <ToggleRow
        label="Model"
        options={['Passive (no bias)', 'Driven (bias upward)']}
        value={driven}
        onChange={setDriven}
      />

      <ControlRows>
        <Slider
          name="Time"
          hiddenLabel="Steps of the simulation"
          min={0}
          max={120}
          step={5}
          value={steps}
          onChange={setSteps}
          display={`${steps} steps`}
        />
      </ControlRows>

      <Note>
        {driven === 0
          ? `With no bias at all, the maximum rises to ${max} while the mean stays at ${mean.toFixed(1)} — pinned near the wall at zero, because nothing can go below the minimum. Anyone looking only at the record-holders would see a trend towards complexity that does not exist.`
          : `With a bias, both the maximum and the mean rise, and the whole distribution moves. The bulk of lineages become more complex, not just the record-holders.`}{' '}
        The real biosphere looks like the first case: the maximum has risen for four billion years
        while the mode of the distribution has stayed on bacteria. That is the strongest argument
        that evolution has no built-in tendency towards complexity. This is a simulation of the
        argument, not a measurement of the fossil record.
      </Note>
    </Stack>
  );
}
