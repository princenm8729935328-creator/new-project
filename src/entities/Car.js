import * as THREE from 'three';
import { angleDelta, clamp, damp, moveToward } from '../utils/math.js';

/**
 * Player car: low-poly model plus an arcade driving model.
 *
 * The physics is kinematic — the car owns a heading and a scalar speed rather
 * than a full rigid body. That is deliberate: it cannot tunnel through walls,
 * behaves identically at any frame rate, and costs almost nothing on a phone,
 * while a grip-limited yaw rate still gives corners a believable radius.
 */

// --- tuning -----------------------------------------------------------------
const TOP_SPEED = 58; // m/s ceiling used by the engine taper
const ENGINE_ACCEL = 20; // m/s^2 at a standstill
const BRAKE_ACCEL = 34;
const REVERSE_ACCEL = 8;
const REVERSE_MAX = 9;
const ROLL_DRAG = 0.05; // linear coasting resistance
const AIR_DRAG = 0.0008; // quadratic resistance
const OFFTRACK_DRAG = 0.55; // extra linear drag in the gravel
const OFFTRACK_POWER = 0.45; // engine multiplier in the gravel
const MAX_STEER = 0.55; // rad at the front wheels
const STEER_RATE = 3.4; // how fast the wheels reach full lock
const WHEELBASE = 2.7;
const MAX_LATERAL_G = 17; // grip ceiling, m/s^2 — caps the turn rate with speed
const WHEEL_RADIUS = 0.42;

const BODY_COLOR = 0xe2413f;

export class Car {
  constructor(quality) {
    this.quality = quality;

    this.object3D = new THREE.Group();
    this.object3D.name = 'Car';

    this.position = new THREE.Vector3();
    this.yaw = 0;
    this.speed = 0;
    this.steer = 0;
    this.yawRate = 0;

    /** Last known centreline index, used as the search hint for track queries. */
    this.trackIndex = -1;
    this.offTrack = false;
    this.impact = 0;

    this._forward = new THREE.Vector3();
    this._wheelSpin = 0;

    this._build();
  }

  // ------------------------------------------------------------------- model

  _build() {
    const body = new THREE.Group();
    body.name = 'CarBody';
    this.body = body;
    this.object3D.add(body);

    const paint = new THREE.MeshStandardMaterial({
      color: BODY_COLOR,
      roughness: 0.32,
      metalness: 0.25,
    });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1b1e26, roughness: 0.6 });
    const glass = new THREE.MeshStandardMaterial({
      color: 0x2b3d55,
      roughness: 0.12,
      metalness: 0.5,
    });

    const add = (geometry, material, x, y, z, castShadow = true) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.castShadow = castShadow;
      body.add(mesh);
      return mesh;
    };

    // Chassis: a wide lower shell with a narrower upper deck.
    add(new THREE.BoxGeometry(1.94, 0.34, 4.1), dark, 0, 0.36, 0);
    add(new THREE.BoxGeometry(1.82, 0.42, 3.7), paint, 0, 0.68, 0.05);
    // Nose wedge and tail.
    add(new THREE.BoxGeometry(1.62, 0.26, 0.9), paint, 0, 0.86, 1.62);
    add(new THREE.BoxGeometry(1.7, 0.3, 0.5), paint, 0, 0.84, -1.85);

    // Cabin + glass.
    add(new THREE.BoxGeometry(1.44, 0.46, 1.85), paint, 0, 1.12, -0.28);
    add(new THREE.BoxGeometry(1.3, 0.3, 0.12), glass, 0, 1.16, 0.62);
    add(new THREE.BoxGeometry(1.24, 0.28, 0.1), glass, 0, 1.16, -1.18);
    for (const sign of [-1, 1]) {
      add(new THREE.BoxGeometry(0.08, 0.26, 1.5), glass, sign * 0.72, 1.14, -0.3);
    }

    // Rear wing.
    add(new THREE.BoxGeometry(1.76, 0.09, 0.52), dark, 0, 1.22, -2.02);
    for (const sign of [-1, 1]) {
      add(new THREE.BoxGeometry(0.1, 0.34, 0.3), dark, sign * 0.66, 1.04, -2.02);
    }

    // Lights.
    const headlight = new THREE.MeshStandardMaterial({
      color: 0xfff6d8,
      emissive: 0xffe9a8,
      emissiveIntensity: 1.1,
      roughness: 0.3,
    });
    const taillight = new THREE.MeshStandardMaterial({
      color: 0x5a1214,
      emissive: 0xff2b2b,
      emissiveIntensity: 1.4,
      roughness: 0.4,
    });
    for (const sign of [-1, 1]) {
      add(new THREE.BoxGeometry(0.42, 0.16, 0.08), headlight, sign * 0.55, 0.86, 2.06, false);
      add(new THREE.BoxGeometry(0.44, 0.16, 0.08), taillight, sign * 0.56, 0.9, -2.09, false);
    }

    // Wheels: one shared geometry, axle already aligned to X.
    const wheelGeometry = new THREE.CylinderGeometry(WHEEL_RADIUS, WHEEL_RADIUS, 0.34, 14);
    wheelGeometry.rotateZ(Math.PI / 2);
    const rubber = new THREE.MeshStandardMaterial({ color: 0x14161b, roughness: 0.85 });
    const hubGeometry = new THREE.CylinderGeometry(0.19, 0.19, 0.36, 8);
    hubGeometry.rotateZ(Math.PI / 2);
    const hubMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9ced8,
      roughness: 0.35,
      metalness: 0.7,
    });

    this.wheels = [];
    this.steeredWheels = [];
    const layout = [
      [-0.92, 1.35, true],
      [0.92, 1.35, true],
      [-0.94, -1.4, false],
      [0.94, -1.4, false],
    ];

    for (const [x, z, steered] of layout) {
      // Pivot handles steering; the inner mesh handles roll.
      const pivot = new THREE.Group();
      pivot.position.set(x, WHEEL_RADIUS, z);

      const wheel = new THREE.Mesh(wheelGeometry, rubber);
      wheel.castShadow = true;
      const hub = new THREE.Mesh(hubGeometry, hubMaterial);
      hub.position.x = x > 0 ? 0.02 : -0.02;
      wheel.add(hub);

      pivot.add(wheel);
      this.object3D.add(pivot);
      this.wheels.push(wheel);
      if (steered) this.steeredWheels.push(pivot);
    }
  }

  // ------------------------------------------------------------------- state

  /** Place the car on the grid and clear all motion. */
  reset(track) {
    const grid = track.gridTransform(0, 12);
    this.position.copy(grid.position);
    this.yaw = grid.yaw;
    this.speed = 0;
    this.steer = 0;
    this.yawRate = 0;
    this.offTrack = false;
    this.impact = 0;
    this._wheelSpin = 0;
    this.trackIndex = -1; // force a full centreline scan on the next query
    this._syncTransform();
    this.body.rotation.set(0, 0, 0);
  }

  get speedKmh() {
    return Math.abs(this.speed) * 3.6;
  }

  /** Unit heading vector on the XZ plane. */
  get forward() {
    return this._forward.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
  }

  // ------------------------------------------------------------------ update

  /**
   * @param {number} dt      seconds, already clamped by the caller
   * @param {object} controls { throttle, brake, steer } each in [0,1] / [-1,1]
   * @param {Track}  track
   * @param {boolean} locked  true during the countdown — steering only, no drive
   */
  update(dt, controls, track, locked = false) {
    const throttle = locked ? 0 : controls.throttle;
    const brake = locked ? 0 : controls.brake;

    // --- steering input smoothing ------------------------------------------
    this.steer = moveToward(this.steer, controls.steer, STEER_RATE * dt);

    // --- longitudinal ------------------------------------------------------
    const speed = this.speed;
    const absSpeed = Math.abs(speed);
    const powerScale = this.offTrack ? OFFTRACK_POWER : 1;
    let accel = 0;

    if (throttle > 0) {
      const taper = Math.max(0, 1 - (speed / TOP_SPEED) ** 2);
      accel += ENGINE_ACCEL * taper * throttle * powerScale;
    }

    if (brake > 0) {
      if (speed > 0.4) {
        accel -= BRAKE_ACCEL * brake;
      } else {
        // At rest the brake pedal doubles as reverse.
        accel -= speed > -REVERSE_MAX ? REVERSE_ACCEL * brake : 0;
      }
    }

    // Resistance always opposes motion.
    const drag = ROLL_DRAG + (this.offTrack ? OFFTRACK_DRAG : 0);
    accel -= Math.sign(speed) * (drag * absSpeed + AIR_DRAG * absSpeed * absSpeed);

    this.speed += accel * dt;

    // Kill the jitter of drag flipping sign around zero.
    if (throttle === 0 && brake === 0 && Math.abs(this.speed) < 0.25) this.speed = 0;
    this.speed = clamp(this.speed, -REVERSE_MAX, TOP_SPEED);

    // --- lateral -----------------------------------------------------------
    // Bicycle-model turn rate, then clipped by available grip so high-speed
    // corners open out instead of pivoting on the spot.
    const speedFactor = 1 / (1 + Math.abs(this.speed) * 0.035);
    const steerAngle = MAX_STEER * this.steer * speedFactor;
    const kinematicYaw = (this.speed * Math.tan(steerAngle)) / WHEELBASE;
    const gripCeiling = Math.abs(this.speed) > 0.5 ? MAX_LATERAL_G / Math.abs(this.speed) : Infinity;
    this.yawRate = clamp(kinematicYaw, -gripCeiling, gripCeiling);
    this.yaw += this.yawRate * dt;

    // --- integrate ---------------------------------------------------------
    const forward = this.forward;
    this.position.x += forward.x * this.speed * dt;
    this.position.z += forward.z * this.speed * dt;

    // --- track sampling, surface and barriers ------------------------------
    const hit = track.query(this.position, this.trackIndex);
    this.trackIndex = hit.index;
    this.offTrack = Math.abs(hit.lateral) > track.gripLimit;
    this.impact = 0;

    if (Math.abs(hit.lateral) > track.wallLimit) {
      this._resolveBarrier(hit, track);
    }

    // --- visuals -----------------------------------------------------------
    this._wheelSpin += (this.speed / WHEEL_RADIUS) * dt;
    for (const wheel of this.wheels) wheel.rotation.x = this._wheelSpin;
    for (const pivot of this.steeredWheels) pivot.rotation.y = steerAngle;

    // Weight transfer: lean out of corners, dip under braking, squat on power.
    // Car local +x faces screen-left from the chase camera, so a positive
    // roll angle leans the body outward through the corner.
    const targetRoll = clamp(this.yawRate * this.speed * 0.0055, -0.13, 0.13);
    const targetPitch = clamp((accel * -0.0032), -0.05, 0.05);
    const k = damp(9, dt);
    this.body.rotation.z += (targetRoll - this.body.rotation.z) * k;
    this.body.rotation.x += (targetPitch - this.body.rotation.x) * k;

    this._syncTransform();
    return hit;
  }

  /**
   * Push the car back inside the barrier line and scrub speed in proportion to
   * how squarely it hit — a graze costs little, a head-on stops the car.
   */
  _resolveBarrier(hit, track) {
    const sign = Math.sign(hit.lateral);
    const limit = track.wallLimit;

    this.position.x = hit.point.x + hit.side.x * limit * sign;
    this.position.z = hit.point.z + hit.side.z * limit * sign;

    const forward = this.forward;
    const intoWall = (forward.x * hit.side.x + forward.z * hit.side.z) * sign;

    if (intoWall > 0) {
      this.impact = intoWall * Math.min(1, Math.abs(this.speed) / 25);
      this.speed *= 1 - 0.75 * intoWall;
      // Deflect along the wall so the car slides rather than sticking to it.
      const wallYaw = Math.atan2(hit.tangent.x, hit.tangent.z);
      const towardWall = this.speed >= 0 ? wallYaw : wallYaw + Math.PI;
      this.yaw += angleDelta(this.yaw, towardWall) * Math.min(0.35, intoWall * 0.5);
    }
  }

  _syncTransform() {
    this.object3D.position.copy(this.position);
    this.object3D.rotation.y = this.yaw;
  }
}
