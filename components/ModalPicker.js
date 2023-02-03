import { View, Text, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Animated } from 'react-native'
import React from 'react'
import { Line } from './Lines';

const OPTIONS = ['MOTO', 'AUTO']
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

    return (
        <TouchableOpacity
            onPress={() => props.changueModalVisibility(false)}
            style={styles.container}
        >
            <View
                style={[styles.modal, {width: WIDTH - 100, height: HEIGHT/6}]}
            >
                <ScrollView>
                    {option}
                </ScrollView>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal:{
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
    },
    option: {
        alignItems: 'flex-start',
    },
    text: {
        margin: 20,
    },
})

export default ModalPicker