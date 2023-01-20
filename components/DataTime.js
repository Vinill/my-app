import React, { useState } from "react";
import { Button, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/Ionicons';


const DataTime= () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View>
            <TouchableOpacity onPress={showDatePicker} style={styles.container}>
                <View style={styles.icon}>
                    <Icon 
                        name='add-circle-outline'
                        size={25} color="#808080" 
                    />
                </View>
                <Text style={styles.text}>
                    {date}
                </Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};


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

export default DataTime;