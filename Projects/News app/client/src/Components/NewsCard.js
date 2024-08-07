import React from 'react';

const NewsCard = ({ article, className}) => {
    return (
        <div className={className}>
            <div className="title-date">
                <h3>{article.title}</h3>
                <p className='date'>{new Date(article.publishedAt).toLocaleString()}</p>
            </div>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <div className="content-link">
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
};

export default NewsCard;