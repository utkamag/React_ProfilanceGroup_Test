// Локальное хранилище

const defaultState = {
    send: []
}

// Actions

const SEND_ACCEPT = "SEND_ACCEPT"



// Reducer

export const fifthreducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_ACCEPT:
            return {...state, send: [...state.send, action.payload]}
        default:
            return state
    }

}