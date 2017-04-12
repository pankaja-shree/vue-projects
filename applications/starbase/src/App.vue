<template>
<div id="app">
    <h3>{{title}}</h3>
</div>
</template>

<script>
//export a new default object which becomes Vue instance
//like components, default obj uses data function, which will return the data object needed for this component
export default {
    name: 'app',
    data() {
        return {
            title: 'Generate your team'
        }
    }
}
</script>