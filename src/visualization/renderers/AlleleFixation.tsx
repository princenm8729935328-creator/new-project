import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Drift against selection, with a fixed random seed.
 *
 * Determinism matters here: a figure that reshuffled on every render would make
 * the reader think the noise was the interface rather than the biology. Same
 * seed, same population size, same answer — and changing the population size
 * changes how much the noise matters, which is the point.
 */

function rng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function walk(popSize: number, s: number, seed: number, generations: number): number[] {
  const rand = rng(seed);
  const out: number[] = [];
  let p = 0.5;
  for (let g = 0; g <= generations; g += 1) {
    out.push(p);
    if (p <= 0 || p >= 1) continue;
    const wbar = p * (1 + s) + (1 - p);
    const expected = (p * (1 + s)) / wbar;
    // Binomial sampling, approximated by its normal limit.
    const sd = Math.sqrt((expected * (1 - expected)) / popSize);
    const u1 = Math.max(rand(), 1e-9);
    const u2 = rand();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    p = Math.min(1, Math.max(0, expected + z * sd));
  }
  return out;
}

export default function AlleleFixation(_props: VisualizationProps): ReactNode {
  const [popSize, setPopSize] = useState(2);
  const [s, setS] = useState(0.02);
  const N = 10 ** popSize;
  const GENS = 300;

  const runs = [11, 29, 47, 83, 131].map((seed) => walk(N, s, seed, GENS));

  const LEFT = 38;
  const TOP = 22;
  const H = 200;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (g: number): number => LEFT + (g / GENS) * pw;
  const py = (p: number): number => TOP + ph - p * ph;

  const fixed = runs.filter((r) => (r[GENS] ?? 0) >= 0.999).length;
  const lost = runs.filter((r) => (r[GENS] ?? 1) <= 0.001).length;

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          frequency — five independent populations
        </text>
        {[0, 0.5, 1].map((p) => (
          <line key={p} x1={LEFT} x2={LEFT + pw} y1={py(p)} y2={py(p)} stroke={C.grid} />
        ))}
        <text x={LEFT - 5} y={py(1) + 3} textAnchor="end" fontSize={8} fill={C.faint}>
          1
        </text>
        <text x={LEFT - 5} y={py(0) + 3} textAnchor="end" fontSize={8} fill={C.faint}>
          0
        </text>
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          generations
        </text>

        {runs.map((run, i) => (
          <path
            key={i}
            d={run
              .map((p, g) => `${g === 0 ? 'M' : 'L'}${px(g).toFixed(2)},${py(p).toFixed(2)}`)
              .join(' ')}
            fill="none"
            stroke={[C.life, C.water, C.warm, C.deep, C.hot][i]}
            strokeWidth={1.4}
            opacity={0.9}
          />
        ))}
      </Figure>

      <ControlRows>
        <Slider
          name="Population"
          hiddenLabel="Population size, log scale"
          min={1}
          max={5}
          step={1}
          value={popSize}
          onChange={setPopSize}
          display={N.toLocaleString()}
        />
        <Slider
          name="Advantage"
          hiddenLabel="Selective advantage"
          min={0}
          max={0.15}
          step={0.005}
          value={s}
          onChange={setS}
          display={`+${(s * 100).toFixed(1)}%`}
        />
      </ControlRows>

      <Note>
        In a population of <strong>{N.toLocaleString()}</strong> with a{' '}
        <strong>{(s * 100).toFixed(1)}%</strong> advantage, {fixed} of the five runs reached
        fixation and {lost} were lost entirely after 300 generations. Small populations are
        dominated by chance: a beneficial variant can vanish simply because the individual carrying
        it happened not to reproduce. Large populations follow the deterministic curve closely. This
        is why the effective size of a population matters so much in conservation — and why
        beneficial mutations are lost far more often than intuition suggests. The sampling here is a
        normal approximation to binomial reproduction, with fixed seeds so the runs do not change
        between views.
      </Note>
    </Stack>
  );
}
