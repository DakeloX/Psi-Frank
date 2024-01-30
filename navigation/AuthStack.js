import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from '../views/LoginView';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginView" component={LoginView} />
      {/* Puedes agregar más pantallas de autenticación si es necesario */}
    </Stack.Navigator>
  );
};

export default AuthStack;
