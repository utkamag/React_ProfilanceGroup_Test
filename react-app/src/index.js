import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import Router from "./components/Router";
import {Provider} from "react-redux";
import {store, persistor} from "./store/Store";
import {PersistGate} from 'redux-persist/integration/react'
import { initializeApp } from "firebase/app";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// Хостинг firebase


const firebaseConfig = {
    apiKey: "AIzaSyAhSZ5-G5KoCOj4Vkg-LDkINlAgjAmobsw",
    authDomain: "reactprofilancegroup.firebaseapp.com",
    projectId: "reactprofilancegroup",
    storageBucket: "reactprofilancegroup.appspot.com",
    messagingSenderId: "1004109735258",
    appId: "1:1004109735258:web:a565148bef236a00a87f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);