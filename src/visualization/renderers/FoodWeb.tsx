import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Network, Note, Stack, type Edge, type Node } from './lifeKit';

/**
 * A chain is a path; a web is the actual thing.
 *
 * The reader removes a species and sees which connections go dark. What makes
 * this worth building rather than describing is that the consequences reach
 * species the removed one never touched — which is exactly the finding that
 * makes ecology hard to predict.
 */

const NODES: readonly Node[] = [
  { id: 'kelp', label: 'kelp', x: 62, y: 148, colour: C.life, r: 15 },
  { id: 'plankton', label: 'plankton', x: 176, y: 156, colour: C.life, r: 14 },
  { id: 'urchin', label: 'urchins', x: 62, y: 92, colour: C.warm, r: 13 },
  { id: 'crab', label: 'crabs', x: 168, y: 100, colour: C.warm, r: 12 },
  { id: 'fish', label: 'fish', x: 276, y: 128, colour: C.warm, r: 13 },
  { id: 'otter', label: 'sea otters', x: 100, y: 40, colour: C.hot, r: 14 },
  { id: 'seal', label: 'seals', x: 250, y: 48, colour: C.hot, r: 12 },
  { id: 'orca', label: 'orcas', x: 330, y: 74, colour: C.deep, r: 12 },
];

const EDGES: readonly Edge[] = [
  { from: 'urchin', to: 'kelp', kind: 'eats' },
  { from: 'crab', to: 'kelp', kind: 'eats' },
  { from: 'fish', to: 'plankton', kind: 'eats' },
  { from: 'fish', to: 'kelp', kind: 'eats' },
  { from: 'otter', to: 'urchin', kind: 'eats' },
  { from: 'otter', to: 'crab', kind: 'eats' },
  { from: 'seal', to: 'fish', kind: 'eats' },
  { from: 'orca', to: 'seal', kind: 'eats' },
  { from: 'orca', to: 'otter', kind: 'eats' },
];

const CONSEQUENCE: Record<string, string> = {
  otter:
    'Remove the otters and urchin numbers explode. Urchins graze kelp down to bare rock, and the kelp forest disappears — taking with it the fish, invertebrates and seabirds that lived in it. Otters never touched the kelp. This happened along the North Pacific coast during the fur trade, and reversed when otters were protected.',
  kelp: 'Remove the kelp and the physical structure of the habitat goes. Urchins and crabs lose their food, the fish that shelter there lose cover, and the system flips to an urchin barren — a stable state that resists returning.',
  urchin:
    'Remove the urchins and kelp expands, otters lose their main prey and shift to other food or decline. A single removal propagates in both directions along the web.',
  orca: 'Remove the orcas and their prey increase — but one proposed explanation for the recent otter decline in the Aleutians is the opposite: orcas switched to eating otters after their usual prey declined, which would be a cascade arriving from outside the web entirely.',
  plankton:
    'Remove the plankton and the fish lose a food source; the effect on kelp is indirect and depends on whether fish switch to grazing it.',
  crab: 'Remove the crabs and otters lose one prey item while kelp gains slightly. Not every species is a keystone — most removals produce modest, local effects.',
  fish: 'Remove the fish and seals lose their prey, which affects orcas. Grazing pressure on kelp falls slightly.',
  seal: 'Remove the seals and fish increase; orcas lose prey and may switch to otters, which would then release urchins and cost the kelp. A chain reaching the seafloor from the top of the web.',
};

export default function FoodWeb(_props: VisualizationProps): ReactNode {
  const [removed, setRemoved] = useState<string | null>(null);

  return (
    <Stack>
      <Network
        nodes={NODES}
        edges={EDGES}
        height={188}
        removed={removed}
        onPick={(id) => setRemoved((prev) => (prev === id ? null : id))}
      />
      <Note>
        {removed
          ? CONSEQUENCE[removed]
          : 'A North Pacific kelp system, simplified. Arrows run from consumer to what it eats. Tap any species to remove it and see what follows — the interesting cases are the ones where the effect reaches something the removed species never interacted with directly. Real webs contain hundreds of species and connections whose strengths differ by orders of magnitude; this is a sketch of the logic, not a survey.'}
      </Note>
    </Stack>
  );
}
