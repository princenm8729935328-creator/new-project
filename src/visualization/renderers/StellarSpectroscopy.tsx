import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A stellar spectrum, with the lines at their measured wavelengths.
 *
 * The point Cecilia Payne established in 1925, and which her examiners made her
 * disown, is built into this figure: hydrogen lines are strong in an A star and
 * weak in the Sun, and that is not because the Sun has less hydrogen. It is
 * because absorption at those wavelengths requires hydrogen already in its
 * first excited state, and at 5,800 K almost none of it is. The temperature
 * slider makes the reversal visible.
 *
 * Line positions are exact. Line depths are illustrative — real depths need a
 * model atmosphere.
 */

interface Line {
  readonly nm: number;
  readonly label: string;
  /** Temperature at which this line is strongest, K. */
  readonly peakT: number;
  /** Width of the temperature response, in dex. */
  readonly widthDex: number;
  readonly strength: number;
}

interface Species {
  readonly key: string;
  readonly name: string;
  readonly colour: string;
  readonly lines: readonly Line[];
  readonly note: string;
}

const SPECIES: readonly Species[] = [
  {
    key: 'H',
    name: 'Hydrogen',
    colour: '#8fb8ff',
    note: 'The Balmer series, from transitions out of the first excited state. Strongest near 9,500 K: cooler and the electrons are not excited to start with, hotter and the atom is ionised, so it has no electron to excite.',
    lines: [
      { nm: 656.3, label: 'Hα', peakT: 9500, widthDex: 0.16, strength: 1 },
      { nm: 486.1, label: 'Hβ', peakT: 9500, widthDex: 0.16, strength: 0.8 },
      { nm: 434.0, label: 'Hγ', peakT: 9500, widthDex: 0.16, strength: 0.62 },
      { nm: 410.2, label: 'Hδ', peakT: 9500, widthDex: 0.16, strength: 0.5 },
    ],
  },
  {
    key: 'He',
    name: 'Helium',
    colour: '#4fe0c0',
    note: 'Needs a great deal of energy to excite, so neutral helium lines appear only in hot B stars. Their absence in a cool star says nothing whatever about how much helium it contains.',
    lines: [
      { nm: 447.1, label: 'He I', peakT: 20000, widthDex: 0.14, strength: 0.55 },
      { nm: 587.6, label: 'He I', peakT: 20000, widthDex: 0.14, strength: 0.45 },
      { nm: 667.8, label: 'He I', peakT: 20000, widthDex: 0.14, strength: 0.32 },
    ],
  },
  {
    key: 'Na',
    name: 'Sodium',
    colour: '#ffd27f',
    note: 'The D doublet — the same yellow that sodium street lamps emit. Fraunhofer catalogued it as “D” in 1817 without knowing what it was.',
    lines: [
      { nm: 589.0, label: 'Na D₂', peakT: 4200, widthDex: 0.22, strength: 0.75 },
      { nm: 589.6, label: 'Na D₁', peakT: 4200, widthDex: 0.22, strength: 0.68 },
    ],
  },
  {
    key: 'Ca',
    name: 'Calcium',
    colour: '#c89bff',
    note: 'The H and K lines of singly ionised calcium are the strongest features in the Sun’s spectrum, despite calcium being about a hundred-thousandth as abundant as hydrogen. Line strength measures excitation conditions first and abundance second.',
    lines: [
      { nm: 393.4, label: 'Ca K', peakT: 5500, widthDex: 0.26, strength: 1 },
      { nm: 396.8, label: 'Ca H', peakT: 5500, widthDex: 0.26, strength: 0.92 },
      { nm: 422.7, label: 'Ca I', peakT: 4500, widthDex: 0.2, strength: 0.4 },
    ],
  },
  {
    key: 'Fe',
    name: 'Iron',
    colour: '#ff8f6e',
    note: 'A forest of thousands of lines, because iron has a complicated electron structure. That density is a gift: it is why iron abundance is the best-measured abundance in any star, and why “metallicity” in practice means iron.',
    lines: [
      { nm: 404.6, label: '', peakT: 5200, widthDex: 0.3, strength: 0.5 },
      { nm: 427.2, label: '', peakT: 5200, widthDex: 0.3, strength: 0.45 },
      { nm: 438.4, label: '', peakT: 5200, widthDex: 0.3, strength: 0.55 },
      { nm: 452.9, label: '', peakT: 5200, widthDex: 0.3, strength: 0.35 },
      { nm: 495.8, label: 'Fe I', peakT: 5200, widthDex: 0.3, strength: 0.5 },
      { nm: 516.7, label: '', peakT: 5200, widthDex: 0.3, strength: 0.42 },
      { nm: 526.9, label: '', peakT: 5200, widthDex: 0.3, strength: 0.48 },
      { nm: 543.5, label: '', peakT: 5200, widthDex: 0.3, strength: 0.3 },
      { nm: 623.1, label: '', peakT: 5200, widthDex: 0.3, strength: 0.28 },
    ],
  },
];

const H_PLANCK = 6.626e-34;
const C = 2.998e8;
const K_B = 1.381e-23;

function planckNorm(nm: number, tempK: number, peakNm: number): number {
  const b = (l: number): number => {
    const m = l * 1e-9;
    return 1 / (m ** 5 * (Math.exp((H_PLANCK * C) / (m * K_B * tempK)) - 1));
  };
  return b(nm) / b(peakNm);
}

const W = 380;
const H = 214;
const LEFT = 14;
const RIGHT = 14;
const STRIP_TOP = 30;
const STRIP_H = 34;
const PLOT_TOP = 76;
const PLOT_H = 88;
const PLOT_W = W - LEFT - RIGHT;

const NM_MIN = 380;
const NM_MAX = 700;
const px = (nm: number): number => LEFT + ((nm - NM_MIN) / (NM_MAX - NM_MIN)) * PLOT_W;

/** Approximate visible-spectrum colour for a wavelength. */
function spectrumColour(nm: number): string {
  if (nm < 440) return `rgb(${Math.round(((440 - nm) / 60) * 90)}, 0, 255)`;
  if (nm < 490) return `rgb(0, ${Math.round(((nm - 440) / 50) * 255)}, 255)`;
  if (nm < 510) return `rgb(0, 255, ${Math.round(255 - ((nm - 490) / 20) * 255)})`;
  if (nm < 580) return `rgb(${Math.round(((nm - 510) / 70) * 255)}, 255, 0)`;
  if (nm < 645) return `rgb(255, ${Math.round(255 - ((nm - 580) / 65) * 255)}, 0)`;
  return 'rgb(255, 0, 0)';
}

export default function StellarSpectroscopy(_props: VisualizationProps): ReactNode {
  const [temp, setTemp] = useState(5772);
  const [active, setActive] = useState<readonly string[]>(['H', 'Na', 'Ca', 'Fe']);
  const [detail, setDetail] = useState('Ca');

  const toggle = (key: string): void =>
    setActive((current) =>
      current.includes(key) ? current.filter((k) => k !== key) : [...current, key],
    );

  const lineDepth = (line: Line): number => {
    const dex = Math.log10(temp) - Math.log10(line.peakT);
    return line.strength * Math.exp(-((dex / line.widthDex) ** 2));
  };

  const continuumPath = Array.from({ length: 80 }, (_, i) => {
    const nm = NM_MIN + (i / 79) * (NM_MAX - NM_MIN);
    const v = planckNorm(nm, temp, 550);
    const y = PLOT_TOP + PLOT_H - Math.min(PLOT_H, Math.max(6, v * 44));
    return `${i === 0 ? 'M' : 'L'}${px(nm).toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const species = SPECIES.find((s) => s.key === detail) ?? SPECIES[0]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={LEFT} y={16} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          absorption lines at their measured wavelengths; depths are illustrative
        </text>

        {/* Rainbow strip with dark absorption lines cut into it. */}
        {Array.from({ length: 160 }, (_, i) => {
          const nm = NM_MIN + (i / 159) * (NM_MAX - NM_MIN);
          return (
            <rect
              key={i}
              x={px(nm)}
              y={STRIP_TOP}
              width={PLOT_W / 159 + 0.6}
              height={STRIP_H}
              fill={spectrumColour(nm)}
              opacity={0.75}
            />
          );
        })}
        {SPECIES.filter((s) => active.includes(s.key)).flatMap((s) =>
          s.lines.map((line) => {
            const depth = lineDepth(line);
            if (depth < 0.03) return null;
            return (
              <rect
                key={`${s.key}-${line.nm}`}
                x={px(line.nm) - 0.9}
                y={STRIP_TOP}
                width={1.8 + depth * 1.6}
                height={STRIP_H}
                fill="rgba(4,6,13,0.95)"
                opacity={Math.min(1, depth * 1.4)}
              />
            );
          }),
        )}

        {/* Intensity trace with the same lines as dips. */}
        <path d={continuumPath} fill="none" stroke="rgba(226,233,246,0.7)" strokeWidth={1.4} />
        {SPECIES.filter((s) => active.includes(s.key)).flatMap((s) =>
          s.lines.map((line) => {
            const depth = lineDepth(line);
            if (depth < 0.03) return null;
            const v = planckNorm(line.nm, temp, 550);
            const top = PLOT_TOP + PLOT_H - Math.min(PLOT_H, Math.max(6, v * 44));
            return (
              <line
                key={`d-${s.key}-${line.nm}`}
                x1={px(line.nm)}
                x2={px(line.nm)}
                y1={top}
                y2={top + depth * 46}
                stroke={s.colour}
                strokeWidth={1.6}
              />
            );
          }),
        )}

        {[400, 450, 500, 550, 600, 650, 700].map((tick) => (
          <text
            key={tick}
            x={px(tick)}
            y={PLOT_TOP + PLOT_H + 14}
            textAnchor="middle"
            fontSize={8.5}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            {tick}
          </text>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={PLOT_TOP + PLOT_H + 28}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          wavelength, nanometres
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Temp</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Stellar surface temperature in kelvin</span>
            <input
              className={styles.slider}
              type="range"
              min={Math.log10(3000)}
              max={Math.log10(30000)}
              step={0.005}
              value={Math.log10(temp)}
              onChange={(event) => setTemp(10 ** Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{Math.round(temp).toLocaleString()} K</output>
        </div>
      </div>

      <div className={styles.toggles}>
        {SPECIES.map((s) => (
          <button
            key={s.key}
            type="button"
            className={styles.toggle}
            aria-pressed={active.includes(s.key)}
            onClick={() => {
              toggle(s.key);
              setDetail(s.key);
            }}
          >
            {s.name}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{species.name}.</strong> {species.note} At {Math.round(temp).toLocaleString()} K the
        hydrogen lines are{' '}
        {lineDepth(SPECIES[0]!.lines[0]!) > 0.5
          ? 'strong'
          : lineDepth(SPECIES[0]!.lines[0]!) > 0.15
            ? 'moderate'
            : 'weak'}
        . This is the trap Cecilia Payne walked into and out of in 1925: line strength depends on
        temperature far more strongly than on abundance, and once that is corrected for, the answer
        is that stars are overwhelmingly hydrogen — which nobody wanted to believe.
      </p>
    </div>
  );
}
