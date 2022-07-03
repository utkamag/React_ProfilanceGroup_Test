import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const PopupNews = () => {

// Redux

    let dispatch = useDispatch()

    let active = useSelector(state => state.loginReducer.popupActive)
    let title = useSelector(state => state.newsReducer.title)
    let text = useSelector(state => state.newsReducer.text)
    let date = useSelector(state => state.newsReducer.date)

//Закрыаем PopUp

    const
    closePopUp = (e) => {
        dispatch({type: "POPUP_ACTIVATE", payload: false})
    }

    return (
        <div className={active ? "popup" : "popup__none"} onClick={closePopUp}>
            <div className="popup__content-news" onClick={e => e.stopPropagation()}>
                <div className="popup__content-title">{title}</div>
            </div>
        </div>
    );
};

export default PopupNews;