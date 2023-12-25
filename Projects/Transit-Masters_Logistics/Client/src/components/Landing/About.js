import React,{useRef} from 'react'
import "./About.css"
import Img2 from "../Images/store.webp"
import Img1 from "../Images/logistic.avif"
import Man from "../Images/man.svg"
function About() {
  const about=useRef(null);
  return (
    <div id="about">
    <p className='Aboutheader'>What We Do?</p>
    <div ref={about} className='About'>
    
    <img className="img2" src={Img2} alt="foodImage"/>
       
    <div className='aboutright'>
    <img className="img1" src={Img1} alt="restaurantImage"/>
    </div>
    </div>
   
    <div className='aboutsvg-content' >
    <img className='aboutsvg' src={Man} alt="chefImage" />
    <div className='aboutcontent'>
    Discover the seamless blend of logistics excellence at <span style={{"color":"#1AACAC","fontWeight":"600"}}>Transit-Masters</span>. From optimizing the movement of goods to delivering on promises, our company offers a comprehensive suite of services designed to meet your unique needs.
    </div>
    </div>
    
    </div>
   

  )
 
}

export default About