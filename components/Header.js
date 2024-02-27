// Header.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SettingsMenu from '../components/SettingsMenu';

const Header = ({ navigation, logo, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSettings = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const showBackButton = navigation.canGoBack();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={handleGoBack} style={styles.leftContainer}>
          <AntDesign name="arrowleft" size={30} color="#fff" />
        </TouchableOpacity>
      )}
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
