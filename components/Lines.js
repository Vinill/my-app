import React from 'react';
import { View, Text } from 'react-native';

export function Line() {
    return (
        <View style={{
            height: 1.5,
            backgroundColor: 'rgba(1, 1, 1 ,1)',
            alignSelf: 'stretch',
            marginHorizontal: 50, 
        }} />
    )
}

export function LineText() {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 20}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
                <Text style={{width: 200, textAlign: 'center'}}>
                    ¿Ya registraste tus vehiculos?
                </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
    )
}
