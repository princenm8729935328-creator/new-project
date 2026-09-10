import { useState, type ReactNode } from 'react';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Evolutionary tracks across the HR diagram, played rather than shown.
 *
 * Playing them is the honest choice and also the useful one. Honest, because it
 * makes clear that a track is a trajectory through time and not a shape a star
 * has; useful, because the wildly different speeds along the track — a star
 * crawls along the main sequence and sprints across the giant branch — is the
 * fact a static diagram hides completely.
 *
 * No star has ever been watched moving along one of these. They are computed,
 * and the anchor points follow published model grids at solar metallicity.
 */

interface Stage {
  readonly name: string;
  /** Surface temperature, K. */
  readonly temp: number;
  /** Luminosity, solar units. */
  readonly lum: number;
  /** Age at this point, years. */
  readonly age: number;
}

interface Track {
  readonly mass: number;
  readonly label: string;
  readonly colour: string;
  readonly stages: readonly Stage[];
  readonly ending: string;
}

const TRACKS: readonly Track[] = [
  {
    mass: 1,
    label: '1 M☉',
    colour: '#ffd27f',
    ending: 'planetary nebula, then a white dwarf that cools forever',
    stages: [
      { name: 'zero-age main sequence', temp: 5650, lum: 0.7, age: 0 },
      { name: 'main sequence — now', temp: 5772, lum: 1, age: 4.6e9 },
      { name: 'main sequence, ending', temp: 5900, lum: 1.9, age: 1.0e10 },
      { name: 'subgiant', temp: 5200, lum: 3, age: 1.09e10 },
      { name: 'red giant branch', temp: 4400, lum: 40, age: 1.15e10 },
      { name: 'red giant tip — helium flash', temp: 3400, lum: 2500, age: 1.2e10 },
      { name: 'core helium burning', temp: 4800, lum: 50, age: 1.21e10 },
      { name: 'asymptotic giant branch', temp: 3300, lum: 4000, age: 1.23e10 },
      { name: 'envelope ejected', temp: 30000, lum: 3000, age: 1.2301e10 },
      { name: 'white dwarf, cooling', temp: 25000, lum: 0.1, age: 1.2302e10 },
      { name: 'white dwarf, cold', temp: 8000, lum: 0.001, age: 2.2e10 },
    ],
  },
  {
    mass: 5,
    label: '5 M☉',
    colour: '#4fe0c0',
    ending: 'planetary nebula, then a more massive white dwarf',
    stages: [
      { name: 'zero-age main sequence', temp: 17000, lum: 550, age: 0 },
      { name: 'main sequence, ending', temp: 15500, lum: 900, age: 9.4e7 },
      { name: 'crossing the gap — fast', temp: 9000, lum: 1100, age: 9.6e7 },
      { name: 'red giant', temp: 4300, lum: 1500, age: 9.8e7 },
      { name: 'core helium burning', temp: 5200, lum: 1800, age: 1.05e8 },
      { name: 'asymptotic giant branch', temp: 3600, lum: 9000, age: 1.15e8 },
      { name: 'envelope ejected', temp: 60000, lum: 8000, age: 1.16e8 },
    ],
  },
  {
    mass: 25,
    label: '25 M☉',
    colour: '#ff8f6e',
    ending: 'core collapse — a supernova, and a neutron star or black hole',
    stages: [
      { name: 'zero-age main sequence', temp: 38000, lum: 8e4, age: 0 },
      { name: 'main sequence, ending', temp: 32000, lum: 1.7e5, age: 6.5e6 },
      { name: 'blue supergiant', temp: 20000, lum: 2.0e5, age: 6.8e6 },
      { name: 'red supergiant', temp: 3900, lum: 2.2e5, age: 7.0e6 },
      { name: 'core collapse', temp: 3800, lum: 2.3e5, age: 7.4e6 },
    ],
  },
];

const W = 380;
const H = 244;
const LEFT = 42;
const RIGHT = 14;
const TOP = 24;
const BOTTOM = 42;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

/** Temperature increases leftward — the convention since 1913. */
const LOG_T_HI = 4.85; // 70,800 K at the left
const LOG_T_LO = 3.45; // 2,820 K at the right
const LOG_L_MIN = -3.2;
const LOG_L_MAX = 5.8;

const px = (temp: number): number =>
  LEFT + ((LOG_T_HI - Math.log10(temp)) / (LOG_T_HI - LOG_T_LO)) * PLOT_W;
const py = (lum: number): number =>
  TOP + PLOT_H - ((Math.log10(lum) - LOG_L_MIN) / (LOG_L_MAX - LOG_L_MIN)) * PLOT_H;

/** Interpolates along a track by fraction of its stage count, not by time. */
function pointAt(track: Track, progress: number): { x: number; y: number; stage: Stage } {
  const n = track.stages.length - 1;
  const t = Math.max(0, Math.min(n, progress * n));
  const i = Math.min(n - 1, Math.floor(t));
  const f = t - i;
  const a = track.stages[i]!;
  const b = track.stages[i + 1]!;
  return {
    x: px(a.temp) + (px(b.temp) - px(a.temp)) * f,
    y: py(a.lum) + (py(b.lum) - py(a.lum)) * f,
    stage: f < 0.5 ? a : b,
  };
}

function trackPath(track: Track, progress: number): string {
  const n = track.stages.length - 1;
  const upTo = Math.max(0, Math.min(n, progress * n));
  const points: string[] = [];
  for (let i = 0; i <= Math.floor(upTo); i += 1) {
    const s = track.stages[i]!;
    points.push(`${i === 0 ? 'M' : 'L'}${px(s.temp).toFixed(1)},${py(s.lum).toFixed(1)}`);
  }
  const head = pointAt(track, progress);
  points.push(`L${head.x.toFixed(1)},${head.y.toFixed(1)}`);
  return points.join(' ');
}

function formatAge(years: number): string {
  if (years === 0) return 'birth';
  if (years >= 1e9) return `${(years / 1e9).toPrecision(3)} Gyr`;
  return `${(years / 1e6).toPrecision(3)} Myr`;
}

export default function StellarEvolutionTracks({
  active,
  reducedMotion,
}: VisualizationProps): ReactNode {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState(0);

  useAnimationFrame(
    (delta) => {
      setProgress((value) => {
        const next = value + delta * 0.16;
        if (next >= 1) {
          setPlaying(false);
          return 1;
        }
        return next;
      });
    },
    playing && active && !reducedMotion,
    30,
  );

  const track = TRACKS[pick] ?? TRACKS[0]!;
  const head = pointAt(track, progress);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <clipPath id="tracks-plot">
          <rect x={LEFT} y={TOP} width={PLOT_W} height={PLOT_H} />
        </clipPath>

        {[-2, 0, 2, 4].map((exp) => (
          <g key={exp}>
            <line
              x1={LEFT}
              x2={LEFT + PLOT_W}
              y1={py(10 ** exp)}
              y2={py(10 ** exp)}
              stroke="rgba(148,162,192,0.11)"
            />
            <text
              x={LEFT - 5}
              y={py(10 ** exp) + 3.5}
              textAnchor="end"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              10{exp < 0 ? `⁻${Math.abs(exp)}` : exp}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 10} fontSize={9} fill="rgba(148,162,192,0.9)">
          luminosity ÷ Sun
        </text>

        {[40000, 20000, 10000, 5000, 3000].map((tick) => (
          <text
            key={tick}
            x={px(tick)}
            y={TOP + PLOT_H + 13}
            textAnchor="middle"
            fontSize={8.5}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            {tick >= 10000 ? `${tick / 1000}k` : tick}
          </text>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 26}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          surface temperature, K — hotter to the left
        </text>

        <g clipPath="url(#tracks-plot)">
          {/* The main sequence, for orientation. */}
          <path
            d={`M${px(40000)},${py(1.2e5)} L${px(20000)},${py(1.6e4)} L${px(10000)},${py(60)} L${px(7500)},${py(6)} L${px(5772)},${py(1)} L${px(4000)},${py(0.05)} L${px(3000)},${py(0.003)}`}
            fill="none"
            stroke="rgba(148,162,192,0.35)"
            strokeWidth={6}
            strokeLinecap="round"
          />

          {TRACKS.map((entry, index) => (
            <path
              key={entry.label}
              d={trackPath(entry, index === pick ? progress : 1)}
              fill="none"
              stroke={entry.colour}
              strokeWidth={index === pick ? 2.4 : 1}
              opacity={index === pick ? 1 : 0.32}
            />
          ))}

          <circle cx={head.x} cy={head.y} r={5} fill={track.colour} />
          <circle
            cx={head.x}
            cy={head.y}
            r={9}
            fill="none"
            stroke={track.colour}
            strokeWidth={1}
            opacity={0.5}
          />
        </g>

        <text x={px(12000)} y={py(0.3)} fontSize={8.5} fill="rgba(148,162,192,0.85)">
          main sequence
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Progress</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Position along the evolutionary track</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={1}
              step={0.002}
              value={progress}
              onChange={(event) => {
                setPlaying(false);
                setProgress(Number(event.target.value));
              }}
            />
          </label>
          <output className={styles.value}>{formatAge(head.stage.age)}</output>
        </div>
      </div>

      <div className={styles.toggles}>
        {TRACKS.map((entry, index) => (
          <button
            key={entry.label}
            type="button"
            className={styles.toggle}
            aria-pressed={index === pick}
            onClick={() => {
              setPick(index);
              setProgress(0);
            }}
          >
            {entry.label}
          </button>
        ))}
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={playing}
          onClick={() => {
            if (progress >= 1) setProgress(0);
            setPlaying((value) => !value);
          }}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{track.label}</strong>, {formatAge(head.stage.age)} after birth:{' '}
        <strong>{head.stage.name}</strong>, {Math.round(head.stage.temp).toLocaleString()} K and{' '}
        {head.stage.lum >= 1 ? head.stage.lum.toPrecision(3) : head.stage.lum.toPrecision(2)}×
        solar. Ends as: {track.ending}. These are computed trajectories — the timescales are far too
        long for anyone to have watched a star travel one.
      </p>
    </div>
  );
}
