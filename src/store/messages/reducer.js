import * as types from './types'

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
            return {
                ...state,
                [payload.chatName.chatId]: [
                    ...state[payload.chatName.chatId],
                    {
                        author: payload.text.author,
                        text: payload.text.text
                    }
                ]
            }
        default:
            return state

    }
}