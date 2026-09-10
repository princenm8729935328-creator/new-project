import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The easy problems and the hard one, separated.
 *
 * The point of the figure is that the left column is a list of tractable
 * scientific questions with real progress, and the right column is one item
 * that a complete answer to all of them still seems to leave untouched.
 */

const VIEWS = ['The two problems', 'Competing theories'] as const;

const EASY = [
  'discriminating stimuli',
  'integrating information',
  'focusing attention',
  'controlling behaviour',
  'reporting internal states',
  'the difference between waking and anaesthesia',
];

interface Theory {
  readonly name: string;
  readonly claim: string;
}

const THEORIES: readonly Theory[] = [
  {
    name: 'Global workspace',
    claim: 'consciousness is information broadcast widely across the brain',
  },
  {
    name: 'Integrated information',
    claim: 'a mathematical measure of how much a system’s parts inform each other',
  },
  {
    name: 'Higher-order',
    claim: 'a mental state is conscious when represented by another mental state',
  },
  {
    name: 'Predictive processing',
    claim: 'experience is the brain’s best current model of its own inputs',
  },
];

export default function ConsciousnessProblem(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={196}>
        {view === 0 ? (
          <g>
            <rect x={12} y={20} width={186} height={160} rx={5} fill="rgba(79,224,192,0.10)" />
            <text x={22} y={38} fontSize={9.5} fill={C.life}>
              the easy problems
            </text>
            <text x={22} y={50} fontSize={7.5} fill={C.faint}>
              easy only by comparison
            </text>
            {EASY.map((e, i) => (
              <g key={e}>
                <circle cx={28} cy={66 + i * 18} r={2.6} fill={C.life} />
                <text x={38} y={69 + i * 18} fontSize={8} fill="rgba(233,238,247,0.9)">
                  {e}
                </text>
              </g>
            ))}

            <rect x={206} y={20} width={162} height={160} rx={5} fill="rgba(255,143,110,0.10)" />
            <text x={216} y={38} fontSize={9.5} fill={C.hot}>
              the hard problem
            </text>
            <text x={216} y={66} fontSize={8.5} fill="rgba(233,238,247,0.92)">
              why is any of that
            </text>
            <text x={216} y={80} fontSize={8.5} fill="rgba(233,238,247,0.92)">
              accompanied by
            </text>
            <text x={216} y={94} fontSize={8.5} fill="rgba(233,238,247,0.92)">
              experience at all?
            </text>
            <text x={216} y={124} fontSize={8} fill={C.faint}>
              a complete functional
            </text>
            <text x={216} y={136} fontSize={8} fill={C.faint}>
              account seems compatible
            </text>
            <text x={216} y={148} fontSize={8} fill={C.faint}>
              with there being none
            </text>
          </g>
        ) : (
          <g>
            {THEORIES.map((t, i) => (
              <g key={t.name}>
                <rect x={12} y={22 + i * 42} width={356} height={34} rx={4} fill={C.panel} />
                <text x={22} y={38 + i * 42} fontSize={9.5} fill={C.deep}>
                  {t.name}
                </text>
                <text x={22} y={50 + i * 42} fontSize={8} fill={C.faint}>
                  {t.claim}
                </text>
              </g>
            ))}
            <text x={190} y={188} textAnchor="middle" fontSize={8.5} fill={C.warm}>
              none is accepted; adversarial tests have constrained without settling
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'A great deal is known about the machinery. Specific brain damage produces specific changes in experience; anaesthesia switches consciousness off and back on reliably; patterns of large-scale cortical integration track whether someone is conscious well enough to be used clinically. All of that is progress on the correlates. The gap is that identifying which processes accompany experience does not explain why those processes are accompanied by experience while others are not.'
          : 'Serious proposals exist and are being actively tested, including adversarial collaborations in which competing groups agree in advance on results that would falsify their theory. These have constrained some predictions without settling the field. A live methodological worry is whether the hard problem is empirically tractable at all, since the theories differ most about systems whose experience cannot be reported. This is the point in the section where the correct thing to report is that nobody knows.'}
      </Note>
    </Stack>
  );
}
