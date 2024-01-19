import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FormView = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  
  return (
    <View style={styles.container}>
      <Header logo={require('../images/Logo_Lobo.png')} title="Pacientes" />

      <ScrollView style={styles.formContainer}>

        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} placeholder="Ingrese el nombre" />

        <Text style={styles.label}>Fecha:</Text>
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
        <TextInput style={styles.input} placeholder="Ingresa el sexo" />

        <Text style={styles.label}>Ocupación:</Text>
        <TextInput style={styles.input} placeholder="Ingresa la ocupación" />

        <Text style={styles.label}>Escolaridad:</Text>
        <TextInput style={styles.input} placeholder="Ingresa la escolaridad" />

        <Text style={styles.label}>Religión:</Text>
        <TextInput style={styles.input} placeholder="Ingresa la religión" />

        <Text style={styles.label}>Tel:</Text>
        <TextInput style={styles.input} placeholder="Ingresa el teléfono" keyboardType="phone-pad" />

        <Text style={styles.label}>Con quien vive:</Text>
        <TextInput style={styles.input} placeholder="Ingresa con quién vive" />

        <Text style={styles.label}>Acompañante:</Text>
        <TextInput style={styles.input} placeholder="Ingresa el acompañante" />

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
    justifyContent: 'flex-start',
  },
  formContainer: {
    width: 420,
    paddingHorizontal: 32,
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
  },  
  dateInput: {
    backgroundColor: '#fff',
    padding: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    height: 40,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#3498DB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 64,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Agrega más estilos según sea necesario
});

export default FormView;