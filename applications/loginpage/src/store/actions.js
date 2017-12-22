import * as types from './mutation-types'

//action takes 2 parameters - commit obj from vuex and user_payload 
//then commit the sign in mutation passing in the user_payload

export const signIn = ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload) // this will call the types.SIGN_IN mutation 
}

//signout action that commits the signout mutation
//it has vuex object with vuex commit function as its first parameter and it commits signout mutation function 
export const signOut = ({commit}) => {
    commit(types.SIGN_OUT) // this will call the types.SIGN_IN function 
}

export const setStories = ({commit}, stories_payload) => {
    commit(types.SET_STORIES, stories_payload)
} 