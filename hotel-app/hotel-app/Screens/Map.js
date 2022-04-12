import React, {useState, useEffect} from 'react';
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

export default function Map({navigation}) {
  const [permission, setPermission] = useState();
    const [currentLatitude, setCurrentLatitude] = useState();
    const [currentLongitude, setCurrentLogitude] = useState();


    
  return (
    <View>
      <ImageBackground
        source={require('../assets/map.png')}
        style={styles.container}>
        <TextInput placeholder="Search here" style={styles.textInput} />

        <View style={styles.icons}>
          <View>
            <FontAwesome
              name="car"
              size={24}
              color="black"
              style={styles.car}
            />
            <Text style={{ fontWeight: 'bold' }}>10 min</Text>
          </View>
          <View style={{ marginLeft: '15px' }}>
            <MaterialIcons
              name="directions-walk"
              size={24}
              color="black"
              style={styles.car}
            />
            <Text style={{ fontWeight: 'bold' }}>33 min</Text>
          </View>
          <View style={{ marginLeft: '15px' }}>
            <Ionicons
              name="bicycle"
              size={24}
              color="black"
              style={styles.car}
            />
            <Text style={{ fontWeight: 'bold' }}>20 min</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.card}>
        <View style={{ marginLeft: 25, marginTop: 15 }}>
          <Text style={styles.text}>10159 23rd St</Text>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>Riviera, Kimberley</Text>
            <MaterialIcons name="directions-walk" size={24} color="black" />
            <Text style={styles.text}>33 min</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.direction}>
            <MaterialIcons
              name="subdirectory-arrow-right"
              size={19}
              color="black"
            />
            <Text>Directions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.walk}>
            <MaterialIcons name="directions-walk" size={19} color="black" />
            <Text>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 598,
  },
  textInput: {
    marginTop: 35,
    borderWidth: '1px',
    width: '250px',
    height: '40px',
    paddingLeft: '70px',
    marginBottom: '10px',
    borderRadius: 25,
    borderColor: 'lightgray',
    marginHorizontal: 10,
    marginVertical: 25,
    backgroundColor: 'white',
    marginLeft: 50,
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 90,
  },
  car: {
    backgroundColor: '#C4C4C4',
    width: 40,
    height: 40,
    borderRadius: 50,
    paddingLeft: 7,
    paddingTop: 5,
  },
  card: {
    width: 300,
    height: 100,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  direction: {
    flexDirection: 'row',
    backgroundColor: '#DE520D',
    width: 95,
    height: 20,
    marginLeft: 25,
    marginTop: 10,
    borderRadius: 20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  walk: {
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    width: 95,
    height: 20,
    marginLeft: 25,
    marginTop: 10,
    borderRadius: 20,
    paddingLeft: 15,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
});
