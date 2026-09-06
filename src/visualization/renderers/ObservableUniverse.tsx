import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';

/**
 * Nested scales, out to the horizon.
 *
 * A logarithmic radial axis is the only honest way to put the Earth and the
 * particle horizon on one page: on a linear scale, everything inside the
 * Andromeda ring would occupy less than one pixel.
 *
 * Layout note: an earlier version labelled each ring in place with a leader
 * line. With seven rings on a 390px screen those labels crossed each other and
 * the rings, and the outermost two — 33 and 46.5 billion light-years — land two
 * pixels apart on a log scale, so their labels were unreadable on top of one
 * another. The rings now carry the proportions and a legend carries the
 * numbers, which is the pairing that survives a phone.
 *
 * The outermost ring is the point of the figure. It is a horizon — a limit on
 * how far light has had time to travel — not an edge, and the figure says so.
 */

interface Ring {
  label: string;
  distance: string;
  /** Radius in light-years. */
  lightYears: number;
  colour: string;
}

const RINGS: readonly Ring[] = [
  { label: 'Solar System', distance: '~1 light-day', lightYears: 0.0027, colour: '#ffd76e' },
  { label: 'Nearest star', distance: '4.2 ly', lightYears: 4.2, colour: '#ffb166' },
  { label: 'Milky Way', distance: '50,000 ly', lightYears: 5e4, colour: '#8fb8ff' },
  { label: 'Andromeda', distance: '2.5 million ly', lightYears: 2.5e6, colour: '#63a4ff' },
  { label: 'Virgo Supercluster', distance: '55 million ly', lightYears: 5.5e7, colour: '#58d6b4' },
  {
    label: 'Most distant galaxy seen',
    distance: '~33 billion ly',
    lightYears: 3.3e10,
    colour: '#ff8fb0',
  },
  {
    label: 'Edge of the observable Universe',
    distance: '46.5 billion ly',
    lightYears: 4.65e10,
    colour: '#ffffff',
  },
];

const W = 380;
const CX = W / 2;
const CY = 186;
const R_MAX = 158;
const LOG_MIN = -3;
const LOG_MAX = 11;

const radius = (ly: number): number => ((Math.log10(ly) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * R_MAX;

export default function ObservableUniverse(_props: VisualizationProps): ReactNode {
  const legendTop = CY + R_MAX + 40;
  const rowH = 22;
  const h = legendTop + RINGS.length * rowH + 14;

  return (
    <svg
      viewBox={`0 0 ${W} ${h}`}
      preserveAspectRatio="xMidYMin meet"
      style={{ width: '100%', height: 'auto' }}
      role="presentation"
    >
      <text
        x={12}
        y={15}
        fontSize={11}
        fill="rgba(226,233,246,0.95)"
        fontFamily="system-ui, sans-serif"
      >
        Each step outward is ten times further than the last.
      </text>

      {/* Largest first, so the small inner rings stay on top. */}
      {[...RINGS].reverse().map((ring, index) => {
        const isHorizon = index === 0;
        return (
          <circle
            key={ring.label}
            cx={CX}
            cy={CY}
            r={radius(ring.lightYears)}
            fill="none"
            stroke={ring.colour}
            strokeWidth={isHorizon ? 2 : 1.3}
            strokeDasharray={isHorizon ? '6 4' : undefined}
            opacity={isHorizon ? 0.95 : 0.6}
          />
        );
      })}

      {/* Earth at the centre — because we are the ones observing, not because
          the Universe has a middle. */}
      <circle cx={CX} cy={CY} r={3} fill="#5fc9f0" />
      <text
        x={CX + 8}
        y={CY + 3.5}
        fontSize={10}
        fill="rgba(226,233,246,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        you
      </text>

      <text
        x={CX}
        y={CY + R_MAX + 20}
        textAnchor="middle"
        fontSize={10.5}
        fill="rgba(226,233,246,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        The outer ring is a horizon, not an edge.
      </text>

      {RINGS.map((ring, index) => {
        const y = legendTop + index * rowH;
        return (
          <g key={ring.label}>
            <circle cx={18} cy={y} r={4.5} fill="none" stroke={ring.colour} strokeWidth={1.6} />
            <text
              x={32}
              y={y + 3.5}
              fontSize={10.5}
              fill="rgba(226,233,246,0.92)"
              fontFamily="system-ui, sans-serif"
            >
              {ring.label}
            </text>
            <text
              x={W - 12}
              y={y + 3.5}
              textAnchor="end"
              fontSize={10.5}
              fill={ring.colour}
              fontFamily="ui-monospace, monospace"
            >
              {ring.distance}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
