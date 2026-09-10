import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * The ten percent rule, and the reason food chains are short.
 *
 * Making the efficiency adjustable turns a memorised number into a consequence:
 * at five percent a chain cannot support four levels, at twenty percent it can
 * support six. The chain length is not a fact about ecology, it is arithmetic.
 */

const LEVELS = [
  'producers',
  'herbivores',
  'small carnivores',
  'large carnivores',
  'top predators',
] as const;

export default function EnergyPyramid(_props: VisualizationProps): ReactNode {
  const [eff, setEff] = useState(0.1);
  const START = 100000;
  const values = LEVELS.map((_, i) => START * eff ** i);
  const viable = values.filter((v) => v >= 20).length;

  return (
    <Stack>
      <Figure height={196}>
        <text x={16} y={14} fontSize={9} fill={C.dim}>
          energy reaching each level, arbitrary units per year
        </text>
        {LEVELS.map((name, i) => {
          const v = values[i] ?? 0;
          const w = Math.max((Math.log10(Math.max(v, 1)) / 5) * 320, 6);
          const y = 152 - i * 34;
          const supported = v >= 20;
          return (
            <g key={name}>
              <rect
                x={190 - w / 2}
                y={y}
                width={w}
                height={28}
                rx={3}
                fill={supported ? C.life : 'rgba(255,143,110,0.25)'}
                opacity={supported ? 0.8 : 1}
              />
              <text
                x={190}
                y={y + 13}
                textAnchor="middle"
                fontSize={9}
                fill={supported ? '#0f1a17' : C.hot}
              >
                {name}
              </text>
              <text
                x={190}
                y={y + 24}
                textAnchor="middle"
                fontSize={7.5}
                fill={supported ? 'rgba(15,26,23,0.75)' : C.hot}
                fontFamily="ui-monospace, monospace"
              >
                {v >= 1 ? Math.round(v).toLocaleString() : v.toPrecision(2)}
                {supported ? '' : ' — too little to sustain a population'}
              </text>
            </g>
          );
        })}
      </Figure>

      <ControlRows>
        <Slider
          name="Transfer efficiency"
          hiddenLabel="Fraction of energy passed to the next trophic level"
          min={0.02}
          max={0.25}
          step={0.005}
          value={eff}
          onChange={setEff}
          display={`${(eff * 100).toFixed(1)}%`}
        />
      </ControlRows>

      <Note>
        At <strong>{(eff * 100).toFixed(1)}%</strong> transfer efficiency, this chain supports{' '}
        <strong>{viable}</strong> level{viable === 1 ? '' : 's'}. Losses come from three places:
        material that is never eaten, material that is eaten and not digested, and — the largest
        share — energy burned simply staying alive, which leaves as heat. Real efficiencies average
        around ten percent and range from about two to twenty, with warm-blooded animals at the low
        end because so much goes into maintaining body temperature. This is why food chains rarely
        exceed four or five levels, why large predators need enormous territories, and why eating
        plants feeds far more people than eating animals from the same land.
      </Note>
    </Stack>
  );
}
