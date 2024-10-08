import * as THREE from 'three';

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)
const sizes = {
    width: 800,
    height: 600
}
const animate = () => {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.01;
    // mesh.rotation.x += 0.02;
    renderer.render(scene, camera);
};


// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
camera.position.x = 0;
scene.add(camera);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600)
document.getElementById("scene").appendChild(renderer.domElement);
var clock = new THREE.Clock(true);

animate();

    