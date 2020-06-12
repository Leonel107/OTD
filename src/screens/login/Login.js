import React,{Component} from 'react';
import { Text, FlatList,Dimensions,TouchableOpacity, View, Image, StyleSheet, ScrollView } from 'react-native'
import Logo2 from '../../images/logo2.png'

class LoginScreen extends Component {
    render() {

        return (
          <View style={styles.container}>
       
            <Text style={{marginTop: -100, marginBottom: 4, color:'#575855'}}>Mit'awi</Text>
            <Text style={{marginBottom: 100, color:'#575855'}}>Mi tiempo, Mi espacio</Text>
            <Image source={Logo2} style={{marginTop: 1}}/>
    
            <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Ingresar')}
                    style={[styles.signIn, {
                        borderColor: '#000000',
                        backgroundColor: '#575855',
                        borderWidth: 1,
                        marginTop: 100
                    }]}
                >
                    <Text style={{
                        color: '#ffff'
                    }}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
            <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Registro')}
                    style={[styles.signIn, {
                        borderColor: '#000000',
                        backgroundColor: '#ffff',
                        borderWidth: 1,
                        marginTop: 20 
                    }]}
                >
                    <Text style={{
                        color: '#575855'
                    }}>REGISTRARSE</Text>
                </TouchableOpacity>
          </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4ffca1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animar: {
        
        alignContent: 'center',
    },
    signIn: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
});