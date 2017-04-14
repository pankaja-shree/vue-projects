<template>
    <div class='form-inline'>
        <h3>Sign-in </h3>
        <div class='form-group'>
            <input 
              type='email' 
              placeholder = 'email' 
              class='form-control'
              v-model='email'
              />
            <input 
              type='password' 
              placeholder = 'password' 
              class='form-control'
              v-model='password'
              />
            <button 
             class='btn btn-primary'
             @click='signIn'>Sign in! </button>
        </div>
        <br>
        <p>{{error.message}}</p>
        <br>
        <router-link to='/signup'>Sign Up </router-link>
        
    </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp' //to handle sign in 

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
            signIn() {
                firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
                .catch(error => {
                    this.error = error
                })
            }
        }
    }
</script>