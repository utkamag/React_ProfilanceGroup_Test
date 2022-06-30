import React from 'react';
import {Link} from "react-router-dom";
import headerLogo from '../assets/img/header_img.svg'
import {useSelector} from "react-redux";

const Header = ({turnOn}) => {

    //Redux
    const insideOutside = useSelector(state => state.inside)

    //Включаем popup

    const onTurn = () => {
        turnOn(true)
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