import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './views/HomeView'; // Importa tu vista principal
import FormView from './views/FormView';
import LoginView from './views/LoginView'; // Importa la vista de inicio de sesión

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isAuthenticated ? (
          <Stack.Screen name="Login">
            {() => <LoginView setIsAuthenticated={setIsAuthenticated} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeView} />
            <Stack.Screen name="Form" component={FormView} />
            {/* Agrega más pantallas según sea necesario */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;