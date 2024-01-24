import React, { useState } from 'react';
import { Platform, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SelectFecha = ({ selectedDate, onDateChange, label }) => {
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleDateConfirm = (selectedDate) => {
        hideDatePicker();
        onDateChange(selectedDate);
    };

    if (Platform.OS === 'web') {
        return (
            <View style={styles.dateInput}>
                <input
                    type="date"
                    value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                    onChange={(e) => onDateChange(new Date(e.target.value))}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.dateInput}>
                <TouchableOpacity onPress={showDatePicker}>
                    <Text>{selectedDate ? selectedDate.toDateString() : 'Selecciona la fecha'}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    dateInput: {
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        marginTop: 8,
        marginBottom: 8,
        height: 40,
        borderRadius: 8,
        minWidth: 350,
        maxWidth: 500,
    },
});

export default SelectFecha;