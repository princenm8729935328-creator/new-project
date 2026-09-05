import * as THREE from 'three';

/**
 * All textures are generated on a canvas at runtime. That keeps the build free
 * of binary assets, makes first paint instant (no network fetch), and keeps
 * memory tiny — every surface here is a small tiling texture.
 */

/** Grainy tiling noise, used for asphalt and grass so flat colour doesn't band. */
export function createNoiseTexture(size, baseHex, variance, repeat) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const base = new THREE.Color(baseHex);
  const image = ctx.createImageData(size, size);

  for (let i = 0; i < size * size; i++) {
    const n = (Math.random() - 0.5) * 2 * variance;
    image.data[i * 4 + 0] = THREE.MathUtils.clamp((base.r + n) * 255, 0, 255);
    image.data[i * 4 + 1] = THREE.MathUtils.clamp((base.g + n) * 255, 0, 255);
    image.data[i * 4 + 2] = THREE.MathUtils.clamp((base.b + n) * 255, 0, 255);
    image.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeat, repeat);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Black/white chequer used for the start-finish line. */
export function createCheckerTexture(squares = 8) {
  const cell = 16;
  const size = squares * cell;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = cell * 2;
  const ctx = canvas.getContext('2d');
  for (let y = 0; y < 2; y++) {
    for (let x = 0; x < squares; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? '#f5f5f5' : '#14161c';
      ctx.fillRect(x * cell, y * cell, cell, cell);
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
