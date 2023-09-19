import { CHANGE_THEME, DECREMENT, DISABLED, ENABLE, INCREMENT } from "./types"

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const asnycDecrement = () => {
    return function(dispatch) {
        dispatch(disableButton());
        setTimeout(() => {
            dispatch(increment())
            dispatch(enableButton())
        }, 1500)
    } 
}

export const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}

export const disableButton = () => {
    return {
        type: DISABLED
    }
}

export const enableButton = () => {
    return {
        type: ENABLE
    }
}