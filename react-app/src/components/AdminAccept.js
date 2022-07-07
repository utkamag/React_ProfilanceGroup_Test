import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const AdminAccept = () => {

    // Redux

    const dispatch = useDispatch()

    const allNews = useSelector(state => state.acceptReducer.send)

    // Удаляем новость

    const deleteWidget = () => {
        dispatch({type:"DELETE_ACCEPT", payload: allNews.id})
    }


    return (
        <div className="wrapper">
            <div className="admin-main">
                <h2>Новости, которые предложили пользователи:</h2>
                {allNews.map(news => {
                    return (
                        <div className="admin" onClick={deleteWidget}>
                            <div className="admin__widget">
                                <div className="admin__title">{news.news_title}</div>
                                <div className="admin__text">{news.news_text}</div>
                                <div className="admin__date">{news.date}</div>
                            </div>
                            <div className="admin__button">
                                <button className="admin__button-accept">Одобрить новость</button>
                                <button className="admin__button-delete">Удалить</button>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    );
};

export default AdminAccept;