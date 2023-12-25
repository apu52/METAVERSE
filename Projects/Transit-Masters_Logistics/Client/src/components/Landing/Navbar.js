import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import routes from "../../Routes/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import user from "../Images/user.png";
import logo from "../Images/delivery-truck.png"

function Navbar({ updateUser,openModal }) {
  const Logout = () => {
    localStorage.removeItem("Data");
    const user = localStorage.getItem("Data");
    toast.success("Thanks for Visiting");
    updateUser(user);
  };
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} style={{"height":"65px","marginLeft":"1rem","margin":'auto 0'}}/>
        <button className="nav-track-btn" type='submit' onClick={openModal}>Track</button>
        {/* <div className="logo"> Taste Heaven</div> */}
      </div>
      <ul className="right">
        <li style={{"color":"#00A9FF"}}>
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Contact
          </Link>
        </li>
        {JSON.parse(localStorage.getItem("Data")) && (
          <>
            <li>
              <a href="/menu">Menu</a>
            </li>
            {/* <li>
              <a href="/profile"><img style={{"height":"50px"}} src={user}/></a>
            </li> */}
            <li>
              <button className="Menu-Logout-button" onClick={Logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
