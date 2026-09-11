import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * What has to happen for an individual to become a fossil you can find.
 *
 * A funnel with a survivor count at each stage. The numbers are illustrative,
 * but the shape is not: the record is a heavily filtered sample and reasoning
 * from it without knowing the filter produces confident nonsense.
 */

interface Step {
  readonly label: string;
  readonly pass: number;
  readonly detail: string;
}

const STEPS: readonly Step[] = [
  {
    label: 'dies somewhere burial is possible',
    pass: 0.02,
    detail:
      'A lake margin, a river delta, a cave, a fall of volcanic ash. Die on open ground, or in forest, and the sequence stops here.',
  },
  {
    label: 'buried before scavengers finish',
    pass: 0.1,
    detail:
      'Carcasses are dismembered within hours and bone is cracked for marrow. Burial has to be fast — days, not seasons.',
  },
  {
    label: 'mineral chemistry preserves rather than dissolves bone',
    pass: 0.2,
    detail:
      'Groundwater must replace bone mineral instead of removing it. Acidic soils, which is most of tropical forest, destroy bone entirely.',
  },
  {
    label: 'the deposit survives erosion and burial',
    pass: 0.1,
    detail:
      'Tens of thousands of centuries of uplift, faulting, erosion and re-burial. Most sedimentary sequences of this age are simply gone.',
  },
  {
    label: 'exposed at the surface, now',
    pass: 0.05,
    detail:
      'Too early and it has already weathered away. Too late and it is still buried. The window is a few thousand years wide.',
  },
  {
    label: 'somebody is standing there and looks down',
    pass: 0.1,
    detail:
      'Fieldwork concentrates where fossils have already been found, which is why the map of hominin discovery closely matches the map of hominin searching.',
  },
];

export default function FossilFilter(_props: VisualizationProps): ReactNode {
  const [start, setStart] = useState(6);
  const [pick, setPick] = useState(0);
  const step = STEPS[Math.min(pick, STEPS.length - 1)];
  if (!step) return null;

  let n = 10 ** start;
  const counts = STEPS.map((s) => {
    n *= s.pass;
    return n;
  });

  const fmt = (v: number): string => {
    if (v >= 1000) return `${Math.round(v).toLocaleString('en-GB')}`;
    if (v >= 1) return v.toFixed(0);
    if (v >= 0.01) return v.toFixed(2);
    return v.toExponential(1);
  };

  return (
    <Stack>
      <Figure height={210}>
        <text x={14} y={16} fontSize={8.5} fill={C.dim}>
          starting population: {(10 ** start).toLocaleString('en-GB')} individuals
        </text>
        {STEPS.map((s, i) => {
          const y = 28 + i * 28;
          const w = 320 * (0.92 - i * 0.13);
          const active = i === pick;
          return (
            <g key={s.label} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={14 + (320 - w) / 2}
                y={y}
                width={w}
                height={20}
                rx={4}
                fill={active ? 'rgba(79,224,192,0.22)' : 'rgba(148,162,192,0.1)'}
                stroke={active ? C.life : 'transparent'}
              />
              <text
                x={14 + (320 - w) / 2 + 8}
                y={y + 14}
                fontSize={7.5}
                fill={active ? C.life : C.faint}
              >
                {s.label}
              </text>
              <text x={366} y={y + 14} textAnchor="end" fontSize={8} fill={active ? C.life : C.dim}>
                {fmt(counts[i] ?? 0)}
              </text>
            </g>
          );
        })}
        <text x={14} y={202} fontSize={8} fill={C.warm}>
          expected number recovered: {fmt(counts[counts.length - 1] ?? 0)}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Population"
          hiddenLabel="Starting population size, as a power of ten"
          min={4}
          max={9}
          step={1}
          value={start}
          onChange={setStart}
          display={`10^${start}`}
        />
      </ControlRows>

      <Note>
        <strong>{step.label}.</strong> {step.detail} Tap a stage to read it. The survival
        probabilities here are illustrative rather than measured, and real values vary enormously
        between environments — but the shape is the finding. The hominin fossil record is not a thin
        version of the truth, it is a heavily biased sample, and the bias has direction: towards
        East Africa, where the Rift Valley supplies burial, datable volcanic ash and continuous
        exposure all at once, and away from the wet forests where a great deal of primate evolution
        probably happened. When a species is described as East African, the honest statement is
        often that East Africa is where we can see.
      </Note>
    </Stack>
  );
}
