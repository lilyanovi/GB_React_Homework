import * as types from '../messages/types'
import { AUTHOR } from '../../constants'

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

let timeout

export const addMessageWithReply = (chatName, message) => (dispatch) => {
    dispatch(addMessage(chatName, message))

    if (message.author !== AUTHOR.bot) {

        if (timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            dispatch(addMessage(chatName, {
                author: AUTHOR.bot,
                text: 'Thanks for the feedback'
            }))
        }, 1000)
    }
}