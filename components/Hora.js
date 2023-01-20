import React, { useState } from 'react'
import { Text, View, Platform, TouchableOpacity, StyleSheet} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/Ionicons';


export default function Hora() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('SELECCIONAR HORA');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS == 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fTime = + tempDate.getHours() + ' : ' + tempDate.getMinutes();
        setText(fTime)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <View>
        <TouchableOpacity title='TimePicker' onPress={() => showMode('time')} style={styles.container}>
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