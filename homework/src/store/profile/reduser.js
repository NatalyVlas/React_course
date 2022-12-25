import * as types from './types'

const initialState = {
    name: 'John',
    visible: true
}

export const profileReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.CHANGE_NAME:
            return {
                ...state,
                name: payload
            }
        case types.SELECT_CHECKBOX:
            return {
                ...state,
                visible: true
            }

        default:
            return state
    }
}