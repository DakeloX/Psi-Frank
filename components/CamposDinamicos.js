import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CamposDinamicos = () => {
    const [campos, setCampos] = useState(['']); // Inicializamos con un campo de texto

    const agregarCampo = () => {
        setCampos([...campos, '']);
    };

    const handleTextoChange = (text, index) => {
        const nuevosCampos = [...campos];
        nuevosCampos[index] = text;
        setCampos(nuevosCampos);
    };

    const eliminarCampo = (index) => {
        const nuevosCampos = [...campos];
        nuevosCampos.splice(index, 1);
        setCampos(nuevosCampos);
    };

    return (
        <View style={styles.contenedor}>
        {campos.map((valor, index) => (
            <View key={index} style={styles.campoContainer}>
            <TextInput
                style={styles.campoTexto}
                value={valor}
                placeholder={`${index + 1}.`}
                onChangeText={(text) => handleTextoChange(text, index)}
            />
            <TouchableOpacity onPress={() => eliminarCampo(index)} style={styles.botonEliminar}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>X</Text>
            </TouchableOpacity>
            </View>
        ))}
        <TouchableOpacity onPress={agregarCampo} style={styles.botonAgregar}>
            <Text style={{ color: 'white', fontSize: 32 }}>+</Text>
        </TouchableOpacity>
        </View>
    );
    };

    const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
    },
    campoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    campoTexto: {
        flex: 1,
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 8,
        width: 314,
    },
    botonEliminar: {
        width: 40,
        height: 40,
        borderRadius: 8,
        marginTop: 8,
        backgroundColor: '#A02B2B',
        marginLeft: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botonAgregar: {
        padding: 2,
        borderRadius: 8,
        backgroundColor: '#3498DB',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        marginBottom: 8,
        marginTop: 8,
    },
});

export default CamposDinamicos;