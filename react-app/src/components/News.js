import  React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const News = () => {

    // Достаем массив со store

    const array = useSelector(state => state.newsRequestReducer.array)

    //Стейт массива и фильтрации данных

    const [newsList, setNewsList] = useState(array)
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
                {newsList.filter((list) => list.allData.toLowerCase().includes(search)).map((array) => {
                    return (
                        <div className="news__widget" key={newsList.id} onDoubleClick={popupOn}>
                            <div className="news__widget-title" key={newsList.id}>
                                {array.news_title}
                            </div>
                            <div className="news__widget-text" key={newsList.id}>
                                {array.news_text}
                            </div>
                            <div className="news__widget-date" key={newsList.id}>
                                {array.date}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default News;