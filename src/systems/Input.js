import { clamp } from '../utils/math.js';

/**
 * Unified input: on-screen pedals for touch, keyboard for desktop.
 *
 * Touch buttons use Pointer Events with pointer capture, so a finger that
 * slides off the button keeps the pedal held — sliding off mid-corner and
 * silently losing throttle is the most common failure of on-screen controls.
 */
export class Input {
  constructor(elements, callbacks = {}) {
    this.state = { throttle: 0, brake: 0, steer: 0 };
    this.callbacks = callbacks;

    this._keys = new Set();
    this._touch = { gas: false, brake: false, left: false, right: false };
    this._listeners = [];

    this._bindButton(elements.gas, 'gas');
    this._bindButton(elements.brake, 'brake');
    this._bindButton(elements.left, 'left');
    this._bindButton(elements.right, 'right');
    this._bindKeyboard();
  }

  _on(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    this._listeners.push([target, type, handler, options]);
  }

  _bindButton(element, key) {
    if (!element) return;

    const press = (event) => {
      event.preventDefault();
      this._touch[key] = true;
      element.classList.add('active');
      if (event.pointerId !== undefined && element.setPointerCapture) {
        try {
          element.setPointerCapture(event.pointerId);
        } catch {
          /* capture is best-effort; the pointerup fallback still releases it */
        }
      }
    };

    const release = (event) => {
      event.preventDefault();
      this._touch[key] = false;
      element.classList.remove('active');
    };

    this._on(element, 'pointerdown', press);
    this._on(element, 'pointerup', release);
    this._on(element, 'pointercancel', release);
    this._on(element, 'lostpointercapture', release);
    // Belt and braces: some browsers fire contextmenu on a long press.
    this._on(element, 'contextmenu', (event) => event.preventDefault());
  }

  _bindKeyboard() {
    const isControlKey = (code) =>
      [
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'KeyW',
        'KeyA',
        'KeyS',
        'KeyD',
        'Space',
      ].includes(code);

    this._on(window, 'keydown', (event) => {
      if (event.repeat) {
        if (isControlKey(event.code)) event.preventDefault();
        return;
      }
      if (isControlKey(event.code)) event.preventDefault();
      this._keys.add(event.code);

      if (event.code === 'Escape' || event.code === 'KeyP') this.callbacks.onTogglePause?.();
      if (event.code === 'KeyR') this.callbacks.onRestart?.();
      if (event.code === 'KeyC') this.callbacks.onResetCamera?.();
    });

    this._on(window, 'keyup', (event) => this._keys.delete(event.code));
    // Releasing focus must not leave a pedal stuck down.
    this._on(window, 'blur', () => this.releaseAll());
  }

  releaseAll() {
    this._keys.clear();
    for (const key of Object.keys(this._touch)) this._touch[key] = false;
    for (const element of document.querySelectorAll('.ctrl.active')) {
      element.classList.remove('active');
    }
  }

  /** Recompute the control state; called once per frame before physics. */
  sample() {
    const held = (...codes) => codes.some((code) => this._keys.has(code));

    const gas = this._touch.gas || held('ArrowUp', 'KeyW');
    const brake = this._touch.brake || held('ArrowDown', 'KeyS', 'Space');
    const left = this._touch.left || held('ArrowLeft', 'KeyA');
    const right = this._touch.right || held('ArrowRight', 'KeyD');

    this.state.throttle = gas ? 1 : 0;
    this.state.brake = brake ? 1 : 0;
    this.state.steer = clamp((left ? 1 : 0) - (right ? 1 : 0), -1, 1);
    return this.state;
  }

  dispose() {
    for (const [target, type, handler, options] of this._listeners) {
      target.removeEventListener(type, handler, options);
    }
    this._listeners.length = 0;
  }
}
