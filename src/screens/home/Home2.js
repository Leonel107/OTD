import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Layout from '../Layout'
import Titulo from '../../Componentes/Titulo'
import Pregunta from '../../Componentes/Pregunta';

class Home2 extends Component {
    render() {
        return (
        <Layout >
            <Titulo title = "Realizar la reserva">
            </Titulo>
            <Pregunta title = "Comencemos a realizar tu reserva">
            </Pregunta>
        </Layout>
        );
    }
}


export default Home2;