import React,{useState,useEffect} from 'react'
import { Link } from 'react-scroll'
import "./Cart.css"
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Listrow from './Listrow';
import Address from './Address';
//Images
import user from "./Images/user.png"
import cart from './Images/Cart/Cart.svg';
import cart_icon from "./Images/Menu/icons8-cart-48.png"

//spinner
import Spinner from './Spinner'

const datanew=[];
function Cart({updateUser}) {



 const[isLoading , setIsLoading] =useState(true);  
const [sum,setSum]=useState(0);
const [data,setData]=useState([]);
const [name,setName]=useState("");
    const Logout=()=>
    {
      localStorage.removeItem('Data')
      const user=localStorage.getItem('Data');
      toast.success('Thanks for Visiting Menu');
      updateUser(user);
  
    }
    const email=JSON.parse(localStorage.getItem('Data')).email;
    const naam=JSON.parse(localStorage.getItem('Data')).name;

    useEffect(()=>{
        
       fetch(`https://localhost:5000/api/add-to-cart/?name=${email}`).then((res)=> {
       
       return res.json()
       
    })
       .then((data)=>{
        console.log(data);
        setIsLoading(false);
        // console.log(data[0].food[0].title);
        if(data.food && data.food.length){
       
        
          let newsum=0;
          console.log(data);
          
          // console.log(datanew);
          data.food.map((dish)=>{
            newsum=newsum+Number(dish.price)*Number(dish.quantity)
            // console.log(newsum);
            setSum(newsum);
          })
        sum&&JSON.stringify(localStorage.setItem('Total_Price', sum))
          setData(data.food);
          setName(data.name)
        
      }
        else{
          setName(data.name)
          
          setData(null);
        }
       
       });
     
      
    },[])

        
    // {data && data.map((singleFood)=>{
    //    setWholeTotal(wholeTotal+singleFood.price*singleFood.quantity);
    // })}
    console.log(sum);
   console.log(data)
    if(data==null)
    {
      console.log(isLoading)

        return( 
        <>
       {isLoading?<Spinner title="Preparing Your Cart..."/>:<> <div style={{"backgroundColor":"#f5f6f9"}} className="navbar">
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
    
    <div  style={{"backgroundColor":"#f5f6f9","height":"100vh"}} className='header-flexbox'>
        {<p className='cart-header'>Hey! <span style={{"color":"blueviolet","fontWeight":"600"}}>{name}</span>,<br></br>Welcome to the Cart!,<br></br><span style={{"color":"red","fontWeight":"600"}}>No Items yet</span> </p>}
        
        <img style={{"backgroundColor":"#f5f6f9"}} className='cart-img' src={cart}/>
        </div></>}     
        </>
        )
   

        }
    
else{

  return (
    <>
   
   {isLoading?<Spinner title="Preparing Your Cart..."/>:<><div className="navbar">
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
    
    <div className='header-flexbox'>
      {name&& <p className='cart-header'>Hey! <span style={{"color":"blueviolet","fontWeight":"600"}}>{name}</span>,<br></br> Welcome to the Cart!</p>}
        
        <img className='cart-img' src={cart}/>
        </div>
        <div className='list-header'>
            <ul className='list-head-elements'>
            <li className='list1'>Id</li>
            <li className='list2'>Order</li>
            <li className='list3'>Quantity</li>
            <li className='list4'>Price</li>
            <li className='list5'>Total</li>
            </ul>
        </div>
        <div>
        {data && data.map((dish)=>{
            const a=Number(dish.price);
        
            {/* setSum(sum+dish.price*dish.quantity); */}
            const total=a*dish.quantity
            {/* console.log(total) */}
  
           return( <Listrow id={dish.id} url={dish.url} title={dish.title} quantity={dish.quantity} price={dish.price} total={total} desc={dish.description}/>
           )
        })}{
        }
        <div className="cart-totalprice-box-parent">
        <div className='cart-totalprice-box'>
        <p className='cart-totalprice'>Total Amount : ₹ {sum}</p>
        </div>
        </div>
        </div>
        <p className='cart-address-header'>Fill the Address & Proceed to checkout</p>
        <Address data={data}/>
        <Footer />
   

   </>} 
    
  

   
    
    </>
  )
}
}

export const food=datanew;
export default Cart