import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * One environmental problem, three genetic solutions.
 *
 * Haemoglobin is the measurement that separates them, and it goes the
 * counter-intuitive way in Tibetans — which is what makes this a better figure
 * than a list of gene names.
 */

interface Population {
  readonly key: string;
  readonly altitude: string;
  readonly haemoglobin: number;
  readonly genes: string;
  readonly how: string;
  readonly years: string;
}

const POPS: readonly Population[] = [
  {
    key: 'Sea level visitor',
    altitude: 'acclimatising at 4,000 m',
    haemoglobin: 19.5,
    genes: 'none',
    how: 'The body responds to thin air by making more red blood cells. It helps at first and then causes problems: thicker blood, higher blood pressure, and in pregnancy a substantially raised risk of complications and low birth weight.',
    years: '—',
  },
  {
    key: 'Tibetan',
    altitude: 'resident at 4,000 m',
    haemoglobin: 15.6,
    genes: 'EPAS1, EGLN1',
    how: 'Haemoglobin close to sea-level values. Compensation comes from breathing faster, wider blood vessels and better oxygen delivery to tissue — avoiding the costs of thickened blood entirely. The EPAS1 variant matches Denisovan sequence almost exactly: it entered our species by interbreeding and was deployed tens of thousands of years later when a population occupied the plateau.',
    years: '~10,000+',
  },
  {
    key: 'Andean',
    altitude: 'resident at 4,000 m',
    haemoglobin: 18.5,
    genes: 'different loci, including cardiovascular genes',
    how: 'Elevated haemoglobin, which is the opposite of the Tibetan solution, with adaptations centred on entirely different genes. Same environment, same duration of occupation, different answer.',
    years: '~11,000',
  },
  {
    key: 'Ethiopian highlander',
    altitude: 'resident at 3,500 m',
    haemoglobin: 15.9,
    genes: 'a third set again',
    how: 'Normal haemoglobin, like Tibetans, reached through yet another genetic architecture. Three populations, one challenge, three solutions.',
    years: '~5,000+',
  },
];

export default function AltitudeAdaptation(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const p = POPS[Math.min(pick, POPS.length - 1)];
  if (!p) return null;

  const LEFT = 128;
  const W = 200;
  const base = 14;

  return (
    <Stack>
      <Figure height={190}>
        <text x={LEFT} y={16} fontSize={8} fill={C.dim}>
          blood haemoglobin concentration (g/dL)
        </text>
        <line
          x1={LEFT}
          y1={26}
          x2={LEFT}
          y2={140}
          stroke="rgba(148,162,192,0.25)"
          strokeDasharray="3 3"
        />
        <text x={LEFT} y={152} textAnchor="middle" fontSize={7} fill={C.faint}>
          {base}
        </text>
        {[16, 18, 20].map((v) => (
          <g key={v}>
            <line
              x1={LEFT + ((v - base) / 7) * W}
              y1={26}
              x2={LEFT + ((v - base) / 7) * W}
              y2={140}
              stroke="rgba(148,162,192,0.1)"
            />
            <text
              x={LEFT + ((v - base) / 7) * W}
              y={152}
              textAnchor="middle"
              fontSize={7}
              fill={C.faint}
            >
              {v}
            </text>
          </g>
        ))}

        {POPS.map((x, i) => {
          const y = 38 + i * 26;
          const active = i === pick;
          const w = Math.max(((x.haemoglobin - base) / 7) * W, 3);
          const high = x.haemoglobin > 18;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <text
                x={LEFT - 8}
                y={y + 9}
                textAnchor="end"
                fontSize={7.5}
                fill={active ? C.life : C.dim}
              >
                {x.key}
              </text>
              <rect
                x={LEFT}
                y={y}
                width={w}
                height={13}
                rx={3}
                fill={high ? C.hot : C.life}
                opacity={active ? 0.95 : 0.4}
              />
              <text x={LEFT + w + 6} y={y + 10} fontSize={7.5} fill={C.faint}>
                {x.haemoglobin}
              </text>
            </g>
          );
        })}

        <text x={14} y={172} fontSize={8} fill={C.warm}>
          genes involved: {p.genes}
        </text>
        <text x={14} y={184} fontSize={7.5} fill={C.faint}>
          representative published means; individuals vary considerably
        </text>
      </Figure>

      <ToggleRow
        label="Population"
        options={POPS.map((x) => x.key.split(' ')[0] ?? x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>
          {p.key}, {p.altitude}.
        </strong>{' '}
        {p.how} Time at altitude: {p.years} years. This is convergent evolution observed within a
        single species on a timescale of millennia, and it is a direct demonstration that adaptation
        depends on which variants happen to be available rather than on finding the optimal answer.
        Similar cases exist elsewhere: Greenlandic Inuit carry variants affecting the processing of
        fatty acids abundant in a marine mammal diet, and the Bajau of Southeast Asia, who free-dive
        for much of their working lives, have spleens around 50% larger than neighbouring
        populations — a larger spleen matters because it contracts during a dive, releasing a
        reservoir of oxygen-carrying red cells. The Bajau result comes from a single study with
        modest samples and should be held accordingly.
      </Note>
    </Stack>
  );
}
