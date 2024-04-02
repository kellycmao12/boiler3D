import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader();

// basic material: flat, doesn't show depth
export const addBoilerPlateMesh = () => {
    // add things to our world (meshes)
    // mesh = geometry + material
    const box = new THREE.BoxGeometry(1, 1, 1); // box with 1 for x, y, z dimensions
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }) // red
    const boxMesh = new THREE.Mesh(box, boxMaterial); // actually combine both of them into a mesh
    boxMesh.position.set(0, 0, -5) // offset it from the camera, -5 in z direction
    return boxMesh;
  
}

// standard material: interacts with light
export const addStandardMesh = () => {
    const box = new THREE.BoxGeometry(1, 1, 1); // box with 1 for x, y, z dimensions
    const boxMaterial = new THREE.MeshPhongMaterial( { color: 0x00ff00, specular:  0x050505,
        shininess: 100,}); 
    const boxMesh = new THREE.Mesh(box, boxMaterial); // actually combine both of them into a mesh
    boxMesh.position.set(1, -2, 0) // offset it from the camera, -5 in z direction
    return boxMesh;
}

export const addCylinderMesh = () => {
    const color = textureLoader.load('./Coral_001_basecolor.jpg');
    const displace = textureLoader.load('./Coral_001_height.jpg');
    const norm = textureLoader.load('./Coral_001_normal.jpg');

    const geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1, 32 ); 
    const material = new THREE.MeshStandardMaterial( { 
        map: color, 
        displacementMap: displace,
        displacementScale: 0.3,
        normalMap: norm
    }); 
    const cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(0, 0, 0) // offset it from the camera, -5 in z direction
    return cylinder;
}

export const addTorusKnotMesh = () => {
    const geometry = new THREE.TorusKnotGeometry( 0.8, 0.3, 100, 16 ); 
    const material = new THREE.MeshStandardMaterial( { color: 0xffffff } ); 
    const torusKnot = new THREE.Mesh( geometry, material );
    torusKnot.position.set(0, 0, 0) // offset it from the camera, -5 in z direction
    return torusKnot;
}