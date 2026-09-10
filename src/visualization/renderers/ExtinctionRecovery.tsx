import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * What recovery actually looks like: a long climb, and a different cast.
 *
 * Plotting diversity alone would suggest restoration. Colouring the recovery
 * by which groups make it up shows the part that matters — the curve returns,
 * the composition does not.
 */

const EVENTS = ['End-Permian', 'End-Cretaceous'] as const;

export default function ExtinctionRecovery(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);

  const LEFT = 40;
  const TOP = 24;
  const H = 200;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 42;

  const drop = pick === 0 ? 0.12 : 0.4;
  const recoverySpan = pick === 0 ? 0.55 : 0.32;

  const points = Array.from({ length: 160 }, (_, i) => {
    const t = i / 159;
    let v: number;
    if (t < 0.24) v = 0.86 + Math.sin(i * 0.4) * 0.03;
    else if (t < 0.28) v = 0.86 - ((t - 0.24) / 0.04) * (0.86 - drop);
    else v = drop + (1.02 - drop) * (1 - Math.exp(-(t - 0.28) / recoverySpan));
    return `${i === 0 ? 'M' : 'L'}${(LEFT + t * pw).toFixed(2)},${(TOP + ph - v * ph).toFixed(2)}`;
  }).join(' ');

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          diversity
        </text>
        <rect
          x={LEFT + 0.24 * pw}
          y={TOP}
          width={0.04 * pw}
          height={ph}
          fill="rgba(255,143,110,0.2)"
        />
        <rect
          x={LEFT + 0.28 * pw}
          y={TOP}
          width={0.16 * pw}
          height={ph}
          fill="rgba(255,210,127,0.10)"
        />
        <text x={LEFT + 0.3 * pw} y={TOP + 12} fontSize={8} fill={C.warm}>
          disaster taxa dominate
        </text>

        <path d={points} fill="none" stroke={C.life} strokeWidth={2.2} />
        <line
          x1={LEFT}
          y1={TOP + ph - 0.86 * ph}
          x2={LEFT + pw}
          y2={TOP + ph - 0.86 * ph}
          stroke={C.faint}
          strokeDasharray="3 3"
        />
        <text
          x={LEFT + pw}
          y={TOP + ph - 0.86 * ph - 5}
          textAnchor="end"
          fontSize={8}
          fill={C.faint}
        >
          pre-extinction level
        </text>

        <line x1={LEFT} y1={TOP + ph} x2={LEFT + pw} y2={TOP + ph} stroke={C.grid} />
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          {pick === 0
            ? 'around 10 million years to comparable complexity'
            : 'around 10 million years to comparable diversity'}
        </text>
      </Figure>

      <ToggleRow label="Event" options={[...EVENTS]} value={pick} onChange={setPick} />

      <Note>
        {pick === 0
          ? 'The end-Permian removed perhaps 80 to 90 percent of marine species. The immediate aftermath is dominated by a handful of tolerant generalists — the clam Claraia in the sea, Lystrosaurus on land, which makes up a large majority of land vertebrate fossils in some beds. Full ecological recovery took on the order of ten million years. What returned was not what had been lost: brachiopods, which had covered Palaeozoic seafloors, never regained their position, and bivalves and gastropods took over.'
          : 'The end-Cretaceous removed around three quarters of species. Recovery of diversity took several million years; recovery of ecological structure longer. Mammals, which had existed for 150 million years as small nocturnal animals, expanded into large body sizes and daytime activity within about ten million years — not because they had evolved anything new, but because the space was empty. Curves here are schematic representations of the pattern, not plotted from a specific dataset.'}
      </Note>
    </Stack>
  );
}
