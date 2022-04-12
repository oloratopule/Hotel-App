import {firebase} from '../Firebase/config'
import { NavigationContainer } from '@react-navigation/native'

const signUp = (email, password, navigation) => {
 firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            navigation.navigate('LogIn');
            alert('User Successfully Registered!!')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage, ": " + errorCode)
        })
}
export default signUp