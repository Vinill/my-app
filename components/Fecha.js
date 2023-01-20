import React, { useState } from 'react'
import { StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Fecha() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('SELECCIONAR FECHA');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS == 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + ' / ' + (tempDate.getMonth() + 1) + ' / ' + tempDate.getFullYear();
        setText(fDate)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <View>
        <TouchableOpacity title='DatePicker' onPress={() => showMode('date ')} style={styles.container}>
            <View style={styles.icon}>
                <Icon 
                    name='add-circle-outline'
                    size={25} color="#808080" 
                />
            </View>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
        

        {show && (
            <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
            />)}
    </View>
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
})