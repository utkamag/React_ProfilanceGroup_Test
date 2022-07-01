import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import headerLogo from '../assets/img/header_img.svg'
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    //Переадресация

    let navigate = useNavigate()

    //Redux dispatch, открываем popup

    let dispatch = useDispatch()

    //Redux презагрузка страницы

    let reload = useSelector(state => state.inside)

    //Redux
    const insideOutside = useSelector(state => state.inside)

    //Включаем popup

    const onTurn = () => {
        if (reload === "Вход") {
            dispatch({type:"POPUP_ACTIVATE", payload: true})

        }
        else if (reload === "Выход") {
            navigate("/")
            window.location.reload()
        }

    }


    return (
        <div className="wrapper">
            <div className="header">
                <Link to="/">
                    <img className="header__img" src={headerLogo} alt="headerLogo"/>
                </Link>
                <div className="header__list">
                    <span className="header__news">Новости</span>
                    <span className="header__login-active" onClick={onTurn}>{insideOutside}</span>
                </div>

            </div>
        </div>
    );
};

export default Header;