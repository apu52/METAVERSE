import React, { useEffect, useState } from 'react'
import '../Styles/Admin.css'
import AdminModal from '../components/Admin/AdminModal'
import Admincard from '../components/Admin/Admincard';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//img
import logo from "../components/Images/delivery-truck.png"
function Admin({updateAdmin}) {

  const Logout = () => {
    localStorage.removeItem("admin");
    const user = localStorage.getItem("admin");
    toast.success("Thanks for Visiting ");
    updateAdmin(user);
  };

    const [check,SetCheck]=useState(false);
  const arr=['Booked','Shipped','Out for Delivery','Delivered']
    const closeModal=()=>{
        SetCheck(false);
    }
    const [trackDetails,setTrackDetails]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/api/admin").then((res)=>res.json()).then(data=>{
         // console.log(data);
        {data && setTrackDetails(data)};
        // console.log(trackDetails);
      })
    },[])
  return (
    <>
          <div className="navbar" style={{"backgroundColor":"#F6F1F1"}}>
        <div className="left">
        <img src={logo} style={{"height":"65px","marginLeft":"1rem","margin":'auto 0'}}/>
      
        </div>
        <ul className="right">
          <li> 
            <button className="Menu-Logout-button" onClick={Logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    <div style={{"padding":"1.5%"}}>
      <p className='Admin-header'>Hey Admin! Here are the recent bookings</p>
      <hr></hr>
      <div style={{"height":"80vh","overflowY":"scroll"}}>
      {trackDetails.map((single)=>{
        return(
        <Admincard single={single}/>
     ) })}
        
      </div>
     
     
    </div>
    </>
  )
}

export default Admin
