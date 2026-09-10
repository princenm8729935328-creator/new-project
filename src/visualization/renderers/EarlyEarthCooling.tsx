import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Surface conditions across the first 700 million years.
 *
 * The numbers are model output, not measurements — nothing survives from most
 * of this interval — so the figure marks the one place where the record
 * actually starts: the 4.4-billion-year-old zircon that shows liquid water was
 * present far earlier than the old picture of a permanently molten Hadean
 * allowed.
 */

const T0 = 4568; // Ma, formation
const ZIRCON = 4404;

/** Rough magma-ocean cooling: fast radiative loss, then a slow greenhouse tail. */
function surfaceK(ma: number): number {
  const age = T0 - ma; // Myr since formation
  if (age < 2) return 2100 - age * 250;
  const decay = Math.exp(-(age - 2) / 26);
  return 320 + 1280 * decay;
}

export default function EarlyEarthCooling(_props: VisualizationProps): ReactNode {
  const [ma, setMa] = useState(4450);
  const LEFT = 42;
  const RIGHT = 12;
  const TOP = 24;
  const BOTTOM = 40;
  const H = 212;
  const pw = 380 - LEFT - RIGHT;
  const ph = H - TOP - BOTTOM;
  const px = (m: number): number => LEFT + ((T0 - m) / (T0 - 3900)) * pw;
  const py = (k: number): number => TOP + ph - ((k - 250) / (2150 - 250)) * ph;

  const curve = Array.from({ length: 140 }, (_, i) => {
    const m = T0 - (i / 139) * (T0 - 3900);
    return `${i === 0 ? 'M' : 'L'}${px(m).toFixed(2)},${py(surfaceK(m)).toFixed(2)}`;
  }).join(' ');

  const k = surfaceK(ma);

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          modelled surface temperature, K
        </text>

        <rect
          x={LEFT}
          y={py(2150)}
          width={pw}
          height={py(1400) - py(2150)}
          fill="rgba(255,143,110,0.10)"
        />
        <text x={LEFT + 6} y={py(2150) + 12} fontSize={8} fill={C.hot}>
          rock molten
        </text>
        <rect
          x={LEFT}
          y={py(373)}
          width={pw}
          height={py(273) - py(373)}
          fill="rgba(111,179,255,0.12)"
        />
        <text x={LEFT + 6} y={py(373) - 4} fontSize={8} fill={C.water}>
          liquid water possible
        </text>

        {[500, 1000, 1500, 2000].map((t) => (
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
        {[4500, 4300, 4100, 3900].map((m) => (
          <g key={m}>
            <line x1={px(m)} x2={px(m)} y1={TOP} y2={TOP + ph} stroke={C.grid} />
            <text
              x={px(m)}
              y={TOP + ph + 13}
              textAnchor="middle"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {(m / 1000).toFixed(1)}
            </text>
          </g>
        ))}
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          billions of years ago
        </text>

        <path d={curve} fill="none" stroke={C.hot} strokeWidth={1.9} />

        <line
          x1={px(ZIRCON)}
          x2={px(ZIRCON)}
          y1={TOP}
          y2={TOP + ph}
          stroke={C.life}
          strokeDasharray="4 3"
          strokeWidth={1.4}
        />
        <text x={px(ZIRCON) + 4} y={TOP + 12} fontSize={8.5} fill={C.life}>
          oldest zircon, 4.40 Ga
        </text>

        <circle cx={px(ma)} cy={py(k)} r={5} fill="none" stroke={C.warm} strokeWidth={1.7} />
      </Figure>

      <ControlRows>
        <Slider
          name="Time"
          hiddenLabel="Millions of years before present"
          min={3900}
          max={4560}
          step={5}
          value={ma}
          onChange={setMa}
          display={`${(ma / 1000).toFixed(2)} Ga`}
        />
      </ControlRows>

      <Note>
        At <strong>{(ma / 1000).toFixed(2)} billion years ago</strong> the modelled surface is
        around <strong>{Math.round(k)} K</strong> ({Math.round(k - 273)} °C).{' '}
        {k > 1400
          ? 'Rock is molten: there is no solid surface and no liquid water.'
          : k > 373
            ? 'Solid rock, but water is still steam in the atmosphere.'
            : 'Cool enough for oceans. The curve is a model — the only direct evidence from this interval is a scatter of zircon crystals.'}
      </Note>
    </Stack>
  );
}
