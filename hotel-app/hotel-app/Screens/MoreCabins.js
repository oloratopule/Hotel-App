import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function MoreCabins({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.home}>GoldenHome</Text>
      <Text style={styles.heading}>Available Cabins</Text>
      <Image style={styles.room} source={require('../assets/home.png')} />
      <Image style={styles.room} source={require('../assets/kitchen.png')} />

      <View style={styles.available}>
        <View>
          <FontAwesome5 name="swimming-pool" size={24} color="#F2BF07" />
          <Text>Pool</Text>
        </View>
        <View style={styles.bed}>
          <FontAwesome5 name="bed" size={24} color="#F2BF07" />
          <Text>4 Beds</Text>
        </View>
        <View style={styles.tub}>
          <FontAwesome name="bathtub" size={24} color="#F2BF07" />
          <Text>2 Baths</Text>
        </View>
        <TouchableOpacity style={styles.direction}>
          <Text style={styles.text} onPress={() =>{navigation.navigate('Map')}}>Directions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.available}>
        <View>
          <Text style={{fontWeight:'bold',}}>R625<br/>per night</Text>
        </View>
        <View style={styles.wifi}>
          <FontAwesome5 name="wifi" size={24} color="#F2BF07" />
          <Text>Wifi</Text>
        </View>
        <View style={styles.tub}>
          <FontAwesome5 name="parking" size={24} color="#F2BF07" />
          <Text>Parking</Text>
        </View>
        <TouchableOpacity style={styles.check}>
          <Text style={styles.text}>Check<br/>Availability</Text>
        </TouchableOpacity>


      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  home: {
    color: '#F2BF07',
    fontWeight: 'bold',
    fontSize: 35,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  room: {
    width: 300,
    marginTop: 20,
  },
  available: {
    marginTop: 15,
    flexDirection: 'row',
  },
  bed: {
    marginLeft: 35,
  },
  tub: {
    marginLeft: 35,
  },
  wifi:{
  marginLeft: 20,
  },
  direction: {
    width: 86,
    height: 24,
    marginLeft: 20,
    backgroundColor: '#DE520D',
    borderRadius: 20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft:10,
    marginTop:15,
    fontWeight:'bold'
  },
  check:{
    width: 86,
    height: 47,
    marginLeft: 20,
    backgroundColor: '#DE520D',
    borderRadius: 20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft:10,
  }
});
