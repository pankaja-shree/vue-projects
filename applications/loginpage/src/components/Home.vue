<template>
  <div class="hello">
    <HeaderBar></HeaderBar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import HeaderBar from './Header'
export default {
  name: 'Home',
  components: {
    HeaderBar
  },
  data () {
    return {
      msg: 'Code Stories landing page'
    }
  }
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