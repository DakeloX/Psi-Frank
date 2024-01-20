import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RNPickerSelect from 'react-native-picker-select';

const FormView = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState(null);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Header logo={require('../images/Logo_Lobo.png')} title="Pacientes" />

      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Información Personal */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Información Personal</Text>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} placeholder="Ingrese el nombre" />

          <Text style={styles.label}>Fecha de Nacimiento:</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateInput}>{date.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <Text style={styles.label}>CC:</Text>
          <TextInput style={styles.input} placeholder="Ingresa la cédula" keyboardType="numeric" />

          <Text style={styles.label}>Edad:</Text>
          <TextInput style={styles.input} placeholder="Ingresa la edad" keyboardType="numeric" />

          <Text style={styles.label}>Estado Civil:</Text>
          <TextInput style={styles.input} placeholder="Ingresa el estado civil" />
          <Text style={styles.label}>Sexo:</Text>

          <View style={styles.pickerContainer}>
        
            <RNPickerSelect
              placeholder={{ label: 'Selecciona el sexo', value: null }}
              onValueChange={(value) => setGender(value)}
              items={[
                { label: 'Femenino', value: 'Femenino' },
                { label: 'Masculino', value: 'Masculino' },
                { label: 'No Binario', value: 'No Binario' },
                { label: 'Otro', value: 'Otro' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>
        </View>

        {/* Información de Contacto */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Información de Contacto</Text>
          <Text style={styles.label}>Tel:</Text>
          <TextInput style={styles.input} placeholder="Ingresa el teléfono" keyboardType="phone-pad" />
          {/* Otros campos de información de contacto */}
        </View>

        {/* Botón de Guardar */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181C42',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',

  },
  formSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    minWidth: 350,
    maxWidth: 500,
  },
  dateInput: {
    backgroundColor: '#fff',
    padding: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    height: 40,
    borderRadius: 8,
    minWidth: 350,
    maxWidth: 500,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: -10,
    paddingHorizontal: 16,
    paddingTop: 5,
    maxWidth: 500,
    minWidth: 350,
  },
  submitButton: {
    backgroundColor: '#3498DB',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 64,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: 'black', // Color del texto
  },
  inputAndroid: {
    color: 'black', // Color del texto
  },
});

export default FormView;