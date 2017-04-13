import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations.js' //object because in mutation.js, export const not export default
import * as actions from './actions'
Vue.use(Vuex) //vue instance to use vuex library

//create a state constant that has the initial data for the application
const state = {
    jokes: []
}

//export by default a Vuex instance passing the store of state constant, accessible globally as $store
export default new Vuex.Store({
    state,
    mutations,
    actions
})