import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Volume held constant while shape changes.
 *
 * The slider moves along the sapiens endocranial trajectory, and the volume
 * readout stays put. That is the finding: the modern globular braincase
 * developed after brain size had stopped increasing.
 */

export default function BrainShape(_props: VisualizationProps): ReactNode {
  // 0 = 300 ka, 1 = present.
  const [t, setT] = useState(1);

  const ka = Math.round(300 - t * 265);
  const rx = 62 - t * 8;
  const ry = 40 + t * 13;
  const occip = 1 - t;

  return (
    <Stack>
      <Figure height={204}>
        <ellipse
          cx={186}
          cy={86}
          rx={62}
          ry={40}
          fill="none"
          stroke="rgba(148,162,192,0.3)"
          strokeDasharray="4 3"
        />
        <text x={252} y={56} fontSize={7.5} fill={C.faint}>
          earliest H. sapiens
        </text>

        <path
          d={`M${186 - rx},86
              C${186 - rx},${86 - ry} ${186 + rx},${86 - ry} ${186 + rx},86
              C${186 + rx},${86 + ry * 0.8} ${186 + rx * 0.2 + occip * 22},${86 + ry * 0.95} ${186},${86 + ry * 0.9}
              C${186 - rx * 0.5},${86 + ry * 0.95} ${186 - rx},${86 + ry * 0.8} ${186 - rx},86 Z`}
          fill="rgba(201,168,255,0.2)"
          stroke={C.deep}
          strokeWidth={1.8}
        />
        {occip > 0.4 ? (
          <text x={186 + rx * 0.4} y={86 + ry + 16} fontSize={7.5} fill={C.warm}>
            elongated back
          </text>
        ) : (
          <text x={186} y={86 - ry - 8} textAnchor="middle" fontSize={7.5} fill={C.life}>
            parietal and cerebellar bulging
          </text>
        )}

        <text x={14} y={20} fontSize={9} fill={C.dim}>
          {ka} thousand years ago
        </text>
        <rect x={14} y={148} width={166} height={20} rx={4} fill="rgba(148,162,192,0.1)" />
        <text x={20} y={162} fontSize={9} fill={C.deep}>
          volume: ~1400 cm³ throughout
        </text>
        <rect x={196} y={148} width={170} height={20} rx={4} fill="rgba(79,224,192,0.12)" />
        <text x={202} y={162} fontSize={9} fill={C.life}>
          shape: changing
        </text>
        <text x={14} y={186} fontSize={7.5} fill={C.faint}>
          outline schematic, from published endocranial shape analyses
        </text>
        <text x={14} y={198} fontSize={7.5} fill={C.faint}>
          — not a drawing of any individual specimen
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Time"
          hiddenLabel="Move from the earliest Homo sapiens to the present"
          min={0}
          max={1}
          step={0.02}
          value={t}
          onChange={setT}
          display={`${ka} ka`}
        />
      </ControlRows>

      <Note>
        The number on the left does not move. Early Homo sapiens crania from around 300,000 years
        ago already had brains of roughly modern size, in an elongated braincase that looks archaic;
        the rounded globular shape we think of as modern appears gradually and reaches its present
        form only in the last 35,000 years or so. The regions that bulge are the parietal areas,
        involved in integrating sensory information and in spatial and tool-related processing, and
        the cerebellum. This is reorganisation rather than expansion. It is also a useful corrective
        to reading brain volume as capability at all: Neanderthal brains averaged slightly larger
        than ours, with a different shape and a different developmental path, and nobody proposes
        concluding from the volume that they were slightly ahead.
      </Note>
    </Stack>
  );
}
