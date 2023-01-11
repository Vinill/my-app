import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {LineText, Line} from '../components/Lines'
import Form from '../components/Form'
import { Button } from '../components/Buttons'


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
                        style={{ width: 80, height: 80, marginTop: 30, }}
                        source={require('../assets/carWash.png')}
                    />
                </View>

                <Text style={styles.text}>SOLICITUD DE RESERVA</Text>

                <View style={styles.fecha}>
                    <Form text = 'SELECCIONAR FECHA' name = 'add-circle-outline'/>
                </View>

                <Line/>

                <View>
                    <Form text = 'SELECCIONAR HORA' name = 'add-circle-outline'/>
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
                
                <Button onPress = {() => alert('Ubicacion confirmada')} text = 'RESERVAR DIA Y HORA'/>

                <LineText/>

                <Button 
                    onPress = {() => alert('Ubicacion confirmada')}
                    text = 'RESERVAR DIA Y HORA'
                />
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
    }
})

export default Ready