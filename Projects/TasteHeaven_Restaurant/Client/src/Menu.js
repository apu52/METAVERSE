import React, { useState } from "react";
import MenuCard from "./menuCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-scroll";
// import{Link} from "react-router-dom"
import user from "./Images/user.png"
import "./Menu.css";
import data from "./data";
import Footer from "./Footer";

//Image
import cart_icon from "./Images/Menu/icons8-cart-48.png";

//SearchBar
import searchIcon from "./searchIcon.svg"

const Menu = ({ userName, updateUser }) => {

  const[query,setQuery]=useState("");
  // const [filteredItems, setFilteredItems]=useState([]);

  const Logout = () => {
    localStorage.removeItem("Data");
    const user = localStorage.getItem("Data");
    toast.success("Thanks for Visiting Menu");
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
    console.log(query);
   
  
    }
    const filteredItems = data.filter((item)=>{
      return item.title.toLowerCase().includes(query.toLowerCase());
    })
    console.log(filteredItems)
  
  return (
    <>
      <div className="navbar">
        <div className="left">
          <span class="material-symbols-rounded">menu</span>
          <div className="logo"> Taste Heaven</div>
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
          <li>
            <a href="/menu/cart">
              <img className="menu-nav-cart-icon" src={cart_icon} />
            </a>
          </li>
          <li>
              <a href="/profile"><img src={user}/></a>
            </li>
          <li>
            <button className="Menu-Logout-button" onClick={Logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      <p className="Menu-heading">
        Hey! <span className="Menu-user-name">{userName}</span>
        <br></br>Welcome to the Paradise, Take a deep dive into the heaven
      </p>
      <div style={{"backgroundColor":"#f6f5f9","padding":"2%","display":"flex","justifyContent":"center"}}>
        <input className="Menu-search-bar" type="search" placeholder="Search..." onChange={Search}/>
        <img className="Menu-searchIcon" src={searchIcon}/>
      </div>
      <div className="Menu-flexbox">
        {!filteredItems.length?<div className="Menu-404-notfound">404! Food Item Not Found</div>:filteredItems.map((food) => {
          return (
            <MenuCard
              title={food.title}
              url={food.url}
              desc={food.description}
              price={food.Price}
              id={food.id}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Menu;
