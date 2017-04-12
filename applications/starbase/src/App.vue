<template>
<div id="app">
    <h3>{{title}}</h3>
    <h5>{{subtitle}}</h5>
    <div class='col-md-12'>
        <!-- v-bind:id - shorthand is :id -->
        <Character 
         v-for='(id,index) in initial_ids'
         v-bind:id='id'
         key='index'
         />
        
    </div>
    
</div>
</template>

<script>
//get character component
import Character from './components/Character.vue'

//export a new default object which becomes Vue instance
//like components, default obj uses data function, which will return the data object needed for this component
export default {
    name: 'app',
    data() {
        return {
            title: 'Generate your team',
            subtitle: 'Click on the cards for new Characters',
            initial_ids: [1, 13, 14]
        }
    },
    components: {
        Character
    }
}
</script>