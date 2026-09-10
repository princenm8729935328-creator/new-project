import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The candidate birthplaces, scored honestly.
 *
 * There is no winner here, and the figure must not manufacture one. Each
 * setting gets the same three-line treatment — what it supplies, what it cannot
 * supply, and what would count as evidence — so the reader can see that the
 * disagreement is between serious positions rather than between a consensus and
 * some cranks.
 */

interface Setting {
  readonly key: string;
  readonly title: string;
  readonly good: readonly string[];
  readonly bad: readonly string[];
  readonly test: string;
  readonly colour: string;
}

const SETTINGS: readonly Setting[] = [
  {
    key: 'Alkaline vents',
    title: 'Alkaline hydrothermal vents',
    colour: C.water,
    good: [
      'natural proton gradient across mineral walls — the same currency cells use',
      'iron-sulphur minerals resembling the catalytic centres of ancient enzymes',
      'stable for tens of thousands of years, unlike black smokers',
    ],
    bad: [
      'seawater dilutes everything; concentrating organic molecules is a real problem',
      'RNA is unstable in warm alkaline water',
      'no demonstrated route from vent chemistry to a genetic polymer',
    ],
    test: 'Building a working protocell in a laboratory vent reactor, from vent chemistry alone.',
  },
  {
    key: 'Warm pools',
    title: 'Surface pools that wet and dry',
    colour: C.warm,
    good: [
      'evaporation concentrates solutes — the dilution problem solved directly',
      'wet–dry cycling drives polymerisation, which is hard to achieve in bulk water',
      'ultraviolet light supplies energy for several key prebiotic reactions',
    ],
    bad: [
      'that same ultraviolet light destroys many of the products',
      'requires exposed land, which was scarce on a mostly ocean-covered early Earth',
      'the chemistry is sensitive to the exact cycle, which is hard to constrain',
    ],
    test: 'A wet–dry cycle producing a self-sustaining replicating system without intervention between cycles.',
  },
  {
    key: 'Ice',
    title: 'Ice eutectic phases',
    colour: 'rgba(220,235,255,0.85)',
    good: [
      'freezing concentrates solutes into unfrozen brine channels',
      'cold stabilises RNA, which degrades quickly when warm',
      'the best laboratory ribozyme replicases work in ice',
    ],
    bad: [
      'reactions run extremely slowly',
      'requires a cold early Earth, which conflicts with most reconstructions',
    ],
    test: 'Sustained replication in ice over many cycles, with the products remaining functional.',
  },
  {
    key: 'Elsewhere',
    title: 'Somewhere other than Earth',
    colour: C.deep,
    good: [
      'meteorites demonstrably deliver amino acids, sugars and nucleobases',
      'Mars was habitable earlier than Earth and material passes between the two',
    ],
    bad: [
      'moves the problem rather than solving it — the same chemistry is still required',
      'no evidence of life beyond Earth has been found',
    ],
    test: 'Finding life, or its unambiguous traces, somewhere with an independent origin.',
  },
];

export default function OriginSettings(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const s = SETTINGS[Math.min(pick, SETTINGS.length - 1)];
  if (!s) return null;

  return (
    <Stack>
      <Figure height={200}>
        <text x={10} y={14} fontSize={10} fill={s.colour}>
          {s.title}
        </text>
        <text x={10} y={32} fontSize={8.5} fill={C.life}>
          supplies
        </text>
        {s.good.map((g, i) => (
          <text key={g} x={20} y={46 + i * 13} fontSize={8.5} fill="rgba(233,238,247,0.9)">
            · {g}
          </text>
        ))}
        <text x={10} y={54 + s.good.length * 13} fontSize={8.5} fill={C.hot}>
          struggles with
        </text>
        {s.bad.map((b, i) => (
          <text
            key={b}
            x={20}
            y={68 + s.good.length * 13 + i * 13}
            fontSize={8.5}
            fill="rgba(233,238,247,0.9)"
          >
            · {b}
          </text>
        ))}
      </Figure>

      <ToggleRow
        label="Setting"
        options={SETTINGS.map((x) => x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>What would settle it:</strong> {s.test} No setting has produced that, and the
        disagreement between them is between serious researchers reading the same incomplete
        evidence differently.
      </Note>
    </Stack>
  );
}
