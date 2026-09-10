import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack, ToggleRow } from './lifeKit';

/**
 * Ice–albedo bistability, drawn as the hysteresis loop it is.
 *
 * The reader drags the solar input and watches the planet jump between two
 * stable states — and, crucially, finds that reversing the drag does not
 * reverse the jump at the same place. That gap is the whole reason a Snowball
 * Earth is hard to escape once entered.
 */

const S_MIN = 0.85;
const S_MAX = 1.25;

/** Albedo as a function of temperature: ice below, ocean above, ramp between. */
function albedoOf(tK: number): number {
  if (tK <= 263) return 0.62;
  if (tK >= 293) return 0.28;
  return 0.62 - ((tK - 263) / 30) * 0.34;
}

/** Iterate the balance to a fixed point from a given starting temperature. */
function settle(solar: number, startK: number): number {
  let t = startK;
  for (let i = 0; i < 400; i += 1) {
    const equilibrium = ((1361 * solar * (1 - albedoOf(t))) / (4 * 5.670374419e-8)) ** 0.25 + 33;
    t += (equilibrium - t) * 0.08;
  }
  return t;
}

export default function SnowballEarth(_props: VisualizationProps): ReactNode {
  const [solar, setSolar] = useState(1);
  const [warm, setWarm] = useState(true);

  const t = settle(solar, warm ? 300 : 220);
  const frozen = t < 263;

  const LEFT = 42;
  const TOP = 22;
  const H = 200;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (s: number): number => LEFT + ((s - S_MIN) / (S_MAX - S_MIN)) * pw;
  const py = (k: number): number => TOP + ph - ((k - 200) / 130) * ph;

  const branch = (start: number): string =>
    Array.from({ length: 80 }, (_, i) => {
      const s = S_MIN + (i / 79) * (S_MAX - S_MIN);
      return `${i === 0 ? 'M' : 'L'}${px(s).toFixed(2)},${py(settle(s, start)).toFixed(2)}`;
    }).join(' ');

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          global mean surface temperature, K
        </text>

        <rect
          x={LEFT}
          y={py(263)}
          width={pw}
          height={Math.max(TOP + ph - py(263), 0)}
          fill="rgba(111,179,255,0.10)"
        />
        <text x={LEFT + 5} y={py(263) + 11} fontSize={8} fill={C.water}>
          ice reaches the equator
        </text>

        {[220, 250, 280, 310].map((k) => (
          <g key={k}>
            <line x1={LEFT} x2={LEFT + pw} y1={py(k)} y2={py(k)} stroke={C.grid} />
            <text
              x={LEFT - 5}
              y={py(k) + 3}
              textAnchor="end"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {k}
            </text>
          </g>
        ))}
        {[0.9, 1.0, 1.1, 1.2].map((s) => (
          <g key={s}>
            <line x1={px(s)} x2={px(s)} y1={TOP} y2={TOP + ph} stroke={C.grid} />
            <text
              x={px(s)}
              y={TOP + ph + 13}
              textAnchor="middle"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {s.toFixed(1)}
            </text>
          </g>
        ))}
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          sunlight (or greenhouse forcing), relative to today
        </text>

        <path d={branch(300)} fill="none" stroke={C.hot} strokeWidth={1.8} />
        <path d={branch(220)} fill="none" stroke={C.water} strokeWidth={1.8} />
        <text
          x={LEFT + pw - 4}
          y={py(settle(S_MAX, 300)) - 6}
          textAnchor="end"
          fontSize={8}
          fill={C.hot}
        >
          coming from warm
        </text>
        <text x={LEFT + 6} y={py(settle(S_MIN, 220)) + 14} fontSize={8} fill={C.water}>
          coming from frozen
        </text>

        <circle
          cx={px(solar)}
          cy={py(t)}
          r={5.5}
          fill={frozen ? C.water : C.hot}
          stroke="#fff"
          strokeWidth={1}
        />
      </Figure>

      <ControlRows>
        <Slider
          name="Forcing"
          hiddenLabel="Solar or greenhouse forcing relative to today"
          min={S_MIN}
          max={S_MAX}
          step={0.005}
          value={solar}
          onChange={setSolar}
          display={`${solar.toFixed(3)}×`}
        />
      </ControlRows>

      <ToggleRow
        label="Starting state"
        options={['Start warm', 'Start frozen']}
        value={warm ? 0 : 1}
        onChange={(index) => setWarm(index === 0)}
      />

      <Note>
        At <strong>{solar.toFixed(3)}×</strong> present forcing, a planet starting{' '}
        {warm ? 'warm' : 'frozen'} settles at <strong>{t.toFixed(1)} K</strong> —{' '}
        {frozen ? 'frozen to the equator' : 'ice-free at low latitudes'}. Switch the starting state
        at the same forcing and the answer can be different: two stable states for one input. That
        is why escaping a snowball took hundreds of millions of years of volcanic carbon dioxide
        building up with no rain to wash it out. The model here is deliberately simple, and the real
        episodes involved ocean circulation and carbon chemistry it does not represent.
      </Note>
    </Stack>
  );
}
