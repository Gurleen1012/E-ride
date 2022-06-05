import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKepRJH5ZhIKsu2cJCdCtd_dPnBoGtG5Q",
  authDomain: "e-ride-81f77.firebaseapp.com",
  projectId: "e-ride-81f77",
  storageBucket: "e-ride-81f77.appspot.com",
  messagingSenderId: "715498826344",
  appId: "1:715498826344:web:10adc4792f081e709e29dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
