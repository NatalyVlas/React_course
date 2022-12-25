import * as types from './types'

export const changeName = (name) => {
    return {
        type: types.CHANGE_NAME,
        payload: name
    }
}
export const selectCheckbox = (visible) => {
    return {
        type: types.SELECT_CHECKBOX,
        payload: visible
    }
}
