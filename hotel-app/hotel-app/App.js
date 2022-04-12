import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// You can import from local files
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Rooms from './Screens/Rooms';
import Cabins from './Screens/Cabins';
import MoreCabins from './Screens/MoreCabins';
import CheckIn from './Screens/CheckIn';
import Map from './Screens/Map';
import ForgotPassword from './Screens/ForgotPassword';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
