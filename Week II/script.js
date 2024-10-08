import * as THREE from 'three';

// Required: Scene + its meshes, Camera, Renderer
const scene = new THREE.Scene();

function RandomNum(min, max)
{
    return Math.random() * (max - min) + min;
}

// Mesh = Geometry + Material to fill in the gaps
for (var i = 0; i < 1000; i++)
{
    const sphereGeometry = new THREE.SphereGeometry(0.02,32,32);
    const sphereMaterial = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            wireframe: false
        }
    );
    const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
    sphere.position.set(RandomNum(-10, 10),RandomNum(-5, 5),RandomNum(-5, 5));
    scene.add(sphere);
}

// Camera
const sizes = 
{
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 0;
const animate = () => 
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

scene.add(camera);

// Viewable area
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);

document.getElementById("scene").appendChild(renderer.domElement);
var clock = new THREE.Clock(true);

animate();