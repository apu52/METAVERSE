import React from "react";

//Components
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import About from "./About";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function Landingpage({updateUser}) {
  return (
    <>
      <div className="landingpage" style={{ backgroundColor: "#f6f5f9" }}>
        <Navbar updateUser={updateUser} />
        <Homepage />
        <About />
        <Services />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default Landingpage;
