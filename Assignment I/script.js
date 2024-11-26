// Seeu Buildings Assignment

import * as THREE from 'three';
import { gsap } from "gsap";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { randFloat } from 'three/src/math/MathUtils.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x8080ff );

const grassTexture = new THREE.TextureLoader().load( "grass.jpg" );

const grassGeometry = new THREE.PlaneGeometry(10,10);
const grassMaterial = new THREE.MeshStandardMaterial({color: 0x008c12, side: THREE.DoubleSide, map: grassTexture});
const grassMesh = new THREE.Mesh(grassGeometry,grassMaterial);
grassMesh.rotateX(Math.PI/2)

const roundGrassGeometry = new THREE.CircleGeometry(0.75);
const roundGrassMesh = new THREE.Mesh(roundGrassGeometry,grassMaterial);
roundGrassMesh.position.setY(0.02);
roundGrassMesh.rotateX(Math.PI/2)




const firstBuildingGeometry = new THREE.BoxGeometry(1,1,2);
const firstBuildingMaterial = new THREE.MeshStandardMaterial({color:0xcbaacc});
const firstBuildingMesh = new THREE.Mesh(firstBuildingGeometry,firstBuildingMaterial);
firstBuildingMesh.position.set(1.5,0.501,3);

const secondBuildingGeometry = new THREE.BoxGeometry(1.2,0.6,2);
const secondBuildingMaterial = new THREE.MeshStandardMaterial({color:0xaafaff});
const secondBuildingMesh = new THREE.Mesh(secondBuildingGeometry,secondBuildingMaterial);
secondBuildingMesh.position.set(3,0.301,0.6);
secondBuildingMesh.rotateY(Math.PI/3)

const thirdBuildingGeometry = new THREE.BoxGeometry(1,0.8,2);
const thirdBuildingMaterial = new THREE.MeshStandardMaterial({color:0x99ab80});
const thirdBuildingMesh = new THREE.Mesh(thirdBuildingGeometry,thirdBuildingMaterial);
thirdBuildingMesh.position.set(1.5,0.401,-2.5);

const finalBuildingGeometry = new THREE.BoxGeometry(1,1.4,5);
const finalBuildingMaterial = new THREE.MeshStandardMaterial({color:0xceabab});
const finalBuildingMesh = new THREE.Mesh(finalBuildingGeometry,finalBuildingMaterial);
finalBuildingMesh.position.set(-3.8,0.701,-0.3);
finalBuildingMesh.rotateY(Math.PI/3)





const roadMaterial = new THREE.MeshStandardMaterial({color: 0x303018});

const straightRoadGeometry = new THREE.PlaneGeometry(1,10);
const straightRoadMesh = new THREE.Mesh(straightRoadGeometry,roadMaterial);
straightRoadMesh.rotateX(-Math.PI/2);
straightRoadMesh.position.setY(0.01);

const straightRoadGeometry2 = new THREE.PlaneGeometry(0.5,5);
const straightRoadMesh2 = new THREE.Mesh(straightRoadGeometry2,roadMaterial);
straightRoadMesh2.rotateX(-Math.PI/2);
straightRoadMesh2.rotateZ(Math.PI/3);
straightRoadMesh2.position.set(2.5,0.01,1.5);

const straightRoadGeometry3 = new THREE.PlaneGeometry(0.25,1.5);
const straightRoadMesh3 = new THREE.Mesh(straightRoadGeometry3,roadMaterial);
straightRoadMesh3.rotateX(-Math.PI/2);
straightRoadMesh3.rotateZ(-Math.PI/3);
straightRoadMesh3.position.set(1.9,0.01,-0.9);

const straightRoadGeometry4 = new THREE.PlaneGeometry(1,1.5);
const straightRoadMesh4 = new THREE.Mesh(straightRoadGeometry4,roadMaterial);
straightRoadMesh4.rotateX(-Math.PI/2);
straightRoadMesh4.rotateZ(Math.PI/3);
straightRoadMesh4.position.set(2.8,0.01,-0.6);

const straightRoadGeometry5 = new THREE.PlaneGeometry(1,4);
const straightRoadMesh5 = new THREE.Mesh(straightRoadGeometry5,roadMaterial);
straightRoadMesh5.rotateX(-Math.PI/2);
straightRoadMesh5.rotateZ(Math.PI/3);
straightRoadMesh5.position.set(-2.9,0.01,-1);

const roundRoadGeometry = new THREE.CircleGeometry(1.5);
const roundRoadMesh = new THREE.Mesh(roundRoadGeometry,roadMaterial);
roundRoadMesh.rotateX(-Math.PI/2);
roundRoadMesh.position.setY(0.01);





const personGeometry = new THREE.CapsuleGeometry(0.075,0.15);
const personMaterial = new THREE.MeshStandardMaterial({color: 0x00009a});
const person = new THREE.Mesh(personGeometry,personMaterial);
person.position.set(0.3,0.15,5);

const person2Geometry = new THREE.CapsuleGeometry(0.075,0.15);
const person2Material = new THREE.MeshStandardMaterial({color: 0xca0078});
const person2 = new THREE.Mesh(person2Geometry,person2Material);
person2.position.set(4.5,0.15,2.5);

const person3Geometry = new THREE.CapsuleGeometry(0.075,0.15);
const person3Material = new THREE.MeshStandardMaterial({color: 0x9caa34});
const person3 = new THREE.Mesh(person3Geometry,person3Material);
person3.position.set(-0.2,0.15,-4.5);

const person4Geometry = new THREE.CapsuleGeometry(0.075,0.15);
const person4Material = new THREE.MeshStandardMaterial({color: 0xb44c04});
const person4 = new THREE.Mesh(person4Geometry,person4Material);
person4.position.set(1.5,0.15,2.4);

const tl  = gsap.timeline({ repeat: -1 });
const tl2 = gsap.timeline({ repeat: -1 });
const tl3 = gsap.timeline({ repeat: -1 });
const tl4 = gsap.timeline({ repeat: -1 });

// Walk animation for person1, starting at (0.3, 0.15, 5)
tl.to(person.position, {
    duration: 2,
    z: 1,
    ease: "none"
});
tl.to(person.position, {
    duration: 0.51,
    z: 0.5,
    x: 0.9,
    ease: "none"
});
tl.to(person.position, {
    duration: 0.82,
    z: -0.4,
    x: 1,
    ease: "none",
});
tl.to(person.position, {
    duration: 1.36,
    z: -1,
    x: 2,
    ease: "none",
});
tl.to(person.position, {
    duration: 0.8,
    z: -0.6,
    x: 2.8,
    ease: "none",
});
tl.to(person.position, {
    duration: 0.49,
    z: 0.1,
    x: 2.8,
    ease: "none",
});

// Walk animation for person2, starting at (4.5,0.15,2.5);
tl2.to(person2.position, {
    duration: 2.72,
    z: 0.6 + randFloat(0,0.2),
    x: 1 + randFloat(0,0.2),
    ease: "none"
});
tl2.to(person2.position, {
    duration: 1.16,
    z: 1 + randFloat(0,0.2),
    x: 0 + randFloat(0,0.2),
    ease: "none"
});
tl2.to(person2.position, {
    duration: 2.25,
    z: 0 + randFloat(0,0.2),
    x: -1.5 + randFloat(0,0.2),
    ease: "none"
});
tl2.to(person2.position, {
    duration: 3.25,
    z: -2 + randFloat(0,0.2),
    x: -4.5,
    ease: "none"
});
// Walk animation for person3, starting at (-0.2, 0.15, -4.5)
tl3.to(person3.position, {
    duration: 3.25,
    z: -1 + randFloat(0,0.2),
    ease: "none"
})
tl3.to(person3.position, {
    duration: 1.5,
    z: -0.3 + randFloat(0,0.2),
    x: -1.1 + randFloat(0,0.2),
    ease: "none"
})
tl3.to(person3.position, {
    duration: 0.6,
    z: 0.4 + randFloat(0,0.2),
    x: -1.1 + randFloat(0,0.2),
    ease: "none"
})
tl3.to(person3.position, {
    duration: 1.5,
    z: 1.2 + randFloat(0,0.2),
    x: -0.2 + randFloat(0,0.2),
    ease: "none"
})
tl3.to(person3.position, {
    duration: 3.75,
    z: 4.5,
    ease: "none"
})

// Walk animation for person4, starting at (1.5,0.15,2.4)
tl4.to(person4.position, {
    duration: 3.75,
    x: 0.1 + randFloat(0,0.2),
    ease: "none"
})
tl4.to(person4.position, {
    duration: 1.75,
    z: 1.2 + randFloat(0,0.2),
    ease: "none"
})
tl4.to(person4.position, {
    duration: 2.35,
    z: 0 + randFloat(0,0.2),
    x: 1.1 + randFloat(0,0.2),
    ease: "none"
})
tl4.to(person4.position, {
    duration: 2.35,
    z: -1.2 + randFloat(0,0.2),
    x: 0.1 + randFloat(0,0.2),
    ease: "none"
})
tl4.to(person4.position, {
    duration: 2.35,
    z: -3.25,
    ease: "none"
})
tl4.to(person4.position, {
    duration: 2.35,
    x: 1.5,
    ease: "none"
})

const pointlight = new THREE.PointLight(0xffffff,100)
const ambienttlight = new THREE.AmbientLight(0xffffff,0.6)
pointlight.position.set(1,5,0);

const clock = new THREE.Clock;

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.OrthographicCamera(sizes.width / - 128, sizes.width / 128, sizes.height / 128, sizes.height / - 128 , 1, 1000);



scene.add(camera);
scene.add(ambienttlight);
scene.add(pointlight);

scene.add(grassMesh);
scene.add(roundGrassMesh);

scene.add(firstBuildingMesh);
scene.add(secondBuildingMesh);
scene.add(thirdBuildingMesh);
scene.add(finalBuildingMesh);

scene.add(straightRoadMesh);
scene.add(straightRoadMesh2);
scene.add(straightRoadMesh3);
scene.add(straightRoadMesh4);
scene.add(straightRoadMesh5);
scene.add(roundRoadMesh);

scene.add(person);
scene.add(person2);
scene.add(person3);
scene.add(person4);

const renderer = new THREE.WebGLRenderer({antialias: false});
renderer.setSize(1200, 900)
document.getElementById("scene").appendChild(renderer.domElement);
const controls = new OrbitControls( camera, renderer.domElement );

camera.position.set( 30, 25, 30 );

animate();

    