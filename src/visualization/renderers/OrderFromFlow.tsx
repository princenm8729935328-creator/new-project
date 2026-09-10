import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Bénard convection: order appearing because energy is flowing through.
 *
 * The reader raises the heating and watches disordered motion snap into
 * hexagonal cells at a threshold. It is the cleanest available demonstration
 * that organisation does not require an organiser — and the honest limit is
 * stated in the note, because this explains self-organisation and not heredity.
 */

export default function OrderFromFlow(_props: VisualizationProps): ReactNode {
  const [heat, setHeat] = useState(0.3);
  const organised = heat > 0.5;

  return (
    <Stack>
      <Figure height={192}>
        <rect
          x={16}
          y={132}
          width={348}
          height={14}
          fill={`rgba(255,143,110,${0.25 + heat * 0.6})`}
          rx={2}
        />
        <text x={190} y={162} textAnchor="middle" fontSize={8.5} fill={C.hot}>
          heated from below
        </text>
        <rect x={16} y={26} width={348} height={12} fill="rgba(111,179,255,0.4)" rx={2} />
        <text x={190} y={20} textAnchor="middle" fontSize={8.5} fill={C.water}>
          cooled from above
        </text>

        {organised ? (
          <g>
            {Array.from({ length: 8 }, (_, i) => {
              const cx = 38 + i * 44;
              return (
                <g key={i}>
                  <ellipse
                    cx={cx}
                    cy={84}
                    rx={19}
                    ry={40}
                    fill="none"
                    stroke={C.warm}
                    strokeWidth={1.6}
                    opacity={0.8}
                  />
                  <path
                    d={i % 2 === 0 ? `M${cx},48 l-4,7 l8,0 z` : `M${cx},120 l-4,-7 l8,0 z`}
                    fill={C.warm}
                  />
                </g>
              );
            })}
            <text x={190} y={178} textAnchor="middle" fontSize={9} fill={C.life}>
              regular convection cells — nobody arranged them
            </text>
          </g>
        ) : (
          <g>
            {Array.from({ length: 46 }, (_, i) => {
              const a = i * 2.399;
              return (
                <circle
                  key={i}
                  cx={190 + Math.cos(a) * (20 + (i % 9) * 17)}
                  cy={84 + Math.sin(a) * (10 + (i % 6) * 6)}
                  r={2}
                  fill={C.faint}
                />
              );
            })}
            <text x={190} y={178} textAnchor="middle" fontSize={9} fill={C.dim}>
              disordered motion — heat conducted, no structure
            </text>
          </g>
        )}
      </Figure>

      <ControlRows>
        <Slider
          name="Heating"
          hiddenLabel="Rate of heating from below"
          min={0}
          max={1}
          step={0.01}
          value={heat}
          onChange={setHeat}
          display={heat.toFixed(2)}
        />
      </ControlRows>

      <Note>
        Below the threshold, heat is simply conducted and the fluid stays disordered. Above it, the
        flow organises into a regular pattern of rolls or hexagonal cells, because organised motion
        carries heat upward more effectively than random motion does. The structure persists for as
        long as the heating continues and vanishes when it stops. This is ordinary physics, not an
        exception to the second law: order inside is paid for by disorder outside, and the books
        balance. Schrödinger gave essentially this answer in 1944 to the question of how an organism
        maintains itself. What it does <em>not</em> explain is heredity — a system that copies
        information about its own structure — and treating the two as the same result is the most
        common overstatement in this area.
      </Note>
    </Stack>
  );
}
