import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The same solution, reached from unrelated starting points.
 *
 * Each case is drawn as two lineages converging on one shape, with the shared
 * ancestor marked far back. The point is that the similarity is not inherited —
 * which is exactly what makes convergence evidence about constraints rather
 * than about relationship.
 */

interface Case {
  readonly key: string;
  readonly a: string;
  readonly b: string;
  readonly shape: string;
  readonly detail: string;
}

const CASES: readonly Case[] = [
  {
    key: 'Eyes',
    a: 'vertebrate',
    b: 'octopus',
    shape: 'camera eye',
    detail:
      'A lens, an iris, a retina, a fluid-filled chamber. Vertebrates and cephalopods last shared an ancestor around 600 million years ago that had at most a light-sensitive patch. The details differ tellingly: the vertebrate retina is wired backwards, with nerves in front of the photoreceptors and a blind spot where they exit; the octopus retina is the right way round and has no blind spot. Same solution, independently reached, and the octopus version is better engineered.',
  },
  {
    key: 'Flight',
    a: 'bird',
    b: 'bat',
    shape: 'powered wing',
    detail:
      'Insects, pterosaurs, birds and bats each evolved powered flight independently. All four ended up with an aerofoil, because the physics of moving through air permits nothing else — but they built it from completely different material. A bat flies on skin stretched between elongated fingers; a bird on feathers along a fused forelimb; a pterosaur on a membrane supported by one enormous fourth finger.',
  },
  {
    key: 'Body shape',
    a: 'shark',
    b: 'dolphin',
    shape: 'streamlined torpedo',
    detail:
      'A shark is a fish, a dolphin a mammal whose ancestors walked on land, and an ichthyosaur was a reptile. All three converged on the same fusiform body with a dorsal fin and paddle-like forelimbs, because the hydrodynamics of moving fast through water is unforgiving. The tail gives the ancestry away: fish beat side to side, mammals up and down, following the spine they inherited.',
  },
  {
    key: 'Agriculture',
    a: 'leafcutter ant',
    b: 'termite',
    shape: 'fungus farming',
    detail:
      'Ants, termites and ambrosia beetles each independently evolved to cultivate fungus — collecting substrate, tending a monoculture, weeding out contaminants, and in some cases applying antibiotics from bacteria they carry. Convergence is not limited to anatomy; behaviour and social organisation converge too.',
  },
];

export default function ConvergentEvolution(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const c = CASES[Math.min(pick, CASES.length - 1)];
  if (!c) return null;

  return (
    <Stack>
      <Figure height={168}>
        <circle cx={30} cy={84} r={4.5} fill={C.warm} />
        <text x={30} y={102} textAnchor="middle" fontSize={7.5} fill={C.warm}>
          distant
        </text>
        <text x={30} y={112} textAnchor="middle" fontSize={7.5} fill={C.warm}>
          ancestor
        </text>

        <path d="M36,84 C120,84 150,32 236,32" fill="none" stroke={C.water} strokeWidth={2} />
        <path d="M36,84 C120,84 150,136 236,136" fill="none" stroke={C.deep} strokeWidth={2} />
        <text x={158} y={26} fontSize={8.5} fill={C.water}>
          {c.a}
        </text>
        <text x={158} y={150} fontSize={8.5} fill={C.deep}>
          {c.b}
        </text>

        <path
          d="M240,32 C280,32 290,68 306,80"
          fill="none"
          stroke={C.water}
          strokeWidth={2}
          strokeDasharray="4 3"
        />
        <path
          d="M240,136 C280,136 290,96 306,88"
          fill="none"
          stroke={C.deep}
          strokeWidth={2}
          strokeDasharray="4 3"
        />
        <circle cx={318} cy={84} r={16} fill={C.life} opacity={0.75} />
        <text x={318} y={112} textAnchor="middle" fontSize={8.5} fill={C.life}>
          {c.shape}
        </text>
        <text x={190} y={84} textAnchor="middle" fontSize={8} fill={C.faint}>
          no shared ancestor had this
        </text>
      </Figure>

      <ToggleRow label="Case" options={CASES.map((x) => x.key)} value={pick} onChange={setPick} />

      <Note>
        {c.detail} What convergence shows is that the space of workable solutions is narrower than
        the space of possible ones — physics and chemistry rule out most of it. What it does not
        show is that any particular outcome was bound to happen: nothing forced anything to need to
        see, or to fly.
      </Note>
    </Stack>
  );
}
