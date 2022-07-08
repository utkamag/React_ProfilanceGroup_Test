// Локальное хранилище

const defaultState = {
    pass: [],
}

// Actions

const PASS_ACCEPT = "PASS_ACCEPT"
const DELETE_ACCEPT = "DELETE_ACCEPT"

// Reducer

export const fourthreducer = (state = defaultState, action) => {
    switch (action.type) {
        case PASS_ACCEPT:
            return {...state, pass: [...state.pass, action.payload]}
        case DELETE_ACCEPT:
            return {pass: state.pass.filter((sen) => action.payload !== sen.id)}
        default:
            return state
    }

}