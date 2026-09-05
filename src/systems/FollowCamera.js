import * as THREE from 'three';
import { clamp, damp, lerp } from '../utils/math.js';

/**
 * Third-person chase camera.
 *
 * Position and aim point are damped separately: the position lags to sell
 * acceleration, while the aim point leads the car so you can see into corners.
 * Both use exponential damping, so behaviour is identical at 30 or 120 fps.
 */

const BASE_DISTANCE = 7.8;
const BASE_HEIGHT = 3.4;
const POSITION_DAMPING = 5.5;
const LOOK_DAMPING = 8;
const BASE_FOV = 62;
const MAX_FOV = 74;
const MIN_HEIGHT = 1.1; // never dip below the barriers

export class FollowCamera {
  constructor(camera) {
    this.camera = camera;
    this.camera.fov = BASE_FOV;

    this._position = new THREE.Vector3();
    this._look = new THREE.Vector3();
    this._desired = new THREE.Vector3();
    this._desiredLook = new THREE.Vector3();
    this._shake = new THREE.Vector3();
    this._shakeAmount = 0;
    this._fov = BASE_FOV;

    // Adjusted by setViewport(); a tall viewport needs a pulled-back camera.
    this._distanceScale = 1;
    this._fovOffset = 0;
  }

  /**
   * The perspective FOV is vertical, so a portrait viewport shows far less of
   * the track ahead. Compensate by easing the camera back and widening a
   * little — widening alone would need an unusable ~120 degree FOV.
   */
  setViewport(aspect) {
    this._distanceScale = clamp(1.35 / aspect, 1, 1.45);
    this._fovOffset = clamp((1.35 - aspect) * 9, 0, 9);
  }

  /** Snap straight to the ideal pose — used on race start and on manual reset. */
  reset(car) {
    this._computeDesired(car, 0);
    this._position.copy(this._desired);
    this._look.copy(this._desiredLook);
    this._shakeAmount = 0;
    this._fov = BASE_FOV + this._fovOffset;
    this.camera.fov = this._fov;
    this.camera.updateProjectionMatrix();
    this._apply();
  }

  _computeDesired(car, speedT) {
    const forward = car.forward;
    const distance = (BASE_DISTANCE + speedT * 2.4) * this._distanceScale;
    const height = (BASE_HEIGHT + speedT * 0.45) * (1 + (this._distanceScale - 1) * 0.7);

    this._desired.set(
      car.position.x - forward.x * distance,
      car.position.y + height,
      car.position.z - forward.z * distance
    );

    const lead = 7 + speedT * 7;
    this._desiredLook.set(
      car.position.x + forward.x * lead,
      car.position.y + 1.15,
      car.position.z + forward.z * lead
    );
  }

  update(dt, car) {
    const speedT = clamp(Math.abs(car.speed) / 58, 0, 1);
    this._computeDesired(car, speedT);

    this._position.lerp(this._desired, damp(POSITION_DAMPING, dt));
    this._look.lerp(this._desiredLook, damp(LOOK_DAMPING, dt));
    if (this._position.y < MIN_HEIGHT) this._position.y = MIN_HEIGHT;

    // Speed pulls the FOV wider; impacts add a brief shake.
    const targetFov = lerp(BASE_FOV, MAX_FOV, speedT * speedT) + this._fovOffset;
    this._fov = lerp(this._fov, targetFov, damp(3, dt));
    if (Math.abs(this.camera.fov - this._fov) > 0.05) {
      this.camera.fov = this._fov;
      this.camera.updateProjectionMatrix();
    }

    if (car.impact > 0) this._shakeAmount = Math.min(1, this._shakeAmount + car.impact);
    this._shakeAmount *= 1 - damp(6, dt);
    if (this._shakeAmount > 0.001) {
      const s = this._shakeAmount * 0.55;
      this._shake.set(
        (Math.random() - 0.5) * s,
        (Math.random() - 0.5) * s,
        (Math.random() - 0.5) * s
      );
    } else {
      this._shake.set(0, 0, 0);
    }

    this._apply();
  }

  _apply() {
    this.camera.position.copy(this._position).add(this._shake);
    this.camera.lookAt(this._look);
  }
}
