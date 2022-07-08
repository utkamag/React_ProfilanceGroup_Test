import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import addSVG from "../assets/img/add.svg"
import deleteSVG from "../assets/img/delete.svg"

const AdminAccept = () => {

    // Redux


    const dispatch = useDispatch()

    const allNews = useSelector(state => state.acceptReducer.pass)

    // Удаляем новость

    const deleteWidget = (news) => {
        dispatch({type: "DELETE_ACCEPT", payload: news.id})
    }

    // Утверждаем новость в главвный компонент новостей

    const passNews = (news) => {
        dispatch({type: "ADD_NEWS", payload: news})

    }



    return (
        <div className="wrapper">
            <div className="admin-main">
                <h2>Новости, которые предложили пользователи:</h2>
                {allNews.length > 0 ? (
                        allNews.map((news) => {
                            return (
                                <div className="admin">
                                    <img className="admin__img-delete" onClick={() => deleteWidget(news)}
                                         src={deleteSVG} alt="delete"/>
                                    <div className="admin__widget">
                                        <div className="admin__title">{news.news_title}</div>
                                        <div className="admin__text">{news.news_text}</div>
                                        <div className="admin__date">{news.date}</div>
                                    </div>
                                    <img className="admin__img-add" onClick={() => passNews(news)} src={addSVG} alt="add"/>
                                </div>
                            )
                        })

                    )
                    : (
                        <div>Запросов на модерацию новостей нет</div>
                    )
                }

            </div>
        </div>
    );
};

export default AdminAccept;