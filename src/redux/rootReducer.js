import { combineReducers } from "redux"
import { CHANGE_THEME, DECREMENT, DISABLED, ENABLE, INCREMENT } from "./types"

const counterReducer = (state = 0, action) => {

    if(action.type === INCREMENT) {
        return state + 1
    }else if(action.type === DECREMENT) {
        return state - 1
    }

    return state
}

const initThemeState = {
    value: 'light',
    disabled: false
}

const themeReducer = (state = initThemeState, action) => {
    switch(action.type) {
        case CHANGE_THEME: 
            return {...state, value: action.payload}
        case ENABLE: 
            return {
                ...state, disabled: false
            }
        case DISABLED: 
            return {
                ...state, disabled: true
            }
        default: return state
    }
}

export const rootReducer = combineReducers(
    {
        counter: counterReducer,
        theme: themeReducer
    }
)