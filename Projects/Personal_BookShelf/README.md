# Personal-Book-Shelf
![Designer_4-modified_320x320](https://github.com/jeevan10017/Personal-Book-Shelf/assets/132948936/158f6740-bf27-4f59-8842-353df70af9bf)


## Overview

My Book App is a React-based application that allows users to search for books using the Open Library API, add books to their personal bookshelf, and manage their bookshelf. The application supports providing a better user experience.

## Features

- **Book Search**: Search for books using the Open Library API with auto suggestion and fuz search.
- **Bookshelf Management**: Add and remove books from your personal bookshelf.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **Favorites**: Mark books as favorites for quick access.
- **Notifications**: Receive notifications when books are added or removed from the bookshelf.


- 
## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **Fuse.js**: A lightweight fuzzy-search library.
- **React Autosuggest**: A React component for autosuggest input fields.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: A collection of navigational components for React applications.

- 
## Demo

You can see a live application demo [here](https://personal-bookshelf-liard.vercel.app/).

![Screenshot 2024-06-11 034101](https://github.com/jeevan10017/Personal-Book-Shelf/assets/132948936/17888be6-dce8-4b04-af03-b0ff9e386a5e)



![Screenshot 2024-06-11 034132](https://github.com/jeevan10017/Personal-Book-Shelf/assets/132948936/ff76de83-3b02-46d3-9a47-750410852e9a)





## Installation

1. Clone the repository:
    ```sh
    https://github.com/jeevan10017/Personal-Book-Shelf.git
    cd my-book-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application

To run the application locally, use the following command:
```sh
npm start
```
This will start the development server and you can view the application in your browser at ```http://localhost:3000```.

## Building the Application
To build the production application, use the following command:
```
npm run build
```
This will create a build directory with all the production files.


![Screenshot 2024-06-11 031314](https://github.com/jeevan10017/Personal-Book-Shelf/assets/132948936/5ccac10d-24cc-4832-bbc9-eec3a1615668)



# Usage

## Book Search:
Type in the search bar to search for books by title or author.
Results will appear as you type, utilizing fuzzy search and autocomplete.

## Add to Bookshelf:
Click the "Add to Bookshelf" button on a book card to add the book to your bookshelf.
A notification will appear confirming the addition.

## Manage Bookshelf:
Go to the "My Bookshelf" page to view your saved books.
Remove books from the bookshelf by clicking the "Remove" button. A notification will appear confirming the removal.

## Favourites:
Click the heart icon on a book card to mark it as a favorite.
The heart icon will change color to indicate that the book is a favorite.

# Components
## BookCard.jsx
Component to display individual book details with options to add to bookshelf and mark as favorite.

## BookSearchPage.jsx
Component for searching books and displaying search results with fuzzy search and autocomplete.

## BookshelfPage.jsx
Component to display books added to the bookshelf and manage them.

## Footer.jsx
Footer component with links and credits.

## Notification.jsx
Component to display notifications.

## App.js
Main application component that sets up routing and theming.

# License
This project is licensed under the MIT License 

# Author
© 2024 Jeevan Kumar Korra. All rights reserved.

## Contact
If you have any questions or feedback, please contact me at jeevankumarkorra2005@gmail.com.

# Thank you for using the Personal-Book-Shelf App!


