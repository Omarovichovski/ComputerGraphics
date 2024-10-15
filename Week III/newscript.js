import * as THREE from 'three';
import GSAP from 'gsap'

const scene = new THREE.Scene();
const geometry = new THREE.SphereGeometry(0.5, 32, 16);
const material = new THREE.MeshBasicMaterial
(
    { 
        color: 0x2f7f19,
        wireframe: true
    }
);
const cubemesh = new THREE.Mesh(geometry, material);
const sizes = {
    width: 800,
    height: 600
}
const animate = () => {
    requestAnimationFrame(animate);
    // cubemesh.rotation.x += 0.005;
    // cubemesh.rotation.y += 0.01;
    // cubemesh.rotation.z += 0.02;
    renderer.render(scene, camera);
};


// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
camera.position.x = 0;

//// GSAP ANIMATION
GSAP.to ( cubemesh.rotation,
    {
        duration: 2,
        y: 2,
        repeat: -1,
        yoyo: true
    }
)

scene.add(camera);
scene.add(cubemesh)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600)
document.getElementById("scene").appendChild(renderer.domElement);


animate();

    