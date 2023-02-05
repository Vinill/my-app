import { View, TouchableOpacity, StyleSheet, Text, Modal, TextInput } from 'react-native'
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
                        size={30} color="#808080" 
                    />
                </View>
                <Text style={styles.text}>
                    {car}
                </Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
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

export function Password(props) {

    const { text, name } = props

    return (
        <TouchableOpacity style={{flexDirection: 'row', padding: 10, paddingLeft: 35,}}>
            <View style={styles.icon}>
                <Icon 
                    onPress={() => {}}
                    name={ name } 
                    size={25} color="#808080" 
                />
            </View>
            <TextInput 
                style={{width: '100%', paddingLeft: 45,}}
                placeholder="CONTRASEÑA"
                placeholderTextColor="grey"
                returnKeyType='go'
                secureTextEntry
                autoCorrect={false}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: -40,
    },
    icon: {
        paddingStart: '10%',
        alignSelf: 'flex-start',
    },
    text: {
        margin: 15,
        paddingStart: 20,
    },
    touchableOpacity: {
        flexDirection: 'row',
        width: 260,
    },
    iconCar:{
        padding: 8,
    },
})

