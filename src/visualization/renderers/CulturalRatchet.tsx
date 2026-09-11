import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Toolkit complexity against the size of the connected population.
 *
 * The Tasmania case is what this figure is for: a toolkit that got simpler,
 * with no suggestion that anyone got less capable. Population size is the
 * variable, and it is a variable archaeology can sometimes estimate.
 */

interface Point {
  readonly label: string;
  readonly n: number;
  readonly complexity: number;
  readonly detail: string;
}

const POINTS: readonly Point[] = [
  {
    label: 'Tasmania, after isolation',
    n: 4000,
    complexity: 12,
    detail:
      'Rising sea levels cut Tasmania off from mainland Australia around 10,000 years ago, isolating a few thousand people. Over the following millennia the record shows bone tools, fishing and hafted implements disappearing — a toolkit becoming simpler. Nothing suggests anyone became less capable. The interpretation is debated, with some arguing for deliberate abandonment.',
  },
  {
    label: 'Small Oceanian islands',
    n: 1500,
    complexity: 9,
    detail:
      'Comparative analysis of Oceanian toolkits finds complexity predicted by population size and by the degree of contact with other islands — not by anything about the people.',
  },
  {
    label: 'Large Oceanian islands',
    n: 20000,
    complexity: 22,
    detail:
      'The same analysis at the other end: more people, and more people in contact, means more tool types and more components per tool.',
  },
  {
    label: 'Upper Palaeolithic Europe',
    n: 60000,
    complexity: 30,
    detail:
      'Population densities rose substantially over this period, and modelling suggests the resulting increase in connected population is by itself sufficient to produce the observed appearance of complex technology — without any accompanying change in individual cognition.',
  },
];

export default function CulturalRatchet(_props: VisualizationProps): ReactNode {
  const [n, setN] = useState(20000);

  // Expected retained complexity rises with the number of available models.
  const complexity = 7.5 * Math.log10(Math.max(n, 100));
  const LEFT = 44;
  const RIGHT = 14;
  const TOP = 26;
  const BOT = 140;
  const W = 380 - LEFT - RIGHT;
  const toX = (v: number): number => LEFT + ((Math.log10(Math.max(v, 200)) - 2.3) / 2.7) * W;
  const toY = (c: number): number => BOT - (c / 36) * (BOT - TOP);

  const curve = Array.from({ length: 60 }, (_, i) => {
    const v = 10 ** (2.3 + (i / 59) * 2.7);
    return `${i === 0 ? 'M' : 'L'}${toX(v).toFixed(1)},${toY(7.5 * Math.log10(v)).toFixed(1)}`;
  }).join(' ');

  const nearest = POINTS.reduce((best, p) =>
    Math.abs(Math.log10(p.n) - Math.log10(n)) < Math.abs(Math.log10(best.n) - Math.log10(n))
      ? p
      : best,
  );

  return (
    <Stack>
      <Figure height={186}>
        <line x1={LEFT} y1={BOT} x2={LEFT + W} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        <path d={curve} fill="none" stroke="rgba(79,224,192,0.45)" strokeWidth={2} />

        {POINTS.map((p) => (
          <g key={p.label}>
            <circle cx={toX(p.n)} cy={toY(p.complexity)} r={4} fill={C.warm} />
          </g>
        ))}

        <line x1={toX(n)} y1={TOP} x2={toX(n)} y2={BOT} stroke={C.life} strokeDasharray="3 3" />
        <circle cx={toX(n)} cy={toY(complexity)} r={6} fill={C.life} />
        <text x={toX(n)} y={toY(complexity) - 10} textAnchor="middle" fontSize={8.5} fill={C.life}>
          {complexity.toFixed(0)} tool types
        </text>

        {[1000, 10000, 100000].map((v) => (
          <text key={v} x={toX(v)} y={BOT + 13} textAnchor="middle" fontSize={7} fill={C.faint}>
            {v >= 100000 ? '100k' : v >= 10000 ? '10k' : '1k'}
          </text>
        ))}
        <text x={LEFT + W / 2} y={BOT + 26} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          connected population (log scale)
        </text>
        <text x={12} y={20} fontSize={7.5} fill={C.faint}>
          toolkit complexity
        </text>
        <text x={LEFT} y={180} fontSize={8} fill={C.warm}>
          nearest case: {nearest.label}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Population"
          hiddenLabel="Size of the connected population sharing techniques"
          min={500}
          max={100000}
          step={500}
          value={n}
          onChange={setN}
          display={n >= 1000 ? `${(n / 1000).toFixed(1)}k people` : `${n} people`}
        />
      </ControlRows>

      <Note>
        <strong>{nearest.label}.</strong> {nearest.detail} The mechanism is straightforward: a
        learner acquires a skill imperfectly, so the more skilled models available, the more likely
        it is that at least one full version survives into the next generation. Below a threshold,
        expected loss exceeds expected invention and complexity declines. This is a demographic
        explanation for a cultural outcome, and it matters because the burst of technological and
        symbolic complexity in the last 50,000 years has often been explained by a cognitive change
        — a mutation, a rewiring, the arrival of language. Demography offers an alternative
        requiring no change in minds at all. The two are not exclusive and are hard to separate, but
        the demographic account has the advantage of being quantitatively testable, and it has been
        tested: in controlled transmission experiments, larger groups keep complex skills that
        smaller groups lose, with the same individuals and the same instructions. The curve here is
        illustrative rather than fitted.
      </Note>
    </Stack>
  );
}
