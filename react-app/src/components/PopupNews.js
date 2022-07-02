import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const PopupNews = () => {

// Redux

    let dispatch = useDispatch()

    let active = useSelector(state => state.loginReducer.popupActive)
    let title = useSelector(state => state.newsReducer.title)

//Закрыаем PopUp

    const
    closePopUp = (e) => {
        dispatch({type: "POPUP_ACTIVATE", payload: false})
    }

    return (
        <div className={active ? "popup" : "popup__none"} onClick={closePopUp}>
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <div>{title}</div>
            </div>
        </div>
    );
};

export default PopupNews;