import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Binding energy per nucleon, straight from measured atomic masses.
 *
 * Nothing here is fitted. Each value is the AME2020 mass excess converted to
 * binding energy per nucleon, so the peak sits where nuclear physics puts it
 * rather than where a smooth curve would. That matters, because the whole
 * argument of stellar death rests on the peak being real: iron is not a
 * metaphor for exhaustion, it is the top of a measured curve.
 *
 * The two sliders pick a starting and an ending nucleus, and the readout gives
 * the energy per nucleon released or absorbed by the conversion. Reactions that
 * climb toward the peak release; reactions that descend from it cost.
 */

interface Nuclide {
  readonly label: string;
  /** Mass number A. */
  readonly a: number;
  /** Binding energy per nucleon, MeV, from AME2020. */
  readonly bea: number;
  /** Marked on the chart with a name rather than only a dot. */
  readonly marked?: boolean;
  readonly note?: string;
}

const NUCLIDES: readonly Nuclide[] = [
  { label: '¹H', a: 1, bea: 0, marked: true, note: 'a lone proton — nothing bound yet' },
  { label: '²H', a: 2, bea: 1.112 },
  { label: '³He', a: 3, bea: 2.573 },
  { label: '⁴He', a: 4, bea: 7.074, marked: true, note: 'the jump that powers the main sequence' },
  { label: '⁷Li', a: 7, bea: 5.606, note: 'a dip — lithium is fragile and burns easily' },
  { label: '⁹Be', a: 9, bea: 6.463 },
  { label: '¹²C', a: 12, bea: 7.68, marked: true, note: 'made by the triple-alpha process' },
  { label: '¹⁴N', a: 14, bea: 7.476 },
  {
    label: '¹⁶O',
    a: 16,
    bea: 7.976,
    marked: true,
    note: 'the most abundant element after H and He',
  },
  { label: '²⁰Ne', a: 20, bea: 8.032 },
  { label: '²⁴Mg', a: 24, bea: 8.261 },
  { label: '²⁸Si', a: 28, bea: 8.448, marked: true, note: 'the last stage before the iron core' },
  { label: '³²S', a: 32, bea: 8.493 },
  { label: '⁴⁰Ca', a: 40, bea: 8.551 },
  { label: '⁴⁸Ti', a: 48, bea: 8.723 },
  { label: '⁵²Cr', a: 52, bea: 8.776 },
  { label: '⁵⁶Fe', a: 56, bea: 8.79, marked: true, note: 'the ash a massive star cannot burn' },
  { label: '⁵⁸Fe', a: 58, bea: 8.792 },
  { label: '⁶²Ni', a: 62, bea: 8.795, marked: true, note: 'the actual peak of the measured curve' },
  { label: '⁶⁴Zn', a: 64, bea: 8.736 },
  { label: '⁸⁴Kr', a: 84, bea: 8.717 },
  { label: '⁹⁰Zr', a: 90, bea: 8.71 },
  { label: '⁹⁸Mo', a: 98, bea: 8.635 },
  { label: '¹²⁰Sn', a: 120, bea: 8.505 },
  { label: '¹³⁸Ba', a: 138, bea: 8.393 },
  { label: '¹⁴⁴Nd', a: 144, bea: 8.327 },
  { label: '¹⁸⁴W', a: 184, bea: 8.065 },
  {
    label: '¹⁹⁷Au',
    a: 197,
    bea: 7.916,
    marked: true,
    note: 'below the peak: it cost energy to make',
  },
  { label: '²⁰⁸Pb', a: 208, bea: 7.867 },
  { label: '²³⁵U', a: 235, bea: 7.591 },
  { label: '²³⁸U', a: 238, bea: 7.57, marked: true, note: 'far down the far side — it fissions' },
];

const W = 380;
const H = 232;
const LEFT = 34;
const RIGHT = 12;
const TOP = 26;
const BOTTOM = 44;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const A_MAX = 245;
const BE_MAX = 9.4;

const px = (a: number): number => LEFT + (a / A_MAX) * PLOT_W;
const py = (bea: number): number => TOP + PLOT_H - (bea / BE_MAX) * PLOT_H;

/** A is where the curve turns over; everything left of it fuses, right of it fissions. */
const PEAK_A = 62;

export default function BindingEnergyCurve(_props: VisualizationProps): ReactNode {
  const [fromIndex, setFromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(3);

  const from = NUCLIDES[fromIndex] ?? NUCLIDES[0]!;
  const to = NUCLIDES[toIndex] ?? NUCLIDES[3]!;
  const perNucleon = to.bea - from.bea;
  const releases = perNucleon > 0;
  /** MeV per nucleon → fraction of a nucleon's rest energy (938.9 MeV). */
  const restFraction = (Math.abs(perNucleon) / 938.9) * 100;

  const note = to.note ?? from.note ?? '';

  const path = NUCLIDES.map((n, i) => `${i === 0 ? 'M' : 'L'}${px(n.a)},${py(n.bea)}`).join(' ');

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <rect
          x={LEFT}
          y={TOP}
          width={px(PEAK_A) - LEFT}
          height={PLOT_H}
          fill="rgba(127,199,255,0.06)"
        />
        <rect
          x={px(PEAK_A)}
          y={TOP}
          width={LEFT + PLOT_W - px(PEAK_A)}
          height={PLOT_H}
          fill="rgba(255,143,110,0.05)"
        />

        {[0, 2, 4, 6, 8].map((tick) => (
          <g key={tick}>
            <line
              x1={LEFT}
              x2={LEFT + PLOT_W}
              y1={py(tick)}
              y2={py(tick)}
              stroke="rgba(148,162,192,0.14)"
            />
            <text
              x={LEFT - 5}
              y={py(tick) + 3.5}
              textAnchor="end"
              fontSize={9}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick}
            </text>
          </g>
        ))}
        <text x={4} y={TOP - 12} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          binding energy per nucleon, MeV
        </text>

        {[0, 50, 100, 150, 200].map((tick) => (
          <text
            key={tick}
            x={px(tick)}
            y={TOP + PLOT_H + 13}
            textAnchor="middle"
            fontSize={9}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            {tick}
          </text>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 26}
          textAnchor="middle"
          fontSize={9.5}
          fill="rgba(148,162,192,0.9)"
        >
          mass number A (protons + neutrons)
        </text>

        <line
          x1={px(PEAK_A)}
          x2={px(PEAK_A)}
          y1={TOP}
          y2={TOP + PLOT_H}
          stroke="rgba(226,233,246,0.35)"
          strokeDasharray="3 3"
        />
        <text x={px(PEAK_A) - 5} y={TOP + 11} textAnchor="end" fontSize={8.5} fill="#7fc7ff">
          fusion releases →
        </text>
        <text x={px(PEAK_A) + 5} y={TOP + 22} fontSize={8.5} fill="#ff8f6e">
          ← fission releases
        </text>

        <path d={path} fill="none" stroke="#8fb8ff" strokeWidth={1.8} />

        {NUCLIDES.map((n, i) => {
          const isEnd = i === fromIndex || i === toIndex;
          return (
            <circle
              key={n.label}
              cx={px(n.a)}
              cy={py(n.bea)}
              r={isEnd ? 4 : 2}
              fill={
                i === fromIndex ? '#ffd27f' : i === toIndex ? '#4fe0c0' : 'rgba(226,233,246,0.75)'
              }
            />
          );
        })}

        {/* Only a handful get names; the rest would collide at this width. */}
        <text x={px(4) + 5} y={py(7.074) - 6} fontSize={8.5} fill="rgba(226,233,246,0.9)">
          ⁴He
        </text>
        <text x={px(12) + 8} y={py(7.68) + 16} fontSize={8.5} fill="rgba(226,233,246,0.9)">
          ¹²C
        </text>
        <text x={px(62)} y={py(8.795) - 7} textAnchor="middle" fontSize={8.5} fill="#e2e9f6">
          ⁵⁶Fe ⁶²Ni
        </text>
        <text
          x={px(238) - 2}
          y={py(7.57) + 12}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(226,233,246,0.9)"
        >
          ²³⁸U
        </text>

        <line
          x1={px(from.a)}
          x2={px(to.a)}
          y1={py(from.bea)}
          y2={py(to.bea)}
          stroke={releases ? '#4fe0c0' : '#ff8f6e'}
          strokeWidth={1.4}
          strokeDasharray="4 3"
        />
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>From</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Starting nucleus</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={NUCLIDES.length - 1}
              step={1}
              value={fromIndex}
              onChange={(event) => setFromIndex(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{from.label}</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>To</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Ending nucleus</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={NUCLIDES.length - 1}
              step={1}
              value={toIndex}
              onChange={(event) => setToIndex(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{to.label}</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>
          {from.label} → {to.label}
        </strong>
        : {from.bea.toFixed(3)} → {to.bea.toFixed(3)} MeV per nucleon, so the conversion{' '}
        <strong>
          {releases ? 'releases' : 'costs'} {Math.abs(perNucleon).toFixed(3)} MeV
        </strong>{' '}
        for every nucleon involved — {restFraction.toFixed(3)}% of a nucleon’s rest energy.{' '}
        {note ? `${note.charAt(0).toUpperCase()}${note.slice(1)}.` : ''}
      </p>
    </div>
  );
}
