# turnout

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Dependancies

npm install vue-router vuex firebase --save

###Description of the app

* multiple routes based on authentication - sign in component, sign up component and main app - dash board
* App.vue will hold the routers for switching btw pages
* main.js handles the switching

### Improvements

Create an attendance “count” on each event card that keeps track of the number of users planning to go to an event.

Create a like/dislike voting system to keep track of popular events.

Integrate an API like the EventBrite api to load a list of real public events.