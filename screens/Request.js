import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {LineText, Line} from '../components/Lines'
import Form from '../components/Form'
import { Button, MyButton } from '../components/Buttons'
import Fecha from '../components/Fecha'
import Hora from '../components/Hora'


const Ready = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 400, height: 200, marginBottom: 15 }}
                source={require('../assets/photo.webp')}
            />
            <View style={styles.form}>
                <View style={styles.icon}>
                    <Image
                        style={{ width: 80, height: 80, marginTop: 20, }}
                        source={require('../assets/carWash.png')}
                    />
                </View>

                <Text style={styles.text}>SOLICITUD DE RESERVA</Text>

                <View style={styles.fecha}>
                    <Fecha/>
                </View>

                <Line/>

                <View style={styles.fecha}>
                    <Hora/>
                </View>

                <Line/>

                <View>
                    <Form text = 'MOVILES DE PREFERENCIA' name = 'add-circle-outline' />
                </View>

                <Line/>

                <View>
                    <Form text = 'CONTRASEÑA' name = 'lock-closed-outline' />
                </View>

                <Line/>

                <View style={styles.buttonOne}>
                    <Button 
                    onPress = {() => {navigation.navigate('Regist')}}
                    text = 'RESERVAR DIA Y HORA'/>
                </View>

                <LineText/>

                <View style={styles.buttonTwo}>
                    <MyButton
                        onPress = {() => {navigation.navigate('AddCar')}}
                        text = 'IR A SELECCIONAR VEHICULO'
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 50,
        marginTop: -80,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: '',
        fontWeight: 'bold',
        color: '#87ceeb',
        paddingTop: 15,
    },
    buttonOne: {
        marginTop: 40,
        width: '100%',
        alignItems: 'center',
    },
    buttonTwo: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
})

export default Ready