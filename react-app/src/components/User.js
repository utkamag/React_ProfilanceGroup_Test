import React from 'react';
import Header from "./Header";
import NewsRequest from "./NewsRequest";
import News from "./News";
import PopupNews from "./PopupNews";

const User = () => {

    return (
        <div>
            <Header/>
            <News/>
            <NewsRequest/>
            <PopupNews/>
        </div>
    );
};

export default User;