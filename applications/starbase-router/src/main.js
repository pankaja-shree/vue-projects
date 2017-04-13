import Vue from 'vue'
import VueRouter from 'vue-router'

//alow vue instances to use vue-router to manage the paths
Vue.use(VueRouter)


import App from './App.vue'
import Data from './components/Data.vue'

//create objects that maps routes with the components needed for that route
const routes = [
    { path: '/data/:type', //:type - optional path - indicates the type variable in data component 
      component: Data    
    }
]

//create router instance and pass th object containing the routes
const router = new VueRouter({
    routes
})


new Vue({
    el: '#app',
    router, //tell the instance to use the router
    render: h => h(App)
})