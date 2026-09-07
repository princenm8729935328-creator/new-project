import { type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Measured black holes, laid out on a logarithmic mass axis.
 *
 * Every entry is a real object with a published mass measurement, and the
 * horizon radius beside it is computed from that same mass rather than quoted
 * separately. The chart exists to make one point that prose does not: the
 * "three classes" are not three kinds of object but three regions of a single
 * eight-decade axis, with a conspicuous thinness in the middle.
 */

const SOLAR_MASS = 1.9885e30;
const G = 6.6743e-11;
const C2 = 299792458 ** 2;

/** r = 2GM/c², in kilometres. */
const horizonKm = (solarMasses: number): number => (2 * G * solarMasses * SOLAR_MASS) / C2 / 1000;

type Class = 'limit' | 'stellar' | 'intermediate' | 'supermassive';

interface Entry {
  readonly label: string;
  readonly note: string;
  readonly solarMasses: number;
  readonly klass: Class;
}

const ENTRIES: readonly Entry[] = [
  {
    label: 'Neutron-star limit',
    note: 'below this, degeneracy pressure still holds',
    solarMasses: 2.3,
    klass: 'limit',
  },
  {
    label: 'Cygnus X-1',
    note: 'from its companion star’s orbit',
    solarMasses: 21,
    klass: 'stellar',
  },
  {
    label: 'GW150914, larger component',
    note: 'from the gravitational-wave signal',
    solarMasses: 36,
    klass: 'stellar',
  },
  {
    label: 'GW150914 remnant',
    note: '36 + 29, minus 3 radiated away',
    solarMasses: 62,
    klass: 'stellar',
  },
  {
    label: 'GW190521 remnant',
    note: 'the first securely measured intermediate-mass black hole',
    solarMasses: 142,
    klass: 'intermediate',
  },
  {
    label: 'Sagittarius A*',
    note: 'from three decades of stellar orbits',
    solarMasses: 4.297e6,
    klass: 'supermassive',
  },
  {
    label: 'M87*',
    note: 'from Event Horizon Telescope imaging',
    solarMasses: 6.5e9,
    klass: 'supermassive',
  },
];

const COLOUR: Record<Class, string> = {
  limit: 'rgba(148,162,192,0.9)',
  stellar: '#66e0d4',
  intermediate: '#ffd66e',
  supermassive: '#ff8f6e',
};

const W = 380;
const ROW = 34;
const TOP = 46;
const LEFT = 10;
const AXIS_W = W - 24;
const LOG_MIN = 0;
const LOG_MAX = 10.2;
const H = TOP + ENTRIES.length * ROW + 46;

const px = (solarMasses: number): number =>
  LEFT + ((Math.log10(solarMasses) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * AXIS_W;

function radiusLabel(km: number): string {
  if (km < 1e3) return `${km.toPrecision(3)} km`;
  if (km < 1e9) return `${(km / 1e6).toPrecision(3)} million km`;
  return `${(km / 1e9).toPrecision(3)} billion km`;
}

function massLabel(solarMasses: number): string {
  if (solarMasses < 1e3) return `${solarMasses} M☉`;
  if (solarMasses < 1e7) return `${(solarMasses / 1e6).toPrecision(3)} million M☉`;
  return `${(solarMasses / 1e9).toPrecision(2)} billion M☉`;
}

export default function BlackHoleMassScale(_props: VisualizationProps): ReactNode {
  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text
          x={LEFT}
          y={14}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          Measured masses, logarithmic. Each marker also gives its horizon radius.
        </text>

        {/* The sparsely populated intermediate band. */}
        <rect
          x={px(200)}
          y={TOP - 12}
          width={px(1e5) - px(200)}
          height={ENTRIES.length * ROW + 6}
          fill="rgba(148,162,192,0.05)"
        />
        <text
          x={(px(200) + px(1e5)) / 2}
          y={TOP - 16}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(148,162,192,0.75)"
          fontFamily="system-ui, sans-serif"
        >
          sparsely populated
        </text>

        {[0, 2, 4, 6, 8, 10].map((decade) => (
          <g key={decade}>
            <line
              x1={px(10 ** decade)}
              x2={px(10 ** decade)}
              y1={TOP - 10}
              y2={TOP + ENTRIES.length * ROW - 6}
              stroke="rgba(148,162,192,0.13)"
            />
            <text
              x={px(10 ** decade)}
              y={H - 26}
              textAnchor="middle"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              1e{decade}
            </text>
          </g>
        ))}
        <text
          x={W / 2}
          y={H - 10}
          textAnchor="middle"
          fontSize={8.5}
          fill="rgba(148,162,192,0.8)"
          fontFamily="system-ui, sans-serif"
        >
          mass, in solar masses
        </text>

        {ENTRIES.map((entry, index) => {
          const y = TOP + index * ROW;
          const x = px(entry.solarMasses);
          const colour = COLOUR[entry.klass];
          const anchorRight = x > W * 0.6;
          return (
            <g key={entry.label}>
              <circle cx={x} cy={y} r={entry.klass === 'limit' ? 3 : 5} fill={colour} />
              <text
                x={anchorRight ? x - 10 : x + 10}
                y={y - 1}
                textAnchor={anchorRight ? 'end' : 'start'}
                fontSize={9.5}
                fill="rgba(226,233,246,0.95)"
                fontFamily="system-ui, sans-serif"
              >
                {entry.label} — {massLabel(entry.solarMasses)}
              </text>
              <text
                x={anchorRight ? x - 10 : x + 10}
                y={y + 10}
                textAnchor={anchorRight ? 'end' : 'start'}
                fontSize={8}
                fill="rgba(148,162,192,0.85)"
                fontFamily="system-ui, sans-serif"
              >
                {entry.note}
              </text>
              {entry.klass !== 'limit' && (
                <text
                  x={anchorRight ? x - 10 : x + 10}
                  y={y + 20}
                  textAnchor={anchorRight ? 'end' : 'start'}
                  fontSize={8}
                  fill={colour}
                  fontFamily="ui-monospace, monospace"
                >
                  horizon radius {radiusLabel(horizonKm(entry.solarMasses))}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <p className={styles.readout}>
        M87*’s horizon radius is about 19 billion kilometres — more than four times the distance
        from the Sun to Neptune. Its average density inside that horizon is lower than the air in
        this room.
      </p>
    </div>
  );
}
