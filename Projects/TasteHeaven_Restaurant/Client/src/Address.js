import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Address.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Address(data) {
    const navigate=useNavigate();
    console.log(data);
    const [address,setAddress]=useState({flatno:"",contact:"",address:"",landmark:""});
    let name,value;
    const email=JSON.parse(localStorage.getItem('Data')).email;
    const handleData=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setAddress({...address,[name]:value});

    }
    const handleSubmit=async(e)=>{
          e.preventDefault();
          if(!address.flatno||!address.landmark||!address.contact||!address.address)
          {
                toast.warn("Please Fill all the data");
          }
         else {
         const res=await fetch(`https://localhost:5000/api/address?email=${email}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(address),
         })
         const resnew=await res.json();
         if(resnew=="POSTED SUCCESSFULLY")
         {
            toast.success("Checking Out...")
            navigate("/menu/cart/confirm");
            window.scrollTo(0,0);//scroll to top of confirm page
         }
        }
    }
  return (
    <div>
    
    <p className='address-header'>Billing Address</p>
    <div className='address-form-parent'>
<form className='address-form' method='POST'>
<div className='form-label-input'>
    <p className='address-form-label'>Flat No.</p>
    <input onChange={handleData} name="flatno" className='address-form-input'></input>
    
</div>
<div className='form-label-input' >
    <p className='address-form-label'>Contact No.</p>
    <input onChange={handleData} name="contact" className='address-form-input'></input>
    
</div>
<div  className='form-label-input'>
    <p className='address-form-label'>Address</p>
    <textarea onChange={handleData} name="address" rows = "2" cols = "10" className='address-form-input'>
          
         </textarea>

    
</div>
<div className='form-label-input'>
    <p className='address-form-label'>Landmark</p>
    <input onChange={handleData} name="landmark" className='address-form-input'></input>
    
</div>
<button onClick={handleSubmit} className ="address-checkout-btn" type='submit'>Checkout</button>
</form>
    </div></div>
  )
}

export default Address