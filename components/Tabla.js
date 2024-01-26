import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const TablaComponent = ({ onTableHeightChange }) => {
  const [tabla, setTabla] = useState([
    ['Nueva Columna', '8AM', '12PM', '4PM', '9PM'],
    Array(5).fill(''),
  ]);

  const [tableHeight, setTableHeight] = useState(0);
  const [editedRowIndex, setEditedRowIndex] = useState(null);
  const [editedColumnIndex, setEditedColumnIndex] = useState(null);

  const agregarFila = () => {
    setTabla([...tabla, Array(tabla[0].length).fill('')]);
  };

  const quitarFila = () => {
    if (tabla.length > 2) {
      setTabla(tabla.slice(0, -1));
    }
  };

  const comenzarEdicion = (fila, columna) => {
    setEditedRowIndex(fila);
    setEditedColumnIndex(columna);
  };

  const finalizarEdicion = () => {
    setEditedRowIndex(null);
    setEditedColumnIndex(null);
  };

  const handleInputChange = (text) => {
    const nuevaTabla = [...tabla];
    nuevaTabla[editedRowIndex][editedColumnIndex] = text;
    setTabla(nuevaTabla);
  };

  const renderFila = (rowData, rowIndex) => (
    <Row
      data={rowData.map((cellData, cellIndex) => (
        <View key={cellIndex} style={[styles.celda, { backgroundColor: rowIndex % 2 === 1 ? '#e0e0e0' : '#f5f5f5' }]}>
          {rowIndex === 0 ? (
            <Text style={styles.celdaTexto}>{cellData}</Text>
          ) : (
            <TouchableOpacity onPress={() => comenzarEdicion(rowIndex, cellIndex)}>
              {editedRowIndex === rowIndex && editedColumnIndex === cellIndex ? (
                <TextInput
                  style={styles.input}
                  value={tabla[rowIndex][cellIndex]}
                  onChangeText={handleInputChange}
                  onBlur={finalizarEdicion}
                  autoFocus
                  multiline={true}
                />
              ) : (
                <Text style={styles.celdaTexto}>{cellData}</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      ))}
      key={rowIndex}
      style={styles.fila}
      textStyle={styles.celdaTexto}
      widthArr={[150, 150, 150, 150, 150]}
    />
  );

  const onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setTableHeight(height);
    onTableHeightChange && onTableHeightChange(height);
  };

  return (
    <ScrollView onLayout={onLayout} style={styles.contenedor}>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <View>
          <Table borderStyle={{ borderColor: '#bbb' }}>
            {tabla.map((rowData, rowIndex) => renderFila(rowData, rowIndex))}
          </Table>
        </View>
      </ScrollView>

      <View style={styles.botonesContenedor}>
        <TouchableOpacity style={styles.boton} onPress={agregarFila}>
          <Text>Añadir Fila</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={quitarFila}>
          <Text>Quitar Fila</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  
  },
  scrollContainer: {
    width: 350, // Ancho fijo de 350 píxeles
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
    padding: 10,
  },
  input: {
    textAlign: 'center',
    padding: 10,
    borderTopWidth: 0, // Quita el borde superior
    borderBottomWidth: 0, // Quita el borde inferior
    borderLeftWidth: 1, // Quita el borde izquierdo
    borderRightWidth: 1, // Quita el borde derecho
    borderLeftColor: 'black', // Color del borde izquierdo
    borderRightColor: 'black', // Color del borde derecho
    width: 150, // Ajusta el ancho según sea necesario
  },
  botonesContenedor: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  boton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default TablaComponent;
