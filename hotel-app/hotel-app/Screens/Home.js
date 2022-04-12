import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/cabin.png')}
      style={styles.container}>
      <Text style={styles.home}>GoldenHome</Text>
      <Text style={styles.text}>We Make You Feel Better Than At Home</Text>
      <TouchableOpacity style={styles.btn} onPress={() =>{navigation.navigate('Rooms')}}>Browse</TouchableOpacity>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 844,
  },
   home: {
    color: '#F2BF07',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop:500,
    marginLeft:50
  },
  text:{
    fontWeight:'bold',
    marginLeft:50,
    fontSize:25,
    marginTop:10
  },
    btn: {
    width: 150,
    height: 40,
    marginLeft: 90,
    marginTop: 20,
    backgroundColor: '#DE520D',
    borderRadius: 20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft: 45,
    paddingTop: 10,
  },
});
