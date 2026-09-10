import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * One spectral line, five independent things imprinted on it.
 *
 * The reason a spectrum is worth so much more than a photograph is that the
 * effects are separable. Motion shifts the line without changing its shape.
 * Rotation broadens it into a distinctive flat-topped profile. Pressure
 * broadens the wings far more than the core. A magnetic field splits it into
 * components. Each has its own signature, so one measurement yields six
 * numbers instead of one.
 *
 * Each effect here uses the correct functional form. The profile is synthetic:
 * a real predicted line needs a model atmosphere, and this is not one.
 */

const W = 380;
const H = 200;
const LEFT = 22;
const RIGHT = 14;
const TOP = 24;
const BOTTOM = 34;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

/** Offset from line centre, in arbitrary units of Doppler width. */
const X_SPAN = 8;
const px = (x: number): number => LEFT + ((x + X_SPAN) / (2 * X_SPAN)) * PLOT_W;
const py = (depth: number): number => TOP + depth * PLOT_H;

export default function SpectrumDecoder(_props: VisualizationProps): ReactNode {
  const [shift, setShift] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [pressure, setPressure] = useState(0.2);
  const [magnetic, setMagnetic] = useState(0);
  const [depth, setDepth] = useState(0.7);
  const [explain, setExplain] = useState('shift');

  /**
   * A Voigt-like profile: a Gaussian core of thermal width, plus Lorentzian
   * wings whose strength is set by pressure, rotationally broadened by
   * convolution with a flat-topped rotation kernel, and Zeeman-split into three
   * components separated in proportion to the field.
   */
  const profile = (x: number): number => {
    const components: readonly number[] =
      magnetic > 0.02 ? [-magnetic * 2.4, 0, magnetic * 2.4] : [0];
    let total = 0;
    for (const c of components) {
      const u = x - shift * 3 - c;
      // Rotation: average the core over a flat-topped velocity distribution.
      const samples = rotation > 0.05 ? 15 : 1;
      let acc = 0;
      for (let i = 0; i < samples; i += 1) {
        const frac = samples === 1 ? 0 : (i / (samples - 1)) * 2 - 1;
        const offset = rotation * 4 * frac;
        // A rotating disk weights the limb more than the centre.
        const weight = samples === 1 ? 1 : Math.sqrt(Math.max(0, 1 - frac * frac));
        const v = u - offset;
        const gaussian = Math.exp(-(v * v));
        const lorentz = pressure / (1 + (v / 1.6) ** 2);
        acc += weight * (gaussian + lorentz * 0.55);
      }
      const norm = samples === 1 ? 1 : (Math.PI / 2) * ((samples - 1) / samples) * 1.05;
      total += acc / Math.max(1, norm * samples * 0.5);
    }
    return Math.min(1, (total / components.length) * depth * (components.length > 1 ? 1.6 : 1));
  };

  const path = Array.from({ length: 180 }, (_, i) => {
    const x = -X_SPAN + (i / 179) * 2 * X_SPAN;
    return `${i === 0 ? 'M' : 'L'}${px(x).toFixed(1)},${py(profile(x)).toFixed(1)}`;
  }).join(' ');

  const EXPLANATIONS: Record<string, string> = {
    shift:
      'A shift of the whole line, with no change of shape, means the source is moving toward or away from us. This is how radial velocities, binary orbits and exoplanet detections are all measured. The line’s shape carries no information about the motion — only its position does.',
    rotation:
      'A rotating star has one limb approaching and the other receding, so every line is smeared across a range of velocities. The profile is characteristically flat-topped with steep edges, quite unlike thermal broadening, which is why rotation can be separated from temperature. It gives v·sin i — the rotation speed times the sine of the unknown inclination.',
    pressure:
      'Collisions interrupt the emitting atom, which broadens the line into wide Lorentzian wings while barely touching the core. Pressure at the photosphere depends on surface gravity, so wing width measures gravity — and gravity plus temperature separates a giant from a dwarf of the same colour. This is how luminosity class is determined.',
    magnetic:
      'A magnetic field splits the atomic energy levels, so a single line becomes several with separations proportional to the field strength. Zeeman splitting is how the field of a sunspot was first measured, in 1908, and how stellar magnetic fields are measured today.',
    depth:
      'The depth of a line relative to its neighbours depends on how many atoms are in the right state to absorb, which depends on temperature and on abundance. Untangling those two is the hard part — the mistake that hid the composition of stars until 1925.',
  };

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={LEFT} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          one absorption line, five independent physical effects
        </text>

        <line
          x1={LEFT}
          x2={LEFT + PLOT_W}
          y1={TOP}
          y2={TOP}
          stroke="rgba(148,162,192,0.4)"
          strokeDasharray="3 3"
        />
        <text
          x={LEFT + PLOT_W}
          y={TOP - 4}
          textAnchor="end"
          fontSize={8}
          fill="rgba(148,162,192,0.8)"
        >
          continuum
        </text>
        <line x1={px(0)} x2={px(0)} y1={TOP} y2={TOP + PLOT_H} stroke="rgba(148,162,192,0.25)" />
        <text
          x={px(0)}
          y={TOP + PLOT_H + 12}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(148,162,192,0.8)"
        >
          rest wavelength
        </text>

        <path d={path} fill="none" stroke="#8fb8ff" strokeWidth={2} />
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 26}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          wavelength →
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Motion</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Radial velocity of the source</span>
            <input
              className={styles.slider}
              type="range"
              min={-1}
              max={1}
              step={0.02}
              value={shift}
              onChange={(e) => {
                setShift(Number(e.target.value));
                setExplain('shift');
              }}
            />
          </label>
          <output className={styles.value}>{(shift * 60).toFixed(0)} km/s</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Rotation</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Projected rotation speed</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={rotation}
              onChange={(e) => {
                setRotation(Number(e.target.value));
                setExplain('rotation');
              }}
            />
          </label>
          <output className={styles.value}>{(rotation * 250).toFixed(0)} km/s</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Gravity</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Surface gravity, which sets the pressure broadening
            </span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={pressure}
              onChange={(e) => {
                setPressure(Number(e.target.value));
                setExplain('pressure');
              }}
            />
          </label>
          <output className={styles.value}>log g {(1.5 + pressure * 3.5).toFixed(1)}</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Magnetic</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Magnetic field strength</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={magnetic}
              onChange={(e) => {
                setMagnetic(Number(e.target.value));
                setExplain('magnetic');
              }}
            />
          </label>
          <output className={styles.value}>{(magnetic * 4).toFixed(1)} kG</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Depth</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Line depth, set by temperature and abundance</span>
            <input
              className={styles.slider}
              type="range"
              min={0.15}
              max={0.95}
              step={0.02}
              value={depth}
              onChange={(e) => {
                setDepth(Number(e.target.value));
                setExplain('depth');
              }}
            />
          </label>
          <output className={styles.value}>{(depth * 100).toFixed(0)}%</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        {EXPLANATIONS[explain]}
      </p>
    </div>
  );
}
