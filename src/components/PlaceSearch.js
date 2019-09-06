import React, { useState } from'react';
import {Text, View, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from '../api/google';
import PlaceSearchList from '../components/PlaceSearchList';
import { getCurrentLocation } from './Utils';


const PlaceSearch = () => {
    const [searchTerm, setsearchTerm] = useState('');
    const [results, setresults] = useState([]);

    // getCurrentLocation((response)=> {
    //     console.log(response);
    // });

    const searchApi = async () => {
        const response = await axios.get('/nearbysearch/json', {
            params:{
                location:'26.8758165,81.0202525',
                radius:1000,
                type:'restaurant',
                keyword:searchTerm,
                key:'AIzaSyCxA-p-HoKomogx2Z92AmRQaugS-9vCwgU'
            }
        });

        //update state only if status is OK
        if(response.data.status === "OK")
            setresults(response.data.results);
    }

    return <View>
        <SearchBar placeholder='Type here...'
            onChangeText={(search)=> {
                setsearchTerm(search)
            }}
            onSubmitEditing={searchApi}
            value={searchTerm}
            lightTheme='true'
        />
        <PlaceSearchList results={results}/>
    </View>
}

const styles = StyleSheet.create({

});

export default PlaceSearch;