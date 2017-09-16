<template>
  <div id='recipe'>
    <md-toolbar md-theme="white">
    <span class="md-title">Recipes</span>
    </md-toolbar>

    <md-list>
    <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>News</span>

        <md-list-expand>
        <md-list>
            <md-list-item class="md-inset">World</md-list-item>
            <md-list-item class="md-inset">Americas</md-list-item>
            <md-list-item class="md-inset">Europe</md-list-item>
        </md-list>
        </md-list-expand>
    </md-list-item>

    <md-list-item>
        <md-icon>videogame_asset</md-icon>
        <span>Games</span>

        <md-list-expand>
        <md-list>
            <md-list-item class="md-inset">Console</md-list-item>
            <md-list-item class="md-inset">PC</md-list-item>
            <md-list-item class="md-inset">Phone</md-list-item>
        </md-list>
        </md-list-expand>
    </md-list-item>

    <md-list-item>
        <md-icon>video_library</md-icon>
        <span>Video</span>

        <md-list-expand>
        <md-list>
            <md-list-item class="md-inset">Humor</md-list-item>
            <md-list-item class="md-inset">Music</md-list-item>
            <md-list-item class="md-inset">Movies</md-list-item>
            <md-list-item class="md-inset">TV Shows</md-list-item>
        </md-list>
        </md-list-expand>
    </md-list-item>
    </md-list>
</div>
</template>

<script>
export default {
  name: 'recipe',
  data: {
      return {
          recipes: [
              {
                  title: "Pumpkin Pie", 
                  ingredients: [
                      "Pumpkin Puree", 
                      "Sweetened Condensed Milk", 
                      "Eggs", 
                      "Pumpkin Pie Spice", 
                      "Pie Crust"
                      ]
                      }, 
                {
                    title: "Spaghetti", 
                    ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
  {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
]
      }
  }
}