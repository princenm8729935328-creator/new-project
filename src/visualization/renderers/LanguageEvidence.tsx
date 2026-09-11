import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Every proxy that has been proposed for the origin of language, and its fate.
 *
 * Most of these were announced as settling the question and did not. Laying out
 * the graveyard is more useful than describing the one or two that survive,
 * because it calibrates how to read the next such announcement.
 */

interface Proxy {
  readonly key: string;
  readonly status: 'failed' | 'weak' | 'suggestive';
  readonly claim: string;
  readonly outcome: string;
}

const PROXIES: readonly Proxy[] = [
  {
    key: 'Hypoglossal canal',
    status: 'failed',
    claim:
      'The canal carrying the nerve to the tongue was proposed as a proxy for fine motor control of speech, with larger canals implying speech.',
    outcome:
      'It varies too much among living primates of known vocal ability to be diagnostic. Withdrawn as evidence.',
  },
  {
    key: 'Vocal tract shape',
    status: 'failed',
    claim:
      'Reconstructions of the Neanderthal vocal tract from fossil skulls were used to argue they could not produce the full range of human vowels.',
    outcome:
      'The reconstructions depend on assumptions about soft tissue that does not survive, and later work with different assumptions reversed the conclusion.',
  },
  {
    key: 'FOXP2',
    status: 'failed',
    claim:
      'A gene identified through a family with an inherited speech disorder; humans carry two amino acid changes chimpanzees lack, and early analysis suggested a recent selective sweep. Widely reported as the language gene.',
    outcome:
      'It is a regulatory gene active in many tissues and species, the family’s disorder involves general orofacial motor control, Neanderthals carry the same two changes, and the sweep signal did not survive larger and more diverse samples.',
  },
  {
    key: 'Hyoid bone',
    status: 'weak',
    claim:
      'A Neanderthal hyoid — the small bone that anchors the tongue muscles — turned out to be essentially modern in form.',
    outcome:
      'True, and it establishes little. A hyoid indicates the anatomy was available; it says nothing about what was done with it.',
  },
  {
    key: 'Ear anatomy',
    status: 'suggestive',
    claim:
      'Modelled hearing from fossil ear bones shows Neanderthals sensitive across the same narrow frequency band that carries most of the information in human speech — a band chimpanzee hearing does not emphasise.',
    outcome:
      'The strongest surviving indirect evidence. Auditory tuning to a speech-relevant band is hard to explain unless something speech-like was being listened to — though the tuning could serve other vocal communication, and hearing is modelled rather than measured.',
  },
  {
    key: 'Archaeology',
    status: 'suggestive',
    claim:
      'Multi-step technical recipes, long-distance material transport and transmission experiments showing stone knapping transmits poorly without teaching.',
    outcome:
      'Constrains rather than dates. It suggests some form of instruction, and instruction does not require language in the full modern sense.',
  },
];

const COLOURS: Record<Proxy['status'], string> = {
  failed: C.hot,
  weak: C.warm,
  suggestive: C.life,
};

const LABELS: Record<Proxy['status'], string> = {
  failed: 'did not hold up',
  weak: 'true but uninformative',
  suggestive: 'suggestive, not decisive',
};

export default function LanguageEvidence(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(4);
  const p = PROXIES[Math.min(pick, PROXIES.length - 1)];
  if (!p) return null;

  return (
    <Stack>
      <Figure height={192}>
        <text x={14} y={16} fontSize={8.5} fill={C.dim}>
          proposed evidence for when language began
        </text>
        {PROXIES.map((x, i) => {
          const y = 36 + i * 25;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={14}
                y={y - 11}
                width={352}
                height={21}
                rx={4}
                fill={active ? 'rgba(148,162,192,0.14)' : 'transparent'}
              />
              <circle cx={26} cy={y - 1} r={4} fill={COLOURS[x.status]} />
              <text
                x={38}
                y={y + 2}
                fontSize={8.5}
                fill={active ? 'rgba(233,238,247,0.95)' : C.dim}
              >
                {x.key}
              </text>
              <text x={360} y={y + 2} textAnchor="end" fontSize={7.5} fill={COLOURS[x.status]}>
                {LABELS[x.status]}
              </text>
            </g>
          );
        })}
        <text x={14} y={184} fontSize={7.5} fill={C.faint}>
          speech leaves no direct trace: every entry here is an indirect argument
        </text>
      </Figure>

      <ToggleRow
        label="Proxy"
        options={PROXIES.map((x) => x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>{p.key}.</strong> {p.claim} <strong>What happened:</strong> {p.outcome} The field
        currently ranges from claims of a recent origin under 100,000 years to a shared origin
        before the split between our lineage and the Neanderthals. The disagreement is not primarily
        about the evidence — both sides accept the same data — but about what would count as
        language, which is a definitional dispute that evidence alone cannot settle. It is worth
        being blunt about the prospects: there is no known trace that language leaves in bone, stone
        or DNA that could be read unambiguously, and some researchers argue the origin of language
        may be permanently beyond direct evidence.
      </Note>
    </Stack>
  );
}
