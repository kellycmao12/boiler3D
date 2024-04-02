import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near frustum
  100 // far frustum
);

camera.position.set(0, 0, 5);

const meshes = {};

init();

function init() {
  // tell renderer how big screen is
  renderer.setSize(window.innerWidth, window.innerHeight);
  // add renderer to dom
  document.body.appendChild(renderer.domElement);

  // add mesh to global meshes array --> this way we can access it in animate function
  meshes.default = addBoilerPlateMesh();
  meshes.standard = addStandardMesh();

  // add light
  meshes.defaultLight = addLight();

  // add to scene
  scene.add(meshes.default);
  scene.add(meshes.standard);
  scene.add(meshes.defaultLight);

  // call resize to add event listener
  resize();
  // finally call animate
  animate();
}

function resize() {
  window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
  })
}


// like p5 draw function
function animate() {
  // render loop, calls itself 60 frames a second
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  
  // console.log(scene.children);
  
  let box = meshes.standard;
  
  box.rotation.x += 0.01;
  box.rotation.z += 0.01;

}