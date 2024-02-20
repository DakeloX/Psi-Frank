import React, { forwardRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAuth } from '../App'; // Ajusta la ruta según la ubicación real de App.js

const SettingsMenu = forwardRef(({ onCloseSession }, ref) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    onCloseSession();
    logout();
  };

  const closeMenu = () => {
    // Lógica para cerrar el menú
  };

  const toggleMenu = () => {
    // Lógica para alternar la visibilidad del menú
  };

  // Asigna los métodos al ref
  React.useImperativeHandle(ref, () => ({
    closeMenu,
    toggleMenu,
  }));

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
});

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
