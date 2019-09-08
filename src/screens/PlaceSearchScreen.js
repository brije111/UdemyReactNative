import React, { useState } from'react';
import {View, StyleSheet, Text} from 'react-native';
import PlaceSearch from '../components/PlaceSearch';
import PlaceSearchList from '../components/PlaceSearchList';
import useResults from "../hooks/useResults";

const PlaceSearchScreen = () => {
    const [searchTerm, setsearchTerm] = useState('');
    const [searchApi, results, error] = useResults();

    return <View>
        <PlaceSearch 
            searchTerm={searchTerm}
            onChangeText={text=>setsearchTerm(text)}
            onSubmitEditing={()=>searchApi(searchTerm)}
            />
        {error?<Text>{error}</Text>:null}
        <PlaceSearchList results={results}/>
    </View>
}

const styles = StyleSheet.create({

});

export default PlaceSearchScreen;