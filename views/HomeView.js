import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NewPatient from '../components/NewPatient';
import PatientCard from '../components/PatientCard';
import Footer from '../components/Footer';

const HomeView = () => {
  const navigation = useNavigation();

  const [searchedPatient, setSearchedPatient] = useState(null);

  const handleNewPatientPress = () => {
    navigation.navigate('Form'); // 'Form' es el nombre de la pantalla del formulario
  };
  
  const handleViewAllPress = () => {
    console.log('Ver Todos clickeado');
  };

  const handleSearch = (term) => {
    const foundPatient = {
      name: 'Paciente Encontrado',
      cc: '123456789',
      entryDate: '01-01-2023',
      lastUpdate: '02-02-2023',
    };

    setSearchedPatient(foundPatient);
  };

  return (
    <View style={styles.container}>
      <Header logo={require('../images/Logo_Lobo.png')} title="Psi-Frank" />
      <ScrollView contentContainerStyle={styles.formContainer}>
        <SearchBar onTermSubmit={handleSearch} />
        {searchedPatient && (
          <View>
            <Text style={styles.title}>Resultados de la búsqueda</Text>
            <PatientCard
              name={searchedPatient.name}
              cc={searchedPatient.cc}
              entryDate={searchedPatient.entryDate}
              lastUpdate={searchedPatient.lastUpdate}
            />
          </View>
        )}
        <NewPatient onPress={handleNewPatientPress} />
        <Text style={styles.title}>Consultas Recientes</Text>
        <PatientCard
          name="Gabriel Medina Montenegro"
          cc="0000000000"
          entryDate="04-01-2024"
          lastUpdate="30-02-2024"
        />
        <PatientCard
          name="Diana Gutierrez Molina"
          cc="1111111111"
          entryDate="10-05-2023"
          lastUpdate="24-02-2024"
        />
        <TouchableOpacity onPress={handleViewAllPress}>
          <Text style={styles.viewAllText}>Ver Todos</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181C42',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  formContainer: {
    width: '100%',
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },

  viewAllText: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 16,
    marginBottom: 64,
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default HomeView;