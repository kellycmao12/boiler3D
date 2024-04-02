import * as THREE from 'three'

export function addLight() {
    const light = new THREE.DirectionalLight( 0x00ffff, 1);  // color is cyan, intensity is 1 (scale from 0-1)
    light.position.set(1, 1, 1);
    return light;
}

export function addSecondLight() {
    const light = new THREE.DirectionalLight( 0xffffff, 1);  // color is white, intensity is 1 (scale from 0-1)
    light.position.set(-2, -5, -3);
    return light;
}

export function addThirdLight() {
    const light = new THREE.DirectionalLight( 0xff0000, 1);  // color is pink, intensity is 1 (scale from 0-1)
    light.position.set(3, 5, 3);
    return light;
}