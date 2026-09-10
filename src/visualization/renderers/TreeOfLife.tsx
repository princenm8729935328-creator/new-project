import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The tree, drawn twice: as a diagram of relationships and as a diagram of
 * actual diversity.
 *
 * The first view is the familiar three-domain fan. The second scales each
 * branch by how many known lineages it contains, which makes animals a twig on
 * a twig — and that reframing does more work than any amount of text about how
 * bacteria dominate the biosphere.
 */

interface Branch {
  readonly name: string;
  readonly domain: 'Bacteria' | 'Archaea' | 'Eukarya';
  readonly share: number;
  readonly detail: string;
}

const BRANCHES: readonly Branch[] = [
  {
    name: 'Bacteria',
    domain: 'Bacteria',
    share: 0.72,
    detail:
      'Dozens of major phyla, most of which have never been cultured and are known only from environmental DNA. The 2016 tree that added the candidate phyla radiation roughly doubled the recognised diversity of bacteria in a single paper.',
  },
  {
    name: 'Archaea',
    domain: 'Archaea',
    share: 0.16,
    detail:
      'Recognised as a separate domain only in 1977, from ribosomal RNA sequences. They are not extremophile specialists as first thought — they are everywhere, including in your gut — and one archaeal group, the Asgards, is the closest known relative of eukaryotes.',
  },
  {
    name: 'Eukarya',
    domain: 'Eukarya',
    share: 0.12,
    detail:
      'Everything with a nucleus. Most eukaryotic diversity is single-celled protists; plants, animals and fungi together are three branches among many, and animals are one of them.',
  },
];

export default function TreeOfLife(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const [pick, setPick] = useState(0);
  const branch = BRANCHES[Math.min(pick, BRANCHES.length - 1)];

  const ROOT_X = 30;
  const ROOT_Y = 100;

  return (
    <Stack>
      <Figure height={196}>
        <circle cx={ROOT_X} cy={ROOT_Y} r={5} fill={C.warm} />
        <text x={ROOT_X} y={ROOT_Y + 18} textAnchor="middle" fontSize={8.5} fill={C.warm}>
          LUCA
        </text>

        {BRANCHES.map((b, i) => {
          const y = view === 0 ? 44 + i * 56 : 44 + (i === 0 ? 0 : i === 1 ? 74 : 108);
          const thickness = view === 1 ? 3 + b.share * 22 : 2.6;
          const colour =
            b.domain === 'Bacteria' ? C.water : b.domain === 'Archaea' ? C.deep : C.life;
          return (
            <g key={b.name} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <path
                d={`M${ROOT_X + 6},${ROOT_Y} C120,${ROOT_Y} 150,${y} 250,${y}`}
                fill="none"
                stroke={colour}
                strokeWidth={thickness}
                opacity={i === pick ? 1 : 0.55}
              />
              <text x={258} y={y + 3} fontSize={9.5} fill={colour}>
                {b.name}
              </text>
              {view === 1 ? (
                <text
                  x={258}
                  y={y + 14}
                  fontSize={8}
                  fill={C.faint}
                  fontFamily="ui-monospace, monospace"
                >
                  ≈ {Math.round(b.share * 100)}% of known lineages
                </text>
              ) : null}
            </g>
          );
        })}

        {view === 1 ? (
          <g>
            <line x1={306} y1={152} x2={330} y2={168} stroke={C.life} strokeWidth={1.2} />
            <text x={334} y={172} fontSize={7.5} fill={C.life}>
              animals
            </text>
          </g>
        ) : null}

        <text x={190} y={190} textAnchor="middle" fontSize={8.5} fill={C.faint}>
          {view === 0
            ? 'branch positions show relationships'
            : 'branch thickness shows share of known diversity'}
        </text>
      </Figure>

      <ToggleRow
        label="View"
        options={['Relationships', 'Scaled by diversity']}
        value={view}
        onChange={setView}
      />

      <Note>
        {branch ? (
          <>
            <strong>{branch.name}.</strong> {branch.detail} This is a simplified three-branch
            diagram; published trees resolve thousands of lineages, and horizontal gene transfer
            between distant branches means the deepest relationships are better described as a
            network than a clean tree.
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
