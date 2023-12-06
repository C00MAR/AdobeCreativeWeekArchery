import { View,StyleSheet, Text, Image } from 'react-native';


const Article = ({name, country, disciplin, description, image}) => {

    return(
        <View style={[styles.shadowProp, styles.container ]}>
            <Image 
                style={styles.image}
                source={image}
            />
            <View style={ styles.secondContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{country} {name}</Text>
                </View>
                <Text>{disciplin}</Text>
                <Text style={styles.paragraph}>{description}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        borderRadius: "1rem",
        flexDirection: "row",
        gap: "1%",
        overflow: 'hidden',
        maxWidth: "80%",
    },
    secondContainer: {
        flexDirection: "column",
        padding: "1rem"
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
    }
  });

export default Article