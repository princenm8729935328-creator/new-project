import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * How far stone travelled, by period.
 *
 * Distance is a measurement — obsidian carries an outcrop-level chemical
 * fingerprint — which makes this unusually solid evidence about social
 * organisation. What it implies is an inference, and the note says so.
 */

interface Period {
  readonly key: string;
  readonly ka: string;
  readonly km: number;
  readonly reading: string;
}

const PERIODS: readonly Period[] = [
  {
    key: 'Oldowan',
    ka: '2.6–1.7 Ma',
    km: 3,
    reading:
      'Stone picked up within a few kilometres of where it was used — consistent with carrying material around a home range. Even this is informative: it means anticipating a need at a place you are not yet at.',
  },
  {
    key: 'Acheulean',
    ka: '1.76–0.3 Ma',
    km: 8,
    reading:
      'Slightly further, with some selection of raw material, but still within the scale of a group’s own movements.',
  },
  {
    key: 'Early Middle Stone Age',
    ka: '~320 ka',
    km: 60,
    reading:
      'The jump. Obsidian at Olorgesailie sourced from 25 to 95 kilometres away, alongside processed pigment. Either individual groups ranged over vastly larger territories, or material passed between groups.',
  },
  {
    key: 'Later Middle Stone Age',
    ka: '~100–50 ka',
    km: 120,
    reading:
      'Shells carried tens of kilometres inland, ornaments in standard forms across regions, and raw material moving further again.',
  },
  {
    key: 'Upper Palaeolithic',
    ka: '~40–15 ka',
    km: 400,
    reading:
      'Materials moving hundreds of kilometres across Europe, with regionally shared styles. Networks of relationships spanning far more people than any one band contains.',
  },
];

export default function ExchangeDistance(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(2);
  const p = PERIODS[Math.min(pick, PERIODS.length - 1)];
  if (!p) return null;

  const LEFT = 130;
  const W = 220;
  const toW = (km: number): number => Math.max((Math.log10(km) / Math.log10(500)) * W, 8);

  return (
    <Stack>
      <Figure height={186}>
        <text x={LEFT} y={16} fontSize={8.5} fill={C.dim}>
          distance from stone source to find-spot
        </text>
        {PERIODS.map((x, i) => {
          const y = 36 + i * 28;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <text
                x={LEFT - 8}
                y={y + 4}
                textAnchor="end"
                fontSize={7.5}
                fill={active ? C.life : C.dim}
              >
                {x.key}
              </text>
              <text x={LEFT - 8} y={y + 13} textAnchor="end" fontSize={6.5} fill={C.faint}>
                {x.ka}
              </text>
              <rect
                x={LEFT}
                y={y - 5}
                width={toW(x.km)}
                height={13}
                rx={3}
                fill={active ? C.life : 'rgba(79,224,192,0.4)'}
              />
              {/* Inside the bar once it is long enough that a trailing label
                  would run past the right edge of the figure. */}
              <text
                x={LEFT + toW(x.km) + (toW(x.km) > 180 ? -6 : 6)}
                y={y + 5}
                textAnchor={toW(x.km) > 180 ? 'end' : 'start'}
                fontSize={8}
                fill={toW(x.km) > 180 ? 'rgba(9,16,14,0.9)' : C.faint}
              >
                ~{x.km} km
              </text>
            </g>
          );
        })}
        {[10, 100].map((v) => (
          <g key={v}>
            <line
              x1={LEFT + toW(v)}
              y1={26}
              x2={LEFT + toW(v)}
              y2={172}
              stroke="rgba(148,162,192,0.12)"
            />
            <text x={LEFT + toW(v)} y={182} textAnchor="middle" fontSize={7} fill={C.faint}>
              {v} km
            </text>
          </g>
        ))}
        <text x={14} y={182} fontSize={7} fill={C.faint}>
          log scale
        </text>
      </Figure>

      <ToggleRow
        label="Period"
        options={PERIODS.map((x) => x.key.split(' ')[0] ?? x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>
          {p.key} ({p.ka}).
        </strong>{' '}
        {p.reading} Obsidian is volcanic glass and each eruption produces glass with its own
        trace-element fingerprint, so a tool can be matched to the specific outcrop it came from —
        which makes the distance a measurement rather than an interpretation. What it implies is an
        inference, and a reasonable one: a group ranging over a hundred kilometres of varied terrain
        would leave other traces, and the pattern appears alongside pigment use and other markers of
        social signalling. Exchange between groups requires meeting without violence, some notion of
        reciprocity, and probably a way of marking who you are and who you are connected to — which
        is where ornament comes in. It also matters for knowledge: groups connected to other groups
        have access to more people who know things, and a network of connected bands behaves, for
        the purposes of retaining techniques, like a much larger population than any one band.
      </Note>
    </Stack>
  );
}
