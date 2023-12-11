import React from "react";
import Navbar from "./Navbar"
import { useLocation } from "react-router-dom";
function Footer(){
    const router=useLocation()
    return (
        <div>
        {router.pathname==="/aboutus"?<Navbar />:null}
        <div className="text-center text-lg-start bg-white text-muted" >
    
        <section className="contact-footer">
        <div className="container text-center text-md-start">
            <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h1 className="text-uppercase fw-bold mb-4" style={{marginTop: "10%"}}>
                LOGO
                </h1>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{textDecoration: "underline", color:"white", textAlign: "center", marginTop:"15%"}}>
                Quick Links
                </h6>
                <p>
                <a href="#!" className="text-white" style={{textDecoration: "none"}}>Sign Up</a>
                </p>
                <p>
                <a href="#!" className="text-white" style={{textDecoration: "none"}}>About Us</a>
                </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{textDecoration: "underline", textAlign: "center", marginTop:"8%"}}>
                Others
                </h6>
                <p>
                <a href="#!" className="text-white">User FAQs</a>
                </p>
                <p>
                <a href="#!" className="text-white">Contact Us</a>
                </p>
                <p>
                <a href="#!" className="text-white">Legal</a>
                </p>
                <p>
                <a href="#!" className="text-white">Privacy Policy</a>
                </p>
                <p>
                <a href="#!" className="text-white">Terms and Conditions</a>
                </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{textDecoration: "underline", textAlign: "center", marginTop:"8%"}}>Products</h6>
                <p className="text-white"><a href="index.html#senid">Send</a></p>
                <p className="text-white">
                <a href="index.html#recid">Receive</a>
                </p>
                <p className="text-white"><a href="index.html#buyid">Buy</a></p>
            </div>
            <div className="col-md-4 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-4" style={{width:"80%", marginTop:"1.5rem"}}>

                <p className="text-white" style={{fontSize:"1.5rem"}}>Subscribe to our newsletter and <br></br> be the first to know about our updates</p>
                <div className="last" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "3rem", marginBottom: "1rem"}}>
                    <input type="email" placeholder="Email Address" />
                    <button type="button">Subscribe</button>
                </div>
                
            </div>
            </div>
        </div>
        </section>
        <hr style={{margin:0}} />
        <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom copyright" style={{padding:0}}>
            <div className="text-center p-4">
            © 2023 Copyright Vivek Singh
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
                <a href="" className="me-4 link-light">
                <i className="fab fa-facebook"></i>
                </a>
                <a href="" className="me-4 link-light">
                <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 link-light">
                <i className="fab fa-google"></i>
                </a>
                <a href="" className="me-4 link-light">
                <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 link-light">
                <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </section>
        
    </div>
    </div>
    )
}
export default Footer;