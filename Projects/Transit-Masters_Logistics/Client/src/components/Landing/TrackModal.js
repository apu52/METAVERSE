import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './TrackModal.css'
import cross from '../Images/cross.png'

//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TrackModal = ({closeModal}) => {
    const navigate=useNavigate();
    const [bookId,setBookId]=useState("");
    // console.log(bookId);

    const handleGet=async(e)=>{
        e.preventDefault();
      const res=await fetch(`http://localhost:5000/api/booking?bookid=${bookId}`)

      const data=await res.json();

      if(data==null)
      {
           toast.error(`No Booking found with Id: ${bookId}`);
      }
      else{
        toast.success('Booking Found!');
        navigate({
            pathname: '/menu/logistic/success',
            search: `?bookid=${bookId}`,
        })
      }
    }
  return (
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center","position":"fixed","top":"0","bottom":"0","left":"0","right":"0","backdropFilter":"blur(4px)"}}>
      <div className='trackmodal-box'>
      <img onClick={closeModal} src={cross} style={{"height":"20px","float":"right","cursor":"pointer"}}/>
      <p style={{"margin":"2% 0"}}>Booking Id</p>
      <input  onChange={(e)=>{
        setBookId(e.target.value);
      }} type="text" className='trackmodal-input' />
    <button className='trackmodal-btn' type='submit' onClick={handleGet}>Track</button>
      </div>
    </div>
  )
}

export default TrackModal
