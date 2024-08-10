import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
        navigate('/');
        } else {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload();
    };

    return (
        <div className="navbar-container">
            <p className="logo">
                <Link to="/">Inferno News</Link>
            </p>

            <div className='user-status'>
                {user ?(
                <div className="user-panel">
                    <p>Hi, {user.name}!</p>
                    <img src={user.picture} alt="Profile" />
                    <br />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) :(
                <button>
                    <Link to="/auth">Login</Link>
                </button>
            )}
            </div>
        </div>
    )
}

export default Navbar;