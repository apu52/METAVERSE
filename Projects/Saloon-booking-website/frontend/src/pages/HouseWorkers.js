import React from 'react'
import Navebar from '../components/Navebar'
import { Link } from 'react-router-dom'

export default function HouseWorkers() {
  const handlelogout=()=>{
    localStorage.removeItem("phoneNumber")
  }
  return (
    <>
    <div className=''style={{"height":"100vh"}}>
      <nav className="navbar navbar-expand navbar-light" style={{"fontFamily":"Arial"}}>
  <div className="container-fluid">
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
          <Link className="nav-link active" to="/My-Bookings"><u>My Bookings</u></Link>
          :""}
          
        </li>
        <li className="nav-item">
          {(localStorage.getItem("phoneNumber"))?
          <Link className="nav-link active" onClick={handlelogout}>Logout</Link>
          :<Link className="nav-link active" to="/login">Login/Signup</Link>}
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-3 btn" to="/">GoBack</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<hr/>


<p className="text-success text-center fs-2 mt-5">"<u><Link className="text-success" to="/">Coming Soon ...</Link></u>"</p>
    </div>
    
    
    
   
    
    </>
  )
}

