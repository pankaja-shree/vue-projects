<template>
    <div class='container-fluid '>
        <h3>Dashboard Component</h3>
        <button class='btn btn-danger btn-small signout-btn' @click='signOut'>Sign Out </button>
        <AddEvent />
    </div>
   
</template>

<script>
import {firebaseApp} from '../firebaseApp'
import AddEvent from './AddEvent.vue'
export default {
    methods: {
        signOut() {
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()
        }
    },
    components: {
        AddEvent
    }
}
</script>