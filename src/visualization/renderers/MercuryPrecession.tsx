import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Perihelion precession, with the exaggeration handed to the reader.
 *
 * Newtonian two-body gravity gives a closed ellipse: the orbit retraces itself
 * exactly, for ever. Mercury's does not — it turns by an extra 42.98 arcseconds
 * per century, which is 0.00003 degrees per orbit and completely invisible on
 * any honest drawing.
 *
 * Rather than draw a lie, the figure starts at zero and makes the exaggeration
 * a control with its own readout, so a reader can see both the qualitative
 * behaviour and how absurdly far the drawing is from the real rate.
 */

/** Mercury's real orbital eccentricity. Everything else here is not to scale. */
const ECCENTRICITY = 0.206;
const ORBITS = 26;
const REAL_ARCSEC_PER_CENTURY = 42.98;
const ORBITS_PER_CENTURY = 100 / 0.2408; // Mercury's year is 0.2408 Earth years
const REAL_DEGREES_PER_ORBIT = REAL_ARCSEC_PER_CENTURY / ORBITS_PER_CENTURY / 3600;

const W = 380;
const H = 300;
const CX = W / 2;
const CY = 150;
const SCALE = 118 / (1 + ECCENTRICITY);

/** One ellipse with the star at a focus, rotated by `rotation` radians. */
function orbitPath(rotation: number): string {
  const points: string[] = [];
  const semiLatus = 1 - ECCENTRICITY * ECCENTRICITY;
  for (let step = 0; step <= 90; step += 1) {
    const theta = (step / 90) * Math.PI * 2;
    const r = semiLatus / (1 + ECCENTRICITY * Math.cos(theta));
    const angle = theta + rotation;
    const px = CX + r * Math.cos(angle) * SCALE;
    const py = CY + r * Math.sin(angle) * SCALE;
    points.push(`${step === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`);
  }
  return `${points.join(' ')} Z`;
}

/** Perihelion sits at θ = 0 in the formula above. */
function perihelion(rotation: number): [number, number] {
  const r = (1 - ECCENTRICITY * ECCENTRICITY) / (1 + ECCENTRICITY);
  return [CX + r * Math.cos(rotation) * SCALE, CY + r * Math.sin(rotation) * SCALE];
}

export default function MercuryPrecession(_props: VisualizationProps): ReactNode {
  const [degreesPerOrbit, setDegreesPerOrbit] = useState(6);

  const exaggeration = degreesPerOrbit / REAL_DEGREES_PER_ORBIT;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {Array.from({ length: ORBITS }, (_, index) => {
          const rotation = (index * degreesPerOrbit * Math.PI) / 180;
          const last = index === ORBITS - 1;
          return (
            <path
              key={index}
              d={orbitPath(rotation)}
              fill="none"
              stroke={last ? '#ffd76e' : 'rgba(143,184,255,0.5)'}
              strokeWidth={last ? 1.8 : 0.9}
              opacity={last ? 1 : 0.25 + (index / ORBITS) * 0.5}
            />
          );
        })}

        {Array.from({ length: ORBITS }, (_, index) => {
          const rotation = (index * degreesPerOrbit * Math.PI) / 180;
          const [px, py] = perihelion(rotation);
          return (
            <circle
              key={index}
              cx={px}
              cy={py}
              r={index === ORBITS - 1 ? 3.4 : 1.8}
              fill={index === ORBITS - 1 ? '#ffd76e' : 'rgba(255,214,110,0.55)'}
            />
          );
        })}

        <circle cx={CX} cy={CY} r={9} fill="#ffd76e" />
        <circle cx={CX} cy={CY} r={17} fill="none" stroke="rgba(255,214,110,0.25)" />

        <text
          x={10}
          y={16}
          fontSize={10}
          fill="rgba(226,233,246,0.92)"
          fontFamily="system-ui, sans-serif"
        >
          {degreesPerOrbit === 0
            ? 'Newtonian two-body gravity: the orbit closes exactly.'
            : `${ORBITS} successive orbits. Dots mark each closest approach.`}
        </text>
        <text
          x={10}
          y={H - 8}
          fontSize={9.5}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          Eccentricity 0.206 is Mercury’s real value. Nothing else here is to scale.
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Exaggerate</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Drawn precession, degrees per orbit</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={20}
              step={0.5}
              value={degreesPerOrbit}
              onChange={(event) => setDegreesPerOrbit(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{degreesPerOrbit.toFixed(1)}°</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        {degreesPerOrbit === 0 ? (
          <>
            <strong>Zero precession.</strong> This is what Newtonian gravity predicts for two
            bodies: a perfectly closed ellipse, retraced for ever. Mercury does not do this.
          </>
        ) : (
          <>
            Drawn at <strong>{degreesPerOrbit.toFixed(1)}° per orbit</strong>. The real excess is{' '}
            {(REAL_DEGREES_PER_ORBIT * 1e5).toFixed(1)} × 10⁻⁵° per orbit — about 42.98 arcseconds
            per century — so this drawing exaggerates it by a factor of roughly{' '}
            <strong>{Math.round(exaggeration).toLocaleString()}</strong>. At the true rate,
            Mercury’s orbit takes about three million years to make one extra turn.
          </>
        )}
      </p>
    </div>
  );
}
