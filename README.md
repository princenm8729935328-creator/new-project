# Apex Circuit

A mobile-first 3D racing game built with [Three.js](https://threejs.org/) and
[Vite](https://vite.dev/). Three laps of a closed road circuit, on-screen
pedals, lap timing and best-lap tracking — no assets to download, everything is
generated at runtime.

## Running it

```bash
npm install
npm run dev      # dev server on http://localhost:5173 (exposed on the LAN too)
```

To try it on a phone, run `npm run dev` and open the Network URL it prints on a
device on the same Wi-Fi.

```bash
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
```

Requires Node 18+ and a browser with WebGL2.

## Controls

| Action | Touch | Keyboard |
| --- | --- | --- |
| Accelerate | **GO** pedal | `W` / `↑` |
| Brake, then reverse | **BRAKE** pedal | `S` / `↓` / `Space` |
| Steer | **◀ ▶** buttons | `A` `D` / `←` `→` |
| Pause | HUD pause button | `Esc` / `P` |
| Restart | Pause or finish screen | `R` |
| Reset camera | — | `C` |

Holding **BRAKE** at a standstill selects reverse. Pedals use pointer capture,
so sliding a thumb off a button keeps it held rather than silently cutting the
throttle.

## The circuit

The track is described as a sequence of straights and tangent circular arcs
(`CIRCUIT` in `src/world/Track.js`) rather than a hand-placed spline:

- **1201 m** lap, six corners, a **285 m** start/finish straight
- tightest corner **45.6 m** radius — about 100 km/h at the car's grip limit
- arc angles sum to exactly −360°, and two straight lengths were solved so the
  loop closes on itself to within a millimetre

Describing it this way means the straights are exactly straight and every
corner radius is chosen explicitly. A spline through hand-placed points gives
neither guarantee — it produces curvature cusps far tighter than the road is
wide, and no true straight to line up the start on.

Everything else derives from one arc-length-uniform sampling of that
centreline. Because the samples are evenly spaced, the index of the nearest
sample doubles as a distance-along-track measure, so lap progress, wrong-way
detection and barrier collision are all cheap lookups rather than mesh physics.

Lateral bands from the centreline:

| Band | Half-width | Behaviour |
| --- | --- | --- |
| Road | 0 – 8.0 m | full grip |
| Kerb | 8.0 – 9.3 m | full grip |
| Gravel run-off | 9.3 – 12.9 m | 45% engine power, heavy drag |
| Barrier | 12.9 m | hard limit |

## How it works

```
src/
├── main.js                 boot + WebGL failure fallback
├── core/
│   ├── Game.js             scene assembly, main loop, race flow
│   └── quality.js          device tiering — one place for every cost knob
├── world/
│   ├── Track.js            circuit geometry, collision and progress queries
│   ├── Environment.js      ground, hills, instanced trees/rocks, grandstands
│   ├── Sky.js              gradient sky dome (shader, no cubemap)
│   └── Lighting.js         sun with a car-following shadow frustum
├── entities/Car.js         low-poly model + arcade driving model
├── systems/
│   ├── FollowCamera.js     damped chase camera, aspect-aware framing
│   ├── Input.js            touch pedals + keyboard
│   └── RaceManager.js      countdown, laps, timing, completion
├── ui/
│   ├── HUD.js              DOM HUD (kept out of the 3D layer)
│   └── style.css           mobile-first layout
└── utils/                  math helpers, runtime-generated textures
```

### Driving model

The car is **kinematic** — it owns a heading and a scalar speed rather than a
full rigid body. It cannot tunnel through walls, it behaves identically at any
frame rate, and it costs almost nothing on a phone. Cornering still feels
right because the bicycle-model turn rate is clipped by a grip ceiling
(`MAX_LATERAL_G`), so fast corners open out instead of pivoting on the spot.

Barrier hits clamp the car to the wall line and scrub speed in proportion to
how squarely it hit — a graze costs little, a head-on stops you — then deflect
the heading along the wall so you slide rather than stick.

### Lap counting

Progress is accumulated as a *continuous* position along the track, not a
trigger volume at the start line. A lap can only be credited by actually
driving the whole loop: you cannot reverse across the line to farm laps
(reversing back over it un-credits the lap), and no lap is ever missed because
a long frame skipped past a trigger.

### Performance

`src/core/quality.js` picks a tier from the user agent, core count and device
memory, and everything expensive reads from it: pixel-ratio cap, antialiasing,
shadow map size, shadow frustum, prop counts, fog distance and track
tessellation.

Beyond that:

- every prop type is a single `InstancedMesh` — trees, rocks, barriers, centre
  dashes and hills are one draw call each
- textures are generated on a canvas at runtime, so there is nothing to
  download and no binary assets in the repo
- the sun's shadow frustum is small and follows the car, so a 1024px map still
  resolves crisp contact shadows
- track queries search a window around the previous frame's index — O(80) per
  frame instead of O(segments)
- the HUD is DOM, not rendered geometry, and every field compares before
  writing to avoid needless layout invalidation
- delta time is clamped, so a backgrounded tab cannot teleport the car

## Limitations

- Single player. There are no AI opponents and no collision between cars.
- No audio.
- The track is flat. There is no elevation change, banking or jumps — this
  keeps collision to a 2D lateral clamp, which is what makes it cheap and
  impossible to tunnel through.
- No persistence: the best lap survives restarts within a session, but is lost
  on reload.
- One circuit, one car, no tuning or car selection.
