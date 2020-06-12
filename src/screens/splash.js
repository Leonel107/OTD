import React, {Component} from 'react'
import {View, StyleSheet, Image, Animated } from 'react-native'
import Logo from '../images/logomitawi1.png'
import circle1 from '../images/circle1.png'
import circle2 from '../images/circle2.png'
import circle3 from '../images/circle3.png'

class SplashScene extends Component {
    
    constructor() {
        super()
        this.springValue = new Animated.Value(0.3)
  
        
    };
    // fadeIn= () => {
    //     // Will change fadeAnim value to 1 in 5 seconds
    //     Animated.timing(this.state.fadeAnim, {
    //       toValue: 1,
    //       duration: 2000
    //     }).start();
    //   };
    
    spring() {
    this.springValue.setValue(0.6)
    // const { logso} = this.state;
    Animated.spring(
        this.springValue,
        {
        toValue: 1,
        friction: 2,
        }
    ).start();
    }

    componentDidMount() {
        this.spring();

        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 1000);
        // Animated.timing(this.state.fadeAnim,     {
        //     toValue: 1,
        //     duration: 1000
        //   }).start();
        // // this.fadeIn
       
        
    }
    render() {

        return (
          <View style={styles.container}>
            <Image source={circle3} style={{position: 'absolute', width: 260, height: 260}}/>
            <Image source={circle2} style={{position: 'absolute', width: 220, height: 220}}/>
            <Image source={circle1} style={{position: 'absolute', width: 200, height: 200}}/>
            <Animated.Image source={Logo}  style={{position: 'absolute', width: 170, height: 170, transform: [{scale: this.springValue}] }}>


              </Animated.Image>
              {/* <Animated.Image source={circle2}  style={{ width: 200, height: 200, transform: [{scale: this.springValue}] }}/> */}
          </View>
        );
    }
  }

export default SplashScene;


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
});
