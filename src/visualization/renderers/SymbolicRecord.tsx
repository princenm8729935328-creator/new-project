import { type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Timeline, type TimelineEvent } from './lifeKit';

/**
 * The earliest evidence for symbolic behaviour, on a deep-time axis.
 *
 * The old "creative revolution at 40,000 years in Europe" model is visible here
 * as what it was — an artefact of where people had been digging. Plotted by
 * date, the record spreads backwards across a quarter of a million years.
 */

const EVENTS: readonly TimelineEvent[] = [
  {
    ma: 0.32,
    label: 'Olorgesailie pigment',
    detail:
      'Worked ochre and obsidian sourced from 25–95 km away, in early Middle Stone Age layers in Kenya. Pigment alone is weak evidence — ochre improves adhesives, preserves hides and may work as sunscreen — but processed pigment together with long-distance transport at this date sits a quarter of a million years before the old model allowed.',
  },
  {
    ma: 0.115,
    label: 'Skhul and Qafzeh shells',
    detail:
      'Perforated marine shells carried inland in the Levant, associated with early Homo sapiens burials. Among the oldest widely accepted ornaments.',
  },
  {
    ma: 0.082,
    label: 'Taforalt beads',
    detail:
      'Nassarius shells from Morocco, 40 km from the contemporaneous coast: a narrow size range, deliberate perforations, wear where a cord ran, and ochre traces on several. They pass every test used to distinguish a bead from a naturally holed shell.',
  },
  {
    ma: 0.077,
    label: 'Blombos engravings',
    detail:
      'Pieces of ochre from South Africa carrying deliberate cross-hatched designs, repeated across separate pieces and made with intentional stroke sequences. Not a by-product of scraping pigment. We cannot read them; their intentionality is not seriously disputed.',
  },
  {
    ma: 0.073,
    label: 'Blombos drawing',
    detail:
      'Lines drawn on a stone flake with an ochre crayon — the pigment analysis distinguishes drawing from grinding residue.',
  },
  {
    ma: 0.065,
    label: 'Iberian cave markings',
    detail:
      'Markings in three Spanish caves dated by the carbonate crust that grew over them to more than 64,800 years — over twenty thousand years before Homo sapiens is known in Iberia, which would make them Neanderthal. The dating is disputed on grounds of possible open-system behaviour in the carbonate, and the argument is unresolved.',
  },
  {
    ma: 0.044,
    label: 'Sulawesi painting',
    detail:
      'Figurative animal paintings with small human-like figures, on the other side of the world from Europe. Described as the earliest known narrative scene, though reading it as one composition is an interpretation.',
  },
  {
    ma: 0.036,
    label: 'Chauvet',
    detail:
      'Overlapping figures suggesting movement, shading to indicate volume, and use of the wall’s own contours to give an animal a shoulder. Not the crude beginning of a tradition — a tradition already mature, with everything before it on perishable surfaces and gone.',
  },
];

export default function SymbolicRecord(_props: VisualizationProps): ReactNode {
  return (
    <Timeline
      events={EVENTS}
      fromMa={0.35}
      toMa={0}
      caption="Earliest symbolic evidence — minimum ages, not first occurrences"
    />
  );
}
