<template>
  <div id="login">
    <button>Login with Google</button>
    <button large left>Login with Github</button>
    <button large left>Login with Twitter</button>
    <br>
        <p>{{error.message}}</p>
        <br>
        <router-link to='/signup'>Sign Up </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: {
          message: ''
        }
      }
   },
  methods: {
    signIn() {
        firebaseApp.auth().GoogleAuthProvider()
        .catch(error => {
            this.error = error
        })
      }
   }
}
</script>

<style>
</style>
