import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import Notification from './Notification';

const BookshelfPage = () => {
  const [books, setBooks] = useState([]);
  const [notification, setNotification] = useState(null);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBooks(bookshelf);
  }, []);

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

  const removeFromBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf = bookshelf.filter(b => b.key !== book.key);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    setBooks(bookshelf);
    setNotification(`You have removed "${book.title}" from Shelf`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="p-4 min-h-screen flex flex-col">
      
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} type="error" />
      )}
       <h1 className="text-3xl font-bold flex items-center justify-center">My Bookshelf</h1>
      <div className="flex justify-between items-center mb-4">
        
        <Link to="/">
          <button className="back-to-search-button bg-primary-color hover:bg-primary-hover-color text-white px-4 py-2 rounded">
            Back to Search
          </button>
        </Link>
       
      </div>
      {books.length === 0 ? (
        <div className="text-center font - lg text-gray-500 mt-16">
          You have no books in Your Bookshelf. Go to the search page to add books.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book, index) => (
            <BookCard
              key={index}
              book={book}
              removeFromBookshelf={removeFromBookshelf}
              isFavorite={favorites.some(fav => fav.key === book.key)}
              toggleFavorite={() => toggleFavorite(book)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookshelfPage;
