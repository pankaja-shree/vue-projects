  <template>
  <div id="dashboard">
    <h1>Hello {{$store.state.user.displayName}} </h1>
    <button @click="signOut()">Signout</button>
    <pre>{{$store.state.user}}</pre>
  <router-link to="/">Home</router-link>
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
