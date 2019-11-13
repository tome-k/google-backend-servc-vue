import firebase from 'firebase';
require('firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const fs = firebase.firestore();

export {fb, fs};
