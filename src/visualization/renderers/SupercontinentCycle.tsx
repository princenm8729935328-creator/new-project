import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Stepper, type Stage } from './lifeKit';

/**
 * Continents assembling and dispersing, five times over.
 *
 * The shapes are schematic blobs, not palaeogeographic reconstructions — real
 * ones exist and are far more detailed, but a reader who cannot recognise
 * Laurentia gains nothing from an accurate outline. What the figure has to
 * carry is the rhythm and the fact that it is still running.
 */

function blobs(shapes: readonly (readonly [number, number, number, number])[]): ReactNode {
  return (
    <g>
      <rect x={8} y={30} width={364} height={104} rx={6} fill="rgba(111,179,255,0.16)" />
      {shapes.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx={7} fill={C.rock} opacity={0.85} />
      ))}
    </g>
  );
}

const STAGES: readonly Stage[] = [
  {
    id: 'rodinia',
    title: 'Rodinia — about 900 million years ago',
    detail:
      'Nearly all continental crust assembled into one mass. Its break-up, starting around 750 million years ago, is one of the suspects in triggering the Snowball Earth episodes: more coastline and more tropical rock meant faster weathering, which pulls carbon dioxide out of the air.',
    draw: blobs([[142, 46, 96, 72]]),
  },
  {
    id: 'breakup',
    title: 'Break-up — 750 to 600 million years ago',
    detail:
      'Rifts open and the mass fragments. The Snowball glaciations fall in this interval, and so does the first appearance of large multicellular organisms.',
    draw: blobs([
      [96, 44, 58, 44],
      [176, 62, 52, 50],
      [244, 44, 48, 40],
    ]),
  },
  {
    id: 'pangaea',
    title: 'Pangaea — about 300 million years ago',
    detail:
      'The pieces reassemble on the other side of the planet. A single continent means a vast dry interior, and its formation coincides with the end-Permian extinction, the most severe in the record. Whether the geography contributed is argued; the Siberian Traps eruptions are the leading cause.',
    draw: blobs([[136, 40, 108, 84]]),
  },
  {
    id: 'today',
    title: 'Today',
    detail:
      'Pangaea has been breaking up for about 180 million years, and the Atlantic is still widening. The fit between the coastlines of Africa and South America is the observation that started Wegener thinking, though it took the seafloor magnetic stripes to convince anyone.',
    draw: blobs([
      [36, 48, 46, 60],
      [104, 42, 40, 74],
      [162, 58, 56, 42],
      [238, 44, 62, 52],
      [312, 84, 34, 26],
    ]),
  },
  {
    id: 'future',
    title: 'The next one — 200 to 300 million years from now',
    detail:
      'Several reconstructions predict another supercontinent, variously called Amasia, Pangaea Proxima or Aurica depending on which closes first, the Atlantic or the Pacific. These are model projections, not predictions with the confidence of the past reconstructions — the further forward you extrapolate plate motions, the wider the uncertainty.',
    draw: blobs([[144, 46, 92, 74]]),
  },
];

export default function SupercontinentCycle(_props: VisualizationProps): ReactNode {
  return <Stepper stages={STAGES} height={148} label="Stage" />;
}
