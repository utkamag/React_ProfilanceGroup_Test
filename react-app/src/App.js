import './styles/App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import {useState} from "react";
import Popup from "./components/Popup";

function App() {

    const [popupActive, setPopupActive] = useState(false)

    return (
        <div>
            <Header turnOn={setPopupActive}/>
            <Main/>
            <Popup active={popupActive} setActive={setPopupActive}/>
        </div>
    );
}

export default App;
