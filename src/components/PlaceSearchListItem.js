import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlaceSearchListItem = ({place}) => {
    console.log(place);
    return <View>
        <Text>{place.id}</Text>
    </View>
}

const style = StyleSheet.create({});

export default PlaceSearchListItem;