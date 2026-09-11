import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Two records that appeared to contradict each other, and the resolution.
 *
 * Fossils say who was present; genetics of living people says who left
 * descendants who are still here. Showing them as separate tracks makes the
 * resolution obvious rather than something the reader has to be told.
 */

const VIEWS = ['Fossil record', 'Genetic record', 'Both'] as const;

interface Event {
  readonly ka: number;
  readonly label: string;
  readonly kind: 'fossil' | 'genetic';
  readonly detail: string;
}

const EVENTS: readonly Event[] = [
  {
    ka: 180,
    label: 'Misliya, Levant',
    kind: 'fossil',
    detail:
      'An upper jaw with modern features, outside Africa at around 180,000 years — far earlier than the dispersal that populated the world.',
  },
  {
    ka: 120,
    label: 'Skhul and Qafzeh',
    kind: 'fossil',
    detail:
      'Modern humans in the Levant, with burials and ornaments. They were there for tens of thousands of years, overlapping with Neanderthals in the same region.',
  },
  {
    ka: 100,
    label: 'Southern China teeth',
    kind: 'fossil',
    detail:
      'Modern-looking teeth reported from Chinese caves at 80–120 thousand years. Dating has been questioned; if correct, another early presence that left no descendants.',
  },
  {
    ka: 60,
    label: 'The successful expansion',
    kind: 'genetic',
    detail:
      'Essentially all non-African ancestry today traces to an expansion around 50,000–60,000 years ago. It is a single event as far as the genomes of living people can resolve.',
  },
  {
    ka: 55,
    label: 'Neanderthal admixture',
    kind: 'genetic',
    detail:
      'Dated from the length of introgressed segments in a 45,000-year-old Siberian genome: shortly after the expansion, and before the split between the ancestors of Europeans and East Asians.',
  },
  {
    ka: 45,
    label: 'Ust’-Ishim',
    kind: 'genetic',
    detail:
      'A 45,000-year-old modern human genome from western Siberia, carrying much longer Neanderthal segments than anyone alive — which is how the admixture was dated.',
  },
];

export default function SapiensDispersal(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(2);
  const [pick, setPick] = useState(3);
  const event = EVENTS[Math.min(pick, EVENTS.length - 1)];
  if (!event) return null;

  const LEFT = 28;
  const W = 330;
  const toX = (ka: number): number => LEFT + W - (ka / 200) * W;
  const shown = EVENTS.filter(
    (e) =>
      view === 2 || (view === 0 && e.kind === 'fossil') || (view === 1 && e.kind === 'genetic'),
  );

  return (
    <Stack>
      <Figure height={208}>
        {/* Each track stacks its labels rather than putting them on one
            baseline: the events cluster in time, so a single line of centred
            labels overlapped itself and the track heading. */}
        <text x={LEFT} y={16} fontSize={8.5} fill={C.warm}>
          who was present — fossils
        </text>
        <line
          x1={LEFT}
          y1={78}
          x2={LEFT + W}
          y2={78}
          stroke="rgba(255,210,127,0.4)"
          strokeWidth={3}
        />

        <text x={LEFT} y={100} fontSize={8.5} fill={C.life}>
          who left descendants alive today — genomes
        </text>
        <line
          x1={LEFT}
          y1={124}
          x2={LEFT + W}
          y2={124}
          stroke="rgba(79,224,192,0.4)"
          strokeWidth={3}
        />

        {shown.map((e) => {
          const fossil = e.kind === 'fossil';
          const y = fossil ? 78 : 124;
          const rank = EVENTS.filter((x) => x.kind === e.kind).indexOf(e);
          const labelY = fossil ? 66 - rank * 11 : 140 + rank * 11;
          const active = EVENTS[pick]?.label === e.label;
          return (
            <g
              key={e.label}
              onClick={() => setPick(EVENTS.findIndex((x) => x.label === e.label))}
              style={{ cursor: 'pointer' }}
            >
              <line
                x1={toX(e.ka)}
                y1={y}
                x2={toX(e.ka)}
                y2={labelY + (fossil ? 3 : -7)}
                stroke={fossil ? 'rgba(255,210,127,0.35)' : 'rgba(79,224,192,0.3)'}
                strokeWidth={1}
              />
              <circle cx={toX(e.ka)} cy={y} r={active ? 7 : 4.5} fill={fossil ? C.warm : C.life} />
              <text
                x={toX(e.ka)}
                y={labelY}
                textAnchor="middle"
                fontSize={7.5}
                fill={active ? (fossil ? C.warm : C.life) : C.faint}
              >
                {e.label.length > 20 ? `${e.label.slice(0, 19)}\u2026` : e.label}
              </text>
            </g>
          );
        })}

        <line x1={LEFT} y1={182} x2={LEFT + W} y2={182} stroke="rgba(148,162,192,0.25)" />
        {[200, 150, 100, 50, 0].map((ka) => (
          <g key={ka}>
            <line x1={toX(ka)} y1={182} x2={toX(ka)} y2={188} stroke="rgba(148,162,192,0.35)" />
            <text x={toX(ka)} y={200} textAnchor="middle" fontSize={7} fill={C.faint}>
              {ka === 0 ? 'now' : `${ka} ka`}
            </text>
          </g>
        ))}
      </Figure>

      <ToggleRow label="Show" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        <strong>
          {event.label} — {event.ka} ka.
        </strong>{' '}
        {event.detail} For years these two records seemed to contradict each other: fossils put Homo
        sapiens outside Africa at 180,000 years, while genetics said everyone outside Africa
        descends from a dispersal around 50,000 to 60,000. The resolution is that they answer
        different questions. A population can be present, live for tens of thousands of years, and
        contribute nothing measurable to anyone alive — because it died out, or was absorbed, or its
        descendants did not survive. The successful expansion also left a permanent mark: the group
        that left was small, and a small founding group carries only a fraction of its parent
        population’s variation. Repeated with each new founding, that produces a smooth decline in
        genetic diversity with distance from Africa, which is exactly what is observed — and it is
        why African populations retain more genetic variation than all non-African populations
        combined.
      </Note>
    </Stack>
  );
}
