import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
const friends = [{name:'Deepu'},
{name:'debajyoti'},{name:'shubhra'}, {name:'Renuka'}]

    return (
    <FlatList 
    horizontal
    keyExtractor={(friend)=> friend.name}
    data={friends}
    renderItem={({item})=> 
    <Text style={styleSheet.textStyle}>{item.name}</Text>}
    />
    );
}

const styleSheet = StyleSheet.create({
    textStyle:{
        padding:10
    }
});

export default ListScreen;