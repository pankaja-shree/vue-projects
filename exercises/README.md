# Projects created from [Udemy Course on Vue JS](https://www.udemy.com/vue-web-apps/learn/v4/overview)

## Applications:

### [Notes App](applications/notemaster/index.html)
### [Single Page application using the Star Wars API](applications/starbase/index.html)

## Exercises:

* [Creating and using a Vue instance](instance/index.html) 
* [Using Directives for reactive and conditional rendering](directives/index.html)
* [Using v-for and v-if](lists/index.html)
* [Using v-on for interactivity](buttons/index.html)
* [Creating and working with components and props](components/index.html)
* [V-model and computed properties](computed/index.html)
* [Lifecyle hooks](hooks/index.html)

## Notes:

* A Vue instance accepts an options object that allows us to manipulate html and add reactivity through various Vue features.

* A Vue directive follows the v- pattern and allows us to add dynamic attributes to elements of the html.

* The v-if directive accomplishes conditional rendering.

* The v-for directive creates dynamic lists.

* V-on allows interactivity by binding instance methods to the click handler of elements.

* Components in Vue encapsulate HTML with Vue interactivity and create reusable code.

* V-models map data to pieces of HTML to allow two-way data binding,

* Computed properties use complex logic to return modified pieces of data.

* Lifecycle hooks like created, mounted, and updated allow vue instances to run specific code throughout its lifespan.

### Creating vue project using a webpack template:

* Webpack - tool to launch a server to host our code and see edits of application in realtime

Command - vue init <webpack-template-name> <project-name>
Example - vue init webpack-simple starbase
And follow the instructions to install node modules

