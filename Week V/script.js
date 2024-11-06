import * as THREE from 'three'

const camera = new THREE.PerspectiveCamera(75,1,0.1,2000);
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()

const animate = () => 
{
    requestAnimationFrame(animate)
    renderer.render(scene, camera);
}
    
renderer.setSize(1200, 900)
scene.add(camera)

document.getElementById("scene").appendChild(renderer.domElement);
animate();