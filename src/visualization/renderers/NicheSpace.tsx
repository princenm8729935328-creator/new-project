import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * A niche is a region in a space of conditions, not a place.
 *
 * Two axes is already enough to make the point, and the toggle between
 * fundamental and realised niche carries the part that is usually skipped:
 * competition shrinks the region an organism actually occupies below the region
 * it could occupy.
 */

const VIEWS = ['What it could tolerate', 'Where it actually lives'] as const;

export default function NicheSpace(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const LEFT = 46;
  const TOP = 22;
  const W = 250;
  const HT = 130;

  return (
    <Stack>
      <Figure height={196}>
        <rect x={LEFT} y={TOP} width={W} height={HT} fill={C.panel} rx={3} />

        <ellipse
          cx={LEFT + 120}
          cy={TOP + 64}
          rx={90}
          ry={50}
          fill="rgba(79,224,192,0.22)"
          stroke={C.life}
          strokeDasharray="4 3"
        />
        {view === 1 ? (
          <>
            <ellipse
              cx={LEFT + 178}
              cy={TOP + 52}
              rx={78}
              ry={44}
              fill="rgba(255,143,110,0.16)"
              stroke={C.hot}
              strokeDasharray="4 3"
            />
            <ellipse
              cx={LEFT + 86}
              cy={TOP + 78}
              rx={52}
              ry={34}
              fill="rgba(79,224,192,0.55)"
              stroke={C.life}
            />
            <text x={LEFT + 86} y={TOP + 82} textAnchor="middle" fontSize={8.5} fill="#0f1a17">
              realised
            </text>
            <text x={LEFT + 206} y={TOP + 30} textAnchor="middle" fontSize={8} fill={C.hot}>
              competitor
            </text>
          </>
        ) : (
          <text x={LEFT + 120} y={TOP + 68} textAnchor="middle" fontSize={8.5} fill={C.life}>
            fundamental niche
          </text>
        )}

        <line x1={LEFT} y1={TOP + HT} x2={LEFT + W} y2={TOP + HT} stroke={C.grid} />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={TOP + HT} stroke={C.grid} />
        <text x={LEFT + W / 2} y={TOP + HT + 18} textAnchor="middle" fontSize={9} fill={C.dim}>
          temperature
        </text>
        <text
          x={12}
          y={TOP + HT / 2}
          fontSize={9}
          fill={C.dim}
          transform={`rotate(-90 12 ${TOP + HT / 2})`}
          textAnchor="middle"
        >
          moisture
        </text>
        <text x={LEFT + W + 8} y={TOP + 14} fontSize={7.5} fill={C.faint}>
          + food size
        </text>
        <text x={LEFT + W + 8} y={TOP + 26} fontSize={7.5} fill={C.faint}>
          + time of day
        </text>
        <text x={LEFT + W + 8} y={TOP + 38} fontSize={7.5} fill={C.faint}>
          + n more axes
        </text>
        <text x={190} y={190} textAnchor="middle" fontSize={8.5} fill={C.faint}>
          two axes drawn; a real niche has as many as there are conditions
        </text>
      </Figure>

      <ToggleRow label="Niche" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'The fundamental niche is the full range of conditions under which a species could survive and reproduce, with nothing else in the way. It is a property of the organism and can be measured in the laboratory.'
          : 'The realised niche is where the species actually lives, and it is usually smaller, because competitors occupy part of the range. Joseph Connell demonstrated this directly with barnacles on Scottish shores: remove the competing species and the other expands into zones it never occupies naturally. A niche is therefore not a fixed property of a species — it depends on who else is present.'}
      </Note>
    </Stack>
  );
}
