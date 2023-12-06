import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { Canvas, useLoader  } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import model from './assets/arc_long.gltf'
import Header from './components/Header';
import Hero from './components/Hero';
import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function App() {
  return (
    <View style={{width: '100vw'}}>
      <Header />
      <View style={[style.padding, style.flexDirection]}>
        <Hero />
        <Model />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  padding : {
    paddingHorizontal: '2rem'
  },
  flex: {
    flexDirection: 'column',
    gap:'5rem'
  }
})

const Model = () => {

  return (
      <Canvas style={{width: '100%', height: '50vh'}}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MyModel />
      </Canvas>
  )
}

function MyModel() {
  const gltf = useLoader(GLTFLoader, model)
  return <primitive object={gltf.scene}  position={[0, -10, -20]}/>;
}