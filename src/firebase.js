import firebase from 'firebase';
require('firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA5bx7TLtU6IvHim29RtcAcNMBi2b9FzGw",
  authDomain: "vue-ecommerce-9894c.firebaseapp.com",
  databaseURL: "https://vue-ecommerce-9894c.firebaseio.com",
  projectId: "vue-ecommerce-9894c",
  storageBucket: "vue-ecommerce-9894c.appspot.com",
  messagingSenderId: "850860043552",
  appId: "1:850860043552:web:18fd04f41ccd5233833b45"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const fs = firebase.firestore();

export {fb, fs};
