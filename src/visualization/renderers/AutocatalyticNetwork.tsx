import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Metabolism-first, drawn as a set rather than a molecule.
 *
 * The idea is genuinely hard to picture, because nothing in the network is the
 * replicator — the network as a whole is. Removing one member and watching the
 * whole thing fail is the clearest way to show that, so the second view does
 * exactly that.
 */

interface Member {
  readonly id: string;
  readonly x: number;
  readonly y: number;
}

const MEMBERS: readonly Member[] = [
  { id: 'A', x: 190, y: 44 },
  { id: 'B', x: 262, y: 78 },
  { id: 'C', x: 244, y: 132 },
  { id: 'D', x: 136, y: 132 },
  { id: 'E', x: 118, y: 78 },
];

export default function AutocatalyticNetwork(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const removed = view === 1 ? 'C' : null;

  const notes = [
    'Each molecule catalyses the formation of the next, and the last catalyses the first. Feed the network with simple raw material and it makes more of itself — not because any one member is a replicator, but because the loop closes. Stuart Kauffman argued that in a sufficiently rich chemical mixture, sets like this become almost inevitable rather than improbable.',
    'Remove one member and the loop opens. Nothing makes C, so nothing makes D, and the whole set collapses. This is what "the network is the unit" means, and it is also the weakness: such a set has no way to store a sequence, so it is unclear how it could evolve open-endedly rather than merely persist.',
    'The version with the strongest chemical case puts this in a hydrothermal setting. Mineral surfaces — iron-sulphur compounds in particular, which resemble the catalytic centres still used in ancient enzymes — provide the catalysis, and the chemical gradient across the vent wall provides the energy. It is not necessary for anything to have been encoded at all.',
  ];

  return (
    <Stack>
      <Figure height={186}>
        {view === 2 ? (
          <g>
            <rect x={20} y={30} width={150} height={126} rx={4} fill="rgba(111,179,255,0.12)" />
            <rect x={170} y={30} width={190} height={126} rx={4} fill="rgba(255,143,110,0.10)" />
            <text x={95} y={46} textAnchor="middle" fontSize={9} fill={C.water}>
              cold alkaline seawater
            </text>
            <text x={265} y={46} textAnchor="middle" fontSize={9} fill={C.hot}>
              hot vent fluid
            </text>
            <rect x={162} y={30} width={16} height={126} fill="rgba(148,162,192,0.35)" />
            <text x={170} y={172} textAnchor="middle" fontSize={8} fill={C.dim}>
              mineral wall
            </text>
            {[60, 84, 108, 132].map((y) => (
              <g key={y}>
                <line x1={100} y1={y} x2={158} y2={y} stroke={C.life} strokeWidth={1.2} />
                <path d={`M158,${y} l-6,-3 l0,6 z`} fill={C.life} />
              </g>
            ))}
            <text x={128} y={150} textAnchor="middle" fontSize={8} fill={C.life}>
              proton gradient
            </text>
          </g>
        ) : (
          <g>
            {MEMBERS.map((m, i) => {
              const next = MEMBERS[(i + 1) % MEMBERS.length];
              if (!next) return null;
              const broken = removed === m.id || removed === next.id;
              return (
                <g key={`e${m.id}`}>
                  <line
                    x1={m.x}
                    y1={m.y}
                    x2={next.x}
                    y2={next.y}
                    stroke={broken ? 'rgba(255,143,110,0.35)' : C.life}
                    strokeWidth={1.6}
                    strokeDasharray={broken ? '4 4' : undefined}
                  />
                </g>
              );
            })}
            {MEMBERS.map((m) => (
              <g key={m.id}>
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={15}
                  fill={removed === m.id ? 'rgba(255,143,110,0.2)' : C.life}
                  opacity={removed === m.id ? 1 : 0.8}
                />
                <text
                  x={m.x}
                  y={m.y + 4}
                  textAnchor="middle"
                  fontSize={11}
                  fill={removed === m.id ? C.hot : '#12241f'}
                >
                  {removed === m.id ? '✕' : m.id}
                </text>
              </g>
            ))}
            <text
              x={190}
              y={176}
              textAnchor="middle"
              fontSize={8.5}
              fill={removed ? C.hot : C.life}
            >
              {removed
                ? 'the loop is open — the set stops making itself'
                : 'each member catalyses the next; the loop closes'}
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow
        label="View"
        options={['Closed loop', 'One removed', 'In a vent']}
        value={view}
        onChange={setView}
      />

      <Note>{notes[view]}</Note>
    </Stack>
  );
}
