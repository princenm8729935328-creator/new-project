import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Stepper, type Stage } from './lifeKit';

/**
 * A merger, stepped, ending on the evidence rather than the story.
 *
 * The last two stages are the ones that matter scientifically: mitochondria
 * keep their own DNA and their own ribosomes, which is why Margulis was right
 * and why the idea stopped being ridiculed once sequencing arrived.
 */

const STAGES: readonly Stage[] = [
  {
    id: 'two',
    title: 'Two separate organisms',
    detail:
      'An archaeal host cell and a free-living bacterium capable of aerobic respiration. Both are ordinary independent organisms, each with its own genome.',
    draw: (
      <g>
        <circle cx={122} cy={82} r={40} fill={C.deep} opacity={0.35} stroke={C.deep} />
        <text x={122} y={86} textAnchor="middle" fontSize={9} fill={C.deep}>
          archaeal host
        </text>
        <circle cx={262} cy={82} r={18} fill={C.hot} opacity={0.6} stroke={C.hot} />
        <text x={262} y={116} textAnchor="middle" fontSize={9} fill={C.hot}>
          bacterium
        </text>
      </g>
    ),
  },
  {
    id: 'inside',
    title: 'One ends up inside the other',
    detail:
      'How is not known. It may have been engulfed and not digested; it may have been a parasite; it may have started as a metabolic partnership between neighbours that grew progressively closer. All three are argued for, and the fossil record has nothing to say about it.',
    draw: (
      <g>
        <circle cx={190} cy={82} r={48} fill={C.deep} opacity={0.35} stroke={C.deep} />
        <circle cx={210} cy={78} r={15} fill={C.hot} opacity={0.6} stroke={C.hot} />
        <text x={190} y={148} textAnchor="middle" fontSize={8.5} fill={C.warm}>
          the mechanism is genuinely unknown
        </text>
      </g>
    ),
  },
  {
    id: 'dependent',
    title: 'They become inseparable',
    detail:
      'The guest supplies energy; the host supplies raw materials and protection. Over time most of the guest’s genes migrate to the host’s genome or are lost outright, and neither can survive without the other. It is no longer a partnership between organisms — it is one organism.',
    draw: (
      <g>
        <circle cx={190} cy={82} r={50} fill={C.deep} opacity={0.3} stroke={C.deep} />
        {[
          [168, 66],
          [214, 74],
          [186, 104],
        ].map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx={13} ry={8} fill={C.hot} opacity={0.55} />
        ))}
        <text x={190} y={150} textAnchor="middle" fontSize={8.5} fill={C.dim}>
          most guest genes moved to the host nucleus
        </text>
      </g>
    ),
  },
  {
    id: 'evidence',
    title: 'What is left as evidence',
    detail:
      'Mitochondria have their own circular DNA, their own ribosomes — which are bacterial in type, not eukaryotic — a double membrane whose inner layer has bacterial lipids, and they divide by splitting rather than being built. They are also inherited only from the mother. Antibiotics that target bacterial ribosomes affect mitochondria too, which is a clinical fact and a phylogenetic argument at once.',
    draw: (
      <g>
        {[
          'own circular DNA',
          'bacterial-type ribosomes',
          'double membrane',
          'divides by splitting',
          'inherited maternally',
        ].map((t, i) => (
          <g key={t}>
            <circle cx={44} cy={38 + i * 22} r={3.4} fill={C.life} />
            <text x={58} y={41 + i * 22} fontSize={9} fill="rgba(233,238,247,0.92)">
              {t}
            </text>
          </g>
        ))}
      </g>
    ),
  },
  {
    id: 'again',
    title: 'And it happened again',
    detail:
      'A later, separate merger brought a photosynthetic cyanobacterium into a eukaryote, producing chloroplasts. That is why plants photosynthesise — using captured bacterial machinery. Several algal groups then acquired chloroplasts by swallowing other algae that had already done it, so some cells contain a symbiont inside a symbiont.',
    draw: (
      <g>
        <circle cx={190} cy={82} r={52} fill="rgba(79,224,192,0.16)" stroke={C.life} />
        {[
          [166, 66],
          [214, 72],
        ].map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx={12} ry={7.5} fill={C.hot} opacity={0.5} />
        ))}
        {[
          [176, 104],
          [210, 100],
        ].map(([x, y], i) => (
          <ellipse key={`c${i}`} cx={x} cy={y} rx={13} ry={8} fill={C.life} opacity={0.7} />
        ))}
        <text x={190} y={152} textAnchor="middle" fontSize={8.5} fill={C.life}>
          mitochondria and chloroplasts — two separate captures
        </text>
      </g>
    ),
  },
];

export default function Endosymbiosis(_props: VisualizationProps): ReactNode {
  return <Stepper stages={STAGES} height={164} label="Stage" />;
}
