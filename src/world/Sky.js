import * as THREE from 'three';

/**
 * Gradient sky dome. A single inward-facing sphere with a two-stop vertical
 * gradient plus a soft sun glow — cheaper than a cubemap and it needs no
 * texture download.
 */

const vertexShader = /* glsl */ `
  varying vec3 vWorldDirection;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldDirection = normalize(worldPosition.xyz - cameraPosition);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uSunColor;
  uniform vec3 uSunDirection;
  varying vec3 vWorldDirection;

  void main() {
    vec3 dir = normalize(vWorldDirection);
    float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
    // Bias the blend toward the horizon so the gradient reads on a phone screen.
    vec3 sky = mix(uHorizon, uTop, pow(smoothstep(0.42, 1.0, h), 0.75));

    float sun = max(dot(dir, normalize(uSunDirection)), 0.0);
    sky += uSunColor * pow(sun, 220.0) * 1.4;      // disc
    sky += uSunColor * pow(sun, 6.0) * 0.16;       // haze

    gl_FragColor = vec4(sky, 1.0);
    #include <colorspace_fragment>
  }
`;

/** Kept well below Game's camera far plane (3000). */
export const SKY_RADIUS = 1800;

export class Sky {
  constructor(quality, sunDirection) {
    const geometry = new THREE.SphereGeometry(
      1,
      quality.skySegments,
      Math.max(8, Math.floor(quality.skySegments * 0.7))
    );

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTop: { value: new THREE.Color(0x2a63b8) },
        uHorizon: { value: new THREE.Color(0xbcd8ef) },
        uSunColor: { value: new THREE.Color(0xfff3d0) },
        uSunDirection: { value: sunDirection.clone().normalize() },
      },
      vertexShader,
      fragmentShader,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.name = 'Sky';
    // Rendered first. The radius must stay comfortably inside the camera's far
    // plane — a dome larger than `far` gets clipped and punches holes of clear
    // colour through the sky.
    this.mesh.renderOrder = -1;
    this.mesh.frustumCulled = false;
    this.mesh.scale.setScalar(SKY_RADIUS);
  }

  /** Keep the dome centred on the camera so it never clips. */
  update(cameraPosition) {
    this.mesh.position.copy(cameraPosition);
  }

  get horizonColor() {
    return this.material.uniforms.uHorizon.value;
  }

  dispose() {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}
