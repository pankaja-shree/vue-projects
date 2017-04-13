# jokester

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

### Dependancy

Vuex - npm install vuex --save

### Notes

There are three items to the Vuex Recipe:

* The Store refers to the centralized object for the entire application that gives state to every component. The store centralizes all state in one global store object. That way, all components have access to the same state. As a result, updating state happens in a very controlled and predictable manner.

* Mutations represent the only way to modify and update state (in the store). By having very specific function names, these mutations can be committed from actions anywhere in the application in order to modify the state. Having these strict functions to modify state allows for predictable app behavior.

* Actions commit mutations. These actions signal a mutation to fire from anywhere in the application. Actions resemble mutations, but differ in that they commit mutations. Actions are callable by other functions in order to signal a mutation to fire and update the store.

### Improvements

* Got a good joke? Submit one or a few to the api (directions to submit on the README): https://github.com/15Dkatz/official_joke_api

* Add a new type to the application by submitting a few jokes with a different type to the api.