import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * A body as a truce, and what breaks it.
 *
 * The slider is generations of somatic division, and what grows with it is the
 * chance that some cell has acquired a mutation letting it ignore the stop
 * signal. Drawing the defector spreading inside the tissue is the point: this
 * is natural selection running inside one organism.
 */

const GRID = 12;

export default function CellCooperation(_props: VisualizationProps): ReactNode {
  const [gen, setGen] = useState(0);
  const defectors = Math.min(Math.round((gen / 24) ** 2.4 * 60), GRID * 8);

  return (
    <Stack>
      <Figure height={188}>
        <text x={12} y={14} fontSize={9} fill={C.dim}>
          a tissue of genetically identical cells
        </text>
        {Array.from({ length: GRID * 8 }, (_, i) => {
          const cx = 26 + (i % GRID) * 28;
          const cy = 32 + Math.floor(i / GRID) * 19;
          const isDefector = i < defectors;
          return (
            <rect
              key={i}
              x={cx - 11}
              y={cy - 7}
              width={22}
              height={14}
              rx={3}
              fill={isDefector ? C.hot : C.life}
              opacity={isDefector ? 0.9 : 0.45}
            />
          );
        })}
        <text x={12} y={182} fontSize={8.5} fill={defectors > 0 ? C.hot : C.life}>
          {defectors === 0
            ? 'every cell obeying the stop signal'
            : `${defectors} cell${defectors === 1 ? '' : 's'} no longer stopping — and dividing faster than their neighbours`}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Cell divisions"
          hiddenLabel="Accumulated rounds of cell division"
          min={0}
          max={30}
          step={1}
          value={gen}
          onChange={setGen}
          display={`${gen} rounds`}
        />
      </ControlRows>

      <Note>
        Every cell in your body carries the same genes, which is why cooperation is stable: a liver
        cell that helps the body reproduce propagates exactly the genes it holds. But cells mutate
        as they divide, and eventually one acquires a change that lets it ignore the signal to stop.
        From that moment it out-reproduces its neighbours, and its descendants inherit the
        advantage. That is what a tumour is — variation, heredity and differential reproduction,
        operating inside a single organism over years. It is also why the body carries so much
        machinery whose only job is to suppress its own cells: checkpoints, programmed cell death,
        division limits and immune surveillance. This diagram is illustrative; real tumour evolution
        involves many mutations acquired in sequence, not one.
      </Note>
    </Stack>
  );
}
