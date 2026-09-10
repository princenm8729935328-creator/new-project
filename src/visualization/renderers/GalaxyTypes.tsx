import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The tuning fork, drawn in order to argue against itself.
 *
 * Hubble's diagram is genuinely useful and almost universally misread. The
 * "early" and "late" labels are historical accidents that imply a sequence
 * nobody believes in — ellipticals do not turn into spirals or vice versa in
 * the direction the diagram suggests. The slider here is the argument: as it
 * moves, the fraction of galaxies that classifiers cannot agree on grows, and
 * the tidy boxes visibly stop containing most of the population.
 *
 * The galaxy shapes are drawn representations. They are not images, and no
 * telescope data is being displayed.
 */

interface Type {
  readonly key: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly kind: 'elliptical' | 'lenticular' | 'spiral' | 'barred';
  readonly ellipticity: number;
  readonly gas: string;
  readonly sfr: string;
  readonly ages: string;
  readonly motion: string;
  readonly detail: string;
}

const TYPES: readonly Type[] = [
  {
    key: 'E0',
    label: 'E0',
    x: 44,
    y: 96,
    kind: 'elliptical',
    ellipticity: 0,
    gas: 'almost none — under 1% of the stellar mass',
    sfr: 'essentially zero',
    ages: 'old, typically over 10 billion years',
    motion: 'dispersion-supported: stars move on randomly oriented orbits',
    detail:
      'A nearly spherical swarm of old stars. The number after the E is ten times the ellipticity as seen from Earth, which means it partly records our viewing angle rather than the galaxy — a cigar seen end-on is classified E0.',
  },
  {
    key: 'E6',
    label: 'E6',
    x: 106,
    y: 96,
    kind: 'elliptical',
    ellipticity: 0.6,
    gas: 'almost none',
    sfr: 'essentially zero',
    ages: 'old',
    motion: 'dispersion-supported, often with slow rotation',
    detail:
      'A flattened elliptical. The flattening is not caused by rotation, as it is in a disk: these systems are flattened because the stellar orbits are anisotropic, which was one of the surprises of the 1970s.',
  },
  {
    key: 'S0',
    label: 'S0',
    x: 168,
    y: 96,
    kind: 'lenticular',
    ellipticity: 0.7,
    gas: 'little',
    sfr: 'low',
    ages: 'mostly old',
    motion: 'a rotating disk, but with a large dispersion-supported bulge',
    detail:
      'A lenticular: it has a disk, like a spiral, but no spiral arms and little gas. These sit exactly at the junction of the fork, and the argument over whether they are faded spirals, stripped spirals or merger products is not settled.',
  },
  {
    key: 'Sa',
    label: 'Sa',
    x: 246,
    y: 56,
    kind: 'spiral',
    ellipticity: 0.6,
    gas: 'moderate, roughly 5% of stellar mass',
    sfr: 'modest',
    ages: 'a mixed population, bulge old and disk younger',
    motion: 'rotation-supported disk with a prominent bulge',
    detail:
      'A spiral with a large bulge and tightly wound arms. Moving from Sa to Sc the bulge shrinks, the arms open out and the star formation rate rises.',
  },
  {
    key: 'Sc',
    label: 'Sc',
    x: 330,
    y: 40,
    kind: 'spiral',
    ellipticity: 0.55,
    gas: 'plentiful, 10–20% of stellar mass',
    sfr: 'high',
    ages: 'young in the arms, old in the small bulge',
    motion: 'rotation-supported disk with a small bulge',
    detail:
      'A spiral with loosely wound arms and a small bulge, forming stars vigorously. The Milky Way is somewhere between Sb and Sc, and barred.',
  },
  {
    key: 'SBb',
    label: 'SBb',
    x: 258,
    y: 148,
    kind: 'barred',
    ellipticity: 0.6,
    gas: 'moderate',
    sfr: 'moderate, often concentrated at the bar ends and centre',
    ages: 'mixed',
    motion: 'rotation-supported, with stars trapped on elongated orbits in the bar',
    detail:
      'A barred spiral. About two-thirds of nearby disk galaxies have a bar, the Milky Way included — Hubble drew the barred branch as an oddity, and it turned out to be the majority.',
  },
  {
    key: 'SBc',
    label: 'SBc',
    x: 336,
    y: 168,
    kind: 'barred',
    ellipticity: 0.55,
    gas: 'plentiful',
    sfr: 'high',
    ages: 'young in the arms',
    motion: 'rotation-supported with a strong bar',
    detail:
      'A loosely wound barred spiral. Bars are efficient at moving gas inward, so they can trigger central starbursts and feed a black hole — one of the few ways a galaxy can act on its own centre.',
  },
];

const W = 380;
const H = 272;

function drawGalaxy(type: Type, highlight: boolean): ReactNode {
  const stroke = highlight ? '#8fb8ff' : 'rgba(148,162,192,0.65)';
  const fill = highlight ? 'rgba(143,184,255,0.28)' : 'rgba(148,162,192,0.16)';
  const rx = 17;
  const ry = rx * (1 - type.ellipticity * 0.75);
  if (type.kind === 'elliptical' || type.kind === 'lenticular') {
    return (
      <>
        <ellipse cx={0} cy={0} rx={rx} ry={ry} fill={fill} stroke={stroke} strokeWidth={1.2} />
        <ellipse
          cx={0}
          cy={0}
          rx={rx * 0.35}
          ry={ry * 0.5}
          fill={highlight ? 'rgba(255,210,127,0.5)' : 'rgba(226,233,246,0.28)'}
        />
      </>
    );
  }
  const arm = (sign: number): string =>
    `M${sign * (type.kind === 'barred' ? 7 : 2)},0 C${sign * 15},${-ry * 0.6} ${sign * 18},${-ry * 1.1} ${sign * 4},${-ry * 1.5} C${-sign * 8},${-ry * 1.8} ${-sign * 16},${-ry * 0.6} ${-sign * 17},${ry * 0.2}`;
  return (
    <>
      <ellipse cx={0} cy={0} rx={rx} ry={ry} fill={fill} stroke="none" />
      <path d={arm(1)} fill="none" stroke={stroke} strokeWidth={1.5} />
      <path d={arm(-1)} fill="none" stroke={stroke} strokeWidth={1.5} />
      {type.kind === 'barred' && (
        <rect
          x={-8}
          y={-2.4}
          width={16}
          height={4.8}
          rx={2.4}
          fill={highlight ? '#ffd27f' : 'rgba(226,233,246,0.5)'}
        />
      )}
      <circle
        cx={0}
        cy={0}
        r={type.kind === 'barred' ? 3 : 4}
        fill={highlight ? 'rgba(255,210,127,0.7)' : 'rgba(226,233,246,0.35)'}
      />
    </>
  );
}

export default function GalaxyTypes(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(4);
  /** How strictly classifiers are asked to agree, 0–100%. */
  const [agreement, setAgreement] = useState(50);
  const type = TYPES[selected] ?? TYPES[4]!;

  /**
   * Galaxy Zoo found that requiring higher classifier agreement leaves a rapidly
   * shrinking fraction of galaxies confidently classified. This is the shape of
   * that effect, not a fit to the published catalogue.
   */
  const confident = Math.round(100 * Math.exp(-((agreement / 100) ** 2) * 1.35));

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={10} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          drawn shapes, not images — the layout is Hubble’s 1926 tuning fork
        </text>

        <path
          d="M126,96 L196,96 L246,60"
          fill="none"
          stroke="rgba(148,162,192,0.3)"
          strokeWidth={1.2}
        />
        <path d="M196,96 L252,146" fill="none" stroke="rgba(148,162,192,0.3)" strokeWidth={1.2} />

        {TYPES.map((entry, index) => (
          <g
            key={entry.key}
            transform={`translate(${entry.x}, ${entry.y})`}
            onClick={() => setSelected(index)}
            style={{ cursor: 'pointer' }}
          >
            <circle r={24} fill={index === selected ? 'rgba(143,184,255,0.10)' : 'transparent'} />
            {drawGalaxy(entry, index === selected)}
            <text
              y={32}
              textAnchor="middle"
              fontSize={9.5}
              fontWeight={index === selected ? 700 : 500}
              fill={index === selected ? '#8fb8ff' : 'rgba(226,233,246,0.9)'}
            >
              {entry.label}
            </text>
          </g>
        ))}

        <text x={20} y={216} fontSize={8.5} fill="rgba(148,162,192,0.8)">
          Hubble called these “early”
        </text>
        <text x={366} y={216} textAnchor="end" fontSize={8.5} fill="rgba(148,162,192,0.8)">
          and these “late”
        </text>
        <text x={190} y={228} textAnchor="middle" fontSize={9} fill="rgba(255,143,110,0.95)">
          the words are historical. Nothing evolves along this diagram.
        </text>

        {/* The classifier-agreement bar. */}
        <rect x={40} y={240} width={300} height={12} rx={6} fill="rgba(148,162,192,0.18)" />
        <rect x={40} y={240} width={(confident / 100) * 300} height={12} rx={6} fill="#8fb8ff" />
        <text x={40} y={264} fontSize={8.5} fill="rgba(226,233,246,0.9)">
          {confident}% of real galaxies fit a single box at this level of agreement
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Agreement</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Required level of classifier agreement</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={100}
              step={1}
              value={agreement}
              onChange={(event) => setAgreement(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{agreement}%</output>
        </div>
      </div>

      <div className={styles.toggles}>
        {TYPES.map((entry, index) => (
          <button
            key={entry.key}
            type="button"
            className={styles.toggle}
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            {entry.label}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{type.label}.</strong> {type.detail} <em>Gas:</em> {type.gas}.{' '}
        <em>Star formation:</em> {type.sfr}. <em>Stellar ages:</em> {type.ages}.{' '}
        <em>How the stars move:</em> {type.motion}.
      </p>
    </div>
  );
}
