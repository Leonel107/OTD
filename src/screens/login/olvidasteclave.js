import React,{Component} from 'react';
import { Text, FlatList,Dimensions,TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import Logo2 from '../../images/logo2.png'
import { TextInput } from 'react-native-gesture-handler';

class OlvidarScreen extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.container3}>
                    <View style={styles.header}>

                        <Text>Mit'awi</Text>
                        <Text>Mi tiempo, Mi espacio</Text>
                        <Image source={Logo2} style={{width:150,height:150,}}/>
                    </View>
                </View> 
                <View style={styles.container2}>

                    <View style={styles.footer}>
                        <Text style={styles.titulo}  >
                            ¿olvidaste tu clave?
                        </Text>
                        <TextInput
                            placeholder='Ingresa tu número celular'
                            style={styles.textInput}
                            
                        ></TextInput>
                        <Text style={styles.recordatorio}>*Se enviará un código por sms</Text>
                        <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Clave1')}
                                style={[styles.signIn, {
                                    backgroundColor: '#4ffca1',
                                }]}
                            >
                                <Text style={{color: '#575855'}}>ENVIAR</Text>
                        </TouchableOpacity>
                     
                    </View>
                </View>
          </View>
        );
    }
}
export default OlvidarScreen;


const styles = StyleSheet.create({
    container: {
        
        flex: 1,
    },
    container2: {
        backgroundColor: '#4ffca1',
        flex: 2,
    },
    container3: {
        backgroundColor: '#FFF',
      
        flex: 2,
    },
    header: {
        flex: 1.5,
        backgroundColor: '#4ffca1',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 120,
       
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 120,
        paddingTop: 30,
        paddingHorizontal: 100,
        
    },
    recordatorio: {
        fontSize: 10,
        color: '#919191',
        justifyContent: 'center',
        left: 25,
        top: -10,
        
    },
    titulo: {
        fontSize: 20,
        color: '#575855',
        justifyContent: 'center',
        left: 25,
        top: -10,
        marginBottom: 10,
    },
    signIn: {
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    
        right: -60,
        
    },
    textInput: {
        borderColor: '#575855',
        borderWidth: 1,
        height: 40,
        borderRadius: 60,
        padding: 10,
        margin: 10,
        color: '#05375a',
    },
});