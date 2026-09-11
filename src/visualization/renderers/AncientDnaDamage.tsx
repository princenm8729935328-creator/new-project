import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why the damage that destroys ancient DNA is what authenticates it.
 *
 * Two things move together as the slider ages the sample: fragments get shorter,
 * and the characteristic end-damage rises. Modern contamination has neither, and
 * that asymmetry is what turned an irreproducible field into a rigorous one.
 */

export default function AncientDnaDamage(_props: VisualizationProps): ReactNode {
  const [ka, setKa] = useState(50);

  const fragLen = Math.max(38, 400 * Math.exp(-ka / 26));
  const damage = Math.min(0.42, 0.02 + 0.4 * (1 - Math.exp(-ka / 30)));
  const endogenous = Math.max(0.4, 60 * Math.exp(-ka / 55));

  const LEFT = 22;
  const W = 336;

  return (
    <Stack>
      <Figure height={206}>
        <text x={LEFT} y={16} fontSize={8.5} fill={C.dim}>
          a sample {ka} thousand years old
        </text>

        <text x={LEFT} y={38} fontSize={8} fill={C.faint}>
          typical fragment length
        </text>
        <rect x={LEFT} y={44} width={W} height={14} rx={4} fill="rgba(148,162,192,0.1)" />
        <rect
          x={LEFT}
          y={44}
          width={Math.max((W * fragLen) / 400, 6)}
          height={14}
          rx={4}
          fill={C.water}
        />
        <text x={LEFT + Math.max((W * fragLen) / 400, 6) + 6} y={55} fontSize={8} fill={C.water}>
          {Math.round(fragLen)} bases
        </text>

        <text x={LEFT} y={82} fontSize={8} fill={C.faint}>
          proportion of DNA that is actually from the individual
        </text>
        <rect x={LEFT} y={88} width={W} height={14} rx={4} fill="rgba(148,162,192,0.1)" />
        <rect
          x={LEFT}
          y={88}
          width={Math.max((W * endogenous) / 100, 4)}
          height={14}
          rx={4}
          fill={C.warm}
        />
        <text x={LEFT + Math.max((W * endogenous) / 100, 4) + 6} y={99} fontSize={8} fill={C.warm}>
          {endogenous.toFixed(1)}%
        </text>

        <text x={LEFT} y={126} fontSize={8} fill={C.faint}>
          damage at fragment ends — the authentication signature
        </text>
        <rect x={LEFT} y={132} width={W} height={14} rx={4} fill="rgba(148,162,192,0.1)" />
        <rect
          x={LEFT}
          y={132}
          width={Math.max((W * damage) / 0.45, 4)}
          height={14}
          rx={4}
          fill={C.life}
        />
        <text x={LEFT + Math.max((W * damage) / 0.45, 4) + 6} y={143} fontSize={8} fill={C.life}>
          {Math.round(damage * 100)}%
        </text>

        <rect
          x={LEFT}
          y={160}
          width={W}
          height={30}
          rx={5}
          fill={damage > 0.1 ? 'rgba(79,224,192,0.1)' : 'rgba(255,143,110,0.1)'}
        />
        <text x={LEFT + 8} y={174} fontSize={8.5} fill={damage > 0.1 ? C.life : C.hot}>
          {damage > 0.1
            ? 'damage pattern present: sequences can be authenticated as ancient'
            : 'too little damage to distinguish from modern contamination'}
        </text>
        <text x={LEFT + 8} y={186} fontSize={7.5} fill={C.faint}>
          modern contaminating DNA is long, abundant, and carries no such pattern
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Age"
          hiddenLabel="Age of the sample in thousands of years"
          min={1}
          max={120}
          step={1}
          value={ka}
          onChange={setKa}
          display={`${ka} ka`}
        />
      </ControlRows>

      <Note>
        When an organism dies its repair machinery stops, water attacks the molecule, and bacteria
        move in with genomes of their own. In a typical Neanderthal bone, well under 5% of the DNA
        present is Neanderthal; the rest is soil organisms and — the dangerous part — modern human
        DNA from everyone who has handled the specimen. That contaminant is intact, abundant and
        almost identical to what you are looking for. The solution turned out to be the damage
        itself: at the broken ends of each fragment a specific chemical change accumulates over
        time, reading as a substitution of one letter for another. Modern DNA has not had time to
        acquire it. The process destroying the molecule is what certifies it. Survival is strongly
        temperature-dependent, which produces a bias running opposite to the fossil record’s:
        fossils are abundant in East Africa and scarce in northern Europe, while ancient DNA is
        abundant in northern Europe and scarce in Africa. Values here are schematic and vary
        enormously with burial conditions.
      </Note>
    </Stack>
  );
}
