import { createStore, compose, combineReducers } from 'redux'
import { profileReducer } from './profile/reduser'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({ // объединяет все редъюсеры
    profile: profileReducer
})

export const store = createStore(rootReducer, composeEnhancers())