import Vue from 'vue'
import App from './App.vue'

//create vue instance to render the template from App.vue

new Vue({
    el: '#app',
    //render method renders the App.vue component on index.html
    //it takes one parameter( h is general name) that takes care of creating the element actual rendering
    render: h => h(App)
})