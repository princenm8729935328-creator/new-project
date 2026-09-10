import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The CNO-I cycle drawn as a ring, with the catalysis made explicit.
 *
 * The ring is a visual device — nothing travels in a circle — but it is the
 * right device, because the fact worth carrying away is that the carbon you
 * start with is the carbon you end with. The star is not burning carbon. It is
 * using carbon to burn hydrogen, and one carbon nucleus can do this millions of
 * times.
 */

interface Step {
  readonly from: string;
  readonly to: string;
  readonly kind: 'capture' | 'decay';
  readonly label: string;
  /** MeV released, including the positron annihilation where there is one. */
  readonly energy: number;
  readonly detail: string;
}

const STEPS: readonly Step[] = [
  {
    from: '¹²C',
    to: '¹³N',
    kind: 'capture',
    label: '¹²C + p → ¹³N + γ',
    energy: 1.94,
    detail:
      'A carbon nucleus captures a proton. This is the slow step at solar temperatures — the whole cycle waits on it.',
  },
  {
    from: '¹³N',
    to: '¹³C',
    kind: 'decay',
    label: '¹³N → ¹³C + e⁺ + ν',
    energy: 2.22,
    detail:
      'Nitrogen-13 is unstable, with a half-life of just under ten minutes. It emits a positron and a neutrino. The positron meets an electron and annihilates, adding its rest energy to the star’s heat; the neutrino leaves and is never seen again — except that Borexino saw them, in 2020.',
  },
  {
    from: '¹³C',
    to: '¹⁴N',
    kind: 'capture',
    label: '¹³C + p → ¹⁴N + γ',
    energy: 7.55,
    detail: 'Another proton captured, and the largest single energy release in the cycle.',
  },
  {
    from: '¹⁴N',
    to: '¹⁵O',
    kind: 'capture',
    label: '¹⁴N + p → ¹⁵O + γ',
    energy: 7.3,
    detail:
      'The slowest reaction in the cycle at every temperature, which is why nitrogen piles up: material spends most of its time waiting here. That is a large part of why the CNO cycle makes nitrogen out of the carbon and oxygen it was given.',
  },
  {
    from: '¹⁵O',
    to: '¹⁵N',
    kind: 'decay',
    label: '¹⁵O → ¹⁵N + e⁺ + ν',
    energy: 2.75,
    detail: 'Oxygen-15 decays in about two minutes, again emitting a positron and a neutrino.',
  },
  {
    from: '¹⁵N',
    to: '¹²C',
    kind: 'capture',
    label: '¹⁵N + p → ¹²C + ⁴He',
    energy: 4.97,
    detail:
      'The last proton splits the nucleus: out comes a helium-4 — the point of the whole exercise — and the original carbon-12, unchanged. The cycle can start again with the same nucleus.',
  },
];

const TOTAL = STEPS.reduce((sum, step) => sum + step.energy, 0);

const W = 380;
const H = 236;
const CX = 190;
const CY = 116;
const R = 74;

const nodeAngle = (i: number): number => (i / 6) * Math.PI * 2 - Math.PI / 2;
const nodeX = (i: number): number => CX + Math.cos(nodeAngle(i)) * R;
const nodeY = (i: number): number => CY + Math.sin(nodeAngle(i)) * R;

export default function CnoCycle(_props: VisualizationProps): ReactNode {
  const [step, setStep] = useState(0);
  const current = STEPS[step] ?? STEPS[0]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={10} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          the CNO-I cycle — the ring is a diagram, not a path anything travels
        </text>

        {STEPS.map((entry, i) => {
          const a1 = nodeAngle(i) + 0.34;
          const a2 = nodeAngle((i + 1) % 6) - 0.34;
          const isCurrent = i === step;
          return (
            <path
              key={entry.label}
              d={`M${CX + Math.cos(a1) * R},${CY + Math.sin(a1) * R} A${R},${R} 0 0 1 ${CX + Math.cos(a2) * R},${CY + Math.sin(a2) * R}`}
              fill="none"
              stroke={isCurrent ? '#4fe0c0' : 'rgba(148,162,192,0.35)'}
              strokeWidth={isCurrent ? 2.6 : 1.4}
              markerEnd=""
            />
          );
        })}

        {STEPS.map((entry, i) => {
          const isActive = i === step || (i + 1) % 6 === step;
          const isCarbon = entry.from === '¹²C';
          return (
            <g key={entry.from} onClick={() => setStep(i)} style={{ cursor: 'pointer' }}>
              <circle
                cx={nodeX(i)}
                cy={nodeY(i)}
                r={17}
                fill={isCarbon ? 'rgba(255,210,127,0.24)' : 'rgba(143,184,255,0.18)'}
                stroke={isActive ? '#4fe0c0' : isCarbon ? '#ffd27f' : 'rgba(143,184,255,0.6)'}
                strokeWidth={isActive ? 2 : 1.1}
              />
              <text
                x={nodeX(i)}
                y={nodeY(i) + 4}
                textAnchor="middle"
                fontSize={11}
                fill={isCarbon ? '#ffd27f' : '#e2e9f6'}
              >
                {entry.from}
              </text>
            </g>
          );
        })}

        <text x={CX} y={CY - 8} textAnchor="middle" fontSize={9.5} fill="rgba(226,233,246,0.9)">
          net: 4 p → ⁴He
        </text>
        <text x={CX} y={CY + 6} textAnchor="middle" fontSize={8.5} fill="rgba(148,162,192,0.9)">
          {TOTAL.toFixed(2)} MeV per cycle
        </text>
        <text x={CX} y={CY + 20} textAnchor="middle" fontSize={8.5} fill="#ffd27f">
          carbon returned unchanged
        </text>

        <text
          x={CX}
          y={H - 26}
          textAnchor="middle"
          fontSize={10.5}
          fill="#4fe0c0"
          fontFamily="ui-monospace, monospace"
        >
          {current.label}
        </text>
        <text x={CX} y={H - 12} textAnchor="middle" fontSize={9} fill="rgba(148,162,192,0.9)">
          step {step + 1} of 6 · {current.energy.toFixed(2)} MeV ·{' '}
          {current.kind === 'capture' ? 'proton capture' : 'beta-plus decay'}
        </text>
      </svg>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={() => setStep((value) => (value + 5) % 6)}
        >
          Back
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setStep((value) => (value + 1) % 6)}
        >
          Next step
        </button>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{current.label}</strong> — {current.detail} The carbon, nitrogen and oxygen are
        catalysts: they make the reaction possible without being consumed, so a star can run this
        cycle only if a previous generation of stars already made some carbon for it. The very first
        stars had none, and could not.
      </p>
    </div>
  );
}
