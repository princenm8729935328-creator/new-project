import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why single-leg support is the mechanical problem bipedalism had to solve.
 *
 * The slider is the hip abductor lever arm — the one measurement that separates
 * a human pelvis from an ape pelvis. Watching the body tilt as it shortens is a
 * faster explanation than any description of ilium shape.
 */

export default function BipedalBalance(_props: VisualizationProps): ReactNode {
  const [lever, setLever] = useState(5);

  // Body weight acts at the midline; the abductors act at `lever` cm from the
  // hip joint. Required muscle force scales inversely with the lever arm.
  const bodyArm = 9;
  const force = bodyArm / Math.max(lever, 0.6);
  const tilt = Math.max(0, Math.min(22, (force - 1.8) * 7));
  const ok = tilt < 4;

  const HIP_X = 190;
  const HIP_Y = 74;

  return (
    <Stack>
      <Figure height={210}>
        <text x={16} y={16} fontSize={8.5} fill={C.dim}>
          standing on the left leg only
        </text>

        <g transform={`rotate(${-tilt} ${HIP_X} ${HIP_Y})`}>
          <rect
            x={HIP_X - 52}
            y={HIP_Y - 8}
            width={104}
            height={16}
            rx={5}
            fill="rgba(148,162,192,0.5)"
          />
          <line
            x1={HIP_X}
            y1={HIP_Y - 8}
            x2={HIP_X}
            y2={HIP_Y - 44}
            stroke="rgba(148,162,192,0.5)"
            strokeWidth={7}
          />
          <circle cx={HIP_X} cy={HIP_Y - 56} r={11} fill="rgba(148,162,192,0.45)" />
          <line
            x1={HIP_X - 52 + (52 - lever * 5.2)}
            y1={HIP_Y - 6}
            x2={HIP_X - 52}
            y2={HIP_Y - 6}
            stroke={C.life}
            strokeWidth={3}
          />
          <text x={HIP_X - 54} y={HIP_Y - 14} textAnchor="end" fontSize={7.5} fill={C.life}>
            abductors
          </text>
          <line
            x1={HIP_X + 40}
            y1={HIP_Y + 8}
            x2={HIP_X + 54}
            y2={HIP_Y + 46}
            stroke="rgba(148,162,192,0.4)"
            strokeWidth={5}
          />
        </g>

        <line
          x1={HIP_X - 52}
          y1={HIP_Y}
          x2={HIP_X - 52}
          y2={172}
          stroke="rgba(148,162,192,0.55)"
          strokeWidth={6}
        />
        <ellipse cx={HIP_X - 52} cy={176} rx={18} ry={5} fill="rgba(148,162,192,0.4)" />
        <circle cx={HIP_X - 52} cy={HIP_Y} r={5} fill={C.warm} />

        <line
          x1={HIP_X}
          y1={HIP_Y}
          x2={HIP_X}
          y2={168}
          stroke={C.hot}
          strokeWidth={1.2}
          strokeDasharray="4 3"
        />
        <text x={HIP_X + 4} y={164} fontSize={7.5} fill={C.hot}>
          body weight falls here
        </text>
        <text x={HIP_X - 52} y={196} textAnchor="middle" fontSize={7.5} fill={C.warm}>
          support is here
        </text>

        <rect
          x={16}
          y={186}
          width={120}
          height={14}
          rx={4}
          fill={ok ? 'rgba(79,224,192,0.2)' : 'rgba(255,143,110,0.2)'}
        />
        <text x={22} y={196} fontSize={8} fill={ok ? C.life : C.hot}>
          {ok ? 'pelvis stays level' : 'pelvis drops — lurching gait'}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Abductor lever"
          hiddenLabel="Distance from the hip joint to where the abductor muscles pull, in centimetres"
          min={1}
          max={9}
          step={0.2}
          value={lever}
          onChange={setLever}
          display={`${lever.toFixed(1)} cm`}
        />
      </ControlRows>

      <Note>
        With one foot off the ground, body weight hangs to the side of the supporting hip and tries
        to tip the pelvis over. Muscles on the outside of the hip hold it level — but only if they
        have a lever to pull on. In a human the upper pelvis is short and curls around to the side,
        putting those muscles where they can do that job with a force of roughly{' '}
        <strong>{force.toFixed(1)}×</strong> body weight. In an ape the pelvis is tall and flat, the
        lever is short, and the required force becomes impossible — which is why a chimpanzee
        walking upright swings its whole trunk over each foot in turn. The geometry is simplified
        here and the human figures are approximate, but the inverse relationship is the real
        constraint, and it is why a fragment of pelvis can establish that an extinct animal walked.
      </Note>
    </Stack>
  );
}
