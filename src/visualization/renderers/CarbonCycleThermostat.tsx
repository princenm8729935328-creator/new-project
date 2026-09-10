import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * The silicate-weathering feedback, run as a small model the reader can push.
 *
 * The equations are a deliberately crude version of the Walker–Hays–Kasting
 * thermostat: weathering rate rises with temperature, temperature rises with
 * carbon dioxide, and the intersection is the steady state. It reproduces the
 * behaviour that matters — that raising the volcanic input raises the
 * temperature far less than it raises the input — without pretending to be a
 * research model.
 */

const T0 = 288; // K, reference
const V0 = 1; // reference volcanic input

/** Weathering removal, normalised, as a function of temperature. */
function weathering(tK: number): number {
  return Math.exp((tK - T0) / 13.7);
}

/** Temperature from CO2, logarithmic greenhouse forcing. */
function tempFor(co2: number): number {
  return T0 + 4.2 * Math.log2(co2);
}

/** Solve for the steady state at a given volcanic input. */
function steady(volcanic: number): { co2: number; tK: number } {
  let lo = 0.01;
  let hi = 4000;
  for (let i = 0; i < 80; i += 1) {
    const mid = Math.sqrt(lo * hi);
    if (weathering(tempFor(mid)) < volcanic) lo = mid;
    else hi = mid;
  }
  const co2 = Math.sqrt(lo * hi);
  return { co2, tK: tempFor(co2) };
}

export default function CarbonCycleThermostat(_props: VisualizationProps): ReactNode {
  const [volcanic, setVolcanic] = useState(V0);
  const { co2, tK } = steady(volcanic);

  const LEFT = 44;
  const TOP = 26;
  const H = 208;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (v: number): number => LEFT + ((Math.log10(v) + 2) / 5) * pw;
  const py = (t: number): number => TOP + ph - ((t - 258) / 60) * ph;

  const curve = Array.from({ length: 90 }, (_, i) => {
    const c = 10 ** (-2 + (i / 89) * 5);
    return `${i === 0 ? 'M' : 'L'}${px(c).toFixed(2)},${py(tempFor(c)).toFixed(2)}`;
  }).join(' ');

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          global mean temperature, K
        </text>

        <rect
          x={LEFT}
          y={py(273)}
          width={pw}
          height={Math.max(TOP + ph - py(273), 0)}
          fill="rgba(111,179,255,0.10)"
        />
        <text x={LEFT + 5} y={py(273) + 11} fontSize={8} fill={C.water}>
          below freezing
        </text>

        {[270, 285, 300, 315].map((t) => (
          <g key={t}>
            <line x1={LEFT} x2={LEFT + pw} y1={py(t)} y2={py(t)} stroke={C.grid} />
            <text
              x={LEFT - 5}
              y={py(t) + 3}
              textAnchor="end"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {t}
            </text>
          </g>
        ))}
        {[0.01, 0.1, 1, 10, 100, 1000].map((c) => (
          <g key={c}>
            <line x1={px(c)} x2={px(c)} y1={TOP} y2={TOP + ph} stroke={C.grid} />
            <text
              x={px(c)}
              y={TOP + ph + 13}
              textAnchor="middle"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {c < 1 ? c : c.toLocaleString()}
            </text>
          </g>
        ))}
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          atmospheric CO₂, multiples of today
        </text>

        <path d={curve} fill="none" stroke={C.hot} strokeWidth={1.8} />
        <circle cx={px(co2)} cy={py(tK)} r={5} fill={C.life} />
        <line
          x1={px(1)}
          x2={px(1)}
          y1={TOP}
          y2={TOP + ph}
          stroke="rgba(79,224,192,0.35)"
          strokeDasharray="3 3"
        />
        <text x={px(1) + 4} y={TOP + 11} fontSize={8} fill="rgba(79,224,192,0.8)">
          today
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Volcanic CO₂"
          hiddenLabel="Volcanic carbon dioxide input, multiples of today"
          min={0.2}
          max={5}
          step={0.05}
          value={volcanic}
          onChange={setVolcanic}
          display={`${volcanic.toFixed(2)}×`}
        />
      </ControlRows>

      <Note>
        Multiplying the volcanic input by <strong>{volcanic.toFixed(2)}</strong> settles the system
        at <strong>{co2.toPrecision(2)}×</strong> today&rsquo;s CO₂ and{' '}
        <strong>{tK.toFixed(1)} K</strong> — {(tK - 288).toFixed(1)} K from the present value.
        Notice the asymmetry: a fivefold change in input moves the temperature by only about twenty
        degrees, because warming speeds up weathering, which removes carbon dioxide, which limits
        the warming. This is a simplified model of the real feedback, and it takes hundreds of
        thousands of years to act.
      </Note>
    </Stack>
  );
}
