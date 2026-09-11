import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Two contemporaneous hominins that solved their problems differently.
 *
 * The overlay shows the features that make Paranthropus a chewing machine, and
 * the timeline strip underneath makes the point the topic needs: it lasted far
 * longer than our species has, and "dead end" is a judgement rather than a
 * finding.
 */

const VIEWS = ['Paranthropus boisei', 'Early Homo'] as const;

export default function RobustSkull(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const robust = view === 0;

  return (
    <Stack>
      <Figure height={202}>
        <g transform="translate(0,-4)">
          <ellipse
            cx={190}
            cy={70}
            rx={robust ? 44 : 50}
            ry={robust ? 38 : 42}
            fill="rgba(148,162,192,0.16)"
            stroke="rgba(148,162,192,0.45)"
          />
          {robust ? (
            <path
              d="M190,30 L190,20 M178,26 Q190,14 202,26"
              fill="none"
              stroke={C.hot}
              strokeWidth={2.4}
            />
          ) : null}
          <path
            d={
              robust
                ? 'M150,86 Q146,116 168,124 L212,124 Q234,116 230,86 Z'
                : 'M158,88 Q156,110 174,118 L206,118 Q224,110 222,88 Z'
            }
            fill="rgba(148,162,192,0.2)"
            stroke="rgba(148,162,192,0.5)"
          />
          <ellipse
            cx={robust ? 148 : 158}
            cy={78}
            rx={robust ? 13 : 7}
            ry={robust ? 22 : 14}
            fill={robust ? 'rgba(255,143,110,0.35)' : 'rgba(148,162,192,0.2)'}
          />
          <ellipse
            cx={robust ? 232 : 222}
            cy={78}
            rx={robust ? 13 : 7}
            ry={robust ? 22 : 14}
            fill={robust ? 'rgba(255,143,110,0.35)' : 'rgba(148,162,192,0.2)'}
          />
          {Array.from({ length: 4 }, (_, i) => (
            <rect
              key={i}
              x={172 + i * 11}
              y={112}
              width={robust ? 10 : 6}
              height={robust ? 9 : 6}
              rx={2}
              fill={robust ? C.hot : C.life}
              opacity={0.8}
            />
          ))}
        </g>

        {robust ? (
          <g>
            <text x={190} y={16} textAnchor="middle" fontSize={8} fill={C.hot}>
              crest for jaw muscles
            </text>
            <text x={14} y={78} fontSize={8} fill={C.hot}>
              flared cheekbones
            </text>
            <text x={14} y={132} fontSize={8} fill={C.hot}>
              molars ~4× our area
            </text>
          </g>
        ) : (
          <g>
            <text x={14} y={78} fontSize={8} fill={C.life}>
              lighter face
            </text>
            <text x={14} y={132} fontSize={8} fill={C.life}>
              smaller teeth
            </text>
            <text x={14} y={50} fontSize={8} fill={C.life}>
              larger braincase
            </text>
          </g>
        )}

        <line x1={20} y1={160} x2={360} y2={160} stroke="rgba(148,162,192,0.25)" />
        <rect x={20} y={152} width={158} height={9} rx={4} fill="rgba(255,143,110,0.5)" />
        <text x={20} y={148} fontSize={7.5} fill={C.hot}>
          Paranthropus: ~1.5 million years
        </text>
        <rect x={318} y={166} width={30} height={9} rx={4} fill="rgba(79,224,192,0.6)" />
        <text x={348} y={184} textAnchor="end" fontSize={7.5} fill={C.life}>
          H. sapiens so far: ~0.3 Myr
        </text>
        <text x={20} y={196} fontSize={7.5} fill={C.faint}>
          skull outlines are schematic; the duration bars are to scale with each other
        </text>
      </Figure>

      <ToggleRow label="Skull" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {robust
          ? 'Everything about this head is organised around generating and withstanding bite force: molars around four times the area of ours, cheekbones flared wide to make room for enormous jaw muscles, a face buttressed to take the load, and a bony crest on top of the skull because the muscles are too large to fit on the braincase. It was nicknamed Nutcracker Man — and the wear on its teeth and the chemistry of its enamel both say it was eating grasses and sedges rather than hard objects. The anatomy records what it could survive, not what it usually ate.'
          : 'The contemporary alternative: smaller teeth, a lighter face, a larger braincase, and stone tools. These two lived on the same landscape for over a million years. It is tempting to read that as a competition Homo won, and the timeline underneath is the reason to resist it — Paranthropus persisted roughly five times as long as our own species has so far. Why it disappeared around 1.2 million years ago is genuinely unknown, and hand bones attributed to it suggest it may have made tools too.'}
      </Note>
    </Stack>
  );
}
