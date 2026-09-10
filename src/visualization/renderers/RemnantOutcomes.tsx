import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Birth mass to final remnant, with the uncertainty drawn rather than hidden.
 *
 * A textbook version of this figure has three crisp boxes with sharp edges. The
 * sharp edges are the least defensible thing on the page: the boundary between
 * "explodes and leaves a neutron star" and "collapses quietly to a black hole"
 * is genuinely not known to better than a few solar masses, may depend on
 * rotation and metallicity, and recent modelling suggests it is not even a
 * single boundary — masses that explode are interleaved with masses that do
 * not. So the transitions here are drawn as gradients.
 */

interface Band {
  readonly name: string;
  readonly from: number;
  readonly to: number;
  readonly colour: string;
  readonly remnant: string;
  readonly detail: string;
  readonly confidence: string;
}

const BANDS: readonly Band[] = [
  {
    name: 'Brown dwarf',
    from: 0.013,
    to: 0.08,
    colour: 'rgba(148,162,192,0.5)',
    remnant: 'No star at all — a cooling ball of degenerate gas',
    detail:
      'Below about 0.08 solar masses the core never reaches the roughly 3 million kelvin needed to fuse ordinary hydrogen. It fuses deuterium briefly, then cools forever.',
    confidence:
      'Well established — the boundary follows directly from degeneracy setting in before ignition.',
  },
  {
    name: 'White dwarf',
    from: 0.08,
    to: 8,
    colour: '#8fb8ff',
    remnant: 'Carbon–oxygen white dwarf, 0.5–1.1 M☉',
    detail:
      'The star burns hydrogen, then helium, then stops: carbon needs about 600 million kelvin and the core becomes degenerate before it gets there. The envelope is shed as a planetary nebula and the naked core cools for the rest of time.',
    confidence:
      'Well established. The upper boundary near 8 M☉ is uncertain by a solar mass or two and depends on how much mass the star loses on the way.',
  },
  {
    name: 'Neutron star',
    from: 8,
    to: 20,
    colour: '#4fe0c0',
    remnant: 'Neutron star, 1.2–2.2 M☉',
    detail:
      'The core burns all the way to iron, collapses, bounces at nuclear density, and the explosion succeeds in unbinding the envelope. What is left is a city-sized ball of neutron-rich matter.',
    confidence:
      'The outcome is established; the mass range is not sharp. Pre-explosion images have not found red supergiant progenitors above about 18 M☉, which single-star models say should be there — the "red supergiant problem".',
  },
  {
    name: 'Black hole',
    from: 20,
    to: 100,
    colour: '#ff8f6e',
    remnant: 'Black hole, roughly 5–40 M☉',
    detail:
      'Either the explosion fails and the whole star falls in, or it succeeds and then enough material falls back to push the remnant past the neutron star maximum of about 2.2 solar masses.',
    confidence:
      'Active research. Whether a given star explodes or collapses quietly depends on the detailed structure of its core, and recent models find the mapping is not monotonic: 22 M☉ may explode while 21 does not.',
  },
];

const W = 380;
const H = 200;
const LEFT = 14;
const RIGHT = 14;
const AXIS_Y = 96;
const BAR_H = 30;
const PLOT_W = W - LEFT - RIGHT;

const LOG_MIN = Math.log10(0.013);
const LOG_MAX = Math.log10(120);
const px = (m: number): number => LEFT + ((Math.log10(m) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * PLOT_W;

/** Approximate remnant mass, for the second track. */
function remnantMass(m: number): number {
  if (m < 0.08) return m;
  if (m < 8) return 0.4 + 0.08 * m;
  if (m < 20) return 1.2 + 0.05 * (m - 8);
  return Math.min(40, 3 + 0.35 * (m - 20));
}

const REMNANT_PATH = Array.from({ length: 120 }, (_, i) => {
  const m = 10 ** (LOG_MIN + (i / 119) * (LOG_MAX - LOG_MIN));
  const y = AXIS_Y + BAR_H + 46 - (Math.log10(remnantMass(m)) + 2) * 11;
  return `${i === 0 ? 'M' : 'L'}${px(m).toFixed(2)},${y.toFixed(2)}`;
}).join(' ');

export default function RemnantOutcomes(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(2);
  const band = BANDS[selected] ?? BANDS[2]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <defs>
          {/* Transitions are gradients, because the boundaries are not sharp. */}
          <linearGradient id="remnant-fade-1" x1="0" x2="1">
            <stop offset="0%" stopColor="#4fe0c0" />
            <stop offset="100%" stopColor="#ff8f6e" />
          </linearGradient>
        </defs>

        <text x={LEFT} y={16} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          what a star of each birth mass leaves behind
        </text>

        {BANDS.map((entry, index) => {
          const isSelected = index === selected;
          return (
            <g key={entry.name} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={px(entry.from)}
                y={AXIS_Y - 44}
                width={px(entry.to) - px(entry.from)}
                height={BAR_H + 44}
                fill={isSelected ? 'rgba(143,184,255,0.10)' : 'transparent'}
              />
              <rect
                x={px(entry.from)}
                y={AXIS_Y}
                width={px(entry.to) - px(entry.from)}
                height={BAR_H}
                fill={index === 3 ? 'url(#remnant-fade-1)' : entry.colour}
                opacity={isSelected ? 0.95 : 0.55}
              />
            </g>
          );
        })}

        {/* Labels above the bar, staggered so they cannot collide. */}
        <text x={px(0.03)} y={AXIS_Y - 26} fontSize={8.5} fill="rgba(226,233,246,0.9)">
          brown dwarf
        </text>
        <text x={px(0.5)} y={AXIS_Y - 8} fontSize={9.5} fill="#8fb8ff" fontWeight={600}>
          white dwarf
        </text>
        <text x={px(9)} y={AXIS_Y - 26} fontSize={9.5} fill="#4fe0c0" fontWeight={600}>
          neutron star
        </text>
        <text x={px(30)} y={AXIS_Y - 8} fontSize={9.5} fill="#ff8f6e" fontWeight={600}>
          black hole
        </text>

        {/* The genuinely uncertain zone, marked as such. */}
        <rect
          x={px(15)}
          y={AXIS_Y}
          width={px(30) - px(15)}
          height={BAR_H}
          fill="none"
          stroke="rgba(226,233,246,0.75)"
          strokeDasharray="3 3"
        />
        <text
          x={px(22)}
          y={AXIS_Y + BAR_H + 12}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(226,233,246,0.85)"
        >
          outcome uncertain here
        </text>

        {[0.08, 0.5, 2, 8, 20, 100].map((tick) => (
          <g key={tick}>
            <line
              x1={px(tick)}
              x2={px(tick)}
              y1={AXIS_Y + BAR_H}
              y2={AXIS_Y + BAR_H + 4}
              stroke="rgba(148,162,192,0.6)"
            />
            <text
              x={px(tick)}
              y={AXIS_Y + BAR_H + 24}
              textAnchor="middle"
              fontSize={8.5}
              fill="rgba(148,162,192,0.85)"
              fontFamily="ui-monospace, monospace"
            >
              {tick}
            </text>
          </g>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={H - 4}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          birth mass ÷ Sun’s mass (logarithmic)
        </text>

        <path d={REMNANT_PATH} fill="none" stroke="rgba(255,210,127,0.85)" strokeWidth={1.5} />
        <text x={LEFT + 2} y={AXIS_Y + BAR_H + 44} fontSize={8.5} fill="rgba(255,210,127,0.9)">
          remnant mass ↗
        </text>
      </svg>

      <div className={styles.toggles}>
        {BANDS.map((entry, index) => (
          <button
            key={entry.name}
            type="button"
            className={styles.toggle}
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            {entry.name}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>
          {band.from} – {band.to} M☉ → {band.remnant}.
        </strong>{' '}
        {band.detail} <em>How well established:</em> {band.confidence}
      </p>
    </div>
  );
}
