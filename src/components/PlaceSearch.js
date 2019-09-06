import React, { useState } from'react';
import {View, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Axios from 'axios';

const PlaceSearch = () => {
    const [searchTerm, setsearchTerm] = useState('');
    const [results, setresults] = useState([]);

    // const searchApi = async () => {
    //     const response = await Axios.get('/nearbysearch/json', {
    //         params:{
    //             location:'26.8758165,81.0202525',
    //             radius:1000,
    //             type:'restaurant',
    //             keyword:'restaurants',
    //             key:'AIzaSyCxA-p-HoKomogx2Z92AmRQaugS-9vCwgU'
    //         }
    //     });
    //     setresults(response.data);
    // }

    return <View>
        <SearchBar placeholder='Type here...'
            onChangeText={(search)=> {
                setsearchTerm(search)
            }}
            // onSubmitEditing={searchApi}
            value={searchTerm}
        />
        <Text>{results}</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default PlaceSearch;