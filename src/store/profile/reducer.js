import * as types from './types'

const initialState = {
    name: 'Giga',
    visible: false,
    isAuth: false
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
                visible: !state.visible,
            }
        case types.IS_AUTH:
            return {
                ...state,
                isAuth: payload,
            }
        default:
            return state

    }
}