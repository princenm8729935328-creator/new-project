import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Where eukaryotes sit on the tree, and how that answer changed.
 *
 * This is one of the few places where a genuine shift in scientific consensus
 * can be shown directly, so the figure shows both trees. The three-domain
 * picture was standard for thirty years; the Asgard discoveries moved
 * eukaryotes inside the archaea, and the current position is still being argued.
 */

export default function EukaryoteOrigin(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(1);

  return (
    <Stack>
      <Figure height={182}>
        {view === 0 ? (
          <g>
            <circle cx={40} cy={100} r={4.5} fill={C.warm} />
            <text x={40} y={118} textAnchor="middle" fontSize={8} fill={C.warm}>
              LUCA
            </text>
            <path d="M46,100 C120,100 150,44 260,44" fill="none" stroke={C.water} strokeWidth={2} />
            <path
              d="M46,100 C120,100 150,100 260,100"
              fill="none"
              stroke={C.deep}
              strokeWidth={2}
            />
            <path
              d="M46,100 C120,100 150,156 260,156"
              fill="none"
              stroke={C.life}
              strokeWidth={2}
            />
            <text x={268} y={47} fontSize={9.5} fill={C.water}>
              Bacteria
            </text>
            <text x={268} y={103} fontSize={9.5} fill={C.deep}>
              Archaea
            </text>
            <text x={268} y={159} fontSize={9.5} fill={C.life}>
              Eukarya
            </text>
            <text x={190} y={22} textAnchor="middle" fontSize={9} fill={C.dim}>
              three separate domains — the 1977 picture
            </text>
          </g>
        ) : (
          <g>
            <circle cx={30} cy={100} r={4.5} fill={C.warm} />
            <text x={30} y={118} textAnchor="middle" fontSize={8} fill={C.warm}>
              LUCA
            </text>
            <path d="M36,100 C100,100 120,44 250,44" fill="none" stroke={C.water} strokeWidth={2} />
            <path
              d="M36,100 C100,100 110,130 160,130"
              fill="none"
              stroke={C.deep}
              strokeWidth={2}
            />
            <path
              d="M160,130 C200,130 210,108 250,108"
              fill="none"
              stroke={C.deep}
              strokeWidth={1.6}
            />
            <path
              d="M160,130 C200,130 200,152 250,152"
              fill="none"
              stroke={C.deep}
              strokeWidth={1.6}
            />
            <path d="M210,118 C230,118 236,80 250,74" fill="none" stroke={C.life} strokeWidth={2} />
            <path
              d="M250,44 C232,50 224,66 250,74"
              fill="none"
              stroke={C.hot}
              strokeWidth={1.4}
              strokeDasharray="4 3"
            />
            <text x={258} y={47} fontSize={9.5} fill={C.water}>
              Bacteria
            </text>
            <text x={258} y={77} fontSize={9.5} fill={C.life}>
              Eukarya
            </text>
            <text x={258} y={111} fontSize={9} fill={C.deep}>
              Asgard archaea
            </text>
            <text x={258} y={155} fontSize={9} fill={C.deep}>
              other archaea
            </text>
            <text x={190} y={22} textAnchor="middle" fontSize={9} fill={C.dim}>
              eukaryotes inside the archaea — the current picture
            </text>
            <text x={130} y={168} fontSize={8} fill={C.hot}>
              dashed: the bacterial contribution (mitochondria)
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow
        label="Tree"
        options={['Three domains (1977)', 'Two domains (now)']}
        value={view}
        onChange={setView}
      />

      <Note>
        {view === 0 ? (
          <>
            Carl Woese established in 1977 that archaea are as distinct from bacteria as either is
            from us, using ribosomal RNA sequences. The three-domain tree was the textbook picture
            for three decades.
          </>
        ) : (
          <>
            In 2015 metagenomic sequencing of Arctic seafloor sediment turned up Lokiarchaeum, an
            archaeon carrying genes previously thought to be eukaryote-specific. Further Asgard
            groups followed, and one was finally cultured in 2020 after twelve years — it grows
            extremely slowly and extends long branching protrusions. Eukaryotes now appear to be a
            branch within the archaea rather than a third domain, with the mitochondrion contributed
            separately by a bacterium. The branching order within Asgard is still being argued.
          </>
        )}
      </Note>
    </Stack>
  );
}
