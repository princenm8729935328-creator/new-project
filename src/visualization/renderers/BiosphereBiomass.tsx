import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { BarRows, C, Note, Stack, ToggleRow, type Bar } from './lifeKit';

/**
 * Who the biosphere actually consists of, on a linear scale and a log one.
 *
 * The linear view is the one that resets an intuition: animals barely register.
 * The log view is the one that makes the smaller groups readable at all. Both
 * are shown because either alone misleads — the linear hides the structure, the
 * log hides the magnitude.
 */

interface Group extends Bar {
  readonly why: string;
}

const GROUPS: readonly Group[] = [
  {
    label: 'Plants',
    value: 450,
    display: '≈ 450 Gt C',
    colour: C.life,
    why: 'Almost all of it wood — trunks, branches and roots, most of which is not metabolically active tissue at all.',
  },
  {
    label: 'Bacteria',
    value: 70,
    display: '≈ 70 Gt C',
    colour: C.water,
    why: 'Mostly in deep soil and deep sediment rather than anywhere visible. This figure has been revised downward substantially as subsurface sampling improved, and remains the least certain on the chart.',
  },
  {
    label: 'Fungi',
    value: 12,
    display: '≈ 12 Gt C',
    colour: C.warm,
    why: 'Largely underground mycelium. Fungi outweigh all animals by roughly six to one.',
  },
  {
    label: 'Archaea',
    value: 7,
    display: '≈ 7 Gt C',
    colour: C.deep,
    why: 'A separate domain of single-celled life, discovered as distinct from bacteria only in the 1970s, and concentrated in the deep subsurface.',
  },
  {
    label: 'Protists',
    value: 4,
    display: '≈ 4 Gt C',
    colour: 'rgba(148,162,192,0.7)',
    why: 'Single-celled eukaryotes, including the marine plankton responsible for a large share of global photosynthesis despite their tiny standing mass.',
  },
  {
    label: 'Animals',
    value: 2,
    display: '≈ 2 Gt C',
    colour: C.hot,
    why: 'Every fish, insect, bird, mammal, worm and jellyfish combined — about 0.4% of the biosphere. Arthropods are roughly half of it.',
  },
  {
    label: 'Humans',
    value: 0.06,
    display: '≈ 0.06 Gt C',
    colour: '#fff',
    why: 'One species, and yet human livestock now outweigh all wild mammals by more than an order of magnitude, and human activity has roughly halved total plant biomass since agriculture began.',
  },
];

export default function BiosphereBiomass(_props: VisualizationProps): ReactNode {
  const [scale, setScale] = useState(0);
  const [pick, setPick] = useState(0);
  const group = GROUPS[Math.min(pick, GROUPS.length - 1)];

  return (
    <Stack>
      <BarRows
        bars={GROUPS}
        axisLabel="biomass in gigatonnes of carbon — tap a row"
        log={scale === 1}
        selected={pick}
        onSelect={setPick}
      />
      <ToggleRow
        label="Scale"
        options={['Linear', 'Logarithmic']}
        value={scale}
        onChange={setScale}
      />
      <Note>
        {group ? (
          <>
            <strong>
              {group.label}, {group.display}.
            </strong>{' '}
            {group.why}{' '}
            {scale === 0
              ? 'On the linear scale, everything except plants is nearly invisible — which is the honest picture of the biosphere.'
              : 'On the log scale each step is a factor of ten, which makes the small groups legible but flatters them: the visual distance between plants and humans is four orders of magnitude.'}
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
