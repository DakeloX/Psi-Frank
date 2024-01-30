import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SettingsMenu from './SettingsMenu';

const Header = ({ logo, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSettings = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Back button pressed')} style={styles.leftContainer}>
        <AntDesign name="arrowleft" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={handleSettings} style={styles.rightContainer}>
        <AntDesign name={isMenuOpen ? 'close' : 'setting'} size={30} color="#fff" />
      </TouchableOpacity>
      {isMenuOpen && <SettingsMenu onCloseSession={() => setIsMenuOpen(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181C42',
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 10,
    width: '100%',
    zIndex: 10,
  },
  leftContainer: {
    padding: 10,
    borderRadius: 10,
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  rightContainer: {
    padding: 38,
    borderRadius: 10,
    marginRight: -10,
  },
});

export default Header;
