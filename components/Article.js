import { View, StyleSheet, Text, Image, Animated, FlatList,ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import archers from '../Json/Archers';

const Article = ({ nom, pays, discipline, description, image, index }) => {
    const isVisible = true


    return (
            <View   
                style={[isVisible ? { transform: [{ translateX: 0 }] } : { transform: [{ translateX: 1400 }] }, styles.row, styles.container, styles.shadowProp ]}
            >
                <Image style={styles.image} source={image} />
                <View style={ styles.secondContainer}>
                    <Text>{discipline}</Text>
                    <Text style={styles.text}>{pays} {nom}</Text>
                    <Text style={styles.paragraph}>{description}</Text>
                </View>
            </View>
    );
};


export const ArticleList = () => {


    return (
        <View>
            {
                archers ? archers.map((archer, index) => (
                    <Article nom={archer.nom} pays={archer.pays} description={archer.description} discipline={archer.discipline} image={archer.image} index={index} key={index} />
                )) : null
            }
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        borderRadius: "1rem",
        overflow: 'hidden',
        marginBottom: "1rem"
    },
    FlatList: {
        alignItems: 'center'
    },
    row: {
        flexDirection: "row",
        gap: "1%",
    },
    secondContainer: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
    },
    textContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems:"center",
        gap: "0.25rem"
    },
    text: {
      cursor: 'pointer',
      fontWeight: 'bold', 
    },
    paragraph: {
        maxWidth: "45%"
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    image : {
        height: "100%",
        width: "40%"
    },
    hidden: {

    }
  });

export default Article