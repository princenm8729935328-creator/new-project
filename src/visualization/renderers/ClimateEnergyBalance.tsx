import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * The whole of planetary climate in one equation, made adjustable.
 *
 * Absorbed sunlight equals emitted infrared. Solve for temperature and you get
 * the effective temperature; add a greenhouse term and you get something close
 * to the real surface. The value of doing it this way is that the reader can
 * see how large the greenhouse contribution has to be — Earth without one would
 * be frozen solid.
 */

const S0 = 1361; // W/m^2 solar constant
const SIGMA = 5.670374419e-8;

function effectiveK(solarFrac: number, albedo: number): number {
  return ((S0 * solarFrac * (1 - albedo)) / (4 * SIGMA)) ** 0.25;
}

export default function ClimateEnergyBalance(_props: VisualizationProps): ReactNode {
  const [albedo, setAlbedo] = useState(0.3);
  const [greenhouse, setGreenhouse] = useState(33);
  const [solarFrac, setSolarFrac] = useState(1);

  const te = effectiveK(solarFrac, albedo);
  const ts = te + greenhouse;

  const barX = (v: number, lo: number, hi: number): number => 26 + ((v - lo) / (hi - lo)) * 300;

  return (
    <Stack>
      <Figure height={186}>
        <text x={10} y={14} fontSize={9} fill={C.dim}>
          incoming sunlight, absorbed and reflected
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={30 + i * 26}
            y1={22}
            x2={44 + i * 26}
            y2={54}
            stroke={C.warm}
            strokeWidth={1.4}
            opacity={0.8}
          />
        ))}
        <path
          d={`M160,54 l${-18 * albedo * 3},-30`}
          stroke="rgba(220,235,255,0.8)"
          strokeWidth={2}
        />
        <text x={168} y={34} fontSize={8.5} fill="rgba(220,235,255,0.8)">
          {(albedo * 100).toFixed(0)}% reflected
        </text>

        <rect x={20} y={56} width={340} height={16} fill={C.rock} opacity={0.6} rx={2} />

        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={240 + i * 26}
            y1={54}
            x2={234 + i * 26}
            y2={24}
            stroke={C.hot}
            strokeWidth={1.4}
            opacity={0.7}
          />
        ))}
        <text x={244} y={20} fontSize={8.5} fill={C.hot}>
          infrared out
        </text>

        <text x={26} y={96} fontSize={9} fill={C.dim}>
          without greenhouse (effective temperature)
        </text>
        <line
          x1={26}
          y1={104}
          x2={326}
          y2={104}
          stroke={C.grid}
          strokeWidth={6}
          strokeLinecap="round"
        />
        <circle cx={barX(te, 180, 320)} cy={104} r={5} fill={C.water} />
        <text x={26} y={122} fontSize={9} fill={C.dim}>
          with greenhouse (surface temperature)
        </text>
        <line
          x1={26}
          y1={130}
          x2={326}
          y2={130}
          stroke={C.grid}
          strokeWidth={6}
          strokeLinecap="round"
        />
        <circle cx={barX(ts, 180, 320)} cy={130} r={5} fill={C.hot} />

        <line
          x1={barX(273, 180, 320)}
          y1={94}
          x2={barX(273, 180, 320)}
          y2={140}
          stroke={C.water}
          strokeDasharray="3 3"
          opacity={0.7}
        />
        <text x={barX(273, 180, 320)} y={152} textAnchor="middle" fontSize={8} fill={C.water}>
          273 K, water freezes
        </text>
        <text x={26} y={172} fontSize={8} fill={C.faint} fontFamily="ui-monospace, monospace">
          180 K
        </text>
        <text
          x={326}
          y={172}
          textAnchor="end"
          fontSize={8}
          fill={C.faint}
          fontFamily="ui-monospace, monospace"
        >
          320 K
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Albedo"
          hiddenLabel="Fraction of sunlight reflected"
          min={0.05}
          max={0.8}
          step={0.01}
          value={albedo}
          onChange={setAlbedo}
          display={albedo.toFixed(2)}
        />
        <Slider
          name="Greenhouse"
          hiddenLabel="Greenhouse warming in kelvin"
          min={0}
          max={90}
          step={1}
          value={greenhouse}
          onChange={setGreenhouse}
          display={`+${greenhouse} K`}
        />
        <Slider
          name="Sunlight"
          hiddenLabel="Solar output relative to today"
          min={0.7}
          max={1.15}
          step={0.01}
          value={solarFrac}
          onChange={setSolarFrac}
          display={`${solarFrac.toFixed(2)}×`}
        />
      </ControlRows>

      <Note>
        Effective temperature <strong>{te.toFixed(1)} K</strong>, surface temperature{' '}
        <strong>{ts.toFixed(1)} K</strong> ({(ts - 273.15).toFixed(1)} °C).{' '}
        {ts < 273
          ? 'This planet is frozen.'
          : ts > 330
            ? 'This planet is hotter than anywhere on Earth’s surface today.'
            : 'Liquid water is possible over most of this planet.'}{' '}
        Earth&rsquo;s present values are albedo 0.30 and about +33 K of greenhouse warming — without
        that second term the effective temperature is 255 K, well below freezing, and the oceans
        would be ice.
      </Note>
    </Stack>
  );
}
