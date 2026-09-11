import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The clearest case of culture driving human genetic change — and the lag that
 * complicates the simple version.
 *
 * Two curves on one axis: when milk was being consumed, and when the allele
 * spread. They are thousands of years apart, which is the finding that reframed
 * the textbook story.
 */

const VIEWS = ['The lag', 'Independent origins'] as const;

interface Origin {
  readonly key: string;
  readonly variant: string;
  readonly region: string;
  readonly detail: string;
}

const ORIGINS: readonly Origin[] = [
  {
    key: 'Europe',
    variant: '−13910*T',
    region: 'northern and central Europe',
    detail:
      'The best-studied variant, carrying one of the strongest and most recent selection signals anywhere in the human genome: it spread fast enough to drag roughly a megabase of surrounding chromosome with it almost undisturbed.',
  },
  {
    key: 'East Africa',
    variant: '−14010*C',
    region: 'Kenya and Tanzania pastoralists',
    detail:
      'A different mutation, in a different position, producing the same trait — and associated with independent pastoralist histories. Convergent evolution within a single species.',
  },
  {
    key: 'Middle East',
    variant: '−13915*G',
    region: 'Arabian peninsula',
    detail:
      'Another independent origin, associated with camel milk. At least five such variants are known in total.',
  },
];

export default function LactaseCoevolution(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const [pick, setPick] = useState(0);
  const origin = ORIGINS[Math.min(pick, ORIGINS.length - 1)];
  if (!origin) return null;

  const LEFT = 40;
  const RIGHT = 16;
  const W = 380 - LEFT - RIGHT;
  const TOP = 34;
  const BOT = 128;
  const toX = (ka: number): number => LEFT + W - (ka / 9) * W;
  const toY = (f: number): number => BOT - f * (BOT - TOP);

  const dairy = (ka: number): number => Math.max(0, Math.min(1, (8.5 - ka) / 2.2));
  const allele = (ka: number): number => Math.max(0, Math.min(0.75, (5.2 - ka) / 4.2));

  const path = (fn: (ka: number) => number): string =>
    Array.from({ length: 60 }, (_, i) => {
      const ka = 9 - (i / 59) * 9;
      return `${i === 0 ? 'M' : 'L'}${toX(ka).toFixed(1)},${toY(fn(ka)).toFixed(1)}`;
    }).join(' ');

  return (
    <Stack>
      <Figure height={190}>
        {view === 0 ? (
          <g>
            <line x1={LEFT} y1={BOT} x2={LEFT + W} y2={BOT} stroke="rgba(148,162,192,0.35)" />
            <path d={path(dairy)} fill="none" stroke={C.warm} strokeWidth={2.2} />
            <path d={path(allele)} fill="none" stroke={C.life} strokeWidth={2.2} />
            <text x={toX(6.6)} y={toY(dairy(6.6)) - 8} fontSize={8} fill={C.warm}>
              milk being consumed
            </text>
            <text x={toX(2.2)} y={toY(allele(2.2)) - 8} fontSize={8} fill={C.life}>
              persistence allele
            </text>
            <rect
              x={toX(7.5)}
              y={TOP}
              width={toX(4) - toX(7.5)}
              height={BOT - TOP}
              fill="rgba(255,143,110,0.1)"
            />
            <text
              x={(toX(7.5) + toX(4)) / 2}
              y={TOP + 12}
              textAnchor="middle"
              fontSize={8}
              fill={C.hot}
            >
              several thousand years
            </text>
            <text
              x={(toX(7.5) + toX(4)) / 2}
              y={TOP + 24}
              textAnchor="middle"
              fontSize={8}
              fill={C.hot}
            >
              of dairying without the gene
            </text>
            {[8, 6, 4, 2, 0].map((ka) => (
              <text
                key={ka}
                x={toX(ka)}
                y={BOT + 13}
                textAnchor="middle"
                fontSize={7}
                fill={C.faint}
              >
                {ka === 0 ? 'now' : `${ka} ka`}
              </text>
            ))}
            <text x={12} y={26} fontSize={7.5} fill={C.faint}>
              frequency
            </text>
            <text x={LEFT} y={168} fontSize={8} fill={C.dim}>
              milk residues in pottery come first; the allele follows much later
            </text>
            <text x={LEFT} y={180} fontSize={7.5} fill={C.faint}>
              curves are schematic summaries of published trajectories
            </text>
          </g>
        ) : (
          <g>
            <text x={14} y={18} fontSize={8.5} fill={C.dim}>
              the same trait, reached by different mutations
            </text>
            {ORIGINS.map((o, i) => {
              const y = 46 + i * 42;
              const active = i === pick;
              return (
                <g key={o.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
                  <rect
                    x={14}
                    y={y - 16}
                    width={352}
                    height={34}
                    rx={5}
                    fill={active ? 'rgba(79,224,192,0.1)' : 'transparent'}
                    stroke={active ? 'rgba(79,224,192,0.4)' : 'transparent'}
                  />
                  <circle cx={32} cy={y} r={7} fill={active ? C.life : C.warm} />
                  <text x={50} y={y - 2} fontSize={9} fill={active ? C.life : C.dim}>
                    {o.key}
                  </text>
                  <text x={50} y={y + 10} fontSize={7.5} fill={C.faint}>
                    {o.variant} · {o.region}
                  </text>
                </g>
              );
            })}
            <text x={14} y={180} fontSize={8} fill={C.warm}>
              at least five independent variants are known
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Every mammal digests milk as an infant and stops afterwards; most adult humans worldwide still do. The obvious story — people started drinking milk, so digesting it became advantageous — turns out to be too simple. Pottery lipid residues show Europeans consuming milk for thousands of years before the allele became common, which is a problem: if milk were routinely valuable, selection should have acted immediately. The current explanation is that the advantage was intermittent. Adults who cannot digest lactose can still eat fermented dairy safely; the difference becomes lethal during famine, when milk may be the only food, and during epidemics of diarrhoeal disease, when lactose-induced fluid loss compounds an existing threat. Selection acting in rare severe episodes reconciles a strong selection coefficient with a long lag.'
          : `${origin.key}: ${origin.detail} Different mutations producing the same trait in populations that independently took up herding is the signature of a shared pressure rather than a shared ancestor — and it is why this is the standard example of gene–culture coevolution. The structure is a loop: keeping animals created a food source only some people could fully use; those people left more descendants; as the ability spread, dairying became more valuable and intensified, which strengthened the pressure that produced the ability. Neither the practice nor the gene is prior.`}
      </Note>
    </Stack>
  );
}
