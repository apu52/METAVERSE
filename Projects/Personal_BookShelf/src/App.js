import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-color text-text-color bg-slate-100">

        <main className="flex-grow container mx-auto py-4">
          <Routes>
            <Route exact path="/" element={<BookSearchPage />} />
            <Route path="/bookshelf" element={<BookshelfPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
