import * as types from '../profile/types'

export const changeName = (data) => {
    return {
        type: types.CHANGE_NAME, 
        payload: data
    }
}

export const changeVisible = (data) => {
    return {
        type: types.CHANGE_VISIBLE, 
        payload: data
    }
}