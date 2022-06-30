import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "../App";
import Admin from "./Admin";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    );
};

export default Router;