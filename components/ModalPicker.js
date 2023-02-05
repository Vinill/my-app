import { View, Text, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Animated } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'


const OPTIONS = ['MOTO', 'AUTO']

const CAR = ['FIAT', 'FORD', 'RENAULT', 'AUDI']

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {

    const onPressItem = (option) => {
        props.changueModalVisibility(false);
        props.setData(option);
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    const selectCar = CAR.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <BlurView
            intensity={100}
            tint="dark"
            onPress={() => props.changueModalVisibility(false)}
            style={styles.container}
        >
            <View
                
                style={[styles.modal, {width: WIDTH - 100, height: HEIGHT/4}]}
            >
                <ScrollView style={{width: '100%', backgroundColor: 'grey', borderRadius: 10,}}>
                    {selectCar}
                </ScrollView>
            </View>
        </BlurView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    modal:{
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    option: {
        alignSelf: 'center',
    },
    text: {
        margin: 20,
        color: 'white',
        fontWeight: 'bold',
    },
})

export default ModalPicker