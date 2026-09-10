import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The distance ladder as a set of overlapping bars on a logarithmic axis.
 *
 * The point of drawing it this way is the overlaps. Each technique is
 * calibrated in the region where it overlaps the one below, which means an
 * error at a low rung does not average out higher up — it is carried, intact,
 * all the way to the top. That dependency structure is the reason the ladder
 * receives the scrutiny it does, and it is invisible in a table of methods.
 */

interface Rung {
  readonly name: string;
  /** log10 of the range in parsecs. */
  readonly from: number;
  readonly to: number;
  readonly basis: string;
  readonly dependsOn: string;
  readonly limit: string;
}

const RUNGS: readonly Rung[] = [
  {
    name: 'Radar ranging',
    from: -7,
    to: -4,
    basis: 'Time a radio pulse there and back. Distance = speed of light × time ÷ 2.',
    dependsOn:
      'Nothing. This rung defines the astronomical unit and calibrates everything above it.',
    limit:
      'The echo weakens as the fourth power of distance; beyond the outer Solar System there is nothing to bounce off.',
  },
  {
    name: 'Parallax',
    from: -6,
    to: 3.5,
    basis:
      'Pure geometry: the star shifts against the background as Earth crosses its orbit. d (pc) = 1 ÷ parallax (arcsec).',
    dependsOn: 'The size of Earth’s orbit, from radar ranging.',
    limit:
      'Gaia reaches a few thousand parsecs before the angle sinks into the noise — the Milky Way, not other galaxies.',
  },
  {
    name: 'Main-sequence fitting',
    from: 1.5,
    to: 4.5,
    basis:
      'A cluster’s stars form a main sequence of known intrinsic brightness. How faint it looks gives the distance.',
    dependsOn: 'Parallax, which fixes the intrinsic brightness of nearby main-sequence stars.',
    limit: 'Needs a resolved cluster and a known chemical composition; dust reddening biases it.',
  },
  {
    name: 'Cepheid variables',
    from: 2,
    to: 7.5,
    basis:
      'A Cepheid’s pulsation period fixes its true luminosity — Leavitt’s 1912 law. Compare with how bright it looks.',
    dependsOn:
      'Parallax to nearby Cepheids, which sets the zero point of the period–luminosity law.',
    limit:
      'Bright, but not bright enough beyond about 30 Mpc; crowding and dust in the host galaxy add systematic error.',
  },
  {
    name: 'Tip of the red giant branch',
    from: 2.5,
    to: 7.7,
    basis:
      'Red giants brighten to a sharp maximum set by the helium flash, at a nearly fixed luminosity.',
    dependsOn: 'Parallax and cluster distances, which calibrate the tip brightness.',
    limit: 'Needs resolved stars in the galaxy’s dust-free outskirts.',
  },
  {
    name: 'Type Ia supernovae',
    from: 5,
    to: 9.5,
    basis:
      'Exploding white dwarfs reach nearly the same peak luminosity, once corrected using the shape of the light curve.',
    dependsOn:
      'Cepheids or the red giant tip in the handful of galaxies that have hosted one and are close enough to measure both ways.',
    limit:
      'Rare — a few per galaxy per millennium — and the standardisation may drift with the age of the host galaxy.',
  },
];

const W = 380;
const ROW = 30;
const TOP = 34;
const LABEL_W = 0;
const AXIS_LEFT = 12;
const AXIS_RIGHT = 12;
const AXIS_W = W - AXIS_LEFT - AXIS_RIGHT;
const H = TOP + RUNGS.length * ROW + 26;

const LOG_MIN = -7.5;
const LOG_MAX = 10;
const px = (log: number): number => AXIS_LEFT + ((log - LOG_MIN) / (LOG_MAX - LOG_MIN)) * AXIS_W;

const TICKS: readonly { log: number; label: string }[] = [
  { log: -6, label: '1 au' },
  { log: -2, label: '' },
  { log: 2, label: '100 pc' },
  { log: 6, label: '1 Mpc' },
  { log: 9.5, label: '3 Gpc' },
];

export default function DistanceLadder(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(1);
  const rung = RUNGS[selected] ?? RUNGS[0]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={AXIS_LEFT} y={12} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          distance, logarithmic — each rung is calibrated by the one below it
        </text>
        {TICKS.map((tick) => (
          <g key={tick.log}>
            <line
              x1={px(tick.log)}
              x2={px(tick.log)}
              y1={TOP - 8}
              y2={TOP + RUNGS.length * ROW}
              stroke="rgba(148,162,192,0.14)"
            />
            {tick.label ? (
              <text
                x={px(tick.log)}
                y={TOP - 12}
                textAnchor="middle"
                fontSize={8.5}
                fill="rgba(148,162,192,0.8)"
                fontFamily="ui-monospace, monospace"
              >
                {tick.label}
              </text>
            ) : null}
          </g>
        ))}

        {RUNGS.map((entry, index) => {
          const y = TOP + index * ROW;
          const isSelected = index === selected;
          return (
            <g key={entry.name} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={0}
                y={y}
                width={W}
                height={ROW}
                fill={isSelected ? 'rgba(143,184,255,0.10)' : 'transparent'}
              />
              <rect
                x={px(entry.from)}
                y={y + 5}
                width={Math.max(3, px(entry.to) - px(entry.from))}
                height={10}
                rx={3}
                fill={isSelected ? '#8fb8ff' : 'rgba(143,184,255,0.42)'}
              />
              <text
                x={px(entry.from) + LABEL_W}
                y={y + 26}
                fontSize={9.5}
                fontWeight={isSelected ? 700 : 500}
                fill={isSelected ? '#8fb8ff' : 'rgba(226,233,246,0.9)'}
              >
                {entry.name}
              </text>
            </g>
          );
        })}
        <text x={AXIS_LEFT} y={H - 8} fontSize={8.5} fill="rgba(148,162,192,0.8)">
          where two bars overlap, the upper one is calibrated on the lower
        </text>
      </svg>

      <div className={styles.toggles}>
        {RUNGS.map((entry, index) => (
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
        <strong>{rung.name}.</strong> {rung.basis} <em>Depends on:</em> {rung.dependsOn}{' '}
        <em>Runs out because:</em> {rung.limit}
      </p>

      <p className={styles.epochDetail}>
        The ladder currently gives an expansion rate that disagrees with the value inferred from the
        cosmic microwave background by about nine percent — more than either measurement’s stated
        uncertainty. Nobody has found the mistake, and it may not be a mistake. That is why every
        rung above is examined this closely.
      </p>
    </div>
  );
}
