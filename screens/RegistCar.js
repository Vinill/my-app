import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {LineText, Line} from '../components/Lines'
import Form from '../components/Form'
import { Button, MyButton } from '../components/Buttons'
import Icon from 'react-native-vector-icons/Ionicons';


const Regist = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 400, height: 200, marginBottom: 15 }}
                source={require('../assets/photo.webp')}
            />
            <View style={styles.form}>
                <View style={styles.icon}>
                    <Icon
                    name='car-sport'
                    size={80} color="#000000"
                    style={{color:'#87ceeb'}}
                    />
                </View>

                <Text style={styles.text}>REGISTRAR VEHICULO</Text>

                <View style={styles.fecha}>
                    <Form text = 'VEHICULO' name = 'car'/>
                </View>

                <Line/>

                <View>
                    <Form text = 'MARCA' name = 'add-circle-outline'/>
                </View>

                <Line/>

                <View>
                    <Form text = 'MODELO' name = 'add-circle-outline' />
                </View>

                <Line/>
                
                <View>
                    <Form text = 'COLOR' name = 'add-circle-outline' />
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
                        onPress = {() => alert('Ubicacion confirmada')}
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
        paddingTop: 2,
    },
    buttonOne: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },
    buttonTwo: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
})

export default Regist