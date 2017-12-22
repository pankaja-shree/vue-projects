  <template>
  <div id="dashboard">
    <h1>Hello {{$store.state.user.displayName}} </h1>
    <button @click="signOut()">Signout</button>
    <router-link to="/addstory">Create a story</router-link>
    <ul>
      <li>Email: {{$store.state.user.email}}</li>
      <li>Avatar: <img :src="$store.state.user.photoURL" width="20%"/></li>
    </ul>
  </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'
import AddStory from './AddStory'

export default {
  methods: {
        signOut() {
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()
        }
    },
  components: {
    'add-story': AddStory
  }
}
</script>

<style>
</style>
