import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Mutualism, commensalism and parasitism on one axis.
 *
 * They are usually taught as three categories. They are three regions of a
 * continuum, and a given relationship can move along it as conditions change —
 * which the slider makes unavoidable in a way that three boxes never would.
 */

export default function SymbiosisSpectrum(_props: VisualizationProps): ReactNode {
  const [pos, setPos] = useState(0.75);
  const benefitB = pos * 2 - 1;

  const label = benefitB > 0.15 ? 'Mutualism' : benefitB < -0.15 ? 'Parasitism' : 'Commensalism';
  const colour = benefitB > 0.15 ? C.life : benefitB < -0.15 ? C.hot : C.warm;

  const examples: Record<string, string> = {
    Mutualism:
      'Both partners gain. A fig and its wasp: the wasp is the only pollinator, and the fig is the only place the wasp can breed. Neither exists without the other, and the relationship is around 75 million years old.',
    Commensalism:
      'One gains and the other is essentially unaffected. Barnacles on a whale get transport and a feeding position; the whale is unlikely to notice. True neutrality is hard to demonstrate, and careful measurement often turns apparent commensalism into slight benefit or slight cost.',
    Parasitism:
      'One gains at the other’s expense. A tapeworm, a mistletoe, a parasitic wasp. Note that a successful parasite usually does not kill quickly — it needs the host functioning long enough to transmit — which is why virulence tends to settle at an intermediate level rather than a maximum.',
  };

  const LEFT = 24;
  const W = 332;
  const Y = 84;

  return (
    <Stack>
      <Figure height={176}>
        <defs>
          <linearGradient id="symgrad" x1="0" x2="1">
            <stop offset="0%" stopColor={C.hot} />
            <stop offset="50%" stopColor={C.warm} />
            <stop offset="100%" stopColor={C.life} />
          </linearGradient>
        </defs>
        <rect x={LEFT} y={Y - 9} width={W} height={18} rx={9} fill="url(#symgrad)" opacity={0.5} />
        <text x={LEFT} y={Y - 18} fontSize={8.5} fill={C.hot}>
          partner B harmed
        </text>
        <text x={LEFT + W} y={Y - 18} textAnchor="end" fontSize={8.5} fill={C.life}>
          partner B benefits
        </text>
        <text x={LEFT + W / 2} y={Y - 18} textAnchor="middle" fontSize={8.5} fill={C.warm}>
          unaffected
        </text>

        <circle cx={LEFT + pos * W} cy={Y} r={8} fill="#fff" />
        <text x={LEFT + pos * W} y={Y + 30} textAnchor="middle" fontSize={11} fill={colour}>
          {label}
        </text>

        <text x={190} y={132} textAnchor="middle" fontSize={8.5} fill={C.dim}>
          the same relationship can move along this axis
        </text>
        <text x={190} y={148} textAnchor="middle" fontSize={8.5} fill={C.faint}>
          gut bacteria: helpful in the gut, dangerous in the bloodstream
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Effect on B"
          hiddenLabel="Effect of the relationship on the second partner"
          min={0}
          max={1}
          step={0.01}
          value={pos}
          onChange={setPos}
          display={benefitB >= 0 ? `+${benefitB.toFixed(2)}` : benefitB.toFixed(2)}
        />
      </ControlRows>

      <Note>
        <strong>{label}.</strong> {examples[label]} Categories are convenient labels on a continuum,
        and the position of a given relationship depends on conditions. Mycorrhizal fungi help
        plants take up phosphorus and are repaid in sugar — but when soil phosphorus is abundant the
        plant gains little and the fungus becomes closer to a cost. Nothing about the organisms
        changed; the context did.
      </Note>
    </Stack>
  );
}
