import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack, ToggleRow } from './lifeKit';

/**
 * The lynx and the hare, as a time series and as a loop.
 *
 * The phase-plane view is the one that explains the lag: the system circles,
 * and a circle in the phase plane is an oscillation in time. Without it the
 * offset between the two peaks looks like a curiosity rather than a necessity.
 */

function simulate(alpha: number, steps: number): { h: number[]; l: number[] } {
  const h: number[] = [];
  const l: number[] = [];
  let hare = 1.0;
  let lynx = 0.35;
  const dt = 0.05;
  for (let i = 0; i < steps; i += 1) {
    h.push(hare);
    l.push(lynx);
    const dh = hare * (0.9 - alpha * lynx);
    const dl = lynx * (alpha * 0.55 * hare - 0.6);
    hare = Math.max(0.01, hare + dh * dt);
    lynx = Math.max(0.01, lynx + dl * dt);
  }
  return { h, l };
}

export default function PredatorPreyCycles(_props: VisualizationProps): ReactNode {
  const [alpha, setAlpha] = useState(1.1);
  const [view, setView] = useState(0);
  const STEPS = 900;
  const { h, l } = simulate(alpha, STEPS);

  const LEFT = 38;
  const TOP = 22;
  const H = 200;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const maxV = Math.max(...h, ...l, 1);
  const px = (t: number): number => LEFT + (t / STEPS) * pw;
  const py = (v: number): number => TOP + ph - (v / maxV) * ph;

  const phaseX = (v: number): number => LEFT + (v / maxV) * pw;
  const phaseY = (v: number): number => TOP + ph - (v / maxV) * ph;

  return (
    <Stack>
      <Figure height={H}>
        {view === 0 ? (
          <g>
            <text x={3} y={11} fontSize={9} fill={C.dim}>
              population
            </text>
            <path
              d={h
                .map((v, t) => `${t === 0 ? 'M' : 'L'}${px(t).toFixed(2)},${py(v).toFixed(2)}`)
                .join(' ')}
              fill="none"
              stroke={C.life}
              strokeWidth={1.8}
            />
            <path
              d={l
                .map((v, t) => `${t === 0 ? 'M' : 'L'}${px(t).toFixed(2)},${py(v).toFixed(2)}`)
                .join(' ')}
              fill="none"
              stroke={C.hot}
              strokeWidth={1.8}
            />
            <text x={LEFT + 8} y={TOP + 14} fontSize={8.5} fill={C.life}>
              hares
            </text>
            <text x={LEFT + 8} y={TOP + 26} fontSize={8.5} fill={C.hot}>
              lynx
            </text>
            <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
              time
            </text>
          </g>
        ) : (
          <g>
            <text x={3} y={11} fontSize={9} fill={C.dim}>
              lynx
            </text>
            <path
              d={h
                .slice(200)
                .map(
                  (v, i) =>
                    `${i === 0 ? 'M' : 'L'}${phaseX(v).toFixed(2)},${phaseY(l[i + 200] ?? 0).toFixed(2)}`,
                )
                .join(' ')}
              fill="none"
              stroke={C.warm}
              strokeWidth={1.6}
            />
            <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
              hares
            </text>
            <text x={LEFT + pw - 6} y={TOP + 16} textAnchor="end" fontSize={8.5} fill={C.warm}>
              the system goes round, it does not settle
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow
        label="View"
        options={['Over time', 'Phase plane']}
        value={view}
        onChange={setView}
      />

      <ControlRows>
        <Slider
          name="Predation rate"
          hiddenLabel="How efficiently predators catch prey"
          min={0.5}
          max={2}
          step={0.05}
          value={alpha}
          onChange={setAlpha}
          display={alpha.toFixed(2)}
        />
      </ControlRows>

      <Note>
        Hares increase; lynx, with more food, increase after a delay; the hares are then eaten down;
        the lynx starve and decline; the hares recover. The predator peak always follows the prey
        peak, because predators need time to convert food into offspring — and that delay is why the
        system oscillates instead of settling at a balance point. The Hudson&rsquo;s Bay
        Company&rsquo;s fur records show almost exactly this pattern over nearly two centuries. Two
        cautions: the model here is Lotka–Volterra, which is simpler than any real system, and the
        real hare cycle is now known to involve food supply and stress physiology as well as
        predation.
      </Note>
    </Stack>
  );
}
