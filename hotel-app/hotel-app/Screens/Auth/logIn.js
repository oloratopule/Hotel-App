import {firebase} from '../Firebase/config'
import { NavigationContainer } from '@react-navigation/native'

const logIn = (email, password, navigation) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Successfully Signed In!");
            navigation.navigate("Home")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage, ": " + errorCode)
        })

}
export default logIn