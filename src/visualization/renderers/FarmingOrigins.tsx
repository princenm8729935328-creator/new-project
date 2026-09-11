import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Independent origins of agriculture, plotted by date.
 *
 * The clustering is the argument. Two hundred thousand years in which nobody
 * farmed, then eleven separate inventions inside a few millennia — which points
 * at a change in conditions rather than a change in people.
 */

interface Centre {
  readonly key: string;
  readonly ka: number;
  readonly crops: string;
  readonly detail: string;
}

const CENTRES: readonly Centre[] = [
  {
    key: 'Fertile Crescent',
    ka: 11.5,
    crops: 'emmer and einkorn wheat, barley, lentils, then sheep and goats',
    detail:
      'The best-studied sequence, and the one that showed the process was gradual: over a millennium of cultivating morphologically wild cereals before domesticated traits such as a tough rachis become common, with wild resources important throughout.',
  },
  {
    key: 'China (Yangtze)',
    ka: 9.0,
    crops: 'rice',
    detail: 'Independent of the Near East, with its own long pre-domestication cultivation phase.',
  },
  {
    key: 'China (Yellow River)',
    ka: 8.0,
    crops: 'broomcorn and foxtail millet',
    detail: 'A second, separate Chinese centre with an entirely different crop package.',
  },
  {
    key: 'New Guinea',
    ka: 7.0,
    crops: 'taro, banana, yam',
    detail:
      'Drainage ditches in the Kuk swamp show systematic cultivation, in a region with no contact with any other centre.',
  },
  {
    key: 'Mesoamerica',
    ka: 6.5,
    crops: 'maize, squash, beans',
    detail:
      'Maize is the most heavily modified crop of all: teosinte, its wild ancestor, looks so unlike maize that the relationship was disputed for decades.',
  },
  {
    key: 'Andes',
    ka: 5.0,
    crops: 'potato, quinoa, llama, alpaca',
    detail: 'Including the only substantial animal domestications in the Americas.',
  },
  {
    key: 'Eastern N. America',
    ka: 4.5,
    crops: 'squash, sunflower, goosefoot',
    detail:
      'A centre that domesticated its own crops and later largely abandoned most of them when maize arrived from the south.',
  },
  {
    key: 'West Africa',
    ka: 4.0,
    crops: 'sorghum, African rice, pearl millet',
    detail: 'Across the Sahel, as the Sahara dried and populations concentrated.',
  },
];

export default function FarmingOrigins(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const c = CENTRES[Math.min(pick, CENTRES.length - 1)];
  if (!c) return null;

  const LEFT = 126;
  const W = 224;
  const toX = (ka: number): number => LEFT + W - (ka / 14) * W;

  return (
    <Stack>
      <Figure height={192}>
        <rect x={LEFT} y={20} width={toX(11.7) - LEFT} height={148} fill="rgba(111,179,255,0.08)" />
        <text x={(LEFT + toX(11.7)) / 2} y={34} textAnchor="middle" fontSize={7.5} fill={C.water}>
          glacial: unstable
        </text>
        <text x={(LEFT + toX(11.7)) / 2} y={44} textAnchor="middle" fontSize={7.5} fill={C.water}>
          climate
        </text>
        <line x1={toX(11.7)} y1={20} x2={toX(11.7)} y2={168} stroke={C.warm} strokeWidth={1.4} />
        <text x={toX(11.7) + 4} y={52} fontSize={7.5} fill={C.warm}>
          Holocene begins
        </text>

        {CENTRES.map((x, i) => {
          const y = 54 + i * 15;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <text
                x={LEFT - 8}
                y={y + 3}
                textAnchor="end"
                fontSize={7.5}
                fill={active ? C.life : C.dim}
              >
                {x.key}
              </text>
              <circle cx={toX(x.ka)} cy={y} r={active ? 6 : 4} fill={active ? C.life : C.warm} />
              <line
                x1={toX(x.ka)}
                y1={y}
                x2={LEFT + W}
                y2={y}
                stroke={active ? 'rgba(79,224,192,0.4)' : 'rgba(148,162,192,0.15)'}
                strokeWidth={1}
              />
            </g>
          );
        })}
        {[12, 9, 6, 3, 0].map((ka) => (
          <text key={ka} x={toX(ka)} y={182} textAnchor="middle" fontSize={7} fill={C.faint}>
            {ka === 0 ? 'now' : `${ka} ka`}
          </text>
        ))}
        <line x1={LEFT} y1={170} x2={LEFT + W} y2={170} stroke="rgba(148,162,192,0.25)" />
      </Figure>

      <ToggleRow
        label="Centre"
        options={CENTRES.map((x) => x.key.split(' ')[0] ?? x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>
          {c.key} — around {c.ka} thousand years ago.
        </strong>{' '}
        Crops: {c.crops}. {c.detail} The clustering is what needs explaining. For roughly two
        hundred thousand years no human being farmed; then, within a few thousand years, people on
        several continents began cultivating independently and without contact. If farming were
        simply a good idea waiting to be had, it should have appeared at random points across the
        previous two hundred millennia. The most likely component is climate: the last glacial was
        not merely cold but violently unstable, with temperatures in some regions shifting several
        degrees within decades, and cultivation is a bet that conditions will hold for months.
        Holocene stability changed the odds. That explains why farming became possible rather than
        why it happened — the proximate triggers differ by region and are debated in each.
      </Note>
    </Stack>
  );
}
