<template>
  <div id="dashboard">
    <h1>Hello {{$store.state.user.displayName}} </h1>
      <p>{{$store.state}}!</p>
    <button @click="signOut()">Signout</button>
  </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'
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
