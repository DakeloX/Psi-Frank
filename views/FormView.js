import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FormView = () => {
  return (
    <View style={styles.container}>
      <Header logo={require('../images/Logo_Lobo.png')} title="Pacientes" />

      <ScrollView style={styles.formContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} placeholder="Ingrese el nombre" />

        <Text style={styles.label}>Fecha:</Text>
        <TextInput style={styles.input} placeholder="Ingrese la fecha" />

        {/* Agrega más campos según sea necesario */}

        {/* ... Otros campos y secciones del formulario */}
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
    padding: 16,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  // Agrega más estilos según sea necesario
});

export default FormView;