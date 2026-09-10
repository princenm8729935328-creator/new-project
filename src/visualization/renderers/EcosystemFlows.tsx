import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Energy flows through and leaves; matter cycles and stays.
 *
 * The two behave completely differently and confusing them is the most common
 * error in thinking about ecosystems, so the figure draws them as two different
 * shapes: an arrow that passes through, and a ring that closes.
 */

const VIEWS = ['Energy', 'Matter'] as const;

export default function EcosystemFlows(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={186}>
        {view === 0 ? (
          <g>
            <text x={20} y={22} fontSize={9} fill={C.warm}>
              sunlight in
            </text>
            {[0, 1, 2].map((i) => (
              <line
                key={i}
                x1={24 + i * 12}
                y1={30}
                x2={34 + i * 12}
                y2={54}
                stroke={C.warm}
                strokeWidth={1.4}
              />
            ))}
            {['plants', 'grazers', 'predators', 'decomposers'].map((n, i) => (
              <g key={n}>
                <rect
                  x={20 + i * 92}
                  y={60}
                  width={72}
                  height={34}
                  rx={4}
                  fill={[C.life, C.warm, C.hot, C.deep][i]}
                  opacity={0.75}
                />
                <text x={56 + i * 92} y={81} textAnchor="middle" fontSize={9} fill="#0f1a17">
                  {n}
                </text>
                {i < 3 ? (
                  <g>
                    <line
                      x1={94 + i * 92}
                      y1={77}
                      x2={108 + i * 92}
                      y2={77}
                      stroke={C.faint}
                      strokeWidth={1.6}
                    />
                    <path d={`M${110 + i * 92},77 l-7,-3.5 l0,7 z`} fill={C.faint} />
                  </g>
                ) : null}
                <line
                  x1={56 + i * 92}
                  y1={96}
                  x2={56 + i * 92}
                  y2={120}
                  stroke="rgba(255,143,110,0.7)"
                  strokeWidth={1.4}
                />
                <path d={`M${56 + i * 92},126 l-3.5,-7 l7,0 z`} fill="rgba(255,143,110,0.7)" />
                <text x={56 + i * 92} y={140} textAnchor="middle" fontSize={7.5} fill={C.hot}>
                  heat
                </text>
              </g>
            ))}
            <text x={190} y={168} textAnchor="middle" fontSize={9} fill={C.hot}>
              energy passes through once and leaves as heat — it cannot be reused
            </text>
          </g>
        ) : (
          <g>
            {['plants', 'animals', 'dead matter', 'soil, air, water'].map((n, i) => {
              const a = -Math.PI / 2 + (i / 4) * Math.PI * 2;
              const cx = 190 + Math.cos(a) * 62;
              const cy = 92 + Math.sin(a) * 46;
              return (
                <g key={n}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={22}
                    fill={[C.life, C.warm, C.deep, C.rock][i]}
                    opacity={0.7}
                  />
                  <text x={cx} y={cy + 3} textAnchor="middle" fontSize={7.5} fill="#0f1a17">
                    {n}
                  </text>
                </g>
              );
            })}
            <circle
              cx={190}
              cy={92}
              r={62}
              fill="none"
              stroke={C.life}
              strokeWidth={1.4}
              strokeDasharray="5 4"
              opacity={0.6}
            />
            <text x={190} y={168} textAnchor="middle" fontSize={9} fill={C.life}>
              the same atoms go round indefinitely — carbon in a leaf becomes carbon in a bird
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="What is flowing" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Energy arrives as sunlight, is captured by plants, and is degraded to heat at every subsequent step. The second law of thermodynamics forbids recycling it, which is why an ecosystem needs a continuous supply and why cutting off the sunlight — as an impact winter does — collapses it from the bottom within months.'
          : 'Matter is different. There is no continuous supply of new carbon or nitrogen; the same atoms have been circulating for billions of years. The carbon in your body has been in a leaf, in a bacterium, in limestone, in a volcano. What limits an ecosystem is not the quantity of an element but the rate at which it is released back into a usable form — which is what decomposers do.'}
      </Note>
    </Stack>
  );
}
