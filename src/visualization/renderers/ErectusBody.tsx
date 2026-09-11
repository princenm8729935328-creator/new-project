import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Limb proportions as the clearest single signal of commitment to the ground.
 *
 * The intermembral index is a real, simple measurement and it separates these
 * three cleanly, which makes it a better figure than a set of silhouettes.
 */

interface Form {
  readonly key: string;
  readonly index: number;
  readonly height: string;
  readonly cc: string;
  readonly note: string;
  readonly armScale: number;
  readonly legScale: number;
}

const FORMS: readonly Form[] = [
  {
    key: 'Chimpanzee',
    index: 106,
    height: '~1.1 m standing',
    cc: '~400 cm³',
    armScale: 1.18,
    legScale: 0.82,
    note: 'Arms longer than legs. The body is built around moving through branches and supporting weight on the forelimbs.',
  },
  {
    key: 'Au. afarensis',
    index: 89,
    height: '~1.1 m',
    cc: '~420 cm³',
    armScale: 1.0,
    legScale: 0.9,
    note: 'Intermediate. The legs are doing the walking and the arms have not been reduced — the compromise that defines the australopiths for two million years.',
  },
  {
    key: 'H. erectus',
    index: 74,
    height: '~1.7 m',
    cc: '~900 cm³',
    armScale: 0.85,
    legScale: 1.25,
    note: 'Essentially the modern human ratio. Long legs, short arms, narrow hips, a barrel chest — a body for covering ground, with nothing left of the climbing compromise.',
  },
];

export default function ErectusBody(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(2);
  const f = FORMS[Math.min(pick, FORMS.length - 1)];
  if (!f) return null;

  const CX = 300;
  const SHOULDER = 56;
  const HIP = SHOULDER + 46;

  return (
    <Stack>
      <Figure height={196}>
        <circle cx={CX} cy={38} r={11} fill="rgba(148,162,192,0.3)" />
        <line x1={CX} y1={49} x2={CX} y2={HIP} stroke="rgba(148,162,192,0.35)" strokeWidth={9} />
        <line
          x1={CX - 14}
          y1={SHOULDER}
          x2={CX - 22}
          y2={SHOULDER + 52 * f.armScale}
          stroke={C.warm}
          strokeWidth={6}
          strokeLinecap="round"
        />
        <line
          x1={CX + 14}
          y1={SHOULDER}
          x2={CX + 22}
          y2={SHOULDER + 52 * f.armScale}
          stroke={C.warm}
          strokeWidth={6}
          strokeLinecap="round"
        />
        <line
          x1={CX - 8}
          y1={HIP}
          x2={CX - 10}
          y2={HIP + 56 * f.legScale}
          stroke={C.life}
          strokeWidth={7}
          strokeLinecap="round"
        />
        <line
          x1={CX + 8}
          y1={HIP}
          x2={CX + 10}
          y2={HIP + 56 * f.legScale}
          stroke={C.life}
          strokeWidth={7}
          strokeLinecap="round"
        />
        <text
          x={CX - 30}
          y={SHOULDER + 52 * f.armScale + 14}
          textAnchor="middle"
          fontSize={7.5}
          fill={C.warm}
        >
          arm
        </text>
        <text
          x={CX + 30}
          y={HIP + 56 * f.legScale + 14}
          textAnchor="middle"
          fontSize={7.5}
          fill={C.life}
        >
          leg
        </text>

        <text x={14} y={24} fontSize={10} fill="rgba(233,238,247,0.95)">
          {f.key}
        </text>
        <text x={14} y={44} fontSize={8.5} fill={C.dim}>
          {f.height} · brain {f.cc}
        </text>

        <text x={14} y={76} fontSize={8} fill={C.dim}>
          arm length as % of leg length
        </text>
        <rect x={14} y={84} width={200} height={12} rx={5} fill="rgba(148,162,192,0.14)" />
        <rect
          x={14}
          y={84}
          width={200 * (f.index / 120)}
          height={12}
          rx={5}
          fill={f.index > 95 ? C.warm : f.index > 80 ? 'rgba(255,210,127,0.7)' : C.life}
        />
        <text x={14} y={112} fontSize={16} fill={f.index > 95 ? C.warm : C.life}>
          {f.index}
        </text>
        <text x={14} y={130} fontSize={7.5} fill={C.faint}>
          above 100 means arms longer than legs
        </text>
        <text x={14} y={182} fontSize={7.5} fill={C.faint}>
          figures schematic; index values are approximate published means
        </text>
      </Figure>

      <ToggleRow label="Form" options={FORMS.map((x) => x.key)} value={pick} onChange={setPick} />

      <Note>
        <strong>{f.key}.</strong> {f.note} The Turkana Boy skeleton, found in 1984 and dated to
        about 1.5 million years ago, is the specimen that made this clear: an individual who died at
        perhaps eight to ten years old and would have passed 1.8 metres as an adult, with a body
        that below the neck is essentially ours. Several things change together around this time —
        body size, leg length, an apparently smaller gut, brain size, and the appearance of the
        Acheulean handaxe. The association is well supported; which change drove which is not.
      </Note>
    </Stack>
  );
}
