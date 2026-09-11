import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * How long each technology lasted, drawn on a log axis.
 *
 * A linear axis would make everything after the Acheulean an invisible sliver.
 * The log axis is the honest choice and it still shows the collapse in duration
 * clearly — which is the thing that needs explaining.
 */

interface Tech {
  readonly key: string;
  readonly from: number;
  readonly to: number;
  readonly detail: string;
}

const TECHS: readonly Tech[] = [
  {
    key: 'Lomekwian?',
    from: 3300000,
    to: 2600000,
    detail:
      'Large flakes struck by hammering a core against an anvil, claimed at 3.3 million years — before any securely identified member of Homo. Contested: critics argue some pieces could result from natural fracture, and no comparable assemblage has turned up elsewhere.',
  },
  {
    key: 'Oldowan',
    from: 2600000,
    to: 1700000,
    detail:
      'Cores struck to produce sharp flakes. Simple in form and not simple to make. Roughly 900,000 years with no cumulative directional change.',
  },
  {
    key: 'Acheulean',
    from: 1760000,
    to: 300000,
    detail:
      'The handaxe: symmetrical in three dimensions, requiring the final shape to be planned before starting. Then essentially unchanged for a million and a half years, across Africa, Europe and Asia, while brain size was increasing throughout. This is the stasis that needs explaining.',
  },
  {
    key: 'Middle Stone Age',
    from: 300000,
    to: 40000,
    detail:
      'Prepared-core methods: shaping a core so that one final blow detaches a flake of predetermined form. Alongside it, pigment, ornament and long-distance material transport. Change becomes visible within the period rather than between periods.',
  },
  {
    key: 'Upper Palaeolithic',
    from: 45000,
    to: 12000,
    detail:
      'Blade technology, bone and antler working, needles, spear-throwers, and regionally distinct styles that change every few thousand years. Population densities rise over the same interval, and modelling suggests that alone is sufficient to produce the change.',
  },
  {
    key: 'Since farming',
    from: 12000,
    to: 0,
    detail:
      'Metallurgy, writing, wheels, engines, electronics. Several transformations per century, and lately per decade.',
  },
];

export default function TechnologicalStasis(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(2);
  const tech = TECHS[Math.min(pick, TECHS.length - 1)];
  if (!tech) return null;

  const LEFT = 108;
  const W = 244;
  const logMin = 3.7;
  const logMax = 6.6;
  const toW = (years: number): number =>
    Math.max(((Math.log10(Math.max(years, 5000)) - logMin) / (logMax - logMin)) * W, 6);

  return (
    <Stack>
      <Figure height={198}>
        <text x={LEFT} y={16} fontSize={8.5} fill={C.dim}>
          how long each technology persisted
        </text>
        {TECHS.map((t, i) => {
          const y = 34 + i * 25;
          const active = i === pick;
          const dur = t.from - t.to;
          return (
            <g key={t.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <text
                x={LEFT - 8}
                y={y + 4}
                textAnchor="end"
                fontSize={8}
                fill={active ? C.life : C.dim}
              >
                {t.key}
              </text>
              <rect
                x={LEFT}
                y={y - 6}
                width={toW(dur)}
                height={13}
                rx={3}
                fill={active ? C.warm : 'rgba(255,210,127,0.4)'}
              />
              <text x={LEFT + toW(dur) + 6} y={y + 4} fontSize={7.5} fill={C.faint}>
                {dur >= 1000000
                  ? `${(dur / 1000000).toFixed(1)} Myr`
                  : `${Math.round(dur / 1000)} kyr`}
              </text>
            </g>
          );
        })}
        {[10000, 100000, 1000000].map((v) => (
          <g key={v}>
            <line
              x1={LEFT + toW(v)}
              y1={26}
              x2={LEFT + toW(v)}
              y2={180}
              stroke="rgba(148,162,192,0.12)"
            />
            <text x={LEFT + toW(v)} y={178} textAnchor="middle" fontSize={7} fill={C.faint}>
              {v >= 1000000 ? '1 Myr' : `${v / 1000} kyr`}
            </text>
          </g>
        ))}
        <text x={LEFT} y={194} fontSize={7} fill={C.faint}>
          logarithmic scale — each gridline is ten times the last
        </text>
      </Figure>

      <ToggleRow
        label="Technology"
        options={TECHS.map((t) => t.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>{tech.key}.</strong> {tech.detail} The axis is logarithmic, which understates the
        contrast: the Acheulean ran for roughly a hundred thousand generations without a noticeable
        improvement, and the makers were not incapable of change — the handaxe itself was an
        innovation, and brains were growing throughout. Several explanations compete. Transmission
        may have been too lossy for improvements to survive; populations may have been too small and
        scattered for innovations to spread; the tool may simply have been adequate; or we may be
        misreading the evidence, because the wooden, fibre and hide technologies that surrounded
        these tools are invisible and may have changed considerably. If a million years of
        large-brained hominins produced no cumulative technological change, then intelligence alone
        does not generate accumulating technology — something else has to be in place.
      </Note>
    </Stack>
  );
}
