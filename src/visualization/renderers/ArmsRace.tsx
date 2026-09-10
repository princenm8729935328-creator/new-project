import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Both sides improve; neither gets ahead.
 *
 * The Red Queen result is counter-intuitive precisely because enormous change
 * produces no net advantage, so the figure plots both absolute performance and
 * the gap between them. The gap stays flat while the performance curves climb.
 */

export default function ArmsRace(_props: VisualizationProps): ReactNode {
  const [rounds, setRounds] = useState(20);
  const MAX = 40;

  const predator = Array.from(
    { length: MAX + 1 },
    (_, i) => 1 + i * 0.09 + Math.sin(i * 0.9) * 0.05,
  );
  const prey = Array.from({ length: MAX + 1 }, (_, i) => 1 + i * 0.088 + Math.cos(i * 0.9) * 0.05);

  const LEFT = 38;
  const TOP = 22;
  const H = 200;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (i: number): number => LEFT + (i / MAX) * pw;
  const py = (v: number): number => TOP + ph - ((v - 0.6) / 4.4) * ph;

  const line = (arr: readonly number[]): string =>
    arr
      .slice(0, rounds + 1)
      .map((v, i) => `${i === 0 ? 'M' : 'L'}${px(i).toFixed(2)},${py(v).toFixed(2)}`)
      .join(' ');

  const p = predator[rounds] ?? 1;
  const q = prey[rounds] ?? 1;

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          absolute performance
        </text>
        {[1, 2, 3, 4].map((v) => (
          <g key={v}>
            <line x1={LEFT} x2={LEFT + pw} y1={py(v)} y2={py(v)} stroke={C.grid} />
            <text
              x={LEFT - 5}
              y={py(v) + 3}
              textAnchor="end"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {v}×
            </text>
          </g>
        ))}
        <path d={line(predator)} fill="none" stroke={C.hot} strokeWidth={2} />
        <path d={line(prey)} fill="none" stroke={C.life} strokeWidth={2} />
        <line
          x1={LEFT}
          y1={py(1)}
          x2={LEFT + pw}
          y2={py(1)}
          stroke={C.warm}
          strokeDasharray="3 3"
        />
        <text x={LEFT + 8} y={TOP + 14} fontSize={8.5} fill={C.hot}>
          predator speed
        </text>
        <text x={LEFT + 8} y={TOP + 26} fontSize={8.5} fill={C.life}>
          prey speed
        </text>
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          rounds of coevolution
        </text>
        <circle cx={px(rounds)} cy={py(p)} r={3.6} fill={C.hot} />
        <circle cx={px(rounds)} cy={py(q)} r={3.6} fill={C.life} />
      </Figure>

      <ControlRows>
        <Slider
          name="Rounds"
          hiddenLabel="Rounds of coevolution"
          min={0}
          max={MAX}
          step={1}
          value={rounds}
          onChange={setRounds}
          display={`${rounds}`}
        />
      </ControlRows>

      <Note>
        After <strong>{rounds}</strong> rounds, both sides are around{' '}
        <strong>{p.toFixed(2)}×</strong> and <strong>{q.toFixed(2)}×</strong> their original
        performance — an enormous absolute improvement — and the gap between them is{' '}
        <strong>{(p - q).toFixed(2)}</strong>, which is essentially where it started. Neither side
        is catching more or escaping more than before. Leigh Van Valen called this the Red Queen
        hypothesis, after the character who has to run to stay in the same place, and proposed it to
        explain why extinction risk in the fossil record does not appear to fall as a lineage
        persists: the environment that matters most is other organisms, and they keep adapting. Real
        arms races do not run indefinitely — they hit physical and energetic limits — and the curves
        here are illustrative.
      </Note>
    </Stack>
  );
}
