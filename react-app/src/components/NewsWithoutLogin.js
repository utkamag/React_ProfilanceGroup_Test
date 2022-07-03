import React from 'react';
import Header from "./Header";
import News from "./News";
import PopupNews from "./PopupNews";

const NewsWithoutLogin = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="news-without-login">*для полного доступа к функциям сайта, необходимо авторизоваться</div>
            <News/>
            <PopupNews/>
        </div>
    );
};

export default NewsWithoutLogin;