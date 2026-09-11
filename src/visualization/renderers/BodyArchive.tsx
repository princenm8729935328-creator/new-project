import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * Inherited structures in the human body, with the nuance attached.
 *
 * Every entry states what the structure is homologous with and whether it still
 * does anything, because the usual "useless leftovers" framing is both wrong on
 * several of these and unnecessary to the argument.
 */

interface Item {
  readonly id: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly inherited: string;
  readonly nowDoes: string;
}

const ITEMS: readonly Item[] = [
  {
    id: 'ear',
    label: 'ear muscles',
    x: 232,
    y: 36,
    inherited: 'three muscles that swivel the ear towards a sound in most mammals',
    nowDoes:
      'Almost nothing mechanically — most people manage a slight wiggle. They do still activate faintly towards unexpected sounds, which is measurable but not useful.',
  },
  {
    id: 'eye',
    label: 'blind spot',
    x: 148,
    y: 36,
    inherited: 'the inverted vertebrate retina, with wiring in front of the light sensors',
    nowDoes:
      'It is a hole in each visual field where the nerve bundle passes through. Not a leftover but a structural consequence — octopus eyes are wired the other way and have no blind spot. Evolution modifies what is there rather than re-laying the wiring.',
  },
  {
    id: 'teeth',
    label: 'wisdom teeth',
    x: 190,
    y: 58,
    inherited: 'the third molar of a larger ancestral tooth row',
    nowDoes:
      'Often nothing, because the jaw shrank faster than the tooth row. Molars develop front to back with each suppressing the next, so variation piles up at the last one — a predictable output of a developmental rule rather than a design fault.',
  },
  {
    id: 'goose',
    label: 'goosebumps',
    x: 246,
    y: 96,
    inherited: 'tiny muscles that raise hairs to trap air or look larger',
    nowDoes:
      'Raises hairs we mostly no longer have. The muscles themselves anchor hair follicles and have a role in the stem cell niche, so the structure persists for reasons unrelated to the visible effect.',
  },
  {
    id: 'appendix',
    label: 'appendix',
    x: 206,
    y: 122,
    inherited: 'the end of the caecum, a large fermentation chamber in many mammals',
    nowDoes:
      'Genuinely useful work: it is dense in lymphoid tissue and appears to act as a refuge for gut bacteria after disturbance. It has also evolved independently many times, which is not what a structure on its way out looks like.',
  },
  {
    id: 'coccyx',
    label: 'coccyx',
    x: 178,
    y: 146,
    inherited: 'the tail, present as ten to twelve vertebrae in the human embryo',
    nowDoes:
      'Anchors muscles of the pelvic floor and takes load when you sit back. Tail loss in apes has recently been traced to a jumping-gene insertion in a single developmental gene, shared across apes and absent in monkeys.',
  },
];

export default function BodyArchive(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(5);
  const item = ITEMS[Math.min(pick, ITEMS.length - 1)];
  if (!item) return null;

  return (
    <Stack>
      <Figure height={186}>
        <circle cx={190} cy={40} r={22} fill="rgba(148,162,192,0.18)" />
        <rect x={168} y={66} width={44} height={70} rx={14} fill="rgba(148,162,192,0.18)" />
        <line x1={166} y1={78} x2={146} y2={120} stroke="rgba(148,162,192,0.18)" strokeWidth={9} />
        <line x1={214} y1={78} x2={234} y2={120} stroke="rgba(148,162,192,0.18)" strokeWidth={9} />
        <line
          x1={180}
          y1={136}
          x2={176}
          y2={176}
          stroke="rgba(148,162,192,0.18)"
          strokeWidth={10}
        />
        <line
          x1={200}
          y1={136}
          x2={204}
          y2={176}
          stroke="rgba(148,162,192,0.18)"
          strokeWidth={10}
        />

        {ITEMS.map((it, i) => {
          const active = i === pick;
          const left = it.x < 190;
          return (
            <g key={it.id} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <circle
                cx={it.x}
                cy={it.y}
                r={active ? 7 : 4.5}
                fill={active ? C.life : C.warm}
                opacity={active ? 1 : 0.7}
              />
              <line
                x1={it.x}
                y1={it.y}
                x2={left ? 100 : 280}
                y2={it.y}
                stroke={active ? C.life : 'rgba(148,162,192,0.25)'}
                strokeWidth={active ? 1.2 : 0.8}
              />
              <text
                x={left ? 96 : 284}
                y={it.y + 3}
                textAnchor={left ? 'end' : 'start'}
                fontSize={8}
                fill={active ? C.life : C.faint}
                fontWeight={active ? 700 : 400}
              >
                {it.label}
              </text>
            </g>
          );
        })}
      </Figure>

      <Note>
        <strong>{item.label}.</strong> Inherited from: {item.inherited}. What it does now:{' '}
        {item.nowDoes} Tap any marker to move between them. &ldquo;Vestigial&rdquo; means reduced
        relative to an ancestral form, not useless — and a structure that has been repurposed is
        just as good evidence of descent with modification as one that merely persists. The point of
        this figure is not that the body is badly made. It is that the body is inherited, and that
        its oddities line up precisely with a family tree built from completely separate evidence.
      </Note>
    </Stack>
  );
}
