import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "../App";
import Admin from "./Admin";
import User from "./User";
import NewsWithoutLogin from "./NewsWithoutLogin";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/news" element={<NewsWithoutLogin/>}/>
        </Routes>
    );
};

export default Router;