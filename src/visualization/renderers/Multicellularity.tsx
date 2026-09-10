import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why sticking together works: a predator with a mouth of fixed size.
 *
 * The reader grows the cluster and watches it pass the point where the filter
 * feeder can no longer take it. That is the whole selective story behind the
 * repeated laboratory results, and it needs no genetics to understand.
 */

export default function Multicellularity(_props: VisualizationProps): ReactNode {
  const [n, setN] = useState(1);
  const GAPE = 4;
  const radius = Math.cbrt(n) * 6;
  const edible = radius <= GAPE * 2.2;

  const cells: readonly (readonly [number, number])[] = Array.from({ length: n }, (_, i) => {
    const a = i * 2.399;
    const r = Math.sqrt(i / Math.max(n, 1)) * radius;
    return [Math.cos(a) * r, Math.sin(a) * r] as const;
  });

  return (
    <Stack>
      <Figure height={186}>
        <rect x={8} y={20} width={364} height={150} rx={5} fill="rgba(111,179,255,0.07)" />

        <g transform="translate(116,96)">
          {cells.map(([dx, dy], i) => (
            <circle key={i} cx={dx} cy={dy} r={5.4} fill={C.life} opacity={0.85} />
          ))}
        </g>
        <text x={116} y={168} textAnchor="middle" fontSize={8.5} fill={C.life}>
          {n === 1 ? 'a single alga' : `${n} cells stuck together`}
        </text>

        <g transform="translate(282,96)">
          <path d="M-30,-26 Q22,0 -30,26 Q-46,0 -30,-26 z" fill={C.hot} opacity={0.6} />
          <path
            d={`M18,${-GAPE * 2.2} L34,${-GAPE * 2.2} M18,${GAPE * 2.2} L34,${GAPE * 2.2}`}
            stroke={C.warm}
            strokeWidth={1.4}
          />
          <line
            x1={26}
            y1={-GAPE * 2.2}
            x2={26}
            y2={GAPE * 2.2}
            stroke={C.warm}
            strokeWidth={1.2}
            strokeDasharray="2 2"
          />
          <text x={42} y={3} fontSize={8} fill={C.warm}>
            gape
          </text>
        </g>
        <text x={282} y={168} textAnchor="middle" fontSize={8.5} fill={C.hot}>
          filter feeder, fixed mouth size
        </text>

        <text x={190} y={34} textAnchor="middle" fontSize={10} fill={edible ? C.hot : C.life}>
          {edible ? 'small enough to be eaten' : 'too big to be eaten'}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Cells per cluster"
          hiddenLabel="Number of cells in the cluster"
          min={1}
          max={64}
          step={1}
          value={n}
          onChange={setN}
          display={`${n}`}
        />
      </ControlRows>

      <Note>
        A cluster of <strong>{n}</strong> cell{n === 1 ? '' : 's'} has a radius roughly{' '}
        <strong>{Math.cbrt(n).toFixed(1)}×</strong> a single cell&rsquo;s, since volume scales as
        the cube of length.{' '}
        {edible
          ? 'Still within the predator’s gape.'
          : 'Now beyond it — and every cell in the cluster survives because of it.'}{' '}
        This has been run as a real experiment: adding a filter-feeding predator to populations of
        single-celled green algae has repeatedly produced heritable multicellular colonies within a
        few hundred generations. Nothing worked anything out; the clusters were simply the ones
        still there.
      </Note>
    </Stack>
  );
}
