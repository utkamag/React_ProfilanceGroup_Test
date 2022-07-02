import React from 'react';
import NEWS_DATA from "../assets/JSON/package.json"
import {useDispatch} from "react-redux";

const News = () => {

    //Redux

    let dispatch = useDispatch()

    // При клике на блок новостей включаем popup

    const popupOn = (e) => {
        dispatch({type: "POPUP_ACTIVATE", payload: true})
        // dispatch({type: "ADD_TITLE", payload: e.target})
        // dispatch({type: "ADD_TEXT", payload: "1"})
        // dispatch({type: "ADD_DATE", payload: "2"})
    }

    //Передаем данные с массива в store, для последующей передачи в popupNews

    const test1 = (e) => {
        dispatch({type: "ADD_TITLE", payload: e.target.textContent})
    }

return (
        <div className="wrapper">
            <div className="news">
                {NEWS_DATA.map((data) => {
                    return (
                        <div className="news__widget" onClick={popupOn}>
                            <div className="news__widget-title" onClick={test1}>
                                {data.news_title}
                            </div>
                            <div className="news__widget-text">
                                {data.news_text}
                            </div>
                            <div className="news__widget-date">
                                {data.date}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default News;