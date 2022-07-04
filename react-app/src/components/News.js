import React, {useEffect, useState} from 'react';
import NEWS_DATA from "../assets/JSON/package.json"
import {useDispatch} from "react-redux";

const News = () => {

    const data = NEWS_DATA

    //Стейт массива и фильтрации данных

    const [newsList, setNewsList] = useState(data)
    const [search, setSearch] = useState("")

    //Redux

    let dispatch = useDispatch()

    //При клике на блок новостей включаем popup
    //Передаем данные с массива в store, для последующей передачи в popupNews

    const popupOn = (e) => {
        console.log(e.currentTarget)
        dispatch({type: "POPUP_ACTIVATE", payload: true})
        dispatch({type: "ADD_TEXT", payload: e.currentTarget.innerText})

    }


    return (
        <div className="wrapper">
            <input className="search__input" type="text" placeholder="Поиск новостей" value={search}
                   onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            <div className="news">
                {newsList.filter((list) => list.news_title.toLowerCase().includes(search)).map((data) => {
                    return (
                        <div className="news__widget" onClick={popupOn}>
                            <div className="news__widget-title" key={newsList.id}>
                                {data.news_title}
                            </div>
                            <div className="news__widget-text" key={newsList.id}>
                                {data.news_text}
                            </div>
                            <div className="news__widget-date" key={newsList.id}>
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