import React from 'react';
import { View, Text, StyleSheet } from "react-native";

function Pregunta (props){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 25,
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
    }
})

export default Pregunta;