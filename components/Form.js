import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu';


export function Form(props) {

    const { text, name } = props

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.icon}>
                <Icon 
                    onPress={() => {}}
                    name={ name } 
                    size={25} color="#808080" 
                />
            </View>
            <Text style={styles.text}>
                { text }
            </Text>
        </TouchableOpacity>
    );
}

export function FormCar(props) {

    const [ car, setCar] = useState('');

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.icon}>
            </View>
            <MenuProvider style={styles.formCar}>
                <Menu>
                    <MenuTrigger text='Hola' value={car}/>
                    <MenuOptions>
                        <MenuOption onSelect={(value) => setCar(value)} text='Opcion 1'></MenuOption>
                        <MenuOption text='Opcion 2'></MenuOption>
                        <MenuOption disabled={true} text='Opcion 2'></MenuOption>
                    </MenuOptions>
                </Menu>
            </MenuProvider>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        justifyContent: 'space-around',
        paddingTop: 30,
    },
    icon: {
        paddingStart: '10%',
        alignSelf: 'flex-start',
    },
    formCar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        justifyContent: 'space-around',
        paddingTop: 30,
    },
})

