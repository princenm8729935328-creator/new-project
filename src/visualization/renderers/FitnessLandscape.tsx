import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why selection gets stuck.
 *
 * A one-dimensional landscape is a caricature — real ones have thousands of
 * dimensions and the intuitions from a two-dimensional picture often fail — but
 * it carries the one thing that matters: uphill-only movement cannot cross a
 * valley, so a population can end on a lower peak and stay there permanently.
 */

function height(x: number): number {
  return (
    0.42 * Math.exp(-(((x - 2.2) / 1.1) ** 2)) +
    0.95 * Math.exp(-(((x - 6.4) / 1.3) ** 2)) +
    0.3 * Math.exp(-(((x - 9.1) / 0.8) ** 2))
  );
}

export default function FitnessLandscape(_props: VisualizationProps): ReactNode {
  const [start, setStart] = useState(1.4);

  // Climb uphill from the starting position.
  let x = start;
  for (let i = 0; i < 600; i += 1) {
    const slope = height(x + 0.01) - height(x - 0.01);
    x = Math.min(10, Math.max(0, x + Math.sign(slope) * 0.01));
  }
  const settled = x;

  const LEFT = 24;
  const W = 332;
  const TOP = 26;
  const PH = 108;
  const px = (v: number): number => LEFT + (v / 10) * W;
  const py = (h: number): number => TOP + PH - h * PH;

  const curve = Array.from({ length: 160 }, (_, i) => {
    const v = (i / 159) * 10;
    return `${i === 0 ? 'M' : 'L'}${px(v).toFixed(2)},${py(height(v)).toFixed(2)}`;
  }).join(' ');

  const onBest = settled > 5 && settled < 8;

  return (
    <Stack>
      <Figure height={188}>
        <text x={3} y={12} fontSize={9} fill={C.dim}>
          reproductive success
        </text>
        <path
          d={`${curve} L${px(10)},${TOP + PH} L${px(0)},${TOP + PH} z`}
          fill="rgba(79,224,192,0.10)"
        />
        <path d={curve} fill="none" stroke={C.life} strokeWidth={1.8} />

        <circle cx={px(start)} cy={py(height(start))} r={4} fill={C.faint} />
        <text
          x={px(start)}
          y={py(height(start)) - 9}
          textAnchor="middle"
          fontSize={8}
          fill={C.faint}
        >
          start
        </text>
        <circle cx={px(settled)} cy={py(height(settled))} r={5.5} fill={onBest ? C.life : C.hot} />
        <text
          x={px(settled)}
          y={py(height(settled)) - 11}
          textAnchor="middle"
          fontSize={8.5}
          fill={onBest ? C.life : C.hot}
        >
          {onBest ? 'highest peak' : 'stuck on a lower peak'}
        </text>

        <line x1={LEFT} y1={TOP + PH} x2={LEFT + W} y2={TOP + PH} stroke={C.grid} />
        <text x={LEFT + W / 2} y={TOP + PH + 20} textAnchor="middle" fontSize={9} fill={C.dim}>
          some trait — body size, enzyme sequence, anything heritable
        </text>
        <text x={LEFT + W / 2} y={TOP + PH + 42} textAnchor="middle" fontSize={8.5} fill={C.warm}>
          selection only moves uphill, so a valley is a wall
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Starting point"
          hiddenLabel="Where the population starts on the trait axis"
          min={0}
          max={10}
          step={0.1}
          value={start}
          onChange={setStart}
          display={start.toFixed(1)}
        />
      </ControlRows>

      <Note>
        Starting at <strong>{start.toFixed(1)}</strong>, the population climbs to{' '}
        <strong>{settled.toFixed(1)}</strong> —{' '}
        {onBest ? 'the highest peak available.' : 'a lower peak, and it stays there.'} Selection
        cannot go downhill, and reaching a better solution would require passing through worse ones.
        This is why so many biological structures are demonstrably suboptimal: the vertebrate eye
        has its wiring in front of the light-sensitive cells, and the nerve serving a
        giraffe&rsquo;s larynx runs down the neck and back up. Both would be fixed by a redesign;
        neither can be reached from here. Real landscapes have thousands of dimensions, where
        valleys are far easier to route around than this picture suggests — so treat this as a way
        of grasping the constraint, not as a map of one.
      </Note>
    </Stack>
  );
}
