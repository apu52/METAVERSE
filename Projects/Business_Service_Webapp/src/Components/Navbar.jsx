import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () =>{
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto"> 
                    <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand " to="/home">Star Devs</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink  className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink  className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink  className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                    </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;