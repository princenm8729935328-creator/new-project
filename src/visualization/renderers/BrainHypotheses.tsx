import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Four explanations for brain expansion, each with a specific finding against it.
 *
 * The "challenged by" line is the reason this figure exists. Several of these
 * were textbook consensus within the last fifteen years and have been weakened
 * by direct tests, which is exactly what a reader needs to know before meeting
 * any of them in a popular account.
 */

interface Hypothesis {
  readonly key: string;
  readonly claim: string;
  readonly support: string;
  readonly challenge: string;
  readonly standing: number;
}

const HYPOTHESES: readonly Hypothesis[] = [
  {
    key: 'Social',
    claim: 'Tracking relationships in a group is the demanding problem.',
    support:
      'The number of relationships grows far faster than the number of individuals, and an early comparative result found neocortex size correlating with group size across primates — which gave the hypothesis quantitative teeth.',
    challenge:
      'A study of over 140 primate species found brain size predicted by diet, specifically fruit-eating, and not by group size, social organisation or mating system. Other work finds the result depends on whether relative or absolute brain size is used.',
    standing: 0.5,
  },
  {
    key: 'Ecological',
    claim: 'Finding, remembering and extracting difficult food is the demanding problem.',
    support:
      'Fruit is patchy in space and time and requires spatial memory; extractive foraging requires technique. A model apportioning hominin brain expansion assigned roughly 60% to ecological demands.',
    challenge:
      'A model fit is not a measurement, and its conclusions follow from the structure assumed for skill acquisition and energy allocation. Ecological demand is also hard to operationalise without becoming unfalsifiable.',
    standing: 0.62,
  },
  {
    key: 'Energetic',
    claim: 'The constraint was never demand but supply — brains grew when energy allowed.',
    support:
      'Brain tissue is expensive and cannot be run on an unreliable supply. Humans burn several hundred more calories per day than other apes and carry far more fat as a buffer, so the ceiling clearly moved.',
    challenge:
      'It explains what made expansion possible rather than what made it worth paying for. A population with surplus energy has no obligation to spend it on neural tissue.',
    standing: 0.55,
  },
  {
    key: 'Cultural',
    claim:
      'Once there was accumulated knowledge worth acquiring, brains were selected to absorb it.',
    support:
      'Makes brain size and culture mutually reinforcing, which explains acceleration — feedback loops accelerate. Fits the observation that human cognitive advantages over apes are concentrated in social learning rather than physical reasoning.',
    challenge:
      'Very difficult to test, because the cultural half is archaeologically invisible for most of the period. It also has to explain a million years of Acheulean stasis during which brains were growing.',
    standing: 0.5,
  },
];

export default function BrainHypotheses(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const h = HYPOTHESES[Math.min(pick, HYPOTHESES.length - 1)];
  if (!h) return null;

  return (
    <Stack>
      <Figure height={188}>
        <text x={14} y={16} fontSize={8.5} fill={C.dim}>
          four proposals, none of them clearly ahead
        </text>
        {HYPOTHESES.map((x, i) => {
          const y = 38 + i * 34;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={14}
                y={y - 14}
                width={352}
                height={28}
                rx={5}
                fill={active ? 'rgba(79,224,192,0.1)' : 'transparent'}
                stroke={active ? 'rgba(79,224,192,0.4)' : 'transparent'}
              />
              <text
                x={24}
                y={y - 2}
                fontSize={9}
                fill={active ? C.life : C.dim}
                fontWeight={active ? 700 : 400}
              >
                {x.key}
              </text>
              <text x={24} y={y + 10} fontSize={7.5} fill={C.faint}>
                {x.claim}
              </text>
              <rect x={286} y={y - 8} width={70} height={7} rx={3} fill="rgba(148,162,192,0.15)" />
              <rect
                x={286}
                y={y - 8}
                width={70 * x.standing}
                height={7}
                rx={3}
                fill={active ? C.warm : 'rgba(255,210,127,0.45)'}
              />
            </g>
          );
        })}
        <text x={14} y={180} fontSize={7.5} fill={C.faint}>
          bar lengths summarise the state of the argument, not a measurement
        </text>
      </Figure>

      <ToggleRow
        label="Hypothesis"
        options={HYPOTHESES.map((x) => x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>{h.key}.</strong> <strong>Supported by:</strong> {h.support}{' '}
        <strong>Challenged by:</strong> {h.challenge} These are not mutually exclusive, and the
        expansion happened over two million years in several lineages under changing conditions — so
        there is no particular reason to expect one pressure throughout. A mixture of causes acting
        at different times would produce exactly the pattern the field has: several partially
        supported, mutually incompatible hypotheses, none of them winning.
      </Note>
    </Stack>
  );
}
