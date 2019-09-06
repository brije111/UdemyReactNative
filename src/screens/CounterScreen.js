import React, { useReducer } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

const initialState = {count:0}

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, count:state.count+1}
        case 'DECREMENT':
            return {...state, count:state.count-1}
        default:
            return state
    }
}

const CounterScreen = () => {
const [state, dispatch] = useReducer(reducer, initialState);
    return <View>
        <Button title='increment' onPress={()=> dispatch({type:'INCREMENT'})}/>
        <Text>{`Current Count: ${state.count}`}</Text>
        <Button title='decrement' onPress={()=> dispatch({type:'DECREMENT'})} />
    </View>
}

const style = StyleSheet.create({});

export default CounterScreen;