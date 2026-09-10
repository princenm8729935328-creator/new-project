import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Diversity is three things, and counting species catches only one.
 *
 * A reader who thinks biodiversity means a species count will misread almost
 * every conservation argument, so the figure separates genetic, species and
 * ecosystem diversity and gives each a case where it is the one that matters.
 */

const LEVELS = ['Genetic', 'Species', 'Ecosystem'] as const;

export default function BiodiversityLevels(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);

  const notes = [
    'Variation within a species. The Irish potato famine happened because nearly all the potatoes grown were a single clone with no resistance to Phytophthora — one species, no genetic diversity, catastrophic result. The same concern applies to cheetahs, which passed through a severe bottleneck and are so genetically uniform that unrelated individuals accept skin grafts from each other.',
    'The number and evenness of species present. This is what people usually mean, and it is the easiest to count — but a count treats every species as equivalent, which is why measures weighted by evolutionary distinctness are increasingly used. Losing one of two hundred beetle species is not comparable to losing the last member of an ancient lineage such as the tuatara.',
    'The variety of habitats and of the processes running in them. A landscape of one habitat type, however species-rich, loses everything to a single event. Wetlands, forests, grasslands and rivers each support communities the others cannot, and each performs functions — water storage, nutrient processing, carbon burial — that the others do differently or not at all.',
  ];

  return (
    <Stack>
      <Figure height={186}>
        {pick === 0 ? (
          <g>
            {Array.from({ length: 24 }, (_, i) => (
              <circle
                key={i}
                cx={44 + (i % 8) * 42}
                cy={56 + Math.floor(i / 8) * 42}
                r={13}
                fill={C.life}
                opacity={0.35 + ((i * 37) % 10) / 16}
              />
            ))}
            <text x={190} y={172} textAnchor="middle" fontSize={9} fill={C.life}>
              one species — shades are different genetic variants
            </text>
          </g>
        ) : pick === 1 ? (
          <g>
            {Array.from({ length: 24 }, (_, i) => (
              <circle
                key={i}
                cx={44 + (i % 8) * 42}
                cy={56 + Math.floor(i / 8) * 42}
                r={9 + (i % 5) * 2}
                fill={[C.life, C.water, C.warm, C.hot, C.deep, 'rgba(233,238,247,0.7)'][i % 6]}
                opacity={0.8}
              />
            ))}
            <text x={190} y={172} textAnchor="middle" fontSize={9} fill={C.dim}>
              many species in one place
            </text>
          </g>
        ) : (
          <g>
            {[
              ['forest', C.life],
              ['wetland', C.water],
              ['grassland', C.warm],
              ['reef', C.deep],
            ].map(([name, colour], i) => (
              <g key={name as string}>
                <rect
                  x={22 + i * 88}
                  y={44}
                  width={72}
                  height={84}
                  rx={5}
                  fill={colour as string}
                  opacity={0.45}
                />
                {Array.from({ length: 6 }, (_, j) => (
                  <circle
                    key={j}
                    cx={38 + i * 88 + (j % 3) * 21}
                    cy={62 + Math.floor(j / 3) * 38}
                    r={6}
                    fill={colour as string}
                  />
                ))}
                <text
                  x={58 + i * 88}
                  y={142}
                  textAnchor="middle"
                  fontSize={8}
                  fill={colour as string}
                >
                  {name as string}
                </text>
              </g>
            ))}
            <text x={190} y={172} textAnchor="middle" fontSize={9} fill={C.dim}>
              different habitats, each with communities the others cannot hold
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="Level" options={[...LEVELS]} value={pick} onChange={setPick} />

      <Note>{notes[pick]}</Note>
    </Stack>
  );
}
