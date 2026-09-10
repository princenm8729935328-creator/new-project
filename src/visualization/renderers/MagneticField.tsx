import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The magnetosphere, with the wind switched on.
 *
 * The comparison view is the argument: the same planet with and without a
 * field, and Mars as the case where the field failed. Field-line geometry here
 * is schematic — a real magnetosphere is asymmetric, turbulent and far more
 * complicated on the night side.
 */

const VIEWS = ['With field', 'Without field', 'Mars'] as const;

function windLines(stopAt: (y: number) => number): ReactNode {
  return (
    <g>
      {[36, 56, 76, 96, 116].map((y) => (
        <g key={y}>
          <line
            x1={12}
            y1={y}
            x2={stopAt(y)}
            y2={y}
            stroke={C.warm}
            strokeWidth={1.2}
            opacity={0.7}
          />
          <path d={`M${stopAt(y)},${y} l-6,-3 l0,6 z`} fill={C.warm} opacity={0.7} />
        </g>
      ))}
      <text x={14} y={22} fontSize={8.5} fill={C.warm}>
        solar wind
      </text>
    </g>
  );
}

export default function MagneticField(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const CX = 250;
  const CY = 76;

  const notes = [
    'Convection in the liquid iron outer core, organised by Earth’s rotation, sustains a self-generating dynamo. The field it produces deflects the solar wind around the planet at a bow shock roughly ten Earth radii out. Charged particles that leak in follow field lines to the poles, which is what an aurora is.',
    'Without a field, the solar wind reaches the top of the atmosphere directly and strips it away ion by ion. The rate is slow on a human scale and decisive on a geological one — this is drawn as a comparison, not as anything Earth has experienced.',
    'Mars had a dynamo early on: magnetised bands in its oldest crust record it. It stopped, probably because the small core cooled too fast to keep convecting, and over the following billions of years Mars lost most of its atmosphere and nearly all its surface water. The MAVEN mission has measured the escape still happening.',
  ];

  return (
    <Stack>
      <Figure height={172}>
        {view === 0 ? (
          <g>
            {[34, 50, 66].map((r, i) => (
              <path
                key={r}
                d={`M${CX},${CY - 26} C${CX - 40 - i * 26},${CY - 60 - i * 16} ${CX - 40 - i * 26},${CY + 60 + i * 16} ${CX},${CY + 26}`}
                fill="none"
                stroke={C.air}
                strokeWidth={1.2}
                opacity={0.7}
              />
            ))}
            {[34, 50, 66].map((r, i) => (
              <path
                key={`r${r}`}
                d={`M${CX},${CY - 26} C${CX + 30 + i * 20},${CY - 56 - i * 14} ${CX + 44 + i * 30},${CY + 56 + i * 14} ${CX},${CY + 26}`}
                fill="none"
                stroke={C.air}
                strokeWidth={1.2}
                opacity={0.4}
              />
            ))}
            <path
              d={`M${CX - 96},${CY - 66} C${CX - 132},${CY} ${CX - 132},${CY} ${CX - 96},${CY + 66}`}
              fill="none"
              stroke={C.warm}
              strokeWidth={2}
              opacity={0.8}
            />
            <text x={CX - 150} y={CY + 84} fontSize={8.5} fill={C.warm}>
              bow shock
            </text>
            {windLines(() => CX - 108)}
            <circle cx={CX} cy={CY} r={26} fill={C.water} opacity={0.85} />
            <circle cx={CX} cy={CY} r={11} fill={C.hot} />
            <text x={CX} y={CY + 46} textAnchor="middle" fontSize={8.5} fill={C.dim}>
              liquid iron core
            </text>
          </g>
        ) : (
          <g>
            {windLines(() => (view === 1 ? CX - 30 : CX - 26))}
            <circle
              cx={CX}
              cy={CY}
              r={view === 1 ? 26 : 19}
              fill={view === 1 ? C.water : C.rock}
              opacity={0.8}
            />
            <circle
              cx={CX}
              cy={CY}
              r={view === 1 ? 11 : 8}
              fill={view === 1 ? C.hot : 'rgba(148,162,192,0.5)'}
            />
            {Array.from({ length: 9 }, (_, i) => (
              <circle
                key={i}
                cx={CX + 24 + i * 11}
                cy={CY - 24 + (i % 4) * 14}
                r={1.8}
                fill={C.life}
                opacity={0.6}
              />
            ))}
            <text x={CX + 40} y={CY + 50} textAnchor="middle" fontSize={8.5} fill={C.life}>
              atmosphere stripped away
            </text>
            {view === 2 ? (
              <text x={CX} y={CY + 40} textAnchor="middle" fontSize={8.5} fill={C.faint}>
                core solidified — dynamo stopped
              </text>
            ) : null}
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>{notes[view]}</Note>
    </Stack>
  );
}
