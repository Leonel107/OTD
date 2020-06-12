import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeLayout from '../home/Home1';
import MisListasLayout from '../milista/MisListas';
import MisReservasLayout from '../mireserva/MisReservas';
import MenuLayout from '../menu/Menu'


//Layout de Home
function Home() {
  return (
    <HomeLayout />
  );
}

//Layout de Mis Listas
function MisListas() {
  return (
    <MisListasLayout />
  );
}
// Layout de Mis Reservas
function MisReservas() {
  return (
    <MisReservasLayout />
  );
}

// Layout de Mis Reservas
function Menu() {
  return (
    <MenuLayout />
  );
}


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFFFFF"
      inactiveColor="#676767"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarColor: '#4FFCA1',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MisListas"
        component={MisListas}
        options={{
          tabBarColor: '#4FFCA1',
          tabBarLabel: 'Mis Listas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MisResevas"
        component={MisReservas}
        options={{
          tabBarColor: '#4FFCA1',
          tabBarLabel: 'Mis Reservas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarColor: '#4FFCA1',
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <MyTabs />
  );
}