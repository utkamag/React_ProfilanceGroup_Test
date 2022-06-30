// Локальное состояние

const inoutstate = {
    inside: "Вход",
}

const INOUT_LOGIN = "INOUT_LOGIN"


// Создаем Редьюсер

export const secondReducer = (state = inoutstate, action) => {
    switch (action.type) {
        case INOUT_LOGIN:
            return {...state, inside: action.payload}
        default:
            return state
    }
}
