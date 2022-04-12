import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { firebase } from './Firebase/config';
import { initializeApp, firebase } from "firebase/app";
import logIn from './Auth/logIn'

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const onLogin = () => {
        if (email == "" && password == "") {
            alert("Username and Email Feild cannot be empty!")
        } else {
            logIn(email, password, navigation)

        }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.login}>LOG IN</Text>
      <Text style={styles.account}>
        Don't have an account?{' '}
        <Text
          style={{ color: '#F2BF07' }}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          Sign Up
        </Text>
      </Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text
          style={{
            fontSize: 12,
            marginLeft: 160,
            marginTop: 5,
            color: '#F2BF07',
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        We'll call or text you to confirm your number. Standard <br /> message
        and data rates apply.
      </Text>
      <TouchableOpacity style={styles.continue} onPress={onLogin}>
        Continue
      </TouchableOpacity>

      <View style={styles.line}>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: 45,
            width: 125,
          }}
        />

        <Text style={{ marginTop: 45, fontWeight: 'bold' }}>or</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: 50,
            width: 125,
          }}
        />
      </View>
      <TouchableOpacity style={styles.forgot}>Log Out</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  login: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#F2BF07',
  },
  account: {
    marginTop: 20,
  },
  input: {
    width: 258,
    height: 35,
    marginTop: 25,
    marginRight: 35,
    borderRadius: 20,
    paddingLeft: 15,
    border: '1px solid #000000',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  text: {
    marginTop: 20,
    fontSize: 10,
  },
  continue: {
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
  line: {
    flexDirection: 'row',
  },
  forgot: {
    width: 100,
    height: 30,
    marginLeft: 90,
    marginTop: 55,
    backgroundColor: '#DE520D',
    borderRadius: 20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft: 25,
    paddingTop: 6,
  },
  google:{
    border:'1px solid #000000',
    width:200,
    height:40,
    marginTop:50,
    paddingTop:8,
    paddingLeft:35,
    marginLeft:40,
    borderRadius:10,
    flexDirection:'row'
  },
  text3:{
    fontSize:15,
    fontWeight:'bold'
  },
  icon:{
    paddingLeft:-10
  }
});
