import * as types from './mutation-types'

//initJokes action
export const initJokes = ({commit}) => {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten', {
        method: 'GET'
    })
      .then (response => response.json())
      .then (json => commit(types.INIT_JOKES,json)) // commit parameters - mutation signature and a payload
}

//add single joke action
export const addJoke = ({commit}) => {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', {
        method: 'GET'
    })
      .then (response => response.json())
      .then (json => commit(types.ADD_JOKE,json)) // commit parameters - mutation signature and a payload
}

//remove joke action
export const removeJoke = ({commit}, index) => {
    commit(types.REMOVE_JOKE, index)
}