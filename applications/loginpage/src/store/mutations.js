import * as types from './mutation-types'

//export mutation object containing functions 
export const mutations = {
    [types.SIGN_IN] (state, user_payload) {
        state.user = user_payload
    },
    [types.SIGN_OUT] (state) {
        state.user = {}
    },
    [types.SET_STORIES] (state, stories_payload) {
        state.stories = stories_payload
    }
}