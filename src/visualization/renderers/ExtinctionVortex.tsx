import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why small populations keep getting smaller.
 *
 * Extinction is usually pictured as an external blow. For most species it is a
 * spiral: fewer individuals means less genetic variation, which means worse
 * survival, which means fewer individuals. The loop drawn as a loop is the
 * point.
 */

export default function ExtinctionVortex(_props: VisualizationProps): ReactNode {
  const [pop, setPop] = useState(400);

  const inbreeding = Math.min(1, 60 / pop);
  const chanceRisk = Math.min(1, 40 / pop);
  const risk = Math.min(0.99, 0.08 + inbreeding * 0.5 + chanceRisk * 0.45);

  const stages = [
    'population falls',
    'fewer mates, more inbreeding',
    'lower survival and fertility',
    'chance events hit harder',
  ];

  const CX = 190;
  const CY = 88;
  const R = 54;

  return (
    <Stack>
      <Figure height={188}>
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke={C.hot}
          strokeWidth={1.4}
          strokeDasharray="5 4"
          opacity={0.5}
        />
        {stages.map((s, i) => {
          const a = -Math.PI / 2 + (i / stages.length) * Math.PI * 2;
          const x = CX + Math.cos(a) * R;
          const y = CY + Math.sin(a) * R;
          return (
            <g key={s}>
              <circle cx={x} cy={y} r={5} fill={C.hot} opacity={0.6 + risk * 0.4} />
              <text
                x={x}
                y={y < CY ? y - 10 : y + 16}
                textAnchor="middle"
                fontSize={8}
                fill="rgba(233,238,247,0.92)"
              >
                {s}
              </text>
            </g>
          );
        })}
        <text x={CX} y={CY + 4} textAnchor="middle" fontSize={20} fill={C.hot}>
          ↻
        </text>

        <rect x={20} y={158} width={340} height={12} rx={6} fill="rgba(148,162,192,0.18)" />
        <rect
          x={20}
          y={158}
          width={Math.max(340 * risk, 4)}
          height={12}
          rx={6}
          fill={risk > 0.6 ? C.hot : risk > 0.3 ? C.warm : C.life}
        />
        <text x={20} y={152} fontSize={8.5} fill={C.dim}>
          modelled extinction risk over 100 years
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Population"
          hiddenLabel="Number of breeding individuals"
          min={20}
          max={2000}
          step={10}
          value={pop}
          onChange={setPop}
          display={`${pop} individuals`}
        />
      </ControlRows>

      <Note>
        At <strong>{pop}</strong> breeding individuals, the modelled risk is{' '}
        <strong>{Math.round(risk * 100)}%</strong>. Three things get worse together as a population
        shrinks. Inbreeding rises, exposing harmful recessive variants. Genetic variation is lost to
        drift, so the population cannot adapt if conditions change. And random events — a bad year,
        a skewed sex ratio, a disease outbreak — stop averaging out and start being decisive. Each
        of these reduces the population further, which is why conservation biologists talk about a
        vortex rather than a decline. The northern white rhinoceros is now at two individuals, both
        female. The numbers here are illustrative; real population viability analyses are built
        species by species from measured demographic rates.
      </Note>
    </Stack>
  );
}
