import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The three stellar populations on a metallicity axis, with Population III
 * drawn as the empty box it is.
 *
 * The temptation with this figure is to draw three tidy generations, which
 * implies that Population III has been observed. It has not. Not one star with
 * zero heavy elements has ever been found, in any survey, and the honest
 * drawing is an outline with nothing inside it — placed at exactly zero, where
 * the observations stop before they get there.
 */

const W = 380;
const H = 250;
const LEFT = 20;
const RIGHT = 16;
const AXIS_Y = 156;
const PLOT_W = W - LEFT - RIGHT;

/** [Fe/H], the log of iron abundance relative to the Sun. */
const FE_MIN = -8;
const FE_MAX = 0.6;
const px = (feh: number): number => LEFT + ((feh - FE_MIN) / (FE_MAX - FE_MIN)) * PLOT_W;

interface Population {
  readonly key: string;
  readonly name: string;
  readonly from: number;
  readonly to: number;
  readonly colour: string;
  readonly status: string;
  readonly detail: string;
  readonly planets: string;
}

const POPULATIONS: readonly Population[] = [
  {
    key: 'III',
    name: 'Population III',
    from: -8,
    to: -7.3,
    colour: 'rgba(226,233,246,0.9)',
    status: 'PREDICTED — never observed',
    detail:
      'Stars made from primordial gas: hydrogen, helium and a trace of lithium, and nothing else. Every model says they existed; not one has been found. If they were as massive as early simulations suggested, none survives — a hundred-solar-mass star lives about two million years — so their absence may be exactly what the models predict. Searches continue for a low-mass one that could still be burning.',
    planets:
      'No planets of any kind. There was no silicon, no iron, no carbon — nothing solid to build from.',
  },
  {
    key: 'II',
    name: 'Population II',
    from: -7.3,
    to: -0.8,
    colour: '#8fb8ff',
    status: 'OBSERVED',
    detail:
      'Old, metal-poor stars in the Galactic halo and in globular clusters. The most extreme measured example has less than one ten-millionth of the Sun’s iron — it is not primordial, but it formed from gas polluted by only a handful of earlier supernovae, so its chemistry is close to a direct readout of what those first explosions made.',
    planets:
      'Rocky planets become possible as silicon, magnesium and iron accumulate, but they are rare here. Giant planets are rarer still — the correlation between a star’s metallicity and its chance of hosting a gas giant is one of the strongest results in exoplanet statistics.',
  },
  {
    key: 'I',
    name: 'Population I',
    from: -0.8,
    to: 0.6,
    colour: '#ffd27f',
    status: 'OBSERVED — the Sun is one',
    detail:
      'Young, metal-rich stars in the Galactic disk, including the Sun. About 1.4% of the Sun’s mass is elements heavier than helium — a small fraction, but it is the fraction that everything solid is made from, and it took ten billion years of stellar deaths to accumulate.',
    planets:
      'Rocky planets are common and giant planets are frequent. This is the only population where a planet like Earth is a likely outcome rather than a lucky one.',
  },
];

/** A simple closed-box enrichment history, for the curve above the axis. */
function enrichment(gyr: number): number {
  const f = 1 - Math.exp(-gyr / 2.6);
  return Math.log10(Math.max(1e-8, f * 1.25));
}

const CURVE = Array.from({ length: 80 }, (_, i) => {
  const gyr = (i / 79) * 13.8;
  const y = 118 - (gyr / 13.8) * 76;
  return `${i === 0 ? 'M' : 'L'}${px(enrichment(gyr)).toFixed(1)},${y.toFixed(1)}`;
}).join(' ');

export default function StellarGenerations(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(0);
  const pop = POPULATIONS[selected] ?? POPULATIONS[0]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={LEFT} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          how the Galaxy’s iron content grew — a model, not a measured history
        </text>
        <text x={LEFT} y={32} fontSize={8.5} fill="rgba(148,162,192,0.8)">
          time ↑
        </text>
        <path d={CURVE} fill="none" stroke="rgba(143,184,255,0.55)" strokeWidth={1.6} />
        <text x={px(-0.4)} y={44} fontSize={8.5} fill="rgba(143,184,255,0.9)">
          today
        </text>

        {/* Population bands. */}
        {POPULATIONS.map((entry, index) => {
          const isSelected = index === selected;
          const isEmpty = entry.key === 'III';
          return (
            <g key={entry.key} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={px(entry.from)}
                y={AXIS_Y - 26}
                width={Math.max(14, px(entry.to) - px(entry.from))}
                height={26}
                rx={3}
                fill={isEmpty ? 'transparent' : entry.colour}
                opacity={isEmpty ? 1 : isSelected ? 0.85 : 0.45}
                stroke={isEmpty ? entry.colour : isSelected ? '#e2e9f6' : 'transparent'}
                strokeWidth={isEmpty ? 1.6 : 1.4}
                strokeDasharray={isEmpty ? '4 3' : undefined}
              />
              <text
                x={px((entry.from + entry.to) / 2)}
                y={AXIS_Y - 32}
                textAnchor="middle"
                fontSize={9}
                fontWeight={isSelected ? 700 : 500}
                fill={isSelected ? '#e2e9f6' : 'rgba(226,233,246,0.85)'}
              >
                Pop {entry.key}
              </text>
            </g>
          );
        })}
        <text
          x={px(-7.65)}
          y={AXIS_Y - 10}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(226,233,246,0.9)"
        >
          ∅
        </text>

        <line x1={LEFT} x2={LEFT + PLOT_W} y1={AXIS_Y} y2={AXIS_Y} stroke="rgba(148,162,192,0.5)" />
        {[-8, -6, -4, -2, 0].map((tick) => (
          <g key={tick}>
            <line
              x1={px(tick)}
              x2={px(tick)}
              y1={AXIS_Y}
              y2={AXIS_Y + 4}
              stroke="rgba(148,162,192,0.6)"
            />
            <text
              x={px(tick)}
              y={AXIS_Y + 16}
              textAnchor="middle"
              fontSize={8.5}
              fill="rgba(148,162,192,0.85)"
              fontFamily="ui-monospace, monospace"
            >
              {tick === 0 ? 'solar' : `10${['⁻⁸', '⁻⁶', '⁻⁴', '⁻²'][(tick + 8) / 2] ?? ''}`}
            </text>
          </g>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={AXIS_Y + 30}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          iron abundance relative to the Sun (logarithmic)
        </text>

        {/* Where observations actually reach. */}
        <line
          x1={px(-7.3)}
          x2={px(-7.3)}
          y1={AXIS_Y - 40}
          y2={AXIS_Y + 6}
          stroke="#ff8f6e"
          strokeWidth={1.3}
          strokeDasharray="3 3"
        />
        <text x={px(-7.3) + 4} y={AXIS_Y + 40} fontSize={8.5} fill="#ff8f6e">
          the most iron-poor star ever measured
        </text>
        <text x={LEFT} y={AXIS_Y + 54} fontSize={8.5} fill="rgba(226,233,246,0.85)">
          nothing has been found to the left of that line. Population III is a prediction.
        </text>

        {/* What each generation could build. */}
        <text x={LEFT} y={AXIS_Y + 74} fontSize={9} fill="rgba(148,162,192,0.9)">
          what planets each generation could form:
        </text>
        <text x={LEFT} y={AXIS_Y + 88} fontSize={8.5} fill="rgba(226,233,246,0.9)">
          Pop III: none · Pop II: rocky planets rare · Pop I: rocky common, giants frequent
        </text>
      </svg>

      <div className={styles.toggles}>
        {POPULATIONS.map((entry, index) => (
          <button
            key={entry.key}
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
          {pop.name} — {pop.status}.
        </strong>{' '}
        {pop.detail} <em>Planets:</em> {pop.planets}
      </p>
    </div>
  );
}
