import React from "react"
import Carousel from "./Carousel";
import { useLocation,Link } from 'react-router-dom'
function Nav(){
    const router=useLocation()
    return (
    <div id="title">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                <a className="navbar-brand fs-25" href="#">LOGO</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="/products">Product</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/create">Create</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                </div>
            </nav>
            {router.pathname==="/"?<Carousel />:null}
        </div>
        
    </div>
    )
}
export default Nav;
