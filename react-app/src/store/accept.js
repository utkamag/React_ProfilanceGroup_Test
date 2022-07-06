// Локальное хранилище

const deafultState = {
    accept: []
}

// Actions

const SEND_ACCEPT = "SEND_ACCEPT"

// Reduxer

export const fourthreducer = (state = deafultState, action) => {
    switch (action.type) {
        case SEND_ACCEPT: {
            return ({...state, array: [...state.array, action.payload]})
        }
        default:
            return state
    }
  
}