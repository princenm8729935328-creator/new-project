import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Hydrogen's levels drawn at their true energies, with the line each transition makes.
 *
 * Textbook ladders usually space the levels evenly, which quietly destroys the
 * most important feature: the levels crowd together toward the ionisation
 * limit. That crowding is why the Lyman series runs off into the ultraviolet
 * and converges, and why hydrogen's visible spectrum is four lines rather than
 * a comb.
 *
 * Every wavelength here comes out of E_n = −13.606 eV / n² and the Planck
 * relation, and every one of them is a real measured line.
 */

/** Rydberg energy in electronvolts. */
const RY = 13.6056931;
/** hc in electronvolt-nanometres, so λ(nm) = HC_EV_NM / ΔE(eV). */
const HC_EV_NM = 1239.8419844;

const energyOf = (n: number): number => -RY / (n * n);

const W = 380;
const H = 330;
const LADDER_L = 46;
const LADDER_R = 236;
const LADDER_T = 34;
const LADDER_B = 236;

/** Energy axis: the true scale, ground state at the bottom, zero at the top. */
const yOf = (eV: number): number =>
  LADDER_B - ((eV - energyOf(1)) / (0 - energyOf(1))) * (LADDER_B - LADDER_T);

const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8];

const SPECTRUM_T = 262;
const SPECTRUM_H = 26;
const VIS_MIN = 380;
const VIS_MAX = 740;

/** Approximate sRGB for a visible wavelength, for the spectrum strip only. */
function colourOf(nm: number): string {
  if (nm < VIS_MIN || nm > VIS_MAX) return '#8f9bb3';
  let r = 0;
  let g = 0;
  let b = 0;
  if (nm < 440) {
    r = -(nm - 440) / 60;
    b = 1;
  } else if (nm < 490) {
    g = (nm - 440) / 50;
    b = 1;
  } else if (nm < 510) {
    g = 1;
    b = -(nm - 510) / 20;
  } else if (nm < 580) {
    r = (nm - 510) / 70;
    g = 1;
  } else if (nm < 645) {
    r = 1;
    g = -(nm - 645) / 65;
  } else {
    r = 1;
  }
  const to = (v: number): number => Math.round(255 * Math.min(1, Math.max(0, v)) ** 0.8);
  return `rgb(${to(r)},${to(g)},${to(b)})`;
}

interface Series {
  readonly lower: number;
  readonly name: string;
  readonly band: string;
}

const SERIES: readonly Series[] = [
  { lower: 1, name: 'Lyman', band: 'ultraviolet' },
  { lower: 2, name: 'Balmer', band: 'visible' },
  { lower: 3, name: 'Paschen', band: 'infrared' },
];

export default function AtomicEnergyLevels(_props: VisualizationProps): ReactNode {
  const [lower, setLower] = useState(2);
  const [upper, setUpper] = useState(3);

  const safeUpper = Math.max(upper, lower + 1);
  const deltaEv = energyOf(safeUpper) - energyOf(lower);
  const wavelength = HC_EV_NM / deltaEv;
  const series = SERIES.find((entry) => entry.lower === lower);

  /** Every line in the selected series, for the strip beneath. */
  const seriesLines = LEVELS.filter((n) => n > lower).map((n) => ({
    n,
    nm: HC_EV_NM / (energyOf(n) - energyOf(lower)),
  }));

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text
          x={10}
          y={14}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          Hydrogen energy levels, drawn on their true energy scale
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.7)">
          E_n = −13.606 eV / n² — note how the levels crowd toward the top
        </text>

        {/* Ionisation limit. */}
        <line
          x1={LADDER_L}
          x2={LADDER_R}
          y1={yOf(0)}
          y2={yOf(0)}
          stroke="#ffd66e"
          strokeDasharray="4 3"
        />
        <text x={LADDER_R + 4} y={yOf(0) + 3} fontSize={7.5} fill="#ffd66e">
          0 eV — ionised
        </text>

        {LEVELS.map((n) => {
          const y = yOf(energyOf(n));
          const active = n === lower || n === safeUpper;
          return (
            <g key={n}>
              <line
                x1={LADDER_L}
                x2={LADDER_R}
                y1={y}
                y2={y}
                stroke={active ? '#66e0d4' : 'rgba(148,162,192,0.4)'}
                strokeWidth={active ? 2 : 1}
              />
              <text
                x={LADDER_L - 4}
                y={y + 3}
                textAnchor="end"
                fontSize={7.5}
                fill={active ? '#66e0d4' : 'rgba(148,162,192,0.75)'}
                fontFamily="ui-monospace, monospace"
              >
                n={n}
              </text>
              {(n <= 4 || active) && (
                <text
                  x={LADDER_R + 4}
                  y={y + 3}
                  fontSize={7}
                  fill="rgba(148,162,192,0.65)"
                  fontFamily="ui-monospace, monospace"
                >
                  {energyOf(n).toFixed(2)} eV
                </text>
              )}
            </g>
          );
        })}

        {/* The selected transition. */}
        <line
          x1={(LADDER_L + LADDER_R) / 2}
          x2={(LADDER_L + LADDER_R) / 2}
          y1={yOf(energyOf(safeUpper))}
          y2={yOf(energyOf(lower))}
          stroke={colourOf(wavelength)}
          strokeWidth={2.4}
          markerEnd=""
        />
        <polygon
          points={`${(LADDER_L + LADDER_R) / 2 - 4},${yOf(energyOf(lower)) - 8} ${(LADDER_L + LADDER_R) / 2 + 4},${yOf(energyOf(lower)) - 8} ${(LADDER_L + LADDER_R) / 2},${yOf(energyOf(lower))}`}
          fill={colourOf(wavelength)}
        />

        {/* The spectrum strip, at true wavelength positions. */}
        <rect
          x={LADDER_L}
          y={SPECTRUM_T}
          width={W - LADDER_L - 12}
          height={SPECTRUM_H}
          fill="rgba(8,10,18,0.9)"
          stroke="rgba(148,162,192,0.3)"
        />
        {seriesLines.map((line) => {
          const inside = line.nm >= VIS_MIN && line.nm <= VIS_MAX;
          const x =
            LADDER_L +
            ((Math.min(Math.max(line.nm, VIS_MIN), VIS_MAX) - VIS_MIN) / (VIS_MAX - VIS_MIN)) *
              (W - LADDER_L - 12);
          return (
            <line
              key={line.n}
              x1={x}
              x2={x}
              y1={SPECTRUM_T + 1}
              y2={SPECTRUM_T + SPECTRUM_H - 1}
              stroke={inside ? colourOf(line.nm) : 'rgba(148,162,192,0.25)'}
              strokeWidth={inside ? 2.5 : 1}
              strokeDasharray={inside ? undefined : '2 3'}
            />
          );
        })}
        <text x={LADDER_L} y={SPECTRUM_T - 5} fontSize={8} fill="rgba(148,162,192,0.8)">
          visible spectrum, 380–740 nm — {series?.name ?? ''} series lines shown
        </text>
        <text
          x={LADDER_L}
          y={SPECTRUM_T + SPECTRUM_H + 11}
          fontSize={7}
          fill="rgba(148,162,192,0.7)"
        >
          380
        </text>
        <text
          x={W - 12}
          y={SPECTRUM_T + SPECTRUM_H + 11}
          textAnchor="end"
          fontSize={7}
          fill="rgba(148,162,192,0.7)"
        >
          740 nm
        </text>
      </svg>

      <div className={styles.toggles}>
        {SERIES.map((entry) => (
          <button
            key={entry.name}
            type="button"
            className={styles.toggle}
            aria-pressed={entry.lower === lower}
            onClick={() => {
              setLower(entry.lower);
              setUpper(entry.lower + 1);
            }}
          >
            {entry.name} ({entry.band})
          </button>
        ))}
      </div>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>From n</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Upper energy level</span>
            <input
              className={styles.slider}
              type="range"
              min={lower + 1}
              max={8}
              step={1}
              value={safeUpper}
              onChange={(event) => setUpper(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>
            {safeUpper} → {lower}
          </output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        The{' '}
        <strong>
          n = {safeUpper} → n = {lower}
        </strong>{' '}
        transition releases <strong>{deltaEv.toFixed(3)} eV</strong>, which is a photon of{' '}
        <strong>
          {wavelength < 1000
            ? `${wavelength.toFixed(1)} nm`
            : `${(wavelength / 1000).toFixed(2)} µm`}
        </strong>{' '}
        — {series ? `the ${series.name} series, in the ${series.band}` : 'in the infrared'}. Nothing
        between these energies is emitted, because there is no level between them to fall from. That
        is why every hydrogen atom anywhere in the Universe produces the same barcode, and why a
        spectrum taken of a distant galaxy can be matched against a lamp in a laboratory.
      </p>
    </div>
  );
}
