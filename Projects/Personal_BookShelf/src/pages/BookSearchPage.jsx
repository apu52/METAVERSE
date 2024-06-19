import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';
import Autosuggest from 'react-autosuggest';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import Notification from './Notification';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [notification, setNotification] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setAllBooks(response.data.docs);
          const fuse = new Fuse(response.data.docs, {
            keys: ['title', 'author_name'],
            includeScore: true,
            threshold: 0.4, 
          });
          const result = fuse.search(query).map(res => res.item);
          setBooks(result);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          setLoading(false);
        });
    } else {
      setBooks([]);
    }
  }, [query]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    const fuse = new Fuse(allBooks, {
      keys: ['title', 'author_name'],
      includeScore: true,
      threshold: 0.3,
    });
    const result = fuse.search(value).map(res => res.item);
    setSuggestions(result.slice(0, 5)); 
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion.title;

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.title} by {suggestion.author_name ? suggestion.author_name.join(', ') : 'Unknown Author'}
    </div>
  );

  const onChange = (event, { newValue }) => {
    setQuery(newValue);
  };

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    setNotification({ message: `You have successfully added "${book.title}" to your shelf.`, type: 'success' });
    setTimeout(() => setNotification(null), 3000);
  };

  const toggleFavorite = (book) => {
    let updatedFavorites;
    if (favorites.some(fav => fav.key === book.key)) {
      updatedFavorites = favorites.filter(fav => fav.key !== book.key);
    } else {
      updatedFavorites = [...favorites, book];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4 relative min-h-screen mt-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Search Books</h1>
        <Link to="/bookshelf">
          <button className="go-to-shelf-button bg-primary-color hover:bg-primary-hover-color text-white px-4 py-2 rounded">
           My Bookshelf
          </button>
        </Link>
      </div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: 'Search for books / authors... ',
          value: query,
          onChange: onChange,
        }}
      />
      {loading && <div className="text-center p-4">Loading...</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {!loading && books.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            addToBookshelf={addToBookshelf}
            isFavorite={favorites.some(fav => fav.key === book.key)}
            toggleFavorite={() => toggleFavorite(book)}
          />
        ))}
      </div>
      {notification && <Notification message={notification.message} onClose={() => setNotification(null)} type={notification.type} />}
    </div>
  );
};

export default BookSearchPage;
