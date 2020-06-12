import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Layout from './Layout'
import Titulo from '../Components/Titulo';

function MisReservas (props){
    return (
        <Layout >
            <Titulo title = "Mis Reservas">
            </Titulo>
        </Layout>
    );
} 

export default MisReservas;