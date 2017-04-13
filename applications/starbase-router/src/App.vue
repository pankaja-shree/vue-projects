<template>
<div id="app">
<h3>Starbase router </h3>
<!-- add inner router link ; to- attribute specifies the route-->
<h4>
    <router-link class='link' to='/data/people'>Meet the Characters</router-link> |
    <router-link class='link' to='/data/planets'>Explore the planets</router-link>
</h4>
<router-view></router-view> <!-- to overlay the router constants -->
</div>
</template>