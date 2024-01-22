import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from '../components/Header';
import Footer from '../components/Footer';
import RNPickerSelect from 'react-native-picker-select';

const FormView = () => {
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState(null);
  const [identidad, setIdentidad] = useState(null);
  const [escolaridad, setEscolaridad] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (selectedDate) => {
    hideDatePicker();
    setDate(selectedDate);
  };
  
  const renderDatePicker = () => {
    if (Platform.OS === 'web') {
      return (
        <input
          type="date"
          value={date.toISOString().split('T')[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      );
    } else {
      return (
        <>
          <TouchableOpacity onPress={showDatePicker}>
            <Text>{date.toDateString()}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </>
      );
    }
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
          <Text style={styles.label}>Fecha de ingreso:</Text>

          <View style={styles.dateInput}>
          {renderDatePicker()}
          </View>
          
          <Text style={styles.label}>Documento de identidad:</Text>

          <View style={styles.idnContainer}>

          <View style={styles.pickerContainerIdn}>
        
            <RNPickerSelect
              placeholder={{ label: '>', value: null }}
              onValueChange={(value) => setIdentidad(value)}
              items={[
                { label: 'CC', value: 'CC' },
                { label: 'TI', value: 'TI' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <View style={styles.emptyView}></View>

          <TextInput style={styles.inputIdn} placeholder="Ingresa documento" keyboardType="numeric" />
      </View>
         

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

          <Text style={styles.label}>Ocupación:</Text>
          <TextInput style={styles.input} placeholder="Ingresa la ocupación"/>
         
          <Text style={styles.label}>Escolaridad:</Text>

          <View style={styles.pickerContainer}>

        <RNPickerSelect
          placeholder={{ label: 'Selecciona el nivel', value: null }}
          onValueChange={(value) => setEscolaridad(value)}
          items={[
            { label: 'Preescolar', value: 'Preescolar' },
            { label: 'Educación Basica', value: 'EduBasica' },
            { label: 'Educación Media', value: 'EduMedia' },
            { label: 'Educaión superior', value: 'EduSuperior' },
          ]}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
        />
      </View>
      
      <Text style={styles.label}>Religión:</Text>
          <TextInput style={styles.input} placeholder="Ingresa la religión"/>

          <Text style={styles.label}>Con quién vive:</Text>
          <TextInput style={styles.input} placeholder="Con quien vive el paciente"/>

        </View>

        {/* Información de Contacto */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitleMiddle}>Información de Contacto</Text>
          <Text style={styles.label}>Teléfono:</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  formSection: {
    marginBottom: 16,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  sectionTitleMiddle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 7,
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
    paddingLeft: 16,
    paddingTop: 8,
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
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 5,
    minWidth: 350,
    maxWidth: 500,
    
  },
  idnContainer:{
    flexDirection: 'row', // Para que los objetos estén en línea horizontal
    flex: 1, // Para que el contenedor ocupe todo el espacio disponible
  },
  inputIdn:{
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    flex: 0.80,
  },
  pickerContainerIdn: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 5,
    flex:0.18,
    marginRight:'10',
    
  },
  emptyView: {
    height: 40,
    flex:0.02,
  },
  submitButton: {
    backgroundColor: '#3498DB',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
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