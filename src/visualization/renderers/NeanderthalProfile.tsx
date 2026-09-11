import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Cold adaptation as measurable body proportions, and capability as an
 * evidence list.
 *
 * Both halves are needed. The caricature was about the body, and the
 * rehabilitation is about the behaviour, so a figure that only did one would
 * leave half the misconception standing.
 */

const VIEWS = ['Body', 'What they did'] as const;

interface Capability {
  readonly key: string;
  readonly evidence: string;
  readonly firmness: number;
}

const CAPABILITIES: readonly Capability[] = [
  {
    key: 'Prepared-core tools',
    firmness: 1,
    evidence:
      'Shaping a core so that one final blow detaches a flake of predetermined form — planning several steps ahead in stone. Abundant and uncontroversial.',
  },
  {
    key: 'Compound adhesives',
    firmness: 0.95,
    evidence:
      'Birch-bark tar, which requires heating bark in the absence of oxygen at a controlled temperature. A multi-step recipe with no visible intermediate reward.',
  },
  {
    key: 'Fire',
    firmness: 0.95,
    evidence: 'Hearths at many sites, used habitually.',
  },
  {
    key: 'Care of the injured',
    firmness: 0.85,
    evidence:
      'Several skeletons show severe disabling injuries — a withered arm, a healed skull fracture, blindness in one eye, extensive tooth loss — healed long before death. An individual who cannot hunt or chew does not survive alone in glacial Europe.',
  },
  {
    key: 'Pigment use',
    firmness: 0.7,
    evidence:
      'Manganese and ochre at multiple sites, sometimes ground. Pigment has practical uses, so this is weaker evidence of symbolism than it is often presented as.',
  },
  {
    key: 'Cave markings',
    firmness: 0.4,
    evidence:
      'Markings in three Spanish caves dated older than 64,800 years, which would make them Neanderthal. The dating method assumes closed-system behaviour in the carbonate crust and is disputed.',
  },
  {
    key: 'Intentional burial',
    firmness: 0.4,
    evidence:
      'Re-excavation at La Chapelle-aux-Saints has been read as demonstrating a deliberately dug pit, and by other workers examining the same evidence as not demonstrating one. Genuinely unresolved.',
  },
];

export default function NeanderthalProfile(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const [pick, setPick] = useState(3);
  const cap = CAPABILITIES[Math.min(pick, CAPABILITIES.length - 1)];
  if (!cap) return null;

  return (
    <Stack>
      <Figure height={view === 0 ? 190 : 200}>
        {view === 0 ? (
          <g>
            {[
              { x: 118, label: 'Neanderthal', w: 44, limb: 40, colour: C.deep },
              { x: 262, label: 'H. sapiens', w: 32, limb: 56, colour: C.life },
            ].map((f) => (
              <g key={f.label}>
                <text x={f.x} y={22} textAnchor="middle" fontSize={9} fill={f.colour}>
                  {f.label}
                </text>
                <circle cx={f.x} cy={44} r={12} fill="rgba(148,162,192,0.3)" />
                <rect
                  x={f.x - f.w / 2}
                  y={58}
                  width={f.w}
                  height={46}
                  rx={10}
                  fill="rgba(148,162,192,0.25)"
                  stroke={f.colour}
                  strokeWidth={1.2}
                />
                <line
                  x1={f.x - 9}
                  y1={104}
                  x2={f.x - 11}
                  y2={104 + f.limb}
                  stroke={f.colour}
                  strokeWidth={7}
                  strokeLinecap="round"
                />
                <line
                  x1={f.x + 9}
                  y1={104}
                  x2={f.x + 11}
                  y2={104 + f.limb}
                  stroke={f.colour}
                  strokeWidth={7}
                  strokeLinecap="round"
                />
              </g>
            ))}
            <text x={190} y={159} textAnchor="middle" fontSize={8.5} fill={C.dim}>
              shorter limbs, broader trunk: less surface per unit volume
            </text>
            <text x={190} y={173} textAnchor="middle" fontSize={8} fill={C.faint}>
              the same rule that shapes cold-adapted mammals generally
            </text>
            <text x={190} y={186} textAnchor="middle" fontSize={7.5} fill={C.faint}>
              schematic proportions
            </text>
          </g>
        ) : (
          <g>
            <text x={14} y={16} fontSize={8.5} fill={C.dim}>
              how firmly each is established
            </text>
            {CAPABILITIES.map((c, i) => {
              const y = 34 + i * 23;
              const active = i === pick;
              return (
                <g key={c.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
                  <text x={14} y={y + 4} fontSize={8} fill={active ? C.life : C.dim}>
                    {c.key}
                  </text>
                  <rect
                    x={196}
                    y={y - 5}
                    width={160}
                    height={10}
                    rx={4}
                    fill="rgba(148,162,192,0.12)"
                  />
                  <rect
                    x={196}
                    y={y - 5}
                    width={160 * c.firmness}
                    height={10}
                    rx={4}
                    fill={c.firmness > 0.8 ? C.life : c.firmness > 0.6 ? C.warm : C.hot}
                    opacity={active ? 1 : 0.55}
                  />
                </g>
              );
            })}
            <text x={14} y={196} fontSize={7.5} fill={C.faint}>
              bar lengths summarise the state of the evidence, not a measurement
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'The image of a stooped, shuffling brute traces to one reconstruction: in 1911 Marcellin Boule described a skeleton from La Chapelle-aux-Saints as having a curved spine and bent knees. That individual had severe arthritis, and the reconstruction exaggerated the rest. Neanderthals stood fully upright and were considerably stronger than us. Their proportions are those of a cold-adapted mammal — short limbs and a broad, deep chest reduce the surface through which heat escapes — and their nasal architecture warmed and humidified incoming air. Their genomes also show small, fragmented populations with detectable inbreeding: the individual sequenced at high coverage from the Altai had parents related at about the level of half-siblings. That matters for what happened later, and it has nothing to do with capability.'
          : `${cap.key}. ${cap.evidence} The rehabilitation of Neanderthals has sometimes overshot into treating them as modern humans in different clothes. Both errors are worth avoiding: they were not inferior, and they were not us. Note also a double standard in how this evidence has been assessed — perforated shells, pigment and marked bones from Neanderthal contexts have historically drawn scrutiny that comparable Homo sapiens finds did not. Some of those claims are genuinely weak; the point is that the scrutiny should be applied evenly.`}
      </Note>
    </Stack>
  );
}
