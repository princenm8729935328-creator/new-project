/**
 * Race state machine: countdown, lap counting, timing and completion.
 *
 * Lap progress is tracked as a *continuous* position along the track rather
 * than a trigger volume at the start line. Accumulating the per-frame delta
 * means a lap can only be credited by actually driving the whole loop — you
 * cannot reverse across the line to farm laps, and no lap is ever missed
 * because of a fast frame skipping past a trigger.
 */

export const RaceState = {
  IDLE: 'idle',
  COUNTDOWN: 'countdown',
  RACING: 'racing',
  PAUSED: 'paused',
  FINISHED: 'finished',
};

const COUNTDOWN_SECONDS = 3;
const WRONG_WAY_SPEED = 4; // below this, going backwards is just manoeuvring

export class RaceManager {
  constructor({ totalLaps = 3, callbacks = {} } = {}) {
    this.totalLaps = totalLaps;
    this.callbacks = callbacks;
    this.bestLap = Infinity; // persists across restarts within a session
    this.reset(0);
  }

  reset(startProgress) {
    this.state = RaceState.IDLE;
    this.stateBeforePause = null;

    this._rawProgress = startProgress;
    // The car starts just behind the line, so continuous progress starts
    // slightly negative: crossing zero is the start, not a completed lap.
    // Lap N is credited when continuous progress reaches N.
    this._continuous = startProgress - 1;
    this._lapFloor = 0;

    this.currentLap = 1;
    this.lapTime = 0;
    this.totalTime = 0;
    this.countdown = COUNTDOWN_SECONDS;
    this.splits = [];
    this.wrongWay = false;
    this._wrongWayTimer = 0;
    this._countdownShown = null;
  }

  startCountdown() {
    if (this.state !== RaceState.IDLE) return;
    this.state = RaceState.COUNTDOWN;
    this.countdown = COUNTDOWN_SECONDS;
    this._countdownShown = null;
  }

  pause() {
    if (this.state !== RaceState.RACING && this.state !== RaceState.COUNTDOWN) return false;
    this.stateBeforePause = this.state;
    this.state = RaceState.PAUSED;
    return true;
  }

  resume() {
    if (this.state !== RaceState.PAUSED) return false;
    this.state = this.stateBeforePause || RaceState.RACING;
    this.stateBeforePause = null;
    return true;
  }

  /** True while the car must stay put (pre-GO). */
  get controlsLocked() {
    return this.state === RaceState.COUNTDOWN || this.state === RaceState.IDLE;
  }

  get isRunning() {
    return this.state === RaceState.RACING || this.state === RaceState.COUNTDOWN;
  }

  update(dt, rawProgress, speed) {
    if (this.state === RaceState.COUNTDOWN) {
      this.countdown -= dt;
      const remaining = Math.ceil(this.countdown);
      if (remaining !== this._countdownShown) {
        this._countdownShown = remaining;
        this.callbacks.onCountdown?.(Math.max(0, remaining));
      }
      if (this.countdown <= 0) {
        this.state = RaceState.RACING;
        this.callbacks.onStart?.();
      }
      // Keep progress in sync so the first frame of racing has no jump.
      this._rawProgress = rawProgress;
      return;
    }

    if (this.state !== RaceState.RACING) return;

    this.lapTime += dt;
    this.totalTime += dt;

    // --- continuous progress ------------------------------------------------
    let delta = rawProgress - this._rawProgress;
    if (delta > 0.5) delta -= 1; // wrapped backwards over the start line
    if (delta < -0.5) delta += 1; // wrapped forwards over the start line
    this._rawProgress = rawProgress;
    this._continuous += delta;

    // --- wrong-way detection ------------------------------------------------
    if (delta < 0 && Math.abs(speed) > WRONG_WAY_SPEED) {
      this._wrongWayTimer += dt;
    } else {
      this._wrongWayTimer = Math.max(0, this._wrongWayTimer - dt * 2);
    }
    const wrongWay = this._wrongWayTimer > 0.6;
    if (wrongWay !== this.wrongWay) {
      this.wrongWay = wrongWay;
      this.callbacks.onWrongWay?.(wrongWay);
    }

    // --- lap completion -----------------------------------------------------
    // Clamped at zero so the initial run up to the start line (which begins at
    // negative progress) can never be credited as a lap.
    const floor = Math.max(0, Math.floor(this._continuous));
    if (floor > this._lapFloor) {
      this._lapFloor = floor;
      this._completeLap();
    } else if (floor < this._lapFloor) {
      this._lapFloor = floor;
      this._uncreditLap();
    }
  }

  _completeLap() {
    const lapTime = this.lapTime;
    const isBest = lapTime < this.bestLap;
    if (isBest) this.bestLap = lapTime;

    this.splits.push(lapTime);
    this.lapTime = 0;

    const completed = this.splits.length;
    this.callbacks.onLapComplete?.({ lap: completed, lapTime, isBest });

    if (completed >= this.totalLaps) {
      this.state = RaceState.FINISHED;
      this.callbacks.onFinish?.({
        totalTime: this.totalTime,
        bestLap: this.bestLap,
        splits: [...this.splits],
      });
      return;
    }

    this.currentLap = completed + 1;
  }

  /**
   * Reversing back over the start line takes the lap away again, so a driver
   * cannot shuttle across the line to collect laps. The lap clock resumes from
   * where it left off. A best lap that was genuinely driven is kept.
   */
  _uncreditLap() {
    const undone = this.splits.pop();
    if (undone === undefined) return;
    this.lapTime += undone;
    this.currentLap = this.splits.length + 1;
  }
}
