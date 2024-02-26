// SettingsMenu.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa la función useNavigation

const SettingsMenu = ({ onCloseSession }) => {
  const navigation = useNavigation(); // Inicializa la navegación

  const handleLogout = () => {
    // Aquí puedes realizar cualquier lógica necesaria antes de cerrar sesión, como limpiar el almacenamiento local, etc.
    onCloseSession(); // Llama a la función onCloseSession proporcionada por el componente padre si es necesario
    navigation.navigate('Login'); // Navega a la vista Login después de cerrar sesión
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 80,
    right: 20,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  menuItem: {
    padding: 10,
  },
});

export default SettingsMenu;
