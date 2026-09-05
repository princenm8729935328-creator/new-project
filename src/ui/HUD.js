import { clamp, formatTime } from '../utils/math.js';

/**
 * DOM HUD. The 3D layer never draws UI — text and buttons stay in HTML so they
 * are crisp at any device pixel ratio and cost nothing per frame on the GPU.
 *
 * Every setter compares before writing: touching textContent on an unchanged
 * value still invalidates layout, and this runs 60 times a second.
 */

const SPEEDO_ARC = 151; // path length of the gauge arc, matches the CSS dasharray
const TOP_SPEED_KMH = 210;

export class HUD {
  constructor(callbacks = {}) {
    this.callbacks = callbacks;
    const $ = (id) => document.getElementById(id);

    this.el = {
      lap: $('hud-lap'),
      lapTime: $('hud-lap-time'),
      best: $('hud-best'),
      total: $('hud-total'),
      flash: $('hud-flash'),
      speedValue: $('speedo-value'),
      speedFill: $('speedo-fill'),
      countdown: $('countdown'),
      overlayStart: $('overlay-start'),
      overlayPause: $('overlay-pause'),
      overlayFinish: $('overlay-finish'),
      resultTotal: $('result-total'),
      resultBest: $('result-best'),
      resultSplits: $('result-splits'),
      loader: $('loader'),
      controls: $('controls'),
    };

    this.buttons = {
      gas: $('btn-gas'),
      brake: $('btn-brake'),
      left: $('btn-left'),
      right: $('btn-right'),
    };

    this._cache = {};
    this._flashTimer = null;
    this._wireButtons();
  }

  _wireButtons() {
    const bind = (id, handler) => document.getElementById(id)?.addEventListener('click', handler);
    bind('btn-start', () => this.callbacks.onStart?.());
    bind('btn-pause', () => this.callbacks.onTogglePause?.());
    bind('btn-resume', () => this.callbacks.onResume?.());
    bind('btn-restart', () => this.callbacks.onRestart?.());
    bind('btn-restart-pause', () => this.callbacks.onRestart?.());
  }

  _setText(key, element, value) {
    if (this._cache[key] === value) return;
    this._cache[key] = value;
    element.textContent = value;
  }

  hideLoader() {
    this.el.loader.classList.add('done');
    setTimeout(() => this.el.loader.remove(), 500);
  }

  // ------------------------------------------------------------------ per-frame

  update(race, car) {
    const lapLabel = `${Math.min(race.currentLap, race.totalLaps)}/${race.totalLaps}`;
    if (this._cache.lap !== lapLabel) {
      this._cache.lap = lapLabel;
      const [current, total] = lapLabel.split('/');
      this.el.lap.innerHTML = `${current}<small>/${total}</small>`;
    }

    this._setText('lapTime', this.el.lapTime, formatTime(race.lapTime));
    this._setText('total', this.el.total, formatTime(race.totalTime));
    this._setText(
      'best',
      this.el.best,
      Number.isFinite(race.bestLap) ? formatTime(race.bestLap) : '--:--.--'
    );

    this._updateSpeedo(car.speedKmh);
  }

  _updateSpeedo(kmh) {
    const rounded = Math.round(kmh);
    this._setText('speed', this.el.speedValue, String(rounded));

    const ratio = clamp(kmh / TOP_SPEED_KMH, 0, 1);
    const offset = (SPEEDO_ARC * (1 - ratio)).toFixed(1);
    if (this._cache.speedOffset !== offset) {
      this._cache.speedOffset = offset;
      this.el.speedFill.style.strokeDashoffset = offset;
    }

    const colour = ratio > 0.88 ? '#ff5d5d' : ratio > 0.65 ? '#ffd23f' : '#4ad6a0';
    if (this._cache.speedColour !== colour) {
      this._cache.speedColour = colour;
      this.el.speedFill.style.stroke = colour;
    }
  }

  // -------------------------------------------------------------------- events

  flash(message, { warn = false, duration = 1600 } = {}) {
    const element = this.el.flash;
    element.textContent = message;
    element.classList.toggle('warn', warn);
    element.classList.add('show');
    clearTimeout(this._flashTimer);
    if (duration > 0) {
      this._flashTimer = setTimeout(() => element.classList.remove('show'), duration);
    }
  }

  clearFlash() {
    clearTimeout(this._flashTimer);
    this.el.flash.classList.remove('show');
  }

  showCountdown(value) {
    const element = this.el.countdown;
    element.textContent = value > 0 ? String(value) : 'GO!';
    element.classList.toggle('go', value === 0);
    // Restart the CSS animation by forcing a reflow.
    element.classList.remove('pop');
    void element.offsetWidth;
    element.classList.add('pop');
  }

  showResults({ totalTime, bestLap, splits }) {
    this.el.resultTotal.textContent = formatTime(totalTime);
    this.el.resultBest.textContent = formatTime(bestLap);

    const fastest = Math.min(...splits);
    this.el.resultSplits.innerHTML = splits
      .map((time, index) => {
        const best = time === fastest ? ' class="best"' : '';
        return `<li${best}><span>Lap ${index + 1}</span><span class="mono">${formatTime(time)}</span></li>`;
      })
      .join('');

    this.setOverlay('finish');
  }

  /** @param {'start'|'pause'|'finish'|null} which */
  setOverlay(which) {
    this.el.overlayStart.classList.toggle('hidden', which !== 'start');
    this.el.overlayPause.classList.toggle('hidden', which !== 'pause');
    this.el.overlayFinish.classList.toggle('hidden', which !== 'finish');
    // Hide the pedals whenever a modal is up so they can't be pressed through it.
    this.el.controls.classList.toggle('hidden', which !== null);
  }
}
