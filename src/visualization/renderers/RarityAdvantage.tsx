import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why no species takes over everything.
 *
 * Negative frequency dependence is the general answer, and drawing fitness as a
 * declining function of a species' own abundance makes the equilibrium visible:
 * whatever is common is penalised, whatever is rare is rewarded, and the system
 * settles where neither is.
 */

export default function RarityAdvantage(_props: VisualizationProps): ReactNode {
  const [freq, setFreq] = useState(0.5);
  const fitnessA = 1.4 - freq;
  const fitnessB = 1.4 - (1 - freq);
  const direction =
    fitnessA > fitnessB ? 'A increases' : fitnessA < fitnessB ? 'B increases' : 'stable';

  const LEFT = 40;
  const TOP = 22;
  const H = 200;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (f: number): number => LEFT + f * pw;
  const py = (v: number): number => TOP + ph - ((v - 0.3) / 1.2) * ph;

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          reproductive success
        </text>
        {[0.5, 1].map((v) => (
          <line key={v} x1={LEFT} x2={LEFT + pw} y1={py(v)} y2={py(v)} stroke={C.grid} />
        ))}
        <path d={`M${px(0)},${py(1.4)} L${px(1)},${py(0.4)}`} stroke={C.life} strokeWidth={2} />
        <path d={`M${px(0)},${py(0.4)} L${px(1)},${py(1.4)}`} stroke={C.hot} strokeWidth={2} />
        <text x={LEFT + 8} y={py(1.35)} fontSize={8.5} fill={C.life}>
          species A
        </text>
        <text x={LEFT + pw - 6} y={py(1.35)} textAnchor="end" fontSize={8.5} fill={C.hot}>
          species B
        </text>

        <circle cx={px(0.5)} cy={py(0.9)} r={4} fill={C.warm} />
        <text x={px(0.5)} y={py(0.9) - 10} textAnchor="middle" fontSize={8} fill={C.warm}>
          equilibrium
        </text>

        <line x1={px(freq)} x2={px(freq)} y1={TOP} y2={TOP + ph} stroke="#fff" opacity={0.5} />
        <circle cx={px(freq)} cy={py(fitnessA)} r={4} fill={C.life} />
        <circle cx={px(freq)} cy={py(fitnessB)} r={4} fill={C.hot} />

        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          share of the population that is species A
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Share of A"
          hiddenLabel="Proportion of the population that is species A"
          min={0.02}
          max={0.98}
          step={0.01}
          value={freq}
          onChange={setFreq}
          display={`${Math.round(freq * 100)}%`}
        />
      </ControlRows>

      <Note>
        At <strong>{Math.round(freq * 100)}%</strong> species A, {direction}. Whichever is common
        does worse, so the system is pushed back towards the middle from either side. The mechanisms
        are real and specific: the commonest prey is the one predators learn to recognise, the
        commonest host is the one parasites are adapted to, and the commonest plant depletes the
        specific nutrients it needs while accumulating the specific pathogens that attack it. Janzen
        and Connell proposed the last of these to explain why tropical forests hold hundreds of tree
        species rather than being dominated by the best competitor — seedlings near a parent tree
        die from that species&rsquo; own accumulated enemies. Add resource limits, disturbance and
        the fact that environments keep changing, and taking over everything is not available to
        anyone.
      </Note>
    </Stack>
  );
}
