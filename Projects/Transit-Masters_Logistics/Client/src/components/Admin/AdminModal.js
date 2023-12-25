import React,{useRef, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import cross from '../Images/cross.png'

//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminModal({closeModal,bookid,status}) {
    const navigate=useNavigate();
    const [modalInfo,setModalInfo]=useState({status:0,message:"",ddate:""})
    let name, value;
    // console.log(modalInfo);
  const handleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    // console.log(name)
    setModalInfo({ ...modalInfo, [name]: value });
    // console.log(data);
  };
  const handleSubmit=async(e)=>{
e.preventDefault();
const res = await fetch(`http://localhost:5000/api/admin?bookid=${bookid}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modalInfo),
  });
  const data = await res.json();
  if(data=="updated")
  {
    toast.success('Updated Successfully');
    window.location.reload();
    navigate('/admin');

  }
  }
  var temp = String(status);
var mySelect = useRef(null)
// console.log(mySelect)

// for(var i, j = 0; i = mySelect.options[j]; j++) {
//     if(i.value == temp) {
//         mySelect.selectedIndex = j;
//         break;
//     }
// }
  return (
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center","position":"fixed","top":"0","bottom":"0","left":"0","right":"0","backdropFilter":"blur(4px)"}}>
    <div className='admin-modal'>
    <img onClick={closeModal} src={cross} style={{"cursor":"pointer","position":"relative","right":"0","top":"0","left":"98%"}}/>
    <p style={{"fontSize":"1.5rem", "position":"relative","top":"0","padding":"2% 2%"}}>Id: <b>{bookid}</b></p>
    <div className='admin-modal-select'><p className='admin-modal-content'>Order Status</p>
      <select name='status' ref={mySelect} id='mySelect' onChange={handleData}  className='admin-modal-selecttag' >
  <option value='0' className='admin-modal-selecttag' defaultChecked>Placed</option>
  <option   value='1' className='admin-modal-selecttag'>Shipped</option>
  <option  value='2' className='admin-modal-selecttag'>Out for Delivery</option>
  <option  value='3' className='admin-modal-selecttag'>Delivered</option>
</select></div>
      <div className='admin-modal-select'><p className='admin-modal-content'>Message</p>
      <textarea style={{"cursor":"auto"}} name='message' onChange={handleData} className='admin-modal-selecttag' type="text"/></div>
      <div className='admin-modal-select'><p className='admin-modal-content'>Delivery Date</p>
      <input style={{"cursor":"auto"}} name='ddate' onChange={handleData} className='admin-modal-selecttag' type="text"/>
      </div>
     <button style={{"display":"block","margin":"2% auto"}} onClick={handleSubmit} className='admin-btn' type='submit'>Submit</button>
    </div>
    </div>
  )
}

export default AdminModal
