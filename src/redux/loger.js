export const logger = (state) => {
    return function(next) {
        return function(action) {
            console.log(state.getState(), action)
            return next(action)
        }
    }
}