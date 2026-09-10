import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * The hours, months and years after the impact.
 *
 * A single slider through time is the right control because the causes of death
 * changed completely: heat within hours, darkness within weeks, cold for years.
 * Which of those killed most is still argued, and the note says so.
 */

interface Phase {
  readonly from: number; // hours after impact
  readonly label: string;
  readonly detail: string;
  readonly colour: string;
  readonly light: number;
}

const PHASES: readonly Phase[] = [
  {
    from: 0,
    label: 'Impact',
    colour: C.hot,
    light: 1,
    detail:
      'A body roughly ten kilometres across arrives at about twenty kilometres per second, releasing energy on the order of a hundred million megatons and excavating a crater 180 kilometres wide. The target rock happens to be sulphur-rich carbonate — which turns out to matter enormously.',
  },
  {
    from: 1,
    label: 'Hours: the sky heats',
    colour: C.hot,
    light: 0.9,
    detail:
      'Molten rock thrown on ballistic trajectories re-enters the atmosphere worldwide, heating the upper air to something like the inside of an oven. Anything exposed on the surface across much of the planet is in serious trouble within hours. Being underground, underwater or in a burrow is now the difference between surviving and not.',
  },
  {
    from: 240,
    label: 'Weeks: darkness',
    colour: C.deep,
    light: 0.06,
    detail:
      'Sulphate aerosol and fine dust in the stratosphere cut sunlight at the surface by orders of magnitude. Photosynthesis largely stops, in the oceans and on land.',
  },
  {
    from: 4000,
    label: 'Months to years: cold',
    colour: C.water,
    light: 0.2,
    detail:
      'Global temperatures fall sharply — model estimates vary widely, but a drop of well over ten degrees for several years is typical. Food chains that depend on living plants and plankton have already collapsed from the bottom.',
  },
  {
    from: 26000,
    label: 'Years: recovery begins',
    colour: C.warm,
    light: 0.6,
    detail:
      'Aerosols settle out and light returns. The survivors are small animals, burrowers, and things that could live on detritus rather than living plants — including freshwater communities running on decaying material washed in from outside.',
  },
  {
    from: 90000,
    label: 'Decades: a warmed world',
    colour: C.hot,
    light: 0.85,
    detail:
      'Carbon dioxide released by the impact and by the Deccan eruptions outlasts the aerosols, leaving a warmer world than before. Nothing on land above roughly 25 kilograms is left to notice.',
  },
];

export default function ImpactWinter(_props: VisualizationProps): ReactNode {
  const [t, setT] = useState(240);
  const phase = [...PHASES].reverse().find((p) => t >= p.from) ?? PHASES[0];
  if (!phase) return null;

  return (
    <Stack>
      <Figure height={188}>
        <rect
          x={12}
          y={18}
          width={356}
          height={72}
          rx={4}
          fill={`rgba(143,184,255,${0.05 + phase.light * 0.18})`}
        />
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={i}
            x1={30 + i * 40}
            y1={22}
            x2={38 + i * 40}
            y2={22 + 60 * phase.light}
            stroke={C.warm}
            strokeWidth={1.4}
            opacity={phase.light}
          />
        ))}
        <rect x={12} y={90} width={356} height={22} fill={C.rock} opacity={0.6} />
        {Array.from({ length: 12 }, (_, i) => (
          <circle
            key={i}
            cx={26 + i * 30}
            cy={86}
            r={4}
            fill={C.life}
            opacity={Math.min(1, phase.light * 1.4)}
          />
        ))}

        <text x={20} y={132} fontSize={10} fill={phase.colour}>
          {phase.label}
        </text>
        <text x={20} y={148} fontSize={8.5} fill={C.dim} fontFamily="ui-monospace, monospace">
          sunlight reaching the surface: {(phase.light * 100).toFixed(0)}% of normal
        </text>
        <text x={20} y={172} fontSize={8.5} fill={C.faint}>
          {t < 48
            ? `${t} hours after impact`
            : t < 8760
              ? `${Math.round(t / 24)} days after impact`
              : `${(t / 8760).toFixed(1)} years after impact`}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Time"
          hiddenLabel="Hours after the impact, log scale"
          min={0}
          max={5}
          step={0.05}
          value={Math.log10(Math.max(t, 1))}
          onChange={(v) => setT(10 ** v)}
          display={
            t < 48
              ? `${t.toFixed(0)} h`
              : t < 8760
                ? `${(t / 24).toFixed(0)} d`
                : `${(t / 8760).toFixed(1)} yr`
          }
        />
      </ControlRows>

      <Note>
        {phase.detail} Which phase did most of the killing is still argued — the thermal pulse, the
        darkness, the cold, and ocean acidification from the sulphur all have advocates — and so is
        how much the Deccan Traps eruptions, running across the same interval, contributed. The
        impact is now generally accepted as the proximate trigger. The light levels here are
        illustrative of published model ranges rather than a specific simulation.
      </Note>
    </Stack>
  );
}
