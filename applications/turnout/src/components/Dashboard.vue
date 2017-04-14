<template>
    <div class=' '>
        <h3>Dashboard Component</h3>
        {{$store.state}}
        <button class='btn btn-danger btn-small signout-btn' @click='signOut'>Sign Out </button>
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