import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Rooms({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.home}>GoldenHome</Text>
      <Text style={styles.heading}>
        Let's make your <br />
        dream a vacation
      </Text>
      <Text style={styles.text}>
        Feel the sensation of staying in a hotel <br />
        cabin! Besides being comfortable, this <br />
        hotel cabin prioritizes technology and <br />
        security.
      </Text>
      <Image style={styles.room} source={require('../assets/loghome.png')} />
      <View style={styles.text2}>
        <Text style={styles.location}>
          Kimberley, Nothern Cape <br />
          R625 per night
        </Text>
        <View>
          <TouchableOpacity style={styles.book}  onPress={() =>{navigation.navigate('CheckIn')}}>Book</TouchableOpacity>
          <TouchableOpacity style={styles.view}  onPress={() =>{navigation.navigate('MoreCabins')}}>View</TouchableOpacity>
        </View>
      </View>
            <Image style={styles.room} source={require('../assets/wooden-house.png')} />
      <View style={styles.text2}>
        <Text style={styles.location}>
          Kimberley, Nothern Cape <br />
          R300 per night
        </Text>
        <View>
          <TouchableOpacity style={styles.book}  onPress={() =>{navigation.navigate('CheckIn')}}>Book</TouchableOpacity>
          <TouchableOpacity style={styles.view}  onPress={() =>{navigation.navigate('Cabins')}}>View</TouchableOpacity>
        </View>
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
  text: {
    marginTop: 10,
    fontSize: 12,
  },
  room: {
    width: 300,
    marginTop: 10,
  },
  text2: {
    marginTop: 20,
    flexDirection: 'row',
  },
  location: {
    fontWeight: 'bold',
  },
  book: {
    backgroundColor: '#DE520D',
     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: 50,
    height: 20,
    borderRadius: 20,
    marginLeft: 35,
    paddingLeft: 7,
  },
  view: {
    backgroundColor: '#DE520D',
     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: 50,
    height: 20,
    borderRadius: 20,
    marginLeft: 35,
    paddingLeft: 7,
    marginTop: 10,
  },
});
