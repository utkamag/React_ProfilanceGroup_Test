import React, {useState} from 'react';
import doneSVG from '../assets/img/done.svg'
import {useDispatch, useSelector} from "react-redux";


const NewsRequest = () => {

    // Redux

    const dispatch = useDispatch()


    // State

    const [textareadone, setTextareadone] = useState(true)

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [dates, setDates] = useState("")

    // Объеденяем все данные

    const data = `${title} ${text} ${dates}`

    //Функция по отправке новости

    let sendNews = (e) => {
        e.preventDefault()
        console.log(data)
        setTextareadone(false)

        const allNews = {
            news_title: title,
            news_text: text,
            date: dates,
            allData: data,
            id: Date.now()
        }
        dispatch({type: "SEND_ACCEPT", payload: allNews})
    }

    // Тернарный оператор, при отправке новости рендерим элемент с успешной отправкой

    return (
        <div className="wrapper">
            {textareadone ?
                (<form onSubmit={sendNews}>
                        <div className="newsrequest">
                            <h2 className="newsrequest__main-title">Предложить новость</h2>
                            <div className="news-without-login">*для отправки данных необходимо заполнить все 3 поля, в
                                скором
                                времени
                                администратор рассмотрит вашу новость.
                            </div>
                            <div className="newsrequest__title">
                                <p>Заголовок</p>
                                <textarea className="newsrequest__title-textarea" required={true} value={title}
                                          onChange={(e) => setTitle(e.target.value)}></textarea>
                            </div>
                            <div className="newsrequest__text">
                                <p>Текст</p>
                                <textarea className="newsrequest__text-textarea" required={true} value={text}
                                          onChange={(e) => setText(e.target.value)}></textarea>
                            </div>
                            <div className="newsrequest__date">
                                <p>Дата</p>
                                <textarea className="newsrequest__date-textarea" required={true} value={dates}
                                          onChange={(e) => setDates(e.target.value)}></textarea>
                            </div>
                            <button className="newsrequest__button">Отправить новость</button>
                        </div>
                    </form>
                ) : (<div className="newsrequest__done">
                    <img className="newsrequest__svg" src={doneSVG} alt="done"/>
                    <h3 className="newsrequest__done-title">Новость успешно отправлена!</h3>
                </div>)
            }


        </div>
    )
        ;
};

export default NewsRequest;