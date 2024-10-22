import * as THREE from 'three';

const scene = new THREE.Scene();

const lighting = new THREE.DirectionalLight(0xffffff, 3);
lighting.position.set(5,5,5);

var clock = new THREE.Clock(true);

const box = new THREE.BoxGeometry(1, 1, 1);
const boxmaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 100, specular: 0xffffff });
const boxmesh = new THREE.Mesh(box, boxmaterial);

const sphere = new THREE.SphereGeometry( 0.5, 32, 16);
const spherematerial = new THREE.MeshPhongMaterial({ color: 0x00ff00, shininess: 50, specular: 0xffffff });
const spheremesh = new THREE.Mesh(sphere, spherematerial);

const cylinder = new THREE.CylinderGeometry(0.5, 0.75, 1, 32);
const cylindermaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff, shininess: 20, specular: 0xffffff });
const cylindermesh = new THREE.Mesh(cylinder, cylindermaterial);

const animate = () => {
    requestAnimationFrame(animate);
    cylindermesh.rotateX(0.067)
    cylindermesh.rotateY(0.023)

    cylindermesh.position.x = 2* Math.cos(clock.getElapsedTime());
    cylindermesh.position.z = 3* Math.sin(2 * clock.getElapsedTime());

    
    boxmesh.rotateX(0.013)
    boxmesh.rotateY(0.079)
    
    
    boxmesh.position.x = 2* Math.cos(clock.getElapsedTime());
    boxmesh.position.y = 2* Math.sin(clock.getElapsedTime());

    spheremesh.position.x = 2* Math.cos(1.71 * clock.getElapsedTime());
    spheremesh.position.y = 2* Math.sin(2.73 * clock.getElapsedTime());

    // camera.fov = Math.random() * 50 + 70;
    // camera.updateProjectionMatrix();
    // console.log(camera.fov)

    renderer.render(scene, camera);
};

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.OrthographicCamera(sizes.width / - 64, sizes.width / 64, sizes.height / 64, sizes.height / - 64 , 1, 1000);
camera.position.z = 5;
camera.position.x = 0;

spheremesh.position.set(0,0,0);

scene.add(camera);
scene.add(lighting);
scene.add(boxmesh);
scene.add(spheremesh);
scene.add(cylindermesh);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(1200, 900)
document.getElementById("scene").appendChild(renderer.domElement);


animate();

    