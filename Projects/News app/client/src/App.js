import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Home from './Components/Home';
import Auth from './Components/Auth';

function App() {
    return (
    // <h1>App</h1>

    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    </Router>
    )
}
export default App;