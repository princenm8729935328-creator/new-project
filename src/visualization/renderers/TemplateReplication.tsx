import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Copying with errors, and the threshold that kills a lineage.
 *
 * Eigen's error threshold is normally presented as an inequality. Here it is a
 * curve the reader can walk along: raise the fidelity and long sequences
 * survive, lower it and information evaporates. The point is that early
 * replicators, copying badly, could only have been short — which caps how much
 * they could encode.
 */

/** Fraction of copies that are error-free, for a sequence of length L at per-base fidelity q. */
function intact(length: number, q: number): number {
  return q ** length;
}

export default function TemplateReplication(_props: VisualizationProps): ReactNode {
  const [fidelity, setFidelity] = useState(0.99);
  const maxLength = Math.floor(1 / (1 - fidelity));

  const LEFT = 42;
  const TOP = 24;
  const H = 206;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 40;
  const px = (l: number): number => LEFT + (l / 400) * pw;
  const py = (f: number): number => TOP + ph - f * ph;

  const curve = Array.from({ length: 120 }, (_, i) => {
    const l = (i / 119) * 400;
    return `${i === 0 ? 'M' : 'L'}${px(l).toFixed(2)},${py(intact(l, fidelity)).toFixed(2)}`;
  }).join(' ');

  return (
    <Stack>
      <Figure height={H}>
        <text x={3} y={11} fontSize={9} fill={C.dim}>
          fraction of copies with no errors
        </text>

        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line x1={LEFT} x2={LEFT + pw} y1={py(f)} y2={py(f)} stroke={C.grid} />
            <text
              x={LEFT - 5}
              y={py(f) + 3}
              textAnchor="end"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {f.toFixed(2)}
            </text>
          </g>
        ))}
        {[0, 100, 200, 300, 400].map((l) => (
          <g key={l}>
            <line x1={px(l)} x2={px(l)} y1={TOP} y2={TOP + ph} stroke={C.grid} />
            <text
              x={px(l)}
              y={TOP + ph + 13}
              textAnchor="middle"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {l}
            </text>
          </g>
        ))}
        <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
          sequence length, bases
        </text>

        <path d={curve} fill="none" stroke={C.life} strokeWidth={1.9} />

        {maxLength <= 400 ? (
          <g>
            <line
              x1={px(maxLength)}
              x2={px(maxLength)}
              y1={TOP}
              y2={TOP + ph}
              stroke={C.hot}
              strokeDasharray="4 3"
            />
            <text x={px(maxLength) + 4} y={TOP + 12} fontSize={8.5} fill={C.hot}>
              error threshold ≈ {maxLength} bases
            </text>
          </g>
        ) : null}
      </Figure>

      <ControlRows>
        <Slider
          name="Copying fidelity"
          hiddenLabel="Probability each base is copied correctly"
          min={0.95}
          max={0.999}
          step={0.001}
          value={fidelity}
          onChange={setFidelity}
          display={`${(fidelity * 100).toFixed(1)}%`}
        />
      </ControlRows>

      <Note>
        At <strong>{(fidelity * 100).toFixed(1)}%</strong> accuracy per base, sequences longer than
        about <strong>{maxLength} bases</strong> lose their information faster than selection can
        maintain it — the error threshold. A 200-base sequence copied at this fidelity yields{' '}
        <strong>{(intact(200, fidelity) * 100).toFixed(1)}%</strong> error-free copies. This is the
        trap the RNA world has to escape: accurate copying needs a good catalyst, a good catalyst
        needs a long sequence, and a long sequence needs accurate copying. Modern cells reach
        roughly 99.9999999% by using proteins to proofread.
      </Note>
    </Stack>
  );
}
