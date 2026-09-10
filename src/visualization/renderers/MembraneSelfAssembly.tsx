import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Why a membrane forms itself.
 *
 * Nothing has to assemble it. Molecules with a water-loving head and a
 * water-hating tail have exactly one arrangement that satisfies both ends, and
 * they find it. The slider raises the concentration through the critical point
 * so the reader sees the transition rather than being told about it.
 */

const CRITICAL = 0.5;

function molecule(x: number, y: number, angle: number, scale = 1): ReactNode {
  const rad = (angle * Math.PI) / 180;
  const tx = x + Math.cos(rad) * 11 * scale;
  const ty = y + Math.sin(rad) * 11 * scale;
  return (
    <g>
      <line
        x1={x}
        y1={y}
        x2={tx}
        y2={ty}
        stroke="rgba(255,210,127,0.8)"
        strokeWidth={1.6 * scale}
      />
      <circle cx={x} cy={y} r={3.2 * scale} fill={C.water} />
    </g>
  );
}

export default function MembraneSelfAssembly(_props: VisualizationProps): ReactNode {
  const [conc, setConc] = useState(0.2);
  const assembled = conc >= CRITICAL;
  const n = Math.round(10 + conc * 26);

  return (
    <Stack>
      <Figure height={192}>
        <rect x={8} y={20} width={364} height={158} rx={5} fill="rgba(111,179,255,0.08)" />
        <text x={16} y={34} fontSize={8.5} fill={C.water}>
          water
        </text>

        {assembled ? (
          <g>
            {Array.from({ length: 34 }, (_, i) => {
              const a = (i / 34) * Math.PI * 2;
              const cx = 190 + Math.cos(a) * 50;
              const cy = 100 + Math.sin(a) * 44;
              return <g key={`o${i}`}>{molecule(cx, cy, (a * 180) / Math.PI + 180)}</g>;
            })}
            {Array.from({ length: 30 }, (_, i) => {
              const a = (i / 30) * Math.PI * 2;
              const cx = 190 + Math.cos(a) * 28;
              const cy = 100 + Math.sin(a) * 24;
              return <g key={`i${i}`}>{molecule(cx, cy, (a * 180) / Math.PI)}</g>;
            })}
            <text x={190} y={104} textAnchor="middle" fontSize={8.5} fill={C.life}>
              inside
            </text>
            <text x={190} y={168} textAnchor="middle" fontSize={8.5} fill={C.life}>
              a closed compartment, formed without assistance
            </text>
          </g>
        ) : (
          <g>
            {Array.from({ length: n }, (_, i) => {
              const a = i * 2.399;
              const cx = 190 + Math.cos(a) * (30 + (i % 7) * 20);
              const cy = 100 + Math.sin(a) * (20 + (i % 5) * 14);
              return <g key={i}>{molecule(cx, cy, (i * 47) % 360)}</g>;
            })}
            <text x={190} y={168} textAnchor="middle" fontSize={8.5} fill={C.dim}>
              dispersed — below the concentration at which assembly happens
            </text>
          </g>
        )}
      </Figure>

      <ControlRows>
        <Slider
          name="Concentration"
          hiddenLabel="Amphiphile concentration relative to the critical value"
          min={0.05}
          max={1}
          step={0.01}
          value={conc}
          onChange={setConc}
          display={`${(conc / CRITICAL).toFixed(2)}× critical`}
        />
      </ControlRows>

      <Note>
        Each molecule has a head that water attracts and a tail that water repels. Below the
        critical concentration they drift separately; above it, tails hide from water by facing each
        other and heads face outward, and the sheet closes into a sphere because an edge would
        expose tails.{' '}
        {assembled
          ? 'You now have an inside and an outside — the minimum requirement for a cell — produced by nothing but the shape of a molecule.'
          : 'Raise the concentration past the critical value and the arrangement appears on its own.'}{' '}
        Fatty acids form vesicles like these readily, and they have been shown to grow and divide
        when fed more material. What has not been demonstrated is a vesicle that also copies its own
        contents.
      </Note>
    </Stack>
  );
}
