import { createStore, compose, combineReducers } from 'redux'
import { profileReducer } from './profile/reduser'
import { messagesReducer } from './messages/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({ // объединяет все редъюсеры
    profile: profileReducer,
    messages: messagesReducer
})

export const store = createStore(rootReducer, composeEnhancers())