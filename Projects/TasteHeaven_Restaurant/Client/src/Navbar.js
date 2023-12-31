import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import routes from "./routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import user from "./Images/user.png";

function Navbar({ updateUser }) {
  const Logout = () => {
    localStorage.removeItem("Data");
    const user = localStorage.getItem("Data");
    toast.success("Thanks for Visiting Menu");
    updateUser(user);
  };
  return (
    <div className="navbar">
      <div className="left">
        <span class="material-symbols-rounded">menu</span>
        <div className="logo"> Taste Heaven</div>
      </div>
      <ul className="right">
        <li>
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
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Testimonials
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
            <li>
              <a href="/profile"><img src={user}/></a>
            </li>
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
