import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MyButton } from '../components/Buttons';


const AddWin = ({navigation}) => {

    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder='Marca de auto'
            />
            <TextInput 
                style={styles.input} 
                placeholder='Modelo de auto'
            />
            <View style={{width: '60%', paddingTop: 15,}}>
                <MyButton
                    text = 'GUARDAR'
                    onPress = {() => {navigation.navigate('AddCar')}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        paddingTop: 50,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#555555',
        backgroundColor: '#ffffff',
        textAlign: 'left',
        fontSize: 20,
        margin: 10,
        paddingHorizontal: 10,
    },
});

export default AddWin