import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Layout from './Layout'
import Titulo from '../Components/Titulo';

function Menu (props){
    return (
        <Layout >
            <Titulo title = "Menu">
            </Titulo>
        </Layout>
    );
} 

export default Menu;