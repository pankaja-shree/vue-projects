import Vue from 'vue'

import App from './App.vue'
import store from './store'

import Router from 'vue-router'
import AddStory from './components/AddStory'
import Dashboard from './components/dashboard'
import Login from './components/Login'
import Signup from './components/Signup'
//import router from './router'
import {firebaseApp} from './firebaseApp'

Vue.use(Router)

const router = new Router({
  mode:'history', //vuerouter has hashmode and history mode , hashmode switches routes with refreshes.
  routes: [
    {
      path: '/addstory',
      name: 'AddStory',
      component: AddStory
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },

  ]
})

//firbase listens if user has signed in or out on any path of the app - always before Vue instance
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
      store.dispatch('signIn',user) // call the action signIn with the user parameter
      router.push('/dashboard') //routerpush method will navigate to this page and place this page on top (last of the stack)
    }
  else {
      router.replace('/login') //replace will place this page on the beginning of the stack
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
