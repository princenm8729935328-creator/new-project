import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Allele frequencies measured through time in ancient genomes.
 *
 * This is the figure that distinguishes observation from inference. Earlier
 * methods argued from patterns in living genomes that a variant must have been
 * favoured; here the frequency is measured at successive dates and the line is
 * simply drawn.
 */

interface Locus {
  readonly key: string;
  readonly what: string;
  readonly points: readonly (readonly [number, number])[];
  readonly colour: string;
  readonly detail: string;
}

const LOCI: readonly Locus[] = [
  {
    key: 'LCT',
    what: 'lactase persistence',
    colour: C.life,
    points: [
      [8, 0.0],
      [6, 0.02],
      [5, 0.04],
      [4, 0.06],
      [3, 0.18],
      [2, 0.35],
      [0, 0.7],
    ],
    detail:
      'Milk residues in pottery show Europeans consuming dairy for thousands of years before this line moves. The current explanation is that the advantage was intermittent — decisive during famine, when milk may be the only food, and during diarrhoeal epidemics, when lactose-induced fluid loss compounds an existing threat.',
  },
  {
    key: 'SLC24A5',
    what: 'lighter skin pigmentation',
    colour: C.warm,
    points: [
      [8, 0.05],
      [7, 0.1],
      [6, 0.35],
      [5, 0.6],
      [4, 0.8],
      [2, 0.95],
      [0, 0.99],
    ],
    detail:
      'One of several pigmentation loci under strong selection in Europe during the Holocene. Skin colour tracks ultraviolet intensity as a compromise between protecting folate and permitting vitamin D synthesis — which makes it among the worst possible markers of deep ancestry, since it responds so quickly to where a population lives.',
  },
  {
    key: 'FADS cluster',
    what: 'fatty-acid metabolism',
    colour: C.deep,
    points: [
      [8, 0.2],
      [6, 0.25],
      [5, 0.4],
      [4, 0.55],
      [3, 0.62],
      [0, 0.7],
    ],
    detail:
      'Variants affecting how efficiently the body synthesises long-chain fatty acids from plant precursors. They rise as diets shift from hunted meat towards cereals — a genetic response to a culturally created diet.',
  },
  {
    key: 'Immune loci',
    what: 'pathogen resistance',
    colour: C.hot,
    points: [
      [8, 0.3],
      [6, 0.32],
      [5, 0.4],
      [4, 0.52],
      [3, 0.6],
      [0, 0.64],
    ],
    detail:
      'Crowding and livestock brought diseases that had never been able to persist in human populations before: a disease conferring lasting immunity burns through a small band and vanishes, and can only survive where new hosts keep arriving. Farming created exactly that, and then kept it supplied.',
  },
];

export default function AncientSelection(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const locus = LOCI[Math.min(pick, LOCI.length - 1)];
  if (!locus) return null;

  const LEFT = 40;
  const RIGHT = 14;
  const TOP = 26;
  const BOT = 142;
  const W = 380 - LEFT - RIGHT;
  const toX = (ka: number): number => LEFT + W - (ka / 8.5) * W;
  const toY = (f: number): number => BOT - f * (BOT - TOP);

  return (
    <Stack>
      <Figure height={196}>
        <line x1={LEFT} y1={BOT} x2={LEFT + W} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        {[0, 0.5, 1].map((f) => (
          <g key={f}>
            <line x1={LEFT} y1={toY(f)} x2={LEFT + W} y2={toY(f)} stroke="rgba(148,162,192,0.1)" />
            <text x={LEFT - 5} y={toY(f) + 3} textAnchor="end" fontSize={7} fill={C.faint}>
              {f * 100}%
            </text>
          </g>
        ))}

        {LOCI.map((l, i) => {
          const active = i === pick;
          const d = l.points
            .map((p, j) => `${j === 0 ? 'M' : 'L'}${toX(p[0]).toFixed(1)},${toY(p[1]).toFixed(1)}`)
            .join(' ');
          return (
            <g key={l.key}>
              <path
                d={d}
                fill="none"
                stroke={l.colour}
                strokeWidth={active ? 2.6 : 1.2}
                opacity={active ? 1 : 0.35}
              />
              {active
                ? l.points.map((p) => (
                    <circle key={p[0]} cx={toX(p[0])} cy={toY(p[1])} r={3.4} fill={l.colour} />
                  ))
                : null}
            </g>
          );
        })}

        {[8, 6, 4, 2, 0].map((ka) => (
          <text key={ka} x={toX(ka)} y={BOT + 13} textAnchor="middle" fontSize={7} fill={C.faint}>
            {ka === 0 ? 'now' : `${ka} ka`}
          </text>
        ))}
        <text x={12} y={18} fontSize={7.5} fill={C.faint}>
          allele frequency
        </text>
        <text x={LEFT} y={182} fontSize={8.5} fill={locus.colour}>
          {locus.key} — {locus.what}
        </text>
        <text x={LEFT} y={192} fontSize={7} fill={C.faint}>
          trajectories are schematic summaries of published European time-series
        </text>
      </Figure>

      <ToggleRow label="Locus" options={LOCI.map((l) => l.key)} value={pick} onChange={setPick} />

      <Note>
        {locus.detail} Until recently, detecting recent natural selection meant looking at living
        people and reasoning backwards from patterns in their DNA. Ancient DNA changed the method:
        with enough sequenced individuals spread through time you can simply measure how common a
        variant was at each date and watch the line move. A study of 230 ancient Eurasians spanning
        eight thousand years did exactly that, and identified genome-wide significant selection at
        loci for lactase persistence, fatty-acid metabolism, vitamin D, pigmentation, immunity and
        height. Step back and the pattern is consistent: almost every strong recent selection signal
        in the human genome is a response to something people did — farming, herding, settling in
        dense villages, moving to high latitudes. Human evolution over the last ten thousand years
        is not a story of biology going quiet while culture takes over. It is the period in which
        the two became most tightly coupled.
      </Note>
    </Stack>
  );
}
