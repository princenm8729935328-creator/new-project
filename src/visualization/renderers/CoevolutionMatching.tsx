import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Darwin's orchid, and the prediction that came true.
 *
 * The reader lengthens the flower's nectar spur and watches the required
 * proboscis follow. This is the one case in coevolution where a specific,
 * falsifiable prediction was made from the shape of a flower and confirmed
 * forty-one years later, which is worth showing rather than telling.
 */

export default function CoevolutionMatching(_props: VisualizationProps): ReactNode {
  const [spur, setSpur] = useState(30);
  const reach = Math.max(spur - 2, 4);
  const pollinated = true;

  return (
    <Stack>
      <Figure height={192}>
        <text x={16} y={16} fontSize={9} fill={C.dim}>
          nectar spur length vs. the proboscis needed to reach the bottom
        </text>

        <g transform="translate(64,40)">
          <path d="M-22,0 Q0,-20 22,0 Q0,14 -22,0 z" fill="rgba(233,238,247,0.85)" />
          <rect x={-3} y={0} width={6} height={spur * 3.2} fill="rgba(233,238,247,0.5)" rx={3} />
          <circle cx={0} cy={spur * 3.2} r={4} fill={C.warm} />
          <text x={16} y={spur * 3.2 + 4} fontSize={8} fill={C.warm}>
            nectar
          </text>
        </g>
        <text x={64} y={182} textAnchor="middle" fontSize={8.5} fill={C.dim}>
          spur {spur} cm
        </text>

        <g transform="translate(250,60)">
          <ellipse cx={0} cy={0} rx={26} ry={16} fill={C.deep} opacity={0.7} />
          <path
            d={`M-18,10 Q${-40},${reach * 1.6} ${-70},${reach * 3.0}`}
            fill="none"
            stroke={C.warm}
            strokeWidth={2.4}
          />
          <text x={0} y={-24} textAnchor="middle" fontSize={8.5} fill={C.deep}>
            moth
          </text>
        </g>
        <text x={250} y={182} textAnchor="middle" fontSize={8.5} fill={pollinated ? C.life : C.hot}>
          proboscis ≈ {reach} cm
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Spur length"
          hiddenLabel="Length of the orchid nectar spur in centimetres"
          min={4}
          max={40}
          step={1}
          value={spur}
          onChange={setSpur}
          display={`${spur} cm`}
        />
      </ControlRows>

      <Note>
        In 1862 Darwin received a Madagascan orchid with a nectar spur about 30 centimetres long and
        wrote that there must be a moth in Madagascar with a proboscis of comparable length. The
        suggestion was ridiculed. In 1903 the moth was described —{' '}
        <em>Xanthopan morganii praedicta</em>, the last word meaning &ldquo;the predicted one&rdquo;
        — and its feeding on the orchid was finally filmed in 1992. The escalation runs in both
        directions: a longer spur forces the moth to press harder against the pollen, so flowers
        with longer spurs are pollinated better, and moths with longer tongues reach nectar others
        cannot. Neither partner is trying to escalate. The figure is a schematic; the real spur is
        coiled and the real moth is far less tidy.
      </Note>
    </Stack>
  );
}
