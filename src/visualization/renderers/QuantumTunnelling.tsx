import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Transmission through a rectangular barrier, from the exact expression.
 *
 * Not the WKB approximation and not a sketch: the closed-form result for the
 * square barrier, so the numbers in the readout can be checked against a
 * textbook. Two features are worth watching for.
 *
 * Below the barrier top the transmission is exponentially sensitive to width.
 * Adding one atomic diameter to the gap costs about an order of magnitude,
 * which is precisely what makes a scanning tunnelling microscope able to resolve
 * single atoms: the current is a far sharper probe of height than any mechanical
 * measurement could be.
 *
 * Above the barrier top, transmission is not 1 — it oscillates, with perfect
 * transmission only at resonances. A classical particle would sail over every
 * time. This is a wave phenomenon in both directions.
 */

/** κ or k in nm⁻¹ for an electron and an energy difference in eV. */
const K_PER_NM = 5.1226;

interface Result {
  readonly transmission: number;
  readonly over: boolean;
}

function transmit(energyEv: number, barrierEv: number, widthNm: number): Result {
  if (energyEv <= 0) return { transmission: 0, over: false };
  if (Math.abs(energyEv - barrierEv) < 1e-9) {
    // The degenerate case: T = 1 / (1 + m V a² / 2ħ²), written in these units.
    const t = 1 / (1 + ((K_PER_NM * widthNm) ** 2 * barrierEv) / 4 / Math.max(barrierEv, 1e-9));
    return { transmission: t, over: false };
  }
  if (energyEv < barrierEv) {
    const kappa = K_PER_NM * Math.sqrt(barrierEv - energyEv);
    const arg = kappa * widthNm;
    // sinh overflows for thick barriers; fall through to the exponential limit.
    if (arg > 350) return { transmission: 0, over: false };
    const sinh = Math.sinh(arg);
    const t = 1 / (1 + (barrierEv ** 2 * sinh * sinh) / (4 * energyEv * (barrierEv - energyEv)));
    return { transmission: t, over: false };
  }
  const k = K_PER_NM * Math.sqrt(energyEv - barrierEv);
  const s = Math.sin(k * widthNm);
  const t = 1 / (1 + (barrierEv ** 2 * s * s) / (4 * energyEv * (energyEv - barrierEv)));
  return { transmission: t, over: true };
}

const W = 380;
const H = 300;
const PLOT_L = 16;
const PLOT_R = W - 16;
const PLOT_T = 40;
const PLOT_B = H - 82;
const MID = (PLOT_T + PLOT_B) / 2;

/** The frame spans this many nanometres of space. */
const SPAN_NM = 3;
const xOf = (nm: number): number => PLOT_L + ((nm + SPAN_NM / 2) / SPAN_NM) * (PLOT_R - PLOT_L);

export default function QuantumTunnelling(_props: VisualizationProps): ReactNode {
  const [energy, setEnergy] = useState(3);
  const [barrier, setBarrier] = useState(6);
  const [width, setWidth] = useState(0.5);

  const { transmission, over } = transmit(energy, barrier, width);
  const amplitude = Math.sqrt(Math.max(transmission, 0));
  const kOut = K_PER_NM * Math.sqrt(Math.max(energy, 1e-6));
  const kappa = K_PER_NM * Math.sqrt(Math.max(barrier - energy, 0));

  const half = width / 2;
  const scale = 26;

  /** Left of the barrier: incident plus reflected, so a standing pattern. */
  const left = Array.from({ length: 90 }, (_, index) => {
    const nm = -SPAN_NM / 2 + ((-half + SPAN_NM / 2) * index) / 89;
    const value = Math.cos(kOut * nm * 6) * (1 - 0.45 * amplitude) + 0.15 * Math.sin(kOut * nm * 6);
    return `${index === 0 ? 'M' : 'L'}${xOf(nm).toFixed(2)},${(MID - value * scale).toFixed(2)}`;
  }).join(' ');

  /** Inside: no oscillation at all, just exponential decay. */
  const inside = Array.from({ length: 50 }, (_, index) => {
    const nm = -half + (width * index) / 49;
    const decay = Math.exp(-kappa * (nm + half));
    const value = (1 - 0.45 * amplitude) * (over ? Math.cos(kOut * nm * 6) : decay);
    return `${index === 0 ? 'M' : 'L'}${xOf(nm).toFixed(2)},${(MID - value * scale).toFixed(2)}`;
  }).join(' ');

  /** Right of the barrier: the original wavelength, a smaller amplitude. */
  const right = Array.from({ length: 90 }, (_, index) => {
    const nm = half + ((SPAN_NM / 2 - half) * index) / 89;
    const value = amplitude * Math.cos(kOut * (nm - half) * 6);
    return `${index === 0 ? 'M' : 'L'}${xOf(nm).toFixed(2)},${(MID - value * scale).toFixed(2)}`;
  }).join(' ');

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
          An electron wave meeting a barrier it has not enough energy to climb
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          exact square-barrier transmission, not an approximation
        </text>

        {/* The barrier itself, height drawn against the particle energy. */}
        <rect
          x={xOf(-half)}
          y={PLOT_T}
          width={xOf(half) - xOf(-half)}
          height={PLOT_B - PLOT_T}
          fill="rgba(255,143,110,0.14)"
          stroke="rgba(255,143,110,0.5)"
        />
        <text
          x={(xOf(-half) + xOf(half)) / 2}
          y={PLOT_T - 6}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(255,143,110,0.95)"
        >
          barrier {barrier.toFixed(1)} eV
        </text>

        <line x1={PLOT_L} x2={PLOT_R} y1={MID} y2={MID} stroke="rgba(148,162,192,0.2)" />
        <path d={left} fill="none" stroke="#66e0d4" strokeWidth={1.8} />
        <path d={inside} fill="none" stroke="#ffd66e" strokeWidth={1.8} strokeDasharray="3 2" />
        <path d={right} fill="none" stroke="#a97bff" strokeWidth={1.8} />

        <text x={PLOT_L + 4} y={PLOT_B + 14} fontSize={7.5} fill="#66e0d4">
          incoming + reflected
        </text>
        <text
          x={(xOf(-half) + xOf(half)) / 2}
          y={PLOT_B + 26}
          textAnchor="middle"
          fontSize={7.5}
          fill="#ffd66e"
        >
          {over ? 'over the top' : 'decaying, not oscillating'}
        </text>
        <text x={PLOT_R - 4} y={PLOT_B + 14} textAnchor="end" fontSize={7.5} fill="#a97bff">
          transmitted
        </text>
        <text x={PLOT_L + 4} y={PLOT_B + 26} fontSize={7.5} fill="rgba(148,162,192,0.75)">
          electron energy {energy.toFixed(1)} eV
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Energy</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Electron energy, electronvolts</span>
            <input
              className={styles.slider}
              type="range"
              min={0.2}
              max={10}
              step={0.1}
              value={energy}
              onChange={(event) => setEnergy(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{energy.toFixed(1)} eV</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Barrier</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Barrier height, electronvolts</span>
            <input
              className={styles.slider}
              type="range"
              min={0.5}
              max={12}
              step={0.1}
              value={barrier}
              onChange={(event) => setBarrier(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{barrier.toFixed(1)} eV</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Width</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Barrier width, nanometres</span>
            <input
              className={styles.slider}
              type="range"
              min={0.1}
              max={2}
              step={0.02}
              value={width}
              onChange={(event) => setWidth(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{width.toFixed(2)} nm</output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        Transmission probability{' '}
        <strong>
          {transmission > 1e-4 ? transmission.toFixed(5) : transmission.toExponential(2)}
        </strong>
        .{' '}
        {over ? (
          <>
            The electron now has more energy than the barrier, and even so transmission is not
            certain: it oscillates with width, reaching exactly 1 only at resonances. Reflection
            from a step is a wave phenomenon, and it does not switch off just because the particle
            could climb over.
          </>
        ) : (
          <>
            Classically this is <strong>exactly zero</strong> — the electron has {energy.toFixed(1)}{' '}
            eV and the wall is {barrier.toFixed(1)} eV, so there is no way through. Widen the
            barrier by a tenth of a nanometre, about one atomic diameter, and watch the probability
            fall by roughly an order of magnitude. That exponential sensitivity is what a scanning
            tunnelling microscope measures, and it is why the instrument can resolve single atoms on
            a surface.
          </>
        )}
      </p>
    </div>
  );
}
