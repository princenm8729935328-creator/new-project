import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Evolution is a change in a population, not in an individual.
 *
 * Drawing the distribution and moving it, rather than drawing an animal
 * changing, is the entire correction this figure exists to make. No individual
 * in the population changes at all — the mix does.
 */

const BINS = 22;

function gaussian(mean: number, sd: number): number[] {
  return Array.from({ length: BINS }, (_, i) => {
    const x = (i / (BINS - 1)) * 10;
    return Math.exp(-((x - mean) ** 2) / (2 * sd * sd));
  });
}

export default function PopulationShift(_props: VisualizationProps): ReactNode {
  const [gen, setGen] = useState(0);
  const mean = 4 + (gen / 20) * 3.2;
  const sd = 1.6 - (gen / 20) * 0.45;
  const bars = gaussian(mean, sd);
  const start = gaussian(4, 1.6);
  const peak = Math.max(...bars, ...start);

  const LEFT = 22;
  const W = 336;
  const BW = W / BINS;
  const BASE = 138;

  return (
    <Stack>
      <Figure height={186}>
        <text x={LEFT} y={14} fontSize={9} fill={C.dim}>
          how many individuals have each beak depth
        </text>

        {start.map((v, i) => (
          <rect
            key={`s${i}`}
            x={LEFT + i * BW}
            y={BASE - (v / peak) * 100}
            width={BW - 1.5}
            height={(v / peak) * 100}
            fill="rgba(148,162,192,0.22)"
          />
        ))}
        {bars.map((v, i) => (
          <rect
            key={i}
            x={LEFT + i * BW}
            y={BASE - (v / peak) * 100}
            width={BW - 1.5}
            height={(v / peak) * 100}
            fill={C.life}
            opacity={0.75}
          />
        ))}

        <line x1={LEFT} y1={BASE} x2={LEFT + W} y2={BASE} stroke={C.grid} strokeWidth={1.2} />
        <text x={LEFT} y={BASE + 14} fontSize={8} fill={C.faint}>
          shallow
        </text>
        <text x={LEFT + W} y={BASE + 14} textAnchor="end" fontSize={8} fill={C.faint}>
          deep
        </text>
        <text x={LEFT + W / 2} y={BASE + 32} textAnchor="middle" fontSize={9} fill={C.dim}>
          beak depth
        </text>
        <text x={LEFT + W} y={26} textAnchor="end" fontSize={8} fill="rgba(148,162,192,0.7)">
          grey: the starting population
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Generations"
          hiddenLabel="Generations of selection"
          min={0}
          max={20}
          step={1}
          value={gen}
          onChange={setGen}
          display={`${gen}`}
        />
      </ControlRows>

      <Note>
        After <strong>{gen}</strong> generation{gen === 1 ? '' : 's'} of drought, in which only
        large hard seeds are available, the average beak depth has moved from 4.0 to{' '}
        <strong>{mean.toFixed(1)}</strong>. Notice what did not happen: no bird&rsquo;s beak grew.
        Birds with deeper beaks cracked the seeds, survived, and had offspring; birds with shallower
        beaks did not. The population changed because its membership changed. Peter and Rosemary
        Grant measured exactly this on Daphne Major in the Galápagos, across drought years, and
        watched it reverse when the rains returned and small seeds came back.
      </Note>
    </Stack>
  );
}
