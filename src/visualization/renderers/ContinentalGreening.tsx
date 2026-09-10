import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Stepper, type Stage } from './lifeKit';

/**
 * Plants rebuilding the continents, in four stages.
 *
 * The river channel is the detail worth carrying, because it is the one that
 * surprises: rivers changed shape when plants appeared, and the change is
 * recorded in sedimentary rock. It makes the abstract claim that life is a
 * geological force concrete in a way that carbon fluxes do not.
 */

function ground(y: number): ReactNode {
  return <rect x={10} y={y} width={360} height={130 - y + 20} fill="rgba(197,143,106,0.4)" />;
}

const STAGES: readonly Stage[] = [
  {
    id: 'bare',
    title: 'Before plants',
    detail:
      'Bare rock and loose sediment. No soil, because soil is largely made and held by living things. Rain runs straight off in wide braided channels that shift constantly, and nothing holds moisture between storms.',
    draw: (
      <g>
        {ground(96)}
        <path
          d="M10,110 L370,104 M10,120 L370,116 M10,100 L370,94"
          stroke={C.water}
          strokeWidth={4}
          opacity={0.4}
          fill="none"
        />
        <text x={190} y={148} textAnchor="middle" fontSize={8.5} fill={C.dim}>
          braided sheets of water, shifting every storm
        </text>
      </g>
    ),
  },
  {
    id: 'first',
    title: 'First land plants, around 470 million years ago',
    detail:
      'Small, low, without roots or vascular tissue — closer to modern liverworts than to anything with a stem. They arrive in partnership with fungi, and the earliest fossils already show associations resembling the mycorrhizae that modern plants depend on to extract phosphorus.',
    draw: (
      <g>
        {ground(96)}
        {Array.from({ length: 16 }, (_, i) => (
          <circle key={i} cx={26 + i * 22} cy={92} r={4} fill={C.life} opacity={0.6} />
        ))}
        <path d="M10,112 L370,106" stroke={C.water} strokeWidth={5} opacity={0.4} fill="none" />
      </g>
    ),
  },
  {
    id: 'roots',
    title: 'Roots and wood',
    detail:
      'Roots split rock physically and dissolve it chemically, releasing minerals. Dead plant matter accumulates into organic soil that holds water. Vegetation stabilises banks, and the sedimentary record shows braided channels giving way to stable meandering rivers in step with the spread of rooted plants.',
    draw: (
      <g>
        {ground(88)}
        {[50, 120, 250, 320].map((x) => (
          <g key={x}>
            <rect x={x} y={40} width={6} height={50} fill={C.rock} />
            <circle cx={x + 3} cy={34} r={14} fill={C.life} opacity={0.6} />
            <path
              d={`M${x + 3},90 l-14,18 M${x + 3},90 l14,20 M${x + 3},90 l0,22`}
              stroke={C.rock}
              strokeWidth={1.4}
            />
          </g>
        ))}
        <path
          d="M10,120 Q90,108 170,122 T370,116"
          stroke={C.water}
          strokeWidth={7}
          fill="none"
          opacity={0.5}
        />
        <text x={190} y={152} textAnchor="middle" fontSize={8.5} fill={C.water}>
          one stable meandering channel
        </text>
      </g>
    ),
  },
  {
    id: 'atmosphere',
    title: 'The atmosphere changes',
    detail:
      'Accelerated weathering and the burial of enormous quantities of woody carbon drew carbon dioxide down by roughly an order of magnitude across the Devonian and Carboniferous, and the planet cooled into the Late Palaeozoic Ice Age. Buried carbon is oxygen left in the air, and oxygen may have reached thirty-five percent — the period of dragonflies with seventy-centimetre wingspans. The classic explanation for the coal, that lignin-degrading fungi had not yet evolved, has been substantially revised.',
    draw: (
      <g>
        <rect x={10} y={16} width={360} height={40} rx={4} fill="rgba(143,184,255,0.14)" />
        <text x={30} y={32} fontSize={8.5} fill={C.hot}>
          CO₂ ↓ roughly ten-fold
        </text>
        <text x={30} y={48} fontSize={8.5} fill={C.life}>
          O₂ ↑ to perhaps 35%
        </text>
        {ground(92)}
        {[40, 110, 180, 250, 320].map((x) => (
          <g key={x}>
            <rect x={x} y={54} width={7} height={40} fill={C.rock} />
            <circle cx={x + 3} cy={48} r={15} fill={C.life} opacity={0.65} />
          </g>
        ))}
        <rect x={10} y={122} width={360} height={12} fill="#20242c" />
        <text x={190} y={150} textAnchor="middle" fontSize={8.5} fill={C.faint}>
          buried carbon — the Carboniferous coal measures
        </text>
      </g>
    ),
  },
];

export default function ContinentalGreening(_props: VisualizationProps): ReactNode {
  return <Stepper stages={STAGES} height={168} label="Stage" />;
}
