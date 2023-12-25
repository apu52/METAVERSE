import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";
//Images
import Profile from "./Images/Footer/profile.png";
import Insta from "./Images/Footer/icons8-instagram.svg";
import Twitter from "./Images/Footer/icons8-twitter.svg";
import Linkedin from "./Images/Footer/icons8-linked-in.svg";
import Github from "./Images/Footer/icons8-github.svg";

import Contact from "./Images/Footer/icons8-contact-48.png";
import Email from "./Images/Footer/icons8-email-48.png";
import Address from "./Images/Footer/icons8-address-48.png";

function Footer() {
  return (
    <footer id="contact">
      <p className="footerheading">Contact Us</p>
      <p className="footersubheading">Hey! Thanks for Visiting the Page</p>
      <div className="footerflexbox">
        <div className="footerleft">
          <div className="footer-profile">
            <img className="footer-profile-img" src={Profile}></img>
            <p className="footer-profile-name">Priyansh Shrivastav</p>
          </div>

          <div className="footericons">
            <a href="https://www.instagram.com/priyansh_s_s/">
              <img className="footer-icons" src={Insta} />
            </a>
            <a href="https://twitter.com/Priyans22040544">
              <img className="footer-icons" src={Twitter} />
            </a>
            <a href="https://www.linkedin.com/in/priyansh-shrivastav-b5868b229/">
              <img className="footer-icons" src={Linkedin} />
            </a>
            <a href="https://github.com/PSS2134">
              <img className="footer-icons" src={Github} />
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
            <p>Contact: +9199329417</p>
          </div>
          <div className="footer-contact">
            <img className="footer-contact-icons" src={Email} />
            <p>Email: priyanshs18171819@gmail.com</p>
          </div>
          <div className="footer-contact">
            <img className="footer-contact-icons" src={Address} />
            <p>Address: Patna, Bihar</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
