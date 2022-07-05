import React, {useState} from 'react';
import doneSVG from '../assets/img/done.svg'


const NewsRequest = () => {

    // State

    const [textareadone, setTextareadone] = useState(true)

    const [textareatitle, setTextareatitle] = useState("")
    const [textareatext, setTextareatext] = useState("")
    const [textareadate, setTextareadate] = useState("")

    //Функция по отправке новости

    let sendNews = (e) => {
        e.preventDefault()
        setTextareadone(false)
    }

    return (
        <div className="wrapper">
            {textareadone ?
                ( <form onSubmit={sendNews}>
                <div className="newsrequest">
                    <h2 className="newsrequest__main-title">Предложить новость</h2>
                    <div className="news-without-login">*для отправки данных необходимо заполнить все 3 поля, в скором
                        времени
                        администратор рассмотрит вашу новость.
                    </div>
                    <div className="newsrequest__title">
                        <p>Заголовок</p>
                        <textarea className="newsrequest__title-textarea" required={true} value={textareatitle} onChange={(e) => setTextareatitle(e.target.value)}></textarea>
                    </div>
                    <div className="newsrequest__text">
                        <p>Текст</p>
                        <textarea className="newsrequest__text-textarea" required={true} value={textareatext} onChange={(e) => setTextareatext(e.target.value)}></textarea>
                    </div>
                    <div className="newsrequest__date">
                        <p>Дата</p>
                        <textarea className="newsrequest__date-textarea" required={true} value={textareadate} onChange={(e) => setTextareadate(e.target.value)}></textarea>
                    </div>
                    <button className="newsrequest__button">Отправить новость</button>
                </div>
            </form>
                ): (<div className="newsrequest__done">
                    <img className="newsrequest__svg" src={doneSVG} alt="done"/>
                    <h3 className="newsrequest__done-title">Новость успешно отправлена!</h3>
                </div>)
            }


        </div>
    )
        ;
};

export default NewsRequest;