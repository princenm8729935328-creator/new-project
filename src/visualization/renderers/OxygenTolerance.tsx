import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Oxygen as poison and as opportunity, on the same axis.
 *
 * Two curves crossing is the cleanest way to show that the same molecule did
 * both things. The reader raises the concentration and watches one population
 * collapse while the other becomes possible — which is what actually happened,
 * over roughly a hundred million years.
 */

export default function OxygenTolerance(_props: VisualizationProps): ReactNode {
  const [o2, setO2] = useState(0.2);

  const anaerobe = Math.exp(-((o2 / 0.02) ** 1.1));
  const aerobe = o2 < 0.005 ? 0 : Math.min(1, Math.log10(o2 / 0.002) / 2.2);

  const LEFT = 42;
  const TOP = 24;
  const H = 206;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (v: number): number => LEFT + ((Math.log10(v) + 5) / 5.4) * pw;
  const py = (v: number): number => TOP + ph - v * ph;

  const curve = (fn: (v: number) => number): string =>
    Array.from({ length: 110 }, (_, i) => {
      const v = 10 ** (-5 + (i / 109) * 5.4);
      return `${i === 0 ? 'M' : 'L'}${px(v).toFixed(2)},${py(fn(v)).toFixed(2)}`;
    }).join(' ');

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          how well each kind of organism does
        </text>

        {[0, 0.5, 1].map((f) => (
          <line key={f} x1={LEFT} x2={LEFT + pw} y1={py(f)} y2={py(f)} stroke={C.grid} />
        ))}
        {[-5, -4, -3, -2, -1, 0].map((e) => (
          <g key={e}>
            <line x1={px(10 ** e)} x2={px(10 ** e)} y1={TOP} y2={TOP + ph} stroke={C.grid} />
            <text
              x={px(10 ** e)}
              y={TOP + ph + 13}
              textAnchor="middle"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              10{['⁻⁵', '⁻⁴', '⁻³', '⁻²', '⁻¹', '⁰'][e + 5]}
            </text>
          </g>
        ))}
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          atmospheric oxygen, fraction of today
        </text>

        <path
          d={curve((v) => Math.exp(-((v / 0.02) ** 1.1)))}
          fill="none"
          stroke={C.deep}
          strokeWidth={1.9}
        />
        <path
          d={curve((v) => (v < 0.005 ? 0 : Math.min(1, Math.log10(v / 0.002) / 2.2)))}
          fill="none"
          stroke={C.life}
          strokeWidth={1.9}
        />
        <text x={LEFT + 8} y={TOP + 18} fontSize={8.5} fill={C.deep}>
          anaerobes — oxygen is poison
        </text>
        <text x={LEFT + pw - 6} y={TOP + 32} textAnchor="end" fontSize={8.5} fill={C.life}>
          aerobes — oxygen is fuel
        </text>

        <line
          x1={px(o2)}
          x2={px(o2)}
          y1={TOP}
          y2={TOP + ph}
          stroke="#fff"
          strokeWidth={1}
          opacity={0.6}
        />
        <circle cx={px(o2)} cy={py(anaerobe)} r={4} fill={C.deep} />
        <circle cx={px(o2)} cy={py(aerobe)} r={4} fill={C.life} />
      </Figure>

      <ControlRows>
        <Slider
          name="Oxygen"
          hiddenLabel="Atmospheric oxygen as a fraction of the present level, log scale"
          min={-5}
          max={0.4}
          step={0.05}
          value={Math.log10(o2)}
          onChange={(v) => setO2(10 ** v)}
          display={`${(o2 * 100).toPrecision(2)}% of today`}
        />
      </ControlRows>

      <Note>
        At <strong>{(o2 * 100).toPrecision(2)}%</strong> of present oxygen, anaerobes are at{' '}
        <strong>{(anaerobe * 100).toFixed(0)}%</strong> and aerobes at{' '}
        <strong>{(aerobe * 100).toFixed(0)}%</strong>. Oxygen is a highly reactive molecule that
        damages proteins, membranes and DNA, and for the first two billion years of life it was
        straightforwardly toxic. What changed was not oxygen but the appearance of enzymes that
        neutralise it — and once an organism could survive it, the same reactivity became the
        largest energy source available. Anaerobes did not disappear; they retreated into sediment,
        deep rock and the guts of animals, where they are still enormously abundant. The curves are
        illustrative shapes, not measured data.
      </Note>
    </Stack>
  );
}
