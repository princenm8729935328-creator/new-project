import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * How many kinds of human were alive, plotted against time.
 *
 * The count dropping to one is the event that needs explaining, and the
 * explanations view exists to keep the flattering one from being the only one
 * a reader meets.
 */

interface Lineage {
  readonly key: string;
  readonly from: number;
  readonly to: number;
}

const LINEAGES: readonly Lineage[] = [
  { key: 'H. sapiens', from: 320, to: 0 },
  { key: 'H. neanderthalensis', from: 430, to: 40 },
  { key: 'Denisovans', from: 400, to: 50 },
  { key: 'H. naledi', from: 335, to: 236 },
  { key: 'H. floresiensis', from: 190, to: 50 },
  { key: 'H. luzonensis', from: 134, to: 50 },
  { key: 'H. erectus (Java)', from: 500, to: 110 },
];

const EXPLANATIONS = [
  {
    key: 'We were better',
    weight: 0.3,
    detail:
      'The satisfying version: smarter, better armed, better organised, and we outcompeted them. It is worth noticing how well this flatters the people telling it, and then asking what supports it. Redating shows an overlap of several thousand years rather than rapid replacement; Neanderthal technology in their final millennia is not obviously inferior; and there is no archaeological evidence of systematic conflict.',
  },
  {
    key: 'Demographic bad luck',
    weight: 0.75,
    detail:
      'Small, scattered, partly inbred populations go extinct through ordinary chance — a run of poor years, a skewed sex ratio, a local failure that is not recolonised. Modelling shows these factors alone sufficient to drive a population of Neanderthal size to extinction within ten thousand years, with no competitive disadvantage in the model at all. Arriving modern humans need only have occupied part of the landscape and fragmented the remaining range.',
  },
  {
    key: 'Absorption',
    weight: 0.55,
    detail:
      'They did not entirely disappear. Neanderthal DNA is in most people alive today and Denisovan DNA in millions. If the incoming population was substantially larger, interbreeding alone would dilute a smaller one into invisibility over enough generations, with nobody dying who would not otherwise have died.',
  },
  {
    key: 'Climate',
    weight: 0.5,
    detail:
      'The final Neanderthal millennia coincide with severe and rapid climate oscillations. Small populations are exactly the ones least able to absorb a bad century. Hard to separate from the demographic account, and probably not separate from it.',
  },
];

export default function LastHumansStanding(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const [pick, setPick] = useState(1);
  const ex = EXPLANATIONS[Math.min(pick, EXPLANATIONS.length - 1)];
  if (!ex) return null;

  const LEFT = 116;
  const W = 232;
  const toX = (ka: number): number => LEFT + W - (ka / 520) * W;

  return (
    <Stack>
      <Figure height={196}>
        {view === 0 ? (
          <g>
            {LINEAGES.map((l, i) => {
              const y = 28 + i * 20;
              const alive = l.to === 0;
              return (
                <g key={l.key}>
                  <text
                    x={LEFT - 8}
                    y={y + 4}
                    textAnchor="end"
                    fontSize={7.5}
                    fill={alive ? C.life : C.dim}
                  >
                    {l.key}
                  </text>
                  <rect
                    x={toX(l.from)}
                    y={y - 5}
                    width={Math.max(toX(l.to) - toX(l.from), 4)}
                    height={11}
                    rx={3}
                    fill={alive ? C.life : 'rgba(148,162,192,0.45)'}
                  />
                </g>
              );
            })}
            <line
              x1={toX(50)}
              y1={20}
              x2={toX(50)}
              y2={176}
              stroke={C.warm}
              strokeDasharray="3 3"
            />
            <text x={toX(50)} y={186} textAnchor="middle" fontSize={7.5} fill={C.warm}>
              50 ka: at least six
            </text>
            {[500, 400, 300, 200, 100, 0].map((ka) => (
              <text key={ka} x={toX(ka)} y={18} textAnchor="middle" fontSize={6.5} fill={C.faint}>
                {ka === 0 ? 'now' : ka}
              </text>
            ))}
            <text x={14} y={190} fontSize={7} fill={C.faint}>
              thousands of years ago; bar ends are current best estimates
            </text>
          </g>
        ) : (
          <g>
            <text x={14} y={16} fontSize={8.5} fill={C.dim}>
              how well each explanation is supported
            </text>
            {EXPLANATIONS.map((e, i) => {
              const y = 44 + i * 34;
              const active = i === pick;
              return (
                <g key={e.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
                  <text x={14} y={y} fontSize={9} fill={active ? C.life : C.dim}>
                    {e.key}
                  </text>
                  <rect
                    x={14}
                    y={y + 6}
                    width={352}
                    height={9}
                    rx={4}
                    fill="rgba(148,162,192,0.12)"
                  />
                  <rect
                    x={14}
                    y={y + 6}
                    width={352 * e.weight}
                    height={9}
                    rx={4}
                    fill={e.weight > 0.6 ? C.life : e.weight > 0.4 ? C.warm : C.hot}
                    opacity={active ? 1 : 0.5}
                  />
                </g>
              );
            })}
            <text x={14} y={190} fontSize={7} fill={C.faint}>
              bar lengths summarise the state of the argument, not a measurement
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow
        label="View"
        options={['Who was alive', 'Why only one remains']}
        value={view}
        onChange={setView}
      />

      <Note>
        {view === 0
          ? 'Around fifty thousand years ago a visitor would have found Homo sapiens in Africa and western Asia, Neanderthals across Europe, Denisovans somewhere in Asia, Homo floresiensis on Flores, Homo luzonensis on Luzon, and possibly Homo erectus still surviving in Java. Within perhaps fifteen thousand years all of them were gone but one. Note also Homo naledi, with a brain of about 500 cm³, alive in southern Africa at the same time as the earliest Homo sapiens — nobody predicted that lineage existed, and it was found in a well-explored region of a well-studied country.'
          : `${ex.key}. ${ex.detail} The fact that the survivors are the ones writing the explanation is a reason for caution rather than confidence. It also bears on how contingent our existence is: if Neanderthals disappeared through demographic bad luck, then a modest difference in population size or climate could have left two human species on Earth — which would make almost every assumption about human uniqueness look different.`}
      </Note>
    </Stack>
  );
}
