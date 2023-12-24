import React,{useState} from "react";

//Components
import Navbar from "../components/Landing/Navbar";
import Homepage from "../components/Landing/Homepage";
import About from "../components/Landing/About";
import Services from "../components/Landing/Services";
import Footer from "../components/Landing/Footer";
import TrackModal from "../components/Landing/TrackModal";

function Landingpage({updateUser}) {
  const [check,SetCheck]=useState(false);
  // const arr=['Booked','Shipped','Out for Delivery','Delivered']
    const closeModal=()=>{
        SetCheck(false);
    }
    const openModal=()=>{
      SetCheck(true);
    }
  return (
    <>
      <div className="landingpage" style={{ backgroundColor: "#f6f5f9" }}>
        <Navbar updateUser={updateUser}  openModal={openModal}/>
        <Homepage />
        <About />
        <Services />
        <Footer />
        {check &&<TrackModal closeModal={closeModal}/>}
      </div>
    </>
  );
}

export default Landingpage;
