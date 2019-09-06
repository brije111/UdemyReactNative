import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';

const HomeScreen = ({navigation}) =>{

    const navigateActionColor = NavigationActions.navigate({
        routeName:'Color'
    });
    const navigateActionList = NavigationActions.navigate({
        routeName:'List'
    });
    const navigateActionCounter = NavigationActions.navigate({
        routeName:'Counter'
    });
    const navigateActionBox = NavigationActions.navigate({
        routeName:'Box'
    })
    return <View style={styles.parent}>
        <Button 
            title='go to list demo' 
            onPress={()=>navigation.dispatch(navigateActionList)}
        />
        <Button 
            title='go to color screen' 
            onPress={()=>navigation.dispatch(navigateActionColor)}
        />
        <Button
            title='go to counter demo' 
            onPress = {()=> navigation.dispatch(navigateActionCounter)}
        />
        <Button
            title='go to box demo'
            onPress={()=>navigation.dispatch(navigateActionBox)}
        />
    </View>
}

const styles = StyleSheet.create({
    parent:{
        height:500,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-evenly'
    }
});

export default HomeScreen;