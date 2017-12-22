<template>
  <div class="hello">
    <HeaderBar></HeaderBar>
    <h1>{{ msg }}</h1>
    <router-link to="/login" v-if="$store.user">Login</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <button @click = "signOut()">Signout</button>
  </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'

import HeaderBar from './Header'
export default {
  name: 'Home',
  components: {
    HeaderBar
  },
  data () {
    return {
      msg: 'Code Stories landing page'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
