import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-scroll';
import user from "../components/Images/user.png";
import logo from "../components/Images/delivery-truck.png"
//style
import '../Styles/Success.css'
//data
import data from '../data';
import Navbar from '../components/Landing/Navbar';
import Progress from '../components/Progress/Progress';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrackModal from '../components/Landing/TrackModal';


const Success = ({updateUser}) => {
  const Logout = () => {
    localStorage.removeItem("Data");
    const user = localStorage.getItem("Data");
    toast.success("Thanks for Visiting");
    updateUser(user);
  };
    const queryParams = new URLSearchParams(window.location.search)
    const bookid = queryParams.get("bookid")
   //console.log(bookid);
    //console.log('hemlo')
    const [trackDetails,setTrackDetails] =useState({});
    useEffect(() => {
    
      // console.log('hemlo');
        fetch(`http://localhost:5000/api/booking?bookid=${bookid}`)
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            {data && setTrackDetails(data)};
            // console.log(trackDetails);
          });
      }, []);
      const logid=trackDetails.logid;
    let log=null;
  data.map((logi)=>{
    if(logi.id==logid) {
      log=logi;
      return;
    }
  })
  const name = JSON.parse(localStorage.getItem("naam"));
  const arr=['booked','shipped','out for delivery','delivered'];
  //console.log(arr[trackDetails.status])

  const [checktrack,SetCheckTrack]=useState(false);
  // const arr=['Booked','Shipped','Out for Delivery','Delivered']
    const closeModal=()=>{
        SetCheckTrack(false);
    }
    const openModal=()=>{
      SetCheckTrack(true);
    }

  return (
    <div>
    <div className="navbar" style={{"backgroundColor":"#F6F1F1"}}>
        <div className="left">
        <img src={logo} style={{"height":"65px","marginLeft":"1rem","margin":'auto 0'}}/>
        <button className="nav-track-btn" type='submit' onClick={openModal}>Track</button>
        </div>
        <ul className="right">
          <li>
            <a href="/">Home</a>
          </li>
         
          <li ><a href="/menu">Menu</a></li>
         
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
          {/* <li>
            <a href="/menu/cart">
              <img className="menu-nav-cart-icon" src={cart_icon} />
            </a>
          </li> */}
          {/* <li>
              <a href="/profile"><img style={{"height":"50px"}} src={user}/></a>
            </li> */}
          <li>
            <button className="Menu-Logout-button" onClick={Logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    <p style={{"padding":"1%", "float":"left","fontFamily":"Montserrat","fontSize":"1rem","fontWeight":"600"}}>30th, October 2023</p>
     <div className='success-box'>
     
        <p className='success-header'>Booked Successfully, thank you!</p>
       {log && <p className='success-subhead'>You will be sooner contacted by <span style={{"color":"#1ACCAC", "fontWeight":"600"}}>{log.title}</span>.</p>}
        <hr></hr>
      {trackDetails.bookid && <div>
        <p className='success-track-header'>Tracking Details</p>
        <p className='success-track-content'>BookingId: <b>{trackDetails.bookid}</b></p>
        <p className='success-track-content'>Name: <b>{name}</b></p>
        <p className='success-track-content'>Phone: <b>{trackDetails.contact}</b></p>
        <p className='success-track-content'>Email: <b>{trackDetails.email}</b></p>
        {trackDetails.status?<p className='success-track-content'>Status: <b>{arr[trackDetails.status]}</b></p>:
        <p className='success-track-content'>Status: <b>Booked</b></p>}
       
       {trackDetails.ddate&& <p className='success-track-content'>Estimated Delivery Date: <b>{trackDetails.ddate}</b></p>}
        
     </div>} 
     
     </div> 
     
     <Progress status={trackDetails.status}/>
     {checktrack&&<TrackModal closeModal={closeModal}/>} 
    </div>
  )
}

export default Success;
