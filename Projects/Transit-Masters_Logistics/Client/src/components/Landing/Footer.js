import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";
//Images
import Profile from "../Images/delivery-truck.png";
import Insta from "../Images/Footer/icons8-instagram.svg";
import Twitter from "../Images/Footer/icons8-twitter.svg";
import facebook from "../Images/Footer/icons8-facebook.svg";
import yt from "../Images/Footer/icons8-youtube.svg";

import Contact from "../Images/Footer/icons8-contact-48.png";
import Email from "../Images/Footer/icons8-email-48.png";
import Address from "../Images/Footer/icons8-address-48.png";

function Footer() {
  return (
    <footer id="contact">
      <p className="footerheading">Have a Query?</p>
      <p className="footersubheading" style={{"color":"blueviolet"}}>Contact Us</p>
      <div className="footerflexbox">
        <div className="footerleft">
          <div className="footer-profile">
            <img className="footer-profile-img" src={Profile}></img>
            <p className="footer-profile-name"><b>Transit-Masters</b></p>
          </div>

          <div className="footericons">
            <a href="#">
              <img className="footer-icons" src={Insta} />
            </a>
            <a href="#">
              <img className="footer-icons" src={Twitter} />
            </a>
            <a href="#">
              <img className="footer-icons" src={facebook} />
            </a>
            <a href="#">
              <img className="footer-icons" src={yt} />
            </a>
            
          </div>
        </div>
        <div className="footermid">
          <p className="footermid-heading">Quick Links</p>
          <ul class="footermid-list">
            <li>
              <Link
                className="Link-list"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="Link-list"
                to="about"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="Link-list"
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
                className="Link-list"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerright">
          <div className="footer-contact">
            <img className="footer-contact-icons" src={Contact} />
            <p>Contact: +919999999999</p>
          </div>
          <div className="footer-contact">
            <img className="footer-contact-icons" src={Email} />
            <p>Email: transit@gmail.com</p>
          </div>
          <div className="footer-contact">
            <img className="footer-contact-icons" src={Address} />
            <p>Address: Banglore</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
