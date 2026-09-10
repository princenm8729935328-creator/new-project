import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * The boundary between chemistry and biology, drawn as a slope rather than a line.
 *
 * A slider is the right control here precisely because it cannot be snapped to
 * a boundary. Wherever the reader stops it, the systems on either side differ
 * by a little, and the figure never offers a place to draw the line — because
 * the evidence does not offer one either.
 */

interface Rung {
  readonly at: number;
  readonly name: string;
  readonly detail: string;
}

const RUNGS: readonly Rung[] = [
  {
    at: 0,
    name: 'Simple molecules',
    detail:
      'Water, methane, ammonia, hydrogen cyanide. Nobody calls these alive, and nothing about them is controversial.',
  },
  {
    at: 0.16,
    name: 'Amino acids and sugars',
    detail:
      'The building blocks. They form readily under plausible early-Earth conditions and arrive on meteorites. Still plainly chemistry.',
  },
  {
    at: 0.32,
    name: 'Polymers',
    detail:
      'Chains of those units — short peptides, short nucleic acids. Now there is a sequence, and a sequence can carry information.',
  },
  {
    at: 0.48,
    name: 'Self-templating molecules',
    detail:
      'A sequence that catalyses the assembly of a copy of itself. Heredity has appeared. Alive? Most people say no, but the reasons are getting harder to state.',
  },
  {
    at: 0.64,
    name: 'Autocatalytic sets',
    detail:
      'A network of molecules that collectively makes more of itself. Metabolism, of a sort, without any individual replicator being in charge.',
  },
  {
    at: 0.78,
    name: 'Protocells',
    detail:
      'A membrane with replicating contents that grows and divides. It has a boundary, an inside, heredity and a crude metabolism. This is where honest disagreement is unavoidable.',
  },
  {
    at: 0.9,
    name: 'Viruses',
    detail:
      'Fully evolved, exquisitely adapted, and unable to do anything at all without a host cell. Placed here because they sit at the boundary from the other direction — they are simpler than a cell but derived from a world that already had cells.',
  },
  {
    at: 1,
    name: 'Cells',
    detail: 'Metabolism, heredity, boundary, response, evolution. Uncontroversially alive.',
  },
];

export default function LifeNonlifeGradient(_props: VisualizationProps): ReactNode {
  const [pos, setPos] = useState(0.48);
  const nearest = RUNGS.reduce(
    (best, r) => (Math.abs(r.at - pos) < Math.abs(best.at - pos) ? r : best),
    RUNGS[0] as Rung,
  );

  const LEFT = 16;
  const W = 348;
  const Y = 96;
  const x = (v: number): number => LEFT + v * W;

  return (
    <Stack>
      <Figure height={168}>
        <defs>
          <linearGradient id="lng" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(148,162,192,0.5)" />
            <stop offset="100%" stopColor={C.life} />
          </linearGradient>
        </defs>
        <text x={LEFT} y={16} fontSize={9} fill={C.dim}>
          plainly chemistry
        </text>
        <text x={LEFT + W} y={16} textAnchor="end" fontSize={9} fill={C.life}>
          plainly alive
        </text>

        <rect x={LEFT} y={Y - 7} width={W} height={14} rx={7} fill="url(#lng)" opacity={0.55} />

        {RUNGS.map((r) => (
          <g key={r.name}>
            <circle
              cx={x(r.at)}
              cy={Y}
              r={r === nearest ? 6 : 3.4}
              fill={r === nearest ? '#fff' : 'rgba(233,238,247,0.7)'}
            />
            <text
              x={x(r.at)}
              y={r.at % 0.32 < 0.1 ? Y - 16 : Y + 22}
              textAnchor="middle"
              fontSize={7.6}
              fill={r === nearest ? '#fff' : C.faint}
            >
              {r.name}
            </text>
          </g>
        ))}

        <text x={190} y={150} textAnchor="middle" fontSize={8.5} fill={C.warm}>
          there is no tick mark here that everyone agrees on
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Position"
          hiddenLabel="Position along the chemistry to biology gradient"
          min={0}
          max={1}
          step={0.01}
          value={pos}
          onChange={setPos}
          display={`${Math.round(pos * 100)}%`}
        />
      </ControlRows>

      <Note>
        <strong>{nearest.name}.</strong> {nearest.detail}
      </Note>
    </Stack>
  );
}
