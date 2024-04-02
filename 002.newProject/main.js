import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh, addCylinderMesh, addTorusKnotMesh } from './addMeshes'
import { addLight, addSecondLight } from './addLights'

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near frustum
  100 // far frustum
);

camera.position.set(0, 0, 5);
// renderer.setClearColor( 0xbcadff ); // set background color

const meshes = {};

let tick = 0;

init();

function init() {
  // tell renderer how big screen is
  renderer.setSize(window.innerWidth, window.innerHeight);
  // add renderer to dom
  document.body.appendChild(renderer.domElement);

  // add mesh to global meshes array --> this way we can access it in animate function
  meshes.default = addBoilerPlateMesh();
  meshes.standard = addStandardMesh();
  meshes.cylinder = addCylinderMesh();
  meshes.torusKnot = addTorusKnotMesh();

  // add light
  meshes.defaultLight = addLight();
  meshes.secondLight = addSecondLight();

  // add to scene
  // scene.add(meshes.default);
  scene.add(meshes.standard);
  scene.add(meshes.cylinder);
  scene.add(meshes.torusKnot);
  scene.add(meshes.defaultLight);
  scene.add(meshes.secondLight);


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
  let cylinder = meshes.cylinder;
  let torusKnot = meshes.torusKnot;
  
  box.rotation.x += 0.01;
  box.rotation.z += 0.01;
  cylinder.rotation.x += 0.01;
  torusKnot.rotation.x -= 0.01;

  box.position.x = Math.sin(tick) * 2;
  box.position.y = -Math.cos(tick) * 2;
  box.position.z = Math.sin(tick) * 2;
  cylinder.position.x = Math.sin(tick) * 3.5;
  cylinder.position.y = Math.cos(tick) * 3;

  tick += 0.02;

}