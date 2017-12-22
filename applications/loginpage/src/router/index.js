import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode:'history', //vuerouter has hashmode and history mode , hashmode switches routes with refreshes. 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/signin',
          component: Signin
    },
    { path: '/signup',
        component: Signup
    }
  ]
})
