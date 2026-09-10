import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * The transitions listed with the conflict each had to suppress.
 *
 * Listing them alone would invite reading the list as rungs on a ladder. The
 * third column — how lower-level competition was prevented — is what makes it a
 * structural claim rather than a chronology.
 */

interface Transition {
  readonly from: string;
  readonly to: string;
  readonly suppression: string;
  readonly detail: string;
}

const TRANSITIONS: readonly Transition[] = [
  {
    from: 'separate replicating molecules',
    to: 'chromosomes',
    suppression: 'linkage',
    detail:
      'Molecules that replicated independently became physically linked, so a fast replicator could no longer outgrow its neighbours — they now succeed or fail together. This also allowed genomes far larger than any single replicator could maintain.',
  },
  {
    from: 'independent genes',
    to: 'fair meiosis',
    suppression: 'equal chances',
    detail:
      'Meiosis gives each copy of a gene an equal chance of entering a gamete, which removes the payoff for cheating. Where it fails, meiotic drive elements do exactly what the system exists to prevent — and they are rare precisely because the machinery works.',
  },
  {
    from: 'separate cells',
    to: 'complex cells',
    suppression: 'uniparental inheritance',
    detail:
      'Mitochondria are inherited from one parent only, so different mitochondrial lineages never compete inside a cell. Where this breaks down, as in some plants, the result is selfish mitochondria causing male sterility.',
  },
  {
    from: 'single cells',
    to: 'multicellular bodies',
    suppression: 'clonal development',
    detail:
      'A body develops from one cell, so all its cells are near-identical and a cell helping the body propagates its own genes. Cancer is what happens when mutation breaks that identity, and the extensive machinery suppressing it shows how continuous the conflict is.',
  },
  {
    from: 'solitary individuals',
    to: 'eusocial colonies',
    suppression: 'a single queen',
    detail:
      'Sterile castes make sense when all colony members are close relatives of one reproductive individual. Worker policing — workers destroying eggs laid by other workers — enforces it where relatedness alone is not enough.',
  },
  {
    from: 'individual learning',
    to: 'cultural inheritance',
    suppression: 'still in progress',
    detail:
      'Information passing between individuals rather than only from parent to offspring, orders of magnitude faster than genetic inheritance. It is the only entry on this list still visibly running, and what it settles into is not something anyone can report.',
  },
];

export default function MajorTransitions(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(3);
  const t = TRANSITIONS[Math.min(pick, TRANSITIONS.length - 1)];
  const ROW = 27;

  return (
    <Stack>
      <Figure height={22 + TRANSITIONS.length * ROW + 8}>
        <text x={8} y={11} fontSize={9} fill={C.dim}>
          separate units → one unit · and what stops the parts competing
        </text>
        {TRANSITIONS.map((tr, i) => (
          <g key={tr.to} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
            <rect
              x={6}
              y={18 + i * ROW}
              width={368}
              height={ROW - 4}
              rx={3}
              fill={i === pick ? 'rgba(148,162,192,0.16)' : C.panel}
            />
            <text x={14} y={30 + i * ROW} fontSize={8} fill={C.faint}>
              {tr.from}
            </text>
            <text x={14} y={40 + i * ROW} fontSize={9} fill={C.life}>
              → {tr.to}
            </text>
            <text x={368} y={35 + i * ROW} textAnchor="end" fontSize={8} fill={C.warm}>
              {tr.suppression}
            </text>
          </g>
        ))}
      </Figure>

      <Note>
        {t ? (
          <>
            <strong>{t.to}.</strong> {t.detail} The list is usually given in chronological order,
            which makes it look like rungs. It is not: most lineages have been through only the
            first of these, and bacteria have been extremely successful without the rest. Their
            rarity is the interesting feature.
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
