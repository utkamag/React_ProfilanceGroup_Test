import React from 'react';
import Header from "./Header";
import News from "./News";
import PopupNews from "./PopupNews";
import AdminAccept from "./AdminAccept";

const Admin = () => {
    return (
        <div>
            <Header/>
            <AdminAccept/>
            <News/>
            <PopupNews/>
        </div>
    );
};

export default Admin;