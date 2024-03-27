import * as THREE from 'three'

export function addLight() {
    const light = new THREE.DirectionalLight( 0x00ffff, 1);  // color is white, intensity is 1 (scale from 0-1)
    light.position.set(1, 1, 1);
    return light;
}