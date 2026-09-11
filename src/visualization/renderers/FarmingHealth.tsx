import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Individual health against population growth across the same transition.
 *
 * Both move, in opposite directions, and the apparent paradox dissolves once
 * fertility and wellbeing are separated. That separation is the thing the topic
 * needs a reader to take away.
 */

const VIEWS = ['Individual health', 'Population'] as const;

interface Marker {
  readonly key: string;
  readonly before: number;
  readonly after: number;
  readonly reads: string;
}

const MARKERS: readonly Marker[] = [
  {
    key: 'Adult stature',
    before: 0.82,
    after: 0.68,
    reads:
      'Height is sensitive to childhood nutrition and disease load. It declines across the transition in most regions studied, and in some places does not recover for thousands of years.',
  },
  {
    key: 'Dental caries',
    before: 0.1,
    after: 0.5,
    reads:
      'Cavities reflect a diet high in fermentable carbohydrate. Cereal agriculture raises them sharply.',
  },
  {
    key: 'Enamel defects',
    before: 0.18,
    after: 0.45,
    reads:
      'Horizontal grooves in tooth enamel record periods when growth stopped during childhood, usually from illness or hunger. More grooves means more episodes.',
  },
  {
    key: 'Anaemia markers',
    before: 0.12,
    after: 0.42,
    reads:
      'Spongy, porous bone around the eye sockets and on the skull vault indicates chronic anaemia — consistent with a cereal-dominated diet and a heavy parasite load.',
  },
  {
    key: 'Infection markers',
    before: 0.15,
    after: 0.38,
    reads:
      'Periosteal reaction on long bones records chronic infection. Crowding and livestock raise it.',
  },
];

export default function FarmingHealth(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const [pick, setPick] = useState(0);
  const m = MARKERS[Math.min(pick, MARKERS.length - 1)];
  if (!m) return null;

  const LEFT = 122;
  const W = 210;

  return (
    <Stack>
      <Figure height={192}>
        {view === 0 ? (
          <g>
            <text x={LEFT} y={16} fontSize={8} fill={C.life}>
              foragers
            </text>
            <text x={LEFT + 118} y={16} fontSize={8} fill={C.hot}>
              early farmers
            </text>
            {MARKERS.map((x, i) => {
              const y = 36 + i * 28;
              const active = i === pick;
              return (
                <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
                  <text
                    x={LEFT - 8}
                    y={y + 9}
                    textAnchor="end"
                    fontSize={7.5}
                    fill={active ? C.life : C.dim}
                  >
                    {x.key}
                  </text>
                  <rect
                    x={LEFT}
                    y={y}
                    width={W / 2 - 4}
                    height={13}
                    rx={3}
                    fill="rgba(148,162,192,0.1)"
                  />
                  <rect
                    x={LEFT}
                    y={y}
                    width={(W / 2 - 4) * x.before}
                    height={13}
                    rx={3}
                    fill={C.life}
                    opacity={active ? 0.9 : 0.45}
                  />
                  <rect
                    x={LEFT + W / 2 + 4}
                    y={y}
                    width={W / 2 - 4}
                    height={13}
                    rx={3}
                    fill="rgba(148,162,192,0.1)"
                  />
                  <rect
                    x={LEFT + W / 2 + 4}
                    y={y}
                    width={(W / 2 - 4) * x.after}
                    height={13}
                    rx={3}
                    fill={C.hot}
                    opacity={active ? 0.9 : 0.45}
                  />
                </g>
              );
            })}
            <text x={14} y={184} fontSize={7} fill={C.faint}>
              schematic magnitudes of a direction that is well established
            </text>
          </g>
        ) : (
          <g>
            <text x={14} y={16} fontSize={8.5} fill={C.dim}>
              population, same transition
            </text>
            <path
              d="M30,150 C120,148 180,140 230,96 C270,60 300,40 350,30"
              fill="none"
              stroke={C.warm}
              strokeWidth={2.6}
            />
            <line x1={200} y1={26} x2={200} y2={158} stroke={C.life} strokeDasharray="3 3" />
            <text x={204} y={40} fontSize={8} fill={C.life}>
              farming adopted
            </text>
            <text x={30} y={168} fontSize={7.5} fill={C.faint}>
              earlier
            </text>
            <text x={350} y={168} textAnchor="end" fontSize={7.5} fill={C.faint}>
              later
            </text>
            <text x={14} y={186} fontSize={8} fill={C.warm}>
              more people, each of them on average worse off
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? `${m.key}. ${m.reads} Compare skeletons from just before and just after the adoption of farming in the same region and this pattern is consistent almost everywhere it has been examined.`
          : 'And yet population grew, fast. This looks like a contradiction only if you assume evolution favours health. It favours descendants. A settled life allows births closer together: a mobile forager carrying an infant cannot easily manage a second small child, which spaces births roughly four years apart, while a settled farmer can, and cereal gruel allows earlier weaning. More children per woman, by enough to outweigh higher infant mortality. The proportion of juvenile skeletons in cemetery samples rises markedly across the transition — the Neolithic demographic transition — indicating increased fertility rather than improved survival. Note also that once a region is farming, the population it supports cannot go back; there are too many people for the land to feed by foraging. The transition is a ratchet, and it was rarely a choice made by anyone with the information to evaluate it.'}
      </Note>
    </Stack>
  );
}
