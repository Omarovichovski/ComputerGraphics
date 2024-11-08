// TEXTURES

import * as THREE from 'three';

const scene = new THREE.Scene();
const box = new THREE.BoxGeometry(1, 1, 1);
const boxmaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x00ff00, emissiveIntensity: 0.5 });
const boxmesh = new THREE.Mesh(box, boxmaterial);

const phongMaterial = new THREE.MeshPhongMaterial(
    {
        color: 0xff0000,
        specular: 0xff0000,
        shininess: 70
    }
)

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5,32,32), phongMaterial)

const transparentMaterial = new THREE.MeshStandardMaterial(
    {
        color: 0x0000ff,
        transparent: true,
        opacity: 0.4
    }
)

const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(1,1,2,32,32),transparentMaterial)
cylinder.rotateY(1.2);
cylinder.rotateZ(0.2);

const startColor = new THREE.Color(0xff0000);
const endColor = new THREE.Color(0x0000ff);

const interpolateColor = startColor.clone().lerp(endColor,0.5)
const interpolateMaterial = new THREE.MeshBasicMaterial({color:interpolateColor});
const interpolateCube = new THREE.Mesh(new THREE.BoxGeometry(0.3,0.,3),interpolateMaterial);
interpolateCube.position.y = 1;

const ambientlight = new THREE.AmbientLight(0xffffff, 0.2)

const pointlight = new THREE.PointLight(0xffffff,3,5)
pointlight.position.set(-1,-0.5,1);

const clock = new THREE.Clock;

const animate = () => {
    requestAnimationFrame(animate);
    boxmesh.rotateX(0.013)
    boxmesh.rotateY(0.079)
    
    
    boxmesh.position.x = Math.cos(clock.getElapsedTime());
    boxmesh.position.y = Math.sin(clock.getElapsedTime());
    boxmesh.position.z = Math.sin(clock.getElapsedTime());

    sphere.position.x = Math.tan(clock.getElapsedTime());

    renderer.render(scene, camera);
};

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.OrthographicCamera(sizes.width / - 128, sizes.width / 128, sizes.height / 128, sizes.height / - 128 , 1, 1000);
camera.position.z = 5;
camera.position.x = 0;

scene.add(camera);
scene.add(ambientlight);
scene.add(pointlight);
scene.add(boxmesh);
scene.add(sphere);
scene.add(cylinder);
scene.add(interpolateCube);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(1200, 900)
document.getElementById("scene").appendChild(renderer.domElement);


animate();

    