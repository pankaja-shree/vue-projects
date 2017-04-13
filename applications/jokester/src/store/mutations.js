import * as types from './mutation-types' //gets all the constants at once available in single types object

//export the mutation functions as an object
//they take 2 parameters - state and payload
//payload - obj whose state is to be modified
export const mutations ={
    [types.INIT_JOKES] (state, payload) { //creates a function named INIT_JOKES
        state.jokes.push(...payload)
    }, 
    [types.ADD_JOKE] (state, payload) {
        state.jokes.push(payload)
    },
    [types.REMOVE_JOKE] (state, index) {
        state.jokes.splice(index,1)
    }
}