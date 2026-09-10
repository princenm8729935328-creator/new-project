import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The Cambrian substrate revolution, drawn in cross-section.
 *
 * Burrowing changed the seafloor from a layered mat to churned mud, and with it
 * the chemistry of the sediment and the organisms that could live on or in it.
 * A cross-section is the only way to show this; a species list would not.
 */

const VIEWS = ['Before animals', 'After burrowers'] as const;

export default function AnimalsReshape(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={190}>
        <rect x={12} y={18} width={356} height={44} fill="rgba(111,179,255,0.14)" />
        <text x={20} y={34} fontSize={8.5} fill={C.water}>
          seawater
        </text>

        {view === 0 ? (
          <g>
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                x={12}
                y={62 + i * 8}
                width={356}
                height={7}
                fill={i % 2 ? 'rgba(79,224,192,0.35)' : 'rgba(79,224,192,0.55)'}
              />
            ))}
            <rect x={12} y={94} width={356} height={64} fill="rgba(90,80,72,0.6)" />
            <text x={20} y={86} fontSize={8.5} fill={C.life}>
              microbial mat — tough, layered, undisturbed for hundreds of millions of years
            </text>
            <text x={20} y={124} fontSize={8.5} fill={C.faint}>
              sediment below: no oxygen, sharply layered, chemically stratified
            </text>
          </g>
        ) : (
          <g>
            <rect x={12} y={62} width={356} height={96} fill="rgba(110,96,84,0.65)" />
            {Array.from({ length: 11 }, (_, i) => (
              <path
                key={i}
                d={`M${28 + i * 32},62 q${(i % 3) * 6 - 6},22 ${(i % 4) * 5 - 6},${40 + (i % 3) * 14}`}
                stroke="rgba(197,143,106,0.85)"
                strokeWidth={4}
                fill="none"
                strokeLinecap="round"
              />
            ))}
            {Array.from({ length: 7 }, (_, i) => (
              <circle key={i} cx={42 + i * 48} cy={70 + (i % 3) * 22} r={3.2} fill={C.warm} />
            ))}
            <text x={20} y={178} fontSize={8.5} fill={C.warm}>
              churned mud, oxygen pumped metres down, layering destroyed
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="Seafloor" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'For most of Earth’s history the seafloor was covered in thick microbial mats — tough, sharply layered, and essentially undisturbed. The sediment beneath them was anoxic within millimetres of the surface, which set the chemistry of phosphorus and sulphur cycling for the whole ocean.'
          : 'Then animals started to burrow. Within a geologically short interval the mats were gone from most environments, replaced by churned sediment with animals living inside it. Burrowing pumps oxygen down, changes where chemical reactions happen, and alters nutrient cycling. A whole class of organisms adapted to firm undisturbed mats disappeared, and a whole class adapted to soft mud appeared. Geologists call it the Cambrian substrate revolution, and it is a case of animals rebuilding the physical world rather than merely occupying it.'}
      </Note>
    </Stack>
  );
}
