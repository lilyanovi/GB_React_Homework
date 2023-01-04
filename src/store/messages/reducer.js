import * as types from './types'
import { AUTHOR } from '../../constants' 

const initialState = {
    default: [
      {
        author: 'user',
        text: 'one text'
      },
      {
        author: 'user',
        text: 'two text'
      },
    ]
  }

  export const messagesReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type) {
        case types.ADD_CHAT:
            return {
                ...state,
                [payload]: []
            }
        case types.DEL_CHAT:
            const chats = {...state}
            delete chats[payload]
            return chats
        case types.ADD_MESSAGE:
            console.log('state', payload.chatName.chatId)
            return {
                ...state,
                [payload.chatName.chatId]: [
                    ...state[payload.chatName.chatId],
                    {
                        author: AUTHOR.user,
                        text: payload.text
                    }
                ]
            }
        case types.ADD_MESSAGE_BOT:
            console.log(payload)
            return {
                ...state,
                [payload]: [
                    ...state[payload],
                    {
                        author: AUTHOR.bot,
                        text: 'Thanks for the feedback'
                    }
                ]
            }
        default:
            return state

    }
}