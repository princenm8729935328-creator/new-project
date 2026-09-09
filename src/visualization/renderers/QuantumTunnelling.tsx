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
/** The frame spans this many nanometres of space, and this many eV of energy. */
const SPAN_NM = 3;
const SPAN_EV = 13;
const xOf = (nm: number): number => PLOT_L + ((nm + SPAN_NM / 2) / SPAN_NM) * (PLOT_R - PLOT_L);
/** Energy axis, so "not enough energy to climb" is something you can see. */
const yOf = (ev: number): number => PLOT_B - (ev / SPAN_EV) * (PLOT_B - PLOT_T);

export default function QuantumTunnelling(_props: VisualizationProps): ReactNode {
  const [energy, setEnergy] = useState(3);
  const [barrier, setBarrier] = useState(6);
  const [width, setWidth] = useState(0.5);

  const { transmission, over } = transmit(energy, barrier, width);
  const amplitude = Math.sqrt(Math.max(transmission, 0));
  const kOut = K_PER_NM * Math.sqrt(Math.max(energy, 1e-6));
  const kappa = K_PER_NM * Math.sqrt(Math.max(barrier - energy, 0));

  const half = width / 2;
  const scale = 16;
  /** The wave rides on the electron's own energy level. */
  const mid = yOf(energy);
  /** Slowed from the true wavenumber so the curve is sampled, not aliased. */
  const drawK = kOut * 2;

  /**
   * The transmitted wave is often thousands of times smaller than the incident
   * one, which is the physics and is also invisible. So it is drawn twice: once
   * at true relative amplitude, and once magnified by a factor the figure states.
   */
  const magnification = amplitude > 0 ? Math.min(1e6, Math.max(1, 0.75 / amplitude)) : 1;

  /** Left of the barrier: incident plus reflected, so a standing pattern. */
  const left = Array.from({ length: 140 }, (_, index) => {
    const nm = -SPAN_NM / 2 + ((-half + SPAN_NM / 2) * index) / 139;
    const value = Math.cos(drawK * nm) * (1 - 0.45 * amplitude) + 0.15 * Math.sin(drawK * nm);
    return `${index === 0 ? 'M' : 'L'}${xOf(nm).toFixed(2)},${(mid - value * scale).toFixed(2)}`;
  }).join(' ');

  /** Inside: no oscillation at all, just exponential decay. */
  const inside = Array.from({ length: 60 }, (_, index) => {
    const nm = -half + (width * index) / 59;
    const decay = Math.exp(-kappa * (nm + half));
    const value = (1 - 0.45 * amplitude) * (over ? Math.cos(drawK * nm) : decay);
    return `${index === 0 ? 'M' : 'L'}${xOf(nm).toFixed(2)},${(mid - value * scale).toFixed(2)}`;
  }).join(' ');

  /** Right of the barrier: the original wavelength, a smaller amplitude. */
  const rightAt = (gain: number): string =>
    Array.from({ length: 140 }, (_, index) => {
      const nm = half + ((SPAN_NM / 2 - half) * index) / 139;
      const value = amplitude * gain * Math.cos(drawK * (nm - half));
      return `${index === 0 ? 'M' : 'L'}${xOf(nm).toFixed(2)},${(mid - value * scale).toFixed(2)}`;
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
          y={yOf(barrier)}
          width={xOf(half) - xOf(-half)}
          height={PLOT_B - yOf(barrier)}
          fill="rgba(255,143,110,0.16)"
          stroke="rgba(255,143,110,0.55)"
        />
        <text
          x={(xOf(-half) + xOf(half)) / 2}
          y={yOf(barrier) - 5}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(255,143,110,0.95)"
        >
          barrier {barrier.toFixed(1)} eV
        </text>

        {/* The electron's energy level, drawn across the frame: below the top of
            the barrier, this is the height it cannot classically reach. */}
        <line
          x1={PLOT_L}
          x2={PLOT_R}
          y1={mid}
          y2={mid}
          stroke="rgba(148,162,192,0.3)"
          strokeDasharray="4 3"
        />
        <text x={PLOT_L + 2} y={mid - 22} fontSize={7.5} fill="rgba(148,162,192,0.85)">
          electron energy {energy.toFixed(1)} eV
        </text>

        <path d={left} fill="none" stroke="#66e0d4" strokeWidth={1.8} />
        <path d={inside} fill="none" stroke="#ffd66e" strokeWidth={1.8} strokeDasharray="3 2" />
        <path d={rightAt(1)} fill="none" stroke="#a97bff" strokeWidth={1.8} />
        {magnification > 1.5 && (
          <>
            <path
              d={rightAt(magnification)}
              fill="none"
              stroke="rgba(169,123,255,0.45)"
              strokeWidth={1.2}
              strokeDasharray="3 3"
            />
            <text
              x={PLOT_R - 2}
              y={mid - 26}
              textAnchor="end"
              fontSize={7.5}
              fill="rgba(169,123,255,0.9)"
            >
              dashed: transmitted wave magnified ×
              {magnification > 999 ? magnification.toExponential(0) : magnification.toFixed(0)}
            </text>
          </>
        )}

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
