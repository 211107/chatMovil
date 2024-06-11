import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './android/app/src/arqui-cebolla/presentation/screens/Login.js'; // Ajusta el path según tu estructura de carpetas
import RegisterScreen from './android/app/src/arqui-cebolla/presentation/Registro.js';
import ChatScreen from './android/app/src/arqui-cebolla/presentation/screens/PantallaChat.js';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        {/* Otros screen componentes */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
