import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PatientCard({ name, cc, entryDate, lastUpdate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>CC: {cc}</Text>
      <Text style={styles.detail}>Fecha de ingreso: {entryDate}</Text>
      <Text style={styles.detail}>Ultima actualización: {lastUpdate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 388,
    minHeight: 120, // Ajuste la altura para permitir más espacio
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 16,
    padding: 12,
    shadowColor: 'rgba(0, 0, 0, 0.31)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  name: {
    color: 'black',
    fontSize: 18, // Aumenté el tamaño de la fuente para el nombre
    fontFamily: 'System',
    fontWeight: 'bold', // Hice que el nombre sea más destacado
    marginBottom: 8,
  },
  detail: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '400',
    marginBottom: 4,
  },
});