import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Modern traits appearing in different combinations at different African sites.
 *
 * A single-cradle model predicts a package appearing together in one place. The
 * trait grid shows what the record actually contains, which is why the field
 * moved to a structured pan-African account.
 */

interface Site {
  readonly key: string;
  readonly where: string;
  readonly ka: number;
  readonly face: boolean;
  readonly braincase: boolean;
  readonly teeth: boolean;
  readonly note: string;
}

const SITES: readonly Site[] = [
  {
    key: 'Jebel Irhoud',
    where: 'Morocco',
    ka: 315,
    face: true,
    braincase: false,
    teeth: true,
    note: 'Found in the 1960s, long assumed to be about 40,000 years old, redated in 2017 to around 315,000 by thermoluminescence on heated flints from the same layers. A modern face on an elongated, archaic braincase — and in North Africa, five thousand kilometres from the supposed cradle.',
  },
  {
    key: 'Florisbad',
    where: 'South Africa',
    ka: 260,
    face: true,
    braincase: false,
    teeth: false,
    note: 'A partial cranium with a broad, relatively modern face and an archaic vault. Another combination, on the other end of the continent.',
  },
  {
    key: 'Omo Kibish',
    where: 'Ethiopia',
    ka: 195,
    face: true,
    braincase: true,
    teeth: true,
    note: 'For decades the oldest securely dated Homo sapiens, and still among the clearest. East Africa did not drop out of the picture — it stopped being the only place in it.',
  },
  {
    key: 'Herto',
    where: 'Ethiopia',
    ka: 160,
    face: true,
    braincase: true,
    teeth: true,
    note: 'Well-preserved crania close to the modern range, with cut marks suggesting post-mortem treatment of the dead.',
  },
];

const TRAITS = [
  { key: 'face', label: 'modern face' },
  { key: 'braincase', label: 'globular braincase' },
  { key: 'teeth', label: 'reduced teeth' },
] as const;

export default function SapiensOrigins(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const site = SITES[Math.min(pick, SITES.length - 1)];
  if (!site) return null;

  const LEFT = 116;
  const COL = 78;

  return (
    <Stack>
      <Figure height={186}>
        {TRAITS.map((t, c) => (
          <text
            key={t.key}
            x={LEFT + c * COL + COL / 2}
            y={24}
            textAnchor="middle"
            fontSize={7.5}
            fill={C.dim}
          >
            {t.label}
          </text>
        ))}
        {SITES.map((s, i) => {
          const y = 48 + i * 30;
          const active = i === pick;
          return (
            <g key={s.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={10}
                y={y - 13}
                width={356}
                height={26}
                rx={4}
                fill={active ? 'rgba(79,224,192,0.1)' : 'transparent'}
              />
              <text x={18} y={y} fontSize={8.5} fill={active ? C.life : C.dim}>
                {s.key}
              </text>
              <text x={18} y={y + 10} fontSize={7} fill={C.faint}>
                {s.where} · {s.ka} ka
              </text>
              {TRAITS.map((t, c) => (
                <text
                  key={t.key}
                  x={LEFT + c * COL + COL / 2}
                  y={y + 3}
                  textAnchor="middle"
                  fontSize={13}
                  fill={s[t.key] ? C.life : C.hot}
                >
                  {s[t.key] ? '✓' : '✕'}
                </text>
              ))}
            </g>
          );
        })}
        <text x={10} y={178} fontSize={8} fill={C.warm}>
          no site has everything, and the combinations differ
        </text>
      </Figure>

      <ToggleRow label="Site" options={SITES.map((s) => s.key)} value={pick} onChange={setPick} />

      <Note>
        <strong>
          {site.key}, {site.where} — {site.ka} ka.
        </strong>{' '}
        {site.note} The pattern across the continent is the finding: modern traits appear in
        different combinations at widely separated places over more than 200,000 years, never all at
        once and never at one site. That is what a structured population looks like. If groups
        across Africa were partly separated but exchanged people periodically, a trait arising in
        one region would spread gradually and different combinations would exist simultaneously — so
        there is no single origin point, because the origin is distributed. Genomic evidence
        supports the same picture independently, showing deep divergences between some African
        lineages and coalescence patterns implying ancestral structure. It also means there was no
        first Homo sapiens: every individual in this story had parents of the same species as
        itself, and the name marks a region of a continuum we find it convenient to divide.
      </Note>
    </Stack>
  );
}
