import React,{useState} from 'react'
import AdminModal from './AdminModal';

function Admincard({single}) {
    const [check,SetCheck]=useState(false);
  const arr=['Booked','Shipped','Out for Delivery','Delivered']
  const closeModal=()=>{
    SetCheck(false);
}
  return (
    <div>
      <div className='admin-card'>
        <p style={{"fontSize":'1.25rem', "position":"relative","top":"0",}}>30th October, 2023</p>
        <div className='admin-card1'>
         <div className='admin-left-sec'>
          <p><b>BookingId</b>: <b style={{"color":"blueviolet"}}>{single.bookid}</b></p>
         </div>
         <div className='admin-vert-line'></div>
         <div className='admin-right-sec'>
         <p className='admin-content'>Name: <b>{single.name}</b></p>
         <p className='admin-content'>Phone: <b>{single.contact}</b></p>
         <p className='admin-content'>Email: <b>{single.email}</b></p>
         <p className='admin-content'>Status: <b>{arr[single.status]}</b></p>
         <p className='admin-content'>Estimated Delivery Date: <b>{single.ddate}</b></p>

         <button className='admin-btn' name={single.bookid} onClick={()=>{SetCheck(true)}}>Update</button>
         <div>
      {check && <AdminModal closeModal={closeModal} bookid={single.bookid} status={single.status}/>}
      </div>
         </div>
         </div>
        </div>
    </div>
  )
}

export default Admincard
