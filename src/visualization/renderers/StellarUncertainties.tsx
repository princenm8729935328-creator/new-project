import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A map of what stellar physics does not know, arranged by how much it matters.
 *
 * The placements are an editorial judgement, and the figure says so. What they
 * are for is a distinction that is easy to lose: some gaps are load-bearing,
 * because a prediction the field relies on rests directly on a guess, and some
 * are merely open. Convection is the clearest example of the first kind — a
 * single tunable parameter from 1958 sets predicted stellar radii and ages, and
 * every isochrone anyone fits inherits it.
 */

interface Item {
  readonly key: string;
  readonly name: string;
  /** 0 = well understood, 1 = poorly understood. */
  readonly x: number;
  /** 0 = low impact on predictions, 1 = high. */
  readonly y: number;
  readonly known: string;
  readonly unknown: string;
  readonly settle: string;
}

const ITEMS: readonly Item[] = [
  {
    key: 'convection',
    name: 'Convection',
    x: 0.78,
    y: 0.92,
    known:
      'That stars convect, where the zones are, and that convection transports nearly all the flux where it operates.',
    unknown:
      'How to compute it. Nearly every stellar model uses mixing-length theory — a one-parameter recipe from 1958 in which the convective element travels some fraction of a pressure scale height and then dissolves. The parameter is calibrated on the Sun and then applied to stars of every mass, age and composition.',
    settle:
      'Three-dimensional radiation-hydrodynamic simulations of stellar surface convection, now becoming possible, which can be used to derive the parameter rather than assume it.',
  },
  {
    key: 'massloss',
    name: 'Massive-star mass loss',
    x: 0.72,
    y: 0.86,
    known:
      'That hot massive stars drive strong radiation-pressure winds, and that some undergo violent eruptive mass loss.',
    unknown:
      'The rates, to better than a factor of two or three, and how clumpy the wind is — clumping inflates naive rate estimates substantially. Whether eruptive events like the one Eta Carinae had in the 1840s dominate the total loss is unresolved.',
    settle:
      'Better observational constraints on wind clumping, and a physical account of eruptive mass loss rather than a parameterisation.',
  },
  {
    key: 'explosion',
    name: 'Supernova explosion mechanism',
    x: 0.66,
    y: 0.8,
    known:
      'That the core collapses, that it bounces at nuclear density, that a shock forms and stalls, and that 99% of the energy leaves as neutrinos — the last confirmed directly by SN 1987A.',
    unknown:
      'How the stalled shock is revived. Neutrino heating aided by convection and the standing accretion shock instability is the leading model, and three-dimensional simulations now explode for many progenitors — but not reliably for all, and the outcome depends on details of the progenitor that are themselves uncertain.',
    settle:
      'A neutrino and gravitational-wave detection from a Galactic supernova would resolve a great deal at once. The last one visible to the naked eye was in 1604.',
  },
  {
    key: 'binaries',
    name: 'Binary interaction',
    x: 0.6,
    y: 0.72,
    known:
      'That most massive stars are in binaries — roughly 70% will exchange mass with a companion — and that this changes their evolution completely.',
    unknown:
      'The physics of common-envelope evolution, where one star engulfs the other. The efficiency of that process is parameterised by a single number that is not derived from anything, and it determines whether the system merges or becomes a compact binary.',
    settle:
      'Gravitational-wave population statistics are already constraining it, because they count the systems that survived.',
  },
  {
    key: 'nsinterior',
    name: 'Neutron star interiors',
    x: 0.7,
    y: 0.5,
    known:
      'Masses to better than a percent for some pulsars, and radii to about 10% from NICER. The maximum mass is around 2.2–2.3 solar masses.',
    unknown:
      'What the matter actually is above a few times nuclear density. Whether the core contains free quarks, hyperons, or only neutrons and protons is not known, and terrestrial experiments cannot reach those densities.',
    settle:
      'More NICER-class radius measurements, and tidal deformability from neutron-star merger gravitational waves.',
  },
  {
    key: 'rates',
    name: 'Nuclear reaction rates',
    x: 0.34,
    y: 0.58,
    known:
      'Most rates to good precision, from laboratory measurements extrapolated to stellar energies.',
    unknown:
      'The ¹²C(α,γ)¹⁶O rate, still uncertain by roughly 20%, which sets the carbon-to-oxygen ratio a massive star leaves behind — and therefore what its remnant is.',
    settle:
      'Underground accelerator measurements at energies closer to the stellar ones, which is what facilities like LUNA exist to do.',
  },
  {
    key: 'rotation',
    name: 'Rotation and mixing',
    x: 0.62,
    y: 0.44,
    known:
      'That rotation drives circulation which mixes material across zones that would otherwise stay separate, and that this extends a star’s life by feeding fresh fuel to the core.',
    unknown:
      'How angular momentum is transported internally. Asteroseismology shows that stellar cores spin far more slowly than standard theory predicts, so something is coupling core and envelope that the models do not contain.',
    settle: 'Asteroseismic rotation profiles for many more stars across the mass range.',
  },
  {
    key: 'opacity',
    name: 'Opacities',
    x: 0.28,
    y: 0.3,
    known:
      'Tabulated for stellar compositions and generally accurate; opacity is what sets where the radiative zones end.',
    unknown:
      'A measured iron opacity at solar interior conditions came out substantially higher than the tables predicted, which would help with the long-standing solar abundance problem — and has not been fully explained.',
    settle: 'Further laboratory measurements at stellar interior conditions.',
  },
];

const W = 380;
const H = 244;
const LEFT = 44;
const RIGHT = 16;
const TOP = 30;
const BOTTOM = 48;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const px = (x: number): number => LEFT + x * PLOT_W;
const py = (y: number): number => TOP + (1 - y) * PLOT_H;

export default function StellarUncertainties(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(0);
  const item = ITEMS[selected] ?? ITEMS[0]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={LEFT - 34} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          open problems, placed by editorial judgement — not a computed quantity
        </text>

        <rect
          x={px(0.5)}
          y={TOP}
          width={PLOT_W / 2}
          height={PLOT_H / 2}
          fill="rgba(255,143,110,0.07)"
        />
        <text x={px(0.98)} y={TOP + 12} textAnchor="end" fontSize={8} fill="rgba(255,143,110,0.9)">
          load-bearing gaps
        </text>

        <line
          x1={LEFT}
          x2={LEFT + PLOT_W}
          y1={TOP + PLOT_H}
          y2={TOP + PLOT_H}
          stroke="rgba(148,162,192,0.4)"
        />
        <line x1={LEFT} x2={LEFT} y1={TOP} y2={TOP + PLOT_H} stroke="rgba(148,162,192,0.4)" />
        <text x={LEFT} y={TOP + PLOT_H + 14} fontSize={8.5} fill="rgba(148,162,192,0.85)">
          well understood
        </text>
        <text
          x={LEFT + PLOT_W}
          y={TOP + PLOT_H + 14}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(148,162,192,0.85)"
        >
          poorly understood →
        </text>
        <text
          x={LEFT - 6}
          y={TOP + 4}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(148,162,192,0.85)"
        >
          high
        </text>
        <text
          x={LEFT - 6}
          y={TOP + PLOT_H}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(148,162,192,0.85)"
        >
          low
        </text>
        <text x={4} y={TOP - 8} fontSize={8.5} fill="rgba(148,162,192,0.85)">
          impact on predictions
        </text>

        {ITEMS.map((entry, index) => {
          const isSelected = index === selected;
          return (
            <g key={entry.key} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <circle
                cx={px(entry.x)}
                cy={py(entry.y)}
                r={isSelected ? 7 : 4.5}
                fill={isSelected ? '#4fe0c0' : 'rgba(143,184,255,0.75)'}
              />
              <text
                x={px(entry.x)}
                y={py(entry.y) + (index % 2 === 0 ? -10 : 16)}
                textAnchor="middle"
                fontSize={8}
                fill={isSelected ? '#4fe0c0' : 'rgba(226,233,246,0.88)'}
              >
                {entry.name}
              </text>
            </g>
          );
        })}

        <text x={LEFT - 34} y={H - 8} fontSize={8.5} fill="rgba(148,162,192,0.85)">
          These are gaps in specific mechanisms inside a framework that works.
        </text>
      </svg>

      <div className={styles.toggles}>
        {ITEMS.map((entry, index) => (
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
        <strong>{item.name}.</strong> <em>Established:</em> {item.known} <em>Not established:</em>{' '}
        {item.unknown} <em>What would settle it:</em> {item.settle}
      </p>
    </div>
  );
}
