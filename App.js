import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './views/HomeView.js'; // Importa tu vista principal
import FormView from './views/FormView.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Set headerShown to false to hide the default header
        }}
      >
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Form" component={FormView} />
        {/* Agrega más pantallas según sea necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;