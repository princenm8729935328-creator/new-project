import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why copying accuracy, not individual cleverness, decides whether skill accumulates.
 *
 * A ratchet either holds or it does not, and the threshold behaviour is sharp.
 * Sliding fidelity across it turns an abstract claim into something the reader
 * can watch fail.
 */

export default function TransmissionFidelity(_props: VisualizationProps): ReactNode {
  const [fidelity, setFidelity] = useState(0.9);
  const [invention, setInvention] = useState(0.1);

  // Each generation retains `fidelity` of what it received and adds `invention`.
  // The equilibrium level is invention / (1 - fidelity), which is the ratchet.
  const levels: number[] = [];
  let level = 0;
  for (let g = 0; g < 40; g += 1) {
    level = level * fidelity + invention;
    levels.push(level);
  }
  const equilibrium = invention / Math.max(1 - fidelity, 0.0001);

  const LEFT = 42;
  const RIGHT = 14;
  const TOP = 22;
  const BOT = 150;
  const W = 380 - LEFT - RIGHT;
  const maxY = 12;
  const toX = (g: number): number => LEFT + (g / 39) * W;
  const toY = (v: number): number => BOT - (Math.min(v, maxY) / maxY) * (BOT - TOP);

  const path = levels
    .map((v, g) => `${g === 0 ? 'M' : 'L'}${toX(g).toFixed(1)},${toY(v).toFixed(1)}`)
    .join(' ');

  return (
    <Stack>
      <Figure height={192}>
        <line x1={LEFT} y1={BOT} x2={LEFT + W} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOT} stroke="rgba(148,162,192,0.35)" />
        {[0, 4, 8, 12].map((v) => (
          <g key={v}>
            <line x1={LEFT} y1={toY(v)} x2={LEFT + W} y2={toY(v)} stroke="rgba(148,162,192,0.1)" />
            <text x={LEFT - 5} y={toY(v) + 3} textAnchor="end" fontSize={7} fill={C.faint}>
              {v}
            </text>
          </g>
        ))}
        <text x={12} y={16} fontSize={7.5} fill={C.faint}>
          accumulated skill
        </text>

        {equilibrium < maxY ? (
          <g>
            <line
              x1={LEFT}
              y1={toY(equilibrium)}
              x2={LEFT + W}
              y2={toY(equilibrium)}
              stroke={C.hot}
              strokeDasharray="4 3"
              strokeWidth={1.2}
            />
            <text
              x={LEFT + W}
              y={toY(equilibrium) - 5}
              textAnchor="end"
              fontSize={7.5}
              fill={C.hot}
            >
              ceiling: {equilibrium.toFixed(1)}
            </text>
          </g>
        ) : (
          <text x={LEFT + W} y={TOP + 10} textAnchor="end" fontSize={7.5} fill={C.life}>
            no ceiling in range — knowledge keeps accumulating
          </text>
        )}

        <path d={path} fill="none" stroke={C.life} strokeWidth={2.2} />

        {[0, 10, 20, 30, 39].map((g) => (
          <text key={g} x={toX(g)} y={BOT + 13} textAnchor="middle" fontSize={7} fill={C.faint}>
            {g}
          </text>
        ))}
        <text x={LEFT + W / 2} y={BOT + 26} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          generations
        </text>
        <text x={LEFT} y={186} fontSize={8} fill={fidelity > 0.85 ? C.life : C.hot}>
          {fidelity > 0.92
            ? 'high fidelity: each generation starts from nearly all of the last one’s knowledge'
            : fidelity > 0.8
              ? 'moderate fidelity: accumulation stalls at a low ceiling'
              : 'low fidelity: knowledge is lost as fast as it is invented'}
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Copying fidelity"
          hiddenLabel="Proportion of received knowledge retained by each generation"
          min={0.4}
          max={0.98}
          step={0.01}
          value={fidelity}
          onChange={setFidelity}
          display={`${Math.round(fidelity * 100)}%`}
        />
        <Slider
          name="Invention rate"
          hiddenLabel="New knowledge added per generation"
          min={0.05}
          max={0.5}
          step={0.05}
          value={invention}
          onChange={setInvention}
          display={invention.toFixed(2)}
        />
      </ControlRows>

      <Note>
        Notice what happens when you raise invention while leaving fidelity low: the ceiling barely
        moves. Individual cleverness is not the limiting factor — transmission is. This is why
        cumulative culture is a property of a population rather than of a mind, and it reframes the
        human difference. Chimpanzees watching a demonstration tend to extract the goal and find
        their own route to it; human children copy the actions, including ones that are visibly
        unnecessary. That looks like a failure of reasoning and is arguably the opposite: many human
        techniques have steps whose purpose is invisible, and a learner who trims what seems
        redundant will sometimes be poisoned. This is a simple two-parameter model, not a simulation
        of any real population — but the threshold behaviour it shows is the reason archaeological
        &ldquo;regressions&rdquo; do not require anyone to have become less intelligent.
      </Note>
    </Stack>
  );
}
