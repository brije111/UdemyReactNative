import React from'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';


const PlaceSearch = ({searchTerm, onChangeText, onSubmitEditing}) => {
    
    return <View style={styles.backgroundStyle}>
        <Feather 
            name='search' 
            size={32}
            style={styles.icon}
        />
        <TextInput 
            autoCorrect={false}
            placeholder="Type here..."
            style={styles.textInputStyle} 
            onChangeText={(text)=>onChangeText(text)}
            onSubmitEditing={onSubmitEditing}
            value={searchTerm}
            />
    </View>
}

const styles = StyleSheet.create({
    textInputStyle:{
        height:40,
        marginStart:5,
        fontSize:20,
        flex:1
    },
    backgroundStyle:{
        margin:10,
        padding:5,
        flexDirection:'row',
        backgroundColor:'#EEEEEE',
        alignItems:"center"
    }
});

export default PlaceSearch;