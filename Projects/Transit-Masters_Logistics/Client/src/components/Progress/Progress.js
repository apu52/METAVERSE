import React,{useRef, useState,useEffect} from 'react'
import './Progress.css'
function Progress({status}) {
    const circles = document.querySelectorAll(".circle"),
    progressBar = document.querySelector(".indicator"),
    buttons = document.querySelectorAll("button");
//   const [check,setCheck] =useState(false);


// console.log(status)
  
  // console.log(progressBar.style.width)
  
  // function that updates the current step and updates the DOM
  const updateSteps = (e) => {
    // update current step based on the button clicked
   
  
    // loop through all circles and add/remove "active" class based on their index and current step
    circles.forEach((circle, index) => {
      circle.classList[`${index < status+1 ? "add" : "remove"}`]("active");
    });
  
    // update progress bar width based on current step
    if(progressBar) progressBar.style.width = `${((status) / (circles.length - 1)) * 100}%`;
   
  
    // check if current step is last step or first step and disable corresponding buttons
    // console.log(nex.current.disabled);
   
  };
  setTimeout(updateSteps,500)
  // updateSteps();
  // add click event listeners to all buttons
  
  return (
    <div className='body1'>
      <div class="container">
      <div class="steps">
        <span class="circle active">Placed</span>
        <span class="circle">Shipped</span>
        <span class="circle">Out for Delivery</span>
        <span class="circle">Delivered</span>
        <div class="progress-bar">
          <span class="indicator"></span>
        </div>
      </div>
      {/* <div class="buttons">
        <button id="prev" ref={pre}  disabled>Prev</button>
        <button id="next" ref={nex} >Next</button>
      </div> */}
    </div>
    </div>
  )
}

export default Progress
