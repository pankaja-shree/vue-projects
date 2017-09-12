<template>
  <div id="app">
  Recipe box
  <form>
  <input v-model="dish.name"  type = "text" placeholder = "Recipe Name" required>
  <textarea  v-model="dish.ingredients" rows = "5" cols = "50" placeholder = "Enter ingredients separated by Commas"></textarea><br>
  <input type = "button" @click = "addrecipe" value = "Add new recipe">
  </form>
    <Recipe :recipe-item = "recipes"></Recipe>
  </div>
</template>

<script>
import Recipe from './components/recipe'
export default {
  name: 'app',
  components: {
    Recipe
  },
  data () {
    return {
      dish: {
      },
      recipes: [
        {
          name: 'Pumpkin Pie',
          ingredients: 'Pumpkin Puree,Sweetened Condensed Milk,Eggs,Pumpkin Pie Spice,Pie Crust'
        },
        {
          name: 'Spaghetti',
          ingredients: 'Noodles,Tomato Sauce,(Optional) Meatballs'
        }
      ]
    }
  },
  methods: {
    addrecipe () {
      return this.recipes.push(this.dish)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input{
  margin: 1% auto;
  padding: 1%;
  display: block;
}
</style>
