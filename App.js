import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createRoot } from 'react-dom/client'
import { useGLTF } from "@react-three/drei";
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { SphereGeometry } from 'three';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Model } from './Model'

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }


// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x0000ff);
// renderer.setPixelRatio(window.devicePixelRatio);

// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(4, 5, 11);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.minDistance = 5;
// controls.maxDistance = 30;
// controls.minPolarAngle = 0.5;
// controls.maxPolarAngle = 1.5;
// controls.autoRotate = false;
// controls.target = new THREE.Vector3(0, 1, 0);
// controls.update();

// const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// groundGeometry.rotateX(-Math.PI / 2);
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color: 0x555555,
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.castShadow = false;
// groundMesh.receiveShadow = true;
// scene.add(groundMesh);

// const spotLight = new THREE.SpotLight(0xffffff,  3, 100, 0.22, 1);
// spotLight.position.set(0, 25, 0);
// spotLight.castShadow = true;
// spotLight.shadow.bias = -0.0001;
// scene.add(spotLight);

// const loader = new GLTFLoader().setPath('./assets/');
// loader.load('suzanne.gltf', (gltf) => {
//   const mesh = gltf.scene;

//   mesh.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });

//   mesh.position.set(0, 1.05, -1);
//   scene.add(mesh);

//   document.getElementById('progress-container').style.display = 'none';
// }, ( xhr ) => {
//   document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
// },);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();

export default function App() {
  return (
    <View style={styles.container}>
      <Text id="progress-container" >TEST</Text>
      {/* <StatusBar style="auto" /> */}
      {/* <Test /> */}
      <Model />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const Test = () => {
//   return( <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>)
// }


// const Test = () => {
//   return( <Canvas>
//     <mesh>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[1.2, 0, 0]} />
//     </mesh>
//   </Canvas>)  
// }