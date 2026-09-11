import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why an Oldowan flake is harder to make than it looks.
 *
 * The exterior platform angle is the variable that decides between a usable
 * flake and a shattered core, and it is narrow. Letting the reader miss the
 * window repeatedly is the fastest way to retire the word "crude".
 */

export default function KnappingMechanics(_props: VisualizationProps): ReactNode {
  const [angle, setAngle] = useState(72);
  const [force, setForce] = useState(55);

  const angleOk = angle >= 55 && angle <= 85;
  const forceOk = force >= 40 && force <= 78;
  const good = angleOk && forceOk;
  const outcome = good
    ? 'clean flake with a sharp edge'
    : !angleOk && angle > 85
      ? 'blow bounces off — no flake'
      : !angleOk
        ? 'platform crushes, core damaged'
        : force < 40
          ? 'step termination — flake stops short and ruins the edge'
          : 'core shatters';

  const CX = 200;
  const CY = 118;
  const rad = (angle * Math.PI) / 180;

  return (
    <Stack>
      <Figure height={206}>
        <path
          d={`M${CX - 76},${CY + 46} L${CX - 62},${CY - 30} L${CX + 10},${CY - 36} L${CX + 58},${CY + 12} L${CX + 34},${CY + 46} Z`}
          fill="rgba(197,143,106,0.25)"
          stroke="rgba(197,143,106,0.7)"
          strokeWidth={1.4}
        />
        <line
          x1={CX - 62}
          y1={CY - 30}
          x2={CX + 10}
          y2={CY - 36}
          stroke={C.warm}
          strokeWidth={2.4}
        />
        <text x={CX - 26} y={CY - 44} textAnchor="middle" fontSize={7.5} fill={C.warm}>
          striking platform
        </text>

        <line
          x1={CX - 40}
          y1={CY - 32}
          x2={CX - 40 - Math.cos(rad) * 54}
          y2={CY - 32 - Math.sin(rad) * 54}
          stroke={good ? C.life : C.hot}
          strokeWidth={2.4}
        />
        <circle
          cx={CX - 40 - Math.cos(rad) * 54}
          cy={CY - 32 - Math.sin(rad) * 54}
          r={7 + force / 22}
          fill={good ? C.life : C.hot}
          opacity={0.7}
        />
        <path
          d={`M${CX - 62},${CY - 30} A 22 22 0 0 1 ${CX - 40 - Math.cos(rad) * 22},${CY - 32 - Math.sin(rad) * 22}`}
          fill="none"
          stroke={good ? C.life : C.hot}
          strokeWidth={1}
          strokeDasharray="3 2"
        />
        <text x={CX - 96} y={CY - 20} fontSize={8} fill={good ? C.life : C.hot}>
          {angle}°
        </text>

        {good ? (
          <path
            d={`M${CX - 62},${CY - 30} Q${CX - 74},${CY} ${CX - 66},${CY + 30}`}
            fill="none"
            stroke={C.life}
            strokeWidth={2.2}
          />
        ) : (
          <g>
            <path
              d={`M${CX - 60},${CY - 26} l-8,14 l6,4 l-10,16`}
              fill="none"
              stroke={C.hot}
              strokeWidth={1.6}
            />
            <path
              d={`M${CX - 44},${CY - 24} l4,18 l-7,3`}
              fill="none"
              stroke={C.hot}
              strokeWidth={1.6}
            />
          </g>
        )}

        <rect
          x={14}
          y={172}
          width={352}
          height={22}
          rx={5}
          fill={good ? 'rgba(79,224,192,0.14)' : 'rgba(255,143,110,0.14)'}
        />
        <text x={22} y={187} fontSize={9} fill={good ? C.life : C.hot}>
          {outcome}
        </text>
        <text x={14} y={20} fontSize={8.5} fill={C.dim}>
          usable window: platform angle 55–85°, force in a narrow band
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Platform angle"
          hiddenLabel="Angle of the core edge being struck, in degrees"
          min={30}
          max={110}
          step={1}
          value={angle}
          onChange={setAngle}
          display={`${angle}°`}
        />
        <Slider
          name="Force"
          hiddenLabel="Force of the blow"
          min={10}
          max={100}
          step={1}
          value={force}
          onChange={setForce}
          display={`${force}`}
        />
      </ControlRows>

      <Note>
        Stone does not break where you hit it. It fractures along a cone of force spreading from the
        impact, and whether a usable flake detaches depends on the angle of the edge you strike, the
        angle and force of the blow, and the internal structure of the stone — which has to be read
        from the outside. Most people attempting this produce nothing usable for a long time. Which
        is why Oldowan assemblages stop looking crude when you know what to look for: the failure
        patterns that dominate a beginner’s output are uncommon in them, and raw material was often
        selected and carried several kilometres before use. Carrying a cobble that far means
        anticipating a future need at a place you are not yet at, with a material chosen for
        properties you have learned about. The mechanics here are simplified; the narrowness of the
        window is real.
      </Note>
    </Stack>
  );
}
