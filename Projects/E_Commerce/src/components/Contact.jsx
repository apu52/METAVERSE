import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
function Contact(){
    return (
        <div>
            <Navbar />
            <div className="contact-form">
            <div className="getintouch">
                <h2 style={{color:"#82bee8", fontFamily: "Times New Roman, Times, serif"}}>Get In Touch</h2>
            </div>
            <div className="details">
                <div className="message">
                    <div className="leave">
                        <p>Leave a Message</p>
                    </div>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <textarea type="text" placeholder="Your Message...."></textarea>
                    <button type="submit" >Send</button>
                </div>
                <div className="address">
                    <p className="iit-address"><i className="fa-solid fa-location-dot"></i><span>IIT Campus, Indian Institute of Technology Delhi, Hauz Khas, New Delhi, Delhi 110016</span></p>
                    <p className="contact"><i className="fa-solid fa-phone"></i>+61 4530924756</p>
                    <p className="email"><i className="fa-solid fa-envelope"></i>logo1234@email.com</p>
                    <div className="social-media"><i className="fa-brands fa-youtube"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-twitter"></i></div>
                    <img src={require("./images/Location.png")} alt="location-img" className="location-img" />
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contact;