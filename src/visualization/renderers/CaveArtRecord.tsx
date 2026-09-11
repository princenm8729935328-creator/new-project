import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Dated cave art across three regions, with the disputed entry marked as disputed.
 *
 * A figure that showed only the accepted dates would misrepresent the field;
 * one that showed the Iberian dates unqualified would misrepresent the
 * evidence. Both are on the chart, distinguished.
 */

interface Site {
  readonly key: string;
  readonly region: string;
  readonly ka: number;
  readonly disputed: boolean;
  readonly detail: string;
}

const SITES: readonly Site[] = [
  {
    key: 'Iberian markings',
    region: 'Spain',
    ka: 65,
    disputed: true,
    detail:
      'A ladder-like shape, hand stencils and painted dots in three caves, dated by measuring the carbonate crust that grew over the pigment. Minimum ages exceed 64,800 years — more than twenty thousand years before Homo sapiens is known in Iberia, which would make them Neanderthal. The objection is technical rather than ideological: the method assumes the carbonate has behaved as a closed system, and cave carbonates can gain or lose uranium, which would inflate the apparent age. Unresolved.',
  },
  {
    key: 'Sulawesi hunting scene',
    region: 'Indonesia',
    ka: 44,
    disputed: false,
    detail:
      'Figurative animals with small human-like figures apparently holding ropes or spears. Described as the earliest known narrative scene, though reading it as a single composition is an interpretation rather than a dating result.',
  },
  {
    key: 'Borneo animal figures',
    region: 'Indonesia',
    ka: 40,
    disputed: false,
    detail:
      'Large animal figures, establishing that figurative art of this age exists on the other side of the world from Europe. The capacity travelled with people rather than emerging in one place.',
  },
  {
    key: 'El Castillo discs',
    region: 'Spain',
    ka: 41,
    disputed: false,
    detail: 'Red discs and hand stencils, among the oldest securely dated art in Europe.',
  },
  {
    key: 'Chauvet',
    region: 'France',
    ka: 36,
    disputed: false,
    detail:
      'Overlapping figures suggesting movement, shading to indicate volume, and use of the wall’s own contours to give an animal a shoulder. Not the crude beginning of a tradition — a tradition already mature.',
  },
  {
    key: 'Lascaux',
    region: 'France',
    ka: 17,
    disputed: false,
    detail:
      'The best-known cave, and much later than the earliest. When Altamira was published in 1880 it was dismissed as a forgery because the paintings were too good; the man who reported it died before the dating was accepted.',
  },
];

export default function CaveArtRecord(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const s = SITES[Math.min(pick, SITES.length - 1)];
  if (!s) return null;

  const LEFT = 24;
  const W = 332;
  const toX = (ka: number): number => LEFT + W - (ka / 72) * W;

  return (
    <Stack>
      <Figure height={186}>
        <line
          x1={LEFT}
          y1={130}
          x2={LEFT + W}
          y2={130}
          stroke="rgba(148,162,192,0.3)"
          strokeWidth={2}
        />
        {[70, 60, 50, 40, 30, 20, 10].map((ka) => (
          <g key={ka}>
            <line x1={toX(ka)} y1={130} x2={toX(ka)} y2={135} stroke="rgba(148,162,192,0.3)" />
            <text x={toX(ka)} y={146} textAnchor="middle" fontSize={7} fill={C.faint}>
              {ka}
            </text>
          </g>
        ))}
        <text x={LEFT + W / 2} y={160} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          thousands of years ago
        </text>

        {SITES.map((x, i) => {
          const y = 30 + (i % 4) * 22;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <line
                x1={toX(x.ka)}
                y1={y + 4}
                x2={toX(x.ka)}
                y2={128}
                stroke={x.disputed ? C.hot : C.life}
                strokeWidth={active ? 1.8 : 0.9}
                strokeDasharray={x.disputed ? '3 3' : undefined}
                opacity={active ? 1 : 0.55}
              />
              <circle
                cx={toX(x.ka)}
                cy={130}
                r={active ? 6 : 3.6}
                fill={x.disputed ? C.hot : C.life}
              />
              <text
                x={toX(x.ka)}
                y={y}
                textAnchor="middle"
                fontSize={7.5}
                fill={active ? (x.disputed ? C.hot : C.life) : C.faint}
              >
                {x.key.length > 18 ? `${x.key.slice(0, 17)}…` : x.key}
              </text>
            </g>
          );
        })}
        <circle cx={LEFT + 6} cy={176} r={4} fill={C.hot} />
        <text x={LEFT + 16} y={179} fontSize={7.5} fill={C.faint}>
          dating disputed
        </text>
      </Figure>

      <ToggleRow
        label="Site"
        options={SITES.map((x) => x.key.split(' ')[0] ?? x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>
          {s.key}, {s.region} — {s.ka} ka.
        </strong>{' '}
        {s.detail} One structural point applies to everything on this chart: art survives where
        nothing disturbs it, which means deep chambers with stable temperature and humidity.
        Whatever was painted on rock shelters, on skin, on bark or on wood is entirely gone. So this
        is not a sample of what was made — it is a sample of what happened to be made in the few
        places that preserve anything for forty thousand years. Both the geography and the subject
        matter of prehistoric art are filtered by that.
      </Note>
    </Stack>
  );
}
