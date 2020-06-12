import React,{Component} from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from "react-native";
import Layout from '../Layout'
import Titulo from '../../Componentes/Titulo'
import Pregunta from '../../Componentes/Pregunta'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home1 extends Component{
    render () {
        return (
        <Layout >
            <Titulo title = "Mit'awi">
            </Titulo>
            <Pregunta title = "¿A donde quieres ir a comprar?">
            </Pregunta>
            <TouchableOpacity
             style = {styles.boton}
             onPress = {() => this.props.navigation.navigate('Home2')}>
                <Text style = {styles.textoboton}> Plaza VEA </Text>
            </TouchableOpacity>
        </Layout>
        );
    }
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

export default Home1;