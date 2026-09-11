import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Unconscious selection, run forward generation by generation.
 *
 * Nobody in this model intends anything. Watching a rare mutant go to fixation
 * purely because of how harvesting works is the fastest way to show that
 * domestication needed no plan.
 */

export default function DomesticationSelection(_props: VisualizationProps): ReactNode {
  const [harvest, setHarvest] = useState(0.7);
  const [gens, setGens] = useState(30);

  // Non-shattering plants keep their seed until harvested; shattering ones drop
  // most of it before the sickle arrives. `harvest` is the share of a
  // non-shattering plant's seed that reaches the seed store.
  const freqs: number[] = [];
  let p = 0.01;
  for (let g = 0; g <= 60; g += 1) {
    freqs.push(p);
    const wNon = harvest;
    const wShatter = harvest * 0.12;
    p = (p * wNon) / (p * wNon + (1 - p) * wShatter);
  }
  const current = freqs[Math.min(gens, freqs.length - 1)] ?? 0;

  const LEFT = 42;
  const RIGHT = 14;
  const TOP = 26;
  const BOT = 138;
  const W = 380 - LEFT - RIGHT;
  const toX = (g: number): number => LEFT + (g / 60) * W;
  const toY = (f: number): number => BOT - f * (BOT - TOP);
  const path = freqs
    .map((f, g) => `${g === 0 ? 'M' : 'L'}${toX(g).toFixed(1)},${toY(f).toFixed(1)}`)
    .join(' ');

  return (
    <Stack>
      <Figure height={196}>
        <line x1={LEFT} y1={BOT} x2={LEFT + W} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        {[0, 0.5, 1].map((f) => (
          <g key={f}>
            <line x1={LEFT} y1={toY(f)} x2={LEFT + W} y2={toY(f)} stroke="rgba(148,162,192,0.1)" />
            <text x={LEFT - 5} y={toY(f) + 3} textAnchor="end" fontSize={7} fill={C.faint}>
              {f * 100}%
            </text>
          </g>
        ))}
        <path d={path} fill="none" stroke={C.life} strokeWidth={2.2} />
        <line
          x1={toX(gens)}
          y1={TOP}
          x2={toX(gens)}
          y2={BOT}
          stroke={C.warm}
          strokeDasharray="3 3"
        />
        <circle cx={toX(gens)} cy={toY(current)} r={6} fill={C.warm} />
        <text x={toX(gens)} y={toY(current) - 10} textAnchor="middle" fontSize={9} fill={C.warm}>
          {Math.round(current * 100)}%
        </text>

        <text x={12} y={18} fontSize={7.5} fill={C.faint}>
          share of the crop that does not shatter
        </text>
        {[0, 20, 40, 60].map((g) => (
          <text key={g} x={toX(g)} y={BOT + 13} textAnchor="middle" fontSize={7} fill={C.faint}>
            {g}
          </text>
        ))}
        <text x={LEFT + W / 2} y={BOT + 26} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          harvest-and-sow cycles
        </text>
        <text x={LEFT} y={186} fontSize={8} fill={C.dim}>
          nobody in this model is choosing anything
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Harvest efficiency"
          hiddenLabel="Share of a non-shattering plant's seed that reaches the seed store"
          min={0.2}
          max={0.95}
          step={0.05}
          value={harvest}
          onChange={setHarvest}
          display={`${Math.round(harvest * 100)}%`}
        />
        <Slider
          name="Generations"
          hiddenLabel="Number of harvest and sowing cycles"
          min={0}
          max={60}
          step={1}
          value={gens}
          onChange={setGens}
          display={`${gens}`}
        />
      </ControlRows>

      <Note>
        A wild wheat plant falls apart when its seeds ripen: the stalk holding the seed head becomes
        brittle and shatters, scattering grain onto the ground. That is how a wild grass reproduces,
        and it makes the plant nearly useless to harvest. Occasionally a mutant appears whose stalk
        stays intact — badly disadvantaged in the wild, since its seeds never disperse, and the only
        plant whose seed actually reaches your basket. Add one more step, sowing part of what you
        harvested, and you have run a selective breeding programme without deciding anything. The
        same logic produced larger seeds, loss of the dormancy that staggers germination, and
        reduced toxins: each one helps the plant survive in the wild and helps the farmer in a
        field. Archaeobotanical sequences show roughly the timescale this model gives. Animals show
        something stranger — selecting for tameness alone produces smaller bodies, shorter faces,
        floppy ears and patchy coats as a package, by a mechanism that is still argued about.
      </Note>
    </Stack>
  );
}
