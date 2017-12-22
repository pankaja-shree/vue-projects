//import store from store directory and pass the store in the Vue instance
import store from './store'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {firebaseApp} from './firebaseApp'

import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

//firbase listens if user has signed in or out on any path of the app - always before Vue instance
firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        store.dispatch('signIn',user) // call the action signIn with the user parameter
        router.push('/dashboard') //routerpush method will navigate to this page and place this page on top (last of the stack)
    }
    else {
        router.replace('/signin') //replace will place this page on the beginning of the stack
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})