import React from 'react';
import {useSelector} from "react-redux";


const Main = () => {

    // Получаем данные со Store

    const loginName = useSelector(state => state.loginReducer.login)

    return (
        <div className="wrapper">
            <div className="main">
                <h1 className="main__title">Привет, {loginName}</h1>
            </div>
        </div>
    );
};

export default Main;