import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ref, set, onValue } from 'firebase/database';
import { database } from '../firebase';

const FirebaseDemo = () => {
    const escribirDatos = async () => {
        try {
            await set(ref(database, 'ejemplo'), {
            mensaje: 'Hola, Firebase!',
            });
        } catch (error) {
            console.error('Error escribiendo datos:', error);
        }
    };

    const leerDatos = async () => {
        onValue(ref(database, 'ejemplo'), (snapshot) => {
            const datos = snapshot.val();
            console.log('Datos leídos:', datos);
        }, (error) => {
            console.error('Error leyendo datos:', error);
        });
    };

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={escribirDatos}>
            <Text style={styles.buttonText}>Escribir Datos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={leerDatos}>
            <Text style={styles.buttonText}>Leer Datos</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#3498DB',
        padding: 12,
        borderRadius: 8,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FirebaseDemo;