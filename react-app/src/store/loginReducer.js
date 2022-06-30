// Локальное состояние

const defualtState = {
    login: "Гость",
    inside: "Вход",
    popupActive: false
}

//main {login}
const CHANGE_LOGIN = "CHANGE_LOGIN"
//header вход/выход
const INOUT_LOGIN = "INOUT_LOGIN"
//Открываем popup
const POPUP_ACTIVATE = "POPUP_ACTIVATE"


// Создаем Редьюсер

export const reducer = (state = defualtState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {...state, login: action.payload}
        case INOUT_LOGIN:
            return {...state, inside: action.payload}
        case POPUP_ACTIVATE:
            return {...state, popupActive: action.payload}
        default:
            return state
    }
}

// Action creator

export const changeLogin = (payload) => ({type: CHANGE_LOGIN, payload})
