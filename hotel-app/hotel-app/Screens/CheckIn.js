import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function Home() {
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
      <View style={styles.dates}>
        <View>
          <Text
            style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '22px' }}>
            Check In
          </Text>
          <TextInput placeholder="DD/MM/YYYY"/>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: '20px',
              width: '120px',
            }}
          />
        </View>

        <View>
          <Text
            style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '22px' }}>
            Check Out
          </Text>
          <TextInput placeholder="DD/MM/YYYY" />
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: '20px',
              width: '120px',
            }}
          />
        </View>
      </View>
      <View style={styles.name}>
        <Text style={{ fontWeight: 'bold' }}>Guest Name</Text>
        <TextInput style={styles.input} placeholder="Full name" />
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: '20px',
            width: '240px',
            marginLeft: '20px',
          }}
        />
      </View>
      <View style={styles.name}>
        <Text style={{ fontWeight: 'bold' }}>Room Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Cabin Discription                      Price"
        />
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: '20px',
            width: '240px',
            marginLeft: '20px',
          }}
        />
      </View>
      <TouchableOpacity style={styles.check}>
        <Text style={styles.text}>Continue to Payment</Text>
      </TouchableOpacity>
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
  },
  dates: {
    flexDirection: 'row',
    marginTop: 80,
  },
  name: {
    marginTop: 40,
  },
  input: {
    width: 250,
    height: 25,
    marginRight: 35,
    borderRadius: 20,
    paddingLeft: 15,
    // border: '1px solid gray',
    marginTop: 20,
  },
  check: {
    width: 250,
    height: 37,
    marginLeft: 20,
    backgroundColor: '#DE520D',
    borderRadius: 20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft: 60,
    marginTop: 70,
  },
});
