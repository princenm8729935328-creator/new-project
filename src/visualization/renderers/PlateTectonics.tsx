import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The three ways two plates can meet.
 *
 * Each is drawn in the same frame with the same conventions so the difference
 * between them is the only thing that changes — which is the point, because the
 * usual confusion is not about any one boundary but about telling them apart.
 */

interface Boundary {
  readonly key: string;
  readonly title: string;
  readonly where: string;
  readonly detail: string;
  readonly draw: ReactNode;
}

const MANTLE = 'rgba(192,125,85,0.35)';
const PLATE = '#7fd6b6';

function arrow(x1: number, y: number, x2: number, colour: string): ReactNode {
  const dir = x2 > x1 ? 1 : -1;
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={colour} strokeWidth={1.6} />
      <path d={`M${x2},${y} l${-7 * dir},-3.5 l0,7 z`} fill={colour} />
    </g>
  );
}

const BOUNDARIES: readonly Boundary[] = [
  {
    key: 'Spreading',
    title: 'Divergent — new crust is made',
    where: 'Mid-Atlantic Ridge, East African Rift',
    detail:
      'Two plates pull apart and mantle rock rises to fill the gap, melting as the pressure drops and freezing onto both edges. The Atlantic is widening this way at about the rate your fingernails grow. This is the boundary whose magnetic stripe pattern proved seafloor spreading in 1963.',
    draw: (
      <g>
        <rect x={0} y={72} width={380} height={70} fill={MANTLE} />
        <rect x={16} y={52} width={158} height={22} fill={PLATE} />
        <rect x={206} y={52} width={158} height={22} fill={PLATE} />
        <path d="M174,74 L190,110 L206,74 z" fill={C.hot} opacity={0.8} />
        {arrow(150, 42, 96, C.water)}
        {arrow(230, 42, 284, C.water)}
        <text x={190} y={128} textAnchor="middle" fontSize={8.5} fill={C.hot}>
          rising mantle melts and freezes onto both plates
        </text>
      </g>
    ),
  },
  {
    key: 'Subduction',
    title: 'Convergent — crust is destroyed',
    where: 'Andes, Japan, Cascadia',
    detail:
      'Where two plates collide, the denser one bends and sinks back into the mantle. Water carried down with it lowers the melting point of the rock above, which is why a line of volcanoes sits inland of every subduction zone — and why the deepest and largest earthquakes happen here.',
    draw: (
      <g>
        <rect x={0} y={72} width={380} height={70} fill={MANTLE} />
        <rect x={16} y={52} width={160} height={20} fill={PLATE} />
        <path d="M176,52 L214,52 L286,128 L252,132 z" fill="#5fb0d6" />
        <path d="M186,52 L246,52 L246,72 L200,72 z" fill={PLATE} opacity={0} />
        <rect x={214} y={52} width={150} height={20} fill={PLATE} />
        <path d="M262,52 L272,30 L282,52 z" fill={C.hot} />
        {arrow(120, 40, 168, C.water)}
        {arrow(330, 40, 288, C.water)}
        <text x={190} y={142} textAnchor="middle" fontSize={8.5} fill={C.hot}>
          the denser plate sinks; water released triggers melting above
        </text>
      </g>
    ),
  },
  {
    key: 'Sliding',
    title: 'Transform — plates grind past',
    where: 'San Andreas Fault, North Anatolian Fault',
    detail:
      'No crust is made and none destroyed; the plates simply slide past each other. Friction locks the fault for decades and then releases suddenly, which is why transform boundaries produce large shallow earthquakes but few volcanoes.',
    draw: (
      <g>
        <rect x={0} y={72} width={380} height={70} fill={MANTLE} />
        <rect x={16} y={40} width={348} height={30} fill={PLATE} />
        <line x1={190} y1={30} x2={190} y2={80} stroke="#1a2030" strokeWidth={3} />
        {arrow(120, 30, 66, C.water)}
        {arrow(260, 82, 314, C.water)}
        <text x={190} y={124} textAnchor="middle" fontSize={8.5} fill={C.warm}>
          the fault locks, strain builds, then it slips
        </text>
      </g>
    ),
  },
];

export default function PlateTectonics(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const boundary = BOUNDARIES[Math.min(pick, BOUNDARIES.length - 1)];
  if (!boundary) return null;

  return (
    <Stack>
      <Figure height={158}>
        <text x={10} y={14} fontSize={10} fill="rgba(233,238,247,0.95)">
          {boundary.title}
        </text>
        <text x={10} y={26} fontSize={8.5} fill={C.faint}>
          {boundary.where}
        </text>
        {boundary.draw}
      </Figure>

      <ToggleRow
        label="Boundary type"
        options={BOUNDARIES.map((b) => b.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>{boundary.detail}</Note>
    </Stack>
  );
}
