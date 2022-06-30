// Локальное состояние

const defualtState = {
    login: "Гость",
    inside: "Вход"
}

//main {login}
const CHANGE_LOGIN = "CHANGE_LOGIN"
//header вход/выход
const INOUT_LOGIN = "INOUT_LOGIN"



// Создаем Редьюсер

export const reducer = (state = defualtState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {...state, login: action.payload}
        case INOUT_LOGIN:
            return {...state, inside: action.payload}
        default:
            return state
    }
}

// Action creator

export const changeLogin = (payload) => ({type: CHANGE_LOGIN, payload})
