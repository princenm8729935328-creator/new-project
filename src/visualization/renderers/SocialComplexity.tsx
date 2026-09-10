import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why a social group is a harder problem than it looks.
 *
 * The number of relationships grows as the square of the number of individuals,
 * and drawing every edge at n = 30 makes that visceral in a way that n(n−1)/2
 * does not.
 */

export default function SocialComplexity(_props: VisualizationProps): ReactNode {
  const [n, setN] = useState(8);
  const pairs = (n * (n - 1)) / 2;

  const CX = 190;
  const CY = 92;
  const R = 68;
  const points = Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
    return [CX + Math.cos(a) * R, CY + Math.sin(a) * R] as const;
  });

  return (
    <Stack>
      <Figure height={186}>
        {points.map((p, i) =>
          points
            .slice(i + 1)
            .map((q, j) => (
              <line
                key={`${i}-${j}`}
                x1={p[0]}
                y1={p[1]}
                x2={q[0]}
                y2={q[1]}
                stroke="rgba(79,224,192,0.5)"
                strokeWidth={n > 16 ? 0.4 : 0.8}
                opacity={n > 16 ? 0.5 : 0.8}
              />
            )),
        )}
        {points.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={n > 20 ? 3.4 : 5.4} fill={C.warm} />
        ))}
        <text x={CX} y={174} textAnchor="middle" fontSize={9.5} fill={C.life}>
          {n} individuals · {pairs.toLocaleString()} relationships to keep track of
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Group size"
          hiddenLabel="Number of individuals in the group"
          min={2}
          max={30}
          step={1}
          value={n}
          onChange={setN}
          display={`${n}`}
        />
      </ControlRows>

      <Note>
        Doubling the group roughly quadruples the number of pairwise relationships, and a chimpanzee
        or baboon does demonstrably track them — who is dominant to whom, who groomed whom, which
        two have been spending time together, and therefore what will happen if you challenge one of
        them. Unlike a tree or a rock, every one of those individuals is also adapting to you, so
        the difficulty escalates rather than being learned once. This is the observation behind the
        social intelligence hypothesis, supported by a correlation between relative neocortex size
        and group size across primates — a correlation that does not generalise cleanly to birds and
        cetaceans, and that on its own cannot establish which way the causation runs.
      </Note>
    </Stack>
  );
}
