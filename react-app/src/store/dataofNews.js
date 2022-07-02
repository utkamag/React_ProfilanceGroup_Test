// Локальное состояние

const defualtState = {
    title: "",
    text: "",
    date: ""
}

//Добавляем загаловок
const ADD_TITLE = "ADD_TITLE"
//Добавляем очновной текст
const ADD_TEXT = "ADD_TEXT"
//Добавляем дату
const ADD_DATE = "ADD_DATE"


// Создаем Редьюсер

export const secondReducer = (state = defualtState, action) => {
    switch (action.type) {
        case ADD_TITLE:
            return {...state, title: action.payload}
        case ADD_TEXT:
            return {...state, text: action.payload}
        case ADD_DATE :
            return {...state, date: action.payload}
        default:
            return state
    }
}