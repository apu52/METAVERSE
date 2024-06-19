import React, { useState, useEffect } from 'react';

const BookCard = ({ book, addToBookshelf, removeFromBookshelf }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.key === book.key));
  }, [book.key]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.key !== book.key);
    } else {
      updatedFavorites = [...favorites, book];
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  const coverImage = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150';
  const bookTitle = book.title;
  const bookAuthor = book.author_name ? book.author_name.join(', ') : 'Unknown Author';

  return (
    <div className="relative w-72 h-102 bg-white rounded-xl shadow-md overflow-hidden mx-auto flex flex-col">
      <div className="relative flex-shrink-0 h-full w-full">
        <img
          className="w-full h-full object-cover"
          src={coverImage}
          alt={bookTitle}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out flex flex-col justify-end p-4">
          <div>
            <div className="font-bold text-lg text-white overflow-hidden">{bookTitle}</div>
            <p className="text-gray-300 text-sm truncate overflow-hidden">{bookAuthor}</p>
          </div>
          {addToBookshelf && (
            <button
              onClick={() => {
                addToBookshelf(book);
                toggleFavorite();
              }}
              className="mt-2 bg-gradient-to-r from-button-gradient-start to-button-gradient-end hover:from-button-gradient-hover-start hover:to-button-gradient-hover-end text-white px-4 py-2 rounded"
            >
              Add to Bookshelf
            </button>
          )}
          {removeFromBookshelf && (
            <button
              onClick={() => removeFromBookshelf(book)}
              className="mt-2 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          )}
        </div>
      </div>
      <button
        onClick={toggleFavorite}
        className={`absolute top-2 right-2 p-1 border rounded-full ${isFavorite ? 'text-red-600 border-transparent' : 'text-gray-900 font-bold border-white bg-gray-300 bg-opacity-30'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isFavorite ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default BookCard;
