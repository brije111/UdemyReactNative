import React from 'react';
import {View, StyleSheet} from 'react-native';

const ColorFrame = ({bgColor}) => {
    return <View style={{backgroundColor:bgColor, height:100, width:100}}></View>
}

const style = StyleSheet.create({
    frame:{
        
    }
})

export default ColorFrame;