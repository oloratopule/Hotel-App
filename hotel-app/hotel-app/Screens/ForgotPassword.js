import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {firebase} from  './Firebase/config'


export default function ForgotPassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const ForgotPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            
        })
  };
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Forgot Password</Text>
      <TextInput
        placeholder="Reset Password"
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
      />
      <Text style={styles.text}>
        We'll call or text you to confirm your number. Standard <br /> message
        and data rates apply.
      </Text>
       <TouchableOpacity style={styles.btn}>
        <Text onPress={() => navigation.navigate('LogIn')}>
          Save Password
        </Text>
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
  signup: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#F2BF07',
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
    marginTop: 30,
    fontSize: 10,
  },
  btn: {
    width: 200,
    height: 40,
    marginLeft: 40,
    marginTop: 155,
    backgroundColor: '#DE520D',
    borderRadius: 20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft: 58,
    paddingTop: 10,
  },
});
