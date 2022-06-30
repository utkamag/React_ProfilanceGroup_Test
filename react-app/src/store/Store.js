import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./loginReducer";
import {secondReducer} from "./inOutLogin";

//Combine reducers

const rootReducer = combineReducers({
    reducer,
    secondReducer
})

// Создаем store (сюда необходимо передать редьюсер, если редьюсеров несколко, используем метод combineReducer)

export const store = createStore(rootReducer, composeWithDevTools())