import React, {Component} from 'react'
import {View, StyleSheet, Dimensions, ScrollView, Text,Image } from 'react-native'
import slides4 from '../../images/slides4.png'
import slides3 from '../../images/slides3.png'
import slides2 from '../../images/slides2.png'
import slides1 from '../../images/slides1.png'
const width = Dimensions.get("window").width;

const width1 = width*0.8;
const height1 = width*1.3;
const index = [ 1, 2, 3 ,4];
class SlideScreen extends Component {
    state = {
        active: 0
    }
    change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width); 
        if(slide !== this.state.active) {
            this.setState({active: slide});
        }
    }
    render() {
        return (
            <View style={styles.container}>   
                <View style={styles.scroll}>
                   
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        onScroll={this.change}
                        showsHorizontalScrollIndicator={false}
                        style={{width: width1,height:height1, } }
                        >   
                        <View style={{width: width1, 
                                height: height1,
                                }}>

                            <Image
                                source={slides1}
                                style={{width: width1*0.8, 
                                    height: height1*0.9,
                                    left: 30,
                                    top: 30,
                                    }}
                            />
                        </View>
                        <View style={{width: width1, 
                                height: height1,
                                }}>

                            <Image
                                source={slides2}
                                style={{width: width1*0.8, 
                                    height: height1*0.9,
                                    left: 30,
                                    top: 30,
                                    }}
                            />
                        </View>
                        <View style={{width: width1, 
                                height: height1,
                                }}>

                            <Image
                                source={slides3}
                                style={{width: width1*0.8, 
                                    height: height1*0.9,
                                    left: 30,
                                    top: 30,
                                    }}
                            />
                        </View>
                        <View style={{width: width1, 
                                height: height1,
                                }}>
                            <Image
                                source={slides4}
                                style={{width: width1*0.8, 
                                    height: height1*0.9,
                                    left: 30,
                                    top: 30,
                                    }}
                            />
                        </View>
                    </ScrollView>
                    <View style={styles.Circle}>
                        {index.map( (i,k)=> (

                            <View key={k}  style={k==this.state.active ? styles.CirclecolorACTIVE : styles.Circlecolor} >

                            </View>
                        ) )}
                    </View>
                </View>
                <View>
                </View>
            </View>
        );
    }
}

export default SlideScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4ffca1',
        alignItems: 'center',
        justifyContent: 'center',
    },

    scroll: {

        backgroundColor: '#ffff',
        top: 10,
        width: width1,
        height: height1,
        borderRadius: 30,
    },
    Circle: {
        // position: 'absolute',
        bottom: 10,
        height: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    Circlecolor: {
        width: 8,
        height: 8,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#e3e3e3",
    },
    CirclecolorACTIVE: {
        width: 8,
        height: 8,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#4ffca1",
    }
});


{/* <ScrollView
horizontal={true}
style={styles.scroll}
>   


<Image
    source={slides4}
    style={{width: 50, height: 50,}}
/>



<View style={{width: width}}>
    
</View>
<View style={{width: width}}>
    <Text>a1112323sdas</Text>
</View>

</ScrollView> */}