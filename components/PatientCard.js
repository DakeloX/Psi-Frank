import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PatientCard({ name, cc, entryDate, lastUpdate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>CC: {cc}</Text>
      <Text style={styles.detail}>Fecha de ingreso: {formatDate(entryDate)}</Text>
      <Text style={styles.detail}>Ultima actualización: {formatDate(lastUpdate)}</Text>
    </View>
  );
}

const formatDate = (date) => {
  // Implementa la lógica de formateo de fecha según tus necesidades
  return date; // Por ahora, simplemente devuelve la fecha sin formato
};

const styles = StyleSheet.create({
  container: {
    width: '99%', // Ancho del 99% en dispositivos móviles
    maxWidth: 450, // Ancho maximo fijado
    minHeight: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 7,
    padding: 12,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 2,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '400',
    marginBottom: 4,
    textAlign: 'left',
  },
});