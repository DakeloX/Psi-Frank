import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ logo, title }) => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSettings = () => {
    console.log('Configuracion clickeado');
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181C42',
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    flexDirection: 'row', // Keep it as 'row'
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
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
    width: 90,
    height: 90,
    borderRadius: 36,
    marginRight: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  rightContainer: {
    padding: 40,
    borderRadius: 10,
    marginRight: -10,
  },
});

export default Header;
