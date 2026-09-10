import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The explosion, and the two things that make it look larger than it was.
 *
 * The fossil view is the familiar sudden appearance. The molecular view shows
 * the lineages diverging long before, invisibly. Neither view alone is honest:
 * the fossils are real and the divergences are real, and the gap between them
 * is where the argument lives.
 */

const VIEWS = ['Fossil record', 'Molecular clocks', 'Why the difference'] as const;

export default function CambrianExplosion(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const LEFT = 24;
  const W = 320;
  const x = (ma: number): number => LEFT + ((700 - ma) / 250) * W;

  const notes = [
    'In the fossil record, most animal phyla appear within roughly twenty million years starting about 538 million years ago. Before that there are traces and the strange Ediacaran forms; after it there are arthropods, molluscs, chordates and almost every body plan alive today.',
    'Molecular clocks — counting genetic differences between living groups and calibrating against known fossils — put the divergences of those same lineages substantially earlier, often in the Ediacaran or before. The animals existed; they were small and soft, and they did not fossilise.',
    'Two things changed at once. Animals started making mineralised skeletons, which fossilise, largely in response to predation. And oxygen rose enough to support larger, more active bodies. So the record shows a genuine ecological revolution, and it also shows an artefact — a change in what could be preserved. The relative size of the two effects is still argued about.',
  ];

  return (
    <Stack>
      <Figure height={182}>
        <line x1={LEFT} y1={148} x2={LEFT + W} y2={148} stroke={C.grid} strokeWidth={1.4} />
        {[700, 640, 580, 520, 460].map((ma) => (
          <g key={ma}>
            <line x1={x(ma)} y1={144} x2={x(ma)} y2={152} stroke={C.faint} />
            <text
              x={x(ma)}
              y={164}
              textAnchor="middle"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {ma}
            </text>
          </g>
        ))}
        <text x={LEFT + W / 2} y={178} textAnchor="middle" fontSize={8.5} fill={C.dim}>
          millions of years ago
        </text>

        <rect
          x={x(538)}
          y={20}
          width={x(518) - x(538)}
          height={122}
          fill="rgba(255,143,110,0.12)"
        />
        <text x={x(528)} y={18} textAnchor="middle" fontSize={8} fill={C.hot}>
          Cambrian
        </text>

        {['Arthropods', 'Molluscs', 'Chordates', 'Echinoderms', 'Annelids'].map((name, i) => {
          const y = 34 + i * 22;
          const fossil = [521, 535, 518, 525, 518][i] ?? 520;
          const molecular = [660, 672, 650, 640, 668][i] ?? 650;
          const start = view === 0 ? fossil : molecular;
          return (
            <g key={name}>
              {view !== 0 ? (
                <line
                  x1={x(molecular)}
                  y1={y}
                  x2={x(fossil)}
                  y2={y}
                  stroke={C.deep}
                  strokeWidth={2}
                  strokeDasharray="3 3"
                  opacity={0.7}
                />
              ) : null}
              <line x1={x(fossil)} y1={y} x2={LEFT + W} y2={y} stroke={C.life} strokeWidth={2.4} />
              <circle cx={x(start)} cy={y} r={3.4} fill={view === 0 ? C.life : C.deep} />
              <text x={LEFT + W} y={y - 5} textAnchor="end" fontSize={8} fill={C.dim}>
                {name}
              </text>
            </g>
          );
        })}

        {view !== 0 ? (
          <text x={LEFT + 4} y={140} fontSize={8} fill={C.deep}>
            dashed: inferred from genetics, no fossils
          </text>
        ) : null}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>{notes[view]}</Note>
    </Stack>
  );
}
