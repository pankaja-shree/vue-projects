<template>
    <div id="app">
    <h3>Jokester</h3>
    <button class='btn btn-primary' @click='initJokes'>Add ten jokes</button>
    <button class='btn btn-primary' @click='addJoke'>Add a joke</button>
    <br>
    <span v-for='type in types'>
        <input 
            type='checkbox' 
            :value='type' 
            v-model='checkedTypes'
            checked>
        <label>{{type}}&nbsp;</label>
    </span>
    <br>
    <div class='col-md-12'>
        <Joke 
         v-for='(joke,index) in $store.state.jokes'
         v-show='checkedTypes.includes(joke.type)'
         :joke='joke'
         :index='index'
         key='index'
         />
    </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex' //maps vues action to actual method in actions.js
import Joke from './Joke.vue'

export default {
    data() {
        return {
            types: ['general', 'knock-knock', 'programming'],
            checkedTypes: ['general', 'knock-knock', 'programming']
        }
    },
    methods: mapActions ([ //insert the actions
        'initJokes',
        'addJoke'
    ]),
    components: {
        Joke
    }
}
</script>
