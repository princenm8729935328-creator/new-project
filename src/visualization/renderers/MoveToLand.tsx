import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Every service water provides free, and what has to replace it on land.
 *
 * Framing the transition as a list of withdrawn services is what makes it feel
 * hard. The second view is the tetrapod sequence, which carries the more
 * important lesson: the equipment appeared before the need for it.
 */

const VIEWS = ['What water was doing', 'How limbs appeared'] as const;

const SERVICES: readonly (readonly [string, string])[] = [
  ['holds the body up', 'skeleton and muscle strong enough for gravity'],
  ['keeps everything wet', 'waterproof skin, cuticle, or shell'],
  ['delivers dissolved oxygen', 'lungs or tracheae'],
  ['carries away waste', 'kidneys concentrating urine to save water'],
  ['carries eggs and sperm together', 'internal fertilisation, or the amniotic egg'],
  ['buffers temperature', 'behaviour, insulation, or tolerance of swings'],
];

const STEPS: readonly (readonly [string, string])[] = [
  ['lobe-finned fish', 'robust jointed fin skeleton and lungs, in shallow oxygen-poor water'],
  ['Tiktaalik', 'a neck, a flattened head, sturdy fins that could prop the body — still a fish'],
  ['Acanthostega', 'true limbs with eight digits, and functioning gills. It lived in water'],
  ['Ichthyostega', 'stronger limbs and ribs, probably able to haul itself out for short periods'],
  ['early tetrapods', 'digits settle at five; habitual walking comes long after the limbs did'],
];

export default function MoveToLand(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={view === 0 ? 190 : 182}>
        {view === 0 ? (
          <g>
            <text x={16} y={14} fontSize={9} fill={C.water}>
              in water, free
            </text>
            <text x={364} y={14} textAnchor="end" fontSize={9} fill={C.rock}>
              on land, must be built
            </text>
            {SERVICES.map(([had, need], i) => (
              <g key={had}>
                <rect
                  x={12}
                  y={22 + i * 28}
                  width={168}
                  height={22}
                  rx={3}
                  fill="rgba(111,179,255,0.16)"
                />
                <text x={20} y={37 + i * 28} fontSize={8} fill="rgba(233,238,247,0.9)">
                  {had}
                </text>
                <path
                  d={`M184,${33 + i * 28} L196,${33 + i * 28}`}
                  stroke={C.faint}
                  strokeWidth={1.2}
                />
                <rect
                  x={200}
                  y={22 + i * 28}
                  width={168}
                  height={22}
                  rx={3}
                  fill="rgba(197,143,106,0.16)"
                />
                <text x={208} y={37 + i * 28} fontSize={8} fill="rgba(233,238,247,0.9)">
                  {need}
                </text>
              </g>
            ))}
          </g>
        ) : (
          <g>
            {STEPS.map(([name, note], i) => (
              <g key={name}>
                <circle cx={30} cy={26 + i * 34} r={6} fill={C.life} opacity={0.85} />
                {i < STEPS.length - 1 ? (
                  <line
                    x1={30}
                    y1={32 + i * 34}
                    x2={30}
                    y2={54 + i * 34}
                    stroke={C.life}
                    strokeWidth={1.4}
                    opacity={0.5}
                  />
                ) : null}
                <text x={46} y={24 + i * 34} fontSize={9.5} fill="rgba(233,238,247,0.95)">
                  {name}
                </text>
                <text x={46} y={36 + i * 34} fontSize={8} fill={C.faint}>
                  {note}
                </text>
              </g>
            ))}
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Water does a great deal for an organism without being asked, and every one of those services is withdrawn at once on land. Which is why colonisation happened in stages and independently in several lineages — microbes first, then fungi and plants together, then arthropods, then vertebrates, who were the least well prepared.'
          : 'Limbs with digits evolved in animals that were still living in water. They were useful for pushing through dense vegetation in shallow swamps and for propping the head up to breathe at the surface. Walking came later, using equipment that already existed for other reasons. Biologists call this exaptation, and it is the answer to the old objection about what use half a wing could be: half a wing is a good gliding surface, or a heat exchanger, or a display. The question assumes the final function was the target all along, which the fossil record repeatedly shows it was not.'}
      </Note>
    </Stack>
  );
}
