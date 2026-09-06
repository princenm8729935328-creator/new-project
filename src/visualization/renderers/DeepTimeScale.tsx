import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { UNIVERSE_AGE_YEARS } from '@/content/schema/cosmicTime';

/**
 * The cosmic year.
 *
 * Compresses 13.797 billion years into a single calendar year and shows where
 * each milestone lands. This is the one figure on the platform drawn on a
 * strictly linear time axis, and it is here precisely because the timeline's own
 * axis is not: it is the corrective that shows what the warped axis is hiding.
 *
 * Data-based — every date on it is computed from the milestone dates cited
 * elsewhere on the platform, by simple proportion. Nothing is estimated here.
 *
 * Layout note: an earlier version drew a connector from each milestone down to
 * its label on the bar. Eight of the eleven milestones fall in the last 4% of
 * the year, so on a phone those connectors converged into an unreadable knot.
 * The bar now carries tick marks only, and the milestones are listed beneath
 * it — which also lets the punchline land as a column of "31 Dec" rows.
 */

interface Marker {
  label: string;
  /** Years before present. */
  yearsAgo: number;
}

const MARKERS: readonly Marker[] = [
  { label: 'The beginning', yearsAgo: UNIVERSE_AGE_YEARS },
  { label: 'First galaxies', yearsAgo: 13.4e9 },
  { label: 'Solar System forms', yearsAgo: 4.568e9 },
  { label: 'Earliest life evidence', yearsAgo: 3.7e9 },
  { label: 'Oxygen fills the air', yearsAgo: 2.4e9 },
  { label: 'First animals', yearsAgo: 5.75e8 },
  { label: 'Dinosaurs appear', yearsAgo: 2.33e8 },
  { label: 'Asteroid impact', yearsAgo: 6.6e7 },
  { label: 'Hominins split off', yearsAgo: 7e6 },
  { label: 'Homo sapiens', yearsAgo: 3e5 },
  { label: 'Farming begins', yearsAgo: 1.1e4 },
];

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

/** Day of the cosmic year (0–365) at which something happened. */
function cosmicDay(yearsAgo: number): number {
  return ((UNIVERSE_AGE_YEARS - yearsAgo) / UNIVERSE_AGE_YEARS) * 365;
}

const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function cosmicDate(yearsAgo: number): string {
  const day = cosmicDay(yearsAgo);
  if (day >= 364) {
    // Everything in the final day is quoted as a clock time on 31 December.
    const seconds = (day - 364) * 86400;
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds % 3600) / 60);
    const ss = Math.floor(seconds % 60);
    return `31 Dec ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
  }
  const month = Math.min(11, Math.floor(day / 30.42));
  const dayOfMonth = Math.max(1, Math.floor(day - month * 30.42) + 1);
  return `${dayOfMonth} ${MONTH_NAMES[month]}`;
}

export default function DeepTimeScale(_props: VisualizationProps): ReactNode {
  const w = 380;
  const rowHeight = 21;
  const pad = { top: 76, left: 12, right: 12, bottom: 16 };
  const h = pad.top + MARKERS.length * rowHeight + pad.bottom;
  const barW = w - pad.left - pad.right;
  const barY = 34;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMin meet"
      style={{ width: '100%', height: 'auto' }}
      role="presentation"
    >
      <text
        x={pad.left}
        y={14}
        fontSize={11}
        fill="rgba(226,233,246,0.95)"
        fontFamily="system-ui, sans-serif"
      >
        If all 13.8 billion years were one calendar year:
      </text>

      <rect
        x={pad.left}
        y={barY}
        width={barW}
        height={14}
        rx={7}
        fill="rgba(148,162,192,0.12)"
        stroke="rgba(148,162,192,0.25)"
      />
      {MONTHS.map((month, index) => (
        <g key={`${month}-${index}`}>
          {index > 0 && (
            <line
              x1={pad.left + (index / 12) * barW}
              x2={pad.left + (index / 12) * barW}
              y1={barY}
              y2={barY + 14}
              stroke="rgba(148,162,192,0.22)"
              strokeWidth={1}
            />
          )}
          <text
            x={pad.left + ((index + 0.5) / 12) * barW}
            y={barY + 26}
            textAnchor="middle"
            fontSize={9}
            fill="rgba(148,162,192,0.65)"
            fontFamily="ui-monospace, monospace"
          >
            {month}
          </text>
        </g>
      ))}

      {/* Tick marks only: the labels live in the list below. */}
      {MARKERS.map((marker) => {
        const x = pad.left + (cosmicDay(marker.yearsAgo) / 365) * barW;
        return (
          <line
            key={marker.label}
            x1={x}
            x2={x}
            y1={barY + 1}
            y2={barY + 13}
            stroke="#8fb8ff"
            strokeWidth={1.5}
            opacity={0.9}
          />
        );
      })}

      {MARKERS.map((marker, index) => {
        const y = pad.top + index * rowHeight;
        const date = cosmicDate(marker.yearsAgo);
        const isFinalDay = date.startsWith('31 Dec ');
        return (
          <g key={marker.label}>
            <line
              x1={pad.left}
              x2={w - pad.right}
              y1={y - 5}
              y2={y - 5}
              stroke="rgba(148,162,192,0.10)"
              strokeWidth={1}
            />
            <text
              x={pad.left}
              y={y + 8}
              fontSize={11}
              fill="rgba(226,233,246,0.92)"
              fontFamily="system-ui, sans-serif"
            >
              {marker.label}
            </text>
            <text
              x={w - pad.right}
              y={y + 8}
              textAnchor="end"
              fontSize={11}
              fill={isFinalDay ? '#ffd76e' : 'rgba(148,162,192,0.95)'}
              fontFamily="ui-monospace, monospace"
            >
              {date}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
