import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The resolution gap that forces galaxy simulations to use recipes.
 *
 * This is the most useful single fact about cosmological simulations and it is
 * almost never shown. A simulation that resolves a cosmological volume can
 * reach a few hundred parsecs at best. A supernova remnant does its work at a
 * few parsecs, a molecular cloud core at a hundredth of that, and a black-hole
 * accretion disk twelve orders of magnitude below the grid cell. Everything
 * that actually regulates galaxy formation happens beneath the resolution, so
 * it is put in by hand as a tuned prescription — which is why a simulation
 * reproducing the observed galaxy population is a weaker statement than it
 * sounds.
 */

interface Scale {
  readonly key: string;
  readonly name: string;
  /** Axis label. The full name is too wide to sit beside its neighbours. */
  readonly short: string;
  /** log10 of the physical scale in parsecs. */
  readonly logPc: number;
  readonly resolved: boolean;
  readonly recipe: string;
  readonly calibrated: string;
}

const SCALES: readonly Scale[] = [
  {
    key: 'box',
    name: 'Simulation volume',
    short: 'sim volume',
    logPc: 8.1,
    resolved: true,
    recipe: 'Gravity and hydrodynamics, solved directly.',
    calibrated: 'Nothing — this part is first-principles physics, and it works well.',
  },
  {
    key: 'halo',
    name: 'A galaxy halo',
    short: 'galaxy halo',
    logPc: 5.3,
    resolved: true,
    recipe: 'Resolved by tens to hundreds of elements. Dark matter dynamics here are trustworthy.',
    calibrated: 'Nothing.',
  },
  {
    key: 'cell',
    name: 'Best resolution element',
    short: 'grid cell',
    logPc: 2.4,
    resolved: true,
    recipe:
      'A few hundred parsecs in a large cosmological volume; tens of parsecs in a zoom-in of a single galaxy.',
    calibrated: 'This is the floor. Everything below it is a model, not a calculation.',
  },
  {
    key: 'snr',
    name: 'Supernova remnant',
    short: 'SN remnant',
    logPc: 0.6,
    resolved: false,
    recipe:
      'Energy is injected into the surrounding cells, either thermally or as a velocity kick. Injecting it thermally into a cell hundreds of parsecs across makes the gas so hot and thin that it radiates the energy away almost instantly — the "overcooling problem" — so simulations suppress that cooling artificially for a while.',
    calibrated:
      'How much energy couples to the gas, and for how long cooling is switched off. Both tuned so the resulting galaxies look right.',
  },
  {
    key: 'cloud',
    name: 'Molecular cloud core',
    short: 'cloud core',
    logPc: -0.7,
    resolved: false,
    recipe:
      'Star formation is applied as a rate: gas above a density threshold converts to stars on a timescale set by a chosen efficiency, typically about 1% per free-fall time.',
    calibrated:
      'The threshold and the efficiency. Both are chosen; neither is derived from the cloud physics.',
  },
  {
    key: 'imf',
    name: 'Individual stars',
    short: 'one star',
    logPc: -7.5,
    resolved: false,
    recipe:
      'Never resolved. A stellar particle represents a whole population, with a fixed initial mass function assumed so its supernova rate and metal yield can be computed.',
    calibrated:
      'That the initial mass function is universal — an assumption with real evidence behind it and real counter-evidence too.',
  },
  {
    key: 'disk',
    name: 'Black-hole accretion disk',
    short: 'accretion disk',
    logPc: -6,
    resolved: false,
    recipe:
      'Accretion is estimated from the gas properties in the cell containing the black hole, and a fixed fraction of the resulting energy is dumped back as heat or as a wind.',
    calibrated:
      'The accretion prescription and the coupling efficiency, tuned to reproduce the observed black-hole–bulge relation — which therefore cannot be counted as a prediction of the simulation.',
  },
];

const W = 380;
const H = 250;
const LEFT = 16;
const RIGHT = 16;
const AXIS_Y = 108;
const PLOT_W = W - LEFT - RIGHT;

const LOG_MIN = -8.5;
const LOG_MAX = 9;
const px = (log: number): number => LEFT + ((log - LOG_MIN) / (LOG_MAX - LOG_MIN)) * PLOT_W;

const OPEN_PROBLEMS: readonly string[] = [
  'Where the seeds of supermassive black holes came from — the earliest quasars are too massive to have grown from ordinary stellar remnants at the usual rate.',
  'How quickly galaxies stop forming stars, and what actually does the stopping.',
  'Why the counts and internal structures of dwarf galaxies do not match the simplest dark-matter predictions — baryonic physics, or something about dark matter itself.',
];

/** Indices of SCALES sorted by position on the axis, left to right. */
const ORDER_ALONG_AXIS = SCALES.map((_, index) => index).sort(
  (a, b) => SCALES[a]!.logPc - SCALES[b]!.logPc,
);

export default function GalaxyUnknowns(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(3);
  const [problem, setProblem] = useState(0);
  const scale = SCALES[selected] ?? SCALES[3]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={LEFT} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          physical scale, logarithmic — a cosmological box down to an accretion disk
        </text>

        {/* The resolved region. */}
        <rect
          x={px(2.4)}
          y={AXIS_Y - 40}
          width={px(LOG_MAX) - px(2.4)}
          height={80}
          fill="rgba(79,224,192,0.09)"
        />
        <rect
          x={px(LOG_MIN)}
          y={AXIS_Y - 40}
          width={px(2.4) - px(LOG_MIN)}
          height={80}
          fill="rgba(255,143,110,0.09)"
        />
        <line
          x1={px(2.4)}
          x2={px(2.4)}
          y1={AXIS_Y - 44}
          y2={AXIS_Y + 44}
          stroke="#e2e9f6"
          strokeWidth={1.4}
          strokeDasharray="4 3"
        />
        <text x={px(2.4) + 5} y={AXIS_Y - 34} fontSize={8.5} fill="#4fe0c0">
          resolved →
        </text>
        <text x={px(2.4) - 5} y={AXIS_Y - 34} textAnchor="end" fontSize={8.5} fill="#ff8f6e">
          ← not resolved: put in by hand
        </text>

        <line
          x1={LEFT}
          x2={LEFT + PLOT_W}
          y1={AXIS_Y}
          y2={AXIS_Y}
          stroke="rgba(148,162,192,0.45)"
        />

        {SCALES.map((entry, index) => {
          const isSelected = index === selected;
          /*
           * Alternate by position along the axis, not by array index. The
           * entries are not in axis order, so index parity put neighbouring
           * markers on the same side and their labels overlapped.
           */
          const above = ORDER_ALONG_AXIS.indexOf(index) % 2 === 0;
          return (
            <g key={entry.key} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <line
                x1={px(entry.logPc)}
                x2={px(entry.logPc)}
                y1={AXIS_Y}
                y2={AXIS_Y + (above ? -14 : 14)}
                stroke={isSelected ? '#4fe0c0' : 'rgba(148,162,192,0.55)'}
              />
              <circle
                cx={px(entry.logPc)}
                cy={AXIS_Y}
                r={isSelected ? 5 : 3.2}
                fill={entry.resolved ? '#4fe0c0' : '#ff8f6e'}
              />
              <text
                x={Math.min(Math.max(px(entry.logPc), LEFT + 36), LEFT + PLOT_W - 36)}
                y={AXIS_Y + (above ? -18 : 26)}
                textAnchor="middle"
                fontSize={8}
                fontWeight={isSelected ? 700 : 500}
                fill={isSelected ? '#4fe0c0' : 'rgba(226,233,246,0.9)'}
              >
                {entry.short}
              </text>
            </g>
          );
        })}

        {[-6, -3, 0, 3, 6, 9].map((tick) => (
          <text
            key={tick}
            x={px(tick)}
            y={AXIS_Y + 46}
            textAnchor="middle"
            fontSize={8}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            10{tick < 0 ? `⁻${Math.abs(tick)}` : tick} pc
          </text>
        ))}

        <text x={LEFT} y={AXIS_Y + 74} fontSize={9} fill="rgba(255,143,110,0.95)">
          the gap between the resolution floor and the physics: nine orders of magnitude
        </text>

        <text x={LEFT} y={AXIS_Y + 96} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          what follows from that, still open:
        </text>
        {OPEN_PROBLEMS.map((_, i) => (
          <circle
            key={i}
            cx={LEFT + 8 + i * 18}
            cy={AXIS_Y + 110}
            r={i === problem ? 6 : 4}
            fill={i === problem ? '#8fb8ff' : 'rgba(143,184,255,0.4)'}
            onClick={() => setProblem(i)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </svg>

      <div className={styles.toggles}>
        {SCALES.map((entry, index) => (
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
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={false}
          onClick={() => setProblem((value) => (value + 1) % OPEN_PROBLEMS.length)}
        >
          Next open problem
        </button>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>
          {scale.name} — {scale.resolved ? 'resolved' : 'below the resolution floor'}.
        </strong>{' '}
        {scale.recipe} <em>What is calibrated:</em> {scale.calibrated}
      </p>

      <p className={styles.epochDetail}>
        <strong>Still open:</strong> {OPEN_PROBLEMS[problem]}
      </p>
    </div>
  );
}
