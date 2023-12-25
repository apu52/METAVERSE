import React from "react";
import "./Services.css";
import transport from '../Images/Gif/Transport.gif'
import warehouse from '../Images/Gif/store.svg'
import costEffecient from '../Images/Gif/money.svg'
// import Dining from "../Images/Dining.svg";
// import Delivery from "../Images/Delivery.svg";
// import Online from "../Images/Onlineorder.svg";
function Services() {
  return (
    <div id="services">
      <p className="services-header">Services</p>
      <div className="services-content-img">
        <div className="services-card">
          <p className="services-card-header">Transportation</p>
          <img className="services-card-img" src={transport} />
          <p>
            <ul className="servicesul">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>{" "}
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>{" "}
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </p>
        </div>
        <div className="services-card">
          <p className="services-card-header">Inventory</p>
          <img className="services-card-img" src={warehouse} />

          <p>
            <ul className="servicesul">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>{" "}
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>{" "}
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </p>
        </div>
        <div className="services-card">
          <p className="services-card-header">Budget Friendly</p>
          <img className="services-card-img online" src={costEffecient} />
          <p>
            <ul className="servicesul">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
              <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </li>{" "}
              <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
