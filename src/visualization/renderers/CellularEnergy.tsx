import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Chemiosmosis, and why it was so hard to believe.
 *
 * The reason to draw this rather than describe it is that the mechanism is
 * spatial: protons are pumped across a membrane and flow back through a turbine.
 * Mitchell's idea was rejected for years precisely because everyone was looking
 * for a chemical intermediate rather than a gradient, and a diagram makes the
 * difference obvious in a way an equation does not.
 */

const VIEWS = ['Fermentation', 'Respiration', 'The turbine'] as const;

export default function CellularEnergy(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(1);

  const notes = [
    'Fermentation breaks a sugar part-way down without any external electron acceptor, and nets two ATP per glucose. It works anywhere, needs no oxygen, and is what the first cells almost certainly relied on — but it leaves most of the chemical energy in the waste products, which is why beer contains alcohol.',
    'Respiration passes electrons down a chain of carriers embedded in a membrane, using each step to pump protons across. Oxygen at the end is simply the electron acceptor with the largest available drop. The gradient is then used to make ATP — about thirty per glucose, roughly fifteen times what fermentation yields.',
    'The protons flow back through a rotating molecular machine. ATP synthase turns physically, at several hundred revolutions per second, and each turn assembles ATP. Peter Mitchell proposed this in 1961 and spent a decade being disbelieved; the rotation was eventually filmed directly.',
  ];

  return (
    <Stack>
      <Figure height={186}>
        {view === 0 ? (
          <g>
            <text x={190} y={40} textAnchor="middle" fontSize={10} fill={C.warm}>
              glucose
            </text>
            <path d="M190,48 L190,80" stroke={C.dim} strokeWidth={1.4} />
            <path d="M190,80 l-4,-8 l8,0 z" fill={C.dim} />
            <text x={190} y={96} textAnchor="middle" fontSize={9.5} fill={C.dim}>
              partial breakdown
            </text>
            <text x={110} y={130} textAnchor="middle" fontSize={9} fill={C.life}>
              2 ATP
            </text>
            <text x={270} y={130} textAnchor="middle" fontSize={9} fill={C.hot}>
              ethanol or lactate
            </text>
            <text x={270} y={144} textAnchor="middle" fontSize={8} fill={C.faint}>
              most of the energy, discarded
            </text>
          </g>
        ) : view === 1 ? (
          <g>
            <rect x={16} y={70} width={348} height={16} fill="rgba(148,162,192,0.3)" />
            <text x={22} y={62} fontSize={8.5} fill={C.dim}>
              outside — protons accumulate
            </text>
            <text x={22} y={104} fontSize={8.5} fill={C.dim}>
              inside
            </text>
            {[70, 130, 190, 250].map((x, i) => (
              <g key={x}>
                <rect x={x} y={64} width={30} height={28} rx={3} fill={C.water} opacity={0.8} />
                <text x={x + 15} y={82} textAnchor="middle" fontSize={8} fill="#0d1a26">
                  {['I', 'II', 'III', 'IV'][i]}
                </text>
                <path d={`M${x + 15},64 L${x + 15},48`} stroke={C.warm} strokeWidth={1.4} />
                <path d={`M${x + 15},46 l-3.5,7 l7,0 z`} fill={C.warm} />
              </g>
            ))}
            <path d="M40,110 L66,96" stroke={C.life} strokeWidth={1.4} />
            <text x={38} y={124} fontSize={8.5} fill={C.life}>
              electrons in
            </text>
            <text x={296} y={124} fontSize={8.5} fill={C.hot}>
              O₂ → H₂O
            </text>
            <text x={190} y={40} textAnchor="middle" fontSize={9} fill={C.warm}>
              H⁺ pumped out at each step
            </text>
            <text x={190} y={168} textAnchor="middle" fontSize={9} fill={C.life}>
              ≈ 30 ATP per glucose
            </text>
          </g>
        ) : (
          <g>
            <rect x={16} y={78} width={348} height={14} fill="rgba(148,162,192,0.3)" />
            {[40, 70, 100, 300, 330].map((x) => (
              <text key={x} x={x} y={64} fontSize={10} fill={C.warm}>
                H⁺
              </text>
            ))}
            <circle cx={190} cy={70} r={20} fill={C.life} opacity={0.35} />
            <rect x={184} y={84} width={12} height={30} fill={C.life} opacity={0.6} />
            <circle cx={190} cy={122} r={16} fill={C.life} opacity={0.55} />
            <path d="M190,44 L190,58" stroke={C.warm} strokeWidth={1.6} />
            <path d="M190,60 l-3.5,-7 l7,0 z" fill={C.warm} />
            <text x={218} y={126} fontSize={9} fill={C.life}>
              ATP synthase
            </text>
            <text x={190} y={158} textAnchor="middle" fontSize={9} fill={C.dim}>
              protons flowing back turn a rotor; the rotor makes ATP
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="View" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>{notes[view]}</Note>
    </Stack>
  );
}
