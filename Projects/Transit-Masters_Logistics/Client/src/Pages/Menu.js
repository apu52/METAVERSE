import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-scroll";
// import{Link} from "react-router-dom"
import user from "../components/Images/user.png"
import "../Styles/Menu.css";
import data from "../data";
import Footer from "../components/Landing/Footer";
import TrackModal from "../components/Landing/TrackModal";

//Image
import logo from "../components/Images/delivery-truck.png"

//SearchBar
import LogisticCard from "../components/Logistic/LogisticCard";

const Menu = ({ userName, updateUser }) => {

  const[query,setQuery]=useState("");
  // const [filteredItems, setFilteredItems]=useState([]);

  const Logout = () => {
    localStorage.removeItem("Data");
    const user = localStorage.getItem("Data");
    toast.success("Thanks for Visiting");
    updateUser(user);
  };
  // const [product,setProduct]=useState({
  //   id:null,
  //   title:"",
  //   description:"",
  //   price:"",
  // });
  const Search=(e) => {
    setQuery(e.target.value);
    //console.log(query);
   
  
    }
    const filteredItems = data.filter((item)=>{
      return item.title.toLowerCase().includes(query.toLowerCase());
    })
    //console.log(filteredItems)
    const [checktrack,SetCheckTrack]=useState(false);
    // const arr=['Booked','Shipped','Out for Delivery','Delivered']
      const closeModal=()=>{
          SetCheckTrack(false);
      }
      const openModal=()=>{
        SetCheckTrack(true);
      }
  return (
    <>
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
            </li>*/}
          <li> 
            <button className="Menu-Logout-button" onClick={Logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      <p className="Menu-heading">
      Welcome! <span className="Menu-user-name">{userName}</span>
        <br></br> 
        <hr style={{"borderTop":"2px solid black",}}></hr>
      </p>
      
      
      <div style={{"backgroundColor":"#F6F1F1","padding":"1% 4%","display":"flex"}}>
        <input className="Menu-search-bar" type="search" placeholder="Search..." onChange={Search}/>
        <p className="logistic-header" style={{"margin":"0 10%"}}>Here are Logistic Services!</p>
      </div>
      <div className="Menu-flexbox">
        {!filteredItems.length?<div className="Menu-404-notfound"> No Search Result Found ☹️</div>:filteredItems.map((log) => {
          return (
            <LogisticCard
            id={log.id}
              name={log.title}
              url={log.url}
              details={log.description}
              location={log.location}
            />
          );
        })}
      </div>
      <Footer />
      {checktrack&&<TrackModal closeModal={closeModal}/>}
    </>
  );
};

export default Menu;
