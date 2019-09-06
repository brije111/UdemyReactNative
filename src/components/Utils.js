import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

export const getCurrentLocation = async (callback) => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
        callback({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
    } else {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            callback({
                errorMessage: 'Permission to access location was denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        callback({ location });
    }
}
