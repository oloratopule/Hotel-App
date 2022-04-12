import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import signUp from './Auth/signUp'

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
    const register = () => {
        if (password === confirmPassword) {
            signUp(setEmail, password, navigation)
        } else {
            alert('Password and ConfirmPassword', "Don't match!")
        }
    }
  
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>SIGN UP</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={(userName) => setUserName(userName)}
      />
      <TextInput
        placeholder="Password"
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
        <Text onPress={register}>
          Sign up
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
    paddingLeft: 65,
    paddingTop: 10,
  },
});
