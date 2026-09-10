import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The Hadean and early Archean surface, as places rather than as a chemistry
 * problem.
 *
 * The origin-of-life topics argue about which of these settings hosted the
 * transition. This figure is doing something earlier and simpler: showing what
 * the young planet physically had, so that argument has somewhere to happen.
 */

interface Place {
  readonly key: string;
  readonly title: string;
  readonly detail: string;
  readonly draw: ReactNode;
}

const PLACES: readonly Place[] = [
  {
    key: 'Vents',
    title: 'Alkaline hydrothermal fields on the seafloor',
    detail:
      'Where seawater percolates into mantle rock, a reaction called serpentinisation produces warm, alkaline, hydrogen-rich fluid. Where it meets cooler, more acidic ocean water it builds porous mineral chimneys — the Lost City field in the Atlantic is the modern example, and its structures have been active for tens of thousands of years. Each pore is a tiny compartment with a natural proton gradient across its wall.',
    draw: (
      <g>
        <rect x={10} y={20} width={360} height={90} fill="rgba(111,179,255,0.14)" />
        <path d="M10,110 L370,110 L370,150 L10,150 z" fill="rgba(90,80,72,0.6)" />
        {[90, 170, 250].map((x, i) => (
          <g key={x}>
            <path
              d={`M${x},110 L${x - 14},${64 - i * 8} L${x + 14},${64 - i * 8} z`}
              fill="rgba(197,143,106,0.75)"
            />
            {[0, 1, 2].map((j) => (
              <circle
                key={j}
                cx={x + (j - 1) * 7}
                cy={54 - i * 8 - j * 6}
                r={2.4}
                fill={C.warm}
                opacity={0.7}
              />
            ))}
          </g>
        ))}
        <text x={190} y={140} textAnchor="middle" fontSize={8.5} fill={C.warm}>
          warm alkaline fluid seeping through porous mineral chimneys
        </text>
      </g>
    ),
  },
  {
    key: 'Pools',
    title: 'Volcanic pools that wet and dry',
    detail:
      'Land was scarce on the early Earth but not absent — volcanic islands existed, and geothermal fields on them would have held pools fed by rain and steam. Repeated wetting and drying concentrates whatever is dissolved and drives molecules to link into chains, which is difficult to achieve in bulk water. The cost is that ultraviolet light, unscreened by any ozone, reaches the surface directly and destroys as well as drives.',
    draw: (
      <g>
        <rect x={10} y={18} width={360} height={54} fill="rgba(255,143,110,0.10)" />
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={70 + i * 70}
            y1={22}
            x2={82 + i * 70}
            y2={58}
            stroke={C.deep}
            strokeWidth={1.4}
          />
        ))}
        <text x={40} y={34} fontSize={8} fill={C.deep}>
          UV
        </text>
        <path d="M10,80 L370,80 L370,150 L10,150 z" fill="rgba(90,80,72,0.55)" />
        {[80, 190, 296].map((x, i) => (
          <ellipse
            key={x}
            cx={x}
            cy={98 + i * 6}
            rx={44 - i * 6}
            ry={13}
            fill="rgba(111,179,255,0.45)"
          />
        ))}
        <text x={190} y={140} textAnchor="middle" fontSize={8.5} fill={C.water}>
          pools that fill and evaporate, concentrating what is dissolved
        </text>
      </g>
    ),
  },
  {
    key: 'Impacts',
    title: 'Delivery from space',
    detail:
      'The early Earth was struck constantly, and much of what struck it was carbonaceous — the Murchison meteorite alone contains more than eighty amino acids, along with sugars and nucleobases. Impacts also delivered water, and vaporised the sea when large enough. The same process that supplied the ingredients repeatedly destroyed whatever was assembling from them, which is one reason life may have begun several times before it began permanently.',
    draw: (
      <g>
        <rect x={10} y={18} width={360} height={92} fill="rgba(148,162,192,0.08)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <circle cx={70 + i * 62} cy={30 + (i % 3) * 18} r={3.4} fill={C.rock} />
            <line
              x1={70 + i * 62}
              y1={34 + (i % 3) * 18}
              x2={62 + i * 62}
              y2={64 + (i % 3) * 18}
              stroke={C.rock}
              strokeWidth={1}
              opacity={0.5}
            />
          </g>
        ))}
        <path d="M10,110 L370,110 L370,150 L10,150 z" fill="rgba(111,179,255,0.3)" />
        <text x={190} y={136} textAnchor="middle" fontSize={8.5} fill={C.rock}>
          amino acids, sugars and water arriving ready-made
        </text>
      </g>
    ),
  },
  {
    key: 'Ice',
    title: 'Ice, if the surface was cold',
    detail:
      'Freezing concentrates solutes into unfrozen brine channels between ice crystals, and cold stabilises RNA, which degrades quickly in warm water. The best laboratory ribozyme replicases work in ice for exactly this reason. Whether early Earth had substantial surface ice is contested — most reconstructions have it warm, and a faint young Sun makes the question harder rather than easier.',
    draw: (
      <g>
        <rect x={10} y={18} width={360} height={132} fill="rgba(220,235,255,0.14)" />
        {Array.from({ length: 9 }, (_, i) => (
          <polygon
            key={i}
            points={`${40 + i * 38},40 ${58 + i * 38},58 ${48 + i * 38},84 ${28 + i * 38},80 ${22 + i * 38},54`}
            fill="rgba(220,235,255,0.35)"
            stroke="rgba(220,235,255,0.6)"
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={i} cx={54 + i * 38} cy={86} r={3} fill={C.life} opacity={0.8} />
        ))}
        <text x={190} y={126} textAnchor="middle" fontSize={8.5} fill={C.water}>
          unfrozen brine channels between the crystals, where solutes concentrate
        </text>
      </g>
    ),
  },
];

export default function PrebioticEnvironments(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const place = PLACES[Math.min(pick, PLACES.length - 1)];
  if (!place) return null;

  return (
    <Stack>
      <Figure height={168}>
        <text x={10} y={13} fontSize={9.5} fill={C.dim}>
          {place.title}
        </text>
        {place.draw}
      </Figure>

      <ToggleRow
        label="Setting"
        options={PLACES.map((p) => p.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>{place.detail}</Note>
    </Stack>
  );
}
