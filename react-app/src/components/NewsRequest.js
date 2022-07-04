import React from 'react';

const NewsRequest = () => {
    return (
        <div className="wrapper">
            <div className="newsrequest">
                <h2 className="newsrequest__main-title">Предложить новость</h2>
                <div className="newsrequest__title">
                    <p>Заголовок</p>
                    <textarea name="textarea__title" id="1" cols="30" rows="10"></textarea>
                </div>
                <div className="newsrequest__text">
                    <p>Текст</p>
                    <textarea name="textarea__title" id="1" cols="30" rows="10"></textarea>
                </div>
                <div className="newsrequest__date">
                    <p>Дата</p>
                    <textarea name="textarea__title" id="1" cols="30" rows="10"></textarea>
                </div>
            </div>

        </div>
    );
};

export default NewsRequest;