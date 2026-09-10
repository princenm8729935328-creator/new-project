import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * A cross-section drawn to scale, because the usual textbook version is not.
 *
 * Diagrams almost always exaggerate the crust so it can be labelled. Here the
 * radii are proportional, which makes the actual point: the crust is a film,
 * and everything a person has ever done has happened on it.
 */

interface Layer {
  readonly name: string;
  readonly outer: number; // km from centre
  readonly colour: string;
  readonly state: string;
  readonly temp: string;
  readonly how: string;
}

const R = 6371;

const LAYERS: readonly Layer[] = [
  {
    name: 'Inner core',
    outer: 1220,
    colour: '#ffe9b0',
    state: 'solid iron–nickel',
    temp: '≈ 5400 K',
    how: 'Inge Lehmann found it in 1936 from seismic waves arriving in a shadow zone where none should have been. Solid despite being hotter than the outer core, because pressure raises the melting point faster than temperature rises.',
  },
  {
    name: 'Outer core',
    outer: 3480,
    colour: '#ff9a5c',
    state: 'liquid iron–nickel',
    temp: '4000–5400 K',
    how: 'Identified because shear waves stop dead at its boundary, and shear waves cannot travel through liquid. Its convection generates Earth’s magnetic field.',
  },
  {
    name: 'Mantle',
    outer: 6371 - 30,
    colour: '#c07d55',
    state: 'solid silicate rock, slowly flowing',
    temp: '1000–4000 K',
    how: 'Mapped by seismic tomography, which uses thousands of earthquake arrival times to build a three-dimensional velocity model. Solid rock, but it creeps at centimetres a year — fast enough to move continents.',
  },
  {
    name: 'Crust',
    outer: 6371,
    colour: '#7fd6b6',
    state: 'solid, brittle',
    temp: '290–1200 K',
    how: 'Between 5 km under the oceans and about 70 km under mountain ranges. On this drawing it is thinner than the stroke width of the outline.',
  },
];

export default function EarthInterior(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const layer = LAYERS[Math.min(pick, LAYERS.length - 1)];
  const CX = 108;
  const CY = 108;
  const SCALE = 92 / R;

  return (
    <Stack>
      <Figure height={224}>
        {[...LAYERS].reverse().map((l, i) => {
          const idx = LAYERS.length - 1 - i;
          return (
            <circle
              key={l.name}
              cx={CX}
              cy={CY}
              r={Math.max(l.outer * SCALE, 1)}
              fill={l.colour}
              opacity={idx === pick ? 0.95 : 0.45}
              stroke={idx === pick ? '#fff' : 'none'}
              strokeWidth={idx === pick ? 1.2 : 0}
              onClick={() => setPick(idx)}
              style={{ cursor: 'pointer' }}
            />
          );
        })}

        {LAYERS.map((l, i) => (
          <g key={l.name} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
            <rect
              x={214}
              y={22 + i * 40}
              width={158}
              height={34}
              rx={3}
              fill={i === pick ? 'rgba(148,162,192,0.18)' : C.panel}
            />
            <rect x={220} y={30 + i * 40} width={7} height={18} fill={l.colour} rx={1.5} />
            <text x={234} y={40 + i * 40} fontSize={9.5} fill="rgba(233,238,247,0.95)">
              {l.name}
            </text>
            <text
              x={234}
              y={51 + i * 40}
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              to {l.outer.toLocaleString()} km · {l.temp}
            </text>
          </g>
        ))}

        <text x={CX} y={214} textAnchor="middle" fontSize={8.5} fill={C.faint}>
          radii to scale · tap a layer
        </text>
      </Figure>

      <Note>
        {layer ? (
          <>
            <strong>{layer.name}</strong> — {layer.state}, {layer.temp}. {layer.how}
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
