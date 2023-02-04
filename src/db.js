import "firebase/compat/database";
import firebase from 'firebase/compat/app'

const config = {
    apiKey: "AIzaSyDHhcO6w-Gc7TNLYCCrIT4G7oVnnoPTZVI",
    authDomain: "pessego-chat.firebaseapp.com",
    projectId: "pessego-chat",
    storageBucket: "pessego-chat.appspot.com",
    messagingSenderId: "3057472758",
    appId: "1:3057472758:web:0bd0f30d3199cf5aefc8d7",
    databaseURL: "https://pessego-chat-default-rtdb.europe-west1.firebasedatabase.app"
}

const db = firebase.initializeApp(config);
export default db;