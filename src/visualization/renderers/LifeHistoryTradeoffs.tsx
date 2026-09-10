import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * A fixed budget, spent three ways.
 *
 * The reader cannot increase the total. That constraint is the whole content of
 * the trade-off idea, and a slider that steals from one bar to feed another
 * teaches it faster than any number of examples — though the examples are
 * needed too, so the note supplies them.
 */

export default function LifeHistoryTradeoffs(_props: VisualizationProps): ReactNode {
  const [growth, setGrowth] = useState(0.33);
  const [repro, setRepro] = useState(0.33);
  const maintain = Math.max(0, 1 - growth - repro);

  const strategy =
    repro > 0.55
      ? 'Fast and short: many offspring, little investment in the body. A mayfly, an annual weed, a mouse. Works where mortality is high and unpredictable, because a body maintained carefully is likely to be eaten anyway.'
      : maintain > 0.5
        ? 'Slow and long: heavy investment in repair, few offspring, long life. A tortoise, an albatross, a bristlecone pine. Works where adults survive well and competition is for established position.'
        : growth > 0.5
          ? 'Grow first: put everything into size, reproduce later. A large tree, a whale. Being big buys safety and competitive advantage, at the cost of years before any offspring at all.'
          : 'A balanced allocation. Most organisms sit somewhere in the middle, and where exactly depends on how dangerous the environment is and how much competition an offspring will face.';

  const bars = [
    { name: 'Growth', value: growth, colour: C.life },
    { name: 'Reproduction', value: repro, colour: C.warm },
    { name: 'Maintenance and repair', value: maintain, colour: C.water },
  ];

  return (
    <Stack>
      <Figure height={176}>
        <text x={16} y={14} fontSize={9} fill={C.dim}>
          one energy budget — spending more here means less there
        </text>
        <rect x={16} y={26} width={348} height={18} rx={3} fill={C.panel} />
        {
          bars.reduce<{ x: number; nodes: ReactNode[] }>(
            (acc, b) => {
              const w = b.value * 348;
              acc.nodes.push(
                <rect
                  key={b.name}
                  x={16 + acc.x}
                  y={26}
                  width={Math.max(w, 0)}
                  height={18}
                  fill={b.colour}
                  opacity={0.85}
                />,
              );
              acc.x += w;
              return acc;
            },
            { x: 0, nodes: [] },
          ).nodes
        }

        {bars.map((b, i) => (
          <g key={b.name}>
            <rect
              x={16}
              y={62 + i * 32}
              width={Math.max(b.value * 348, 2)}
              height={20}
              rx={3}
              fill={b.colour}
              opacity={0.7}
            />
            <text x={24} y={76 + i * 32} fontSize={9} fill="#0f1a17">
              {b.name}
            </text>
            <text
              x={364}
              y={76 + i * 32}
              textAnchor="end"
              fontSize={9}
              fill={b.colour}
              fontFamily="ui-monospace, monospace"
            >
              {Math.round(b.value * 100)}%
            </text>
          </g>
        ))}
      </Figure>

      <ControlRows>
        <Slider
          name="Growth"
          hiddenLabel="Share of energy spent on growth"
          min={0}
          max={0.8}
          step={0.01}
          value={growth}
          onChange={(v) => {
            setGrowth(v);
            if (v + repro > 1) setRepro(1 - v);
          }}
          display={`${Math.round(growth * 100)}%`}
        />
        <Slider
          name="Reproduction"
          hiddenLabel="Share of energy spent on reproduction"
          min={0}
          max={0.8}
          step={0.01}
          value={repro}
          onChange={(v) => {
            setRepro(v);
            if (v + growth > 1) setGrowth(1 - v);
          }}
          display={`${Math.round(repro * 100)}%`}
        />
      </ControlRows>

      <Note>
        {strategy} There is no allocation that is best in general, which is why organisms with
        wildly different strategies coexist in the same habitat. Trade-offs like this are also why
        evolution does not produce a perfect organism: energy spent on one function is unavailable
        for another, and the best split depends entirely on circumstances that change.
      </Note>
    </Stack>
  );
}
