import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export function MapButton(props) {

    const { onPress, text } = props

    return (
        <TouchableOpacity 
            style = {{
                ...styles.button,
                backgroundColor: '#00bfff',
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.text,
                    color: '#000000',
                    textAlign: 'center',
                    fontSize: 15,
                    color:'#FFFFFF',
                    paddingLeft:30,
                    paddingRight:30,
                    textShadowColor:'#585858',
                    textShadowOffset:{width: 2, height: 3},
                    textShadowRadius:15,
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    );
}

export function MapNav(props) {

    const { onPress, text } = props

    return (
        <TouchableOpacity
            style = {{
                ...styles.buttonNav,
                backgroundColor: '#fffaf0',
            }}
        >
            <TouchableOpacity style={styles.IconSearch}>
                <Icon style={styles.IconSearch__black} name="search-outline" size={30} color="#900" />
            </TouchableOpacity>
            <Text
                style = {{
                    ...styles.text,
                    textAlign: 'center',
                    fontSize: 15,
                    color:'#000000',
                    paddingLeft:20,
                    paddingRight:20,
                    textShadowOffset:{width: 2, height: 3},
                    textShadowRadius:40,
                }}
            >
                { text }
            </Text>
            <TouchableOpacity style={styles.Icon} onPress= {onPress}>
                <Icon style={styles.Icon__cross} name="close-outline" size={30} color="#900" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export function Button(props) {

    const { onPress, text} = props

    return (
        <TouchableOpacity onPress={ onPress } style = {styles.Button}>
            <Text
                style = {{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fafafa',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    );
}

export function MyButton(props) {

    const { onPress, text} = props

    return (
        <TouchableOpacity onPress={ onPress } style = {styles.ButtonTwo}>
            <Text
                style = {{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fafafa',
                    textAlign: 'center',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#808080',
        width: '85%',
        height: 50,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ButtonTwo: {
        backgroundColor: '#00bfff',
        width: '85%',
        height: 50,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    button: {
        width: '80%',
        paddingVertical: 15,
        alignSelf: 'center',
        borderRadius: 25,
        position: 'absolute',
        marginVertical: 20,
        top: '85%',
    },
    buttonNav: {
        width: '90%',
        paddingVertical: 18,
        alignSelf: 'center',
        borderRadius: 25,
        position: 'absolute',
        top: '75%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconSearch: {
        paddingStart: 10,
    },
    Icon: {
        paddingEnd: 10,
    },
    IconSearch__black: {
        color: '#000000',
    },
    Icon__cross: {
        color: '#000000',
    },
    text: {
        textAling: 'center',
        flex: 1,
    },
});