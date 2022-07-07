import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import headerLogo from '../assets/img/header_img.svg'
import {useDispatch, useSelector} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";

const Header = () => {
    //Переадресация

    let navigate = useNavigate()

    //Redux dispatch, открываем popup

    let dispatch = useDispatch()

    //Redux (получаем данные со store)

    const reload = useSelector(state => state.loginReducer.inside)
    const insideOutside = useSelector(state => state.loginReducer.inside)
    const loginOfUser = useSelector(state => state.loginReducer.login)


    //Включаем popup

    const onTurn = () => {
        if (reload === "Вход") {
            navigate("/")
            dispatch({type:"POPUP_ACTIVATE", payload: true})

        }
        else if (reload === "Выход") {
            navigate("/")
            dispatch({type: "CHANGE_LOGIN", payload: "Гость"})
            dispatch({type: "INOUT_LOGIN", payload: "Вход"})
        }

    }

    // Функция по переадресации (админ на страцницу к админу, обычный пользователь на свою)

    const linkToFunction = () => {
        if (loginOfUser === "admin") {
            navigate("/admin")
        }
        else if (loginOfUser === "user") {
            navigate("/user")
        }
        else {
            navigate("/news")
        }
    }


    return (
        <div className="wrapper">
            <div className="header">
                <Link to="/">
                    <img className="header__img" src={headerLogo} alt="headerLogo"/>
                </Link>
                <div className="header__list">
                    <span className="header__news" onClick={linkToFunction}>Новости</span>
                    <span className="header__login-active" onClick={onTurn}>{insideOutside}</span>
                </div>

            </div>
        </div>
    );
};

export default Header;