<template>
<div id = 'app'>
<md-toolbar class="md-medium md-accent">
  <h1 class="md-title" style="flex: 1"><b>FCC Data Visualization Project 3: Recipe box</b></h1>
  <modal></modal>
</md-toolbar>
</div>
</template>

<script>
import modal from './components/modal.vue'
export default {
  name: 'app',
  components: {
    modal
  }
}
</script>