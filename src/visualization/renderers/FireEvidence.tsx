import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The three different achievements that all get called "control of fire",
 * against the sites that actually demonstrate each.
 *
 * The gap between first use and habitual use is the load-bearing feature, since
 * the cooking hypothesis needs fire early and the record puts habitual use late.
 */

interface Claim {
  readonly key: string;
  readonly ka: number;
  readonly site: string;
  readonly strength: 'strong' | 'contested' | 'absent';
  readonly detail: string;
}

const CLAIMS: readonly Claim[] = [
  {
    key: 'Koobi Fora burnt patches',
    ka: 1600,
    site: 'Kenya',
    strength: 'contested',
    detail:
      'Patches of baked sediment associated with artefacts. Lightning-started fires are common in African grassland and bake sediment the same way, so distinguishing a hearth from a burnt tree stump is extremely difficult at open-air sites.',
  },
  {
    key: 'Wonderwerk Cave',
    ka: 1000,
    site: 'South Africa',
    strength: 'strong',
    detail:
      'Ashed plant material and burnt bone, heated in place, thirty metres inside a cave where wildfire cannot reach. Micromorphology and spectroscopy confirm in-situ heating. This is the oldest widely accepted evidence of fire use — use, not fire-making, and not habitual use.',
  },
  {
    key: 'Gesher Benot Ya‘aqov',
    ka: 790,
    site: 'Israel',
    strength: 'strong',
    detail:
      'Burnt flint clustered in the same locations across many successive occupation layers. Repetition in the same spots over long periods is hard to produce by accident, which is what makes this a case for control rather than encounter.',
  },
  {
    key: 'Most European sites',
    ka: 500,
    site: 'Europe',
    strength: 'absent',
    detail:
      'Well-excavated sites older than about 400,000 years generally show no fire evidence at all — including sites where it would have been preserved. Hominins appear to have occupied northern Europe during cold stages apparently without it.',
  },
  {
    key: 'Habitual use in Europe',
    ka: 350,
    site: 'multiple',
    strength: 'strong',
    detail:
      'From roughly this point fire evidence becomes consistent rather than occasional. Whether that reflects the real onset of habitual use or the point at which the evidence becomes visible is the question the whole debate turns on.',
  },
];

const COLOURS: Record<Claim['strength'], string> = {
  strong: C.life,
  contested: C.warm,
  absent: C.hot,
};

export default function FireEvidence(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const c = CLAIMS[Math.min(pick, CLAIMS.length - 1)];
  if (!c) return null;

  const LEFT = 24;
  const W = 330;
  const toX = (ka: number): number => LEFT + W - ((Math.log10(Math.max(ka, 100)) - 2) / 1.3) * W;

  return (
    <Stack>
      <Figure height={186}>
        <text x={LEFT} y={16} fontSize={8.5} fill={C.dim}>
          three different things get called “control of fire”
        </text>
        {['using a fire that started itself', 'keeping one alight', 'making one from nothing'].map(
          (s, i) => (
            <text key={s} x={LEFT + i * 118} y={32} fontSize={7} fill={C.faint}>
              {i + 1}. {s}
            </text>
          ),
        )}

        <line
          x1={LEFT}
          y1={110}
          x2={LEFT + W}
          y2={110}
          stroke="rgba(148,162,192,0.3)"
          strokeWidth={2}
        />
        {[1600, 1000, 500, 250, 125].map((ka) => (
          <g key={ka}>
            <line x1={toX(ka)} y1={110} x2={toX(ka)} y2={115} stroke="rgba(148,162,192,0.35)" />
            <text x={toX(ka)} y={126} textAnchor="middle" fontSize={7} fill={C.faint}>
              {ka >= 1000 ? `${ka / 1000} Ma` : `${ka} ka`}
            </text>
          </g>
        ))}

        {CLAIMS.map((x, i) => {
          const active = i === pick;
          const y = 56 + (i % 3) * 16;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <line
                x1={toX(x.ka)}
                y1={y + 6}
                x2={toX(x.ka)}
                y2={108}
                stroke={COLOURS[x.strength]}
                strokeWidth={active ? 1.8 : 0.9}
                opacity={active ? 1 : 0.5}
              />
              <circle cx={toX(x.ka)} cy={108} r={active ? 6 : 3.6} fill={COLOURS[x.strength]} />
              <text
                x={toX(x.ka)}
                y={y}
                textAnchor="middle"
                fontSize={7.5}
                fill={active ? COLOURS[x.strength] : C.faint}
              >
                {x.key.length > 20 ? `${x.key.slice(0, 19)}…` : x.key}
              </text>
            </g>
          );
        })}

        {[
          ['strong', 'in-situ heating demonstrated'],
          ['contested', 'could be natural fire'],
          ['absent', 'no fire evidence where it should survive'],
        ].map(([k, label], i) => (
          <g key={k}>
            <circle cx={LEFT + 6} cy={146 + i * 14} r={4} fill={COLOURS[k as Claim['strength']]} />
            <text x={LEFT + 16} y={149 + i * 14} fontSize={7.5} fill={C.faint}>
              {label}
            </text>
          </g>
        ))}
      </Figure>

      <ToggleRow
        label="Site"
        options={CLAIMS.map((x) => x.key.split(' ')[0] ?? x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>
          {c.key} — {c.site}, ~{c.ka >= 1000 ? `${c.ka / 1000} million` : `${c.ka} thousand`} years
          ago.
        </strong>{' '}
        {c.detail} What distinguishes a hearth from a wildfire is heating in place, repeatedly, in
        one spot — which leaves signatures in the microscopic structure of the sediment. Applied
        rigorously, that test removes most claimed early fire evidence. The awkward result is the
        gap: if fire was in use a million years ago, sites from the following half-million years
        should show it routinely, and they do not. Either use was occasional and opportunistic for a
        very long time before becoming habitual, or habitual use is older and the evidence is
        systematically missing. The absence is hardest to dismiss where preservation is otherwise
        excellent, and that is where it is most consistently found.
      </Note>
    </Stack>
  );
}
