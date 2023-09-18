import { DECREMENT, INCREMENT } from "./types"

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
        setTimeout(() => {
            dispatch(increment())
        }, 1500)
    } 

}