import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Mosaic evolution shown as a body coloured by which parts had changed.
 *
 * The colour split is the whole argument against "transitional form": these
 * animals are not part-way along a line, they are fully derived in some regions
 * and fully ancestral in others, and different species split differently.
 */

interface Species {
  readonly key: string;
  readonly ma: string;
  readonly derived: readonly string[];
  readonly retained: readonly string[];
  readonly note: string;
}

const SPECIES: readonly Species[] = [
  {
    key: 'Ar. ramidus',
    ma: '4.4 Ma',
    derived: ['pelvis'],
    retained: ['shoulder', 'arm', 'hand', 'foot'],
    note: 'A pelvis with upright-walking features and a foot with a grasping big toe — a combination no living primate has. The pelvis is heavily crushed and its reconstruction is disputed.',
  },
  {
    key: 'Au. afarensis',
    ma: '3.2 Ma',
    derived: ['pelvis', 'leg', 'foot'],
    retained: ['shoulder', 'arm', 'hand'],
    note: 'Lucy. From the waist down, committed to walking, with an arched foot and an inward-angled thigh. From the waist up, long arms, upward-facing shoulder sockets and curved fingers.',
  },
  {
    key: 'Au. sediba',
    ma: '2.0 Ma',
    derived: ['pelvis', 'hand'],
    retained: ['shoulder', 'arm', 'foot'],
    note: 'A long, strongly muscled thumb suited to precise manipulation alongside powerfully built curved fingers, in one individual. The heel is ape-like and the gait reconstructed from it is unlike ours.',
  },
  {
    key: 'H. erectus',
    ma: '1.5 Ma',
    derived: ['pelvis', 'leg', 'foot', 'shoulder', 'arm'],
    retained: ['hand'],
    note: 'Below the neck this is essentially a modern human body: long legs, short arms, a narrow waist, a barrel chest. The climbing compromise is over.',
  },
];

const REGIONS: readonly {
  readonly id: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
}[] = [
  { id: 'shoulder', label: 'shoulder', x: 190, y: 56 },
  { id: 'arm', label: 'arm', x: 236, y: 92 },
  { id: 'hand', label: 'hand', x: 248, y: 128 },
  { id: 'pelvis', label: 'pelvis', x: 190, y: 112 },
  { id: 'leg', label: 'leg', x: 176, y: 152 },
  { id: 'foot', label: 'foot', x: 176, y: 186 },
];

export default function MosaicBody(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const sp = SPECIES[Math.min(pick, SPECIES.length - 1)];
  if (!sp) return null;

  return (
    <Stack>
      <Figure height={210}>
        <circle cx={190} cy={30} r={12} fill="rgba(148,162,192,0.35)" />
        <line x1={190} y1={42} x2={190} y2={106} stroke="rgba(148,162,192,0.4)" strokeWidth={9} />
        {REGIONS.map((r) => {
          const derived = sp.derived.includes(r.id);
          const colour = derived ? C.life : C.warm;
          return (
            <g key={r.id}>
              <circle cx={r.x} cy={r.y} r={9} fill={colour} opacity={0.85} />
              <text
                x={r.x + (r.x > 200 ? 14 : -14)}
                y={r.y + 3}
                textAnchor={r.x > 200 ? 'start' : 'end'}
                fontSize={8}
                fill={colour}
              >
                {r.label}
              </text>
            </g>
          );
        })}
        <line x1={196} y1={58} x2={232} y2={90} stroke="rgba(148,162,192,0.3)" strokeWidth={4} />
        <line x1={238} y1={96} x2={246} y2={122} stroke="rgba(148,162,192,0.3)" strokeWidth={4} />
        <line x1={186} y1={118} x2={176} y2={148} stroke="rgba(148,162,192,0.3)" strokeWidth={5} />
        <line x1={176} y1={158} x2={176} y2={180} stroke="rgba(148,162,192,0.3)" strokeWidth={5} />

        <rect x={16} y={26} width={10} height={10} rx={2} fill={C.life} />
        <text x={32} y={35} fontSize={8} fill={C.life}>
          changed for walking
        </text>
        <rect x={16} y={44} width={10} height={10} rx={2} fill={C.warm} />
        <text x={32} y={53} fontSize={8} fill={C.warm}>
          still built for climbing
        </text>
        <text x={16} y={80} fontSize={11} fill="rgba(233,238,247,0.95)">
          {sp.key}
        </text>
        <text x={16} y={94} fontSize={8.5} fill={C.dim}>
          {sp.ma}
        </text>
        <text x={16} y={200} fontSize={7.5} fill={C.faint}>
          schematic: regions, not anatomical accuracy
        </text>
      </Figure>

      <ToggleRow
        label="Species"
        options={SPECIES.map((s) => s.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        {sp.note} This pattern — some parts fully changed, others unchanged — is called mosaic
        evolution, and it is the normal way bodies change. It is also why the phrase
        &ldquo;transitional form&rdquo; misleads: these animals were not in transit anywhere.
        Australopithecus afarensis persisted for roughly 900,000 years, about three times as long as
        our own species has so far. Whether the retained features were still being used or were
        simply not yet lost is a real and unresolved argument.
      </Note>
    </Stack>
  );
}
