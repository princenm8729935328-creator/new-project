import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why a human hand can pinch a coin and a chimpanzee hand cannot.
 *
 * The slider morphs proportions between the two, and the thumb either reaches
 * the fingertip or does not. No new bones appear along the way, which is the
 * point: it is a change of ratio, not of structure.
 */

export default function HandProportions(_props: VisualizationProps): ReactNode {
  // 0 = chimpanzee proportions, 1 = human proportions.
  const [t, setT] = useState(1);

  const fingerLen = 74 - 26 * t;
  const thumbLen = 30 + 20 * t;
  const ratio = thumbLen / fingerLen;
  const canPinch = ratio > 0.58;

  const PALM_X = 190;
  const PALM_Y = 150;

  const thumbTipX = PALM_X - 26 - thumbLen * 0.52;
  const thumbTipY = PALM_Y - 16 - thumbLen * 0.62;
  const indexTipX = PALM_X - 18;
  const indexTipY = PALM_Y - 34 - fingerLen;

  // Where the thumb can actually reach across towards the index fingertip.
  const reachX = PALM_X - 18 - (canPinch ? 0 : (0.58 - ratio) * 150);
  const reachY = indexTipY + (canPinch ? 0 : (0.58 - ratio) * 190);

  return (
    <Stack>
      <Figure height={214}>
        <rect
          x={PALM_X - 30}
          y={PALM_Y - 34}
          width={60}
          height={44}
          rx={10}
          fill="rgba(148,162,192,0.3)"
        />
        <rect
          x={PALM_X - 12}
          y={PALM_Y + 8}
          width={24}
          height={26}
          rx={8}
          fill="rgba(148,162,192,0.22)"
        />

        {[0, 1, 2, 3].map((i) => {
          const len = fingerLen * (i === 0 ? 0.94 : i === 1 ? 1 : i === 2 ? 0.95 : 0.78);
          const x = PALM_X - 18 + i * 12;
          return (
            <g key={i}>
              <line
                x1={x}
                y1={PALM_Y - 30}
                x2={x}
                y2={PALM_Y - 34 - len}
                stroke="rgba(148,162,192,0.55)"
                strokeWidth={7}
                strokeLinecap="round"
              />
            </g>
          );
        })}

        <line
          x1={PALM_X - 26}
          y1={PALM_Y - 16}
          x2={thumbTipX}
          y2={thumbTipY}
          stroke={C.life}
          strokeWidth={9}
          strokeLinecap="round"
        />

        <path
          d={`M${thumbTipX},${thumbTipY} Q${(thumbTipX + reachX) / 2 - 14},${(thumbTipY + reachY) / 2} ${reachX},${reachY}`}
          fill="none"
          stroke={canPinch ? C.life : C.hot}
          strokeWidth={1.3}
          strokeDasharray="4 3"
        />
        <circle cx={reachX} cy={reachY} r={4} fill={canPinch ? C.life : C.hot} />
        <circle cx={indexTipX} cy={indexTipY} r={4} fill="rgba(233,238,247,0.8)" />

        <text x={16} y={20} fontSize={9} fill={C.dim}>
          thumb-to-finger length ratio: {ratio.toFixed(2)}
        </text>
        <text x={16} y={36} fontSize={8} fill={C.faint}>
          chimpanzee ≈ 0.41 · human ≈ 0.72
        </text>
        <text x={16} y={62} fontSize={9.5} fill={canPinch ? C.life : C.hot}>
          {canPinch ? 'thumb pad reaches fingertip pad' : 'thumb falls short of the fingertip'}
        </text>
        <text x={16} y={78} fontSize={8} fill={C.dim}>
          {canPinch
            ? 'a coin, a needle, a stone flake can be gripped and turned'
            : 'objects are gripped against the side of the index finger instead'}
        </text>
        <text x={16} y={204} fontSize={7.5} fill={C.faint}>
          schematic; the ratios are real, the drawing is not an anatomical figure
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Proportions"
          hiddenLabel="Morph hand proportions from chimpanzee-like to human-like"
          min={0}
          max={1}
          step={0.02}
          value={t}
          onChange={setT}
          display={t < 0.2 ? 'chimpanzee-like' : t > 0.8 ? 'human-like' : 'intermediate'}
        />
      </ControlRows>

      <Note>
        Nothing structural changes as you move the slider. The same bones, the same joints, the same
        muscles — only the lengths differ. Shorten the fingers and lengthen the thumb, and a hand
        that could only hook and side-grip becomes one that can press pad against pad with force and
        control. That is the whole basis of the human precision grip, and it is a reminder that a
        small proportional change can produce a large functional one. The order of events is also
        worth noting: internal bone structure shows australopith hands were already being loaded
        this way, before the oldest stone tools their makers are confident about. The hand did not
        wait for technology.
      </Note>
    </Stack>
  );
}
