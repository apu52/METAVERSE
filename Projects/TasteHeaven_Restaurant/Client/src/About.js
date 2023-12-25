import React,{useRef} from 'react'
import "./About.css"
import Img1 from "./Images/yangskitchen_02.png"
import Img2 from "./Images/Blog-10-1030x538.jpg"
import Chef from "./Images/undraw_chef_cu-0-r (1).svg"
function About() {
  const about=useRef(null);
  return (
    <div id="about">
    <p className='Aboutheader'>About</p>
    <div ref={about} className='About'>
    
    <img className="img2" src={Img2} alt="foodImage"/>
       
    <div className='aboutright'>
    <img className="img1" src={Img1} alt="restaurantImage"/>
    </div>
    </div>
   
    <div className='aboutsvg-content' >
    <img className='aboutsvg' src={Chef} alt="chefImage" />
    <div className='aboutcontent'>
    Experience the perfect fusion of Indian and Western cuisine at Taste Heaven. From traditional Indian delicacies to mouthwatering Western favorites, our restaurant offers a diverse menu to satisfy every craving. Enjoy our warm hospitality and impeccable service, whether you choose to dine in or take away.
    </div>
    </div>
    
    </div>
   

  )
 
}

export default About