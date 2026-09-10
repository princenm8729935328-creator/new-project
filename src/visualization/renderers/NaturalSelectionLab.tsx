import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Selection with the knobs exposed.
 *
 * Two parameters — how strong the advantage is and how large the population is
 * — produce all the qualitative behaviour worth knowing: strong selection in a
 * large population is deterministic, weak selection in a small one is a coin
 * flip. The reader can find both without being told.
 */

/** Deterministic logistic trajectory of a favoured allele. */
function trajectory(s: number, p0: number, generations: number): number[] {
  const out: number[] = [];
  let p = p0;
  for (let g = 0; g <= generations; g += 1) {
    out.push(p);
    const wbar = p * (1 + s) + (1 - p);
    p = (p * (1 + s)) / wbar;
  }
  return out;
}

export default function NaturalSelectionLab(_props: VisualizationProps): ReactNode {
  const [s, setS] = useState(0.1);
  const [p0, setP0] = useState(0.02);

  const GENS = 200;
  const traj = trajectory(s, p0, GENS);
  const fixGen = traj.findIndex((p) => p > 0.99);

  const LEFT = 42;
  const TOP = 22;
  const H = 202;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (g: number): number => LEFT + (g / GENS) * pw;
  const py = (p: number): number => TOP + ph - p * ph;

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          frequency of the favoured variant
        </text>
        {[0, 0.5, 1].map((p) => (
          <g key={p}>
            <line x1={LEFT} x2={LEFT + pw} y1={py(p)} y2={py(p)} stroke={C.grid} />
            <text
              x={LEFT - 5}
              y={py(p) + 3}
              textAnchor="end"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {p.toFixed(1)}
            </text>
          </g>
        ))}
        {[0, 50, 100, 150, 200].map((g) => (
          <g key={g}>
            <line x1={px(g)} x2={px(g)} y1={TOP} y2={TOP + ph} stroke={C.grid} />
            <text
              x={px(g)}
              y={TOP + ph + 13}
              textAnchor="middle"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {g}
            </text>
          </g>
        ))}
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          generations
        </text>

        <path
          d={traj
            .map((p, g) => `${g === 0 ? 'M' : 'L'}${px(g).toFixed(2)},${py(p).toFixed(2)}`)
            .join(' ')}
          fill="none"
          stroke={C.life}
          strokeWidth={2}
        />
        {fixGen > 0 ? (
          <g>
            <line
              x1={px(fixGen)}
              x2={px(fixGen)}
              y1={TOP}
              y2={TOP + ph}
              stroke={C.warm}
              strokeDasharray="3 3"
            />
            <text x={px(fixGen) + 4} y={TOP + 14} fontSize={8.5} fill={C.warm}>
              99% at generation {fixGen}
            </text>
          </g>
        ) : null}
      </Figure>

      <ControlRows>
        <Slider
          name="Advantage"
          hiddenLabel="Selective advantage per generation"
          min={0.005}
          max={0.4}
          step={0.005}
          value={s}
          onChange={setS}
          display={`+${(s * 100).toFixed(1)}%`}
        />
        <Slider
          name="Starting share"
          hiddenLabel="Initial frequency of the variant"
          min={0.001}
          max={0.2}
          step={0.001}
          value={p0}
          onChange={setP0}
          display={`${(p0 * 100).toFixed(1)}%`}
        />
      </ControlRows>

      <Note>
        A variant with a <strong>{(s * 100).toFixed(1)}%</strong> reproductive advantage, starting
        at <strong>{(p0 * 100).toFixed(1)}%</strong> of the population,{' '}
        {fixGen > 0 ? (
          <>
            reaches 99% after about <strong>{fixGen} generations</strong>.
          </>
        ) : (
          <>has not reached 99% within 200 generations.</>
        )}{' '}
        Two things are worth noticing. Advantages that sound trivially small — one percent — still
        sweep through a population, given time. And the curve is S-shaped: slow while the variant is
        rare, fast in the middle, slow again at the end, because there is less and less left to
        replace. This model is deterministic and ignores genetic drift, which in small populations
        can override selection entirely.
      </Note>
    </Stack>
  );
}
