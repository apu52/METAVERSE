import React from "react";
import "./Testimonial.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//Images
import Michael from "./Images/Testimonials/Michael.jpg";
import Sarah from "./Images/Testimonials/Sarah.jpg";
import Emily from "./Images/Testimonials/Emily.png";
import David from "./Images/Testimonials/David.png";
import Jason from "./Images/Testimonials/Jason.png";
import Jessica from "./Images/Testimonials/Jessica.png";



function Testimonial() {
  const Slides = [
    {
      url: Michael,
      content:
        "The dining experience at Taste Heaven is exceptional. The ambiance is inviting, the service is top-notch, and the food is simply delicious. A perfect place to enjoy a memorable meal.",
      name: "Michael",
    },
    {
      url: Sarah,
      content:
        "The online delivery service from Taste Heaven is a game-changer! The food arrives fresh, hot, and packed with flavors. It's like having a restaurant experience right at home.",
      name: "Sarah",
    },
    {
      url: Emily,
      content:
        "I love the convenience of the takeaway service at Taste Heaven. Whenever I'm in a rush, I can count on them to prepare my favorite dishes quickly without compromising on taste.",
      name: "Emily",
    },
    {
      url: David,
      content:
        "Taste Heaven provides an outstanding online delivery service. The food always arrives on time and the packaging is impeccable. It's my favorite choice for a cozy night in with delicious cuisine.",
      name: "David",
    },
    {
      url: Jason,
      content:
        "Taste Heaven's online ordering system is so convenient. I can easily browse the menu, customize my order, and have it delivered to my doorstep hassle-free. It's my go-to for a satisfying and effortless dining experience.",
      name: "Jason",
    },
    {
      url: Jessica,
      content:
        "The takeaway option from Taste Heaven is a lifesaver. The packaging is well-done, ensuring that the food stays fresh and flavorsome. It's perfect for enjoying a restaurant-quality meal on the go.",
      name: "Jessica",
    },
  ];
  return (
    <div id="testimonial">
      <p className="testimonial-heading">What People are Saying?</p>
    
      {/* <Imageslider Slides={Slides} /> */}
      <Carousel autoPlay={true} interval={2500} showStatus={false} infiniteLoop={true} stopOnHover={true}>
      {Slides.map((user)=>{
        return(
          <div className="testimonial-flexbox">
      <div className="testimonial-card">
        {/* <img className="testimonial-img" src={user.url} /> */}
        <div className="testimonial-overlap-card">
          <p className="testimonial-content">
            {user.content}
            <br></br>{" "}
            <span className="testimonial-user"> ~ {user.name}</span>
          </p>
        </div>
      </div>
    </div>
        );
      })}
    
</Carousel>
    </div>
  );
}

export default Testimonial;
