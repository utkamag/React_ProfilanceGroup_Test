import React from 'react';
import Header from "./Header";
import News from "./News";
import PopupNews from "./PopupNews";

const Admin = () => {
    return (
        <div>
            <Header/>
            <News/>
            <PopupNews/>
        </div>
    );
};

export default Admin;