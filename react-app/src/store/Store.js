import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./loginReducer";
import {secondReducer} from "./dataofNews";
import {thirdreducer} from "./newsRequestReducer";
import {fourthreducer} from "./accept";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {fifthreducer} from "./acceptSend"; // defaults to localStorage for web


// Создаем store, также используем Redux persist

export const rootReducer = combineReducers({
    loginReducer: reducer,
    newsReducer: secondReducer,
    newsRequestReducer: thirdreducer,
    acceptReducer: fourthreducer,
    acceptSendReducer: fifthreducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools())

export const persistor = persistStore(store)




