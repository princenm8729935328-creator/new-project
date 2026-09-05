/**
 * Device tiering. Everything expensive in the renderer (shadow resolution,
 * antialiasing, prop counts, pixel ratio) is derived from one place so the
 * game degrades predictably on phones instead of dropping frames.
 */

function isMobileDevice() {
  const ua = navigator.userAgent || '';
  if (/Android|iPhone|iPod|IEMobile|Opera Mini/i.test(ua)) return true;
  // iPadOS reports as desktop Safari but exposes touch points.
  if (/iPad|Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return true;
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

export function detectQuality() {
  const mobile = isMobileDevice();
  const cores = navigator.hardwareConcurrency || (mobile ? 4 : 8);
  const memory = navigator.deviceMemory || (mobile ? 4 : 8);

  let tier = 'high';
  if (mobile) tier = cores <= 4 || memory <= 3 ? 'low' : 'medium';
  else if (cores <= 2) tier = 'medium';

  const presets = {
    low: {
      pixelRatioCap: 1.35,
      antialias: false,
      shadows: true,
      shadowMapSize: 1024,
      shadowDistance: 32,
      propShadows: false,
      trees: 120,
      rocks: 26,
      fogFar: 460,
      trackSegments: 640,
      skySegments: 12,
    },
    medium: {
      pixelRatioCap: 1.75,
      antialias: false,
      shadows: true,
      shadowMapSize: 1536,
      shadowDistance: 42,
      propShadows: false,
      trees: 200,
      rocks: 44,
      fogFar: 620,
      trackSegments: 800,
      skySegments: 16,
    },
    high: {
      pixelRatioCap: 2,
      antialias: true,
      shadows: true,
      shadowMapSize: 2048,
      shadowDistance: 58,
      propShadows: true,
      trees: 300,
      rocks: 70,
      fogFar: 820,
      trackSegments: 900,
      skySegments: 24,
    },
  };

  return { tier, mobile, cores, ...presets[tier] };
}
