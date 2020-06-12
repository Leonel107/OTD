import React,{Component} from 'react';
import { Text, TextInput,TouchableOpacity, View, StyleSheet } from 'react-native'
import Logo2 from '../../images/logo2.png'
class RegistroScreen extends Component {
    render() {

        return (
          <View style={styles.container}>
       
            <Text>ÚNETE</Text>
        
            <TextInput
                    placeholder='Nombres'
                    style={styles.textInput}
                    
                ></TextInput>
            <TextInput
                    placeholder='Apellidos'
                    style={styles.textInput}
                    
                ></TextInput>
            <TextInput
                    placeholder='N° DNI'
                    style={styles.textInput}
                    
                ></TextInput>
            <TextInput
                    placeholder='N° de celular'
                    style={styles.textInput}
                    
                ></TextInput>
            <TextInput
                    placeholder='Crear clave*'
                    style={styles.textInput}
                    
                ></TextInput>
            <TextInput
                    placeholder='Confirmar clave*'
                    style={styles.textInput}
                    
                ></TextInput>
            <TextInput
                    placeholder='Usuario'
                    style={styles.textInput}
                    
                ></TextInput>
                <Text>Acepto términos y condiciones</Text>
            <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('')}
                        style={[styles.signIn, {
                            backgroundColor: '#4ffca1',
                        }]}
                    >
                <Text style={{color: '#575855'}}>REGISTRARSE</Text>
            </TouchableOpacity>
          </View>
        );
    }
}
export default RegistroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animar: {
        
        alignContent: 'center',
    },
    signIn: {
        width: '60%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    textInput: {
        width: '80%',
        backgroundColor: '#f0f0f0',
        height: 40,
        borderRadius: 60,
        padding: 10,
        margin: 10,
        color: '#4ffca1',
    },
});