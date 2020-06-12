import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScene from './splash'
import LoginScreen from './login/Login'
import IngresarScreen from './login/ingresar'
import RegistroScreen from './login/registro'
import SlideScreen from './home/slides'
import OlvidarScreen from './login/olvidasteclave'
import Restablece1Screen from './login/resclave1'
import RestableceS2creen from './login/resclave2'
import TabsScreen from './tabs/tabs' //Pantalla del Tab
import Home1Screen from './home/Home1' // Pantalla del Home 1
import Home2Screen from './home/Home2' // Pantalla del Home 2
import MisListasScreen from './milista/MisListas' // Pantalla de MisListas
import MisReservasScreen from './mireserva/MisReservas' // Pantalla de MisReservas
import MenuScreen from './menu/Menu' // Pantalla de mi Menu


const Stack = createStackNavigator();

const RootScreen = ({navigation}) => (
    <Stack.Navigator initialRouteName="Splash" 
        screenOptions={{
        headerShown: false
        }}
    >
        <Stack.Screen name="Splash" component={SplashScene} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Ingresar" component={IngresarScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Slides" component={SlideScreen} />
        <Stack.Screen name="Olvidar" component={OlvidarScreen} />
        <Stack.Screen name="Clave1" component={Restablece1Screen} />
        <Stack.Screen name="Clave2" component={RestableceS2creen} />
        <Stack.Screen name="Tabs" component={TabsScreen} />
        <Stack.Screen name="Home1" component={Home1Screen} />
        <Stack.Screen name="Home2" component={Home2Screen} />

    </Stack.Navigator>

)

export default RootScreen;