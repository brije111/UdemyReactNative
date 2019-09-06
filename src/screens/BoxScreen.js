import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={style.parent}>
        <Text style={style.childOne}>box screen 1</Text>
        <Text style={style.childTwo}>box screen 2</Text>
        <Text style={style.childThree}>box screen 3</Text>
    </View>
}  

const style = StyleSheet.create({
    parent:{
        height:400,
        borderWidth:5,
        borderColor:'#548584',
        flexDirection:'column',
        alignItems:'center'
    },
    childOne:{
        borderWidth:5,
        borderColor:'#aa3344',
        position:'absolute',
        alignSelf:'flex-end'
    },
    childTwo:{
        borderWidth:5,
        borderColor:'#aa3344',
        alignSelf:'flex-start'
    },
    childThree:{
        borderWidth:5,
        borderColor:'#aa3344'
    }
})

export default BoxScreen;