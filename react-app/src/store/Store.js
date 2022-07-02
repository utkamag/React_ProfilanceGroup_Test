import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./loginReducer";
import {secondReducer} from "./dataofNews";


// Создаем store (сюда необходимо передать редьюсер, если редьюсеров несколко, используем метод combineReducer)

let rootReducer = combineReducers({loginReducer: reducer, newsReducer: secondReducer})


export const store = createStore(rootReducer, composeWithDevTools())
