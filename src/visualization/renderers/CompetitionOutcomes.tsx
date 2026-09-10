import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Two competitors, and the three things that can happen.
 *
 * Lotka–Volterra competition is the standard model and it produces exactly
 * three outcomes depending on how strongly each species affects the other
 * relative to itself. Running it gives the reader the result rather than the
 * classification.
 */

function run(alpha: number, beta: number, steps: number): { a: number[]; b: number[] } {
  const A: number[] = [];
  const B: number[] = [];
  let a = 0.1;
  let b = 0.1;
  for (let t = 0; t < steps; t += 1) {
    A.push(a);
    B.push(b);
    const da = 0.12 * a * (1 - a - alpha * b);
    const db = 0.12 * b * (1 - b - beta * a);
    a = Math.max(0, a + da);
    b = Math.max(0, b + db);
  }
  return { a: A, b: B };
}

export default function CompetitionOutcomes(_props: VisualizationProps): ReactNode {
  const [alpha, setAlpha] = useState(0.6);
  const [beta, setBeta] = useState(0.6);
  const STEPS = 260;
  const { a, b } = run(alpha, beta, STEPS);
  const endA = a[STEPS - 1] ?? 0;
  const endB = b[STEPS - 1] ?? 0;

  const outcome =
    endA > 0.02 && endB > 0.02
      ? 'Coexistence'
      : endA > endB
        ? 'Species A excludes species B'
        : 'Species B excludes species A';

  const LEFT = 38;
  const TOP = 22;
  const H = 196;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (t: number): number => LEFT + (t / STEPS) * pw;
  const py = (v: number): number => TOP + ph - v * ph;

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          population size
        </text>
        {[0, 0.5, 1].map((v) => (
          <line key={v} x1={LEFT} x2={LEFT + pw} y1={py(v)} y2={py(v)} stroke={C.grid} />
        ))}
        <path
          d={a
            .map((v, t) => `${t === 0 ? 'M' : 'L'}${px(t).toFixed(2)},${py(v).toFixed(2)}`)
            .join(' ')}
          fill="none"
          stroke={C.life}
          strokeWidth={2}
        />
        <path
          d={b
            .map((v, t) => `${t === 0 ? 'M' : 'L'}${px(t).toFixed(2)},${py(v).toFixed(2)}`)
            .join(' ')}
          fill="none"
          stroke={C.hot}
          strokeWidth={2}
        />
        <text x={LEFT + 8} y={TOP + 14} fontSize={8.5} fill={C.life}>
          species A
        </text>
        <text x={LEFT + 8} y={TOP + 26} fontSize={8.5} fill={C.hot}>
          species B
        </text>
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          time
        </text>
        <text x={LEFT + pw - 4} y={TOP + 14} textAnchor="end" fontSize={9.5} fill={C.warm}>
          {outcome}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="B's effect on A"
          hiddenLabel="How strongly species B suppresses species A"
          min={0.1}
          max={1.8}
          step={0.05}
          value={alpha}
          onChange={setAlpha}
          display={alpha.toFixed(2)}
        />
        <Slider
          name="A's effect on B"
          hiddenLabel="How strongly species A suppresses species B"
          min={0.1}
          max={1.8}
          step={0.05}
          value={beta}
          onChange={setBeta}
          display={beta.toFixed(2)}
        />
      </ControlRows>

      <Note>
        The rule that falls out of this model is simple and not obvious: two species coexist when
        each suppresses itself more than it suppresses the other — that is, when both numbers here
        are below one. Set either above one and that species drives the other out. Coexistence is
        therefore not about being equally matched; it is about the competitors being sufficiently
        different that each runs out of its own resources before it exhausts the other&rsquo;s. This
        is the Lotka–Volterra competition model, a deliberately simple one that ignores space,
        time-varying conditions and any third species — all of which can allow coexistence it
        forbids.
      </Note>
    </Stack>
  );
}
