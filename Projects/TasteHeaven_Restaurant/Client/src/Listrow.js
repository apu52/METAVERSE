import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Listrow.css";
// import img from "./Images/Menu/Manchurian.jpg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Listrow({id,title,url,quantity,price,total}) {
  const Inputelement = useRef(null);
  
// console.log(data);
const { email} = JSON.parse(localStorage.getItem("Data"));
  const Add = async () => {
    // console.log(food);
   
    const name = JSON.parse(localStorage.getItem("naam"));
    // console.log(dish);
   

    // console.log(Inputelement.current);
    // Inputelement.current.value = count;
    

 

 
      try {
        const res = await fetch(`https://localhost:5000/api/add-to-cart?email=${email}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({id,title,url,quantity,price}),
        });
        const resnew = await res.json();
        if (resnew.message == "new-user-first-item") {
          toast.success(
            `Welcome to Heaven! 1 ${resnew.title} added to your cart`
          );
          window.location.reload();
          window.scrollTo(0,0)
        } else if (resnew.message == "new-food-added") {
         
          window.location.reload();
          window.scrollTo(0,0)
          toast.success(`1 ${resnew.title} added to your cart`);
        } else if (resnew.message == "quantity-increased") {
           let listrowheader=document.getElementsByClassName('listrow-head-flexbox')
          window.location.reload();
          window.scrollTo({
            top: listrowheader.offsetTop,
          })
          toast.success(`${resnew.quantity} ${resnew.title} in your cart`);
        }
      } catch (err) {
        toast.error(err);
        throw new Error(err);
      }
    
  };
  const decrease= async()=>{
    const res= await fetch(`https://localhost:5000/api/remove-from-cart?email=${email}`,{
      method: "PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({id:id})
    })
    const resnew=await res.json();
    if(resnew=="Food quantity decreased"||resnew=="Food item removed")
    {
      let listrowheader=document.getElementsByClassName('listrow-head-flexbox')
      window.location.reload();
      window.scrollTo({
        top: listrowheader.offsetTop,
      })
      toast.success('removed ');
    }

  }

  return (
    <div className="listrow-head-flexbox">
      <div className="listrow">
        <div className="listrow-col1">{id}</div>
        <div className="listrow-col2">
          <img className="listrow-img" src={url}></img>
          <p className="listrow-content">{title}</p>
        </div>
        <div className="listrow-col3">
          <button className="listrow-add-btn" onClick={Add}>
            +
          </button>
          <input
            ref={Inputelement}
            className="listrow-input"
            value={quantity}
          />
          <button className="listrow-sub-btn" onClick={decrease}>
            -
          </button>
        </div>
        <div className="listrow-col4">₹{price}</div>
        <div className="listrow-col5">₹{total}</div>
      </div>
    </div>
  );

}
export default Listrow;
