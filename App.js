import { StyleSheet, Text, View } from 'react-native';
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
    <View style={{width: '100vw', header: '200vh'}}>
      <Header />
      <View style={[style.padding, style.flexDirection]}>
        <Model />
        <View style={style.flexColumn}>
        {
          archers ? archers.map((archer, index) => (
              <Article name={archer.nom} country={archer.pays} description={archer.description} disciplin={archer.discipline} image={archer.image} key={index} />
          )) : null
        }
        </View>

      <View >
        <Model scrollPosition={scrollPosition} />
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
  },
  flexColumn: {
    flexDirection: 'column',
    gap:'1rem'
  }
})

});

const Model = ({ scrollPosition }) => {
  return (
    <Canvas style={{width: '100vw', height: '100vh', position: 'absolute', overflow: 'hidden'}}>
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

  return <primitive object={gltf.scene} position={[0, 0, 0]} scale={2}
  />;
}