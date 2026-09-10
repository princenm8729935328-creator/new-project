import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why parasites do not simply become as damaging as possible.
 *
 * Two opposing curves and their product. Killing faster raises transmission per
 * day and shortens the window; the optimum is in between, and it is not zero —
 * which is the part that surprises people who expect parasites to evolve
 * towards harmlessness.
 */

export default function VirulenceTradeoff(_props: VisualizationProps): ReactNode {
  const [transmissionEase, setTransmissionEase] = useState(1);

  const transmissionRate = (v: number): number => 2.4 * Math.sqrt(v);
  const duration = (v: number): number => 1 / (0.12 + v);
  const total = (v: number): number => transmissionRate(v) * duration(v) * transmissionEase;

  let best = 0.1;
  for (let v = 0.02; v <= 2; v += 0.005) if (total(v) > total(best)) best = v;

  const LEFT = 40;
  const TOP = 22;
  const H = 204;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (v: number): number => LEFT + (v / 2) * pw;
  const maxTotal = total(best);
  const py = (v: number): number => TOP + ph - (v / (maxTotal * 1.15)) * ph;

  const curve = (fn: (v: number) => number, scale: number): string =>
    Array.from({ length: 120 }, (_, i) => {
      const v = 0.02 + (i / 119) * 1.98;
      return `${i === 0 ? 'M' : 'L'}${px(v).toFixed(2)},${py(fn(v) * scale).toFixed(2)}`;
    }).join(' ');

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          relative to the best achievable
        </text>
        <path
          d={curve(transmissionRate, maxTotal / 6)}
          fill="none"
          stroke={C.hot}
          strokeWidth={1.6}
          strokeDasharray="4 3"
        />
        <path
          d={curve(duration, maxTotal / 5)}
          fill="none"
          stroke={C.water}
          strokeWidth={1.6}
          strokeDasharray="4 3"
        />
        <path d={curve(total, 1)} fill="none" stroke={C.life} strokeWidth={2.2} />

        <text x={LEFT + 8} y={TOP + 14} fontSize={8} fill={C.hot}>
          transmission per day
        </text>
        <text x={LEFT + 8} y={TOP + 26} fontSize={8} fill={C.water}>
          days the host survives
        </text>
        <text x={LEFT + 8} y={TOP + 38} fontSize={8} fill={C.life}>
          total transmission
        </text>

        <line
          x1={px(best)}
          x2={px(best)}
          y1={TOP}
          y2={TOP + ph}
          stroke={C.warm}
          strokeDasharray="3 3"
        />
        <text x={px(best) + 4} y={TOP + ph - 8} fontSize={8.5} fill={C.warm}>
          best for the parasite
        </text>

        <line x1={LEFT} y1={TOP + ph} x2={LEFT + pw} y2={TOP + ph} stroke={C.grid} />
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          how much damage the parasite does
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Ease of spread"
          hiddenLabel="How easily the parasite spreads between hosts"
          min={0.4}
          max={3}
          step={0.05}
          value={transmissionEase}
          onChange={setTransmissionEase}
          display={`${transmissionEase.toFixed(2)}×`}
        />
      </ControlRows>

      <Note>
        A parasite that does more damage often transmits faster while it lasts — more virus in the
        airway, more spores produced — but it also kills or disables the host sooner, cutting the
        window. The product peaks at an intermediate level of harm, and that level is where
        selection settles: not at zero. This is why the folk claim that parasites always evolve
        towards harmlessness is wrong. It also predicts something practical: where a parasite can
        spread without the host moving — through water, through a vector, through a hospital ward —
        the cost of disabling the host falls, and higher virulence is favoured. Cholera and malaria
        are the standard examples. The curves here are illustrative shapes; measured trade-off
        functions vary by system and for some parasites the relationship is weak or absent.
      </Note>
    </Stack>
  );
}
