import React from 'react';
import { View, Text, StyleSheet } from "react-native";

function Layout (props){
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },

})

export default Layout;