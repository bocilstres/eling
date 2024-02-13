import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyForm from './App/Pages/Login';
import HomeScreen from './App/Pages/Home';
import ProfileScreen from './App/Pages/Profile';
import DataScreen from './App/Pages/Data';
import RondaScreen from './App/Pages/Ronda';
import SeninScreen from './App/Pages/Senin';
import PengumumanScreen from './App/Pages/Pengumuman';
import SelasaScreen from './App/Pages/Selasa';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={MyForm} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Data" component={DataScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Ronda" component={RondaScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Senin" component={SeninScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Selasa" component={SelasaScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Pengumuman" component={PengumumanScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
