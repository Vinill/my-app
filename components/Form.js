import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


export default function Form(props) {

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
    )
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
})

