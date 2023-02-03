import React, { useState }  from 'react'
import { View, StyleSheet, Modal, Text } from 'react-native'
import { MapComponent } from '../components/Map'
import { Android, Button, ButtonSquare, MapButton, MapNav, MyButton } from '../components/Buttons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';


const AddCar = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.map}>

                <MapComponent/>

            </SafeAreaView>
                        <View
                            style={{
                                height: '100%',
                                width: '100%',
                                backgroundColor: '#FFFF',
                        }}>
                            <Text style={styles.text}>SELECCIONAR VEHICULOS</Text>

                                <View style={{ height: 200, marginTop: 10 }}>
                                    <ButtonSquare 
                                        text = 'AGREGAR VEHICULO'
                                        onPress = {() => {navigation.navigate('Regist')}}
                                    />
                                </View>
                                <View style={styles.buttons}>
                                    <View style={{width: '60%'}}>
                                        <MyButton
                                            text = 'SELECCIONAR VEHICULO'
                                        />
                                    </View>
                                    <View style={{width: '60%',}}>
                                        <Button
                                            text = 'CANCELAR'
                                        />
                                    </View>
                                </View>
                        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 20,
        fontFamily: '',
        fontWeight: 'bold',
        color: '#87ceeb',
        paddingTop: 20,
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10,
        padding: 50,
    },
})

export default AddCar;