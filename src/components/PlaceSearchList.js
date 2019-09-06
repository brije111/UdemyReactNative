import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PlaceSearchListItem from './PlaceSearchListItem';

const PlaceSearchList = ({results}) => {
    console.log(results);
    return <View>
        {results.map(item => <PlaceSearchListItem place={item} />)}
    </View>
}

const style = StyleSheet.create({});

export default PlaceSearchList;