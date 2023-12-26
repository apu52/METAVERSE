import React from "react";
import "./Services.css";
import Dining from "./Images/Dining.svg";
import Delivery from "./Images/Delivery.svg";
import Online from "./Images/Onlineorder.svg";
function Services() {
  return (
    <div id="services">
      <p className="services-header">Services</p>
      <div className="services-content-img">
        <div className="services-card">
          <p className="services-card-header">Dining</p>
          <img className="services-card-img" src={Dining} />
          <p>
            <ul className="servicesul">
              <li>Unforgettable dining experience.</li>
              <li>Delectable menu, finest ingredients.</li>{" "}
              <li>Warm atmosphere, attentive staff. </li>{" "}
              <li>Perfect blend of flavors, impeccable hospitality.</li>
            </ul>
          </p>
        </div>
        <div className="services-card">
          <p className="services-card-header">Take-Away</p>
          <img className="services-card-img" src={Delivery} />

          <p>
            <ul className="servicesul">
              <li> Convenient takeaway and delivery.</li>
              <li> Enjoy our delicious menu at home. </li>{" "}
              <li> Prompt delivery for a delightful culinary experience. </li>{" "}
              <li>Taste the flavors of our restaurant wherever you are.</li>
            </ul>
          </p>
        </div>
        <div className="services-card">
          <p className="services-card-header">Online</p>
          <img className="services-card-img online" src={Online} />
          <p>
            <ul className="servicesul">
              <li>Satisfy your cravings with our easy online ordering. </li>
              <li>
                Explore our delectable menu<br></br>and place your order
                seamlessly.{" "}
              </li>{" "}
              <li>
                Enjoy the delicious food<br></br> delivered right to your
                doorstep.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
