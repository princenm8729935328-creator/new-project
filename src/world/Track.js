import * as THREE from 'three';
import { createCheckerTexture, createNoiseTexture } from '../utils/textures.js';

/**
 * The circuit.
 *
 * Everything — road mesh, kerbs, barriers, collision and lap progress — is
 * derived from a single arc-length-uniform sampling of a closed Catmull-Rom
 * centreline. Because the samples are evenly spaced, the index of the nearest
 * sample doubles as a distance-along-track measure, which makes lap progress,
 * wrong-way detection and barrier collision all cheap lookups instead of
 * mesh-level physics.
 */

const ROAD_HALF_WIDTH = 8.0; // metres from centreline to painted edge
const KERB_WIDTH = 1.3; // rumble strip: still full grip
const RUNOFF_WIDTH = 3.6; // gravel trap: drivable but slow
const BARRIER_INSET = 0.45; // gap between the run-off edge and the wall face

const DEG = Math.PI / 180;

/**
 * The circuit, described the way a real one is: straights joined by tangent
 * circular arcs. `['s', length]` is a straight; `['a', radius, degrees]` is an
 * arc, positive degrees turning left.
 *
 * Built this way the straights are exactly straight (so the car can be driven
 * flat off the grid without drifting into the gravel) and every corner radius
 * is chosen explicitly — a hand-placed spline gives neither guarantee, and
 * tends to produce curvature cusps far tighter than the road is wide.
 *
 * The arc angles sum to exactly -360 degrees, and the first and fourth
 * straights were solved so the loop closes on itself to within a millimetre.
 * Tightest corner is 45.6 m radius (about 100 km/h at the car's grip limit);
 * the lap is 1201 m.
 */
const CIRCUIT = [
  ['s', 285.18], // start / finish straight — the line sits at its midpoint
  ['a', 76.1, -99.16], // turn 1: hard right off the straight
  ['s', 93.68],
  ['a', 47.64, -106.73], // turn 2: the hairpin
  ['s', 62.8],
  ['a', 139.73, 56.34], // fast left sweeper
  ['s', 67.52],
  ['a', 45.61, -80.93], // turn 4: slowest corner on the lap
  ['s', 52.25],
  ['a', 70.38, -52.09], // quick right
  ['s', 71.49],
  ['a', 60.82, -77.43], // final corner onto the straight
];

/** Distance from the first straight's origin to the start/finish line. */
const START_OFFSET = CIRCUIT[0][1] / 2;

export class Track {
  constructor(quality) {
    this.quality = quality;
    this.group = new THREE.Group();
    this.group.name = 'Track';

    this.halfWidth = ROAD_HALF_WIDTH;
    this.kerbWidth = KERB_WIDTH;
    this.runoffWidth = RUNOFF_WIDTH;
    /** Beyond this the car is off the racing surface and loses grip. */
    this.gripLimit = ROAD_HALF_WIDTH + KERB_WIDTH;
    /** Hard limit for the car's lateral offset before it hits a barrier. */
    this.wallLimit = this.gripLimit + RUNOFF_WIDTH;
    this.barrierOffset = this.wallLimit + BARRIER_INSET;

    this._buildCentreline(quality.trackSegments);
    this._buildRoad();
    this._buildRunoff();
    this._buildKerbs();
    this._buildCentreDashes();
    this._buildBarriers();
    this._buildStartLine();

    // Reused so per-frame queries never allocate.
    this._result = {
      index: 0,
      t: 0,
      progress: 0,
      lateral: 0,
      distance: 0,
      point: new THREE.Vector3(),
      tangent: new THREE.Vector3(),
      side: new THREE.Vector3(),
    };
  }

  // ---------------------------------------------------------------- geometry

  /**
   * Walk the circuit description once to get its pieces, then sample the
   * centreline at exactly uniform arc length. Uniform spacing is what lets the
   * sample index double as a distance measure everywhere else in the game.
   */
  _buildCentreline(segments) {
    const pieces = [];
    let x = 0;
    let z = 0;
    let h = 0; // heading, as atan2(dz, dx)
    let total = 0;

    for (const seg of CIRCUIT) {
      if (seg[0] === 's') {
        const length = seg[1];
        pieces.push({ arc: false, x, z, h, length, start: total });
        x += Math.cos(h) * length;
        z += Math.sin(h) * length;
        total += length;
      } else {
        const radius = seg[1];
        const sweep = seg[2] * DEG;
        // Signed radius puts the centre on the correct side for either
        // direction, so one formula covers left and right turns.
        const rho = radius * Math.sign(sweep);
        const cx = x - rho * Math.sin(h);
        const cz = z + rho * Math.cos(h);
        const length = radius * Math.abs(sweep);
        pieces.push({ arc: true, cx, cz, rho, h, sweep, length, start: total });
        x = cx + rho * Math.sin(h + sweep);
        z = cz - rho * Math.cos(h + sweep);
        h += sweep;
        total += length;
      }
    }

    this.totalLength = total;
    this.count = segments;
    this.segmentLength = total / segments;

    this.points = [];
    this.tangents = [];
    this.sides = [];

    for (let i = 0; i < segments; i++) {
      const distance = (START_OFFSET + (i / segments) * total) % total;
      const { point, heading } = this._sampleCircuit(pieces, distance);
      this.points.push(point);
      const tangent = new THREE.Vector3(Math.cos(heading), 0, Math.sin(heading));
      this.tangents.push(tangent);
      // Left-hand perpendicular on the XZ plane.
      this.sides.push(new THREE.Vector3(-tangent.z, 0, tangent.x));
    }

    this.startPosition = this.points[0].clone();
    this.startYaw = Math.atan2(this.tangents[0].x, this.tangents[0].z);
  }

  /** Exact position and heading a given distance along the circuit. */
  _sampleCircuit(pieces, distance) {
    let piece = pieces[pieces.length - 1];
    for (const candidate of pieces) {
      if (distance < candidate.start + candidate.length) {
        piece = candidate;
        break;
      }
    }
    const local = distance - piece.start;

    if (!piece.arc) {
      return {
        point: new THREE.Vector3(
          piece.x + Math.cos(piece.h) * local,
          0,
          piece.z + Math.sin(piece.h) * local
        ),
        heading: piece.h,
      };
    }

    const heading = piece.h + Math.sign(piece.sweep) * (local / Math.abs(piece.rho));
    return {
      point: new THREE.Vector3(
        piece.cx + piece.rho * Math.sin(heading),
        0,
        piece.cz - piece.rho * Math.cos(heading)
      ),
      heading,
    };
  }

  /**
   * Indexed closed ribbon between two lateral offsets.
   *
   * Triangle winding depends on which way the offsets run: with the outer
   * offset greater than the inner one the natural order faces the normal
   * downward and back-face culling hides the whole ribbon, so flip it.
   */
  _ribbonGeometry(innerOffset, outerOffset, y) {
    const n = this.count;
    const flip = outerOffset > innerOffset;
    const positions = new Float32Array(n * 2 * 3);
    const normals = new Float32Array(n * 2 * 3);
    const uvs = new Float32Array(n * 2 * 2);
    const indices = new Uint32Array(n * 6);

    for (let i = 0; i < n; i++) {
      const p = this.points[i];
      const s = this.sides[i];
      const v = (i * this.segmentLength) / 8; // texture repeat along the track

      for (let k = 0; k < 2; k++) {
        const offset = k === 0 ? innerOffset : outerOffset;
        const idx = (i * 2 + k) * 3;
        positions[idx] = p.x + s.x * offset;
        positions[idx + 1] = y;
        positions[idx + 2] = p.z + s.z * offset;
        normals[idx] = 0;
        normals[idx + 1] = 1;
        normals[idx + 2] = 0;
        uvs[(i * 2 + k) * 2] = k;
        uvs[(i * 2 + k) * 2 + 1] = v;
      }

      const a = i * 2;
      const b = a + 1;
      const c = ((i + 1) % n) * 2;
      const d = c + 1;
      const o = i * 6;
      if (flip) {
        indices[o] = a;
        indices[o + 1] = b;
        indices[o + 2] = c;
        indices[o + 3] = b;
        indices[o + 4] = d;
        indices[o + 5] = c;
      } else {
        indices[o] = a;
        indices[o + 1] = c;
        indices[o + 2] = b;
        indices[o + 3] = b;
        indices[o + 4] = c;
        indices[o + 5] = d;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    geometry.computeBoundingSphere();
    return geometry;
  }

  _buildRoad() {
    const asphalt = createNoiseTexture(64, 0x33363f, 0.045, 1);
    asphalt.repeat.set(1, 1); // UVs already carry the along-track repeat
    asphalt.wrapS = asphalt.wrapT = THREE.RepeatWrapping;

    const geometry = this._ribbonGeometry(-this.halfWidth, this.halfWidth, 0);
    const material = new THREE.MeshStandardMaterial({
      map: asphalt,
      color: 0xffffff,
      roughness: 0.94,
      metalness: 0,
    });

    const road = new THREE.Mesh(geometry, material);
    road.receiveShadow = true;
    road.name = 'Road';
    road.renderOrder = 0;
    this.group.add(road);

    // Thin white edge lines just inside the kerbs.
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xdfe4ee });
    for (const sign of [-1, 1]) {
      const edge = new THREE.Mesh(
        this._ribbonGeometry(sign * (this.halfWidth - 0.28), sign * (this.halfWidth - 0.06), 0.012),
        lineMaterial
      );
      edge.name = 'EdgeLine';
      this.group.add(edge);
    }
  }

  /** Gravel run-off between the kerbs and the barriers. */
  _buildRunoff() {
    const gravel = createNoiseTexture(64, 0xa89272, 0.06, 1);
    const material = new THREE.MeshStandardMaterial({ map: gravel, roughness: 1, metalness: 0 });

    for (const sign of [-1, 1]) {
      const strip = new THREE.Mesh(
        this._ribbonGeometry(sign * this.gripLimit, sign * (this.wallLimit + 0.5), 0.005),
        material
      );
      strip.receiveShadow = true;
      strip.name = 'RunOffGravel';
      this.group.add(strip);
    }
  }

  /**
   * Kerbs are built as unindexed quads so each stripe can carry its own flat
   * vertex colour — sharing vertices would smear red into white.
   */
  _buildKerbs() {
    const n = this.count;
    const stripe = Math.max(3, Math.round(2.4 / this.segmentLength)); // ~2.4 m stripes
    const red = new THREE.Color(0xd7343a);
    const white = new THREE.Color(0xf0f0f0);

    for (const sign of [-1, 1]) {
      const positions = new Float32Array(n * 4 * 3);
      const colors = new Float32Array(n * 4 * 3);
      const normals = new Float32Array(n * 4 * 3);
      const indices = new Uint32Array(n * 6);

      const inner = sign * this.halfWidth;
      const outer = sign * (this.halfWidth + this.kerbWidth);

      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const colour = Math.floor(i / stripe) % 2 === 0 ? red : white;
        const corners = [
          [this.points[i], inner],
          [this.points[i], outer],
          [this.points[j], inner],
          [this.points[j], outer],
        ];

        for (let k = 0; k < 4; k++) {
          const [p, offset] = corners[k];
          const s = this.sides[k < 2 ? i : j];
          const idx = (i * 4 + k) * 3;
          positions[idx] = p.x + s.x * offset;
          positions[idx + 1] = 0.03;
          positions[idx + 2] = p.z + s.z * offset;
          normals[idx + 1] = 1;
          colors[idx] = colour.r;
          colors[idx + 1] = colour.g;
          colors[idx + 2] = colour.b;
        }

        const base = i * 4;
        const o = i * 6;
        // Wind both sides consistently so back-face culling keeps them visible.
        const [a, b, c, d] =
          sign > 0 ? [base, base + 2, base + 1, base + 3] : [base + 1, base + 3, base, base + 2];
        indices[o] = a;
        indices[o + 1] = b;
        indices[o + 2] = c;
        indices[o + 3] = c;
        indices[o + 4] = b;
        indices[o + 5] = d;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      geometry.computeBoundingSphere();

      const kerb = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, metalness: 0 })
      );
      kerb.receiveShadow = true;
      kerb.name = 'Kerb';
      this.group.add(kerb);
    }
  }

  /** Dashed centre line, one instanced quad per dash. */
  _buildCentreDashes() {
    const spacing = Math.max(1, Math.round(9 / this.segmentLength));
    const count = Math.floor(this.count / spacing);
    const geometry = new THREE.PlaneGeometry(0.22, 3.4);
    geometry.rotateX(-Math.PI / 2);

    const mesh = new THREE.InstancedMesh(
      geometry,
      new THREE.MeshBasicMaterial({ color: 0xc9d0de }),
      count
    );
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const index = i * spacing;
      const p = this.points[index];
      const t = this.tangents[index];
      dummy.position.set(p.x, 0.014, p.z);
      dummy.rotation.set(0, Math.atan2(t.x, t.z), 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    mesh.name = 'CentreDashes';
    this.group.add(mesh);
  }

  /** Armco-style barriers on both sides, one instanced box per panel. */
  _buildBarriers() {
    const step = Math.max(2, Math.round(6 / this.segmentLength));
    const panelLength = step * this.segmentLength * 1.02; // slight overlap on corners
    const perSide = Math.floor(this.count / step);
    const count = perSide * 2;

    const geometry = new THREE.BoxGeometry(0.4, 1.05, panelLength);
    const mesh = new THREE.InstancedMesh(
      geometry,
      new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.12 }),
      count
    );
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3);

    const dummy = new THREE.Object3D();
    const red = new THREE.Color(0xc9403f);
    const white = new THREE.Color(0xe9edf3);
    let n = 0;

    for (const sign of [-1, 1]) {
      for (let i = 0; i < perSide; i++) {
        const index = (i * step) % this.count;
        const p = this.points[index];
        const s = this.sides[index];
        const t = this.tangents[index];
        const offset = sign * this.barrierOffset;

        dummy.position.set(p.x + s.x * offset, 0.52, p.z + s.z * offset);
        dummy.rotation.set(0, Math.atan2(t.x, t.z), 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(n, dummy.matrix);

        const colour = i % 2 === 0 ? red : white;
        mesh.setColorAt(n, colour);
        n++;
      }
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = this.quality.propShadows;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.name = 'Barriers';
    this.group.add(mesh);
    this.barrierMesh = mesh;
  }

  /** Chequered start-finish line plus a simple gantry over the road. */
  _buildStartLine() {
    const p = this.startPosition;
    const yaw = this.startYaw;

    const texture = createCheckerTexture(10);
    texture.repeat.set(1, 1);
    const line = new THREE.Mesh(
      new THREE.PlaneGeometry(this.halfWidth * 2, 3),
      new THREE.MeshStandardMaterial({ map: texture, roughness: 0.8 })
    );
    line.rotation.set(-Math.PI / 2, 0, 0);
    line.position.set(p.x, 0.02, p.z);
    line.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), yaw);
    line.receiveShadow = true;
    line.name = 'StartLine';
    this.group.add(line);

    const gantry = new THREE.Group();
    const postGeometry = new THREE.BoxGeometry(0.5, 6, 0.5);
    const postMaterial = new THREE.MeshStandardMaterial({ color: 0x2c3242, roughness: 0.6 });
    const beam = new THREE.Mesh(
      new THREE.BoxGeometry(this.halfWidth * 2 + 3.4, 1.1, 0.7),
      new THREE.MeshStandardMaterial({ color: 0xffd23f, roughness: 0.5 })
    );
    beam.position.y = 6.2;
    beam.castShadow = this.quality.propShadows;
    gantry.add(beam);

    for (const sign of [-1, 1]) {
      const post = new THREE.Mesh(postGeometry, postMaterial);
      post.position.set(sign * (this.halfWidth + 1.5), 3, 0);
      post.castShadow = this.quality.propShadows;
      gantry.add(post);
    }

    gantry.position.set(p.x, 0, p.z);
    gantry.rotation.y = yaw;
    gantry.name = 'StartGantry';
    this.group.add(gantry);
  }

  // ----------------------------------------------------------------- queries

  /**
   * Nearest point on the centreline.
   *
   * `hint` is the previous frame's index: the search only scans a window around
   * it, which is O(80) per frame instead of O(segments). Pass -1 (or omit) for
   * a full scan when the car is placed or respawned.
   */
  query(position, hint = -1, window = 40) {
    const n = this.count;
    const full = hint < 0;
    const from = full ? 0 : hint - window;
    const to = full ? n : hint + window;

    let bestDist = Infinity;
    let bestIndex = 0;
    let bestT = 0;

    for (let k = from; k < to; k++) {
      const i = ((k % n) + n) % n;
      const a = this.points[i];
      const b = this.points[(i + 1) % n];
      const abx = b.x - a.x;
      const abz = b.z - a.z;
      const apx = position.x - a.x;
      const apz = position.z - a.z;
      const len2 = abx * abx + abz * abz;
      let t = len2 > 1e-8 ? (apx * abx + apz * abz) / len2 : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const dx = apx - abx * t;
      const dz = apz - abz * t;
      const dist = dx * dx + dz * dz;
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
        bestT = t;
      }
    }

    const a = this.points[bestIndex];
    const b = this.points[(bestIndex + 1) % n];
    const r = this._result;
    r.index = bestIndex;
    r.t = bestT;
    r.progress = (bestIndex + bestT) / n;
    r.distance = r.progress * this.totalLength;
    r.point.set(a.x + (b.x - a.x) * bestT, 0, a.z + (b.z - a.z) * bestT);
    r.tangent.copy(this.tangents[bestIndex]);
    r.side.copy(this.sides[bestIndex]);
    r.lateral = (position.x - r.point.x) * r.side.x + (position.z - r.point.z) * r.side.z;
    return r;
  }

  /** World position/heading on the grid, offset laterally for a staggered start. */
  gridTransform(lateralOffset = 0, backOffset = 0) {
    const index = (this.count - Math.round(backOffset / this.segmentLength)) % this.count;
    const p = this.points[index];
    const s = this.sides[index];
    const t = this.tangents[index];
    return {
      position: new THREE.Vector3(p.x + s.x * lateralOffset, 0, p.z + s.z * lateralOffset),
      yaw: Math.atan2(t.x, t.z),
    };
  }

  dispose() {
    this.group.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of materials) {
          if (material.map) material.map.dispose();
          material.dispose();
        }
      }
    });
  }
}
