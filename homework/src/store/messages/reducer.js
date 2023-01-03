import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from "./actions"

const initialState = {
    default: [
        {
            author: 'user',
            text: 'one text'
        },
        {
            author: 'user',
            text: 'two text'
        }
    ]
}

export const messagesReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_CHAT:
            return {
                ...state, // возвращаем все предыдущие чаты
                [payload]: []
            }
        case DELETE_CHAT:
            const chats = { ...state }
            delete chats[payload]
            return chats
        case ADD_MESSAGE:
            return {
                ...state,
                [payload.chatName]: [
                    ...state[payload.chatName], //вернуть все сообщения
                    {
                        author: payload.text.author,
                        text: payload.text.text
                    } // добавили новые сообщения
                ]
            }
        default:
            return state
    }
}