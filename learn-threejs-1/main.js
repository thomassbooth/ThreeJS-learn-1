import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, //fov
  window.innerWidth / window.innerHeight, //aspect ratio, just make it window width/height so it doesnt squish
  0.1, //near
  1000 //far
);

camera.position.set(0, 0, 5);


const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#e5e5e5");

document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 10, 10);
const material = new THREE.MeshStandardMaterial({ color: 0xffcc00 });


//mesh, this takes a geometry and applies a material to it
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(50, 50, 50);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
}

animate();
