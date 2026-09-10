import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Where the convection is, and why it moves.
 *
 * Three stars, three arrangements. A red dwarf is convective everywhere; the
 * Sun is radiative inside and convective outside; a five-solar-mass star has
 * the two swapped. That reversal is not a curiosity — it decides whether a star
 * mixes fresh fuel into its core, which decides how long it lives and what it
 * leaves behind.
 *
 * The zone boundaries are model results. The convection cells are drawn as
 * loops for legibility; real convection is not tidy.
 */

interface Star {
  readonly key: string;
  readonly name: string;
  /** Fractional radius at which the radiative zone ends, or null if none. */
  readonly radiativeOuter: number | null;
  /** Fractional radius of the convective core, or 0 if none. */
  readonly convectiveCore: number;
  /** Fractional radius of the fusing core. */
  readonly burningCore: number;
  /** Drawn radius in viewBox units — stars are NOT to scale against each other. */
  readonly drawn: number;
  readonly colour: string;
  readonly detail: string;
}

const STARS: readonly Star[] = [
  {
    key: 'dwarf',
    name: '0.3 M☉ red dwarf',
    radiativeOuter: null,
    convectiveCore: 0,
    burningCore: 0.4,
    drawn: 34,
    colour: '#ff8f6e',
    detail:
      'Fully convective: the whole star turns over. Helium ash never accumulates in the core because it is continually stirred back out, so the star eventually burns nearly all of its hydrogen rather than the inner ten percent. That is the second reason red dwarfs live so long — the first being how little they radiate.',
  },
  {
    key: 'sun',
    name: '1 M☉ (the Sun)',
    radiativeOuter: 0.71,
    convectiveCore: 0,
    burningCore: 0.25,
    drawn: 50,
    colour: '#ffd27f',
    detail:
      'Radiative from the core out to 71% of the radius — a figure measured, not assumed, by reading the Sun’s internal sound speed off its surface oscillations. Outside that the gas becomes opaque enough that radiation cannot carry the flux, and the star boils instead. The granules on the visible surface are the tops of those convection cells.',
  },
  {
    key: 'massive',
    name: '5 M☉ B star',
    radiativeOuter: 1,
    convectiveCore: 0.22,
    burningCore: 0.22,
    drawn: 66,
    colour: '#8fb8ff',
    detail:
      'The arrangement is inverted. The CNO cycle goes as roughly the seventeenth power of temperature, so all the energy is generated in a tiny central volume, and no amount of radiation can carry that flux out of so small a region — the core convects. Outside it the envelope is hot, transparent and radiative.',
  },
];

const W = 380;
const H = 216;
const CY = 92;
const CENTRES = [70, 190, 310];

export default function StellarStructure(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(1);
  const star = STARS[selected] ?? STARS[1]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={10} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          cut-away interiors — to scale within a star, not between stars
        </text>

        {STARS.map((entry, index) => {
          const cx = CENTRES[index] ?? 190;
          const r = entry.drawn;
          const isSelected = index === selected;
          const radiativeR = entry.radiativeOuter === null ? 0 : r * entry.radiativeOuter;
          const coreR = r * entry.burningCore;
          const convCoreR = r * entry.convectiveCore;
          return (
            <g key={entry.key} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={cx - 58}
                y={CY - 76}
                width={116}
                height={152}
                fill={isSelected ? 'rgba(143,184,255,0.09)' : 'transparent'}
                rx={6}
              />

              {/* Convective envelope (or whole star). */}
              <circle
                cx={cx}
                cy={CY}
                r={r}
                fill="rgba(255,143,110,0.16)"
                stroke={entry.colour}
                strokeWidth={isSelected ? 1.8 : 1}
              />

              {/* Convection loops in the convective region. */}
              {entry.radiativeOuter === null
                ? [0, 1, 2, 3, 4, 5].map((i) => {
                    const a = (i / 6) * Math.PI * 2;
                    return (
                      <path
                        key={i}
                        d={`M${cx + Math.cos(a) * r * 0.35},${CY + Math.sin(a) * r * 0.35} Q${cx + Math.cos(a + 0.4) * r * 0.8},${CY + Math.sin(a + 0.4) * r * 0.8} ${cx + Math.cos(a + 0.9) * r * 0.35},${CY + Math.sin(a + 0.9) * r * 0.35}`}
                        fill="none"
                        stroke="rgba(255,143,110,0.55)"
                        strokeWidth={1}
                      />
                    );
                  })
                : entry.radiativeOuter < 1
                  ? [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                      const a = (i / 8) * Math.PI * 2;
                      const r1 = radiativeR + 2;
                      const r2 = r - 2;
                      return (
                        <path
                          key={i}
                          d={`M${cx + Math.cos(a) * r1},${CY + Math.sin(a) * r1} Q${cx + Math.cos(a + 0.22) * (r1 + r2) * 0.5},${CY + Math.sin(a + 0.22) * (r1 + r2) * 0.5} ${cx + Math.cos(a + 0.44) * r2},${CY + Math.sin(a + 0.44) * r2}`}
                          fill="none"
                          stroke="rgba(255,143,110,0.6)"
                          strokeWidth={1}
                        />
                      );
                    })
                  : null}

              {/* Radiative zone. */}
              {entry.radiativeOuter !== null && (
                <circle
                  cx={cx}
                  cy={CY}
                  r={radiativeR}
                  fill="rgba(143,184,255,0.18)"
                  stroke="rgba(143,184,255,0.5)"
                  strokeWidth={0.9}
                />
              )}

              {/* Convective core, where there is one. */}
              {convCoreR > 0 && (
                <>
                  <circle cx={cx} cy={CY} r={convCoreR} fill="rgba(255,143,110,0.3)" />
                  {[0, 1, 2, 3].map((i) => {
                    const a = (i / 4) * Math.PI * 2;
                    return (
                      <path
                        key={i}
                        d={`M${cx + Math.cos(a) * convCoreR * 0.3},${CY + Math.sin(a) * convCoreR * 0.3} Q${cx + Math.cos(a + 0.5) * convCoreR * 0.9},${CY + Math.sin(a + 0.5) * convCoreR * 0.9} ${cx + Math.cos(a + 1.1) * convCoreR * 0.3},${CY + Math.sin(a + 1.1) * convCoreR * 0.3}`}
                        fill="none"
                        stroke="rgba(255,143,110,0.8)"
                        strokeWidth={0.9}
                      />
                    );
                  })}
                </>
              )}

              {/* Fusing core. */}
              <circle cx={cx} cy={CY} r={coreR} fill="rgba(255,255,255,0.55)" />

              <text
                x={cx}
                y={CY + r + 20}
                textAnchor="middle"
                fontSize={9}
                fontWeight={isSelected ? 700 : 500}
                fill={isSelected ? entry.colour : 'rgba(226,233,246,0.9)'}
              >
                {entry.name}
              </text>
            </g>
          );
        })}

        {/* Legend, on its own row so nothing can collide with the stars. */}
        <g transform={`translate(10, ${H - 12})`}>
          <circle cx={4} cy={-4} r={4} fill="rgba(255,255,255,0.55)" />
          <text x={13} y={-1} fontSize={8.5} fill="rgba(226,233,246,0.9)">
            fusing core
          </text>
          <circle cx={92} cy={-4} r={4} fill="rgba(143,184,255,0.4)" />
          <text x={101} y={-1} fontSize={8.5} fill="rgba(226,233,246,0.9)">
            radiative — photons crawl out
          </text>
          <circle cx={244} cy={-4} r={4} fill="rgba(255,143,110,0.4)" />
          <text x={253} y={-1} fontSize={8.5} fill="rgba(226,233,246,0.9)">
            convective — gas rises
          </text>
        </g>
      </svg>

      <div className={styles.toggles}>
        {STARS.map((entry, index) => (
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
        <strong>{star.name}.</strong> {star.detail}
      </p>
    </div>
  );
}
