import { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Transactions from './Transactions';
import Customers from './Customers';
import Suppliers from './Suppliers';
import { signOut, auth } from '../firebase';
import Rates from './Rates';
import Settings from './Settings';


function Home({ AuthMiddleware }) {
   const navigate = useNavigate();
   const [toggle, setToggle] = useState(true);
   const [hamtext, sethamtext] = useState("☰");
   const [targetName, setTargetName] = useState("transactions");
   useEffect(() => {
      //security purpose
      // if (!AuthMiddleware) {
      //    navigate('/');
      // }
   })

   const handleClick = (e) => {
      setTargetName(e.target.name);
     
      if (window.innerWidth < 540) { handleButtonClick();}
   }


   const handleButtonClick = () => {
      console.log('Opening');
      if (toggle){
         const span = document.getElementById("ham");
      if (window.innerWidth < 540) {
         var width = "450px";
         var mwid ="0"
         
       } else {
         var width = "250px";
         var mwid ="250px"
       }
       
       document.getElementById("mySidenav").style.width = width;
       document.getElementById("main").style.marginLeft = mwid;
      
       setToggle(false);
       sethamtext("✖")
      }
      else{
         const span = document.getElementById("ham");
         document.getElementById("mySidenav").style.width = "0";
         document.getElementById("main").style.marginLeft= "0";
         setToggle(true);
         sethamtext("☰")
      }
    };
  




   return (
      <div>
         <div  id="mySidenav" className="bord sidebar">
            <div className="bord companytitle">
               <h4> SHREE SADGURU TRADERS</h4>
            </div>
            <div className="bord userinfo">
               <div className="profilepic">
                   <img src="/static/image/id size.jpeg" alt="Profile Picture"/> 
               </div>
               <h4>HARSH PATIL</h4>
               <p>harsh2504patil@gmail.com</p>
            </div>
            <div id="#mySidenavanim" className="bord sidenavi navi">
               <a className={targetName === 'transactions' ? 'active' : 'nonactive'} name='transactions' onClick={handleClick}><i className="fa-solid fa-code-fork"></i>Overview</a>
               <a className={targetName === 'rates' ? 'active' : 'nonactive'} name='rates' onClick={handleClick}><i className="fa-solid fa-coins "></i>Rates</a>
               <a className={targetName === 'suppliers' ? 'active' : 'nonactive'} name='suppliers' onClick={handleClick}><i className="fa-solid fa-wallet"></i>Suppliers</a>
               <a className={targetName === 'customers' ? 'active' : 'nonactive'} name='customers' onClick={handleClick}><i className="fa-solid fa-user"></i>Customers</a>
               <a className={targetName === 'settings' ? 'active' : 'nonactive'} name='settings' onClick={handleClick}><i className="fa-solid fa-gear"></i>Settings</a>

            </div>
            <div id="#mySidenavanim" className="bord sidenavi logout">
               <a className="nonactive"  name='logout' onClick={() => {
                  signOut(auth)
                     .then(() => {
                        navigate('/');
                     }).catch((error)=>{
                        console.log("error during signing out user");
                     })
               }}><i className="fa-solid fa-right-from-bracket"></i>Logout</a>
            </div>
         </div>
         
         <div id="main" className='componentDisplayer'>
         {/* <img id="ham" src="../image/menu.png" alt='open'/>  */}
      <div  onClick={handleButtonClick} class="ham" > {hamtext}  </div>
      <h2>Welcome Harsh Patil</h2>
            {
               targetName === "customers" ? <Customers></Customers> : targetName === "suppliers" ? <Suppliers></Suppliers> : targetName === "transactions" ? <Transactions></Transactions> : targetName === "rates" ? <Rates /> : targetName ==="settings"?<Settings/>:""
            }
         </div>
      </div >
   );
}
export default Home;