import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import Router from "./components/Router";
import {Provider} from "react-redux";
import {store} from "./store/Store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
