// Локальное хранилище

const defaultState = {
    send: [],
    pass: []
}

// Actions

const SEND_ACCEPT = "SEND_ACCEPT"
const PASS_ACCEPT = "PASS_ACCEPT"
const DELETE_ACCEPT = "DELETE_ACCEPT"

// Reducer

export const fourthreducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_ACCEPT: {
            return {...state, send: [...state.send, action.payload]}
        }
        case PASS_ACCEPT: {
            return {...state, pass: [...state.pass, action.payload]}
        }
        case DELETE_ACCEPT: {
            return {...state, send: state.send.filter(sen => sen.id !== action.payload)}
        }
        default:
            return state
    }

}