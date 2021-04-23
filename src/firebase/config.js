import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxkWoRdEDCx-h0u8W7HZv9yAMKlZmIhUU",
    authDomain: "clicky-3c4dc.firebaseapp.com",
    projectId: "clicky-3c4dc",
    storageBucket: "clicky-3c4dc.appspot.com",
    messagingSenderId: "520214197255",
    appId: "1:520214197255:web:87c7416f19361dff84e6a2"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { storage, db, timestamp }