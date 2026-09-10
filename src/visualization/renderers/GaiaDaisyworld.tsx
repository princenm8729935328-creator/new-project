import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack, ToggleRow } from './lifeKit';

/**
 * Daisyworld, run alongside the same planet without daisies.
 *
 * The comparison is essential. Daisyworld on its own looks like proof that life
 * regulates planets; next to the bare-rock control it is clearly a
 * demonstration that a specific coupling can regulate — and the note is explicit
 * that the coupling is convenient rather than general.
 */

const SIGMA = 5.670374419e-8;

/** Settle the daisy planet at a given solar luminosity. */
function daisyWorld(lum: number): { temp: number; black: number; white: number } {
  let black = 0.2;
  let white = 0.2;
  let temp = 295;
  for (let i = 0; i < 400; i += 1) {
    const bare = 1 - black - white;
    const albedo = black * 0.25 + white * 0.75 + bare * 0.5;
    const eq = ((1361 * lum * (1 - albedo)) / (4 * SIGMA)) ** 0.25 + 22;
    temp += (eq - temp) * 0.1;
    const growth = (localT: number): number => Math.max(0, 1 - 0.003265 * (295.5 - localT) ** 2);
    const gb = growth(temp + 18 * (0.5 - 0.25));
    const gw = growth(temp + 18 * (0.5 - 0.75));
    black = Math.min(0.7, Math.max(0.001, black + black * (bare * gb - 0.3) * 0.2));
    white = Math.min(0.7, Math.max(0.001, white + white * (bare * gw - 0.3) * 0.2));
  }
  return { temp, black, white };
}

function bareWorld(lum: number): number {
  return ((1361 * lum * (1 - 0.5)) / (4 * SIGMA)) ** 0.25 + 22;
}

export default function GaiaDaisyworld(_props: VisualizationProps): ReactNode {
  const [lum, setLum] = useState(1);
  const [view, setView] = useState(0);
  const { temp, black, white } = daisyWorld(lum);
  const bare = bareWorld(lum);

  const LEFT = 40;
  const TOP = 22;
  const H = 204;
  const pw = 380 - LEFT - 14;
  const ph = H - TOP - 42;
  const px = (l: number): number => LEFT + ((l - 0.6) / 1.0) * pw;
  const py = (t: number): number => TOP + ph - ((t - 240) / 130) * ph;

  const curve = (fn: (l: number) => number): string =>
    Array.from({ length: 70 }, (_, i) => {
      const l = 0.6 + (i / 69) * 1.0;
      return `${i === 0 ? 'M' : 'L'}${px(l).toFixed(2)},${py(fn(l)).toFixed(2)}`;
    }).join(' ');

  return (
    <Stack>
      <Figure height={H}>
        {view === 0 ? (
          <g>
            <text x={3} y={11} fontSize={9} fill={C.dim}>
              planetary temperature, K
            </text>
            {[260, 290, 320, 350].map((t) => (
              <g key={t}>
                <line x1={LEFT} x2={LEFT + pw} y1={py(t)} y2={py(t)} stroke={C.grid} />
                <text
                  x={LEFT - 5}
                  y={py(t) + 3}
                  textAnchor="end"
                  fontSize={8}
                  fill={C.faint}
                  fontFamily="ui-monospace, monospace"
                >
                  {t}
                </text>
              </g>
            ))}
            <path
              d={curve(bareWorld)}
              fill="none"
              stroke={C.rock}
              strokeWidth={1.8}
              strokeDasharray="4 3"
            />
            <path
              d={curve((l) => daisyWorld(l).temp)}
              fill="none"
              stroke={C.life}
              strokeWidth={2.2}
            />
            <text x={LEFT + 8} y={TOP + 14} fontSize={8.5} fill={C.rock}>
              bare rock, no daisies
            </text>
            <text x={LEFT + 8} y={TOP + 26} fontSize={8.5} fill={C.life}>
              with daisies
            </text>
            <circle cx={px(lum)} cy={py(temp)} r={4.5} fill={C.life} />
            <circle cx={px(lum)} cy={py(bare)} r={4} fill={C.rock} />
            <text x={LEFT + pw / 2} y={H - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
              solar output, relative to today
            </text>
          </g>
        ) : (
          <g>
            <text x={20} y={20} fontSize={9} fill={C.dim}>
              surface cover
            </text>
            <rect x={20} y={40} width={340} height={30} rx={3} fill="rgba(148,162,192,0.25)" />
            <rect x={20} y={40} width={Math.max(340 * black, 0)} height={30} fill="#2b2f38" />
            <rect
              x={20 + 340 * black}
              y={40}
              width={Math.max(340 * white, 0)}
              height={30}
              fill="rgba(240,244,250,0.9)"
            />
            <text x={20} y={92} fontSize={9} fill="rgba(233,238,247,0.9)">
              black daisies {(black * 100).toFixed(0)}% — absorb heat, warm the planet
            </text>
            <text x={20} y={112} fontSize={9} fill="rgba(233,238,247,0.9)">
              white daisies {(white * 100).toFixed(0)}% — reflect heat, cool the planet
            </text>
            <text x={20} y={132} fontSize={9} fill={C.dim}>
              bare ground {((1 - black - white) * 100).toFixed(0)}%
            </text>
            <text x={20} y={158} fontSize={8.5} fill={C.warm}>
              no daisy is regulating anything — each simply grows where it grows best
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow
        label="View"
        options={['Temperature', 'Daisy cover']}
        value={view}
        onChange={setView}
      />

      <ControlRows>
        <Slider
          name="Solar output"
          hiddenLabel="Solar luminosity relative to today"
          min={0.6}
          max={1.6}
          step={0.01}
          value={lum}
          onChange={setLum}
          display={`${lum.toFixed(2)}×`}
        />
      </ControlRows>

      <Note>
        At <strong>{lum.toFixed(2)}×</strong> solar output, the bare planet sits at{' '}
        <strong>{bare.toFixed(0)} K</strong> and the daisy planet at{' '}
        <strong>{temp.toFixed(0)} K</strong>. Across the whole range the daisy planet stays far
        closer to constant. This is a beautiful demonstration that planetary regulation does not
        require foresight — but it is a demonstration of possibility, not evidence about Earth. Its
        regulation works because the trait under selection, colour, happens to be the same trait
        that controls the planetary variable, albedo, and happens to act in the right direction.
        There is no general reason for real biospheres to be built that way, and later analyses
        showed the result is sensitive to assumptions, with cheaters and herbivores destroying it in
        some versions and not others.
      </Note>
    </Stack>
  );
}
