<template>
    <div class=' '>
        <h3>Sign-up</h3>
        <input
         type='email'
         placeholder='email'
         v-model='email'
        />
        <input
          type='password'
          placeholder='password'
          v-model='password'
        />
        <button class='btn btn-secondary' @click='signUp'> Sign up</button>  
        <router-link to='/signin'>Sign In </router-link>
        {{error.message}}
    </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'

export default {
    data() {
        return {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    },
    methods: {
        signUp() {
            firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
            .catch(error => {
                this.error = error
            })
        }
    }
}
</script>