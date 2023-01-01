import * as types from './types'

const initialState = {
    name: 'Giga',
    showVisible: false,
    
}

export const profileReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type) {
        case types.CHANGE_NAME:
            return {
                ...state,
                name: payload
            }
        case types.CHANGE_VISIBLE:
            return {
                ...state,
                showVisible: !state.showVisible,
            }
        default:
            return state

    }
}