import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeLogin} from "../store/loginReducer";

const Popup = ({active, setActive}) => {

    //Используем хук с переадресацией

    // Redux

    let dispatch = useDispatch()


    let navigate = useNavigate()

    // Стейт с данными юзера

    const [user, setUser] = useState({
        login: "",
        password: ""
    })

    //Данные с инпута

    const handleChange = (e) => {
        if (e.target.name === "login") {
            setUser({
                login: e.target.value,
                password: user.password
            })
        } else if (e.target.name === "password") {
            setUser({
                login: user.login,
                password: e.target.value
            })
        }
    }

    //Submit, переадресируем если данные на страницу admin или user

    const loginIn = (e) => {
        e.preventDefault()
        console.log(user)

        if (user.login === "user" && user.password === "user" ) {
            dispatch({type: "CHANGE_LOGIN", payload: user.login})
            dispatch({type: "INOUT_LOGIN", payload: "Выход"})
            navigate("/user")
        }

        else if (user.login === "admin" && user.password === "admin" ) {
            dispatch({type: "CHANGE_LOGIN", payload: user.login})
            dispatch({type: "INOUT_LOGIN", payload: "Выход"})
            navigate("/admin")
        }

        else {
            alert("Некоректные данные")
        }


    }



    return (
        <div className={active ? "popup" : "popup__none"} onClick={() => setActive(false)}>
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <div className="popup__title">Войти в систему</div>
                <form onSubmit={loginIn}>
                    <input className="popup__input" type="text" placeholder="Логин" name="login" value={user.login}
                           onChange={handleChange}/>
                    <input className="popup__input" type="password" placeholder="Пароль" name="password"
                           value={user.password}
                           onChange={handleChange}/>
                    <button className="popup__submit" type="submit">Вход</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;