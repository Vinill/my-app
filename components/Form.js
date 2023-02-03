import { View, TouchableOpacity, StyleSheet, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalPicker from './ModalPicker';


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
            <Text>
                { text }
            </Text>
        </TouchableOpacity>
    );
}

export function SelectCar(props) {

    const { name, text } = props

    const [ car, setCar] = useState(text);

    const [isModalVisible, setisModalVisible] = useState(false);

    const changueModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setCar(option)
    } 

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => changueModalVisibility(true)}
                style={styles.touchableOpacity}
            >
                <View style={styles.iconCar}>
                <Icon 
                    onPress={() => {}}
                    name={ name } 
                    size={25} color="#808080" 
                />
            </View>
                <Text style={styles.text}>
                    {car}
                </Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='slide'
                visible={isModalVisible}
                nRequestClose={() => changueModalVisibility(false)}
            >
                <ModalPicker
                    changueModalVisibility={changueModalVisibility}
                    setData={setData}
                />
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        justifyContent: 'space-around',
    },
    icon: {
        paddingStart: '10%',
        alignSelf: 'flex-start',
    },
    text: {
        margin: 10,
    },
    touchableOpacity: {
        flexDirection: 'row',
        height: '90%',
        width: 300,
        borderWidth: 1,
    },
    iconCar:{
        width: 150,
        alignItems: 'flex-start',
        padding: 10,
    },
})

