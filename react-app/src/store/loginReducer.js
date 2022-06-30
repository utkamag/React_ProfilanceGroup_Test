// Локальное состояние

const defualtState = {
    login: "Гость",
}

const CHANGE_LOGIN = "CHANGE_LOGIN"


// Создаем Редьюсер

export const reducer = (state = defualtState, action) => {
    switch (action.type){
        case CHANGE_LOGIN:
            return {...state, login: action.payload }
        default:
            return state
    }
}

// Action creator

export const changeLogin = (payload) => ({type: CHANGE_LOGIN, payload})
