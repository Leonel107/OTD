import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";


function Titulo (props){
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
        paddingBottom: 20,
        backgroundColor: '#4FFCA1'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Titulo;