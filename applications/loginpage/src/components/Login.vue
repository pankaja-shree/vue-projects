<template>
  <div id="login">
      <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {firebaseApp} from '../firebaseApp'

export default {
  data() {
    return {
      error: {
          message: ''
        }
      }
   },
  mounted() {
    let uiConfig = {
      signInSuccessUrl: '/dashboard',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ]
      };
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.disableAutoSignIn();
    ui.start('#firebaseui-auth-container', uiConfig);
   }
}
</script>

<style>
</style>
