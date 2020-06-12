import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Layout from './Layout'
import Titulo from '../Components/Titulo';
import Pregunta from '../Components/Pregunta';
import Boton from '../Components/Boton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home2 from './Home2'

function Home (props){
    return (
        <Layout >
            <Titulo title = "Mit'awi">
            </Titulo>
            <Pregunta title = "¿A donde quieres ir a comprar?">
            </Pregunta>
            <Boton>
            </Boton>
        </Layout>
    );
} 

const AppStackNavigator = createStackNavigator({
    home: Home,
    home2: Home2
});


export default Home;