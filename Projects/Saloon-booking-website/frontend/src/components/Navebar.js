import React from "react";
import { Link } from "react-router-dom";

export default function Navebar() {
  const handlelogout=()=>{
    localStorage.removeItem("phoneNumber")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark  justify-content-center" style={{"fontFamily":"Arial"}}>
  <div className="container-fluid w-100">
    <Link className="navbar-brand mx-3 fw-bold " style={{"fontSize":"30px","color":"#5a4444","fontFamily":"Arial"}} to="/"  >Enable US</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="" id="navbarSupportedContent">
      <ul className="navbar-nav me-5 " style={{"fontSize":"15px"}}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Why To Choose Us?</Link>
        </li>
        <li className="nav-item">
        {(localStorage.getItem("phoneNumber"))?
          <Link className="nav-link active" to="/My-Orders"><u>My Orders</u></Link>
          :<Link className="nav-link active" to=""><u>Register As A worker</u></Link>}
          
        </li>
        <li className="nav-item">
          {(localStorage.getItem("phoneNumber"))?
          <Link className="nav-link active" onClick={handlelogout} to="/login">Logout</Link>
          :<Link className="nav-link active" to="/login">Login/Signup</Link>}
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}
