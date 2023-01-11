import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export function MapComponent() {
    const [origin, setOrigin] = React.useState({
        latitude: -34.802243,
        longitude: -55.900519,
    });

    React.useEffect(() => {
        getLocationPermission();
    }, [])

    async function getLocationPermission() {
        let { status } = await Location.
        requestForegroundPermissionsAsync();
        if(status !== 'granted') {
            alert('Permiso Denegado');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
        setOrigin(current);
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.08,
                    longitudeDelta: 0.04,
                }}
            >
            <Marker
                draggable
                coordinate={origin}
                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
            />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    map: {
        width: '100%',
        height: '100%',
    }
});