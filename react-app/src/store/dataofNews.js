// Локальное состояние

const defaultState = {
    title: "",
}


//Добавляем текст
const ADD_TEXT = "ADD_TEXT"



// Создаем Редьюсер

export const secondReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return {...state, title: action.payload}
        default:
            return state
    }
}