import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './views/HomeView';
import FormView from './views/FormView';
import LoginView from './views/LoginView';

const AuthContext = createContext();

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authContextValue = {
    isAuthenticated,
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!isAuthenticated ? (
            <Stack.Screen name="Login">
              {props => <LoginView {...props} setIsAuthenticated={setIsAuthenticated} />}
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
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default App;
