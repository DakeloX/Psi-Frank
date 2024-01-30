import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SettingsMenu from './SettingsMenu';

const Header = ({ logo, title }) => {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSettings = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    setMenuVisible(false);
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackButton} style={styles.leftContainer}>
        <AntDesign name="arrowleft" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={handleSettings} style={styles.rightContainer}>
        <AntDesign name="setting" size={30} color="#fff" />
      </TouchableOpacity>
      {isMenuVisible && <SettingsMenu onCloseSession={handleLogout} />}
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