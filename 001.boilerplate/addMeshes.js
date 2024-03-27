import * as THREE from 'three'

export const addBoilerPlateMesh = () => {
    // add things to our world (meshes)
    // mesh = geometry + material
    const box = new THREE.BoxGeometry(1, 1, 1); // box with 1 for x, y, z dimensions
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }) // red
    const boxMesh = new THREE.Mesh(box, boxMaterial); // actually combine both of them into a mesh
    boxMesh.position.set(0, 0, -5) // offset it from the camera, -5 in z direction
    return boxMesh;
  
}

export const addStandardMesh = () => {
    const box = new THREE.BoxGeometry(1, 1, 1); // box with 1 for x, y, z dimensions
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 }) // red
    const boxMesh = new THREE.Mesh(box, boxMaterial); // actually combine both of them into a mesh
    boxMesh.position.set(-2, 0, 0) // offset it from the camera, -5 in z direction
    return boxMesh;
}