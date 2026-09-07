import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The characteristic radii, computed rather than sketched.
 *
 * Everything drawn here comes from the Kerr solution evaluated at the chosen
 * spin, in units of the gravitational radius GM/c², so the figure is valid for
 * a black hole of any mass and the way the radii move as spin rises is the real
 * result. The single most striking of those movements — the innermost stable
 * circular orbit falling from 6 r_g to 1 r_g — is the reason spin matters for
 * accretion efficiency, and it is worth being able to watch.
 *
 * The interior of the horizon is deliberately blank. General relativity does
 * not describe it reliably, so drawing anything there would be an invention.
 */

const W = 380;
const H = 384;
const CX = W / 2;
const CY = 152;
/** Pixels per gravitational radius; 6.4 r_g fills the frame. */
const SCALE = 20;

/** Outer horizon of the Kerr solution, in gravitational radii. */
const horizon = (a: number): number => 1 + Math.sqrt(Math.max(0, 1 - a * a));

/** Prograde equatorial photon orbit. */
const photonSphere = (a: number): number => 2 * (1 + Math.cos((2 / 3) * Math.acos(-a)));

/** Prograde innermost stable circular orbit. */
function isco(a: number): number {
  const z1 = 1 + Math.cbrt(1 - a * a) * (Math.cbrt(1 + a) + Math.cbrt(1 - a));
  const z2 = Math.sqrt(3 * a * a + z1 * z1);
  return 3 + z2 - Math.sqrt((3 - z1) * (3 + z1 + 2 * z2));
}

/** Static limit at polar angle θ; the ergosphere's outer boundary. */
const staticLimit = (a: number, theta: number): number =>
  1 + Math.sqrt(Math.max(0, 1 - a * a * Math.cos(theta) ** 2));

/** Ergosphere outline as an SVG path, sampled in θ. */
function ergospherePath(a: number): string {
  const points: string[] = [];
  for (let i = 0; i <= 72; i += 1) {
    const theta = (i / 72) * Math.PI * 2;
    const r = staticLimit(a, theta) * SCALE;
    // θ measured from the rotation axis, which points up the screen.
    const x = CX + r * Math.sin(theta);
    const y = CY - r * Math.cos(theta);
    points.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `${points.join(' ')} Z`;
}

interface RingProps {
  readonly radius: number;
  readonly colour: string;
  readonly dashed?: boolean;
}

function Ring({ radius, colour, dashed }: RingProps): ReactNode {
  return (
    <circle
      cx={CX}
      cy={CY}
      r={radius * SCALE}
      fill="none"
      stroke={colour}
      strokeWidth={1.4}
      strokeDasharray={dashed ? '4 4' : undefined}
    />
  );
}

export default function BlackHoleAnatomy(_props: VisualizationProps): ReactNode {
  const [spin, setSpin] = useState(0);

  const rH = horizon(spin);
  const rPh = photonSphere(spin);
  const rIsco = isco(spin);

  const rows: readonly { label: string; value: number; colour: string }[] = [
    { label: 'Innermost stable orbit', value: rIsco, colour: '#66e0d4' },
    { label: 'Photon sphere', value: rPh, colour: '#ffd66e' },
    { label: 'Event horizon', value: rH, colour: '#ff8f6e' },
  ];

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
          Radii in gravitational radii, GM/c². Valid for any mass.
        </text>

        {/* Ergosphere, filled faintly so the oblate shape reads. */}
        {spin > 0.02 && (
          <path
            d={ergospherePath(spin)}
            fill="rgba(169,123,255,0.10)"
            stroke="rgba(169,123,255,0.55)"
            strokeWidth={1.2}
          />
        )}

        <Ring radius={rIsco} colour="#66e0d4" dashed />
        <Ring radius={rPh} colour="#ffd66e" dashed />

        {/* The horizon, and nothing inside it. */}
        <circle cx={CX} cy={CY} r={rH * SCALE} fill="#05070d" stroke="#ff8f6e" strokeWidth={1.6} />
        <text
          x={CX}
          y={CY + 3}
          textAnchor="middle"
          fontSize={7.5}
          fill="rgba(148,162,192,0.55)"
          fontFamily="system-ui, sans-serif"
        >
          not described
        </text>

        {/* Rotation axis, so the ergosphere's flattening is legible. */}
        {spin > 0.02 && (
          <line
            x1={CX}
            x2={CX}
            y1={CY - 6.6 * SCALE}
            y2={CY + 6.6 * SCALE}
            stroke="rgba(169,123,255,0.25)"
            strokeDasharray="2 5"
          />
        )}

        {/* Labelled leader lines out to the right. */}
        {rows.map((row, index) => {
          const y = CY - 58 + index * 20;
          return (
            <g key={row.label}>
              <line
                x1={CX + row.value * SCALE}
                x2={CX + 118}
                y1={CY}
                y2={y}
                stroke={row.colour}
                strokeWidth={0.8}
                opacity={0.45}
              />
              <text
                x={CX + 122}
                y={y + 3}
                fontSize={8.5}
                fill={row.colour}
                fontFamily="ui-monospace, monospace"
              >
                {row.value.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* Legend. */}
        {rows.map((row, index) => (
          <g key={`legend-${row.label}`}>
            <circle cx={16} cy={H - 62 + index * 16} r={3.5} fill={row.colour} />
            <text
              x={26}
              y={H - 59 + index * 16}
              fontSize={9}
              fill="rgba(226,233,246,0.9)"
              fontFamily="system-ui, sans-serif"
            >
              {row.label} — {row.value.toFixed(2)} r_g
            </text>
          </g>
        ))}
        {spin > 0.02 && (
          <>
            <circle cx={16} cy={H - 14} r={3.5} fill="rgba(169,123,255,0.7)" />
            <text
              x={26}
              y={H - 11}
              fontSize={9}
              fill="rgba(226,233,246,0.9)"
              fontFamily="system-ui, sans-serif"
            >
              Ergosphere — 2.00 r_g at the equator, {horizon(spin).toFixed(2)} at the poles
            </text>
          </>
        )}
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Spin</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Dimensionless spin parameter</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={0.998}
              step={0.002}
              value={spin}
              onChange={(event) => setSpin(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>a* = {spin.toFixed(3)}</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={() => setSpin(0)}>
          Schwarzschild
        </button>
        <button type="button" className={styles.toggle} onClick={() => setSpin(0.998)}>
          Near-maximal spin
        </button>
      </div>
      <p className={styles.readout}>
        The innermost stable orbit falls from 6.00 r_g at zero spin to about 1.24 r_g near the
        maximum, which is why a rapidly spinning black hole converts far more of what it swallows
        into light.
      </p>
    </div>
  );
}
