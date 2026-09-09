import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The Standard Model's contents, with measured values, and its omissions beside them.
 *
 * Every mass, charge and spin here is a Particle Data Group value. The chart is
 * complete: there is nothing else in the theory. That completeness is what makes
 * the panel at the bottom worth as much as the grid above it — a theory that
 * fits every accelerator measurement to eleven decimal places in one case, and
 * has no entry at all for eighty-five per cent of the matter in the Universe.
 */

interface Particle {
  readonly symbol: string;
  readonly name: string;
  /** Mass in electronvolts. 0 means massless in the theory. */
  readonly massEv: number;
  readonly massLabel: string;
  readonly charge: string;
  readonly spin: string;
  readonly confirmed: string;
  readonly group: 'quark' | 'lepton' | 'boson' | 'higgs';
  readonly column: number;
  readonly row: number;
  readonly note: string;
}

const PARTICLES: readonly Particle[] = [
  {
    symbol: 'u',
    name: 'up quark',
    massEv: 2.16e6,
    massLabel: '2.16 MeV',
    charge: '+⅔',
    spin: '½',
    confirmed: '1968',
    group: 'quark',
    column: 0,
    row: 0,
    note: 'Two up quarks and one down make a proton.',
  },
  {
    symbol: 'c',
    name: 'charm quark',
    massEv: 1.273e9,
    massLabel: '1.273 GeV',
    charge: '+⅔',
    spin: '½',
    confirmed: '1974',
    group: 'quark',
    column: 1,
    row: 0,
    note: 'Found simultaneously at Brookhaven and SLAC — the November Revolution.',
  },
  {
    symbol: 't',
    name: 'top quark',
    massEv: 172.57e9,
    massLabel: '172.57 GeV',
    charge: '+⅔',
    spin: '½',
    confirmed: '1995',
    group: 'quark',
    column: 2,
    row: 0,
    note: 'As heavy as a gold atom, and the only quark that decays before it can form a bound state.',
  },
  {
    symbol: 'd',
    name: 'down quark',
    massEv: 4.7e6,
    massLabel: '4.70 MeV',
    charge: '−⅓',
    spin: '½',
    confirmed: '1968',
    group: 'quark',
    column: 0,
    row: 1,
    note: 'One up and two down quarks make a neutron.',
  },
  {
    symbol: 's',
    name: 'strange quark',
    massEv: 93.5e6,
    massLabel: '93.5 MeV',
    charge: '−⅓',
    spin: '½',
    confirmed: '1964',
    group: 'quark',
    column: 1,
    row: 1,
    note: 'Named for the unexpectedly long lifetimes of the particles containing it.',
  },
  {
    symbol: 'b',
    name: 'bottom quark',
    massEv: 4.183e9,
    massLabel: '4.183 GeV',
    charge: '−⅓',
    spin: '½',
    confirmed: '1977',
    group: 'quark',
    column: 2,
    row: 1,
    note: 'Its long-lived mesons are where matter–antimatter asymmetry is most precisely studied.',
  },
  {
    symbol: 'νₑ',
    name: 'electron neutrino',
    massEv: 0.8,
    massLabel: '< 0.8 eV',
    charge: '0',
    spin: '½',
    confirmed: '1956',
    group: 'lepton',
    column: 0,
    row: 2,
    note: 'The Standard Model predicted neutrinos to be exactly massless. Oscillation experiments showed they are not — the clearest known failure of the theory.',
  },
  {
    symbol: 'ν_μ',
    name: 'muon neutrino',
    massEv: 0.8,
    massLabel: '< 0.8 eV',
    charge: '0',
    spin: '½',
    confirmed: '1962',
    group: 'lepton',
    column: 1,
    row: 2,
    note: 'Neutrinos change type as they travel, which is only possible if they have mass.',
  },
  {
    symbol: 'ν_τ',
    name: 'tau neutrino',
    massEv: 0.8,
    massLabel: '< 0.8 eV',
    charge: '0',
    spin: '½',
    confirmed: '2000',
    group: 'lepton',
    column: 2,
    row: 2,
    note: 'The last fermion of the three generations to be directly detected.',
  },
  {
    symbol: 'e',
    name: 'electron',
    massEv: 0.511e6,
    massLabel: '0.511 MeV',
    charge: '−1',
    spin: '½',
    confirmed: '1897',
    group: 'lepton',
    column: 0,
    row: 3,
    note: 'Its magnetic moment is the most precisely verified prediction in physics, agreeing with theory to about one part in 10¹².',
  },
  {
    symbol: 'μ',
    name: 'muon',
    massEv: 105.66e6,
    massLabel: '105.66 MeV',
    charge: '−1',
    spin: '½',
    confirmed: '1936',
    group: 'lepton',
    column: 1,
    row: 3,
    note: 'An electron 207 times heavier, with no explanation in the theory for why it exists.',
  },
  {
    symbol: 'τ',
    name: 'tau',
    massEv: 1776.9e6,
    massLabel: '1776.9 MeV',
    charge: '−1',
    spin: '½',
    confirmed: '1975',
    group: 'lepton',
    column: 2,
    row: 3,
    note: 'Heavy enough to decay into hadrons — the only lepton that can.',
  },
  {
    symbol: 'γ',
    name: 'photon',
    massEv: 0,
    massLabel: 'massless',
    charge: '0',
    spin: '1',
    confirmed: '1923',
    group: 'boson',
    column: 3,
    row: 0,
    note: 'Carries the electromagnetic force. Massless, which is why that force has unlimited range.',
  },
  {
    symbol: 'g',
    name: 'gluon',
    massEv: 0,
    massLabel: 'massless',
    charge: '0',
    spin: '1',
    confirmed: '1979',
    group: 'boson',
    column: 3,
    row: 1,
    note: 'Carries the strong force. Massless, yet the force has short range, because gluons interact with each other.',
  },
  {
    symbol: 'Z',
    name: 'Z boson',
    massEv: 91.188e9,
    massLabel: '91.188 GeV',
    charge: '0',
    spin: '1',
    confirmed: '1983',
    group: 'boson',
    column: 3,
    row: 2,
    note: 'Carries the weak force. Its mass is why weak interactions are weak and short-ranged.',
  },
  {
    symbol: 'W',
    name: 'W boson',
    massEv: 80.369e9,
    massLabel: '80.369 GeV',
    charge: '±1',
    spin: '1',
    confirmed: '1983',
    group: 'boson',
    column: 3,
    row: 3,
    note: 'The only force carrier that changes one type of particle into another — which is what beta decay is.',
  },
  {
    symbol: 'H',
    name: 'Higgs boson',
    massEv: 125.2e9,
    massLabel: '125.20 GeV',
    charge: '0',
    spin: '0',
    confirmed: '2012',
    group: 'higgs',
    column: 4,
    row: 1,
    note: 'The excitation of the field that gives the other particles their masses. Found in 2012, forty-eight years after it was proposed.',
  },
];

const COLOURS: Record<Particle['group'], string> = {
  quark: 'rgba(169,123,255,0.28)',
  lepton: 'rgba(102,224,212,0.24)',
  boson: 'rgba(255,143,110,0.24)',
  higgs: 'rgba(255,214,110,0.28)',
};

const W = 380;
const H = 250;
const CELL = 62;
const CELL_H = 46;
const GRID_L = 22;
const GRID_T = 40;

export default function StandardModelChart(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState('H');
  const particle = PARTICLES.find((entry) => entry.symbol === selected) ?? PARTICLES[0];

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
          The Standard Model: seventeen particle types, complete
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          masses from the Particle Data Group — tap any tile
        </text>

        {[0, 1, 2].map((column) => (
          <text
            key={column}
            x={GRID_L + column * CELL + CELL / 2}
            y={GRID_T - 4}
            textAnchor="middle"
            fontSize={7}
            fill="rgba(148,162,192,0.7)"
          >
            generation {column + 1}
          </text>
        ))}
        <text
          x={GRID_L + 3 * CELL + CELL / 2}
          y={GRID_T - 4}
          textAnchor="middle"
          fontSize={7}
          fill="rgba(148,162,192,0.7)"
        >
          forces
        </text>

        {PARTICLES.map((entry) => {
          const x = GRID_L + entry.column * CELL;
          const y = GRID_T + entry.row * CELL_H;
          const active = entry.symbol === selected;
          return (
            <g
              key={entry.symbol}
              onClick={() => setSelected(entry.symbol)}
              style={{ cursor: 'pointer' }}
            >
              <rect
                x={x}
                y={y}
                width={CELL - 5}
                height={CELL_H - 5}
                rx={5}
                fill={COLOURS[entry.group]}
                stroke={active ? '#e2e9f6' : 'rgba(148,162,192,0.25)'}
                strokeWidth={active ? 1.8 : 1}
              />
              <text
                x={x + (CELL - 5) / 2}
                y={y + 20}
                textAnchor="middle"
                fontSize={14}
                fill="rgba(240,244,252,0.95)"
                fontFamily="system-ui, sans-serif"
              >
                {entry.symbol}
              </text>
              <text
                x={x + (CELL - 5) / 2}
                y={y + 33}
                textAnchor="middle"
                fontSize={7}
                fill="rgba(226,233,246,0.78)"
                fontFamily="ui-monospace, monospace"
              >
                {entry.massLabel}
              </text>
            </g>
          );
        })}
      </svg>

      <p className={styles.epochDetail}>
        <strong>{particle?.name}</strong> — mass {particle?.massLabel}, charge {particle?.charge},
        spin {particle?.spin}, confirmed {particle?.confirmed}. {particle?.note}
      </p>
      <p className={styles.epochDetail}>
        <strong>What this chart does not contain.</strong> Dark matter, which outweighs everything
        here by about five to one. Dark energy. Gravity, in any form. Any explanation of why the
        masses span eleven orders of magnitude, or why there are three generations rather than one.
        Any account of the matter–antimatter asymmetry large enough to explain why anything exists.
        And neutrino mass, which the theory as written predicts to be exactly zero and which
        experiment has shown is not. The Standard Model is the most precisely tested theory ever
        built and it is <em>not</em> a complete theory of nature.
      </p>
    </div>
  );
}
