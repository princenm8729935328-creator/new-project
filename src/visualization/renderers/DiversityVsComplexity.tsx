import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack, ToggleRow } from './lifeKit';

/**
 * A varied community and a uniform one, put through the same drought.
 *
 * Diversity as insurance is easy to state and hard to feel. Applying a shock to
 * both communities and showing that the diverse one keeps functioning while the
 * uniform one collapses is the version that lands.
 */

export default function DiversityVsComplexity(_props: VisualizationProps): ReactNode {
  const [drought, setDrought] = useState(0);
  const [view, setView] = useState(0);

  // Each species has a tolerance; diverse communities span the range.
  const diverse = Array.from({ length: 12 }, (_, i) => i / 11);
  const uniform = Array.from({ length: 12 }, () => 0.45);
  const community = view === 0 ? diverse : uniform;

  const alive = community.filter((tol) => tol >= drought);
  const output = Math.min(1, alive.length / 8);

  return (
    <Stack>
      <Figure height={186}>
        <text x={16} y={14} fontSize={9} fill={C.dim}>
          {view === 0
            ? 'twelve species with different drought tolerances'
            : 'twelve species with nearly identical tolerances'}
        </text>
        {community.map((tol, i) => {
          const dead = tol < drought;
          return (
            <g key={i}>
              <rect
                x={16 + (i % 6) * 58}
                y={24 + Math.floor(i / 6) * 44}
                width={50}
                height={36}
                rx={4}
                fill={dead ? 'rgba(255,143,110,0.12)' : C.life}
                opacity={dead ? 1 : 0.35 + tol * 0.5}
              />
              <text
                x={41 + (i % 6) * 58}
                y={46 + Math.floor(i / 6) * 44}
                textAnchor="middle"
                fontSize={9}
                fill={dead ? C.hot : '#0f1a17'}
              >
                {dead ? '✕' : '✓'}
              </text>
            </g>
          );
        })}

        <text x={16} y={140} fontSize={9} fill={C.dim}>
          community productivity
        </text>
        <rect x={16} y={148} width={340} height={16} rx={3} fill="rgba(148,162,192,0.16)" />
        <rect
          x={16}
          y={148}
          width={Math.max(340 * output, 3)}
          height={16}
          rx={3}
          fill={output > 0.6 ? C.life : output > 0.25 ? C.warm : C.hot}
        />
        <text x={16} y={180} fontSize={8.5} fill={C.dim}>
          {alive.length} of 12 species surviving
        </text>
      </Figure>

      <ToggleRow
        label="Community"
        options={['Diverse', 'Uniform']}
        value={view}
        onChange={setView}
      />

      <ControlRows>
        <Slider
          name="Drought severity"
          hiddenLabel="Severity of the drought"
          min={0}
          max={1}
          step={0.02}
          value={drought}
          onChange={setDrought}
          display={`${Math.round(drought * 100)}%`}
        />
      </ControlRows>

      <Note>
        The uniform community is fine until the drought passes its shared tolerance, and then
        everything fails at once. The diverse one loses species progressively and keeps functioning,
        because it contains something that can cope with each level. The Cedar Creek grassland
        experiments have run for decades comparing plots planted with different numbers of species:
        diverse plots produce more biomass, and — the result that matters more — vary less from year
        to year. During a severe drought they lost far less productivity and recovered faster. The
        same argument holds over evolutionary time: after each mass extinction, what rebuilt the
        world was whichever surviving lineages happened to suit the new conditions, and the more
        lineages there were, the better the odds that something did.
      </Note>
    </Stack>
  );
}
