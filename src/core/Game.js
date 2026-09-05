import * as THREE from 'three';

import { detectQuality } from './quality.js';
import { Track } from '../world/Track.js';
import { Environment } from '../world/Environment.js';
import { Sky } from '../world/Sky.js';
import { Lighting } from '../world/Lighting.js';
import { Car } from '../entities/Car.js';
import { FollowCamera } from '../systems/FollowCamera.js';
import { Input } from '../systems/Input.js';
import { RaceManager, RaceState } from '../systems/RaceManager.js';
import { HUD } from '../ui/HUD.js';
import { formatTime } from '../utils/math.js';

const MAX_DELTA = 1 / 20; // clamp so a stalled tab can't teleport the car

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.quality = detectQuality();
    this.clock = new THREE.Clock();
    this._running = false;
    this._frame = null;

    this._initRenderer();
    this._initScene();
    this._initUI();

    this.resize();
    this._bindWindowEvents();
  }

  // ------------------------------------------------------------------ setup

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: this.quality.antialias,
      powerPreference: 'high-performance',
      stencil: false,
      // The canvas is opaque and always fully covered, so skip alpha and depth
      // readback costs the game never uses.
      alpha: false,
    });

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.quality.pixelRatioCap));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = this.quality.shadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = true;

    // A lost context (backgrounded tab on mobile) should recover, not crash.
    this.canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      this.stop();
    });
    this.canvas.addEventListener('webglcontextrestored', () => this.start());
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.5, 3000);

    this.lighting = new Lighting(this.scene, this.quality);

    this.sky = new Sky(this.quality, this.lighting.sunDirection);
    this.scene.add(this.sky.mesh);
    this.scene.fog = new THREE.Fog(
      this.sky.horizonColor.getHex(),
      this.quality.fogFar * 0.28,
      this.quality.fogFar
    );

    this.track = new Track(this.quality);
    this.scene.add(this.track.group);

    this.environment = new Environment(this.track, this.quality);
    this.scene.add(this.environment.group);

    this.car = new Car(this.quality);
    this.scene.add(this.car.object3D);

    this.followCamera = new FollowCamera(this.camera);
    this.followCamera.setViewport(this.camera.aspect);
  }

  _initUI() {
    this.hud = new HUD({
      onStart: () => this.startRace(),
      onTogglePause: () => this.togglePause(),
      onResume: () => this.resume(),
      onRestart: () => this.restart(),
    });

    this.race = new RaceManager({
      totalLaps: 3,
      callbacks: {
        onCountdown: (value) => this.hud.showCountdown(value),
        onStart: () => this.hud.clearFlash(),
        onLapComplete: ({ lap, lapTime, isBest }) => {
          if (lap >= this.race.totalLaps) return; // the finish screen says it instead
          this.hud.flash(
            isBest ? `Lap ${lap} · ${formatTime(lapTime)} · best!` : `Lap ${lap} · ${formatTime(lapTime)}`
          );
        },
        onFinish: (result) => {
          this.input.releaseAll();
          this.hud.clearFlash();
          this.hud.showResults(result);
        },
        onWrongWay: (active) => {
          if (active) this.hud.flash('Wrong way', { warn: true, duration: 0 });
          else this.hud.clearFlash();
        },
      },
    });

    this.input = new Input(this.hud.buttons, {
      onTogglePause: () => this.togglePause(),
      onRestart: () => this.restart(),
      onResetCamera: () => this.followCamera.reset(this.car),
    });

    this._placeCar();
    this.hud.setOverlay('start');
    this.hud.update(this.race, this.car);
  }

  _bindWindowEvents() {
    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);
    window.addEventListener('orientationchange', this._onResize);

    // Auto-pause when the tab is hidden — nobody wants to come back to a
    // ruined lap time.
    this._onVisibility = () => {
      if (document.hidden && this.race.state === RaceState.RACING) this.pause();
    };
    document.addEventListener('visibilitychange', this._onVisibility);
  }

  // ---------------------------------------------------------------- race flow

  _placeCar() {
    this.car.reset(this.track);
    const hit = this.track.query(this.car.position, -1);
    this.race.reset(hit.progress);
    this.followCamera.reset(this.car);
  }

  startRace() {
    this.hud.setOverlay(null);
    this.race.startCountdown();
  }

  restart() {
    this.input.releaseAll();
    this.hud.clearFlash();
    this._placeCar();
    this.hud.update(this.race, this.car);
    this.hud.setOverlay(null);
    this.race.startCountdown();
  }

  pause() {
    if (!this.race.pause()) return;
    this.input.releaseAll();
    this.hud.setOverlay('pause');
  }

  resume() {
    if (!this.race.resume()) return;
    this.hud.setOverlay(null);
  }

  togglePause() {
    if (this.race.state === RaceState.PAUSED) this.resume();
    else if (this.race.isRunning) this.pause();
  }

  // --------------------------------------------------------------- main loop

  start() {
    if (this._running) return;
    this._running = true;
    this.clock.getDelta(); // drop the time spent loading
    this._tick();
  }

  stop() {
    this._running = false;
    if (this._frame !== null) cancelAnimationFrame(this._frame);
    this._frame = null;
  }

  _tick = () => {
    if (!this._running) return;
    this._frame = requestAnimationFrame(this._tick);

    const dt = Math.min(this.clock.getDelta(), MAX_DELTA);
    this.update(dt);
    this.renderer.render(this.scene, this.camera);
  };

  update(dt) {
    const paused = this.race.state === RaceState.PAUSED;

    if (!paused) {
      const controls = this.input.sample();
      // After the flag the car coasts to a stop instead of freezing mid-corner.
      const postRace = this.race.state === RaceState.FINISHED;
      const effective = postRace
        ? { throttle: 0, brake: 0.6, steer: controls.steer }
        : controls;

      const hit = this.car.update(dt, effective, this.track, this.race.controlsLocked);
      this.race.update(dt, hit.progress, this.car.speed);

      this.followCamera.update(dt, this.car);
      this.lighting.update(this.car.position);
      this.hud.update(this.race, this.car);
    }

    this.sky.update(this.camera.position);
  }

  // ----------------------------------------------------------------- plumbing

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.quality.pixelRatioCap));
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.followCamera?.setViewport(this.camera.aspect);
  }

  dispose() {
    this.stop();
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('orientationchange', this._onResize);
    document.removeEventListener('visibilitychange', this._onVisibility);
    this.input.dispose();
    this.track.dispose();
    this.environment.dispose();
    this.sky.dispose();
    this.renderer.dispose();
  }
}
