import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import Router from "./components/Router";
import {Provider} from "react-redux";
import {store, persistor} from "./store/Store";
import {PersistGate} from 'redux-persist/integration/react'


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
