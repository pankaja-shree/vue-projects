<template>
  <div id="dashboard">
    <h1>Hello {{$store.state.user.displayName}} </h1>
    <button @click="signOut()">Signout</button>
    <h2>Your profile</h2>
    <img :src="photo" style=”height: 120px”> <br>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <hr>
    <pre>{{user}}</pre>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
     photo: '',
     userId: '',
     name: '',
     email: '',
     user: {}
   }
  },
  created() {
  this.user = firebase.auth().currentUser;
  if(this.user) {
    this.name = this.user.displayName;
    this.email = this.user.email;
    this.photo = this.user.photoURL;
    this.userId = this.user.uid;
  }
},
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
