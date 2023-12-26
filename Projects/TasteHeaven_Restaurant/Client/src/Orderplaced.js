import React,{useEffect,useState} from 'react'
import {Link} from 'react-scroll'
import "./Orderplaced.css"
import Footer from './Footer';
import Spinner from './Spinner'
import { NavLink } from 'react-router-dom';


//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Images
import cart_icon from "./Images/Menu/icons8-cart-48.png"
import user from "./Images/user.png"

function Orderplaced({updateUser}) {
  const[isLoading , setIsLoading] =useState(true);  
 const [finalorder,setFinalOrder]=useState({});
 const email=JSON.parse(localStorage.getItem('Data')).email;
 const order_id=JSON.parse(localStorage.getItem('order_id'));
console.log(order_id);
    const Logout=()=>
    {
      localStorage.removeItem('Data')
      const user=localStorage.getItem('Data');
      toast.success('Thanks for Visiting Menu');
      updateUser(user);
  
    }
useEffect(()=>{
fetch(`https://localhost:5000/api/order?email=${email}&order_id=${order_id}`).then((response)=>( response.json()))
.then((data)=>{
  console.log("hemlo")
    console.log(data);
    setIsLoading(false);
    setFinalOrder(data);
})
},[])


  return (
    <>
     {isLoading?<Spinner title="Placing Order..."/>:<><div className="navbar">
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
    <div className='orderplaced-page'>
    <p className="orderplaced-header">Congratulations🎉 Your Order has been placed</p>
    <div className='orderplaced-box-1-parent'>
      <div className='orderplaced-box-1'>
        <p className='orderplaced-subheader-1'>Thank you for choosing us.</p>
        <p className='orderplaced-subheader-2'>Here is your Order Summary, keep getting the <b>Taste</b> of <b>Heaven</b></p>
        
  {finalorder &&  <>  
     <p className='orderplaced-subheader-3'>Order Summary</p>
        <div className='orderplaced-box-2'>
        <div className='orderplaced-flexbox'>
            <div className='orderplaced-order-box'>
            <p className='orderplaced-order-content'>Order Id: <b>{finalorder.order_id}</b></p>
            <p className='orderplaced-order-content'><b>Items:</b>
            {finalorder.food && finalorder.food.map((singleFood)=>{
                return(
                 <>
                    <span> <b>{singleFood.quantity}</b> x {singleFood.title}, </span>
                 </>
                )
            })}
             </p>
            <p className='orderplaced-order-content'>Amount: <b>Rs {finalorder.Total_Price}</b></p>
            <p className='orderplaced-order-content'>Date: {finalorder.date}</p>
            <p className='orderplaced-order-content'>Time: {finalorder.time}</p>
            
            </div>
            <div className='orderplaced-address-box'>
           <p className='orderplaced-address-content'>{finalorder.name}</p>
           <p className='orderplaced-address-content'>{finalorder.contact}</p>
           <p className='orderplaced-address-content'>{finalorder.flatno}</p>
           <p className='orderplaced-address-content'>{finalorder.address}</p>
           <p className='orderplaced-address-content'>{finalorder.landmark}</p>
       </div>
        </div>
      </div>
      </>}
    </div>
    </div>
    </div>
    <div style={{"backgroundColor":"#f5f6f9","padding":"2% 0%"}}>
    <p className='orderplaced-footer-content'>Wanna Visit your Profile?</p>
   <NavLink to="/profile"><button className="orderplaced-btn" type="Submit">Go</button></NavLink>
    </div>
    <Footer className='orderplaced-footer'/></>}
    </>
  )
}

export default Orderplaced
