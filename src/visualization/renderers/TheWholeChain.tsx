import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * The causal chain of the whole section, with the loop that closes it.
 *
 * Every link is a topic the reader has already been through, so the figure is
 * a synthesis rather than a summary. The feedback arrow at the end is the part
 * that matters: from somewhere in the Pleistocene this stops being a line.
 */

interface Link {
  readonly id: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly detail: string;
  readonly settled: boolean;
}

const LINKS: readonly Link[] = [
  {
    id: 'biped',
    label: 'upright walking',
    x: 62,
    y: 40,
    settled: true,
    detail:
      'A population of African apes began walking upright, for reasons still argued about. The skeleton was rebuilt from the pelvis down, at the cost of a difficult birth and a fragile back. Established by 4.2 million years ago and unchanged since; why it happened is genuinely open.',
  },
  {
    id: 'hands',
    label: 'free hands',
    x: 190,
    y: 40,
    settled: true,
    detail:
      'Hands no longer required to hold on became better at holding things: shorter fingers, a longer and more muscular thumb, a more mobile thumb joint. Internal bone structure shows australopith hands already being loaded this way, before the oldest confidently attributed stone tools.',
  },
  {
    id: 'tools',
    label: 'tools and processing',
    x: 318,
    y: 40,
    settled: true,
    detail:
      'Cutting and pounding did outside the body what teeth and guts used to do. Measured directly, a diet including sliced meat and pounded tubers cuts chewing effort by around a sixth without any use of fire.',
  },
  {
    id: 'diet',
    label: 'higher-quality diet',
    x: 318,
    y: 100,
    settled: true,
    detail:
      'Teeth and jaws reduce; the rib cage narrows, implying a smaller gut. Bodies become taller and longer-legged, built for covering ground and shedding heat. What specific change drove it is not settled — meat, tubers, processing, or fire.',
  },
  {
    id: 'energy',
    label: 'more energy available',
    x: 190,
    y: 100,
    settled: false,
    detail:
      'Humans expend several hundred more calories per day than other apes and carry far more fat as a buffer. A raised budget rather than a reallocated one — which makes brain expansion depend on social and technological arrangements, not anatomy alone. The classic gut-versus-brain trade-off failed a general comparative test.',
  },
  {
    id: 'brain',
    label: 'larger brain',
    x: 62,
    y: 100,
    settled: false,
    detail:
      'Roughly a threefold increase, mostly in the last two million years, in several lineages independently. Four serious hypotheses compete for why, each with a specific finding against it. This is the central unexplained step.',
  },
  {
    id: 'childhood',
    label: 'long childhood',
    x: 62,
    y: 158,
    settled: true,
    detail:
      'A brain that large has to be grown slowly and mostly after birth, which means a childhood measured in years. Dental increment counts show the modern slow schedule is recent: Homo erectus grew on a more ape-like timetable, and even Neanderthals were slightly faster than us.',
  },
  {
    id: 'learning',
    label: 'learning and teaching',
    x: 190,
    y: 158,
    settled: true,
    detail:
      'A long childhood spent among other people is a long apprenticeship. What is unusual about human social learning is its fidelity: children copy actions, including visibly unnecessary ones, which preserves information nobody currently understands.',
  },
  {
    id: 'culture',
    label: 'cumulative culture',
    x: 318,
    y: 158,
    settled: true,
    detail:
      'Accurate transmission lets each generation start from the last one’s best rather than from scratch. It is a property of a population rather than of a mind — which is why small isolated groups lose skills, and why a million years of large-brained hominins produced an unchanging handaxe.',
  },
];

export default function TheWholeChain(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const link = LINKS[Math.min(pick, LINKS.length - 1)];
  if (!link) return null;

  const arrow = (x1: number, y1: number, x2: number, y2: number): ReactNode => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    return (
      <g>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(148,162,192,0.4)" strokeWidth={1.4} />
        <path
          d={`M${x2},${y2} l${-ux * 7 - uy * 3.5},${-uy * 7 + ux * 3.5} M${x2},${y2} l${-ux * 7 + uy * 3.5},${-uy * 7 - ux * 3.5}`}
          stroke="rgba(148,162,192,0.6)"
          strokeWidth={1.4}
          fill="none"
        />
      </g>
    );
  };

  return (
    <Stack>
      <Figure height={214}>
        {arrow(104, 40, 148, 40)}
        {arrow(232, 40, 276, 40)}
        {arrow(318, 56, 318, 84)}
        {arrow(276, 100, 232, 100)}
        {arrow(148, 100, 104, 100)}
        {arrow(62, 116, 62, 142)}
        {arrow(104, 158, 148, 158)}
        {arrow(232, 158, 276, 158)}

        <path
          d="M356,158 C376,140 376,60 356,44 m-4,12 l4,-12 l9,7"
          fill="none"
          stroke={C.life}
          strokeWidth={2}
        />
        <text
          x={366}
          y={104}
          textAnchor="middle"
          fontSize={7.5}
          fill={C.life}
          transform="rotate(90 366 104)"
        >
          culture reshapes the environment
        </text>

        {LINKS.map((l, i) => {
          const active = i === pick;
          return (
            <g key={l.id} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect
                x={l.x - 42}
                y={l.y - 14}
                width={84}
                height={28}
                rx={6}
                fill={active ? 'rgba(79,224,192,0.16)' : 'rgba(148,162,192,0.08)'}
                stroke={
                  active ? C.life : l.settled ? 'rgba(148,162,192,0.3)' : 'rgba(255,210,127,0.5)'
                }
                strokeWidth={active ? 1.6 : 1}
                strokeDasharray={l.settled ? undefined : '4 3'}
              />
              <text
                x={l.x}
                y={l.y + 3}
                textAnchor="middle"
                fontSize={7.5}
                fill={active ? C.life : C.dim}
              >
                {l.label}
              </text>
            </g>
          );
        })}

        <rect
          x={14}
          y={188}
          width={10}
          height={8}
          rx={2}
          fill="none"
          stroke="rgba(255,210,127,0.6)"
          strokeDasharray="3 2"
        />
        <text x={30} y={196} fontSize={7.5} fill={C.faint}>
          dashed: the step whose cause is not established
        </text>
      </Figure>

      <Note>
        <strong>{link.label}.</strong> {link.detail} Tap any box to move along the chain. Each link
        is constrained by what came before, and the results of earlier changes become the conditions
        for later ones — which is why no single change made us human. From somewhere in the
        Pleistocene the shape changes entirely: accumulated knowledge lets a population occupy
        environments no body is adapted to, occupying them changes what selection acts on, and the
        process becomes a loop between two inheritance systems rather than a single line. Nothing
        about the sequence was scheduled. At every step there were hominin species that did
        something else and are not here: Paranthropus solved its problems with teeth and lasted a
        million and a half years, Homo naledi kept a small brain and was alive when we were,
        Neanderthals did nearly everything we did and are gone. That a sequence of events led to us
        is not evidence that it was heading for us.
      </Note>
    </Stack>
  );
}
