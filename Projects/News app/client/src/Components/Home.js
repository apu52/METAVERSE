import React from 'react';
import Navbar from './Navbar';
import News from './News';

const Home = () => {
    return (
        <div className='main'>
            <div className='bg-img'></div>
            <Navbar />
            <News />
        </div>
    )
}

export default Home;