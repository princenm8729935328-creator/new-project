import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * The oldest claimed traces of life, ranked by how contested they are.
 *
 * A bar chart of ages alone would imply a settled record, which this is not.
 * The confidence bar next to each age is the honest part of the figure: the
 * oldest claims are the weakest, and every one of them has a published
 * rebuttal.
 */

interface Claim {
  readonly age: number; // Ga
  readonly what: string;
  readonly where: string;
  readonly confidence: number; // 0-1
  readonly detail: string;
}

const CLAIMS: readonly Claim[] = [
  {
    age: 4.1,
    what: 'Carbon inclusion in zircon',
    where: 'Jack Hills, Australia',
    confidence: 0.18,
    detail:
      'A speck of graphite trapped inside a 4.1-billion-year-old zircon crystal, with a carbon isotope ratio in the range life produces. It is a single inclusion in a single grain, isotope ratios of this kind can be produced without life, and the claim is not widely accepted.',
  },
  {
    age: 3.8,
    what: 'Vent tube microstructures',
    where: 'Nuvvuagittuq, Canada',
    confidence: 0.22,
    detail:
      'Haematite filaments and tubes resembling structures made by iron-oxidising bacteria at modern vents. The age of the host rock is itself disputed, ranging from 3.77 to 4.28 billion years, and comparable shapes can form without biology.',
  },
  {
    age: 3.7,
    what: 'Layered stromatolite-like structures',
    where: 'Isua, Greenland',
    confidence: 0.35,
    detail:
      'Centimetre-scale conical layering interpreted as microbial mats. A 2018 re-examination of fresh exposures argued the structures are deformation features in the rock rather than biological, and the original authors disagree. Genuinely unresolved.',
  },
  {
    age: 3.48,
    what: 'Stromatolites with associated textures',
    where: 'Dresser Formation, Australia',
    confidence: 0.7,
    detail:
      'A stronger case: multiple structural types consistent with different microbial communities, in a setting that makes sense, with supporting isotopic and textural evidence. Widely though not universally accepted.',
  },
  {
    age: 3.43,
    what: 'Stromatolites, Strelley Pool',
    where: 'Pilbara, Australia',
    confidence: 0.85,
    detail:
      'The strongest of the very old claims. The structures show the shapes, the layering and the geochemical signatures expected of microbial mats, and the case has held up under scrutiny for two decades.',
  },
];

export default function EarliestLifeEvidence(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(4);
  const claim = CLAIMS[Math.min(pick, CLAIMS.length - 1)];
  const ROW = 34;

  return (
    <Stack>
      <Figure height={26 + CLAIMS.length * ROW + 6}>
        <text x={8} y={11} fontSize={9} fill={C.dim}>
          claimed age
        </text>
        <text x={372} y={11} textAnchor="end" fontSize={9} fill={C.dim}>
          how strongly accepted
        </text>
        {CLAIMS.map((c, i) => {
          const y = 22 + i * ROW;
          const sel = i === pick;
          return (
            <g key={c.what} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={8}
                y={y}
                width={364}
                height={ROW - 6}
                rx={3}
                fill={sel ? 'rgba(148,162,192,0.16)' : C.panel}
              />
              <text x={16} y={y + 12} fontSize={9.5} fill="rgba(233,238,247,0.95)">
                {c.age.toFixed(2)} Ga — {c.what}
              </text>
              <text x={16} y={y + 23} fontSize={8} fill={C.faint}>
                {c.where}
              </text>
              <rect
                x={274}
                y={y + 9}
                width={86}
                height={9}
                rx={4.5}
                fill="rgba(148,162,192,0.18)"
              />
              <rect
                x={274}
                y={y + 9}
                width={Math.max(86 * c.confidence, 3)}
                height={9}
                rx={4.5}
                fill={c.confidence > 0.6 ? C.life : c.confidence > 0.3 ? C.warm : C.hot}
              />
            </g>
          );
        })}
      </Figure>

      <Note>
        {claim ? (
          <>
            <strong>
              {claim.what}, {claim.age.toFixed(2)} billion years
            </strong>{' '}
            — {claim.detail}
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
