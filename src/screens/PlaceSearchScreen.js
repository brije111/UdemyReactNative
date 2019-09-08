import React, { useState } from'react';
import {View, StyleSheet, Alert} from 'react-native';
import PlaceSearch from '../components/PlaceSearch';
import axios from '../api/google';
import PlaceSearchList from '../components/PlaceSearchList';
import { getCurrentLocation } from '../components/Utils';

const PlaceSearchScreen = () => {
    const DEFAULT_LOCATION = '26.8758165,81.0202525';
    const [searchTerm, setsearchTerm] = useState('');
    const [results, setresults] = useState([]);
    const [location, setlocation] = useState(DEFAULT_LOCATION);
    //Alert.alert('Something went wrong');
    if(location===DEFAULT_LOCATION){
        getCurrentLocation((response)=> {
            console.log(response);
            if(!response.errorMessage)
                setlocation(`${response.location.coords.latitude},${response.location.coords.longitude}`)
            else Alert.alert('Something went wrong');
        });
    }

    const searchApi = async () => {
        try{
            const response = await axios.get('/nearbysearch/json', {
                params:{
                    location:location,
                    radius:5000,
                    keyword:searchTerm,
                    key:'AIzaSyCxA-p-HoKomogx2Z92AmRQaugS-9vCwgU'
                }
            });
            console.log(response);
            //update state only if status is OK
            if(response.data.status === "OK")
                setresults(response.data.results);
        }catch(err){
            Alert.alert('Something went wrong');
        }
    }

    return <View>
        <PlaceSearch 
            searchTerm={searchTerm}
            onChangeText={text=>setsearchTerm(text)}
            onSubmitEditing={searchApi}
            />
        <PlaceSearchList results={results}/>
    </View>
}

const styles = StyleSheet.create({

});

export default PlaceSearchScreen;