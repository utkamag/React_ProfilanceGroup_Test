import './styles/App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import {useState} from "react";
import Popup from "./components/Popup";

function App() {

    return (
        <div>
            <Header/>
            <Main/>
            <Popup/>
        </div>
    );
}

export default App;
