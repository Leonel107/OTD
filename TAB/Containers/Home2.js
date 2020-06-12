import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Layout from './Layout'
import Titulo from '../Components/Titulo';
import Pregunta from '../Components/Pregunta';
import { createStackNavigator } from '@react-navigation/stack';

function Home2 (props){
    return (
        <Layout >
            <Titulo title = "Realizar la reserva">
            </Titulo>
            <Pregunta title = "Comencemos a realizar tu reserva">
            </Pregunta>
        </Layout>
    );
} 

export default Home2;