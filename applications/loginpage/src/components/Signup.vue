<template>
  <div id="signup">
    <v-btn large left>Signup with Google</v-btn>
    <v-btn large left>Signup with Github</v-btn>
    <v-btn large left>Signup with Twitter</v-btn>
    <br>
        <p>{{error.message}}</p>
        <br>
        <router-link to='/signup'>Sign Up </router-link>
  </div>
</template>

<script>
export default {
  name: 'signup'
}
</script>

<style>
</style>
