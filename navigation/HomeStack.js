import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../views/HomeView';
import FormView from '../views/FormView';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeView" component={HomeView} />
      <Stack.Screen name="FormView" component={FormView} />
      {/* Puedes agregar más pantallas para la sección de inicio según sea necesario */}
    </Stack.Navigator>
  );
};

export default HomeStack;
