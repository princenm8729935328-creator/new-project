import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Stepper, type Stage } from './lifeKit';

/**
 * The whole route, with the gaps left visible.
 *
 * Almost every popular diagram of this subject draws a continuous arrow. This
 * one marks each step with what has actually been achieved in a laboratory,
 * which turns the same picture into an honest one: the ends are solid and the
 * middle is not.
 */

function bar(done: number, colour: string, label: string): ReactNode {
  return (
    <g>
      <rect x={40} y={96} width={300} height={12} rx={6} fill="rgba(148,162,192,0.16)" />
      <rect x={40} y={96} width={Math.max(300 * done, 4)} height={12} rx={6} fill={colour} />
      <text x={190} y={126} textAnchor="middle" fontSize={9} fill={colour}>
        {label}
      </text>
    </g>
  );
}

const STAGES: readonly Stage[] = [
  {
    id: 'monomers',
    title: 'Simple molecules to building blocks',
    detail:
      'Amino acids, sugars and nucleobases form under a range of plausible early-Earth conditions and arrive on meteorites. This step is not in doubt.',
    draw: (
      <g>
        <text x={190} y={64} textAnchor="middle" fontSize={9.5} fill={C.dim}>
          CH₄, NH₃, HCN, H₂O → amino acids, sugars, bases
        </text>
        {bar(1, C.life, 'demonstrated repeatedly since 1953')}
      </g>
    ),
  },
  {
    id: 'polymers',
    title: 'Building blocks to chains',
    detail:
      'Linking units into chains requires removing water, which is awkward in water. Wet–dry cycles, mineral surfaces and freezing all help, and chains of tens of units have been made. Hundreds have not.',
    draw: (
      <g>
        <text x={190} y={64} textAnchor="middle" fontSize={9.5} fill={C.dim}>
          nucleotides → RNA chains of tens of units
        </text>
        {bar(0.55, C.warm, 'partly demonstrated')}
      </g>
    ),
  },
  {
    id: 'replication',
    title: 'Chains that copy themselves',
    detail:
      'The central gap. Ribozymes that copy templates exist and have improved steadily, but none copies itself with the accuracy a sustained lineage requires. Four decades of concentrated effort have narrowed the gap without closing it.',
    draw: (
      <g>
        <text x={190} y={64} textAnchor="middle" fontSize={9.5} fill={C.dim}>
          RNA → RNA that copies RNA
        </text>
        {bar(0.2, C.hot, 'not demonstrated')}
      </g>
    ),
  },
  {
    id: 'compartment',
    title: 'Contents inside a boundary',
    detail:
      'Vesicles form spontaneously, grow, divide, and can encapsulate RNA. Systems in which the contents replicate as the vesicle divides — so that daughters inherit — have not been achieved.',
    draw: (
      <g>
        <text x={190} y={64} textAnchor="middle" fontSize={9.5} fill={C.dim}>
          fatty acids + RNA → growing, dividing vesicle
        </text>
        {bar(0.5, C.warm, 'partly demonstrated')}
      </g>
    ),
  },
  {
    id: 'darwin',
    title: 'A population that evolves',
    detail:
      'Once inheritance, variation and differential survival are all present, natural selection takes over and biology begins. Nothing has been carried across this line from scratch. The route drawn here is a research programme, not a description of what happened.',
    draw: (
      <g>
        <text x={190} y={64} textAnchor="middle" fontSize={9.5} fill={C.dim}>
          protocells → heredity, variation, selection
        </text>
        {bar(0.08, C.hot, 'not demonstrated')}
      </g>
    ),
  },
];

export default function ChemistryToBiology(_props: VisualizationProps): ReactNode {
  return <Stepper stages={STAGES} height={150} label="Step" />;
}
