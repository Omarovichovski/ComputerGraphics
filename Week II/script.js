import * as THREE from 'three';

// Required: Scene + its meshes, Camera, Renderer
const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xffffff, 0, 1 );

function RandomNum(min, max)
{
    return Math.random() * (max -   min) + min;
}

// Mesh = Geometry + Material to fill in the gaps
for (var i = 0; i < 1000; i++)
{
    const cubeGeometry = new THREE.BoxGeometry(0.1,0.1,0.1);
    const cubeMaterial = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            wireframe: false
        }
    );
    const cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
    cube.position.set(RandomNum(-5, 5),RandomNum(-5, 5),RandomNum(-5, 5));
    cube.lookAt(new THREE.Vector3(0,0,0))
    scene.add(cube);
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