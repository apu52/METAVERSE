import React, { useState, useRef, useEffect, Component } from "react";
import "./menuCard.css";
import Img from "./Images/Testimonials/Michael.jpg";
import url from "./Images/Menu/Pakode.jpg";
import data from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MenuCard(dish) {
  const [count, setCount] = useState(0);
  const [food, setFood] = useState({});
  const Inputelement = useRef(null);
  
  var arr = [];

  const Addtocart = async () => {
    const email=JSON.parse(localStorage.getItem('Data')).email;
    const res = await fetch(`https://localhost:5000/api/add-to-cart?email=${email}`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({...dish,email:email}),
    })
    const resnew= await res.json();
    console.log(resnew);
    setCount(count=>count+1);
    if(resnew.message=='new-user-first-item'){
      toast.success(`Welcome to Heaven!, ${resnew.title} add to your cart`);
    }
    if(resnew.message=='new-food-added')
    {
      toast.success(`1 ${resnew.title} added to your cart`)
    }
    if(resnew.message=='quantity-increased'){
      toast.success(`${resnew.quantity} ${resnew.title} added to your cart`)
    }
  };
  return (
    <div className="menu-card">
      <div className="menu-card-flexbox">
        <img className="menu-card-img" src={dish.url} />
        <div className="menu-card-content">
          <p className="menu-card-heading">{dish.title}</p>
          {dish.desc}
          <div className="menu-price-flexbox">
            <p className="menu-card-price"> ₹ {dish.price}/-</p>
            <div className="menu-card-btn-input">
              <input
                ref={Inputelement}
                className="menu-card-input"
                id={dish.id}
                placeholder={Inputelement ? count : "0"}
              />
              <button
                key={dish.id}
                className="menu-card-button"
                style={{ backgroundColor: "green" }}
                onClick={
                  Addtocart}
               
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
