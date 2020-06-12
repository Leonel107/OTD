import React from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Boton(){
    return(
        <View >
            <TouchableHighlight  style = {styles.boton}>
                <Text style = {styles.textoboton}> Plaza Vea </Text>
            </TouchableHighlight>
        </View>
    )
}


const styles = StyleSheet.create({
    boton: {
        width: 150,
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#676767',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1
    },
    textoboton: {
        color: 'white',
        fontSize: 20
    }
})

export default Boton;