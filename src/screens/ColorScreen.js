import React, { useState } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ColorFrame from '../components/ColorFrame';
import { Button } from 'react-native-elements';

const ColorScreen = () => {
    const initialState = [];
    const [colors, setcolors] = useState(initialState);

    return <View>
        <Button 
            title='add color' 
            onPress={()=>{
                const arr = [...colors];
                arr.push(`rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0, 255)})`);
                setcolors(arr);
            }}
        />
        {colors.map(item => 
            <ColorFrame bgColor = {item}/>
        )}
    </View>
}

function onAddColorClicked(){
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const styles = StyleSheet.create({

})

export default ColorScreen;