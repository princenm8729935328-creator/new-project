import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Standing diversity as the balance of two rates.
 *
 * Once a reader sees that diversity is origination minus extinction rather than
 * an accumulating total, extinction stops looking like the opposite of
 * evolution. The slider makes the balance explicit.
 */

export default function DiversityTurnover(_props: VisualizationProps): ReactNode {
  const [origination, setOrigination] = useState(0.12);
  const [extinction, setExtinction] = useState(0.1);

  const STEPS = 200;
  const series: number[] = [];
  let d = 1;
  for (let t = 0; t < STEPS; t += 1) {
    series.push(d);
    d = Math.max(0.02, d * (1 + origination - extinction));
  }

  const LEFT = 40;
  const TOP = 22;
  const H = 198;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const maxV = Math.max(...series, 2);
  const px = (t: number): number => LEFT + (t / STEPS) * pw;
  const py = (v: number): number => TOP + ph - (v / maxV) * ph;

  const end = series[STEPS - 1] ?? 1;
  const lifespan = extinction > 0 ? 1 / extinction : Infinity;

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          number of species alive
        </text>
        <path
          d={series
            .map((v, t) => `${t === 0 ? 'M' : 'L'}${px(t).toFixed(2)},${py(v).toFixed(2)}`)
            .join(' ')}
          fill="none"
          stroke={C.life}
          strokeWidth={2.2}
        />
        <line
          x1={LEFT}
          y1={py(1)}
          x2={LEFT + pw}
          y2={py(1)}
          stroke={C.faint}
          strokeDasharray="3 3"
        />
        <text x={LEFT + pw} y={py(1) - 5} textAnchor="end" fontSize={8} fill={C.faint}>
          starting level
        </text>
        <line x1={LEFT} y1={TOP + ph} x2={LEFT + pw} y2={TOP + ph} stroke={C.grid} />
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          time
        </text>
        <text
          x={LEFT + 8}
          y={TOP + 16}
          fontSize={9}
          fill={origination > extinction ? C.life : C.hot}
        >
          {origination > extinction
            ? 'diversity rising'
            : origination < extinction
              ? 'diversity falling'
              : 'diversity steady'}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="New species"
          hiddenLabel="Origination rate"
          min={0}
          max={0.25}
          step={0.005}
          value={origination}
          onChange={setOrigination}
          display={`${(origination * 100).toFixed(1)}%`}
        />
        <Slider
          name="Species lost"
          hiddenLabel="Extinction rate"
          min={0}
          max={0.25}
          step={0.005}
          value={extinction}
          onChange={setExtinction}
          display={`${(extinction * 100).toFixed(1)}%`}
        />
      </ControlRows>

      <Note>
        With these rates, diversity ends at <strong>{end.toFixed(2)}×</strong> its starting value,
        and the average species lasts about{' '}
        <strong>{Number.isFinite(lifespan) ? lifespan.toFixed(0) : '∞'}</strong> time units.
        Standing diversity is not a total that accumulates; it is the difference between two ongoing
        processes, and both run all the time. Over 99% of species that have ever lived are extinct,
        and the typical species in the fossil record persists a few million years. That is not
        evolution failing — it is what turnover looks like. Mass extinctions are visible in the
        record as brief intervals when the second rate spikes far above the first, and they differ
        from ordinary extinction not just in rate but in which traits help you survive.
      </Note>
    </Stack>
  );
}
