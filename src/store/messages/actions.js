import * as types from '../messages/types'

export const addChat = (newChat) => {
    return {
        type: types.ADD_CHAT, 
        payload: newChat
    }
}

export const delChat = (chatName) => {
    return {
        type: types.DEL_CHAT, 
        payload: chatName
    }
}

export const addMessage = (chatName, text) => {
    return {
        type: types.ADD_MESSAGE, 
        payload: {chatName, text}
    }
}
export const addMessageBot = (chatName) => {
    return {
        type: types.ADD_MESSAGE_BOT, 
        payload: chatName
    }
}