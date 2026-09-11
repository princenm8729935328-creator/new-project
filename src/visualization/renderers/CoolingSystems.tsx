import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why a human outlasts a faster animal in the heat.
 *
 * Core temperature against time under load, for two cooling strategies. The
 * crossing point is the argument: the quadruped wins the race and loses the
 * pursuit, and the reason is the ceiling on its cooling rather than its legs.
 */

export default function CoolingSystems(_props: VisualizationProps): ReactNode {
  const [ambient, setAmbient] = useState(32);

  // Heat production rises with effort; panting cooling is capped and falls off
  // as ambient temperature rises, while sweating scales further.
  const pantCap = Math.max(0.15, 1.05 - (ambient - 20) * 0.035);
  const sweatCap = Math.max(0.4, 1.55 - (ambient - 20) * 0.018);
  const production = 1.0;

  const rise = (cap: number, minutes: number): number =>
    Math.max(0, (production - cap) * minutes * 0.055);

  const LEFT = 44;
  const RIGHT = 16;
  const TOP = 30;
  const BOT = 146;
  const W = 380 - LEFT - RIGHT;
  const maxT = 6;
  const toX = (m: number): number => LEFT + (m / 120) * W;
  const toY = (d: number): number => BOT - (Math.min(d, maxT) / maxT) * (BOT - TOP);

  const path = (cap: number): string =>
    Array.from({ length: 61 }, (_, i) => {
      const m = i * 2;
      return `${i === 0 ? 'M' : 'L'}${toX(m).toFixed(1)},${toY(rise(cap, m)).toFixed(1)}`;
    }).join(' ');

  const failAt = (cap: number): number | null => {
    for (let m = 0; m <= 120; m += 1) if (rise(cap, m) >= 4) return m;
    return null;
  };
  const quadFail = failAt(pantCap);
  const humanFail = failAt(sweatCap);

  return (
    <Stack>
      <Figure height={196}>
        <line x1={LEFT} y1={BOT} x2={LEFT + W} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        <rect
          x={LEFT}
          y={toY(maxT)}
          width={W}
          height={toY(4) - toY(maxT)}
          fill="rgba(255,143,110,0.12)"
        />
        <text x={LEFT + 6} y={toY(4) - 4} fontSize={7.5} fill={C.hot}>
          collapse: +4 °C core
        </text>

        <path d={path(pantCap)} fill="none" stroke={C.hot} strokeWidth={2} />
        <path d={path(sweatCap)} fill="none" stroke={C.life} strokeWidth={2} />

        <text
          x={LEFT + W}
          y={toY(rise(pantCap, 120)) - 6}
          textAnchor="end"
          fontSize={8}
          fill={C.hot}
        >
          panting quadruped
        </text>
        <text
          x={LEFT + W}
          y={toY(rise(sweatCap, 120)) - 6}
          textAnchor="end"
          fontSize={8}
          fill={C.life}
        >
          sweating human
        </text>

        {[0, 30, 60, 90, 120].map((m) => (
          <text key={m} x={toX(m)} y={BOT + 12} textAnchor="middle" fontSize={7} fill={C.faint}>
            {m}
          </text>
        ))}
        <text x={LEFT + W / 2} y={BOT + 26} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          minutes of sustained effort
        </text>
        {[0, 2, 4, 6].map((d) => (
          <text key={d} x={LEFT - 6} y={toY(d) + 3} textAnchor="end" fontSize={7} fill={C.faint}>
            +{d}
          </text>
        ))}
        <text x={14} y={TOP - 12} fontSize={7.5} fill={C.faint}>
          core temperature rise (°C)
        </text>

        <text x={LEFT} y={184} fontSize={8.5} fill={C.dim}>
          {quadFail === null
            ? 'at this temperature both can keep going'
            : `quadruped must stop at ~${quadFail} min${humanFail === null ? '; human can continue' : `; human at ~${humanFail} min`}`}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Air temperature"
          hiddenLabel="Ambient air temperature in degrees Celsius"
          min={18}
          max={42}
          step={1}
          value={ambient}
          onChange={setAmbient}
          display={`${ambient} °C`}
        />
      </ControlRows>

      <Note>
        Sustained running is limited by heat, not by muscle. Most mammals shed it by panting, which
        works well at rest and badly at a gallop: in a bounding gait the gut slams the diaphragm
        once per stride, locking breathing rate to speed, so cooling cannot be increased without
        changing gait. Sweating has no such constraint — it is spread over the whole skin and is
        independent of breathing — and humans have roughly ten times the sweat gland density of
        other primates, with the highest measured capacity of any mammal. Raise the air temperature
        here and the panting curve fails first, by a widening margin. The curves are illustrative
        rather than measured physiology, and real animals vary enormously; the asymmetry between the
        two cooling routes is the part that is well established.
      </Note>
    </Stack>
  );
}
