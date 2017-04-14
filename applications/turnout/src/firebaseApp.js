import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAD4s_pXhYkHSZpa2pKzswx2GNyewKCyjY",
    authDomain: "turnout-e10c7.firebaseapp.com",
    databaseURL: "https://turnout-e10c7.firebaseio.com",
    projectId: "turnout-e10c7",
    storageBucket: "",
    messagingSenderId: "974351173998"
  };

//create and export firebase instance 
export const firebaseApp = firebase.initializeApp(config)   
