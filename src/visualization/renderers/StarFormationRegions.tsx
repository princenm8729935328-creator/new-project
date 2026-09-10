import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The Kennicutt–Schmidt relation, and what changes when you count only the gas
 * stars actually form from.
 *
 * The teaching move here is the toggle. Against total gas the relation is
 * clearly non-linear — slope about 1.4 — which is a real empirical result but
 * an awkward one to explain. Against molecular gas alone it tightens toward
 * slope 1, and the awkwardness dissolves: stars form from molecular clouds at a
 * roughly fixed rate per unit molecular mass, and the non-linearity against
 * total gas is mostly the atomic-to-molecular conversion efficiency changing
 * with density.
 */

const W = 380;
const H = 234;
const LEFT = 44;
const RIGHT = 14;
const TOP = 26;
const BOTTOM = 44;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

/** log10 Σ_gas, M☉ per square parsec. */
const X_MIN = 0;
const X_MAX = 4.5;
/** log10 Σ_SFR, M☉ per year per square kiloparsec. */
const Y_MIN = -4;
const Y_MAX = 3;

const px = (x: number): number => LEFT + ((x - X_MIN) / (X_MAX - X_MIN)) * PLOT_W;
const py = (y: number): number => TOP + PLOT_H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * PLOT_H;

interface Region {
  readonly name: string;
  /** log10 Σ_gas for total and for molecular only. */
  readonly total: number;
  readonly molecular: number;
  readonly sfr: number;
}

/**
 * Representative positions for the observed classes of region, not a specific
 * published catalogue — the spec caption says so.
 */
const REGIONS: readonly Region[] = [
  { name: 'Outer disks', total: 0.7, molecular: 0.1, sfr: -3.4 },
  { name: 'Outer disks', total: 1.1, molecular: 0.5, sfr: -2.9 },
  { name: 'Normal spirals', total: 1.5, molecular: 1.2, sfr: -2.2 },
  { name: 'Normal spirals', total: 1.8, molecular: 1.6, sfr: -1.8 },
  { name: 'Milky Way inner disk', total: 1.9, molecular: 1.7, sfr: -1.7 },
  { name: 'Normal spirals', total: 2.2, molecular: 2.1, sfr: -1.1 },
  { name: 'Starburst nuclei', total: 3.0, molecular: 3.0, sfr: 0.4 },
  { name: 'Starburst nuclei', total: 3.5, molecular: 3.5, sfr: 1.2 },
  { name: 'Merger starbursts', total: 4.0, molecular: 4.0, sfr: 2.1 },
];

/** Slope 1.4 against total gas; slope ~1.0 against molecular gas. */
const fitTotal = (x: number): number => 1.4 * (x - 1.9) - 1.7;
const fitMolecular = (x: number): number => 1.0 * (x - 1.7) - 1.7;

export default function StarFormationRegions(_props: VisualizationProps): ReactNode {
  const [molecularOnly, setMolecularOnly] = useState(false);
  const [pick, setPick] = useState(4);

  const region = REGIONS[pick] ?? REGIONS[4]!;
  const x = molecularOnly ? region.molecular : region.total;
  const fit = molecularOnly ? fitMolecular : fitTotal;

  /**
   * Gas depletion time = Σ_gas ÷ Σ_SFR, converted to years. Σ_gas is per pc²
   * and Σ_SFR is per kpc², hence the factor of 10⁶.
   */
  const depletion = (10 ** x * 1e6) / 10 ** region.sfr;

  const fitPath = Array.from({ length: 40 }, (_, i) => {
    const xv = X_MIN + (i / 39) * (X_MAX - X_MIN);
    return `${i === 0 ? 'M' : 'L'}${px(xv).toFixed(2)},${py(fit(xv)).toFixed(2)}`;
  }).join(' ');

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <clipPath id="ks-plot">
          <rect x={LEFT} y={TOP} width={PLOT_W} height={PLOT_H} />
        </clipPath>

        {[-4, -2, 0, 2].map((tick) => (
          <g key={tick}>
            <line
              x1={LEFT}
              x2={LEFT + PLOT_W}
              y1={py(tick)}
              y2={py(tick)}
              stroke="rgba(148,162,192,0.12)"
            />
            <text
              x={LEFT - 5}
              y={py(tick) + 3.5}
              textAnchor="end"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              10{tick < 0 ? `⁻${Math.abs(tick)}` : tick}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 12} fontSize={9} fill="rgba(148,162,192,0.9)">
          star formation, M☉ per year per kpc²
        </text>

        {[0, 1, 2, 3, 4].map((tick) => (
          <g key={tick}>
            <line
              x1={px(tick)}
              x2={px(tick)}
              y1={TOP}
              y2={TOP + PLOT_H}
              stroke="rgba(148,162,192,0.12)"
            />
            <text
              x={px(tick)}
              y={TOP + PLOT_H + 13}
              textAnchor="middle"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              10{tick}
            </text>
          </g>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 27}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          {molecularOnly ? 'molecular' : 'total'} gas, M☉ per pc²
        </text>

        <g clipPath="url(#ks-plot)">
          <path d={fitPath} fill="none" stroke="rgba(143,184,255,0.6)" strokeWidth={1.6} />
          {REGIONS.map((entry, index) => (
            <circle
              key={`${entry.name}-${index}`}
              cx={px(molecularOnly ? entry.molecular : entry.total)}
              cy={py(entry.sfr)}
              r={index === pick ? 5 : 3}
              fill={index === pick ? '#4fe0c0' : 'rgba(226,233,246,0.8)'}
              onClick={() => setPick(index)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </g>

        <text x={px(3.6)} y={py(1.9)} textAnchor="end" fontSize={8.5} fill="rgba(226,233,246,0.85)">
          mergers
        </text>
        <text x={px(1.2)} y={py(-3.2)} fontSize={8.5} fill="rgba(226,233,246,0.85)">
          outer disks
        </text>
        <text x={px(2.4) + 4} y={py(-1.6)} fontSize={9} fill="rgba(143,184,255,0.9)">
          slope {molecularOnly ? '1.0' : '1.4'}
        </text>
      </svg>

      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={!molecularOnly}
          onClick={() => setMolecularOnly(false)}
        >
          All gas
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={molecularOnly}
          onClick={() => setMolecularOnly(true)}
        >
          Molecular gas only
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={false}
          onClick={() => setPick((value) => (value + 1) % REGIONS.length)}
        >
          Next region
        </button>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{region.name}</strong> at {(10 ** x).toPrecision(2)} M☉ per pc² of{' '}
        {molecularOnly ? 'molecular' : 'total'} gas form stars at{' '}
        {(10 ** region.sfr).toPrecision(2)} M☉ per year per kpc², which would exhaust the supply in{' '}
        <strong>{(depletion / 1e9).toPrecision(2)} billion years</strong>.{' '}
        {molecularOnly
          ? 'Counted against molecular gas alone, the relation straightens toward slope 1 — a fixed rate per unit molecular mass. That is the evidence that stars form specifically from molecular clouds, and not from gas in general.'
          : 'Against total gas the slope is about 1.4: doubling the gas more than doubles the star formation. Switch to molecular gas and see what happens to the slope.'}
      </p>
    </div>
  );
}
