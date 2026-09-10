import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Stepper, type Stage } from './lifeKit';

/**
 * Accretion, stepped rather than animated.
 *
 * The reason to step it is that the five stages span eight orders of magnitude
 * in time and size, so anything that ran at a single rate would spend its whole
 * duration on one stage and skip the rest in a frame.
 */

function disc(
  cx: number,
  cy: number,
  seeds: readonly (readonly [number, number, number])[],
): ReactNode {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={150} ry={34} fill="rgba(148,162,192,0.08)" />
      {seeds.map(([dx, dy, r], i) => (
        <circle key={i} cx={cx + dx} cy={cy + dy} r={r} fill={C.rock} opacity={0.85} />
      ))}
      <circle cx={cx - 150} cy={cy} r={11} fill={C.warm} />
      <text x={cx - 150} y={cy + 26} textAnchor="middle" fontSize={8} fill={C.warm}>
        Sun
      </text>
    </g>
  );
}

const DUST: readonly (readonly [number, number, number])[] = Array.from({ length: 46 }, (_, i) => {
  const a = i * 2.399;
  return [Math.cos(a) * (26 + (i % 9) * 13), Math.sin(a) * (5 + (i % 7) * 3.4), 1.2] as const;
});

const PEBBLES: readonly (readonly [number, number, number])[] = Array.from(
  { length: 22 },
  (_, i) => {
    const a = i * 2.399;
    return [Math.cos(a) * (30 + (i % 8) * 14), Math.sin(a) * (4 + (i % 5) * 4), 2.6] as const;
  },
);

const EMBRYOS: readonly (readonly [number, number, number])[] = [
  [-60, 6, 7],
  [-14, -8, 9],
  [34, 10, 8],
  [86, -4, 6],
  [124, 8, 5],
];

const STAGES: readonly Stage[] = [
  {
    id: 'dust',
    title: 'Dust in a disc',
    detail:
      'The Sun forms and leaves a flattened disc of gas and dust orbiting it. The solid grains are micrometres across — smoke, essentially — and there is a lot of it.',
    draw: <g transform="translate(0,26)">{disc(190, 78, DUST)}</g>,
  },
  {
    id: 'pebbles',
    title: 'Grains stick together',
    detail:
      'Collisions at low speed let grains stick, first electrostatically and then by gravity. Getting past roughly a metre is the awkward part — objects that size drift inward fast and shatter rather than merge — and how nature crosses that gap is still an active research question.',
    draw: <g transform="translate(0,26)">{disc(190, 78, PEBBLES)}</g>,
  },
  {
    id: 'planetesimals',
    title: 'Planetesimals, then embryos',
    detail:
      'Once bodies reach a kilometre or so, their own gravity takes over and growth accelerates. Within a few million years the disc holds dozens of Moon-to-Mars-sized embryos on crossing orbits.',
    draw: <g transform="translate(0,26)">{disc(190, 78, EMBRYOS)}</g>,
  },
  {
    id: 'giant',
    title: 'Giant impacts',
    detail:
      'The embryos collide. These are not gentle mergers: the last few impacts deliver enough energy to melt a large fraction of the growing planet, and one of them is thought to have produced the Moon.',
    draw: (
      <g transform="translate(0,26)">
        <circle cx={166} cy={78} r={34} fill={C.hot} opacity={0.85} />
        <circle cx={238} cy={62} r={17} fill={C.rock} />
        <path d="M214,68 L196,74" stroke={C.warm} strokeWidth={2} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} cx={196 + i * 9} cy={54 - i * 4} r={2} fill={C.warm} opacity={0.7} />
        ))}
        <text x={190} y={132} textAnchor="middle" fontSize={9} fill={C.dim}>
          energy delivered melts much of the planet
        </text>
      </g>
    ),
  },
  {
    id: 'differentiate',
    title: 'The planet sorts itself',
    detail:
      'A molten Earth separates by density. Iron and nickel sink to form the core; lighter silicates float and become the mantle. Almost all of Earth’s iron is now unreachable, which is why the crust is comparatively poor in it.',
    draw: (
      <g transform="translate(0,26)">
        <circle cx={190} cy={80} r={54} fill={C.rock} opacity={0.5} />
        <circle cx={190} cy={80} r={30} fill={C.hot} opacity={0.85} />
        <text x={190} y={83} textAnchor="middle" fontSize={9} fill="#1a1410">
          iron core
        </text>
        <text x={190} y={150} textAnchor="middle" fontSize={9} fill={C.dim}>
          dense metal sinks, silicate rock floats
        </text>
      </g>
    ),
  },
];

export default function EarthAccretion(_props: VisualizationProps): ReactNode {
  return <Stepper stages={STAGES} height={172} label="Stage" />;
}
