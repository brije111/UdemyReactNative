import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const PlaceSearchListItem = ({place}) => {
    console.log(place.photos[0].photo_reference);
    return <View style={style.view}>
        <Image 
            style={style.image} 
            source={{uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=AIzaSyCxA-p-HoKomogx2Z92AmRQaugS-9vCwgU`}}
        />
        <Text style={style.title}>
            {place.name}
        </Text>
        <FontAwesome 
            name='star' 
            size={32}
            style={style.icon}
        />
    </View>
}

const style = StyleSheet.create({
    image:{
        height:200,
        width:300,
        alignSelf:"center"
    },
    title:{
        fontSize:20
    },
    icon:{
        color:'yellow'
    },
    view:{
        padding:10
    }
});

export default PlaceSearchListItem;