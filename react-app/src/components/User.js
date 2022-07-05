import React from 'react';
import Header from "./Header";
import NewsRequest from "./NewsRequest";
import News from "./News";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const User = () => {

    return (
        <div>
            <Header/>
            <News/>
            <NewsRequest/>
        </div>
    );
};

export default User;