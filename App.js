import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import FormView from './views/FormView';

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "Home" : "Login"} // Si está autenticado, navega a Home, de lo contrario, a Login
        screenOptions={{
          headerShown: false // Oculta la barra de navegación predeterminada
        }}
      >
        <Stack.Screen name="Login">
          {(props) => <LoginView {...props} setIsAuthenticated={setIsAuthenticated} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Form" component={FormView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
