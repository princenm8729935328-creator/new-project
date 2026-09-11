import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Four explanations for bipedalism, with what supports and what undercuts each.
 *
 * Presenting these as a ranked list would misrepresent the field. Two bars per
 * hypothesis — support and problems — is the honest shape, and it makes visible
 * that none of them is clearly ahead.
 */

interface Hypothesis {
  readonly key: string;
  readonly claim: string;
  readonly support: number;
  readonly problems: number;
  readonly forIt: string;
  readonly against: string;
}

const HYPOTHESES: readonly Hypothesis[] = [
  {
    key: 'Energy',
    claim: 'Walking upright is cheaper over distance than knuckle-walking.',
    support: 0.72,
    problems: 0.5,
    forIt:
      'Measured directly: human walking costs about 75% less per unit distance than chimpanzee locomotion, and the difference tracks anatomy across individuals.',
    against:
      'The comparison is between two modern species. The first bipeds had neither anatomy, and if they retained climbing then the relevant comparison is not walking versus knuckle-walking at all.',
  },
  {
    key: 'Carrying',
    claim: 'Free hands allow food, infants and objects to be carried.',
    support: 0.5,
    problems: 0.55,
    forIt:
      'Carrying is a real and continuing benefit, and infants of bipedal mothers cannot cling to fur the way ape infants do, so carrying became obligatory.',
    against:
      'It explains why free hands pay once you have them. The first bipeds had no tools for more than a million years afterwards, so what was being carried, and why it mattered enough to rebuild a skeleton, is unclear.',
  },
  {
    key: 'Heat',
    claim: 'An upright body takes less midday sun and sheds heat more easily.',
    support: 0.42,
    problems: 0.62,
    forIt:
      'The physics is sound: a vertical body presents far less surface to overhead sun, and more of its surface to moving air above the hot ground layer.',
    against:
      'It requires open habitat at midday. Carbon isotopes in ancient soils show early hominin sites were wooded, with tree cover typically above 40%, which removes most of the effect.',
  },
  {
    key: 'Feeding',
    claim: 'Standing is a useful posture for reaching food in low branches.',
    support: 0.55,
    problems: 0.48,
    forIt:
      'Fits the wooded habitat the isotopes describe, and orangutans walk bipedally along branches while feeding, which shows the behaviour arising in a forest context.',
    against:
      'Explains standing rather than travelling. Getting from occasional upright posture to a skeleton rebuilt for habitual walking needs an additional step the hypothesis does not supply.',
  },
];

export default function BipedalismHypotheses(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const h = HYPOTHESES[Math.min(pick, HYPOTHESES.length - 1)];
  if (!h) return null;

  const LEFT = 96;
  const W = 240;

  return (
    <Stack>
      <Figure height={196}>
        {HYPOTHESES.map((x, i) => {
          const y = 30 + i * 36;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <text
                x={LEFT - 8}
                y={y + 4}
                textAnchor="end"
                fontSize={8.5}
                fill={active ? C.life : C.dim}
                fontWeight={active ? 700 : 400}
              >
                {x.key}
              </text>
              <rect
                x={LEFT}
                y={y - 7}
                width={W * x.support}
                height={7}
                rx={3}
                fill={C.life}
                opacity={active ? 0.9 : 0.4}
              />
              <rect
                x={LEFT}
                y={y + 2}
                width={W * x.problems}
                height={7}
                rx={3}
                fill={C.hot}
                opacity={active ? 0.9 : 0.4}
              />
            </g>
          );
        })}
        <text x={LEFT} y={18} fontSize={8} fill={C.life}>
          evidence for
        </text>
        <text x={LEFT + 90} y={18} fontSize={8} fill={C.hot}>
          evidence against
        </text>
        <text x={16} y={186} fontSize={7.5} fill={C.faint}>
          bar lengths are the author’s reading of the literature, not a measurement
        </text>
      </Figure>

      <ToggleRow
        label="Hypothesis"
        options={HYPOTHESES.map((x) => x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>{h.key}.</strong> {h.claim} <strong>For:</strong> {h.forIt}{' '}
        <strong>Against:</strong> {h.against} These hypotheses are not mutually exclusive, and a
        transition driven by several weak pressures would leave much the same fossil evidence as one
        driven by a single strong pressure — which is part of why the question is still open after
        fifty years.
      </Note>
    </Stack>
  );
}
