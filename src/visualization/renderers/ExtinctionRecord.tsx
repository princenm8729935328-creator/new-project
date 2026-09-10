import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * Extinction intensity through the Phanerozoic, with the big five marked.
 *
 * The background rate is the part usually left out, and it is the part that
 * changes the reading: extinction is continuous, and the famous events are
 * spikes on top of a process that never stops. Values are illustrative of the
 * Sepkoski-derived curves rather than a reproduction of any one dataset.
 */

interface Spike {
  readonly ma: number;
  readonly name: string;
  readonly loss: number;
  readonly detail: string;
}

const SPIKES: readonly Spike[] = [
  {
    ma: 444,
    name: 'End-Ordovician',
    loss: 85,
    detail:
      'Rapid glaciation dropped sea level and drained the shallow shelf seas where nearly all life lived, then the ice melted and flooded them again. Almost entirely a marine event — there was very little on land yet to lose.',
  },
  {
    ma: 372,
    name: 'Late Devonian',
    loss: 75,
    detail:
      'A prolonged series of pulses rather than a single event. Widespread ocean anoxia is the leading cause, possibly driven by nutrient runoff from the newly forested continents — an extinction that life may have caused.',
  },
  {
    ma: 252,
    name: 'End-Permian',
    loss: 90,
    detail:
      'The largest in the record: perhaps 90% of marine species and 70% of land vertebrates. The Siberian Traps erupted through coal deposits, releasing carbon dioxide, methane and halocarbons. The oceans warmed, acidified and lost oxygen. Recovery took around ten million years.',
  },
  {
    ma: 201,
    name: 'End-Triassic',
    loss: 76,
    detail:
      'Volcanism associated with the break-up of Pangaea. It removed most of the crocodile-line archosaurs that had dominated land ecosystems — and dinosaurs, until then a minor group, expanded into what was left.',
  },
  {
    ma: 66,
    name: 'End-Cretaceous',
    loss: 76,
    detail:
      'The asteroid impact at Chicxulub, with the Deccan Traps erupting across the same interval. Nothing on land above about 25 kilograms survived. Mammals had existed for 150 million years and only now expanded.',
  },
];

export default function ExtinctionRecord(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(2);
  const spike = SPIKES[Math.min(pick, SPIKES.length - 1)];

  const LEFT = 26;
  const W = 328;
  const TOP = 24;
  const PH = 96;
  const px = (ma: number): number => LEFT + ((540 - ma) / 540) * W;
  const py = (v: number): number => TOP + PH - (v / 100) * PH;

  // Background rate plus the spikes.
  const points = Array.from({ length: 200 }, (_, i) => {
    const ma = 540 - (i / 199) * 540;
    let v = 14 + Math.sin(i * 0.7) * 4 + Math.sin(i * 0.23) * 5;
    for (const s of SPIKES) v = Math.max(v, s.loss * Math.exp(-(((ma - s.ma) / 7) ** 2)));
    return `${i === 0 ? 'M' : 'L'}${px(ma).toFixed(2)},${py(v).toFixed(2)}`;
  }).join(' ');

  return (
    <Stack>
      <Figure height={196}>
        <text x={3} y={12} fontSize={9} fill={C.dim}>
          extinction intensity, % of genera lost
        </text>
        {[0, 50, 100].map((v) => (
          <g key={v}>
            <line x1={LEFT} x2={LEFT + W} y1={py(v)} y2={py(v)} stroke={C.grid} />
            <text
              x={LEFT - 4}
              y={py(v) + 3}
              textAnchor="end"
              fontSize={7.5}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {v}
            </text>
          </g>
        ))}
        <path d={points} fill="none" stroke={C.hot} strokeWidth={1.5} />

        {SPIKES.map((s, i) => (
          <g key={s.name} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
            <rect x={px(s.ma) - 12} y={TOP - 8} width={24} height={PH + 16} fill="transparent" />
            <circle
              cx={px(s.ma)}
              cy={py(s.loss)}
              r={i === pick ? 5 : 3}
              fill={i === pick ? '#fff' : C.hot}
            />
          </g>
        ))}

        <line x1={LEFT} y1={TOP + PH} x2={LEFT + W} y2={TOP + PH} stroke={C.grid} />
        {[540, 400, 250, 100, 0].map((ma) => (
          <text
            key={ma}
            x={px(ma)}
            y={TOP + PH + 14}
            textAnchor="middle"
            fontSize={7.5}
            fill={C.faint}
            fontFamily="ui-monospace, monospace"
          >
            {ma}
          </text>
        ))}
        <text x={LEFT + W / 2} y={TOP + PH + 30} textAnchor="middle" fontSize={9} fill={C.dim}>
          millions of years ago
        </text>
        <text x={LEFT} y={TOP + PH + 50} fontSize={8.5} fill={C.warm}>
          the line never reaches zero — extinction is continuous
        </text>
      </Figure>

      <Note>
        {spike ? (
          <>
            <strong>
              {spike.name}, {spike.ma} million years ago — around {spike.loss}% of genera.
            </strong>{' '}
            {spike.detail}
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
