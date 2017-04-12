<template>
<div class = ''>
Type: {{type}}
</div>
</template>

<script>
export default {
    data() {
        return {
            //$route is from vue-router
            type: this.$route.params.type
        }
    }
}
</script>