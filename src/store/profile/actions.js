import * as types from '../profile/types'

export const changeName = (data) => {
    return {
        type: types.CHANGE_NAME, 
        payload: data
    }
}

export const changeVisible = () => {
    return {
        type: types.CHANGE_VISIBLE  
    }
}

export const auth = (auth) => {
    return {
        type: types.IS_AUTH,
        payload: auth   
    }
}