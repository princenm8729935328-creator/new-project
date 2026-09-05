import * as THREE from 'three';
import { createNoiseTexture } from '../utils/textures.js';
import { createRandom } from '../utils/math.js';

/**
 * Everything that isn't the track: ground, distant hills and scenery props.
 *
 * All props are InstancedMeshes (one draw call per prop type) and placed with a
 * seeded PRNG so the layout is identical on every device and every reload.
 */
export class Environment {
  constructor(track, quality) {
    this.group = new THREE.Group();
    this.group.name = 'Environment';
    this.track = track;
    this.quality = quality;
    this.random = createRandom(20260905);

    this._buildGround();
    this._buildHills();
    this._buildTrees(quality.trees);
    this._buildRocks(quality.rocks);
    this._buildGrandstands();
  }

  _buildGround() {
    const grass = createNoiseTexture(64, 0x5c8a45, 0.05, 220);
    grass.anisotropy = 4;

    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(1400, 48),
      new THREE.MeshStandardMaterial({ map: grass, roughness: 1, metalness: 0 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    ground.name = 'Ground';
    this.group.add(ground);

    // A slightly darker apron hugging the circuit reads as worn run-off.
    const apron = new THREE.Mesh(
      this.track._ribbonGeometry(
        -(this.track.barrierOffset + 7),
        this.track.barrierOffset + 7,
        -0.01
      ),
      new THREE.MeshStandardMaterial({ color: 0x6f8f52, roughness: 1 })
    );
    apron.receiveShadow = true;
    apron.name = 'RunOff';
    this.group.add(apron);
  }

  /** Low-poly hills on the horizon — silhouette only, never driven on. */
  _buildHills() {
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x4d7a46,
      roughness: 1,
      flatShading: true,
    });
    const count = 14;
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + this.random() * 0.4;
      const radius = 460 + this.random() * 320;
      const scale = 60 + this.random() * 90;
      dummy.position.set(Math.cos(angle) * radius, -scale * 0.45, Math.sin(angle) * radius);
      dummy.scale.set(scale * (1.2 + this.random() * 0.8), scale * 0.6, scale * (1.2 + this.random()));
      dummy.rotation.y = this.random() * Math.PI;
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.name = 'Hills';
    this.group.add(mesh);
  }

  /**
   * Rejection-sample a point that is clear of the circuit.
   * Returns null if no clear spot was found within the attempt budget.
   */
  _scatterPoint(minClearance, maxRadius) {
    for (let attempt = 0; attempt < 24; attempt++) {
      const angle = this.random() * Math.PI * 2;
      const radius = 60 + Math.sqrt(this.random()) * maxRadius;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Coarse distance test against a subsampled centreline.
      let nearest = Infinity;
      for (let i = 0; i < this.track.count; i += 6) {
        const p = this.track.points[i];
        const dx = x - p.x;
        const dz = z - p.z;
        const d = dx * dx + dz * dz;
        if (d < nearest) nearest = d;
      }
      if (Math.sqrt(nearest) > minClearance) return { x, z };
    }
    return null;
  }

  _buildTrees(count) {
    const clearance = this.track.barrierOffset + 8;

    const trunkGeometry = new THREE.CylinderGeometry(0.32, 0.46, 3.4, 6);
    trunkGeometry.translate(0, 1.7, 0);
    const foliageGeometry = new THREE.ConeGeometry(2.5, 7, 7);
    foliageGeometry.translate(0, 6.4, 0);

    const trunks = new THREE.InstancedMesh(
      trunkGeometry,
      new THREE.MeshStandardMaterial({ color: 0x5b4331, roughness: 0.95, flatShading: true }),
      count
    );
    const foliage = new THREE.InstancedMesh(
      foliageGeometry,
      new THREE.MeshStandardMaterial({ roughness: 0.9, flatShading: true }),
      count
    );
    foliage.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3);

    const dummy = new THREE.Object3D();
    const colour = new THREE.Color();
    let placed = 0;

    for (let i = 0; i < count; i++) {
      const point = this._scatterPoint(clearance, 420);
      if (!point) continue;

      const scale = 0.75 + this.random() * 0.85;
      dummy.position.set(point.x, 0, point.z);
      dummy.rotation.set(0, this.random() * Math.PI * 2, 0);
      dummy.scale.set(scale, scale * (0.85 + this.random() * 0.5), scale);
      dummy.updateMatrix();

      trunks.setMatrixAt(placed, dummy.matrix);
      foliage.setMatrixAt(placed, dummy.matrix);
      colour.setHSL(0.28 + this.random() * 0.07, 0.42 + this.random() * 0.2, 0.26 + this.random() * 0.12);
      foliage.setColorAt(placed, colour);
      placed++;
    }

    for (const mesh of [trunks, foliage]) {
      mesh.count = placed;
      mesh.instanceMatrix.needsUpdate = true;
      mesh.castShadow = this.quality.propShadows;
      mesh.receiveShadow = false;
    }
    if (foliage.instanceColor) foliage.instanceColor.needsUpdate = true;

    trunks.name = 'TreeTrunks';
    foliage.name = 'TreeFoliage';
    this.group.add(trunks, foliage);
  }

  _buildRocks(count) {
    const clearance = this.track.barrierOffset + 5;
    const geometry = new THREE.DodecahedronGeometry(1, 0);
    const mesh = new THREE.InstancedMesh(
      geometry,
      new THREE.MeshStandardMaterial({ color: 0x8b8d92, roughness: 0.95, flatShading: true }),
      count
    );

    const dummy = new THREE.Object3D();
    let placed = 0;

    for (let i = 0; i < count; i++) {
      const point = this._scatterPoint(clearance, 320);
      if (!point) continue;
      const scale = 0.6 + this.random() * 1.6;
      dummy.position.set(point.x, scale * 0.35, point.z);
      dummy.rotation.set(this.random(), this.random() * Math.PI * 2, this.random());
      dummy.scale.set(scale, scale * 0.7, scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(placed, dummy.matrix);
      placed++;
    }

    mesh.count = placed;
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = this.quality.propShadows;
    mesh.name = 'Rocks';
    this.group.add(mesh);
  }

  /** Grandstands along the pit straight, built from a handful of boxes. */
  _buildGrandstands() {
    const structure = new THREE.MeshStandardMaterial({ color: 0xdfe3ea, roughness: 0.8 });
    const seating = new THREE.MeshStandardMaterial({ color: 0x2f5fa8, roughness: 0.85 });
    const stands = new THREE.Group();

    for (let i = 0; i < 3; i++) {
      const index = (Math.round(26 / this.track.segmentLength) * i + 8) % this.track.count;
      const p = this.track.points[index];
      const s = this.track.sides[index];
      const t = this.track.tangents[index];
      const offset = this.track.barrierOffset + 17;

      const stand = new THREE.Group();

      const base = new THREE.Mesh(new THREE.BoxGeometry(16, 3.2, 8), structure);
      base.position.y = 1.6;
      base.castShadow = this.quality.propShadows;
      base.receiveShadow = true;
      stand.add(base);

      // Stepped seating rows facing the track.
      for (let row = 0; row < 4; row++) {
        const tier = new THREE.Mesh(new THREE.BoxGeometry(15.4, 0.9, 1.5), seating);
        tier.position.set(0, 3.6 + row * 0.9, 2.6 - row * 1.5);
        stand.add(tier);
      }

      const roof = new THREE.Mesh(new THREE.BoxGeometry(17, 0.5, 9.5), structure);
      roof.position.set(0, 8.3, -0.6);
      roof.castShadow = this.quality.propShadows;
      stand.add(roof);

      for (const sign of [-1, 1]) {
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.5, 5, 0.5), structure);
        pillar.position.set(sign * 7.8, 5.8, -4);
        stand.add(pillar);
      }

      stand.position.set(p.x + s.x * offset, 0, p.z + s.z * offset);
      // Rotate so the seating looks back across the circuit.
      stand.rotation.y = Math.atan2(t.x, t.z) + Math.PI / 2;
      stands.add(stand);
    }

    stands.name = 'Grandstands';
    this.group.add(stands);
  }

  dispose() {
    this.group.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (object.material.map) object.material.map.dispose();
        object.material.dispose();
      }
    });
  }
}
