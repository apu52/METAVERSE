import React,{useState,useEffect} from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import "./Confirmation.css"
import Footer from './Footer'
import {food} from "./cart"
import Spinner from './Spinner'

import { v4 as uuid } from 'uuid';

//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Images
import cart_icon from "./Images/Menu/icons8-cart-48.png"
import confirmOrder from "./Images/Confirmation/deliverytruck.svg"
import user from "./Images/user.png"

const Confirmation=({updateUser})=>{
  const navigate=useNavigate();
  const[isLoading , setIsLoading] =useState(true);  
  const [order,setOrder]=useState({});
  const order_id = uuid().slice(0,8)
    // console.log(food);
    const Logout=()=>
    {
      localStorage.removeItem('Data')
      const user=localStorage.getItem('Data');
      toast.success('Thanks for Visiting Menu');
      updateUser(user);
  
    }
    const email=JSON.parse(localStorage.getItem('Data')).email;
    useEffect(()=>{
      fetch(`https://localhost:5000/api/address/?email=${email}`).then((response)=>(response.json()))
      .then((data)=>{
        // console.log(data);
        setIsLoading(false);
        setOrder(data);
      })
    },[])
    
// console.log(order.food);

const placeOrder=async()=>{
  localStorage.setItem('order_id',JSON.stringify(order_id));
  console.log(order_id);
  const res=await fetch("https://localhost:5000/api/order",{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",

    },
    body:JSON.stringify({email:email,order_id:order_id})
  })
  const resnew=await res.json();
if(resnew=="order placed success")
{
  toast.success('Order placed successfully');
  navigate('/menu/cart/confirm/orderplaced');
  window.scrollTo(0,0);
}
}


  return (
    <>
     {isLoading?<Spinner title="Confirm Your Order!"/>:<> <div className="navbar">
    <div className="left">
      <span class="material-symbols-rounded">menu</span>
      <div className="logo"> Taste Heaven</div>
    </div>
    <ul className="right">
    <li ><a href="/" >Home</a></li>
     <li ><a href="/menu">Menu</a></li>
     <li ><Link to="contact" spy={true} smooth={true} offset={-10} duration={500}>Contact</Link></li>
     <li><a href="/menu/cart" ><img className='menu-nav-cart-icon' src={cart_icon}/></a></li>
     <li>
              <a href="/profile"><img className='menu-nav-cart-icon' src={user}/></a>
            </li>
     <li ><button className="Menu-Logout-button" onClick={Logout}>Logout</button></li>
    </ul>
    </div>
    <div className='confirmation-page'>
    {/* <p className='confirmation-name'>Hey {name}!</p> */}
   {order && <><p className='confirmation-header'>Hey! {order.name},<br></br>Here are your final order items!<span className='confirmation-span'>Please have a look</span></p>
   <div className='confirmation-img-parent'>
   <img className='confirmation-img' src={confirmOrder} />
   </div>

<div style={{"backgroundColor":"#f5f6f9"}}>
    <div className="confirmation-flexbox">
     
        
          
         
        <div className='confirmation-orderitem-box'>
            <p className='confirmation-order-header'>Order Items</p>
            <p className='confirmation-order-content'>{order.food&&order.food.map((singleFood) => {
                     return(
                      <>
                      <span className='confirmation-food-items'><b>{singleFood.quantity}</b> x {singleFood.title},</span>
                      </>
                     )
            })}</p>
            <p className='confirmation-order-content'>Total price: <b>Rs {order.Total_Price}</b></p>
        </div>
       

       <div className='confirmation-address-box'>
           <p className='confirmation-address-header'>Billing Address</p>
           <p className='confirmation-address-content'>{order.name},</p>
           <p className='confirmation-address-content'>{order.contact}</p>
           <p className='confirmation-address-content'>{order.flatno}</p>
           <p className='confirmation-address-content'>{order.address}</p>
           <p className='confirmation-address-content'>{order.landmark}</p>
       </div>
       
    </div>
    <div  style={{"backgroundColor":"#f5f6f9","padding":"5% 0"}}>
    <button onClick={placeOrder} className="confirmation-btn" type="submit">Confirm Order</button>
    </div>
    
    </div>
    </>}
  <Footer/>
    </div></>}
    </>
  )
}
export default Confirmation;
