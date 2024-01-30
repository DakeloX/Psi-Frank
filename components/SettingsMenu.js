import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAuth } from '../App'; // Ajusta la ruta según la ubicación real de App.js

const SettingsMenu = ({ onCloseSession }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    onCloseSession();
    logout();
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
    position: 'absolute',  // Mantén la posición absoluta para el contenedor principal
    top: 80,
    right: 10,
    padding: 5,
    borderRadius: 10,

  },
  menuItem: {
   
    padding: 10,
  },
});

export default SettingsMenu;
