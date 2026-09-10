import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Two stable configurations for the same conditions, and the hysteresis between
 * them.
 *
 * The nutrient level that tips a clear lake into a turbid one is higher than
 * the level needed to bring it back, which is why "just reduce the input again"
 * so often fails. Dragging the slider up and then down demonstrates that
 * without any argument.
 */

export default function AlternativeStates(_props: VisualizationProps): ReactNode {
  const [nutrient, setNutrient] = useState(0.3);
  const [state, setState] = useState<'clear' | 'turbid'>('clear');

  const tipUp = 0.68;
  const tipDown = 0.32;

  /** The state only changes when a threshold is crossed, and which threshold depends on where it is now. */
  function moveTo(value: number): void {
    setNutrient(value);
    setState((current) =>
      current === 'turbid'
        ? value > tipDown
          ? 'turbid'
          : 'clear'
        : value > tipUp
          ? 'turbid'
          : 'clear',
    );
  }

  const LEFT = 34;
  const TOP = 26;
  const H = 200;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 46;
  const px = (v: number): number => LEFT + v * pw;
  const py = (v: number): number => TOP + ph - v * ph;

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={12} fontSize={9} fill={C.dim}>
          water clarity
        </text>

        <path
          d={`M${px(0)},${py(0.92)} C${px(0.4)},${py(0.9)} ${px(0.6)},${py(0.82)} ${px(tipUp)},${py(0.74)}`}
          stroke={C.water}
          strokeWidth={2.2}
          fill="none"
        />
        <path
          d={`M${px(tipDown)},${py(0.22)} C${px(0.5)},${py(0.18)} ${px(0.7)},${py(0.14)} ${px(1)},${py(0.1)}`}
          stroke={C.life}
          strokeWidth={2.2}
          fill="none"
        />
        <path
          d={`M${px(tipDown)},${py(0.22)} C${px(0.45)},${py(0.4)} ${px(0.55)},${py(0.56)} ${px(tipUp)},${py(0.74)}`}
          stroke={C.faint}
          strokeWidth={1.2}
          strokeDasharray="4 4"
          fill="none"
        />

        <text x={px(0.1)} y={py(0.92) - 8} fontSize={8.5} fill={C.water}>
          clear water, plants on the bottom
        </text>
        <text x={px(0.62)} y={py(0.1) + 14} fontSize={8.5} fill={C.life}>
          turbid, algae-dominated
        </text>
        <text x={px(0.36)} y={py(0.46)} fontSize={7.5} fill={C.faint}>
          unstable
        </text>

        <line
          x1={px(tipUp)}
          y1={TOP}
          x2={px(tipUp)}
          y2={TOP + ph}
          stroke={C.hot}
          strokeDasharray="3 3"
        />
        <text x={px(tipUp) + 4} y={TOP + 12} fontSize={8} fill={C.hot}>
          tips over here
        </text>
        <line
          x1={px(tipDown)}
          y1={TOP}
          x2={px(tipDown)}
          y2={TOP + ph}
          stroke={C.warm}
          strokeDasharray="3 3"
        />
        <text x={px(tipDown) - 4} y={TOP + 12} textAnchor="end" fontSize={8} fill={C.warm}>
          recovers only here
        </text>

        <circle
          cx={px(nutrient)}
          cy={py(state === 'clear' ? 0.9 - nutrient * 0.22 : 0.22 - (nutrient - tipDown) * 0.18)}
          r={5.5}
          fill="#fff"
        />

        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          nutrient input
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Nutrients"
          hiddenLabel="Nutrient input to the lake"
          min={0}
          max={1}
          step={0.01}
          value={nutrient}
          onChange={moveTo}
          display={nutrient.toFixed(2)}
        />
      </ControlRows>

      <Note>
        The lake is currently <strong>{state}</strong>. Raise the nutrients past the upper threshold
        and it flips: algae shade out the bottom plants, the plants die, the sediment they held is
        stirred up, and the turbidity maintains itself. Now lower the nutrients back to where they
        were and nothing happens — you have to go considerably lower before it flips back, because
        the turbid state is stabilised by its own feedbacks. This gap is called hysteresis, and it
        is why restoring a degraded ecosystem is so much harder than not degrading it. The same
        structure describes Snowball Earth, coral reefs turning to algal rock, and grassland turning
        to scrub. Predicting where a threshold sits before crossing it remains genuinely difficult.
      </Note>
    </Stack>
  );
}
