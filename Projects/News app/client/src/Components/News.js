import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const apiKey =  process.env.REACT_APP_NEWS_API_KEY;

const News = () => {
    const [isTop, setIsTop] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [newsData, setNewsData] = useState([]);
    const [query, setQuery] = useState('technology');
    const [searchQuery, setSearchQuery] = useState('');
    const [res, setRes] = useState('');
    const [isWide, setIsWide] = useState(false);

    const switchMode = () => {
        setIsTop((isTop) => !isTop);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setQuery(searchQuery);
        }
    };

    const handleRes = (e) =>{
        setRes(e);
    }

    const switchWideMode = () => {
        setIsWide(!isWide);
    };
    useEffect(() => {
        const fetchNews = async () => {
            try {
                let url = '';
                if (isTop) {
                    url = `https://newsapi.org/v2/top-headlines?`;
                    if(query !=="")
                        url += `q=${query}&`;
                    if(selectedCountry !=="")
                        url += `country=${selectedCountry}&`;
                    if(selectedCategory !=="")
                        url += `category=${selectedCategory}&`;
                    url += `apiKey=${apiKey}`;
                } else {
                    url = `https://newsapi.org/v2/everything?`;
                    if(query !=="")
                        url += `q=${query}&`;
                    if(selectedSort !=="")
                        url += `sortBy=${selectedSort}&`;
                    if(selectedLanguage !=="")
                        url += `language=${selectedLanguage}&`;
                    url += `apiKey=${apiKey}`;
                    }
                let data = await fetch(url);
                let parsedData = await data.json();
                if(parsedData.status!=='ok'){
                    handleRes(parsedData.message);
                }
                else if(parsedData.totalResults === 0){
                    handleRes("No results for selected parameters");
                }
                else{
                    handleRes("");
                }

                setNewsData(parsedData.articles);
                console.log(url);
                console.log(parsedData);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [isTop, selectedCategory, selectedCountry, selectedSort, selectedLanguage, query]);

    return (
        <div className='news-page'>
            <div className="sidebar">
                {isTop 
                    ? <div  className="top-headlines">
                        <h3>Filter by Category</h3>
                        <select onChange={handleCategoryChange} value={selectedCategory}>
                            <option value="">Any</option>
                            <option value="general">General</option>
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="health">Health</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                        </select>

                        <h3>Filter by Country</h3>
                        <select onChange={handleCountryChange} value={selectedCountry}>
                            <option value="">Any</option>
                            <option value="in">India</option>
                            <option value="us">United States</option>
                            <option value="gb">United Kingdom</option>
                            <option value="au">Australia</option>
                            <option value="ca">Canada</option>
                        </select>
                    </div>

                    : <div className='everything'>
                        <h3>Sort by:</h3>
                        <select onChange={handleSortChange} value={selectedSort}>
                            <option value="relevancy">Relevancy</option>
                            <option value="popularity">Popularity</option>
                            <option value="publishedAt">Published date</option>
                        </select>

                        <h3>Filter by Language</h3>
                        <select onChange={handleLanguageChange} value={selectedLanguage}>
                            <option value="">Any</option>
                            <option value="zh">Chinese</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="it">Italian</option>
                            <option value="nl">Dutch</option>
                            <option value="ru">Russian</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>
                }
            </div>

            <div className='main-container'>
                <div className='top-container'>
                    <button onClick={switchMode}>
                        {isTop ? 'Search all' : 'Latest Headlines'}
                    </button>

                    <div>
                        <button onClick={switchWideMode}>
                            {isWide ? 'Card' : 'Individual'}
                        </button>

                        <input 
                            type='text' 
                            placeholder='Search' 
                            onChange={e => setSearchQuery(e.target.value)} 
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>
                <p>{res}</p>
                <div className='news-list'>
                    {newsData && newsData.map((article, index) => (
                        <NewsCard key={index} article={article} className={`news-card ${isWide ? 'wide' : 'card'}`}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;
