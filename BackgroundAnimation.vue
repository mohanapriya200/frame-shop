<template>
  <Renderer ref="renderer" pointer resize="window" style="position: fixed; top: 0; left: 0; z-index: -1; width: 100vw; height: 100vh;">
    <Camera :position="{ z: 0 }" :fov="50" />
    <Scene>
      <Points ref="points" :position="{ z: -150 }">
        <BufferGeometry :attributes="attributes" />
        <ShaderMaterial
          :blending="2"
          :depth-test="false"
          :uniforms="uniforms"
          :vertex-shader="vertexShader"
          :fragment-shader="fragmentShader"
        >
          <Texture src="https://assets.codepen.io/33787/sprite.png" uniform="uTexture" />
        </ShaderMaterial>
      </Points>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="2" :radius="0" :threshold="0" />
      <ZoomBlurPass :strength="zoomStrength" />
    </EffectComposer>
  </Renderer>
</template>

<script setup>
import {
  lerp, BufferGeometry, Camera, EffectComposer, Points, Renderer,
  RenderPass, Scene, ShaderMaterial, Texture, UnrealBloomPass, ZoomBlurPass
} from 'troisjs';
import { Clock, Color, MathUtils, Vector3 } from 'three';
import niceColors from 'nice-color-palettes';
import { ref, onMounted, reactive } from 'vue';

const POINTS_COUNT = 50000;
const palette = niceColors[83];
const { randFloat: rnd, randInt, randFloatSpread: rndFS } = MathUtils;

const zoomStrength = ref(0);
const uniforms = reactive({ uTime: { value: 0 } });

const attributes = [
  { name: 'position', array: new Float32Array(POINTS_COUNT * 3), itemSize: 3 },
  { name: 'color', array: new Float32Array(POINTS_COUNT * 3), itemSize: 3 },
  { name: 'size', array: new Float32Array(POINTS_COUNT), itemSize: 1 }
];

const v3 = new Vector3();
const color = new Color();

for (let i = 0; i < POINTS_COUNT; i++) {
  v3.set(rndFS(200), rndFS(200), rndFS(300));
  v3.toArray(attributes[0].array, i * 3);
  color.set(palette[Math.floor(rnd(0, palette.length))]);
  color.toArray(attributes[1].array, i * 3);
  attributes[2].array[i] = rnd(5, 20);
}

const vertexShader = `
  uniform float uTime;
  attribute vec3 color;
  attribute float size;
  varying vec4 vColor;
  void main(){
    vColor = vec4(color, 1.0);
    vec3 p = vec3(position);
    p.z = -150. + mod(position.z + uTime, 300.);
    vec4 mvPosition = modelViewMatrix * vec4( p, 1.0 );
    gl_PointSize = size * (-50.0 / mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec4 vColor;
  void main() {
    gl_FragColor = vColor * texture2D(uTexture, gl_PointCoord);
  }
`;

const clock = new Clock();
let timeCoef = 1;
let targetTimeCoef = 1;

const renderer = ref(null);
const points = ref(null);

onMounted(() => {
  const r = renderer.value;
  const posN = r.three.pointer.positionN;
  const pts = points.value.points;

  r.onBeforeRender(() => {
    timeCoef = lerp(timeCoef, targetTimeCoef, 0.02);
    uniforms.uTime.value += clock.getDelta() * timeCoef * 4;
    zoomStrength.value = timeCoef * 0.004;

    const tiltX = lerp(pts.rotation.x, posN.y * 0.05, 0.02);
    const tiltY = lerp(pts.rotation.y, -posN.x * 0.05, 0.02);
    pts.rotation.set(tiltX, tiltY, 0);
  });
});
</script>

<style scoped>
canvas {
  display: block;
}
</style>
