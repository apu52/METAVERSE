import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import "./Modal.css"
//Image
import cross from "../Images/cross.png"
//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Modal({closeModal,Price}) {
  const navigate = useNavigate();

  const {id}=useParams();
    const order_id = uuid().slice(0,8)
    const days=parseFloat(Price.d/42.2).toFixed(2)
    const userid = JSON.parse(localStorage.getItem("Data")).email;
    // console.log(Price);

    const handlePost=async()=>{
      
        const res = await fetch("http://localhost:5000/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userid: userid,email:Price.email, day: parseInt(days,10), bookid: order_id,phone:Price.contact,logid:parseInt(id,10),price:Price.price,e:Price.e,f:Price.f,dis:Price.d}),
    });
    const data = await res.json();
    if(data=="booked")
    {
      toast.success('Booked Successfully');
      navigate({
        pathname: '/menu/logistic/success',
        search: `?bookid=${order_id}`,
      });

    }
    }
  return (
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center","position":"fixed","top":"0","bottom":"0","left":"0","right":"0","backdropFilter":"blur(4px)"}}>
      <div className='Modal-box'>
      <img onClick={closeModal} src={cross} style={{"height":"20px","float":"right","cursor":"pointer"}}/>
      <p className='Modal-content'>BookingId: <span style={{"color":"blueviolet"}}>{order_id}</span></p>
      <div style={{"display":"flex"}}> <p className='Modal-content'>{Price.name}</p>
       <p className='Modal-content' style={{"marginLeft":"11%"}}>{Price.e} x Electronics, {Price.f} x Furniture</p></div>
       <div style={{"display":"flex"}}> <p className='Modal-content'>Shipping Distance : {Price.d} KM</p>
       <p className='Modal-content'>Days required to deliver: {days}</p></div>
       <p className='Modal-content'>Estimated Price: <span style={{"color":"green","fontStyle":"bold"}}>Rs {Price.price}</span></p>
       <button className='Modal-btn' onClick={handlePost} >Confirm</button>
      </div>
    </div>
  )
}

export default Modal
