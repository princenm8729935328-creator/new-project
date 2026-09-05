import './ui/style.css';
import { Game } from './core/Game.js';

const canvas = document.getElementById('game-canvas');

function boot() {
  try {
    const game = new Game(canvas);
    game.start();
    game.hud.hideLoader();
    // Handy for debugging from the console; harmless in production.
    window.__apex = game;
  } catch (error) {
    console.error('[Apex Circuit] failed to start:', error);
    showFatalError(error);
  }
}

function showFatalError(error) {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.innerHTML = `
    <div style="max-width:340px;text-align:center;padding:24px;font:14px/1.6 system-ui,sans-serif;color:#f2f6ff">
      <p style="font-size:22px;font-weight:800;margin:0 0 8px">Can't start the race</p>
      <p style="color:#9aa7c2;margin:0">
        This game needs WebGL. Try a different browser, or enable hardware acceleration.
      </p>
      <p style="color:#5c6780;font-size:11px;margin-top:14px">${String(error?.message ?? error)}</p>
    </div>`;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
