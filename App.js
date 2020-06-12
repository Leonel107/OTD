import React from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RootScreen from './src/screens/root'

export default function App() {
    return (
      <NavigationContainer>
        <RootScreen/>
      
      </NavigationContainer>
    );
  }

