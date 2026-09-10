import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Three hypotheses about what drove large brains, with their evidence and their
 * problems.
 *
 * They are not mutually exclusive and current treatments regard them as jointly
 * contributing, so presenting one as the answer would be wrong. Each panel
 * carries its own counter-evidence.
 */

interface Driver {
  readonly key: string;
  readonly title: string;
  readonly evidence: string;
  readonly problem: string;
}

const DRIVERS: readonly Driver[] = [
  {
    key: 'Ecological',
    title: 'Finding food is hard',
    evidence:
      'Species relying on food that is patchy in space and time — fruit that ripens on different trees at different times, prey that must be extracted from somewhere — tend to have larger relative brains than close relatives eating abundant uniform food. Frugivorous primates against folivorous ones is the standard comparison.',
    problem:
      'Diet quality and brain size are entangled: a better diet also supplies the energy a bigger brain needs, so the causal direction is hard to establish from correlation alone.',
  },
  {
    key: 'Social',
    title: 'Other individuals are harder',
    evidence:
      'Across primates, relative neocortex size correlates with typical social group size. The number of relationships to track grows faster than the number of individuals — fifty members means over a thousand pairs — and the thing being predicted is also adapting to you.',
    problem:
      'The correlation holds within primates and does not generalise cleanly. Some large-brained birds and cetaceans do not fit, results shift with how sociality is measured and which phylogenetic correction is used, and correlation does not fix the direction.',
  },
  {
    key: 'Cultural',
    title: 'Learning from others pays',
    evidence:
      'Where behaviour can be copied, a bigger brain lets an individual acquire more of what the group already knows, and the group’s stock of knowledge grows over generations. New Caledonian crow populations have distinct tool-making traditions; Japanese macaques spread potato-washing through a troop within a few years.',
    problem:
      'Cultural transmission requires a population already capable of learning and imitating, so it may be more an amplifier of intelligence than the thing that started it. Disentangling that from the fossil and comparative record is difficult.',
  },
];

export default function IntelligenceDrivers(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const d = DRIVERS[Math.min(pick, DRIVERS.length - 1)];
  if (!d) return null;

  return (
    <Stack>
      <Figure height={186}>
        <text x={16} y={18} fontSize={10.5} fill={C.life}>
          {d.title}
        </text>
        <rect x={12} y={28} width={356} height={72} rx={4} fill="rgba(79,224,192,0.10)" />
        <text x={22} y={44} fontSize={8.5} fill={C.life}>
          evidence for
        </text>
        {d.evidence
          .match(/.{1,72}(\s|$)/g)
          ?.slice(0, 5)
          .map((line, i) => (
            <text key={i} x={22} y={58 + i * 11} fontSize={8} fill="rgba(233,238,247,0.9)">
              {line.trim()}
            </text>
          ))}
        <rect x={12} y={108} width={356} height={62} rx={4} fill="rgba(255,143,110,0.10)" />
        <text x={22} y={124} fontSize={8.5} fill={C.hot}>
          the problem with it
        </text>
        {d.problem
          .match(/.{1,72}(\s|$)/g)
          ?.slice(0, 4)
          .map((line, i) => (
            <text key={i} x={22} y={138 + i * 11} fontSize={8} fill="rgba(233,238,247,0.9)">
              {line.trim()}
            </text>
          ))}
      </Figure>

      <ToggleRow
        label="Hypothesis"
        options={DRIVERS.map((x) => x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        These three are not competing alternatives, and current accounts treat them as jointly
        contributing rather than as a question with one answer. What they share is a common shape:
        cognition pays where the right answer keeps changing. Where it does not — where food is
        always in the same place and neighbours behave the same way every year — an inherited rule
        is cheaper and works. That is why most animals are not particularly clever and are doing
        perfectly well.
      </Note>
    </Stack>
  );
}
