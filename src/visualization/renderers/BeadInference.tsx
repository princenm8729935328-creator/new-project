import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The chain of tests a perforated shell has to pass before it is a bead.
 *
 * Each link can fail, and drawing them as a chain shows why archaeological
 * claims about symbolism are so much more fragile than they sound when
 * summarised.
 */

interface Test {
  readonly key: string;
  readonly question: string;
  readonly failIf: string;
  readonly taforalt: boolean;
}

const TESTS: readonly Test[] = [
  {
    key: 'Non-local',
    question: 'Did the shell travel?',
    failIf:
      'If the species lives where the shell was found, it could have arrived with the sediment, or with a meal.',
    taforalt: true,
  },
  {
    key: 'Perforation',
    question: 'Was the hole made by a person?',
    failIf:
      'Predatory molluscs drill shells, leaving a characteristic bevelled profile at positions the predator chooses. Waves and abrasion break them in predictable places.',
    taforalt: true,
  },
  {
    key: 'Wear',
    question: 'Was it actually worn?',
    failIf:
      'A hole is not a bead unless something passed through it. Polish at the perforation margins shows a cord moved against it over time.',
    taforalt: true,
  },
  {
    key: 'Selection',
    question: 'Were they chosen?',
    failIf:
      'A tight species and size range implies deliberate selection; a natural accumulation would contain a spread of whatever was available.',
    taforalt: true,
  },
  {
    key: 'Context',
    question: 'Do they cluster with other signs of use?',
    failIf:
      'Ochre residue, association with burials or living surfaces, repetition across layers. A single isolated example is much weaker evidence.',
    taforalt: true,
  },
];

export default function BeadInference(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const t = TESTS[Math.min(pick, TESTS.length - 1)];
  if (!t) return null;

  return (
    <Stack>
      <Figure height={190}>
        <text x={14} y={16} fontSize={8.5} fill={C.dim}>
          a shell with a hole in it — is it an ornament?
        </text>
        {TESTS.map((x, i) => {
          const y = 40 + i * 27;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              {i < TESTS.length - 1 ? (
                <line
                  x1={40}
                  y1={y + 6}
                  x2={40}
                  y2={y + 21}
                  stroke="rgba(148,162,192,0.35)"
                  strokeWidth={1.4}
                />
              ) : null}
              <circle
                cx={40}
                cy={y}
                r={active ? 9 : 6.5}
                fill={x.taforalt ? C.life : C.hot}
                opacity={active ? 1 : 0.6}
              />
              <text x={40} y={y + 3.5} textAnchor="middle" fontSize={8} fill="rgba(9,16,14,0.85)">
                ✓
              </text>
              <text x={60} y={y - 1} fontSize={8.5} fill={active ? C.life : C.dim}>
                {x.key}
              </text>
              <text x={60} y={y + 10} fontSize={7.5} fill={C.faint}>
                {x.question}
              </text>
            </g>
          );
        })}
        <text x={14} y={182} fontSize={8} fill={C.life}>
          Taforalt, Morocco, ~82 ka: passes all five
        </text>
      </Figure>

      <ToggleRow label="Test" options={TESTS.map((x) => x.key)} value={pick} onChange={setPick} />

      <Note>
        <strong>
          {t.key} — {t.question}
        </strong>{' '}
        {t.failIf} Assemblages that pass every test do exist, and the earliest are from North and
        South Africa around 80,000 years ago. The distance matters as much as the shells themselves:
        carrying an inedible object tens of kilometres inland, modifying it, and wearing it has no
        nutritional or practical payoff, which is precisely why it implies a social meaning. A
        symbol only works if it is shared — somebody has to read the mark. Pigment is a weaker case
        than it is usually presented as, because ochre improves adhesives, preserves hides and may
        work as sunscreen, so its presence alone demonstrates nothing. What strengthens it is
        processing beyond practical need: grinding to fine powder, selection for particular colours,
        application to objects rather than materials.
      </Note>
    </Stack>
  );
}
