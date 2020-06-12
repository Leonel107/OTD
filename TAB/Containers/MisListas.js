import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Layout from './Layout'
import Titulo from '../Components/Titulo';

function MisListas (props){
    return (
        <Layout >
            <Titulo title = "Mis Listas">
            </Titulo>
        </Layout>
    );
} 

export default MisListas;