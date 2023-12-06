import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import model from './assets/adobe_arc_classique.gltf';
import Header from './components/Header';
import Hero from './components/Hero';
import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Article from './components/Article';
import archers from './Json/Archers';


export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <View style={{minWidth: '100vw', miHeight: '100vh'}}>
      <Header />
      <View style={[style.padding, style.flexColumn]}>
        <Model scrollPosition={scrollPosition} />
        {
          archers ? archers.map((archer, index) => (
              <Article name={archer.nom} country={archer.pays} description={archer.description} disciplin={archer.discipline} image={archer.image} key={index} />
          )) : null
        }
      </View>
    </View>
  );
}


const Model = ({ scrollPosition }) => {
  return (
    <Canvas style={style.canvas}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MyModel scrollPosition={scrollPosition} />
    </Canvas>
  );
};

function MyModel({ scrollPosition }) {
  const gltf = useLoader(GLTFLoader, model);

  const rotation = scrollPosition * Math.PI / 360;
  gltf.scene.rotation.y = rotation;

  return <primitive object={gltf.scene} position={[-0.5, -2.2, 0]} scale={3.5}
  />;
}

const style = StyleSheet.create({
  padding : {
    paddingHorizontal: '2rem'
  },
  flexColumn: {
    flexDirection: 'column',
    gap:'2rem',
    paddingBottom: '2rem'

  },
  canvas: {
    position: 'sticky',
    zIndex: 50,
    left: 0,
    top: 0,
    height: "100vh",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
})