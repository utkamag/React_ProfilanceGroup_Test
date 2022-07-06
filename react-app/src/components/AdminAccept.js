import React from 'react';
import {useSelector} from "react-redux";

const AdminAccept = () => {

    // Redux

    const allNews = useSelector(state => state.acceptReducer.send)


    return (
        <div className="wrapper">
            <div>
                <h2>Новости, которые предложили пользователи</h2>
                {allNews.map(news => {
                    return(
                        <div>{allNews.news_title}</div>
                    )
                })}

            </div>

        </div>
    );
};

export default AdminAccept;