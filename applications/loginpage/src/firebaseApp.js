import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0LjSCYHsyfkRR5KdAe_EFG5Nx2c5yJjw",
    authDomain: "codestories-77d89.firebaseapp.com",
    databaseURL: "https://codestories-77d89.firebaseio.com",
    projectId: "codestories-77d89",
    storageBucket: "codestories-77d89.appspot.com",
    messagingSenderId: "448867661968"
  };

//create and export firebase instance
export const firebaseApp = firebase.initializeApp(config)

//firebase instance for accessing database - domain is ref
//events child create events database and listens for changes in the database and updates it
export const eventsRef = firebase.database().ref().child('events')
