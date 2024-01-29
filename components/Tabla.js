import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TablaComponent = ({ onTableHeightChange }) => {
  const [tabla, setTabla] = useState([
    ['Hora', '8AM', '12PM', '4PM', '9PM'],
    Array(5).fill(''), // Inicializar con 5 columnas para los inputs
  ]);

  const agregarFila = () => {
    setTabla([...tabla, Array(tabla[0].length).fill('')]);
  };

  const quitarFila = () => {
    if (tabla.length > 2) {
      setTabla(tabla.slice(0, -1));
    }
  };

  const handleInputChange = (text, rowIndex, columnIndex) => {
    const nuevaTabla = [...tabla];
    nuevaTabla[rowIndex][columnIndex] = text;
    setTabla(nuevaTabla);
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView horizontal={true} style={styles.tablaContainer}>
        <ScrollView onLayout={onTableHeightChange} horizontal={true}>
          <View style={styles.tabla}>
            {tabla.map((rowData, rowIndex) => (
              <View key={rowIndex} style={styles.fila}>
                {rowData.map((cellData, cellIndex) => (
                  <View key={cellIndex} style={styles.celda}>
                    {rowIndex === 0 ? (
                      <Text style={styles.celdaTexto}>{cellData}</Text>
                    ) : (
                      <TextInput
                        style={styles.input}
                        value={tabla[rowIndex][cellIndex]}
                        onChangeText={(text) => handleInputChange(text, rowIndex, cellIndex)}
                        multiline={true}
                        numberOfLines={4} // Límite de 4 líneas
                        placeholder=""
                      />
                    )}
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>

      <View style={styles.botonesContenedor}>
        <TouchableOpacity style={styles.boton} onPress={agregarFila}>
          <Text>Añadir Fila</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={quitarFila}>
          <Text>Quitar Fila</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  tablaContainer: {
    flex: 1,
  },
  tabla: {
    flexDirection: 'column',
    backgroundColor: 'white', // Fondo blanco para la tabla
  },
  fila: {
    flexDirection: 'row',
    height: 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  celda: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3, // Quita el borde
  },
  celdaTexto: {
    textAlign: 'center',
    fontWeight: 'bold',
    width: 150,
  },
  input: {
    textAlign: 'center',
    width: 150,
    height: '100%',
  },
  botonesContenedor: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  boton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default TablaComponent;
