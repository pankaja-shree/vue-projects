<template>
  <div class="recipe">
  <div v-for = "recipe in recipeItem">
    <h2>{{recipe.name}}</h2>
    <h3>{{recipe.ingredients}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipe',
  props: ['recipeItem']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
