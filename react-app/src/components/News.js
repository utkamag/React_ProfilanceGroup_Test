import React from 'react';
import NEWS_DATA from "../assets/JSON/package.json"

const News = () => {
    return (
        <div className="wrapper">
            <div className="news">
                {NEWS_DATA.map((data) => {
                    return (
                        <div className="news__widget">
                            <div className="news__widget-title">
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