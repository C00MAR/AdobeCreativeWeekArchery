import { StyleSheet, View, Pressable, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import model from './assets/adobe_cible.gltf';
import classicBow from './assets/adobe_arc_classique.gltf';
import shortBow from './assets/adobe_arc_court.gltf';
import longBow from './assets/adobe_arc_long.gltf';
import sling from './assets/adobe_fronde.gltf';
import Header from './components/Header';
import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ArticleList } from './components/Article';


export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scaleRatio, setScaleRation] = useState(3);
  const [srollDestination, setScrolDestionation] = useState(0)
  const [iconeIndex, setIconeIndex] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset - window.pageYOffset * 0.4;
      setScrollPosition(position);
      
      let currentScroll = window.pageYOffset;
      let ratio = 1 / currentScroll * 300
      setScrolDestionation(currentScroll);

      setScaleRation(ratio)
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scaleRatio]);

  const changeIcon = (count) => {
    if (iconeIndex > 5) return setIconeIndex(0)
    console.log(iconeIndex)

    setIconeIndex(count === 1 ? iconeIndex + 1 : iconeIndex - 1)
  }

  return (
    <View style={{minWidth: '100vw', miHeight: '100vh'}}>
      <Header />
      <View style={[style.padding, style.flexColumn]}>
        <View style={style.buttonContainer}>
          <Pressable  style={style.button}  onPress={() => changeIcon(0)}> <Text style={style.buttonText}> {'<'}- </Text> </Pressable>
          <Pressable  style={style.button} onPress={() => changeIcon(1)}><Text style={style.buttonText}> -{'>'} </Text></Pressable>
        </View>
        <Model scrollPosition={scrollPosition} scaleRatio={scaleRatio} setScaleRation={setScaleRation} iconeIndex={iconeIndex}/>
        <ArticleList />
      </View>
    </View>
  );
}

const Model = ({ scrollPosition, scaleRatio, setScaleRation, iconeIndex }) => {
  return (
    <Canvas style={style.canvas}>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
      <MyModel scrollPosition={scrollPosition} scaleRatio={scaleRatio} setScaleRation={setScaleRation} iconeIndex={iconeIndex} />
    </Canvas>
  );
};

function MyModel({ scrollPosition ,scaleRatio , setScaleRation,iconeIndex }) {
  const models = ChangeModel(iconeIndex)
  const gltf = useLoader(GLTFLoader, models.model);

  const rotation = scrollPosition * Math.PI / 360;
  gltf.scene.rotation.y = rotation;
  setScaleRation(scaleRatio > 3 ? 3 : scaleRatio < 0.4 ? 0.4 : scaleRatio)

  return <primitive object={gltf.scene} position={[models.position.x, models.position.y, models.position.z]} scale={iconeIndex != 4 ?  scaleRatio : scaleRatio * 0.8}
  />;
}


function ChangeModel(index) {
  switch (index) {
    case 1:
      return {model: model, position: {x: 0, y: 0, z: 0}}
    case 2:
      return {model: classicBow, position: {x: 0, y: -1.5, z: 0}}
    case 3:
      return {model: shortBow, position: {x: 0, y: 0, z: 0}}
    case 4:
      return {model: longBow, position: {x: 0, y: -2.2, z: 0}}
    case 5:
      return {model: sling, position: {x: 0, y: 0, z: 0}}
    default:
      return {model: model, position: {x: 0, y: 0, z: 0}}
  }
}

const style = StyleSheet.create({
  flexColumn: {
    flexDirection: 'column',
    gap:'2rem',
    paddingBottom: '2rem',
    alignItems: 'center'
  },
  canvas: {
    position: 'sticky',
    zIndex: -50,
    left: 0,
    top: 0,
    height: "100vh",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    width: '4rem',
    height: '4rem',
    backgroundColor: '#000000',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    position: 'sticky',
    zIndex: 50,
    left: 0,
    top: "5rem",
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  buttonText : {
    color: '#ffffff'
  }
})