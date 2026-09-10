import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The M–σ relation, with the puzzle stated rather than resolved.
 *
 * A tight correlation between two quantities is not a mechanism. This figure
 * plots the correlation, quantifies how strange it is by putting the two length
 * scales side by side, and then presents the two leading explanations as
 * competing hypotheses — because that is what they are. Nothing in the data
 * says which is right, and a figure that implied otherwise would be teaching a
 * conclusion the field has not reached.
 */

const W = 380;
const H = 234;
const LEFT = 40;
const RIGHT = 14;
const TOP = 24;
const BOTTOM = 42;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

/** log10 σ in km/s. */
const X_MIN = 1.5;
const X_MAX = 2.6;
/** log10 M_BH in solar masses. */
const Y_MIN = 5;
const Y_MAX = 10.5;

const px = (x: number): number => LEFT + ((x - X_MIN) / (X_MAX - X_MIN)) * PLOT_W;
const py = (y: number): number => TOP + PLOT_H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * PLOT_H;

/** Kormendy & Ho (2013): log(M/M☉) = 8.49 + 4.38·log(σ/200). */
const relation = (logSigma: number): number => 8.49 + 4.38 * (logSigma - Math.log10(200));

interface Galaxy {
  readonly name: string;
  readonly sigma: number;
  readonly mass: number;
  readonly note?: string;
}

const GALAXIES: readonly Galaxy[] = [
  {
    name: 'Milky Way',
    sigma: 105,
    mass: 4.3e6,
    note: 'Sgr A*: mass measured from stellar orbits, the most direct such measurement anywhere.',
  },
  { name: 'M32', sigma: 75, mass: 2.5e6 },
  {
    name: 'NGC 4258',
    sigma: 115,
    mass: 4.0e7,
    note: 'Mass from a water-maser disk — a geometric measurement, independent of everything else.',
  },
  { name: 'M81', sigma: 143, mass: 6.5e7 },
  { name: 'NGC 3115', sigma: 230, mass: 9.0e8 },
  { name: 'M84', sigma: 296, mass: 8.5e8 },
  {
    name: 'M87',
    sigma: 324,
    mass: 6.5e9,
    note: 'The first black hole to be imaged, in 2019. Its shadow diameter gave a mass consistent with the stellar-dynamical one.',
  },
  { name: 'NGC 1332', sigma: 328, mass: 1.5e9 },
  { name: 'NGC 4889', sigma: 347, mass: 2.1e10 },
  { name: 'NGC 3379', sigma: 206, mass: 4.2e8 },
  { name: 'NGC 5128', sigma: 150, mass: 5.5e7 },
  { name: 'NGC 4473', sigma: 190, mass: 9.0e7 },
];

type Hypothesis = 'feedback' | 'merging';

export default function BlackHoleGalaxyRelation(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(0);
  const [hypothesis, setHypothesis] = useState<Hypothesis>('feedback');
  const galaxy = GALAXIES[selected] ?? GALAXIES[0]!;

  const line = `M${px(X_MIN)},${py(relation(X_MIN))} L${px(X_MAX)},${py(relation(X_MAX))}`;

  /**
   * Sphere of influence: r ≈ GM/σ². The number that makes the correlation odd.
   */
  const influencePc = (6.674e-11 * galaxy.mass * 1.989e30) / (galaxy.sigma * 1000) ** 2 / 3.086e16;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <clipPath id="msigma-plot">
          <rect x={LEFT} y={TOP} width={PLOT_W} height={PLOT_H} />
        </clipPath>

        {[6, 7, 8, 9, 10].map((tick) => (
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
              10{['⁶', '⁷', '⁸', '⁹', '¹⁰'][tick - 6]}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 10} fontSize={9} fill="rgba(148,162,192,0.9)">
          black-hole mass, M☉
        </text>

        {[50, 100, 200, 400].map((tick) => (
          <g key={tick}>
            <line
              x1={px(Math.log10(tick))}
              x2={px(Math.log10(tick))}
              y1={TOP}
              y2={TOP + PLOT_H}
              stroke="rgba(148,162,192,0.12)"
            />
            <text
              x={px(Math.log10(tick))}
              y={TOP + PLOT_H + 13}
              textAnchor="middle"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick}
            </text>
          </g>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 26}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          bulge velocity dispersion σ, km/s
        </text>

        <g clipPath="url(#msigma-plot)">
          {/* Scatter band: the relation is tight to about a factor of two. */}
          <path
            d={`${line} L${px(X_MAX)},${py(relation(X_MAX) + 0.35)} L${px(X_MIN)},${py(relation(X_MIN) + 0.35)} Z`}
            fill="rgba(143,184,255,0.10)"
          />
          <path
            d={`${line} L${px(X_MAX)},${py(relation(X_MAX) - 0.35)} L${px(X_MIN)},${py(relation(X_MIN) - 0.35)} Z`}
            fill="rgba(143,184,255,0.10)"
          />
          <path d={line} fill="none" stroke="rgba(143,184,255,0.7)" strokeWidth={1.7} />

          {GALAXIES.map((entry, index) => (
            <circle
              key={entry.name}
              cx={px(Math.log10(entry.sigma))}
              cy={py(Math.log10(entry.mass))}
              r={index === selected ? 5 : 3}
              fill={index === selected ? '#4fe0c0' : 'rgba(226,233,246,0.82)'}
              onClick={() => setSelected(index)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </g>

        <text
          x={px(Math.log10(105)) + 7}
          y={py(Math.log10(4.3e6)) + 3}
          fontSize={8.5}
          fill="rgba(226,233,246,0.9)"
        >
          Milky Way
        </text>
        <text
          x={px(Math.log10(324)) - 6}
          y={py(Math.log10(6.5e9)) + 3}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(226,233,246,0.9)"
        >
          M87
        </text>
        <text x={px(1.62)} y={py(9.6)} fontSize={8.5} fill="rgba(143,184,255,0.9)">
          M ∝ σ⁴·⁴, scatter ≈ ×2
        </text>
      </svg>

      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={false}
          onClick={() => setSelected((value) => (value + 1) % GALAXIES.length)}
        >
          Next galaxy
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={hypothesis === 'feedback'}
          onClick={() => setHypothesis('feedback')}
        >
          Hypothesis: feedback
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={hypothesis === 'merging'}
          onClick={() => setHypothesis('merging')}
        >
          Hypothesis: merging
        </button>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{galaxy.name}</strong>: σ = {galaxy.sigma} km/s, black hole{' '}
        {galaxy.mass >= 1e9
          ? `${(galaxy.mass / 1e9).toPrecision(2)} billion`
          : `${(galaxy.mass / 1e6).toPrecision(2)} million`}{' '}
        M☉. Its gravity dominates out to only about {influencePc.toPrecision(2)} parsecs, while the
        bulge whose motions it tracks is thousands of parsecs across — the black hole is roughly a
        thousandth of a percent of the bulge’s mass and cannot be pulling on it directly.{' '}
        {galaxy.note ?? ''}
      </p>

      <p className={styles.epochDetail}>
        {hypothesis === 'feedback' ? (
          <>
            <strong>Self-regulation.</strong> As the black hole grows, the energy released by
            accretion heats and expels the surrounding gas. Once the output exceeds what the bulge’s
            gravity can hold onto, the fuel supply is cut and growth stops — at a mass set by the
            bulge’s depth, which σ measures. This predicts roughly the observed slope.
          </>
        ) : (
          <>
            <strong>Averaging through mergers.</strong> No regulation is required. If galaxies grow
            mainly by merging, then both the stars and the black holes are simply being added
            together many times over, and the central limit theorem drives any initial scatter in
            the ratio down toward a tight relation. This also reproduces the correlation.
          </>
        )}{' '}
        <em>
          Both accounts fit. Which one is right — or whether both contribute — is not settled, and
          the correlation alone cannot decide it.
        </em>
      </p>
    </div>
  );
}
