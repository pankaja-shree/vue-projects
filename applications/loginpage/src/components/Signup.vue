<template>
  <div id="signup">
    <button @click="signUp()">Signup with Google</button>
    <button>Signup with Github</button>
    <button>Signup with Twitter</button>
    <br>
        <p>{{error.message}}</p>
        <br>
        <router-link to='/signup'>Sign Up </router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
import {firebaseApp} from '../firebaseApp'

export default {
  data() {
    return {
      error: {
          message: ''
        }
      }
   },
  methods: {
    signUp() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
      }
   }
}
</script>

<style>
</style>
