import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * When paying for a brain returns more than it costs.
 *
 * Two curves against how fast the environment changes. Inherited behaviour wins
 * when conditions are stable, learning wins in a middle band, and neither works
 * when change is faster than a lifetime — which is the non-obvious part.
 */

export default function LearningVsInstinct(_props: VisualizationProps): ReactNode {
  const [rate, setRate] = useState(1);

  /** Inherited rules track change only over many generations. */
  const instinct = (r: number): number => Math.max(0.05, 0.95 * Math.exp(-r / 0.35));
  /** Learning tracks change within a lifetime, but costs energy and time to acquire. */
  const learning = (r: number): number =>
    Math.max(0.05, 0.68 * Math.exp(-((Math.log10(r) - 0.05) ** 2) / 0.9));

  const LEFT = 40;
  const TOP = 22;
  const H = 202;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 42;
  const px = (r: number): number => LEFT + ((Math.log10(r) + 2) / 4) * pw;
  const py = (v: number): number => TOP + ph - v * ph;

  const curve = (fn: (r: number) => number): string =>
    Array.from({ length: 120 }, (_, i) => {
      const r = 10 ** (-2 + (i / 119) * 4);
      return `${i === 0 ? 'M' : 'L'}${px(r).toFixed(2)},${py(fn(r)).toFixed(2)}`;
    }).join(' ');

  const better = learning(rate) > instinct(rate) ? 'learning' : 'inherited behaviour';

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          how well each strategy performs
        </text>
        {[-2, -1, 0, 1, 2].map((e) => (
          <g key={e}>
            <line x1={px(10 ** e)} x2={px(10 ** e)} y1={TOP} y2={TOP + ph} stroke={C.grid} />
            <text
              x={px(10 ** e)}
              y={TOP + ph + 13}
              textAnchor="middle"
              fontSize={7.5}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {e === 0 ? '1' : `10${['⁻²', '⁻¹', '', '¹', '²'][e + 2]}`}
            </text>
          </g>
        ))}
        <path d={curve(instinct)} fill="none" stroke={C.warm} strokeWidth={2} />
        <path d={curve(learning)} fill="none" stroke={C.life} strokeWidth={2} />
        <text x={LEFT + 8} y={TOP + 14} fontSize={8.5} fill={C.warm}>
          inherited behaviour
        </text>
        <text x={LEFT + 8} y={TOP + 26} fontSize={8.5} fill={C.life}>
          learning
        </text>
        <line x1={px(rate)} x2={px(rate)} y1={TOP} y2={TOP + ph} stroke="#fff" opacity={0.5} />
        <circle cx={px(rate)} cy={py(instinct(rate))} r={4} fill={C.warm} />
        <circle cx={px(rate)} cy={py(learning(rate))} r={4} fill={C.life} />
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          how many times conditions change per lifetime
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Rate of change"
          hiddenLabel="How often conditions change relative to a lifetime, log scale"
          min={-2}
          max={2}
          step={0.05}
          value={Math.log10(rate)}
          onChange={(v) => setRate(10 ** v)}
          display={
            rate < 1
              ? `every ${(1 / rate).toFixed(1)} lifetimes`
              : `${rate.toFixed(1)}× per lifetime`
          }
        />
      </ControlRows>

      <Note>
        Here <strong>{better}</strong> does better. An inherited program is extremely efficient — no
        learning period, no mistakes, no brain tissue to feed — and is the right answer whenever the
        world stays the same shape. Its weakness shows when the world moves: a digger wasp whose
        provisioning sequence is interrupted at the wrong point will restart it from the beginning,
        repeatedly, because the program has no representation of the goal. Learning tracks change
        within a lifetime, which is worth its considerable cost only in the middle band. When
        conditions change faster than an animal can learn, what it learned is already wrong and
        neither strategy works. The curves are illustrative of the qualitative result from formal
        models rather than measured data.
      </Note>
    </Stack>
  );
}
