import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginView = ({ setIsAuthenticated }) => {
const [pin, setPin] = useState('');

const handleLogin = () => {
    // Aquí deberías verificar el PIN, por ejemplo, comparándolo con un PIN predefinido.
    const isValidPin = pin === '1234'; // Cambia esto según tus requisitos.

    if (isValidPin) {
    // Actualiza el estado de autenticación directamente
    setIsAuthenticated(true);
    } else {
    // Puedes mostrar un mensaje de error o realizar otra acción si el PIN es incorrecto.
    console.log('PIN incorrecto');
    }
};

return (
    <View style={styles.container}>
        <Image source={require('../images/Logo_Lobo.png')} style={styles.logo} />
        <Text style={styles.LogoTitle}>Psi-Frank</Text>
        <Text style={styles.title}>Ingrese su PIN</Text>
        <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="PIN"
        keyboardType="numeric"
        value={pin}
        onChangeText={setPin}
        returnKeyType="done"
        onSubmitEditing={handleLogin} // Agregado para manejar la acción de "Enter"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
    </View>
);  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181C42',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        textAlign: 'center',
        width: 200,
    },
    button: {
        backgroundColor: '#3498DB',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo:{
        width:250,
        height: 250,
        borderRadius: 36,
        marginBottom:-10,
    },
    LogoTitle:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },

});

export default LoginView;