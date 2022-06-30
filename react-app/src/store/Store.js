import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./loginReducer";


// Создаем store (сюда необходимо передать редьюсер, если редьюсеров несколко, используем метод combineReducer)


export const store = createStore(reducer, composeWithDevTools())