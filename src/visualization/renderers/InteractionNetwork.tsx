import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Network, Note, Stack, type Edge, type Node } from './lifeKit';

/**
 * An organism is a bundle of relationships, not an object.
 *
 * Centring one species and lighting up everything it touches makes the claim
 * concrete: the bee's tongue length, hair structure and colour vision are all
 * statements about flowers, and none of them can be explained by studying a bee.
 */

const NODES: readonly Node[] = [
  { id: 'bee', label: 'bee', x: 190, y: 96, colour: C.warm, r: 18 },
  { id: 'flower', label: 'flowers', x: 82, y: 52, colour: C.life, r: 14 },
  { id: 'mite', label: 'gut microbes', x: 82, y: 144, colour: C.water, r: 12 },
  { id: 'bird', label: 'birds', x: 298, y: 44, colour: C.hot, r: 13 },
  { id: 'fungus', label: 'fungal disease', x: 300, y: 148, colour: C.deep, r: 12 },
  { id: 'wasp', label: 'parasitic wasp', x: 190, y: 166, colour: C.deep, r: 11 },
  { id: 'other', label: 'other pollinators', x: 190, y: 22, colour: C.faint, r: 11 },
];

const EDGES: readonly Edge[] = [
  { from: 'bee', to: 'flower', kind: 'helps' },
  { from: 'bee', to: 'mite', kind: 'helps' },
  { from: 'bird', to: 'bee', kind: 'eats' },
  { from: 'fungus', to: 'bee', kind: 'harms' },
  { from: 'wasp', to: 'bee', kind: 'harms' },
  { from: 'other', to: 'flower', kind: 'helps' },
  { from: 'other', to: 'bee', kind: 'plain' },
];

const DETAIL: Record<string, string> = {
  bee: 'The bee’s tongue length matches the depth of the blossoms it visits. Its hairs are branched in a way that holds pollen. Its colour vision is shifted into the ultraviolet, where flowers advertise. None of that is explicable as a property of a bee alone — it is a property of a hundred-million-year-old relationship.',
  flower:
    'The flower is equally a statement about bees: its colour, scent, shape, opening time and nectar concentration are all addressed to a pollinator. Asking which adapted to which is the wrong question; each generation of one was the environment for the next generation of the other.',
  mite: 'Bees carry a specific gut microbial community that helps digest pollen and resists pathogens. Disrupt it — with antibiotics, for instance — and the bee does worse. Part of what a bee is, is a community.',
  bird: 'Predation shapes warning colouration, flight behaviour and the sting. The sting is also why several harmless flies have evolved to look like bees.',
  fungus:
    'Disease is a selection pressure like any other, and one that acts hardest on dense populations — which is why managed hives suffer from problems wild bees largely avoid.',
  wasp: 'Parasitic wasps and flies lay eggs in or on bees. Defences against them shape bee behaviour, nest architecture and immune function.',
  other:
    'Other pollinators are competitors for the same flowers and, at the same time, part of what keeps the plants reproducing. The relationship is not simply competitive.',
};

export default function InteractionNetwork(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState('bee');
  const faded = NODES.filter(
    (n) =>
      n.id !== pick &&
      !EDGES.some((e) => (e.from === pick && e.to === n.id) || (e.to === pick && e.from === n.id)),
  ).map((n) => n.id);

  return (
    <Stack>
      <Network nodes={NODES} edges={EDGES} height={206} onPick={setPick} faded={faded} />
      <Note>{DETAIL[pick]}</Note>
    </Stack>
  );
}
