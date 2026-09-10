import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why oxygen took hundreds of millions of years to appear in the air.
 *
 * Production had to exceed the sinks, not merely exist. Letting the reader
 * raise production and watch the sinks absorb it makes the delay between
 * inventing oxygenic photosynthesis and the Great Oxidation Event intelligible
 * rather than puzzling.
 */

export default function PlanetaryOxygenBudget(_props: VisualizationProps): ReactNode {
  const [production, setProduction] = useState(0.6);
  const SINKS = [
    { name: 'dissolved iron in the oceans', capacity: 0.42, colour: C.rock },
    { name: 'volcanic gases', capacity: 0.3, colour: C.hot },
    { name: 'weathering of exposed rock', capacity: 0.2, colour: C.warm },
  ];
  const totalSink = SINKS.reduce((a, s) => a + s.capacity, 0);
  const surplus = Math.max(0, production - totalSink);

  let used = 0;
  const bars = SINKS.map((s) => {
    const fill = Math.min(s.capacity, Math.max(0, production - used));
    used += s.capacity;
    return { ...s, fill };
  });

  return (
    <Stack>
      <Figure height={196}>
        <text x={16} y={14} fontSize={9} fill={C.dim}>
          oxygen produced by cyanobacteria
        </text>
        <rect x={16} y={20} width={348} height={16} rx={3} fill="rgba(148,162,192,0.16)" />
        <rect
          x={16}
          y={20}
          width={Math.max(348 * (production / 1.2), 3)}
          height={16}
          rx={3}
          fill={C.life}
        />

        <text x={16} y={58} fontSize={9} fill={C.dim}>
          where it goes first
        </text>
        {bars.map((s, i) => (
          <g key={s.name}>
            <rect
              x={16}
              y={64 + i * 30}
              width={348 * (s.capacity / 1.2)}
              height={18}
              rx={3}
              fill="rgba(148,162,192,0.14)"
            />
            <rect
              x={16}
              y={64 + i * 30}
              width={Math.max(348 * (s.fill / 1.2), 2)}
              height={18}
              rx={3}
              fill={s.colour}
              opacity={0.85}
            />
            <text x={22} y={77 + i * 30} fontSize={8.5} fill="rgba(233,238,247,0.92)">
              {s.name}
            </text>
            {s.fill >= s.capacity - 0.001 ? (
              <text x={360} y={77 + i * 30} textAnchor="end" fontSize={8} fill={C.warm}>
                saturated
              </text>
            ) : null}
          </g>
        ))}

        <text x={16} y={172} fontSize={9} fill={surplus > 0 ? C.air : C.faint}>
          left over for the atmosphere
        </text>
        <rect x={16} y={178} width={348} height={14} rx={3} fill="rgba(148,162,192,0.14)" />
        <rect
          x={16}
          y={178}
          width={Math.max(348 * (surplus / 1.2), surplus > 0 ? 3 : 0)}
          height={14}
          rx={3}
          fill={C.air}
        />
      </Figure>

      <ControlRows>
        <Slider
          name="Production"
          hiddenLabel="Rate of oxygen production, arbitrary units"
          min={0}
          max={1.2}
          step={0.01}
          value={production}
          onChange={setProduction}
          display={production.toFixed(2)}
        />
      </ControlRows>

      <Note>
        {surplus > 0
          ? `The sinks are full and ${surplus.toFixed(2)} units are accumulating in the air. This is the Great Oxidation Event: not the moment oxygen production began, but the moment it finally exceeded everything that was consuming it.`
          : 'Every molecule produced is being consumed as fast as it is made — by dissolved iron rusting out of seawater, by volcanic gases, by exposed rock. The atmosphere stays oxygen-free no matter how long this continues.'}{' '}
        Cyanobacteria had probably been producing oxygen for hundreds of millions of years before it
        appeared in the air, and the banded iron formations that industrial civilisation is built
        from are the record of the largest sink being paid off. How long the delay was is actively
        argued, and the figures here are illustrative rather than a quantitative budget.
      </Note>
    </Stack>
  );
}
