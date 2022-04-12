  import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Cabins({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.home}>GoldenHome</Text>
      <Text style={styles.heading}>
        Here are our <br />
        beautiful cabins
      </Text>
      <Image style={styles.room} source={require('../assets/kitchen.png')} />
      <Image style={styles.room} source={require('../assets/bed.png')} />
      <Image style={styles.room} source={require('../assets/kitchen2.png')} />
         <TouchableOpacity style={styles.more} onPress={() =>{navigation.navigate('MoreCabins')}}>More Details</TouchableOpacity>
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
    more: {
    width: 200,
    height: 40,
    marginLeft: 40,
    marginTop: 25,
    backgroundColor: '#DE520D',
    borderRadius: 20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft: 65,
    paddingTop: 10,
  },
});
