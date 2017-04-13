<template>
<div class = 'col-md-12'>
    <Item
    v-for='(item,index) in items'
    key='index'
    :passed-item='item'
    :type='type'>
    </Item>
</div>
</template>

<script>
import Item from './Item.vue'
export default {
    data() {
        return {
            //$route is from vue-router; params object from route, type from the path
            type: this.$route.params.type,
            items: []
        }
    },
    //watch property checks fr updates in the specified property and executes the specified function
    watch: {
        '$route' : 'fetchItems'
    },
    methods: {
        //get the items displayed
        fetchItems() {
            this.items= [];
            let initial_ids = [1,13,14];
            this.type= this.$route.params.type;
            
            for( let i in initial_ids){
                let id = initial_ids[i];
                fetch(`http://swapi.co/api/${this.type}/${id}`,{
                    method: 'GET'
                })
                  .then(response => response.json())
                  .then(json => this.items.push(json))
            }
        }
    },
    //load initial ids when component loads initially
    created() {
        this.fetchItems()
    },
    components: {
        Item
    }
}
</script>