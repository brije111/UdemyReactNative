import { useState, useEffect } from "react";
import { getCurrentLocation } from '../components/Utils';
import axios from '../api/google';

export default () => {
    const DEFAULT_LOCATION = '26.8758165,81.0202525';
    const [results, setresults] = useState([]);
    const [location, setlocation] = useState(DEFAULT_LOCATION);
    const [error, seterror] = useState('');
    //Alert.alert('Something went wrong');
    
    const searchApi = async (searchTerm) => {
        try{
            const response = await axios.get('/nearbysearch/json', {
                params:{
                    location:location,
                    radius:1000,
                    type:'restaurant',
                    keyword:searchTerm,
                    key:'AIzaSyCxA-p-HoKomogx2Z92AmRQaugS-9vCwgU'
                }
            });
            console.log(response);
            //update state only if status is OK
            if(response.data.status === "OK")
                setresults(response.data.results);
        }catch(err){
            seterror('Something went wrong');
        }
    }

    useEffect(()=>{
        getCurrentLocation((response)=> {
            console.log(response);
            if(!response.errorMessage)
                setlocation(`${response.location.coords.latitude},${response.location.coords.longitude}`)
            else error('Something went wrong');
        });
    }, []);

    return [searchApi, results, error];
}