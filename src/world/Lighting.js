import * as THREE from 'three';

/**
 * Scene lighting: one shadow-casting sun plus hemisphere fill.
 *
 * The sun's shadow camera is small and follows the car. A tight frustum means
 * a 1024–2048px map still resolves crisp contact shadows, which is what keeps
 * shadows affordable on phones.
 */
export class Lighting {
  constructor(scene, quality) {
    this.quality = quality;
    this.sunDirection = new THREE.Vector3(0.55, 0.72, 0.42).normalize();

    const hemisphere = new THREE.HemisphereLight(0xbcd8ef, 0x4b6b3a, 1.35);
    scene.add(hemisphere);

    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff2da, 2.5);
    sun.position.copy(this.sunDirection).multiplyScalar(100);
    sun.castShadow = quality.shadows;

    if (quality.shadows) {
      const d = quality.shadowDistance;
      sun.shadow.mapSize.set(quality.shadowMapSize, quality.shadowMapSize);
      sun.shadow.camera.left = -d;
      sun.shadow.camera.right = d;
      sun.shadow.camera.top = d;
      sun.shadow.camera.bottom = -d;
      sun.shadow.camera.near = 1;
      sun.shadow.camera.far = 320;
      sun.shadow.bias = -0.0006;
      sun.shadow.normalBias = 0.03;
    }

    scene.add(sun);
    scene.add(sun.target);

    this.hemisphere = hemisphere;
    this.ambient = ambient;
    this.sun = sun;
    this._offset = this.sunDirection.clone().multiplyScalar(110);
  }

  /** Anchor the shadow frustum on the car so it always covers the action. */
  update(focusPosition) {
    if (!this.quality.shadows) return;
    this.sun.target.position.copy(focusPosition);
    this.sun.position.copy(focusPosition).add(this._offset);
    this.sun.target.updateMatrixWorld();
  }
}
