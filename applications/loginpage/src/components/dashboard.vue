<template>
  <div id="dashboard">
    <h1>Hello {{$store.state.user.displayName}} </h1>
    <button @click="signOut()">Signout</button>
    <pre>{{$store.state.user}}</pre>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  methods: {
        signOut() {
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()
        }
    }
}
</script>

<style>
</style>
